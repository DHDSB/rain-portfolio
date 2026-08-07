import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import ArticleTableOfContents from "../components/ArticleTableOfContents.jsx";
import ContentImage from "../components/ContentImage.jsx";
import ReadingProgress from "../components/ReadingProgress.jsx";
import { allContentItems } from "../data/allContent.js";
import { calculateReadingTime } from "../utils/readingTime.js";
import PrintArticleButton from "../components/PrintArticleButton.jsx";
export default function ContentDetailPage() {
  const { id } = useParams();

  const item = allContentItems.find(
    (contentItem) => contentItem.id === id
  );

  if (!item) {
    return (
      <main className="mx-auto min-h-[70vh] max-w-3xl px-5 py-20">
        <h1 className="text-5xl font-semibold">内容不存在</h1>

        <Link
          to="/"
          className="mt-8 inline-flex h-12 w-32 items-center justify-center rounded-full bg-[#18211d] font-medium !text-white"
        >
          返回首页
        </Link>
      </main>
    );
  }

  const tags = item.tags ?? [];
  const readingMinutes = calculateReadingTime(
    item.body ?? item.description ?? ""
  );
  const backPath = item.category === "作品" ? "/works" : "/writing";
  const backText = item.category === "作品" ? "返回作品" : "返回内容";

  return (
    <>
      <ReadingProgress />

      <main className="mx-auto min-h-[70vh] max-w-3xl px-5 py-20">
        <Link
          to={backPath}
          className="inline-flex items-center text-sm text-black/55 transition hover:text-[#d76444] print:hidden"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {backText}
        </Link>

        <div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-black/45">
          <span className="uppercase tracking-[0.22em]">{item.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={item.date}>{item.date}</time>
          <span aria-hidden="true">·</span>
          <span>预计阅读 {readingMinutes} 分钟</span>
        </div>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight">
          {item.title}
        </h1>

        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black/5 px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-8 print:hidden">
          <PrintArticleButton />
        </div>

        <ContentImage
          source={item.cover}
          alt={item.title}
          loading="eager"
          className="mt-10 aspect-[16/9] w-full rounded-[1.75rem] object-cover"
        />

        {item.description && (
          <p className="mt-8 text-xl leading-9 text-black/65">
            {item.description}
          </p>
        )}

        {item.body && (
          <div className="mt-10">
            <ArticleTableOfContents content={item.body} />

            <article className="text-lg leading-8 text-black/65">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
                components={{
                  table: ({ children }) => (
                    <div className="my-8 overflow-x-auto">
                      <table className="w-full border-collapse text-left text-base">
                        {children}
                      </table>
                    </div>
                  ),
                  th: ({ children }) => (
                    <th className="border border-black/15 bg-black/5 px-4 py-3 font-semibold text-[#18211d]">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-black/15 px-4 py-3">
                      {children}
                    </td>
                  ),
                  h2: ({ children, ...props }) => (
                    <h2
                      {...props}
                      className="scroll-mt-24 mb-4 mt-10 text-3xl font-semibold text-[#18211d]"
                    >
                      {children}
                    </h2>
                  ),
                  h3: ({ children, ...props }) => (
                    <h3
                      {...props}
                      className="scroll-mt-24 mb-3 mt-8 text-2xl font-semibold text-[#18211d]"
                    >
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => <p className="my-5">{children}</p>,
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
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#d76444] underline decoration-[#d76444]/40 underline-offset-4 transition hover:decoration-[#d76444]"
                    >
                      {children}
                    </a>
                  ),
                  code: ({ className, children }) => {
                    const isCodeBlock = Boolean(className);

                    if (isCodeBlock) {
                      return (
                        <code className="block overflow-x-auto rounded-2xl bg-[#18211d] p-5 font-mono text-sm leading-7 text-[#f5f3ee]">
                          {children}
                        </code>
                      );
                    }

                    return (
                      <code className="rounded bg-black/5 px-1.5 py-1 font-mono text-sm text-[#18211d]">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="my-8 overflow-hidden rounded-2xl">
                      {children}
                    </pre>
                  ),
                  img: ({ src, alt }) => (
                    <ContentImage
                      source={src}
                      alt={alt ?? ""}
                      loading="lazy"
                      className="my-8 w-full rounded-2xl object-cover"
                    />
                  ),
                }}
              >
                {item.body}
              </ReactMarkdown>
            </article>
          </div>
        )}
      </main>
    </>
  );
}
