import { ArrowUpRight, BookOpen, Code2, ExternalLink, Play, Ruler } from "lucide-react";
import { projects } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="container-mono py-24 md:py-32">
      <SectionHeading eyebrow=" " title="Recent Works" />
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="reveal flex flex-col rounded-lg border border-border bg-card overflow-hidden"
          >
            {(p.video || p.image) && (
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {p.video ? (
                  /(?:youtube\.com\/embed\/|youtu\.be\/)/i.test(p.video) ? (
                    <iframe
                      className="h-full w-full"
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
                      className="h-full w-full object-cover"
                      src={p.video}
                      poster={p.poster}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={`${p.title} project video`}
                    />
                  )
                ) : p.image && (
                  <img
                    className="h-full w-full object-contain"
                    src={p.image.src}
                    alt={p.image.alt}
                    loading="lazy"
                  />
                )}
              </div>
            )}
            <div className="flex flex-col flex-1 p-5">
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-sm">
                {p.links.map(({ label, href, type }) => {
                  const Icon = type === "video" ? Play : type === "design" ? Ruler : type === "docs" ? BookOpen : type === "code" ? Code2 : ExternalLink;
                  return (
                    <a key={label} href={href} target="_blank" rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground">
                      <Icon className="h-3.5 w-3.5" /> {label}
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
