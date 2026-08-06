import { Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import WorksPage from "./pages/WorksPage.jsx";
import WritingPage from "./pages/WritingPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageTitle from "./components/PageTitle.jsx";
import ContentDetailPage from "./pages/ContentDetailPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f3ee] text-[#18211d]">
      <ScrollToTop />

      <PageTitle />
      
      <Header />

      <Routes>
        <Route
          path="/search"
          element={<SearchPage />}
        />
        
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/works"
          element={<WorksPage />}
        />
        
        <Route
        path="/writing"
        element={<WritingPage />}
        />

        <Route
        path="/about"
        element={<AboutPage />}
        />

        <Route
        path="*"
        element={<NotFoundPage />}
        />

        <Route
        path="/content/:id"
        element={<ContentDetailPage />}
        />

      </Routes>

      <Footer />
    </div>
  );
}