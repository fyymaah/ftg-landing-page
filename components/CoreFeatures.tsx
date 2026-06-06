'use client'

import { motion } from 'framer-motion'
import { Brain, Trophy, Medal, Users, BarChart3, Shield, Zap, Target, Globe, Clock, Gift, Star } from 'lucide-react'

const features = [
  { icon: Brain, title: "AI-Powered Learning", desc: "Personalized learning paths powered by adaptive AI algorithms that evolve with each student", color: "from-cyan-500 to-blue-500", benefits: "Adaptive difficulty • Smart recommendations" },
  { icon: Zap, title: "IQ-Based Gaming", desc: "Challenging games designed to boost cognitive abilities and critical thinking skills", color: "from-yellow-500 to-orange-500", benefits: "Real-time feedback • Skill tracking" },
  { icon: Trophy, title: "Competitive Challenges", desc: "Real-time tournaments and skill-based competitions with global participation", color: "from-purple-500 to-pink-500", benefits: "Daily events • Seasonal tournaments" },
  { icon: Medal, title: "Leaderboards", desc: "Global and local rankings to showcase achievements and track progress", color: "from-green-500 to-emerald-500", benefits: "Weekly resets • Achievement tiers" },
  { icon: Users, title: "Community Learning", desc: "Collaborative challenges and team-based activities that foster peer learning", color: "from-blue-500 to-indigo-500", benefits: "Study groups • Team events" },
  { icon: BarChart3, title: "Progress Analytics", desc: "Detailed insights into learning patterns, strengths, and growth areas", color: "from-red-500 to-rose-500", benefits: "Visual reports • Skill mapping" },
  { icon: Shield, title: "Reward System", desc: "Earn coins, badges, and unlockable achievements for every milestone", color: "from-amber-500 to-yellow-500", benefits: "Real rewards • NFT badges" },
  { icon: Target, title: "Skill Development", desc: "Focus on critical thinking, problem-solving, and real-world applications", color: "from-teal-500 to-cyan-500", benefits: "Career readiness • Life skills" },
]

export default function CoreFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Core <span className="text-gradient">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Everything you need to transform learning into an exciting adventure
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-dark-800/30 backdrop-blur-sm border border-gray-800 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{feature.desc}</p>
              <div className="pt-3 border-t border-gray-800/50">
                <p className="text-xs text-primary-400">{feature.benefits}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}