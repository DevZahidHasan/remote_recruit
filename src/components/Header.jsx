import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B2D4F] shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute border-t-[10px] border-l-[6px] border-r-[6px] border-t-white border-l-transparent border-r-transparent w-0 h-0 transform rotate-180 mb-2"></div>
            <div className="absolute border-b-[10px] border-l-[6px] border-r-[6px] border-b-secondary border-l-transparent border-r-transparent w-0 h-0 transform -rotate-45 ml-2 mt-2"></div>
          </div>
          <span className="text-white text-xl font-bold leading-tight">
            Remote<br/>Recruit
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#signin" className="text-white hover:text-gray-200 transition-colors font-medium">Sign In</a>
          <a href="#signup" className="bg-[#52A7D2] hover:bg-[#408db4] text-white px-6 py-2 rounded-full font-medium transition-colors">
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0B2D4F] shadow-xl flex flex-col items-center py-6 gap-4 border-t border-white/10">
          <a href="#signin" className="text-white font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>Sign In</a>
          <a href="#signup" className="bg-[#52A7D2] text-white px-8 py-3 rounded-full font-medium text-lg w-3/4 text-center" onClick={() => setMobileMenuOpen(false)}>
            Sign Up
          </a>
        </div>
      )}
    </header>
  );
}
