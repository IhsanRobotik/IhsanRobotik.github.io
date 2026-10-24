import { skills } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="container-mono py-24 md:py-32">
      <SectionHeading eyebrow="Toolbox" title="Skills & tools" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {skills.map(({ name, Icon }, i) => (
          <div
            key={name}
            className={`reveal rb-${i % 7} group flex items-center gap-3 px-4 py-3 rounded-xl border rb-border rb-bg-soft transition-all hover:-translate-y-0.5`}
          >
            <Icon className="rb-text h-5 w-5 transition-transform group-hover:scale-125" />
            <span className="text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
