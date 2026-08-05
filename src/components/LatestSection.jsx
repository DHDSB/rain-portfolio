import { BookOpen } from "lucide-react";
import LatestItem from "./LatestItem.jsx";
import { latestItems } from "../data/content.js";

export default function LatestSection() {
  return (
    <section
      id="latest"
      className="mx-auto max-w-6xl px-5 py-24"
    >
      <div className="flex items-end justify-between">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-black/45">
            Latest updates
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            最新内容
          </h2>
        </div>

        <BookOpen className="hidden h-10 w-10 text-[#d76444] sm:block" />
      </div>

      <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
        {latestItems.map((item) => (
          <LatestItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}
