import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * NetworkGraph3D — animated 3D agent network.
 * Uses CSS variables --primary and --accent so it adapts to every theme.
 */

function hslStringToColor(s: string, fallback: string): THREE.Color {
  // Expects "H S% L%" (CSS variable form)
  const m = s.trim().match(/^(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%$/);
  if (!m) return new THREE.Color(fallback);
  const c = new THREE.Color();
  c.setHSL(parseFloat(m[1]) / 360, parseFloat(m[2]) / 100, parseFloat(m[3]) / 100);
  return c;
}

function getThemeColors(): { primary: THREE.Color; accent: THREE.Color } {
  if (typeof window === "undefined") {
    return { primary: new THREE.Color("#5dd4a6"), accent: new THREE.Color("#f0b06a") };
  }
  const styles = getComputedStyle(document.documentElement);
  const p = styles.getPropertyValue("--primary");
  const a = styles.getPropertyValue("--accent");
  return {
    primary: hslStringToColor(p, "#5dd4a6"),
    accent: hslStringToColor(a, "#f0b06a"),
  };
}

function Nodes({ count = 22 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const colors = useMemo(() => getThemeColors(), []);

  const nodes = useMemo(() => {
    return Array.from({ length: count }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4
      ),
      speed: 0.3 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
      size: 0.06 + Math.random() * 0.08,
    }));
  }, [count]);

  const edges = useMemo(() => {
    const list: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = nodes[i].pos.distanceTo(nodes[j].pos);
        if (d < 2.4) list.push([i, j]);
      }
    }
    return list;
  }, [nodes]);

  const lineRef = useRef<THREE.LineSegments>(null);
  const lineGeo = useMemo(() => new THREE.BufferGeometry(), []);
  const positions = useMemo(() => new Float32Array(edges.length * 6), [edges]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.3;
      groupRef.current.rotation.x = Math.cos(t * 0.08) * 0.15;
    }
    // animate node positions slightly
    nodes.forEach((n, i) => {
      const child = groupRef.current?.children[i] as THREE.Mesh | undefined;
      if (!child) return;
      child.position.x = n.pos.x + Math.sin(t * n.speed + n.offset) * 0.3;
      child.position.y = n.pos.y + Math.cos(t * n.speed + n.offset) * 0.25;
      child.position.z = n.pos.z + Math.sin(t * n.speed * 0.5) * 0.2;
    });
    // update edges
    edges.forEach(([a, b], idx) => {
      const ca = groupRef.current?.children[a] as THREE.Mesh | undefined;
      const cb = groupRef.current?.children[b] as THREE.Mesh | undefined;
      if (!ca || !cb) return;
      positions[idx * 6 + 0] = ca.position.x;
      positions[idx * 6 + 1] = ca.position.y;
      positions[idx * 6 + 2] = ca.position.z;
      positions[idx * 6 + 3] = cb.position.x;
      positions[idx * 6 + 4] = cb.position.y;
      positions[idx * 6 + 5] = cb.position.z;
    });
    if (lineRef.current) {
      lineGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      lineGeo.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {nodes.map((n, i) => (
          <mesh key={i} position={n.pos}>
            <sphereGeometry args={[n.size, 16, 16]} />
            <meshBasicMaterial color={i % 3 === 0 ? colors.accent : colors.primary} />
          </mesh>
        ))}
      </group>
      <lineSegments ref={lineRef} geometry={lineGeo}>
        <lineBasicMaterial color={colors.primary} transparent opacity={0.18} />
      </lineSegments>
    </>
  );
}

export default function NetworkGraph3D({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 6.5], fov: 50 }} dpr={[1, 1.5]}>
          <Nodes />
        </Canvas>
      </Suspense>
    </div>
  );
}
