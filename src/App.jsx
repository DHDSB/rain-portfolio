import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, BookOpen, Mail, Search } from "lucide-react";
import Header from "./components/Header.jsx";
import { contentItems, latestItems } from "./data/content.js";

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

  function openEmail() {
    window.location.href = "mailto:your-public-email@example.com";
  }

  function openGithub() {
    window.open(
      "https://github.com/your-github-name",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-[#18211d]">
      <Header />

      <main>
        <section
          id="home"
          className="mx-auto grid min-h-[78vh] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.25fr_0.75fr]"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Personal Blog · Portfolio · Notes
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-7xl">
              记录思考，
              <br />
              <span className="text-[#6b7d72]">展示创造。</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              你好，我是 Rain。这里是我的个人网站，用于记录学习、整理思考，并展示我愿意公开分享的作品与经历。
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => goToSection("featured")}
                className="inline-flex h-12 items-center rounded-full border-0 bg-[#d76444] px-6 font-medium text-white transition hover:bg-[#bd5135]"
              >
                浏览内容
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => goToSection("about")}
                className="h-12 rounded-full border border-black/15 bg-transparent px-6 font-medium transition hover:bg-white"
              >
                了解更多
              </button>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#20352c] p-7 text-white shadow-2xl shadow-black/15">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>PERSONAL SPACE</span>
              <span>2026</span>
            </div>

            <div className="mt-20 space-y-6 font-mono text-sm">
              <div>
                <p className="text-[#f2a38d]">$ currently</p>
                <p className="mt-1">building my personal space</p>
              </div>

              <div>
                <p className="text-[#f2a38d]">$ interests</p>
                <p className="mt-1">learning · creating · exploring</p>
              </div>

              <div>
                <p className="text-[#f2a38d]">$ principle</p>
                <p className="mt-1">stay curious</p>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 grid h-24 w-24 place-items-center rounded-full bg-[#d76444] text-center text-xs font-bold uppercase tracking-widest">
              <span>
                Learn
                <br />
                Create
                <br />
                Share
              </span>
            </div>
          </div>
        </section>

        <section id="featured" className="bg-[#1d2923] px-5 py-24 text-white">
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
                    onClick={() => setSelectedCategory(category)}
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
                  onChange={(event) => setKeyword(event.target.value)}
                  placeholder="搜索内容"
                  className="w-44 border-0 bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                />
              </label>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => {
                const ItemIcon = item.icon;

                return (
                  <article
                    key={item.id}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 transition hover:-translate-y-1 hover:bg-white/[0.09]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#d76444]">
                        <ItemIcon className="h-5 w-5" />
                      </div>
                      <span className="text-xs uppercase tracking-wider text-white/40">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 leading-7 text-white/60">
                      {item.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <p className="mt-10 rounded-2xl border border-white/10 p-6 text-white/60">
                没有找到匹配的内容，请更换关键词。
              </p>
            )}
          </div>
        </section>

        <section id="latest" className="mx-auto max-w-6xl px-5 py-24">
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
              <article
                key={item.id}
                className="grid gap-3 py-7 sm:grid-cols-[110px_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-sm text-black/40">
                  {item.date}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-1 leading-7 text-black/55">
                    {item.description}
                  </p>
                </div>
                <span className="w-fit rounded-full bg-black/5 px-3 py-1 text-xs">
                  {item.tag}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="px-5 py-24">
          <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-[#d9e3db] p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-black/45">
                About
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                关于这个网站
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-black/65">
              <p>
                这是一个持续完善中的个人空间，用于保存想法、整理内容，并展示愿意公开分享的作品与经历。
              </p>
              <p>
                网站的主题不会被预先限制，未来展示什么内容，将由我自己决定。
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-12">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#d76444] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/65">
                Let&apos;s connect
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                欢迎与我联系
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openEmail}
                className="inline-flex items-center rounded-full border-0 bg-white px-5 py-3 font-medium text-[#18211d] transition hover:bg-white/90"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </button>

              <button
                type="button"
                onClick={openGithub}
                className="inline-flex items-center rounded-full border border-white/40 bg-transparent px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                GitHub
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-8 text-sm text-black/45 sm:flex-row">
        <span>© 2026 Rain Tan</span>
        <span>Learning, creating, and sharing.</span>
      </footer>
    </div>
  );
}
