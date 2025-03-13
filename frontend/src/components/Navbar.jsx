import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { FaUserCircle } from "react-icons/fa";
import { HiDotsVertical, HiX, HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

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

        {/* User Auth Section */}
        <div className="hidden md:flex space-x-4 items-center relative">
          {token ? (
            <div className="flex items-center space-x-4">
              <FaUserCircle className="text-3xl text-gray-700" />
              <span className="text-gray-700 font-semibold">
                {user?.name || "User"}
              </span>

              {/* Three Dot Menu */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="focus:outline-none"
              >
                <HiDotsVertical className="text-2xl text-gray-700 cursor-pointer" />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-40 left-12 w-36 bg-white shadow-lg rounded-lg py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/my-skills"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    My Skills
                  </Link>
                  <button
                    onClick={() => dispatch(logout())}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signin">
                <button className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-300">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu (Sidebar) */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="bg-white w-64 h-full shadow-lg p-6 relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <HiX className="text-3xl" />
          </button>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-4 mt-6">
            <a href="#home" className="text-gray-700 hover:text-red-500">
              Home
            </a>
            <a href="#skills" className="text-gray-700 hover:text-red-500">
              Skills
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-red-500"
            >
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-500">
              Contact
            </a>
          </nav>

          {/* Mobile User Menu */}
          <div className="mt-6">
            {token ? (
              <>
                <div className="flex items-center space-x-3 border-b pb-4">
                  <FaUserCircle className="text-3xl text-gray-700" />
                  <span className="text-gray-700 font-semibold">
                    {user?.name || "User"}
                  </span>
                </div>
                <Link
                  to="/profile"
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 mt-4"
                >
                  Profile
                </Link>
                <Link
                  to="/my-skills"
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  My Skills
                </Link>
                <button
                  onClick={() => dispatch(logout())}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 mt-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <button className="w-full bg-gray-200 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-300">
                    Log In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="w-full mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
