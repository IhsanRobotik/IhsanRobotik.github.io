import { about, site } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-mono py-24 md:py-32">
      <SectionHeading eyebrow="Bio" title="About" />
      <div className="grid md:grid-cols-3 gap-10">
        <div className="reveal md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <dl className="reveal space-y-4 text-sm">
          <div>
            <dt className="rb-0 rb-text font-semibold">Location</dt>
            <dd className="font-medium">{site.location}</dd>
          </div>
          <div>
            <dt className="rb-4 rb-text font-semibold">Email</dt>
            <dd className="font-medium">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ihsanfadilah980@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="rb-3 rb-text font-semibold">Status</dt>
            <dd className="font-medium">Open to opportunities</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
