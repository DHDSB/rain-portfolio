import { siteConfig } from "../data/siteConfig.js";
import siteContent from "../data/siteContent.json";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-8 text-sm text-black/45 sm:flex-row">
      <span>
        © {siteConfig.year} {siteConfig.name}
      </span>

      <span>
        {footer.message}
      </span>
    </footer>
  );
}
