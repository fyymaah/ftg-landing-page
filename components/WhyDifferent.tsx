'use client'

import { motion } from 'framer-motion'
import { Shield, Rocket, Heart, Infinity, Brain, Sparkles, Trophy, Users, Globe, Zap, Target, Award } from 'lucide-react'

const differences = [
  {
    icon: Rocket,
    title: "AI-First Approach",
    desc: "Personalized learning paths that adapt to each student's pace and style",
    highlight: "Smarter",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Gamified Rewards",
    desc: "Real incentives and recognition that motivate continuous engagement",
    highlight: "Rewarding",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Infinity,
    title: "Endless Challenges",
    desc: "Fresh content and competitions that never get boring or repetitive",
    highlight: "Engaging",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Community Driven",
    desc: "Connect, compete, and collaborate with like-minded learners worldwide",
    highlight: "Connected",
    color: "from-green-500 to-emerald-500"
  },
]

export default function WhyDifferent() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-gradient">FTG Is Different</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            What makes FTG the ultimate choice for modern learners
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-gray-800 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-full h-full text-white" />
                </div>
                <div className="inline-block px-2 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-semibold mb-3">
                  {item.highlight}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20">
            <Trophy className="w-5 h-5 text-primary-400" />
            <span className="text-gray-300">Trusted by students and institutions worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}