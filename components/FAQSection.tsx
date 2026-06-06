'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Mail, MessageCircle } from 'lucide-react'

const faqs = [
  {
    q: "What is FTG and who is it for?",
    a: "FTG (Fun To Grow) is a gamified edutainment platform designed for students of all ages. It combines AI-powered learning, IQ-based gaming, and competitive challenges to make education engaging and effective. Perfect for K-12 students, college learners, and lifelong learners."
  },
  {
    q: "Is FTG free to use?",
    a: "FTG offers a free tier with access to basic features, daily challenges, and community leaderboards. Premium subscriptions unlock advanced AI modules, exclusive tournaments, enhanced rewards, and detailed analytics. Schools receive special pricing for institutional access."
  },
  {
    q: "How does the AI-powered learning work?",
    a: "Our AI adapts to each student's learning pace and style, analyzing performance across quizzes and games. It recommends personalized content, identifies knowledge gaps, and adjusts difficulty levels in real-time to optimize the learning journey."
  },
  {
    q: "Can schools track student progress?",
    a: "Absolutely! Partner institutions get access to a comprehensive admin dashboard showing real-time participation metrics, skill development analytics, engagement trends, and comparative performance reports across classes and batches."
  },
  {
    q: "What kind of rewards can students earn?",
    a: "Students earn coins, achievement badges, trophy milestones, and unlock special features. Top performers get recognized on global and local leaderboards, receive digital certificates, and qualify for real-world rewards and scholarships."
  },
  {
    q: "How do inter-school competitions work?",
    a: "Partner schools can organize custom tournaments where students compete in IQ challenges and knowledge battles. Results are tracked in real-time with dynamic school rankings, and winners receive special recognition and prizes."
  },
  {
    q: "Is FTG safe for students?",
    a: "Yes! FTG is designed with student safety as a priority. We have robust privacy controls, moderated community features, no ads, and compliance with COPPA and GDPR regulations. Parental controls and teacher oversight are built into the platform."
  },
  {
    q: "What platforms does FTG support?",
    a: "FTG is available on iOS, Android, and web browsers. Your progress syncs seamlessly across all devices, so you can learn anywhere, anytime. Offline mode is coming soon for mobile apps."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">Everything you need to know about FTG</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 rounded-xl bg-dark-800/30 backdrop-blur-sm border border-gray-800 hover:border-primary-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform" />
                  <span className="text-left font-medium text-white">{faq.q}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 text-gray-400 bg-dark-900/50 rounded-b-xl border-x border-b border-gray-800 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-dark-800/30 border border-gray-800">
            <Mail className="w-4 h-4 text-primary-400" />
            <span className="text-gray-300">Still have questions?</span>
            <button className="text-primary-400 hover:text-primary-300 transition-colors">Contact Support →</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}