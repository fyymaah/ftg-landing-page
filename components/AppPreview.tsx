'use client'

import { motion } from 'framer-motion'
import { Phone, Download, Star, Shield, Zap, Sparkles, ArrowRight } from 'lucide-react'

export default function AppPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Experience the <span className="text-gradient">FTG App</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A seamless, intuitive interface that makes learning addictive and fun. Track your progress, compete with friends, and earn rewards - all in one place.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <Star className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-gray-300">4.9 Rating on App Store</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-500/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-secondary-400" />
                </div>
                <span className="text-gray-300">100% Secure & Private</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-gray-300">Real-time Sync Across Devices</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary group">
                <Download className="w-4 h-4" />
                App Store
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group">
                <Download className="w-4 h-4" />
                Google Play
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto w-80 h-[550px] rounded-[3rem] border-4 border-gray-700 overflow-hidden shadow-2xl bg-gradient-to-b from-primary-900/20 to-dark-900">
              {/* Dynamic Island */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark-800 rounded-b-xl z-10" />
              
              {/* Screen Content */}
              <div className="p-4 h-full flex flex-col">
                <div className="text-center mb-4 mt-4">
                  <span className="text-gradient font-bold text-lg">FTG</span>
                </div>
                
                {/* Animated UI Elements */}
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-3 rounded-xl bg-dark-800/50 border border-gray-700 animate-pulse-slow" style={{ animationDelay: `${i * 0.3}s` }}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500" />
                        <div className="flex-1">
                          <div className="h-2 w-24 bg-gray-600 rounded mb-2" />
                          <div className="h-1.5 w-32 bg-gray-700 rounded" />
                        </div>
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom Navigation Mock */}
                <div className="mt-auto flex justify-around py-3 border-t border-gray-800">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary-400 rounded" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-800" />
                  <div className="w-8 h-8 rounded-full bg-gray-800" />
                  <div className="w-8 h-8 rounded-full bg-gray-800" />
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl animate-pulse-slow" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl animate-pulse-slow animation-delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}