'use client';
import React, { useState } from "react";

const shopsData = [
  {
    id: 1,
    name: "Karnali Fresh Mart",
    description: "Your go-to grocery store for fresh produce and essentials.",
    category: "Grocery",
    image: "/shop-icons/freshmart.png",
  },
  {
    id: 2,
    name: "Style Hub",
    description: "Trendy clothes and accessories delivered to your doorstep.",
    category: "Clothes",
    image: "/shop-icons/stylehub.png",
  },
  {
    id: 3,
    name: "Tailor's Touch",
    description: "Custom tailoring and stitching services with pickup and delivery.",
    category: "Tailoring",
    image: "/shop-icons/tailortouch.png",
  },
  {
    id: 4,
    name: "Dashain Essentials",
    description: "All your festival needs like tika, masala, and meat packs.",
    category: "Dashain",
    image: "/shop-icons/dashain.png",
  },
  // Add more shops here...
];

// Unique categories + 'All'
const categories = ["All", ...new Set(shopsData.map(shop => shop.category))];

export default function Shops() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredShops =
    selectedCategory === "All"
      ? shopsData
      : shopsData.filter(shop => shop.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black px-6 py-16 max-w-6xl mx-auto text-gray-300">
      <h1 className="text-4xl font-extrabold text-green-500 mb-8 text-center">
        Shops We Partner With
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-sm font-semibold px-4 py-1 rounded-full transition
              ${
                selectedCategory === cat
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gray-800 text-gray-400 hover:bg-green-700 hover:text-white"
              }`}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Shops Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredShops.map((shop) => (
          <div
            key={shop.id}
            className="bg-gray-900 rounded-lg p-6 shadow-lg flex flex-col items-center text-center hover:shadow-green-500 transition-shadow"
          >
            {/* Shop Image or Placeholder */}
            {shop.image ? (
              <img
                src={shop.image}
                alt={shop.name}
                className="h-24 w-24 object-contain mb-4"
              />
            ) : (
              <div className="h-24 w-24 bg-green-700 rounded-full flex items-center justify-center mb-4 text-3xl font-bold text-black">
                {shop.name.charAt(0)}
              </div>
            )}

            {/* Shop Name */}
            <h2 className="text-xl font-semibold mb-2">{shop.name}</h2>

            {/* Shop Description */}
            <p className="text-gray-400">{shop.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="/contact"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md shadow-md transition"
        >
          Partner Your Shop With Us
        </a>
      </div>
    </main>
  );
}
