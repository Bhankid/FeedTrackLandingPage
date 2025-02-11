import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, ListChecksIcon, StarIcon, MailIcon } from "lucide-react";

export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/20 backdrop-blur-lg shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {/* Home */}
        <Link
          to="/"
          className="flex flex-col items-center text-gray-300 hover:text-white transition-all"
        >
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>

        {/* Features */}
        <Link
          to="/features"
          className="flex flex-col items-center text-gray-300 hover:text-white transition-all"
        >
          <ListChecksIcon className="w-6 h-6" />
          <span className="text-xs">Features</span>
        </Link>

        {/* Benefits */}
        <Link
          to="/benefits"
          className="flex flex-col items-center text-gray-300 hover:text-white transition-all"
        >
          <StarIcon className="w-6 h-6" />
          <span className="text-xs">Benefits</span>
        </Link>

        {/* Contact */}
        <Link
          to="/contact"
          className="flex flex-col items-center text-gray-300 hover:text-white transition-all"
        >
          <MailIcon className="w-6 h-6" />
          <span className="text-xs">Contact</span>
        </Link>
      </div>
    </div>
  );
}
