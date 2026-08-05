import PageHeader from "../components/PageHeader.jsx";

export default function WritingPage() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-6xl px-5 py-20">
      <PageHeader
        eyebrow="Writing"
        title="内容"
        description="这里将用于展示文章、笔记、想法和其他记录。"
      />
    </main>
  );
}