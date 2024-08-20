import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/LOGO_WHITE.png";

const NavBar: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/") setActiveTab("Home");
    else if (pathname === "/about") setActiveTab("About us");
    else if (pathname === "/products") setActiveTab("Products");
    else if (pathname === "/contact-us") setActiveTab("Contact Us");
    else setActiveTab("");
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-darkGreen flex flex-wrap justify-between items-center pl-8 pr-4 pt-4 pb-4 sticky top-0 z-50">
      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <img src={logo} alt="m&c logo" className="w-20 lg:w-36 h-12 lg:h-20" />
      </div>

      {/* Burger menu icon for small devices */}
      {isMobile && (
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? (
            <FaTimes size={24} className="text-brightGreen" />
          ) : (
            <FaBars size={24} />
          )}
        </button>
      )}

      {/* Navigation links */}
      <ul
        className={`w-full md:w-auto md:flex md:space-x-6 text-white ${
          isMobile ? (isMenuOpen ? "block" : "hidden") : "flex"
        } md:static md:bg-transparent md:p-0 ${
          isMobile && isMenuOpen ? "mt-4" : ""
        }`}
      >
        <li
          className={`cursor-pointer pb-2 ${
            activeTab === "Home"
              ? "text-brightGreen border-b-2 border-brightGreen"
              : ""
          }`}
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li
          className={`cursor-pointer pb-2 ${
            activeTab === "About us"
              ? "text-brightGreen border-b-2 border-brightGreen"
              : ""
          }`}
        >
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About us
          </Link>
        </li>
        <li
          className={`cursor-pointer pb-2 ${
            activeTab === "Products"
              ? "text-brightGreen border-b-2 border-brightGreen"
              : ""
          }`}
        >
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>
            Products/Services
          </Link>
        </li>
        <li
          className={`cursor-pointer pb-2 ${
            activeTab === "Contact Us"
              ? "text-brightGreen border-b-2 border-brightGreen"
              : ""
          }`}
        >
          <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Empty div to balance the layout on larger screens */}
      {!isMobile && <div className="flex-shrink-0 w-36"></div>}
    </nav>
  );
};

export default NavBar;
