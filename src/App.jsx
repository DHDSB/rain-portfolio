import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedSection from "./components/FeaturedSection.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import LatestSection from "./components/LatestSection.jsx";

export default function App() {
  function goToSection(sectionId) {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-[#18211d]">
      <Header />

      <main>
        <Hero onNavigate={goToSection} />

        <FeaturedSection />
        <LatestSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
