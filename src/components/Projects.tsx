import { ArrowUpRight, BookOpen, Code2, ExternalLink, Play, Ruler } from "lucide-react";
import { projects } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="panel rb-3">
      <SectionHeading
        eyebrow="Engineering Projects"
        title="Selected Projects"
        description="Recent works — robotics, mechanism, and embedded control."
      />
      <div className="grid lg:grid-cols-2 gap-3.5">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`reveal rb-${i % 7} rb-card grid sm:grid-cols-[1fr_1.08fr] border border-white/[0.13] bg-[#12161b]/80 overflow-hidden`}
          >
            <div className="relative p-[25px]">
              <span className="font-display text-[62px] leading-none text-white/[0.12] absolute right-4 top-3" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display uppercase leading-[0.95] text-[clamp(24px,2.2vw,36px)] mb-3 max-w-[86%]">{p.title}</h3>
              <p className="rb-text text-[7px] font-bold tracking-[0.12em] uppercase leading-[1.7] mb-3">
                {p.tags.join("  ·  ")}
              </p>
              <p className="text-[11px] leading-relaxed text-[#929ca5] mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px]">
                {p.links.map(({ label, href, type }) => {
                  const Icon = type === "video" ? Play : type === "design" ? Ruler : type === "docs" ? BookOpen : type === "code" ? Code2 : ExternalLink;
                  return (
                    <a key={label} href={href} target="_blank" rel="noreferrer noopener"
                      className="rb-text inline-flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-70">
                      <Icon className="h-3.5 w-3.5" /> {label}
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="relative min-h-[220px] border-t sm:border-t-0 sm:border-l border-white/[0.13] bg-gradient-to-br from-[#181d23] to-[#0d1014]">
              {p.video ? (
                /(?:youtube\.com\/embed\/|youtu\.be\/)/i.test(p.video) ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={p.video.replace(
                      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?&/]+)|(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?&/]+)/i,
                      (_match, shortId: string | undefined, embedId: string | undefined) =>
                        `https://www.youtube.com/embed/${shortId ?? embedId}`,
                    )}
                    title={`${p.title} project video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={p.video}
                    poster={p.poster}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={`${p.title} project video`}
                  />
                )
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#68727c]">
                  <span className="grid place-items-center w-[42px] h-[42px] border border-[#36414c] rounded-full rb-text text-2xl font-light">+</span>
                  <span className="text-[11px] font-extrabold tracking-[0.12em] uppercase">Project Media</span>
                  <span className="text-[8px] tracking-[0.08em]">Add a project video</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="section-count" aria-hidden="true"><span>04</span><small>/ 05</small></div>
    </section>
  );
}
