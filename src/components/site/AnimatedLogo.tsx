import { useEffect, useRef } from 'react';

export default function AnimatedLogo() {
  const dividerRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const easeInCubic = (t: number) => t * t * t;
    const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    const easeInQuart = (t: number) => t * t * t * t;
    const CYCLE = 8000;

    const setTime = (absoluteT: number) => {
      const t = absoluteT % CYCLE;
      const divider = dividerRef.current;
      const textLeft = textLeftRef.current;
      const textRight = textRightRef.current;
      const glow = glowRef.current;
      const shimmer = shimmerRef.current;
      if (!divider || !textLeft || !textRight || !glow || !shimmer) return;

      let dividerScale = 0;
      let dividerOpacity = 0;
      if (t < 200) {
        dividerScale = 0;
        dividerOpacity = 0;
      } else if (t < 1300) {
        const p = easeOutCubic((t - 200) / 1100);
        dividerScale = p;
        dividerOpacity = Math.min(1, p * 1.5);
      } else if (t < 5900) {
        dividerScale = 1;
        dividerOpacity = 1;
      } else if (t < 7000) {
        const p = easeInCubic((t - 5900) / 1100);
        dividerScale = 1 - p;
        dividerOpacity = 1 - p;
      } else {
        dividerScale = 0;
        dividerOpacity = 0;
      }

      let beatScale = 1;
      if (t >= 3000 && t < 3800) {
        const p = (t - 3000) / 800;
        const b = p < 0.3 ? easeOutCubic(p / 0.3) : 1 - easeOutCubic((p - 0.3) / 0.7);
        beatScale = 1 + b * 0.04;
      }

      divider.style.transform = `translate(-50%, -50%) scaleY(${dividerScale * beatScale})`;
      divider.style.opacity = String(dividerOpacity);

      let leftPos = 100;
      let rightPos = -100;
      if (t < 1300) {
        leftPos = 100;
        rightPos = -100;
      } else if (t < 2400) {
        const p = easeOutQuart((t - 1300) / 1100);
        leftPos = 100 * (1 - p);
        rightPos = -100 * (1 - p);
      } else if (t < 4800) {
        leftPos = 0;
        rightPos = 0;
      } else if (t < 5900) {
        const p = easeInQuart((t - 4800) / 1100);
        leftPos = 100 * p;
        rightPos = -100 * p;
      } else {
        leftPos = 100;
        rightPos = -100;
      }

      textLeft.style.transform = `translate(${leftPos}%, -50%) scale(${beatScale})`;
      textLeft.style.transformOrigin = 'right center';
      textRight.style.transform = `translate(${rightPos}%, -50%) scale(${beatScale})`;
      textRight.style.transformOrigin = 'left center';

      let glowOp = 0;
      if (t >= 2400 && t < 2800) glowOp = (t - 2400) / 400;
      else if (t >= 2800 && t < 4800) glowOp = 1;
      else if (t >= 4800 && t < 5200) glowOp = 1 - (t - 4800) / 400;
      glow.style.opacity = String(glowOp);

      let shimOp = 0;
      let shimPos = -100;
      if (t >= 2900 && t < 4400) {
        const p = easeInOutSine((t - 2900) / 1500);
        shimPos = -100 + p * 300;
        if (p < 0.15) shimOp = easeInOutSine(p / 0.15) * 0.95;
        else if (p > 0.8) shimOp = easeInOutSine((1 - p) / 0.2) * 0.95;
        else shimOp = 0.95;
      }
      shimmer.style.opacity = String(shimOp);
      shimmer.style.backgroundPosition = `${shimPos}% 0`;
    };

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      setTime(elapsed);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="logo-stage">
      <div ref={glowRef} className="logo-glow" />
      <div className="text-left-mask">
        <div ref={textLeftRef} className="text-left">Shaked</div>
      </div>
      <div ref={dividerRef} className="divider" />
      <div className="text-right-mask">
        <div ref={textRightRef} className="text-right" dir="ltr">
          <span className="ai">AI</span>
          <span className="studio">Studio</span>
        </div>
      </div>
      <div ref={shimmerRef} className="shimmer" />
      <style>{`
        .logo-stage {
          width: 100%;
          max-width: 100vw;
          height: 100%;
          min-height: clamp(420px, 70vh, 600px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          position: relative;
          overflow: hidden;
        }
        .divider {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(5px, 1.2vw, 8px);
          height: clamp(50px, 12vw, 130px);
          background: linear-gradient(180deg, #1a1a1a 0%, #404040 50%, #1a1a1a 100%);
          border-radius: 4px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          opacity: 0;
          z-index: 10;
          transform: translate(-50%, -50%) scaleY(0);
          transform-origin: center center;
        }
        .text-left-mask {
          position: absolute;
          top: 50%;
          right: 50%;
          width: 50vw;
          max-width: 50vw;
          height: clamp(60px, 14vw, 140px);
          overflow: hidden;
          z-index: 5;
          transform: translateY(-50%);
          padding-right: 4px;
        }
        .text-left {
          position: absolute;
          top: 50%;
          right: 0;
          padding-right: clamp(10px, 3vw, 30px);
          display: flex;
          align-items: center;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: clamp(26px, 9vw, 70px);
          color: #1a1a1a;
          white-space: nowrap;
          transform: translate(100%, -50%);
          letter-spacing: -0.5px;
          height: clamp(60px, 14vw, 140px);
          text-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .text-right-mask {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50vw;
          max-width: 50vw;
          height: clamp(60px, 14vw, 140px);
          overflow: hidden;
          z-index: 5;
          transform: translateY(-50%);
          padding-left: 4px;
        }
        .text-right {
          position: absolute;
          top: 50%;
          left: 0;
          padding-left: clamp(10px, 3vw, 30px);
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          white-space: nowrap;
          transform: translate(-100%, -50%);
          letter-spacing: -0.5px;
          height: clamp(60px, 14vw, 140px);
        }
        .text-right .ai {
          font-weight: 900;
          font-size: clamp(36px, 12vw, 100px);
          color: #0066ff;
          text-shadow: 0 0 40px rgba(0, 102, 255, 0.3), 0 6px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
          line-height: 1;
        }
        .text-right .studio {
          font-weight: 800;
          font-size: clamp(36px, 12vw, 100px);
          color: #1a1a1a;
          line-height: 1;
          text-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 80%;
          pointer-events: none;
          background: radial-gradient(ellipse at center, rgba(0, 102, 255, 0.15) 0%, rgba(0, 102, 255, 0) 60%);
          opacity: 0;
          z-index: 1;
        }
        .shimmer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 4;
          opacity: 0;
          background: linear-gradient(115deg, transparent 30%, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.5) 45%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.5) 55%, rgba(255, 255, 255, 0) 62%, transparent 70%);
          background-size: 250% 100%;
          background-position: -100% 0;
          mix-blend-mode: screen;
        }
      `}</style>
    </div>
  );
}
