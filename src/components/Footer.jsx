import { Rss } from "lucide-react";

import { siteConfig } from "../data/siteConfig.js";
import siteContent from "../data/siteContent.json";

export default function Footer() {
  const { footer } = siteContent;
  const rssUrl = `${import.meta.env.BASE_URL}rss.xml`;

  return (
    <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-5 py-8 text-sm text-black/45 sm:flex-row sm:items-center">
      <span>
        © {siteConfig.year} {siteConfig.name}
      </span>

      <div className="flex flex-wrap items-center gap-4">
        <span>{footer.message}</span>

        <a
          href={rssUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center transition hover:text-[#d76444]"
        >
          <Rss className="mr-1.5 h-4 w-4" />
          RSS 订阅
        </a>
      </div>
    </footer>
  );
}
