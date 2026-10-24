import { ArrowDownToLine } from "lucide-react";
import { site, socials } from "@/data/config";
import PrideFlag from "./PrideFlag";

export default function Hero() {
  return (
    <section id="top" className="container-mono pt-24 pb-32 md:pt-36 md:pb-40">
      <p className="reveal inline-flex text-sm text-muted-foreground mb-6 items-center gap-2 rounded-full rainbow-border px-4 py-1.5">
        <span className="inline-block h-2 w-2 rounded-full rainbow-bg animate-pulse" />
        Available for work
      </p>
      <h1 className="reveal text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
        <span className="rainbow-text">{site.name}</span>
        <span className="block text-muted-foreground font-normal">
          {site.role}.
        </span>
      </h1>
      {/* 🌈 Strip pelangi di bawah judul */}
      <div className="reveal rainbow-bg h-2 w-56 max-w-full rounded-full mb-8" aria-hidden="true" />
      <p className="reveal max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
        {site.bio}
      </p>
      <div className="reveal flex flex-wrap items-center gap-3">
        <a
          href={site.cvUrl}
          download
          className="rainbow-bg inline-flex items-center gap-2 h-11 px-6 rounded-full text-sm font-semibold text-white shadow-lg shadow-rainbow-violet/30 hover:scale-[1.03] active:scale-95 transition-transform"
        >
          <ArrowDownToLine className="h-4 w-4" />
          Download CV
        </a>

        <div className="flex items-center gap-2">
          {socials.map(({ name, href, Icon }, i) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              target="_blank"
              rel="noreferrer noopener"
              className={`rb-${i % 7} h-10 w-10 inline-flex items-center justify-center rounded-full border rb-border rb-text rb-bg-soft hover:scale-110 transition-transform`}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* 🏳️‍🌈 Bendera Pelangi LGBT */}
      <div className="reveal mt-14 flex items-center gap-4">
        <PrideFlag className="w-24 sm:w-28 shrink-0 drop-shadow-lg" />
        <div>
          <p className="font-display font-semibold">
            <span aria-hidden="true">🏳️‍🌈 </span>
            <span className="rainbow-text">Pride</span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Bendera pelangi LGBT — merayakan keberagaman, inklusi, dan kebanggaan
            untuk menjadi diri sendiri.
          </p>
        </div>
      </div>
    </section>
  );
}
