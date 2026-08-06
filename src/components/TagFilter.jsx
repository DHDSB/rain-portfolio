export default function TagFilter({
  tags,
  selectedTag,
  onSelectTag,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onSelectTag(tag)}
          className={
            selectedTag === tag
              ? "rounded-full bg-[#d76444] px-4 py-2 text-sm text-white"
              : "rounded-full bg-black/5 px-4 py-2 text-sm text-black/60 transition hover:bg-black/10"
          }
        >
          {tag}
        </button>
      ))}
    </div>
  );
}