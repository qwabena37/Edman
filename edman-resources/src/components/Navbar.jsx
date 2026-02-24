import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    setIsOpen(false);

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

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-edmanGold">
          Edman Resources Ltd
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("about")} className="hover:text-edmanGold transition">
            About
          </button>
          <button onClick={() => scrollToSection("services")} className="hover:text-edmanGold transition">
            Services
          </button>
          <button onClick={() => scrollToSection("operations")} className="hover:text-edmanGold transition">
            Operations
          </button>
          <Link to="/contact" className="hover:text-edmanGold transition">
            Contact
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-edmanGold text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-edmanDark border-t border-edmanGold/20">
          <div className="flex flex-col text-center py-6 space-y-6 text-gray-300">

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
              onClick={() => setIsOpen(false)}
              className="hover:text-edmanGold transition"
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}