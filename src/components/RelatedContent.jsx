import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function getSharedTagCount(currentItem, candidateItem) {
  const currentTags = currentItem.tags ?? [];
  const candidateTags = candidateItem.tags ?? [];

  return candidateTags.filter((tag) =>
    currentTags.includes(tag)
  ).length;
}

function calculateRelatedScore(currentItem, candidateItem) {
  const sharedTagCount = getSharedTagCount(
    currentItem,
    candidateItem
  );

  const sameCategory =
    currentItem.category === candidateItem.category;

  return sharedTagCount * 2 + (sameCategory ? 1 : 0);
}

export default function RelatedContent({
  currentItem,
  allItems,
}) {
  const relatedItems = allItems
    .filter((item) => item.id !== currentItem.id)
    .map((item) => ({
      item,
      score: calculateRelatedScore(currentItem, item),
    }))
    .filter(({ score }) => score > 0)
    .sort((firstResult, secondResult) => {
      if (secondResult.score !== firstResult.score) {
        return secondResult.score - firstResult.score;
      }

      return (
        new Date(secondResult.item.date) -
        new Date(firstResult.item.date)
      );
    })
    .slice(0, 3)
    .map(({ item }) => item);

  if (relatedItems.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 border-t border-black/10 pt-12 print:hidden">
      <p className="text-sm uppercase tracking-[0.22em] text-black/40">
        Keep reading
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18211d]">
        相关内容
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {relatedItems.map((item) => (
          <Link
            key={item.id}
            to={`/content/${item.id}`}
            className="group flex min-h-52 flex-col rounded-2xl border border-black/10 bg-white/45 p-6 !text-[#18211d] transition hover:-translate-y-0.5 hover:border-[#d76444]/35 hover:bg-white"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-black/40">
              <span className="uppercase tracking-[0.18em]">
                {item.category}
              </span>

              <span aria-hidden="true">·</span>

              <time dateTime={item.date}>
                {item.date}
              </time>
            </div>

            <h3 className="mt-4 text-xl font-semibold leading-snug text-[#18211d]">
              {item.title}
            </h3>

            {item.description && (
              <p className="mt-3 line-clamp-3 leading-7 text-black/55">
                {item.description}
              </p>
            )}

            <span className="mt-auto inline-flex items-center pt-5 text-sm font-medium text-[#d76444]">
              继续阅读

              <ArrowUpRight className="ml-1.5 h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
