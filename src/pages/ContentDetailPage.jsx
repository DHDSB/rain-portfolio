import {
  Link,
  useParams,
} from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { contentItems } from "../data/content.js";

export default function ContentDetailPage() {
  const { id } = useParams();

  const item = contentItems.find(
    (contentItem) => contentItem.id === id
  );

  if (!item) {
    return (
      <main className="mx-auto min-h-[70vh] max-w-3xl px-5 py-20">
        <h1 className="text-5xl font-semibold">
          内容不存在
        </h1>

        <Link
          to="/"
          className="mt-8 inline-flex h-12 w-32 items-center justify-center rounded-full bg-[#18211d] font-medium !text-white"
        >
          返回首页
        </Link>
      </main>
    );
  }

  const backPath =
    item.category === "作品"
      ? "/works"
      : "/writing";

  const backText =
    item.category === "作品"
      ? "返回作品"
      : "返回内容";

  return (
    <main className="mx-auto min-h-[70vh] max-w-3xl px-5 py-20">
      <Link
        to={backPath}
        className="inline-flex items-center text-sm text-black/55 transition hover:text-[#d76444]"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {backText}
      </Link>

      <p className="mt-12 text-sm uppercase tracking-[0.22em] text-black/45">
        {item.category}
      </p>

      <h1 className="mt-3 text-5xl font-semibold tracking-tight">
        {item.title}
      </h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-black/5 px-3 py-1 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-10 text-lg leading-8 text-black/65">
        {item.description}
      </p>
    </main>
  );
}