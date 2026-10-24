import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { nav, site } from "@/data/config";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border">
      {/* 🌈 Garis pelangi paling atas */}
      <div className="rainbow-bg h-1.5 w-full" aria-hidden="true" />
      <div className="container-mono flex h-16 items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-base">
          {site.name.split(" ")[0]}
          <span className="rainbow-text font-bold">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`rb-${i % 7} rb-hover font-medium transition-colors`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="rainbow-border h-9 w-9 inline-flex items-center justify-center rounded-md hover:scale-105 transition-transform"
        >
          {theme === "dark" ? <Sun className="h-4 w-4 text-rainbow-yellow" /> : <Moon className="h-4 w-4 text-rainbow-indigo" />}
        </button>
      </div>
    </header>
  );
}
