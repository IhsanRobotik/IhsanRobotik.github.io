type Props = { eyebrow: string; title: string; description?: string };

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className="rainbow-text text-xs font-bold uppercase tracking-[0.2em] mb-3">
        {eyebrow}
      </p>
      <h2 className="rainbow-underline inline-block text-3xl md:text-4xl font-semibold mb-5">{title}</h2>
      {description && <p className="text-muted-foreground leading-relaxed mt-2">{description}</p>}
    </div>
  );
}
