import { useMemo, useState } from "react";
import { BookOpen, Search } from "lucide-react";
import Header from "./components/Header.jsx";
import { contentItems, latestItems } from "./data/content.js";
import Footer from "./components/Footer.jsx";
import ContentCard from "./components/ContentCard.jsx";
import LatestItem from "./components/LatestItem.jsx";
import Hero from "./components/Hero.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [keyword, setKeyword] = useState("");

  const categories = [
    "全部",
    ...new Set(contentItems.map((item) => item.category)),
  ];

  const filteredItems = useMemo(() => {
    const searchText = keyword.trim().toLowerCase();

    return contentItems.filter((item) => {
      const categoryMatches =
        selectedCategory === "全部" || item.category === selectedCategory;

      const searchableText = [
        item.title,
        item.category,
        item.description,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      const keywordMatches =
        searchText === "" || searchableText.includes(searchText);

      return categoryMatches && keywordMatches;
    });
  }, [keyword, selectedCategory]);

  function goToSection(sectionId) {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-[#18211d]">
      <Header />

<main>
  <Hero onNavigate={goToSection} />

  <section
    id="featured"
    className="bg-[#1d2923] px-5 py-24 text-white"
  >
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-white/50">
            Featured content
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            精选内容
          </h2>
        </div>

        <p className="max-w-md leading-7 text-white/55">
          这里将展示我选择公开分享的作品、文章、记录和其他内容。
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                setSelectedCategory(category)
              }
              className={
                selectedCategory === category
                  ? "rounded-full border-0 bg-[#d76444] px-4 py-2 text-sm text-white"
                  : "rounded-full border-0 bg-white/10 px-4 py-2 text-sm text-white/70 transition hover:bg-white/15"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
          <Search className="h-4 w-4 text-white/40" />

          <input
            type="search"
            value={keyword}
            onChange={(event) =>
              setKeyword(event.target.value)
            }
            placeholder="搜索内容"
            className="w-44 border-0 bg-transparent text-sm text-white outline-none placeholder:text-white/35"
          />
        </label>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="mt-10 rounded-2xl border border-white/10 p-6 text-white/60">
          没有找到匹配的内容，请更换关键词。
        </p>
      )}
    </div>
  </section>

  <section
    id="latest"
    className="mx-auto max-w-6xl px-5 py-24"
  >
    <div className="flex items-end justify-between">
      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-black/45">
          Latest updates
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          最新内容
        </h2>
      </div>

      <BookOpen className="hidden h-10 w-10 text-[#d76444] sm:block" />
    </div>

    <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
      {latestItems.map((item) => (
        <LatestItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  </section>
  <About />
  <Contact />
</main>

      <Footer />
    </div>
  );
}
