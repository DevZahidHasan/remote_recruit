import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function GlobalReach() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">

          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6 z-10"
          >
            <div className="inline-block bg-[#DFF0FA] text-[#1E62A1] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
              Global Reach
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-[1.15]">
              The First Fully Global Job Board, Anywhere, Ever
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl pr-4">
              RemoteRecruit connects candidates with opportunities around the world. With today's remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.
            </p>
          </motion.div>

          {/* Right Column: Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
          >
            {/* Background Decorative Circle */}
            <div className="absolute top-0 -left-1 w-4 h-4 bg-[#1E62A1] rounded-full opacity-80"></div>
            
            {/* Dashboard Container */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 max-w-[450px] w-full relative z-10">
              
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-0.5">Welcome Mike</span>
                  <h3 className="text-lg font-extrabold text-gray-900 leading-none">Let's Find Work</h3>
                </div>
                <div className="bg-gray-50 p-2 rounded-full border border-gray-100 text-gray-400">
                  <Search size={16} strokeWidth={3} />
                </div>
              </div>

              {/* Search Area Mock */}
              <div className="bg-gray-50 rounded-xl p-3 mb-6 flex gap-2">
                <div className="flex-1 bg-white rounded-lg p-2 border border-gray-100 h-10"></div>
                <div className="w-10 h-10 bg-[#1E62A1] rounded-lg"></div>
              </div>

              {/* Filters Mock */}
              <div className="flex gap-2 mb-6">
                <div className="h-8 w-16 bg-gray-100 rounded-full"></div>
                <div className="h-8 w-20 bg-gray-100 rounded-full"></div>
                <div className="h-8 w-24 bg-gray-100 rounded-full"></div>
              </div>

              {/* Job List Mock */}
              <div className="space-y-4">
                <div className="h-4 w-24 bg-gray-100 rounded mb-2"></div>
                <div className="border border-gray-100 rounded-xl p-4 flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg"></div>
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="border border-gray-100 rounded-xl p-4 flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg"></div>
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Right Side Filter Panel mock (overflowing partially) */}
              <div className="absolute right-0 top-1/4 translate-x-1/3 bg-white border border-gray-100 shadow-xl rounded-2xl w-32 p-4 hidden md:block z-0">
                <div className="h-3 w-12 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="flex gap-2 items-center"><div className="w-3 h-3 rounded-sm bg-[#1E62A1]"></div><div className="h-2 w-16 bg-gray-100 rounded"></div></div>
                  <div className="flex gap-2 items-center"><div className="w-3 h-3 rounded-sm border border-gray-200"></div><div className="h-2 w-12 bg-gray-100 rounded"></div></div>
                  <div className="flex gap-2 items-center"><div className="w-3 h-3 rounded-sm border border-gray-200"></div><div className="h-2 w-14 bg-gray-100 rounded"></div></div>
                </div>
              </div>

            </div>

            {/* Floating Cards Over Dashboard */}
            
            {/* Card 1: Felonious Gru */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -left-12 bottom-24 bg-white rounded-full py-2.5 px-3 pr-8 shadow-[0_15px_30px_rgba(0,0,0,0.08)] flex items-center gap-3 border border-gray-50 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-400 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gru" alt="Felonious Gru" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#1E62A1] uppercase tracking-wide">Python Developer</span>
                <span className="text-sm font-extrabold text-gray-900 leading-tight">Felonious Gru</span>
              </div>
            </motion.div>

            {/* Card 2: Mel Muselphiem */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -right-4 -bottom-6 bg-white rounded-full py-2.5 px-3 pr-8 shadow-[0_15px_30px_rgba(0,0,0,0.08)] flex items-center gap-3 border border-gray-50 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mel" alt="Mel Muselphiem" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#52A7D2] uppercase tracking-wide">Front End Wizard</span>
                <span className="text-sm font-extrabold text-gray-900 leading-tight">Mel Muselphiem</span>
              </div>
            </motion.div>

            {/* Circular Blue Badge (R logo) */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.7 }}
              className="absolute right-0 top-[60%] translate-x-1/2 w-16 h-16 bg-gradient-to-tr from-[#144675] to-[#287FCA] rounded-full shadow-xl flex items-center justify-center text-white border-[3px] border-white z-30"
            >
              <span className="font-black text-2xl italic tracking-tighter">R</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
