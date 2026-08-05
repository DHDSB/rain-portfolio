import { siteConfig } from "../data/siteConfig.js";
export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-8 text-sm text-black/45 sm:flex-row">
      <span>© {siteConfig.year} {siteConfig.name}</span>
      <span>Learning, creating, and sharing.</span>
    </footer>
  );
}