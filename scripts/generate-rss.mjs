import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { Feed } from "feed";
import YAML from "yaml";

const currentFile = fileURLToPath(import.meta.url);
const scriptsDirectory = path.dirname(currentFile);
const projectRoot = path.resolve(scriptsDirectory, "..");
const contentDirectory = path.join(projectRoot, "src", "content");
const outputFile = path.join(projectRoot, "public", "rss.xml");

const siteUrl = "https://dhdsb.github.io/rain-portfolio/";
const feedUrl = `${siteUrl}rss.xml`;

function parseMarkdownFile(filePath) {
  const rawContent = fs.readFileSync(filePath, "utf8");
  const match = rawContent.match(
    /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n([\s\S]*)$/
  );

  if (!match) {
    throw new Error(
      `Markdown 文件缺少正确的 YAML 头部：${filePath}`
    );
  }

  const metadata = YAML.parse(match[1]);
  const body = match[2].trim();

  return {
    ...metadata,
    body,
  };
}

function createContentUrl(item) {
  return `${siteUrl}#/content/${encodeURIComponent(item.id)}`;
}

function createImageUrl(cover) {
  if (!cover) {
    return undefined;
  }

  let cleanPath = cover;

  if (cleanPath.startsWith("/")) {
    cleanPath = cleanPath.slice(1);
  }

  if (cleanPath.startsWith("public/")) {
    cleanPath = cleanPath.slice(7);
  }

  return `${siteUrl}${cleanPath}`;
}

function parseDate(value, fileName) {
  const date = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(date.getTime())) {
    throw new Error(`日期格式无效：${fileName}`);
  }

  return date;
}

const markdownFiles = fs
  .readdirSync(contentDirectory)
  .filter((fileName) => fileName.endsWith(".md"));

const publishedItems = markdownFiles
  .map((fileName) => {
    const filePath = path.join(contentDirectory, fileName);
    const item = parseMarkdownFile(filePath);

    return {
      ...item,
      fileName,
    };
  })
  .filter((item) => item.published !== false)
  .filter((item) => item.id && item.title && item.date)
  .sort(
    (firstItem, secondItem) =>
      parseDate(secondItem.date, secondItem.fileName) -
      parseDate(firstItem.date, firstItem.fileName)
  );

const latestDate = publishedItems.length
  ? parseDate(publishedItems[0].date, publishedItems[0].fileName)
  : new Date();

const feed = new Feed({
  title: "Rain Tan 的个人网站",
  description: "作品、文章、学习笔记与其他公开内容。",
  id: siteUrl,
  link: siteUrl,
  language: "zh-CN",
  image: `${siteUrl}images/og-cover.png`,
  favicon: `${siteUrl}favicon.svg`,
  copyright: `Copyright ${new Date().getFullYear()} Rain Tan`,
  updated: latestDate,
  generator: "Rain Portfolio RSS Generator",
  feedLinks: {
    rss: feedUrl,
  },
  author: {
    name: "Rain Tan",
    link: siteUrl,
  },
});

for (const item of publishedItems) {
  const itemUrl = createContentUrl(item);

  feed.addItem({
    title: item.title,
    id: itemUrl,
    link: itemUrl,
    description: item.description ?? "",
    date: parseDate(item.date, item.fileName),
    category: (item.tags ?? []).map((tag) => ({ name: tag })),
    image: createImageUrl(item.cover),
    author: [
      {
        name: "Rain Tan",
        link: siteUrl,
      },
    ],
  });
}

fs.mkdirSync(path.dirname(outputFile), {
  recursive: true,
});

fs.writeFileSync(outputFile, feed.rss2(), "utf8");

console.log(
  `RSS 已生成：${path.relative(projectRoot, outputFile)}，共 ${publishedItems.length} 条公开内容。`
);
