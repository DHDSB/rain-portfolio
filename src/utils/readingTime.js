export function calculateReadingTime(content = "") {
  const chineseCharacters =
    content.match(/[\u4e00-\u9fff]/g)?.length ?? 0;

  const englishWords = content
    .replace(/[\u4e00-\u9fff]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const chineseMinutes = chineseCharacters / 300;
  const englishMinutes = englishWords / 200;

  return Math.max(
    1,
    Math.ceil(chineseMinutes + englishMinutes)
  );
}