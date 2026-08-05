import Hero from "../components/Hero.jsx";
import FeaturedSection from "../components/FeaturedSection.jsx";
import LatestSection from "../components/LatestSection.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

export default function HomePage() {
  function goToSection(sectionId) {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <main>
      <Hero onNavigate={goToSection} />

      <FeaturedSection />

      <LatestSection />

      <About />

      <Contact />
    </main>
  );
}