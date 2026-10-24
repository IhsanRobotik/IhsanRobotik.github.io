import { useEffect, useState } from "react";
import { nav, site } from "@/data/config";

export default function Navbar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed left-0 right-0 top-0 h-[3px] z-[2000]" aria-hidden="true">
        <span className="block h-full bg-[#6bb9ff] shadow-[0_0_18px_#6bb9ff]" style={{ width: `${progress}%` }} />
      </div>

      <header className="fixed top-[3px] left-0 right-0 z-[1000] h-[72px] flex items-center gap-[30px] px-[clamp(22px,4vw,70px)] border-b border-white/10 bg-[#0b0d10]/85 backdrop-blur-[14px]">
        <a href="#home" className="flex items-center gap-2.5 font-black" aria-label="Back to top">
          <span className="text-[#6bb9ff] text-xl tracking-[-5px]">///</span>
          <span className="text-[22px] tracking-[0.03em]">Portfolio.</span>
        </a>

        <nav className="ml-auto hidden md:flex items-center gap-[26px]">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[11px] uppercase tracking-[0.18em] text-[#b9c0c8] transition-colors hover:text-white after:absolute after:left-0 after:bottom-[-7px] after:h-px after:w-0 after:bg-[#6bb9ff] after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.cvUrl}
            download
            className="rounded-full border border-[rgba(107,185,255,.35)] px-3 py-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#6bb9ff]"
          >
            CV ↓
          </a>
        </nav>

        <a
          href={site.cvUrl}
          download
          className="ml-auto md:ml-0 text-[10px] tracking-[0.14em] border border-white/[0.13] px-3 py-2.5 rounded-full hover:border-[#6bb9ff] hover:text-[#6bb9ff] transition-colors"
        >
          RESUME ↗
        </a>
      </header>
    </>
  );
}
