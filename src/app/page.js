import React from "react";
import Link from "next/link";
import { FaShippingFast, FaMapMarkedAlt, FaClipboardList, FaUsers, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 flex flex-col items-center text-center max-w-4xl mx-auto">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-green-500 mb-6 drop-shadow-md">
        Welcome to Karnali Xpress 🚚
      </h1>

      {/* Subtext */}
      <p className="text-lg text-gray-300 mb-12 max-w-lg">
        Your one-stop solution for fast, reliable, and affordable delivery services across the Karnali region.
      </p>

      {/* Features Section */}
      <section className="w-full max-w-lg mb-16">
        <ul className="text-left text-gray-300 space-y-6 text-base">
          <li className="flex items-center gap-4">
            <FaShippingFast className="text-green-500 text-3xl flex-shrink-0" />
            <span>Super fast, secure, and budget-friendly delivery</span>
          </li>
          <li className="flex items-center gap-4">
            <FaClipboardList className="text-green-500 text-3xl flex-shrink-0" />
            <span>Real-time tracking of your parcels</span>
          </li>
          <li className="flex items-center gap-4">
            <FaMapMarkedAlt className="text-green-500 text-3xl flex-shrink-0" />
            <span>Service available in all major Karnali cities</span>
          </li>
        </ul>
      </section>

      {/* Tracking Form */}
      <form className="w-full max-w-md flex flex-col sm:flex-row gap-4 mb-16" role="search" aria-label="Parcel tracking">
        <input
          type="text"
          aria-label="Enter Tracking ID"
          placeholder="Enter Tracking ID"
          className="flex-grow px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
        >
          Track Now
        </button>
      </form>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md mb-20">
        <Link
          href="/book"
          className="block text-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
        >
          📦 Book a Delivery
        </Link>
        <Link
          href="/contact"
          className="block text-center border border-gray-700 hover:border-green-500 hover:text-green-500 text-gray-300 font-semibold px-6 py-3 rounded-md transition"
        >
          📞 Contact Us
        </Link>
      </div>

      {/* Why Choose Us Section */}
      <section className="w-full max-w-3xl text-left text-gray-300 mb-20">
        <h2 className="text-3xl font-bold text-green-500 mb-8">Why Choose Karnali Xpress?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <FaUsers className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
            <p>Our community relies on us for reliable and timely delivery every time.</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <FaStar className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Top Ratings</h3>
            <p>Consistently rated 5-stars for our customer service and delivery speed.</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <FaShippingFast className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast & Secure</h3>
            <p>State-of-the-art tracking and secure handling of all your packages.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-3xl text-left text-gray-300">
        <h2 className="text-3xl font-bold text-green-500 mb-8">What Our Customers Say</h2>
        <div className="space-y-8">
          <blockquote className="bg-gray-900 p-6 rounded-md shadow-md">
            <p className="italic">"Karnali Xpress is a lifesaver! My packages always arrive on time and in perfect condition."</p>
            <footer className="mt-4 font-semibold">— Sita M.</footer>
          </blockquote>
          <blockquote className="bg-gray-900 p-6 rounded-md shadow-md">
            <p className="italic">"Super fast and friendly service. Highly recommend for anyone in Karnali."</p>
            <footer className="mt-4 font-semibold">— Ram B.</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
