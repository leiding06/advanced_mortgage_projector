import React from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface SidebarProps {
    title: string;
    content: React.ReactNode;
    onClose: () => void;
    isDarkMode: boolean;
}

/*************   *************/
/**
     * A sidebar component that can be used to display additional information to the user.
     * It should be used sparingly, as it can be distracting if used excessively.
     * The sidebar has a close button that can be used to close it.
     * The sidebar has a title and content sections.
     * The content section can have any content that is desired, such as text, images, or other components.
     * The sidebar is fixed to the right side of the screen and has a width of 80px.
     * The sidebar has a light grey background and a subtle drop shadow to give it depth.
     * The sidebar has a padding of 6px to give it some space between the content and the edge of the sidebar.
     * The sidebar has a scroll bar on the right side to allow the user to scroll through its content if it is taller than the screen.
     * The sidebar is placed above other components on the screen, so it will always appear on top.
     * @param {string} title - The title of the sidebar.
     * @param {React.ReactNode} content - The content of the sidebar.
     * @param {() => void} onClose - The function that will be called when the close button is clicked.
     */
    /*******  d3ddff75-c082-4924-84f3-4a67fa551344  *******/
export default function Sidebar({ title, content, onClose, isDarkMode }: SidebarProps) {
    //dark mode
    const sidebarClass = isDarkMode 
        ? "bg-gray-800 border-gray-700/30 text-gray-300" 
        : "bg-gray-200 border-gray-200 text-gray-900";
    
    const buttonClasses = isDarkMode 
        ? "text-gray-300 hover:text-white" 
        : "text-gray-500 hover:text-gray-700";

    return (
        <ResizableBox
            width={320}
            height={Infinity}
            minConstraints={[200, Infinity]}
            maxConstraints={[600, Infinity]}
            resizeHandles={['w']}
            // remove style here
            className="" 
        >
            {/* for all new styles, avoid inherit from ResizableBox */}
            <div className={`h-full shadow-xl p-6 overflow-y-auto z-50 ${sidebarClass}`}>
                <button 
                    onClick={onClose} 
                    className={`absolute top-4 right-4 text-2xl font-bold ${buttonClasses}`}
                >
                    &times;
                </button>
                <h3 className="text-md font-bold mb-4">{title}</h3>
                <div className="space-y-4">
                    {content}
                </div>
            </div>
        </ResizableBox>

    );
}