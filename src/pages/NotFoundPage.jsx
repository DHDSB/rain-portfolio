import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-20">
      <PageHeader
        eyebrow="Error 404"
        title="页面不存在"
        description="你访问的页面可能已被移动、删除，或者地址输入有误。"
      />

      <Link
        to="/"
        className="mt-8 inline-flex h-12 w-32 items-center justify-center rounded-full bg-[#18211d] text-base font-medium !text-white transition hover:bg-[#356859] hover:!text-white"
      >
        返回首页
      </Link>
    </main>
  );
}