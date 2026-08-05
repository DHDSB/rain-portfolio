import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../data/siteConfig.js";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function goToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f3ee]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <button
          type="button"
          onClick={() => goToSection("home")}
          className="border-0 bg-transparent text-lg font-bold tracking-tight"
        >
        {siteConfig.brand}
        </button>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <button
            type="button"
            onClick={() => goToSection("featured")}
            className="border-0 bg-transparent transition hover:text-[#d76444]"
          >
            作品
          </button>

          <button
            type="button"
            onClick={() => goToSection("latest")}
            className="border-0 bg-transparent transition hover:text-[#d76444]"
          >
            内容
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
            onClick={() => goToSection("featured")}
            className="rounded-xl border-0 bg-transparent p-3 text-left hover:bg-white/70"
          >
            作品
          </button>

          <button
            type="button"
            onClick={() => goToSection("latest")}
            className="rounded-xl border-0 bg-transparent p-3 text-left hover:bg-white/70"
          >
            内容
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
  );
}
