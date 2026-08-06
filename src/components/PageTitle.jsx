import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { allContentItems } from "../data/allContent.js";
import { siteConfig } from "../data/siteConfig.js";

const pageMetadata = {
  "/": {
    title: "首页",
    description: "Rain Tan 的个人网站。",
  },
  "/works": {
    title: "作品",
    description: "浏览公开分享的作品和项目。",
  },
  "/writing": {
    title: "内容",
    description: "浏览文章、笔记和其他记录。",
  },
  "/search": {
    title: "搜索",
    description: "搜索网站中的公开内容。",
  },
  "/about": {
    title: "关于",
    description: "了解 Rain Tan 和这个个人网站。",
  },
};

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title;
    let description;

    if (pathname.startsWith("/content/")) {
      const contentId = pathname.split("/content/")[1];

      const item = allContentItems.find(
        (contentItem) => contentItem.id === contentId
      );

      title = item
        ? `${item.title} | ${siteConfig.name}`
        : `内容不存在 | ${siteConfig.name}`;

      description = item?.description ?? "内容不存在。";
    } else {
      const metadata = pageMetadata[pathname];

      title = metadata
        ? `${metadata.title} | ${siteConfig.name}`
        : `页面不存在 | ${siteConfig.name}`;

      description =
        metadata?.description ?? "你访问的页面不存在。";
    }

    document.title = title;

    const descriptionElement = document.querySelector(
      'meta[name="description"]'
    );

    if (descriptionElement) {
      descriptionElement.setAttribute(
        "content",
        description
      );
    }
  }, [pathname]);

  return null;
}