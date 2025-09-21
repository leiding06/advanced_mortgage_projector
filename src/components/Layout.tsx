// src/components/Layout.jsx
'use client';

import { useState, useEffect, type ReactNode } from "react";
import Navbar from "./NavBar"; 
import Sidebar from "./Sidebar";
import Tutorial from "./Tutorial"; 
import Resources from "./Resources";
export default function Layout({ children }: { children: ReactNode }) {
  // let user switch between light and dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);
    // User open or close sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    // User switch between side bar content, start with state 'null'
    const [sidebarContent, setSidebarContent] = useState<string | null>(null);
    
    // Load user preferences 
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

    const openSidebar = (contentKey: string) => {
    setSidebarContent(contentKey);
    setIsSidebarOpen(true);
    };
    // close state and content back to null
    const closeSidebar = () => {
        setIsSidebarOpen(false);
        setSidebarContent(null);
    };

    const navClass = isDarkMode ? "bg-gray-900/40 border-gray-700/30" : "bg-white/40 border-gray-200/30";
    const textClass = isDarkMode ? "text-gray-300" : "text-gray-700";
    const titleClass = isDarkMode ? "text-white" : "text-gray-900";
    const buttonClass = isDarkMode ? "bg-gray-800 text-gray-200 hover:bg-gray-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300";

    let contentComponent = null;
    let sidebarTitle = "";

    if (sidebarContent === "tutorial") {
        contentComponent = <Tutorial />;
        sidebarTitle = "Tutorial";
    } else if (sidebarContent === "resources") {
        contentComponent = <Resources />;
        sidebarTitle = "Resources";
    }




    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-gray-950 text-gray-300" : "bg-white text-gray-900"}`}>
        {/* Navbar content */}
        <Navbar 
            navClass={navClass} 
            textClass={textClass} 
            titleClass={titleClass} 
            buttonClass={buttonClass} 
            toggleTheme={toggleTheme} 
            isDarkMode={isDarkMode} 
            openSidebar={openSidebar}
        />
        {/* Main Section: two columns
        add min-h-full can fill the screen*/}
        <div className="flex flex-row flex-grow min-h-screen"> 
        <main className="flex flex-col items-center justify-center text-center px-2 py-3 sm:py-16 flex-grow">
            
            {children}
        </main>

        {isSidebarOpen && contentComponent && (
        <Sidebar
            title={sidebarTitle}
            content={contentComponent}
            onClose={closeSidebar}
            isDarkMode={isDarkMode} 
            />
        )}
    </div>
        </div>
    );
}