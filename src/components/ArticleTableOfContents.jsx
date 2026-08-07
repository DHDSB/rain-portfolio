import GithubSlugger from "github-slugger";

function extractHeadings(markdown = "") {
  const slugger = new GithubSlugger();
  let insideCodeBlock = false;

  return markdown
    .split("\n")
    .map((line) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("```")) {
        insideCodeBlock = !insideCodeBlock;
        return null;
      }

      if (insideCodeBlock) {
        return null;
      }

      const match = line.match(/^(##|###)\s+(.+?)\s*#*\s*$/);

      if (!match) {
        return null;
      }

      const level = match[1].length;
      const text = match[2].trim();

      return {
        level,
        text,
        id: slugger.slug(text),
      };
    })
    .filter(Boolean);
}

export default function ArticleTableOfContents({ content = "" }) {
  const headings = extractHeadings(content);

  if (headings.length < 2) {
    return null;
  }

  function scrollToHeading(headingId) {
    const target = document.getElementById(headingId);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <nav
      aria-label="文章目录"
      className="mb-12 rounded-2xl border border-black/10 bg-black/[0.025] p-6"
    >
      <h2 className="text-lg font-semibold text-[#18211d]">
        本文目录
      </h2>

      <ol className="mt-4 space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? "pl-5" : ""}
          >
            <button
              type="button"
              onClick={() => scrollToHeading(heading.id)}
              className="text-left text-sm leading-6 text-black/55 transition hover:text-[#d76444]"
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
