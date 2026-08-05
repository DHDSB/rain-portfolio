import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BookOpen, Mail, Search } from "lucide-react";
import Header from "./components/Header.jsx";
import { contentItems, latestItems } from "./data/content.js";
import Footer from "./components/Footer.jsx";
import ContentCard from "./components/ContentCard.jsx";
import LatestItem from "./components/LatestItem.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [keyword, setKeyword] = useState("");

  const categories = [
    "全部",
    ...new Set(contentItems.map((item) => item.category)),
  ];

  const filteredItems = useMemo(() => {
    const searchText = keyword.trim().toLowerCase();

    return contentItems.filter((item) => {
      const categoryMatches =
        selectedCategory === "全部" || item.category === selectedCategory;

      const searchableText = [
        item.title,
        item.category,
        item.description,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      const keywordMatches =
        searchText === "" || searchableText.includes(searchText);

      return categoryMatches && keywordMatches;
    });
  }, [keyword, selectedCategory]);

  function goToSection(sectionId) {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openEmail() {
    window.location.href = "mailto:your-public-email@example.com";
  }

  function openGithub() {
    window.open(
      "https://github.com/your-github-name",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-[#18211d]">
      <Header />

      <main>
        <Hero onNavigate={goToSection} />
      </main>

      <Footer />
    </div>
  );
}
