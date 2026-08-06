import PageHeader from "../components/PageHeader.jsx";
import siteContent from "../data/siteContent.json";

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <main className="mx-auto min-h-[70vh] max-w-6xl px-5 py-20">
      <PageHeader
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.paragraphs[0]}
      />

      {about.paragraphs.length > 1 && (
        <div className="mt-10 max-w-2xl space-y-5 leading-8 text-black/60">
          {about.paragraphs
            .slice(1)
            .map((paragraph, index) => (
              <p key={`about-page-${index}`}>
                {paragraph}
              </p>
            ))}
        </div>
      )}
    </main>
  );
}