'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center text-green-500 font-extrabold text-2xl select-none">
            <img src="/logo.png" alt="Karnali Xpress" className="h-10 w-10 mr-3" />
            Karnali Xpress
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center text-gray-300">
            <Link href="/" className="hover:text-green-400 transition duration-200">Home</Link>
            <Link href="/services" className="hover:text-green-400 transition duration-200">Services</Link>
            <Link href="/pricing" className="hover:text-green-400 transition duration-200">Pricing</Link>
            <Link href="/contact" className="hover:text-green-400 transition duration-200">Contact</Link>
            <Link href="/shops" className="hover:text-green-400 transition duration-200">Shops</Link>

            {/* Login Link */}
            <Link href="/login" className="hover:text-green-400 transition duration-200">
              Login
            </Link>

            {/* Signup Button */}
            <Link
              href="/signup"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold transition duration-200 select-none"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              className="text-gray-300 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
            >
              {menuOpen ? (
                // Close icon
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-green-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-green-400 transition duration-200"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-green-400 transition duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-green-400 transition duration-200"
            >
              Contact
            </Link>
            <Link
              href="/shops"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-green-400 transition duration-200"
            >
              Shops
            </Link>

            {/* Login Link */}
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-green-400 transition duration-200"
            >
              Login
            </Link>

            {/* Signup Button */}
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold text-center transition duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
