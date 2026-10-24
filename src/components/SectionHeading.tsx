type Props = { eyebrow: string; title: string; description?: string };

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="reveal mb-10">
      <p className="panel-kicker">{eyebrow}</p>
      <h2 className="display-title">{title}</h2>
      <div className="accent-rule" />
      {description && <p className="text-muted-foreground leading-relaxed max-w-2xl">{description}</p>}
    </div>
  );
}
