import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="relative z-20 bg-transparent pt-24 pb-8">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16"
        >
          Help Is One Click Away
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch relative z-10">
          
          {/* Free Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col justify-between"
          >
            <div className="flex gap-6 mb-8">
              <div className="w-1/3 bg-[#F4F7FE] rounded-2xl flex flex-col items-center justify-center p-6 text-center h-40">
                <h3 className="text-2xl font-bold text-[#52A7D2] mb-1">Free</h3>
                <p className="text-gray-400 text-sm font-semibold">Basic</p>
              </div>
              
              <div className="flex-1 flex flex-col justify-center space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="bg-[#1E62A1] text-white rounded-full p-0.5"><Check size={12} strokeWidth={4} /></div>
                  <span className="text-sm font-semibold text-gray-700">1 Active Job</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#1E62A1] text-white rounded-full p-0.5"><Check size={12} strokeWidth={4} /></div>
                  <span className="text-sm font-semibold text-gray-700">Basic List Placement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-300 text-white rounded-full p-0.5"><X size={12} strokeWidth={4} /></div>
                  <span className="text-sm font-semibold text-gray-400">Unlimited Job Applicants</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-300 text-white rounded-full p-0.5"><X size={12} strokeWidth={4} /></div>
                  <span className="text-sm font-semibold text-gray-400">Invite Anyone to Apply to Your Jobs</span>
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 rounded-2xl border-2 border-[#1E62A1] text-[#1E62A1] font-bold text-sm hover:bg-[#1E62A1]/5 transition-colors">
              Get Started
            </button>
          </motion.div>

          {/* Premium Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col justify-between"
          >
            <div className="flex gap-6 mb-8">
              <div className="w-1/3 bg-[#F4F7FE] rounded-2xl flex flex-col items-center justify-center p-6 text-center h-40 relative">
                <div className="absolute -top-3 bg-[#DDF1FA] text-[#1E62A1] px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <svg className="w-3 h-3 text-[#1E62A1]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 12l10 10 10-10L12 2zm0 17L4.41 12 12 4.41 19.59 12 12 19z"/>
                  </svg>
                  Premium
                </div>
                <h3 className="text-3xl font-extrabold text-[#1E62A1] mb-1">$79.99</h3>
                <p className="text-gray-400 text-sm font-semibold">Per Month</p>
              </div>
              
              <div className="flex-1 flex flex-col justify-center space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="bg-[#52A7D2] text-white rounded-full p-0.5"><Check size={12} strokeWidth={4} /></div>
                  <span className="text-sm font-semibold text-gray-700">Unlimited Job Posts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#52A7D2] text-white rounded-full p-0.5"><Check size={12} strokeWidth={4} /></div>
                  <span className="text-sm font-semibold text-gray-700">Instant Job Post Approval</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#52A7D2] text-white rounded-full p-0.5"><Check size={12} strokeWidth={4} /></div>
                  <span className="text-sm font-semibold text-gray-700">Premium List Placement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#52A7D2] text-white rounded-full p-0.5"><Check size={12} strokeWidth={4} /></div>
                  <span className="text-sm font-semibold text-gray-700">Unlimited Job Applicants</span>
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#2B609A] to-[#1C3A6B] text-white font-bold text-sm shadow-md hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
