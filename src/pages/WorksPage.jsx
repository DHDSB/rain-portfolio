import {
  useEffect,
  useMemo,
  useState,
} from "react";

import PageHeader from "../components/PageHeader.jsx";
import ContentCard from "../components/ContentCard.jsx";
import TagFilter from "../components/TagFilter.jsx";
import LoadMoreButton from "../components/LoadMoreButton.jsx";
import { allContentItems } from "../data/allContent.js";

const PAGE_SIZE = 3;

export default function WorksPage() {
  const [selectedTag, setSelectedTag] = useState("全部");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const works = useMemo(() => {
    return [...allContentItems]
      .filter((item) => item.category === "作品")
      .sort(
        (firstItem, secondItem) =>
          new Date(secondItem.date) - new Date(firstItem.date)
      );
  }, []);

  const tags = useMemo(() => {
    return [
      "全部",
      ...new Set(
        works.flatMap((item) => item.tags ?? [])
      ),
    ];
  }, [works]);

  const filteredWorks = useMemo(() => {
    if (selectedTag === "全部") {
      return works;
    }

    return works.filter((item) =>
      item.tags?.includes(selectedTag)
    );
  }, [selectedTag, works]);

  const visibleWorks = filteredWorks.slice(0, visibleCount);

  const remainingCount = Math.max(
    filteredWorks.length - visibleWorks.length,
    0
  );

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedTag]);

  function loadMore() {
    setVisibleCount(
      (currentCount) => currentCount + PAGE_SIZE
    );
  }

  return (
    <main className="min-h-[70vh]">
      <section className="mx-auto max-w-6xl px-5 py-20">
        <PageHeader
          eyebrow="Works"
          title="作品"
          description="这里展示我选择公开分享的作品、项目和其他创作内容。"
        />

        <div className="mt-10">
          <TagFilter
            tags={tags}
            selectedTag={selectedTag}
            onSelectTag={setSelectedTag}
          />
        </div>
      </section>

      <section className="bg-[#1d2923] px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          {visibleWorks.length > 0 ? (
            <>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {visibleWorks.map((item) => (
                  <ContentCard
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>

              <LoadMoreButton
                onClick={loadMore}
                remainingCount={remainingCount}
              />
            </>
          ) : (
            <p className="rounded-2xl border border-white/10 p-6 text-white/60">
              该标签下暂时没有作品。
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
