import { site, socials } from "@/data/config";

export default function Hero() {
  return (
    <section id="home" className="panel">
      <div className="edge-note edge-note-left" aria-hidden="true">
        <span>ROBOTICS</span><span>DESIGN</span><span>BUILD</span><span>PROGRAM</span><span>FOR A BETTER</span><span>TOMORROW</span>
        <i />
      </div>
      <div className="edge-note edge-note-right" aria-hidden="true">
        <span>MECHANICAL</span><span>ELECTRONICS</span><span>SOFTWARE</span><i />
      </div>

      <div className="ghost-word" aria-hidden="true">Portfolio</div>

      <div className="relative z-[3]">
        <p className="panel-kicker reveal flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-[#6bb9ff] animate-pulse" />
          Professional Portfolio — Available for work
        </p>
        <h1 className="reveal">
          <span className="block font-display uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(38px,5vw,86px)]">
            {site.name}
          </span>
          <span className="block font-display uppercase text-[#f0f0ed] leading-[0.75] tracking-[-0.045em] text-[clamp(96px,15vw,270px)] mt-2.5">
            Portfolio
          </span>
        </h1>

        <div className="reveal mt-8 border-y border-white/[0.13] py-[15px] flex items-center gap-4 flex-wrap uppercase text-[9px] tracking-[0.17em] text-[#c3c8cd]">
          <span>Robotics Engineering</span><b className="w-px h-3.5 bg-[#6bb9ff]" />
          <span>CAD Design</span><b className="w-px h-3.5 bg-[#6bb9ff]" />
          <span>Embedded Systems</span><b className="w-px h-3.5 bg-[#6bb9ff]" />
          <span>Mechanical + Software</span><b className="w-px h-3.5 bg-[#6bb9ff]" />
        </div>

        <div className="reveal flex flex-wrap justify-between gap-6 items-end mt-10">
          <div className="flex gap-[18px] items-start text-[10px] tracking-[0.25em] leading-relaxed text-[#c2c7cb]">
            <i className="block w-[58px] h-[2px] mt-[5px] bg-[#6bb9ff]" />
            <span>DESIGN<br />BUILD<br /><strong className="text-white">REAL ROBOTS</strong></span>
          </div>
          <div className="flex gap-2.5 flex-wrap items-center">
            <a href="#projects" className="btn-algaz btn-algaz-primary">View Projects</a>
            <a href={site.cvUrl} download className="btn-algaz">Download CV</a>
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noreferrer noopener"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/[0.13] text-[#b9c0c8] hover:text-[#6bb9ff] hover:border-[#6bb9ff] transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-count" aria-hidden="true"><span>01</span><small>/ 05</small></div>
    </section>
  );
}
