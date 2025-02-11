import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-lg text-gray-300 py-6 px-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FeedTrack. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-3">
          <Link to="/contact" className="hover:text-white transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
