import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import PageHeader from "../components/PageHeader.jsx";
import ContentCard from "../components/ContentCard.jsx";
import { allContentItems } from "../data/allContent.js";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");

  const searchResults = useMemo(() => {
    const searchText = keyword.trim().toLowerCase();

    if (!searchText) {
      return [];
    }

    return allContentItems.filter((item) => {
      const searchableText = [
        item.title,
        item.description,
        item.category,
        ...(item.tags ?? []),
        item.body ?? "",
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchText);
    });
  }, [keyword]);

  return (
    <main className="min-h-[70vh]">
      <section className="mx-auto max-w-6xl px-5 py-20">
        <PageHeader
          eyebrow="Search"
          title="搜索"
          description="搜索作品、文章、记录、标签和正文内容。"
        />

        <label className="mt-10 flex max-w-2xl items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4">
          <Search className="h-5 w-5 text-black/35" />

          <input
            type="search"
            value={keyword}
            onChange={(event) =>
              setKeyword(event.target.value)
            }
            placeholder="输入搜索关键词"
            className="w-full border-0 bg-transparent text-lg outline-none placeholder:text-black/30"
          />
        </label>
      </section>

      {keyword.trim() && (
        <section className="bg-[#1d2923] px-5 py-16 text-white">
          <div className="mx-auto max-w-6xl">
            {searchResults.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {searchResults.map((item) => (
                  <ContentCard
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-white/10 p-6 text-white/60">
                没有找到匹配的内容。
              </p>
            )}
          </div>
        </section>
      )}
    </main>
  );
}