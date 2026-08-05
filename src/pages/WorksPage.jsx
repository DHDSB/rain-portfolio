import PageHeader from "../components/PageHeader.jsx";
import ContentCard from "../components/ContentCard.jsx";
import { contentItems } from "../data/content.js";

export default function WorksPage() {
const works = contentItems
  .filter((item) => item.category === "作品")
  .sort(
    (firstItem, secondItem) =>
      new Date(secondItem.date) -
      new Date(firstItem.date)
  );

  return (
    <main className="min-h-[70vh]">
      <section className="mx-auto max-w-6xl px-5 py-20">
        <PageHeader
          eyebrow="Works"
          title="作品"
          description="这里展示我选择公开分享的作品、项目和其他创作内容。"
        />
      </section>

      <section className="bg-[#1d2923] px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          {works.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {works.map((item) => (
                <ContentCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-white/10 p-6 text-white/60">
              暂时还没有作品内容。
            </p>
          )}
        </div>
      </section>
    </main>
  );
}