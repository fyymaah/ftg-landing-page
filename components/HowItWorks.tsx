'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Gamepad2, Coins, TrendingUp, Rocket, Sparkles, Award, Users } from 'lucide-react'

const steps = [
  {
    icon: GraduationCap,
    title: "Learn",
    description: "Through AI-powered modules and quizzes tailored to your level",
    number: "01",
    color: "from-blue-500 to-cyan-500",
    details: "Personalized curriculum • Adaptive quizzes"
  },
  {
    icon: Gamepad2,
    title: "Play",
    description: "IQ-based games and challenges that test your skills",
    number: "02",
    color: "from-purple-500 to-pink-500",
    details: "Real-time challenges • Skill-based matchmaking"
  },
  {
    icon: Coins,
    title: "Earn",
    description: "Coins, achievements, and rankings for every milestone",
    number: "03",
    color: "from-amber-500 to-yellow-500",
    details: "Daily rewards • Special bonuses"
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Unlock rewards, track progress, and compete on leaderboards",
    number: "04",
    color: "from-green-500 to-emerald-500",
    details: "Progress tracking • Achievement system"
  }
]

export default function HowItWorks() {
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
            How <span className="text-gradient">FTG Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Four simple steps to transform your learning journey
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-2 group">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${step.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-full h-full text-white" />
                </div>
                <div className="text-5xl font-bold text-gray-700 absolute top-4 right-4 group-hover:text-primary-500/20 transition-colors">{step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                <div className="pt-3 border-t border-gray-800/50">
                  <p className="text-xs text-primary-400">{step.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
            <Rocket className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Join thousands of students already growing with FTG</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}