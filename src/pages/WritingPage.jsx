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

export default function WritingPage() {
  const [selectedTag, setSelectedTag] = useState("全部");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const writingItems = useMemo(() => {
    return [...allContentItems]
      .filter(
        (item) =>
          item.category === "文章" ||
          item.category === "记录"
      )
      .sort(
        (firstItem, secondItem) =>
          new Date(secondItem.date) -
          new Date(firstItem.date)
      );
  }, []);

  const tags = useMemo(() => {
    return [
      "全部",
      ...new Set(
        writingItems.flatMap(
          (item) => item.tags ?? []
        )
      ),
    ];
  }, [writingItems]);

  const filteredItems = useMemo(() => {
    if (selectedTag === "全部") {
      return writingItems;
    }

    return writingItems.filter((item) =>
      item.tags?.includes(selectedTag)
    );
  }, [selectedTag, writingItems]);

  const visibleItems = filteredItems.slice(
    0,
    visibleCount
  );

  const remainingCount = Math.max(
    filteredItems.length - visibleItems.length,
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
          eyebrow="Writing"
          title="内容"
          description="这里展示文章、笔记、想法和其他记录。"
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
          {visibleItems.length > 0 ? (
            <>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {visibleItems.map((item) => (
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
              该标签下暂时没有内容。
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
