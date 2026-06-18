import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#F3F7FF] py-24 min-h-[600px] flex items-center">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Large Curve Top Left */}
        <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[100%] bg-white rounded-full blur-3xl opacity-80"></div>
        {/* Yellow Circle */}
        <div className="absolute top-[10%] left-[20%] w-12 h-12 bg-[#FFCA28] rounded-full shadow-lg z-0"></div>
        {/* Dark Blue Circle */}
        <div className="absolute bottom-[20%] right-[25%] w-6 h-6 bg-[#1E62A1] rounded-full shadow-lg z-0"></div>
        {/* Light Blue curve right side */}
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-[#E8F0FA] rounded-l-full opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col-reverse lg:flex-row items-center relative z-10">
        
        {/* Left Column: Dashboard Mockup (Anchored left/overflowing) */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-[55%] mt-16 lg:mt-0 relative"
        >
          {/* Dashboard Container */}
          <div className="bg-white rounded-r-3xl md:rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-100 flex overflow-hidden w-[120%] lg:w-[140%] -ml-36 md:-ml-36 mt-10 lg:mt-10 lg:-ml-[60%] h-[500px]">
            
            {/* Sidebar (Dark Blue) */}
            <div className="w-48 bg-[#144675] p-6 flex flex-col text-white/70">
              <div className="font-extrabold text-white text-xl mb-10 tracking-tight">Remote<br/>Recruit</div>
              <div className="space-y-4 text-xs font-semibold">
                <div className="bg-white/10 text-white rounded-lg p-3 flex items-center gap-3">
                  <div className="w-4 h-4 bg-white/20 rounded"></div> Find Work
                </div>
                <div className="p-3 flex items-center gap-3">
                  <div className="w-4 h-4 bg-white/20 rounded"></div> Your Jobs
                </div>
                <div className="p-3 flex items-center gap-3">
                  <div className="w-4 h-4 bg-white/20 rounded"></div> Settings
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-gray-50/50 p-6 flex flex-col relative">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-[10px] text-gray-500 font-bold">Welcome Max</div>
                  <div className="text-xl font-extrabold text-gray-900">Let's Find Work</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-64 bg-white border border-gray-200 rounded-full h-10 flex items-center px-4 text-gray-400">
                    <Search size={14} className="mr-2" />
                    <span className="text-xs font-semibold">Search</span>
                  </div>
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center relative">
                    <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>

              {/* Main Body Grid */}
              <div className="flex gap-6 flex-1 h-0">
                {/* Left Side: Jobs */}
                <div className="flex-1 flex flex-col">
                  {/* Pills */}
                  <div className="flex gap-2 mb-6">
                    <div className="px-4 py-1.5 bg-[#144675] text-white text-[10px] font-bold rounded-full">UX/UI</div>
                    <div className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-[10px] font-bold rounded-full">Front End</div>
                    <div className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-[10px] font-bold rounded-full">Back End</div>
                    <div className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-[10px] font-bold rounded-full">Data Science</div>
                  </div>

                  <div className="font-bold text-gray-900 text-sm mb-4">Recent Jobs</div>
                  
                  {/* Job List */}
                  <div className="flex-1 overflow-hidden space-y-4">
                    {/* Job Card 1 */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex gap-4">
                       <div className="w-10 h-10 bg-blue-50 rounded-lg flex-shrink-0"></div>
                       <div>
                         <div className="flex items-center gap-2 mb-1">
                           <span className="text-[10px] font-bold text-gray-900">Google</span>
                           <span className="text-[10px] text-gray-400">Full Time</span>
                         </div>
                         <div className="text-sm font-extrabold text-gray-900 mb-2">Senior UI/UX Designer needed for ongoing support!</div>
                         <div className="h-2 w-3/4 bg-gray-100 rounded-full mb-1"></div>
                         <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                       </div>
                    </div>
                    {/* Job Card 2 */}
                    <div className="bg-[#144675] text-white rounded-2xl p-4 shadow-sm flex gap-4">
                       <div className="w-10 h-10 bg-white/20 rounded-lg flex-shrink-0"></div>
                       <div>
                         <div className="flex items-center gap-2 mb-1">
                           <span className="text-[10px] font-bold text-white">The Muppets</span>
                           <span className="text-[10px] text-blue-200">Full Time</span>
                         </div>
                         <div className="text-sm font-extrabold text-white mb-2">Senior UI/UX Designer needed for ongoing support!</div>
                         <div className="h-2 w-3/4 bg-blue-800 rounded-full mb-1"></div>
                         <div className="h-2 w-1/2 bg-blue-800 rounded-full"></div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Filters */}
                <div className="w-48 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hidden lg:block">
                  <div className="font-bold text-gray-900 text-xs mb-4">Filter</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 border border-gray-300 rounded-sm bg-[#1E62A1]"></div><span className="text-[10px] font-semibold">Full Time</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 border border-gray-300 rounded-sm bg-[#1E62A1]"></div><span className="text-[10px] font-semibold">Part Time</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 border border-gray-300 rounded-sm"></div><span className="text-[10px] font-semibold text-gray-500">Hourly</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 border border-gray-300 rounded-sm bg-[#1E62A1]"></div><span className="text-[10px] font-semibold">Fixed Rate</span></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-[45%] pl-0 lg:pl-16 space-y-6"
        >
          <div className="text-[#1E62A1] font-bold text-sm tracking-wide">
            Are you ready?
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#111827] leading-[1.15]">
            Help is only a few clicks away!
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-md">
            Click Below to get set up super quickly and find help now!
          </p>
          
          <div className="pt-4">
            <button className="flex items-center gap-3 bg-[#E1F0F9] text-[#1E62A1] font-bold text-sm px-2 py-2 pr-6 rounded-full hover:bg-[#D0E6F5] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#52A7D2] flex items-center justify-center text-white">
                <ArrowRight size={16} strokeWidth={3} />
              </div>
              Get Started
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
