import { skills } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="panel rb-2">
      <SectionHeading eyebrow="Toolbox" title="Skills & Tools" />
      <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.13] border border-white/[0.13]">
        {skills.map(({ name, Icon }, i) => (
          <div
            key={name}
            className={`rb-${i % 7} group bg-[#11151a] p-5 min-h-[120px] flex flex-col justify-end gap-3 transition-colors hover:bg-[#151c23]`}
          >
            <Icon className="rb-text h-6 w-6 transition-transform group-hover:scale-125" />
            <strong className="font-display uppercase tracking-[0.02em] text-xl leading-none">{name}</strong>
            <small className="text-[#71808e] uppercase tracking-[0.12em] text-[7px]">
              Tool {String(i + 1).padStart(2, "0")}
            </small>
          </div>
        ))}
        <div className="rainbow-bg p-5 min-h-[120px] flex flex-col justify-end">
          <strong className="font-display uppercase text-xl leading-none text-white drop-shadow">+ Always<br />Learning</strong>
          <small className="text-white/85 uppercase tracking-[0.12em] text-[7px] mt-2">New tools welcome</small>
        </div>
      </div>
      <div className="section-count" aria-hidden="true"><span>03</span><small>/ 05</small></div>
    </section>
  );
}
