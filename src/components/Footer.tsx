import { site } from "@/data/config";

export default function Footer() {
  return (
    <footer className="bg-[#0b0d10]">
      <div className="hairline" aria-hidden="true" />
      <div className="px-[clamp(22px,5vw,82px)] py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} <span className="font-semibold text-white">{site.name}</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
