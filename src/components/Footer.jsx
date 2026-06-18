import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative bg-[#286090] mt-[-150px] pt-[150px]">
      {/* Background Wave overlapping Pricing section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[150px] fill-[#286090] rotate-180 scale-x-[-1]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.81,25.9,158.46,51.81,241.6,60.84,268.42,63.76,295.3,61.27,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Github, label: "Github" } // Using Github as placeholder for Snapchat icon
            ].map((social, idx) => (
              <a 
                key={idx} 
                href="#" 
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1A4568] py-6 flex justify-center">
        <div className="w-10 h-10 flex items-center justify-center text-[#52A7D2] font-black text-xl italic tracking-tighter">
          R
        </div>
      </div>
    </footer>
  );
}
