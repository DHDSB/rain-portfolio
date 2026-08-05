export default function LatestItem({ item }) {
  return (
    <article className="grid gap-3 py-7 sm:grid-cols-[110px_1fr_auto] sm:items-center">
      <span className="font-mono text-sm text-black/40">
        {item.date}
      </span>

      <div>
        <h3 className="text-xl font-semibold">
          {item.title}
        </h3>

        <p className="mt-1 leading-7 text-black/55">
          {item.description}
        </p>
      </div>

      <span className="w-fit rounded-full bg-black/5 px-3 py-1 text-xs">
        {item.tag}
      </span>
    </article>
  );
}
