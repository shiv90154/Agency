import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


//importing the contact page for the button 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/ourwork" }
  
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl 
        rounded-2xl shadow-lg z-50 transition-all duration-300
        ${scrolled ? "bg-white/40 backdrop-blur-md" : "bg-white/40 backdrop-blur-md"}`}
    >
      <div className="flex items-center justify-between px-6 py-3">
     {/* Logo with Image */}
<div className="flex items-center">
  <img 
src="https://images.unsplash.com/photo-1548364538-60b952c308b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGxvZ298ZW58MHx8MHx8fDA%3D"
alt="Company Logo"
    className="h-12 w-11  rounded-full" // Adjust height as needed, width will scale automatically
  />

</div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden block text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white rounded-b-2xl shadow-lg">
          <ul className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-4">
            <Link
              to="Contact"
              className="block w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
