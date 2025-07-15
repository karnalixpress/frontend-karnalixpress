'use client';

import React, { useState } from 'react';

export default function Service() {
  const [showServices, setShowServices] = useState(false);

  const services = [
    { title: "🍱 Food Delivery", desc: "Hot meals from local kitchens to your home." },
    { title: "👗 Clothes Delivery", desc: "Dashain outfits or everyday wear delivered fast." },
    { title: "🧵 Tailoring Pickup", desc: "Get tailor items picked and delivered." },
    { title: "🎉 Dashain Essentials", desc: "Tika, masala, meat packs & more at your door." },
  ];

  return (
    <main className="min-h-screen bg-black px-6 py-16 flex flex-col items-center justify-center max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="w-full max-w-md text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Karnali Xpress 🚚</h1>
        <p className="text-gray-300 mb-8">
          The fastest, easiest way to get food, clothes, tailor items, and Dashain goodies delivered right to your home in Karnali.
        </p>

        <button
          onClick={() => setShowServices(!showServices)}
          className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md shadow-md transition duration-300 w-full"
          aria-expanded={showServices}
          aria-controls="services-list"
        >
          {showServices ? "Hide Services" : "👀 See Services"}
        </button>

        {/* Services Dropdown */}
        <div
          id="services-list"
          className={`mt-4 w-full bg-gray-900 rounded-md shadow-lg overflow-hidden transition-max-height duration-500 ease-in-out ${
            showServices ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ transitionProperty: "max-height, opacity" }}
        >
          <h2 className="text-xl font-semibold text-white px-6 py-4 border-b border-gray-700">📦 Our Services</h2>
          <ul className="px-6 py-4 space-y-4 text-gray-300">
            {services.map((service, index) => (
              <li key={index}>
                <div className="font-semibold text-white">{service.title}</div>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
