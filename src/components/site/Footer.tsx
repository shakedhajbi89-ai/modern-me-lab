export default function Footer() {
  return (
    <footer className="relative border-t border-black/[0.06] py-10 bg-white">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2.5" dir="ltr">
          <span className="font-display font-medium text-foreground">Shaked</span>
          <span
            className="inline-block"
            style={{ width: "2px", height: "14px", borderRadius: "999px", background: "#0066ff" }}
          />
          <span className="font-display"><span className="text-[#0066ff] font-black">AI</span><span className="font-extrabold text-foreground"> Studio</span></span>
        </div>
        <div>© {new Date().getFullYear()} שקד חג׳בי · נבנה בחיפה</div>
      </div>
    </footer>
  );
}
