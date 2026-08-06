import {
  FileText,
  Layers3,
  Sparkles,
} from "lucide-react";

export const contentItems = [
  {
    id: "work-1",
    title: "第一个作品",
    category: "作品",
    date: "2026-08-05",
    featured: true,
    description:
      "这里可以展示你愿意公开分享的项目、设计、创作或其他成果。",
    content:[
      "这里是第一段正文，可以介绍这项作品的背景和目的。",
      "这里是第二段正文，可以记录创作过程、最终结果或个人思考。",
    ],
    tags: ["作品", "展示"],
    icon: Layers3,
  },
  {
    id: "article-1",
    title: "第一篇文章",
    category: "文章",
    date: "2026-08-04",
    featured: true,
    description:
      "这里可以放文章摘要，内容主题和写作方向以后由你决定。",
    content: [
      "这里是文章的第一段正文。",
      "这里是文章的第二段正文。",
    ],
    tags: ["文章", "思考"],
    icon: FileText,
  },
  {
    id: "note-1",
    title: "一条个人记录",
    category: "记录",
    date: "2026-08-05",
    featured: true,
    description:
      "这里可以记录学习、生活、灵感、阅读、旅行或其他内容。",
    content: [
      "这里是记录的第一段正文。",
      "这里是记录的第二段正文。",
    ],
    tags: ["记录", "成长"],
    icon: Sparkles,
  },
    {
    id: "note-2",
    title: "一条个人记录",
    category: "记录",
    date: "2026-08-06",
    featured: true,
    description:
      "这里可以记录学习、生活、灵感、阅读、旅行或其他内容。",
    content: [
      "这里是记录的第一段正文。",
      "这里是记录的第二段正文。",
    ],
    tags: ["记录", "成长"],
    icon: Sparkles,
  },
];
