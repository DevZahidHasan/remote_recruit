import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Globe } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="inline-block bg-[#E8F3FA] text-[#1E62A1] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Global Reach
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The First Fully Global Job Board, Anywhere, Ever
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            RemoteRecruit connects candidates with opportunities around the world. With today&rsquo;s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.
          </p>
          
          {/* Mock Feature List */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700">
              <div className="p-2 bg-blue-50 rounded-lg text-[#1E62A1]">
                <Globe size={20} />
              </div>
              <span className="font-medium">Access to 190+ Countries</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className="p-2 bg-blue-50 rounded-lg text-[#1E62A1]">
                <Search size={20} />
              </div>
              <span className="font-medium">Advanced Global Search</span>
            </li>
          </ul>
        </motion.div>

        {/* Right Content - Mockup Image/UI */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          {/* Mockup Container */}
          <div className="bg-[#F8FBFC] border border-gray-100 rounded-2xl p-6 shadow-2xl relative">
            
            {/* Background elements to represent UI */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4 flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-400 mb-1">Let's Find Work</div>
                <div className="h-2 w-32 bg-gray-200 rounded"></div>
              </div>
              <div className="h-8 w-8 bg-blue-100 rounded-full"></div>
            </div>

            <div className="space-y-3">
              <div className="h-16 w-full bg-white rounded-xl shadow-sm border border-gray-50 flex items-center px-4 gap-4">
                 <div className="h-10 w-10 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felonious" alt="avatar" loading="lazy" />
                 </div>
                 <div>
                    <div className="text-xs text-[#1E62A1] font-semibold">Python Developer</div>
                    <div className="text-sm font-bold text-gray-800">Felonious Gru</div>
                 </div>
              </div>

              <div className="h-16 w-full bg-white rounded-xl shadow-sm border border-gray-50 flex items-center px-4 gap-4 relative left-8">
                 <div className="h-10 w-10 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mel" alt="avatar" loading="lazy" />
                 </div>
                 <div>
                    <div className="text-xs text-[#52A7D2] font-semibold">Front End Wizard</div>
                    <div className="text-sm font-bold text-gray-800">Mel Muselphiem</div>
                 </div>
              </div>
              
              <div className="h-16 w-full bg-white rounded-xl shadow-sm border border-gray-50 flex items-center px-4 gap-4">
                 <div className="h-10 w-10 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" alt="avatar" loading="lazy" />
                 </div>
                 <div>
                    <div className="text-xs text-purple-500 font-semibold">UX Designer</div>
                    <div className="text-sm font-bold text-gray-800">Bob The Builder</div>
                 </div>
              </div>
            </div>

            {/* Decorative Icon */}
            <div className="absolute -right-6 -bottom-6 bg-[#1E62A1] text-white p-4 rounded-full shadow-xl">
               <MapPin size={32} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}