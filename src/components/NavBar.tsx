// src/components/Navbar.jsx
'use client';

import Link from "next/link";
// Create a prop for all the classes
interface NavbarProps {
    navClass: string;
    textClass: string;
    titleClass: string;
    buttonClass: string;
    toggleTheme: () => void; // Define the toggleTheme function, no argument and no return value
    isDarkMode: boolean;
    openSidebar: (section: string) => void;
}
export default function NavBar({ navClass, textClass, titleClass, buttonClass, toggleTheme, isDarkMode, openSidebar }: NavbarProps) {
    return (
        <nav className={`flex justify-between items-center px-8 py-4 backdrop-blur-md border-b shadow-sm ${navClass}`}>
        <h1 className={`text-2xl font-bold ${titleClass}`}>
            Advanced Mortgage Projector
        </h1>
        <div className="flex items-center space-x-10">
            <button onClick={() => openSidebar('tutorial')} className={`text-lg font-semibold ${textClass} hover:text-gray-500 transition`}>
            Tutorial
            </button>
            <button onClick={() => openSidebar('resources')} className={`text-lg font-semibold ${textClass} hover:text-gray-500 transition`}>
            Resources
            </button>
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
    );
}