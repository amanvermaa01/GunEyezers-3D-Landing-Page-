import React from "react";

function Header() {
  return (
    <header className="bg-black-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Gun Eyezers</a>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a href="/" className="hover:text-gray-200">
            Home
          </a>
          <a href="/about" className="hover:text-gray-200">
            About
          </a>
          <a href="/services" className="hover:text-gray-200">
            Services
          </a>
          <a href="/contact" className="hover:text-gray-200">
            Contact
          </a>
        </nav>

        {/* Call to Action Button */}
        <div>
          <a
            href="/get-started"
            className="bg-white text-red-600 px-4 py-2 rounded-lg shadow hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
