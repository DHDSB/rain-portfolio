import YAML from "yaml";
import {
  FileText,
  Layers3,
  Sparkles,
} from "lucide-react";

const markdownFiles = import.meta.glob(
  "../content/*.md",
  {
    eager: true,
    query: "?raw",
    import: "default",
  }
);

const iconByCategory = {
  作品: Layers3,
  文章: FileText,
  记录: Sparkles,
};

function parseMarkdown(rawContent) {
  const match = rawContent.match(
    /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  );

  if (!match) {
    throw new Error("Markdown 文件缺少正确的 YAML 头部");
  }

  const metadata = YAML.parse(match[1]);
  const body = match[2].trim();

  return {
    ...metadata,
    tags: metadata.tags ?? [],
    featured: metadata.featured ?? false,
    icon:
      iconByCategory[metadata.category] ??
      FileText,
    body,
  };
}

export const markdownItems = Object.values(
  markdownFiles
).map(parseMarkdown);