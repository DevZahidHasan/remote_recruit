import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0B2D4F] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-6 h-6">
            <div className="absolute border-t-[8px] border-l-[5px] border-r-[5px] border-t-white border-l-transparent border-r-transparent w-0 h-0 transform rotate-180 mb-2"></div>
            <div className="absolute border-b-[8px] border-l-[5px] border-r-[5px] border-b-secondary border-l-transparent border-r-transparent w-0 h-0 transform -rotate-45 ml-2 mt-2"></div>
          </div>
          <span className="text-white text-lg font-bold">RemoteRecruit</span>
        </div>
        
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} RemoteRecruit. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}