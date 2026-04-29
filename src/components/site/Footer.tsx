export default function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-brand text-primary-foreground font-display font-bold text-[10px]">SH</span>
          <span>© {new Date().getFullYear()} Shaked M. Hajbi · building.tools.that.ship</span>
        </div>
        <div className="mono text-[10px]">crafted with care · designed in Haifa</div>
      </div>
    </footer>
  );
}
