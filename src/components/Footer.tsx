import { site } from "@/data/config";
import PrideFlag from "./PrideFlag";

export default function Footer() {
  return (
    <footer>
      <div className="hairline" aria-hidden="true" />
      <div className="container-mono py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="rainbow-text font-semibold">{site.name}</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-3"><span className="text-xs text-muted-foreground">🏳️‍🌈 Pride</span><PrideFlag className="w-14" /></div>
      </div>
    </footer>
  );
}
