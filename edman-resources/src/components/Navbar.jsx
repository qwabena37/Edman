import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-edmanGray shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-xl font-bold text-edmanGold">
          Edman Resources Ltd
        </Link>

        <div className="space-x-8 hidden md:flex">

          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-edmanGold transition"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-edmanGold transition"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("operations")}
            className="hover:text-edmanGold transition"
          >
            Operations
          </button>

          <Link
            to="/contact"
            className="hover:text-edmanGold transition"
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}