import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { allContentItems } from "../data/allContent.js";

export default function ContentDetailPage() {
  const { id } = useParams();

  const item = allContentItems.find(
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

      <div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-black/45">
        <span className="uppercase tracking-[0.22em]">
          {item.category}
        </span>

        <span aria-hidden="true">·</span>

        <time dateTime={item.date}>
          {item.date}
        </time>
      </div>

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

      {item.body ? (
        <article className="mt-10 text-lg leading-8 text-black/65">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="mb-4 mt-10 text-3xl font-semibold text-[#18211d]">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="mb-3 mt-8 text-2xl font-semibold text-[#18211d]">
                  {children}
                </h3>
              ),

              p: ({ children }) => (
                <p className="my-5">
                  {children}
                </p>
              ),

              ul: ({ children }) => (
                <ul className="my-5 list-disc space-y-2 pl-6">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="my-5 list-decimal space-y-2 pl-6">
                  {children}
                </ol>
              ),

              blockquote: ({ children }) => (
                <blockquote className="my-6 border-l-4 border-[#d76444] pl-5 text-black/55">
                  {children}
                </blockquote>
              ),

              code: ({ children }) => (
                <code className="rounded bg-black/5 px-1.5 py-1 font-mono text-sm text-[#18211d]">
                  {children}
                </code>
              ),
            }}
          >
            {item.body}
          </ReactMarkdown>
        </article>
      ) : (
        <div className="mt-10 space-y-6 text-lg leading-8 text-black/65">
          <p>{item.description}</p>

          {item.content?.map((paragraph, index) => (
            <p key={`${item.id}-${index}`}>
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </main>
  );
}