export default function ContentCard({ item }) {
  const ItemIcon = item.icon;

  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 transition hover:-translate-y-1 hover:bg-white/[0.09]">
      <div className="flex items-center justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#d76444]">
          <ItemIcon className="h-5 w-5" />
        </div>

        <span className="text-xs uppercase tracking-wider text-white/40">
          {item.category}
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-semibold">
        {item.title}
      </h3>

      <p className="mt-4 leading-7 text-white/60">
        {item.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
