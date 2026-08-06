import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { siteConfig } from "../data/siteConfig.js";

const navigationItems = [
  {
    label: "首页",
    path: "/",
  },
  {
    label: "作品",
    path: "/works",
  },
  {
    label: "内容",
    path: "/writing",
  }, 
  {
  label: "搜索",
  path: "/search",
},
  {
    label: "关于",
    path: "/about",
  },

];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function getNavClass({ isActive }) {
    return isActive
      ? "font-medium text-[#d76444]"
      : "transition hover:text-[#d76444]";
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f3ee]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-bold tracking-tight"
        >
          {siteConfig.brand}
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={getNavClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          className="rounded-xl border-0 bg-transparent p-2 md:hidden"
          aria-label="打开或关闭导航菜单"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="grid gap-2 border-t border-black/10 bg-[#f5f3ee] p-5 md:hidden">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl bg-white/70 p-3 text-[#d76444]"
                  : "rounded-xl p-3 hover:bg-white/70"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}