import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-red-500">
          SkillSwap
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-red-500">
            Home
          </a>
          <a href="#skills" className="text-gray-700 hover:text-red-500">
            Skills
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-red-500">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-700 hover:text-red-500">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-300">
            Log In
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <a
            href="#home"
            className="block py-2 text-gray-700 hover:text-red-500"
          >
            Home
          </a>
          <a
            href="#skills"
            className="block py-2 text-gray-700 hover:text-red-500"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="block py-2 text-gray-700 hover:text-red-500"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-700 hover:text-red-500"
          >
            Contact
          </a>
          <div className="mt-4">
            <button className="w-full bg-gray-200 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-300">
              Log In
            </button>
            <button className="w-full mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
