import { motion } from 'framer-motion';
import { Check, Play, Star } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        
        {/* Row 1: Fee-Free Forever */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Premium Tier Card Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative flex justify-center"
          >
            {/* Background Decorative Element */}
            <div className="absolute -top-6 -left-6 w-8 h-8 bg-[#1E62A1] rounded-full opacity-85"></div>
            
            {/* Main Premium Card */}
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] max-w-md w-full relative z-10">
              
              <div className="mb-6">
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">Your Membership Tier</span>
                <h3 className="text-3xl font-extrabold text-[#1E62A1] tracking-tight">Premium</h3>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest block mb-4">Features</span>
                <ul className="space-y-4">
                  {[
                    "Up to 25 active job posts",
                    "Premium Placement & Visibility",
                    "Messaging anyone, unlimited",
                    "Unlimited invites",
                    "View all applicants",
                    "Unlimited invites to jobseekers"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3.5">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E8F3FA] flex items-center justify-center text-[#1E62A1] flex-shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute -right-10 top-1/4 z-30 flex items-center">
                <div className="relative">
                  {/* R Badge */}
                  <div className="w-16 h-16 bg-gradient-to-tr from-[#144675] to-[#52A7D2] rounded-full shadow-lg flex items-center justify-center text-white border-[3px] border-white relative z-10">
                    <span className="font-black text-2xl italic tracking-tighter">R</span>
                  </div>   
                </div>
              </div>
            </div>

            {/* Floating PayPal Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 left-4 md:-left-4 bg-white border border-gray-100/80 rounded-2xl py-3 px-5 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3.5 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                {/* PayPal Styled "P" logo */}
                <span className="font-black text-xl italic font-sans">P</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-semibold block uppercase">Upcoming Payment In...</span>
                <span className="text-sm font-bold text-gray-900">14 Days - $79.99</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-block bg-[#E8F3FA] text-[#1E62A1] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
              Actually Fee Free
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Fee-Free Forever
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              We don&rsquo;t charge you fees and we don&rsquo;t put up paywalls. We&rsquo;re the bridge that connects job opportunities with the best candidates, with no middleman involved.
            </p>
          </motion.div>

        </div>

        {/* Row 2: Showcase Your Talents */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          
          {/* Right Column: User Profile Cards Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative flex justify-center"
          >
            {/* Background Decorative Element */}
            <div className="absolute -top-6 right-12 w-8 h-8 bg-[#52A7D2] rounded-full opacity-85"></div>
            
            {/* Main Showcase Profile Card */}
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] max-w-md w-full relative z-10 space-y-6">
              
              {/* Profile Card Header with Video Overlay */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-white border border-gray-100 flex flex-col group shadow-inner">
                {/* Banner Area */}
                <div className="h-1/2 w-full bg-gradient-to-r from-[#144675] to-[#40128B] p-4 relative">
                  {/* Decorative blobs */}
                  <div className="absolute right-0 top-0 w-24 h-24 bg-purple-500 rounded-full mix-blend-overlay opacity-50 blur-xl"></div>
                  <div className="absolute right-12 bottom-0 w-16 h-16 bg-blue-400 rounded-full mix-blend-overlay opacity-60 blur-lg"></div>
                  
                  <span className="text-white font-extrabold text-sm block drop-shadow-sm relative z-10">102 Jobs Completed!</span>
                  <span className="text-white/70 text-[8px] font-semibold block uppercase tracking-wider relative z-10">$150,000 Earned on Platform</span>
                  
                  {/* Controls dot row top right */}
                  <div className="absolute top-3 right-3 flex gap-1 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  </div>
                </div>

                {/* Bottom Area */}
                <div className="h-1/2 w-full bg-gray-50/50 p-4 pt-8">
                  <div className="h-2 w-16 bg-gray-200 rounded-full mb-3"></div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full mb-2"></div>
                  <div className="h-1.5 w-3/4 bg-gray-100 rounded-full"></div>
                </div>

                {/* Overlapping User Bar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-white rounded-full p-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.08)] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 overflow-hidden ml-1 border border-gray-100">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dylan" alt="Dylan" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-gray-900 block leading-tight">Dylan Harrison</span>
                    <span className="text-[8px] text-gray-400 font-medium block">Front End Wizard</span>
                  </div>
                  <div className="px-2">
                    <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                  </div>
                  <div className="px-3">
                    <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
                  </div>
                </div>

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <div className="w-14 h-14 rounded-full bg-[#52A7D2]/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-white pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Play size={20} className="fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Tag / Profile Details Section */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 pt-2 justify-center">
                  {[
                    "Python Dev",
                    "Javascript",
                    "Front End",
                    "Back End",
                    "iOS Development",
                    "+12"
                  ].map((tag, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                        tag === "+12" 
                          ? "bg-[#E8F3FA] text-[#1E62A1]" 
                          : "bg-gray-50 text-gray-600 border border-gray-100"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Client Feedback Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-6 -left-6 md:-left-12 bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3.5 z-20 max-w-xs"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 flex-shrink-0">
                <Star size={20} className="fill-current" />
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-semibold block uppercase">Post Client Feedback</span>
                <span className="text-sm font-bold text-gray-900 block leading-tight">Best Developer Ever!</span>
              </div>
            </motion.div>

            {/* Right side floating Avatar */}
            <div className="absolute right-0 top-1/2 w-14 h-14 bg-white rounded-full shadow-lg border-2 border-white z-20 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nala" alt="user avatar" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-block bg-[#E8F3FA] text-[#1E62A1] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
              Custom Profile
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Showcase Your Talents
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
