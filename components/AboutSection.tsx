'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, Gamepad2, Users, Award, Rocket, Target, Sparkles, Infinity } from 'lucide-react'
import { useRef } from 'react'

const stats = [
  { value: "10K+", label: "Active Students", icon: Users, gradient: "from-blue-500 to-cyan-500" },
  { value: "500+", label: "IQ Challenges", icon: Brain, gradient: "from-purple-500 to-pink-500" },
  { value: "50+", label: "Partner Institutions", icon: Award, gradient: "from-amber-500 to-orange-500" },
  { value: "100K+", label: "Hours Learned", icon: Gamepad2, gradient: "from-green-500 to-emerald-500" },
]

const visionMission = [
  {
    title: "Vision",
    icon: Rocket,
    description: "To become the world's most engaging platform for student growth by combining technology, education, and gamification.",
    gradient: "from-primary-500 to-secondary-500"
  },
  {
    title: "Mission",
    icon: Target,
    description: "To make learning interactive, rewarding, and enjoyable for every student.",
    gradient: "from-secondary-500 to-accent-500"
  }
]

export default function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">FTG</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Redefining the future of education through gamification</p>
        </motion.div>
        
        <motion.div
          style={{ opacity }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary-500/30 transition-all duration-500">
            <p className="text-xl text-gray-300 leading-relaxed">
              <span className="text-2xl font-bold text-gradient">FTG (Fun To Grow)</span>{' '}
              is a next-generation gamified edutainment platform designed for students. It combines AI-powered learning, 
              IQ-based gaming, competitive challenges, leaderboards, and reward-driven engagement into a single ecosystem 
              where students can learn, play, compete, and grow.
            </p>
          </div>
        </motion.div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative text-center p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${stat.gradient} p-2.5 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-full h-full text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          {visionMission.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-dark-800/30 to-dark-900/30 backdrop-blur-sm border border-gray-800 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}