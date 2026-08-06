import siteContent from "../data/siteContent.json";

export default function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-[#d9e3db] p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-black/45">
            {about.eyebrow}
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            {about.title}
          </h2>
        </div>

        <div className="space-y-5 leading-8 text-black/65">
          {about.paragraphs.map((paragraph, index) => (
            <p key={`about-${index}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
