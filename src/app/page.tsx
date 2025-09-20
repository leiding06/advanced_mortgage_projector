'use client';
import MortgageForm from '@/components/MortgageForm';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  //let user switch between light and dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 在Load user preferences 
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // switch mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  const navClass = isDarkMode ? "bg-gray-900/40 border-gray-700/30" : "bg-white/40 border-gray-200/30";
  const textClass = isDarkMode ? "text-gray-300" : "text-gray-700";
  const titleClass = isDarkMode ? "text-white" : "text-gray-900";
  const buttonClass = isDarkMode ? "bg-gray-800 text-gray-200 hover:bg-gray-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-gray-950 text-gray-300" : "bg-white text-gray-900"}`}>
      {/* Navbar */}
      <nav className={`flex justify-between items-center px-8 py-4 backdrop-blur-md border-b shadow-sm ${navClass}`}>
        <h1 className={`text-2xl font-bold ${titleClass}`}>
          Advanced Mortgage Projector
        </h1>
        <div className="flex items-center space-x-10">
          <Link href="/tutorial" className={`hover:text-gray-500 transition ${textClass}`}>
            Tutorial
          </Link>
          <Link href="/resources" className={`hover:text-gray-500 transition ${textClass}`}>
            Resources
          </Link>
          <Link href="/login" className={`hover:text-gray-500 transition ${textClass}`}>
            Login
          </Link>
          <Link href="/donate" className={`px-3 py-1 rounded-md text-sm font-medium shadow-md transition-colors ${buttonClass}`}>
            Donate
          </Link>
          <button onClick={toggleTheme} className={`p-2 rounded-full ${buttonClass}`}>
            {isDarkMode ? "💡" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center text-center px-2 py-6 sm:py-16">
        <h2 className={`text-4xl font-bold mb-6 ${titleClass}`}>
          Plan your future with clarity
        </h2>
        <p className={`text-lg max-w-2xl mb-8 ${textClass}`}>
          This tool helps you calculate mortgage payments, project inflation-adjusted costs, and compare different financial plans. Simple, transparent, and tailored for smarter decisions.
        </p>
        
        {/* Render the new form component */}
        <div className="w-full">
            <MortgageForm />
        </div>
      </main>
    </div>
  );
}