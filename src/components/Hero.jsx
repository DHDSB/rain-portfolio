import { ArrowUpRight } from "lucide-react";

import siteContent from "../data/siteContent.json";

export default function Hero({ onNavigate }) {
  const { hero } = siteContent;
  const { panel } = hero;

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[78vh] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.25fr_0.75fr]"
    >
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {hero.eyebrow}
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-7xl">
          {hero.titleLine1}
          <br />
          <span className="text-[#6b7d72]">
            {hero.titleLine2}
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
          {hero.description}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate("featured")}
            className="inline-flex h-12 items-center rounded-full border-0 bg-[#d76444] px-6 font-medium text-white transition hover:bg-[#bd5135]"
          >
            {hero.primaryButton}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate("about")}
            className="h-12 rounded-full border border-black/15 bg-transparent px-6 font-medium transition hover:bg-white"
          >
            {hero.secondaryButton}
          </button>
        </div>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#20352c] p-7 text-white shadow-2xl shadow-black/15">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>{panel.label}</span>
          <span>{panel.year}</span>
        </div>

        <div className="mt-20 space-y-6 font-mono text-sm">
          <div>
            <p className="text-[#f2a38d]">
              {panel.currentLabel}
            </p>
            <p className="mt-1">
              {panel.currentValue}
            </p>
          </div>

          <div>
            <p className="text-[#f2a38d]">
              {panel.interestsLabel}
            </p>
            <p className="mt-1">
              {panel.interestsValue}
            </p>
          </div>

          <div>
            <p className="text-[#f2a38d]">
              {panel.principleLabel}
            </p>
            <p className="mt-1">
              {panel.principleValue}
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 grid h-24 w-24 place-items-center rounded-full bg-[#d76444] text-center text-xs font-bold uppercase tracking-widest">
          <span>
            {panel.badgeLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < panel.badgeLines.length - 1 && <br />}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
