'use client'

import { motion } from 'framer-motion'
import { Frown, TrendingUp, BrainCircuit, Sparkles, AlertCircle, Lightbulb, BarChart3, Target } from 'lucide-react'

const problems = [
  { icon: Frown, title: "The Problem", desc: "Learning often feels boring and passive", color: "from-red-500 to-rose-500" },
  { icon: TrendingUp, title: "The Gap", desc: "Students spend time on entertainment but stay disengaged from education", color: "from-orange-500 to-amber-500" },
]

const solutions = [
  { icon: BrainCircuit, title: "The Solution", desc: "Make learning interactive & rewarding", color: "from-green-500 to-emerald-500" },
  { icon: Sparkles, title: "The Result", desc: "Fun, engagement, and growth combined", color: "from-primary-500 to-secondary-500" },
]

export default function WhyExistsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-950" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-gradient">FTG Exists</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-semibold text-white">The Challenge We're Solving</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Learning often feels boring and passive. Students spend significant time on entertainment platforms 
                but remain disengaged from educational content.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-primary-400" />
              <h3 className="text-xl font-semibold text-white">Our Purpose</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              FTG exists to bridge this gap by making learning <span className="text-primary-400 font-semibold">interactive, rewarding, competitive, and enjoyable</span>.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...problems, ...solutions].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-dark-800/30 backdrop-blur-sm border border-gray-800 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}