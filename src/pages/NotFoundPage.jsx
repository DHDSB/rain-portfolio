import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-20">
      <p className="text-sm uppercase tracking-[0.22em] text-black/45">
        Error 404
      </p>

      <h1 className="mt-3 text-5xl font-semibold tracking-tight">
        页面不存在
      </h1>

      <p className="mt-6 max-w-xl leading-8 text-black/60">
        你访问的页面可能已被移动、删除，或者地址输入有误。
      </p>
      <Link
      to="/"
      className="mt-8 inline-flex h-12 w-32 items-center justify-center rounded-full bg-[#18211d] text-base font-medium !text-white transition hover:bg-[#356859] hover:!text-white"
      >
        返回首页
        </Link>
    </main>
  );
}