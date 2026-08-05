import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  ArrowUpRight,
  BookOpen,
  Layers3,
  Mail,
  Menu,
  Search,
  ServerCog,
  Terminal,
  X,
} from "lucide-react";

const projects = [
  {
    title: "CI/CD 测试迁移",
    category: "DevOps",
    description:
      "梳理复杂自动化测试的执行链路，并探索如何迁移到 Jenkins 与 Kubernetes 驱动的 Pipeline。",
    tags: ["Jenkins", "Kubernetes", "Pipeline"],
    icon: ServerCog,
  },
  {
    title: "分布式测试框架解析",
    category: "Automation",
    description:
      "通过架构图和逐步说明记录任务调度、远程执行、日志分布与故障定位过程，形成适合新人阅读的技术文档。",
    tags: ["Linux", "Bash", "Test Automation"],
    icon: Layers3,
  },
  {
    title: "云原生存储学习笔记",
    category: "Cloud Native",
    description:
      "总结 Kubernetes 中 PV、PVC、StorageClass 与 Ceph RBD 的关系。",
    tags: ["Kubernetes", "Ceph", "Storage"],
    icon: Terminal,
  },
];

const posts = [
  {
    date: "2026.08",
    title: "Jenkins Pipeline 到底在哪里执行？",
    description:
      "从 Controller、Pod Agent 到远程主机，理解 Pipeline 的真实执行路径。",
    tag: "CI/CD",
  },
  {
    date: "2026.08",
    title: "用一张图理解 Kubernetes 与 Ceph",
    description:
      "从本地磁盘类比出发，解释 PVC、PV、StorageClass 和 RBD。",
    tag: "Cloud Native",
  },
  {
    date: "2026.07",
    title: "一次 SSH 失败的排查方法",
    description:
      "区分网络可达、认证成功、远程命令执行和环境初始化。",
    tag: "Troubleshooting",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [keyword, setKeyword] = useState("");

  const categories = [
    "全部",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects = useMemo(() => {
    const searchText = keyword.trim().toLowerCase();

    return projects.filter((project) => {
      const categoryMatches =
        selectedCategory === "全部" ||
        project.category === selectedCategory;

      const searchableText = [
        project.title,
        project.category,
        project.description,
        ...project.tags,
      ]
        .join(" ")
        .toLowerCase();

      const keywordMatches =
        searchText === "" || searchableText.includes(searchText);

      return categoryMatches && keywordMatches;
    });
  }, [keyword, selectedCategory]);

  function goToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  }

  function openEmail() {
    window.location.href =
      "mailto:yujietan996@gmail.com";
  }

  function openGithub() {
    window.open(
      "https://github.com/DHDSB/",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-[#18211d]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f3ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button
            type="button"
            onClick={() => goToSection("home")}
            className="border-0 bg-transparent text-lg font-bold tracking-tight"
          >
            RAIN.TAN
          </button>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            <button
              type="button"
              onClick={() => goToSection("projects")}
              className="border-0 bg-transparent transition hover:text-[#d76444]"
            >
              项目
            </button>

            <button
              type="button"
              onClick={() => goToSection("writing")}
              className="border-0 bg-transparent transition hover:text-[#d76444]"
            >
              文章
            </button>

            <button
              type="button"
              onClick={() => goToSection("about")}
              className="border-0 bg-transparent transition hover:text-[#d76444]"
            >
              关于
            </button>

            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="rounded-full border-0 bg-[#18211d] px-5 py-2.5 text-white transition hover:bg-[#356859]"
            >
              联系我
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="rounded-xl border-0 bg-transparent p-2 md:hidden"
            aria-label="打开或关闭导航菜单"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="grid gap-2 border-t border-black/10 bg-[#f5f3ee] p-5 md:hidden">
            <button
              type="button"
              onClick={() => goToSection("projects")}
              className="rounded-xl border-0 bg-transparent p-3 text-left hover:bg-white/70"
            >
              项目
            </button>

            <button
              type="button"
              onClick={() => goToSection("writing")}
              className="rounded-xl border-0 bg-transparent p-3 text-left hover:bg-white/70"
            >
              文章
            </button>

            <button
              type="button"
              onClick={() => goToSection("about")}
              className="rounded-xl border-0 bg-transparent p-3 text-left hover:bg-white/70"
            >
              关于
            </button>

            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="rounded-xl border-0 bg-transparent p-3 text-left hover:bg-white/70"
            >
              联系
            </button>
          </nav>
        )}
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid min-h-[78vh] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.25fr_0.75fr]"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Engineering Intern · DevOps & Cloud Native
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-6xl xl:text-7xl">
              把复杂系统，
              <br />
              <span className="text-[#6b7d72]">
                解释清楚并运行可靠。
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              你好，我是 Rain。我关注 CI/CD、Kubernetes、自动化测试与分布式系统排障，也喜欢把调查过程整理成可复用的工程文档。
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => goToSection("projects")}
                className="inline-flex h-12 items-center rounded-full border-0 bg-[#d76444] px-6 font-medium text-white transition hover:bg-[#bd5135]"
              >
                查看项目
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => goToSection("writing")}
                className="h-12 rounded-full border border-black/15 bg-transparent px-6 font-medium transition hover:bg-white"
              >
                阅读文章
              </button>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#20352c] p-7 text-white shadow-2xl shadow-black/15">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>NOW EXPLORING</span>
              <span>2026</span>
            </div>

            <div className="mt-20 space-y-6 font-mono text-sm">
              <div>
                <p className="text-[#f2a38d]">$ whoami</p>
                <p className="mt-1">
                  engineer / learner / documenter
                </p>
              </div>

              <div>
                <p className="text-[#f2a38d]">$ focus</p>
                <p className="mt-1">
                  jenkins · kubernetes · ceph
                </p>
              </div>

              <div>
                <p className="text-[#f2a38d]">$ principle</p>
                <p className="mt-1">
                  evidence before conclusion_
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 grid h-24 w-24 place-items-center rounded-full bg-[#d76444] text-center text-xs font-bold uppercase tracking-widest">
              <span>
                Build
                <br />
                Learn
                <br />
                Share
              </span>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="bg-[#1d2923] px-5 py-24 text-white"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.22em] text-white/50">
                  Selected work
                </p>

                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  精选项目
                </h2>
              </div>

              <p className="max-w-md leading-7 text-white/55">
                这里只添加经过脱敏并允许公开的项目说明、成果和仓库链接。
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
                  placeholder="搜索技术关键词"
                  className="w-44 border-0 bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                />
              </label>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => {
                const ProjectIcon = project.icon;

                return (
                  <article
                    key={project.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 transition hover:-translate-y-1 hover:bg-white/[0.09]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#d76444]">
                        <ProjectIcon className="h-5 w-5" />
                      </div>

                      <span className="text-xs uppercase tracking-wider text-white/40">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-7 text-white/60">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
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

            {filteredProjects.length === 0 && (
              <p className="mt-10 rounded-2xl border border-white/10 p-6 text-white/60">
                没有找到匹配的项目，请更换关键词。
              </p>
            )}
          </div>
        </section>

        <section
          id="writing"
          className="mx-auto max-w-6xl px-5 py-24"
        >
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-black/45">
                Notes & thinking
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                最近文章
              </h2>
            </div>

            <BookOpen className="hidden h-10 w-10 text-[#d76444] sm:block" />
          </div>

          <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {posts.map((post) => (
              <article
                key={post.title}
                className="grid gap-3 py-7 sm:grid-cols-[110px_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-sm text-black/40">
                  {post.date}
                </span>

                <div>
                  <h3 className="text-xl font-semibold">
                    {post.title}
                  </h3>

                  <p className="mt-1 leading-7 text-black/55">
                    {post.description}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-black/5 px-3 py-1 text-xs">
                  {post.tag}
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
                不仅解决问题，
                <br />
                也记录如何解决。
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-black/65">
              <p>
                我喜欢从日志、代码和执行环境中寻找证据，区分已确认事实与待验证假设，再把结果整理成别人可以复现的步骤。
              </p>

              <p>
                这个网站用于展示公开项目、技术文章、系统架构笔记和学习轨迹。所有真实工作内容都会先进行脱敏和权限检查。
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
                想聊聊 DevOps、云原生或自动化？
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

        <span>
          Designed for clear thinking and reliable engineering.
        </span>
      </footer>
    </div>
  );
}