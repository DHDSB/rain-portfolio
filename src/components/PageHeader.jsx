export default function PageHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.22em] text-black/45">
        {eyebrow}
      </p>

      <h1 className="mt-3 text-5xl font-semibold tracking-tight">
        {title}
      </h1>

      {description && (
        <p className="mt-6 max-w-2xl leading-8 text-black/60">
          {description}
        </p>
      )}
    </div>
  );
}
