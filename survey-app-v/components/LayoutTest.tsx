import { useState } from 'react';

export default function VideoTextLayout() {
  // Generate long text content
  const generateLongText = () => {
    const paragraphs: React.JSX.Element[] = [];
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    for (let i = 0; i < 20; i++) {
      paragraphs.push(
        <p key={i} className="mb-4 text-gray-700">
          {loremIpsum}
        </p>
      );
    }
    
    return paragraphs;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left column - Fixed video */}
      <div className="w-3/5 fixed top-0 left-0 h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-video flex items-center justify-center">
            <span className="text-gray-500 font-medium">Video Player</span>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Video Title</h2>
            <p className="text-gray-600">This video stays centered vertically as you scroll the text on the right.</p>
          </div>
        </div>
      </div>
      
      {/* Right column - Scrollable text */}
      <div className="w-2/5 ml-auto p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Long Article Content</h1>
          <div className="prose prose-lg max-w-none">
            {generateLongText()}
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Scroll Behavior</h3>
            <p className="text-blue-700">As you scroll this text, notice how the video on the left remains centered vertically in its column.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
