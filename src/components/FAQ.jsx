import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "How does RemoteRecruit verify candidates?",
    answer: "All candidates go through a rigorous screening process which includes skill assessments, portfolio reviews, and background checks to ensure you have access to top-tier talent."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, RemoteRecruit is completely transparent. There are no paywalls for candidates and businesses are only charged a flat rate upon successful hiring."
  },
  {
    question: "Can I hire for both full-time and freelance roles?",
    answer: "Yes! Our platform supports full-time, part-time, and freelance contracts. You can easily filter candidates by their availability and preferred work type."
  },
  {
    question: "Is there a trial period for new hires?",
    answer: "We offer a 30-day satisfaction guarantee. If the hire isn't a good fit within the first month, we will help you find a replacement at no additional cost."
  }
];

export function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-xl font-semibold text-gray-800">{faq.question}</span>
        <span className="text-[#1E62A1] ml-4 flex-shrink-0">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 text-lg leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-[#F8FBFC]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Common Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Everything you need to know about how RemoteRecruit works.
          </motion.p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
          {faqData.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}