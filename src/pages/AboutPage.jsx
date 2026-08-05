export default function AboutPage() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-6xl px-5 py-20">
      <p className="text-sm uppercase tracking-[0.22em] text-black/45">
        About
      </p>

      <h1 className="mt-3 text-5xl font-semibold tracking-tight">
        关于
      </h1>

      <div className="mt-8 max-w-2xl space-y-5 leading-8 text-black/60">
        <p>
          这里是关于页面，用于介绍个人经历、兴趣方向和网站用途。
        </p>

        <p>
          当前内容只是通用占位，后续可以根据需要自由修改。
        </p>
      </div>
    </main>
  );
}