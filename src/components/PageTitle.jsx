import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Rain Tan | 首页",
  "/works": "作品 | Rain Tan",
  "/writing": "内容 | Rain Tan",
  "/about": "关于 | Rain Tan",
};

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title =
      pageTitles[pathname] || "页面不存在 | Rain Tan";
  }, [pathname]);

  return null;
}