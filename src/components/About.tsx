import { about, site } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="panel rb-1">
      <SectionHeading eyebrow="Bio" title="About Me" />
      <div className="grid md:grid-cols-3 gap-10">
        <div className="reveal md:col-span-2 space-y-5 leading-relaxed">
          <p className="text-[#d7dadc] text-lg leading-relaxed">{about.paragraphs[0]}</p>
          {about.paragraphs.slice(1).map((p, i) => (
            <p key={i} className="text-[#aab1b8] text-sm leading-[1.75]">{p}</p>
          ))}
        </div>
        <div className="reveal">
          <div className="fact-grid !mt-0 md:!grid-cols-1">
            <div>
              <span>Location</span>
              <strong>{site.location}</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ihsanfadilah980@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 break-all"
                >
                  {site.email}
                </a>
              </strong>
            </div>
            <div>
              <span>Status</span>
              <strong>Open to opportunities</strong>
              <small>Robotics · Mechanical · Embedded</small>
            </div>
          </div>
        </div>
      </div>
      <div className="section-count" aria-hidden="true"><span>02</span><small>/ 05</small></div>
    </section>
  );
}
