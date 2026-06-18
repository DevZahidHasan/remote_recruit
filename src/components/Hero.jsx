import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-[#1E62A1] min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#287FCA] rounded-full blur-[100px] opacity-50 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#144675] rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white pb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
        >
          RemoteRecruit&rsquo;s Difference
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
        >
          RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there&rsquo;s nothing but you, your talents, and the next step in your career.
        </motion.p>
      </div>

      {/* Hero bottom curve shape divider */}
      <div className="hero-curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.81,25.9,158.46,51.81,241.6,60.84,268.42,63.76,295.3,61.27,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}