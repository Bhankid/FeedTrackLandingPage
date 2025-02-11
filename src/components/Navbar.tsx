import React from "react";
import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FeedTrack
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-all"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-gray-300 hover:text-white transition-all"
            >
              Features
            </Link>
            <Link
              to="/benefits"
              className="text-gray-300 hover:text-white transition-all"
            >
              Benefits
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Call-to-Action Button */}
          <Link
            to="/pricing"
            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation (Fixed at Bottom) */}
      <MobileNav />
    </>
  );
}
