import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ContentCard({ item }) {
  const ItemIcon = item.icon;

  return (
    <Link
      to={`/content/${item.id}`}
      className="group block rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 !text-white transition hover:-translate-y-1 hover:bg-white/[0.09]"
    >
      <article>
        <div className="flex items-center justify-between">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#d76444]">
            <ItemIcon className="h-5 w-5" />
          </div>

<div className="text-right text-xs text-white/40">
  <span className="block uppercase tracking-wider">
    {item.category}
  </span>

  <time
    dateTime={item.date}
    className="mt-1 block"
  >
    {item.date}
  </time>
</div>
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

        <div className="mt-7 inline-flex items-center text-sm text-white/70">
          查看详情
          <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </article>
    </Link>
  );
}