export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-[#d9e3db] p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-black/45">
            About
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            关于这个网站
          </h2>
        </div>

        <div className="space-y-5 leading-8 text-black/65">
          <p>
            这是一个持续完善中的个人空间，用于保存想法、整理内容，并展示愿意公开分享的作品与经历。
          </p>

          <p>
            网站的主题不会被预先限制，未来展示什么内容，将由我自己决定。
          </p>
        </div>
      </div>
    </section>
  );
}