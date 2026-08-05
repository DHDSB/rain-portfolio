import PageHeader from "../components/PageHeader.jsx";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-6xl px-5 py-20">
      <PageHeader
        eyebrow="About"
        title="关于"
        description="这里用于介绍个人经历、兴趣方向和网站用途。"
      />

      <div className="mt-10 max-w-2xl space-y-5 leading-8 text-black/60">
        <p>
          这是一个持续完善中的个人空间，用于记录想法、整理内容，并展示愿意公开分享的作品与经历。
        </p>

        <p>
          当前内容只是通用占位，后续可以根据需要自由修改。
        </p>
      </div>
    </main>
  );
}