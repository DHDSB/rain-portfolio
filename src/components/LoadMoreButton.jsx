export default function LoadMoreButton({
  onClick,
  remainingCount,
}) {
  if (remainingCount <= 0) {
    return null;
  }

  return (
    <div className="mt-10 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
      >
        加载更多
      </button>
    </div>
  );
}