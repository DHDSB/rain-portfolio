import PageHeader from "../components/PageHeader.jsx";
import ContentCard from "../components/ContentCard.jsx";
import { contentItems } from "../data/content.js";

export default function WritingPage() {
  const writingItems = contentItems.filter(
    (item) =>
      item.category === "文章" ||
      item.category === "记录"
  );

  return (
    <main className="min-h-[70vh]">
      <section className="mx-auto max-w-6xl px-5 py-20">
        <PageHeader
          eyebrow="Writing"
          title="内容"
          description="这里展示文章、笔记、想法和其他记录。"
        />
      </section>

      <section className="bg-[#1d2923] px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          {writingItems.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {writingItems.map((item) => (
                <ContentCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-white/10 p-6 text-white/60">
              暂时还没有内容。
            </p>
          )}
        </div>
      </section>
    </main>
  );
}