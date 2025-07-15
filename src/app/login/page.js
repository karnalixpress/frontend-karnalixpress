'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError(null);
    // TODO: Add your auth logic here (API call, firebase, etc)
    console.log("Logging in with", { email, password });
  };

  return (
    <main className="min-h-screen bg-black flex flex-col justify-center items-center px-6 py-16 text-gray-300">
      <div className="max-w-md w-full bg-gray-900 rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-extrabold text-green-500 mb-6 text-center">
          Login to Karnali Xpress
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-500 transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-500 transition"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-green-400">
            <Link href="/forgot-password" className="hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md shadow-md transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-green-500 hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
