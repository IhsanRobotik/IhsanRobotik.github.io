import { socials, site } from "@/data/config";

export default function Contact() {
  return (
    <section id="contact" className="panel">
      <p className="panel-kicker reveal">Say Hello</p>
      <h2 className="reveal font-display uppercase leading-[0.75] tracking-[-0.03em] text-[clamp(80px,13vw,220px)]">
        Contact <span className="text-[#6bb9ff]">Me</span>
      </h2>

      <div className="reveal grid sm:grid-cols-2 gap-px bg-white/[0.13] border border-white/[0.13] mt-[30px] max-w-3xl">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ihsanfadilah980@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#11151a] p-[22px] transition-colors hover:bg-[#151c23]"
        >
          <span className="block text-[8px] tracking-[0.15em] uppercase text-[#6bb9ff] mb-[9px]">Email</span>
          <strong className="text-[13px] break-all">{site.email}</strong>
        </a>
        <div className="bg-[#11151a] p-[22px]">
          <span className="block text-[8px] tracking-[0.15em] uppercase text-[#6bb9ff] mb-[9px]">Location</span>
          <strong className="text-[13px]">{site.location}</strong>
        </div>
        {socials.slice(0, 2).map(({ name, href, Icon }, i) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-[#11151a] p-[22px] transition-colors hover:bg-[#151c23]"
          >
            <span className={`block text-[8px] tracking-[0.15em] uppercase mb-[9px] text-[#6bb9ff]`}>{name}</span>
            <strong className="text-[13px] inline-flex items-center gap-2">
              <Icon className="h-4 w-4" /> Open {name} ↗
            </strong>
          </a>
        ))}
      </div>

      <div className="reveal mt-7 border-t border-white/[0.13] pt-[15px] flex gap-[18px] items-center uppercase max-w-3xl">
        <span className="text-[8px] tracking-[0.2em] text-[#7b858f]">Built Today</span>
        <strong className="text-[10px] tracking-[0.18em]">For A Smarter Tomorrow</strong>
      </div>

      <div className="section-count" aria-hidden="true"><span>05</span><small>/ 05</small></div>
    </section>
  );
}
