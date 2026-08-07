import { Printer } from "lucide-react";

export default function PrintArticleButton() {
  function printArticle() {
    window.print();
  }

  return (
    <button
      type="button"
      onClick={printArticle}
      className="print:hidden inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/60 transition hover:border-[#d76444]/40 hover:text-[#d76444]"
    >
      <Printer className="mr-2 h-4 w-4" />

      打印或保存 PDF
    </button>
  );
}