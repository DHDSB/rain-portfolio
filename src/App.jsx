import { Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f3ee] text-[#18211d]">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>

      <Footer />
    </div>
  );
}