import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { allContentItems } from "../data/allContent.js";
import { siteConfig } from "../data/siteConfig.js";

const pageTitles = {
  "/": "首页",
  "/works": "作品",
  "/writing": "内容",
  "/about": "关于",
};

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/content/")) {
      const contentId = pathname.split("/content/")[1];

      const item = allContentItems.find(
        (contentItem) => contentItem.id === contentId
      );

      document.title = item
        ? `${item.title} | ${siteConfig.name}`
        : `内容不存在 | ${siteConfig.name}`;

      return;
    }

    const pageTitle = pageTitles[pathname];

    document.title = pageTitle
      ? `${pageTitle} | ${siteConfig.name}`
      : `页面不存在 | ${siteConfig.name}`;
  }, [pathname]);

  return null;
}