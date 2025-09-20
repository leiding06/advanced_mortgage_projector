"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-gray-900 to-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md border-b border-purple-700/30">
        <h1 className="text-2xl font-bold text-purple-300">
          Advanced Mortgage Calculator
        </h1>
        <div className="space-x-6">
          <Link href="/tutorial" className="hover:text-purple-400 transition">
            Tutorial
          </Link>
          <Link href="/resources" className="hover:text-purple-400 transition">
            Resources
          </Link>
          <Link href="/login" className="hover:text-purple-400 transition">
            Login
          </Link>
          <Link
            href="/donate"
            className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-md text-sm font-medium shadow-md"
          >
            Donate
          </Link>
        </div>
      </nav>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h2 className="text-4xl font-bold mb-6">
          Plan your future with clarity 
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          This tool helps you calculate mortgage payments, project inflation-adjusted
          costs, and compare different financial plans.  
          Simple, transparent, and tailored for smarter decisions.
        </p>
        <Link
          href="/calculator"
          className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:scale-105 transition-transform"
        >
          Start Calculating
        </Link>
      </main>
    </div>
  );
}
