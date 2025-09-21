// src/components/Resources.jsx
import React from 'react';

export default function Resources() {
    return (
        <div className="space-y-4">
        <div>
            <h4 className="font-semibold">Crystal Roof</h4>
            <a href="https://www.crystalroof.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">访问网站</a>
        </div>
        <div>
            <h4 className="font-semibold">Zoopla</h4>
            <a href="https://www.zoopla.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">访问网站</a>
        </div>
        {/* More link items. need to build a TYPE and map out */}
        </div>
    );
}