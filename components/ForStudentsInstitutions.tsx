'use client'

import { motion } from 'framer-motion'
import { Users, Building2, CheckCircle2, Trophy, BarChart, TrendingUp, Sparkles, Medal, Brain, Rocket, Target, Award } from 'lucide-react'

const studentBenefits = [
  "Improve logical thinking and problem-solving skills",
  "Learn through engaging and interactive experiences",
  "Participate in exciting challenges and tournaments",
  "Earn achievements, rewards, and recognition",
  "Join a vibrant community of growth-focused students",
  "Access personalized AI-powered learning paths",
  "Track your progress with detailed analytics",
  "Compete on global and local leaderboards"
]

const institutionBenefits = [
  "Significantly increase student engagement and participation",
  "Promote AI literacy and critical thinking skills",
  "Organize inter-school and inter-college competitions",
  "Track student participation and growth in real-time",
  "Create a modern, gamified learning environment",
  "Access comprehensive analytics and reports",
  "Enhance institutional reputation with innovative programs",
  "Prepare students for future careers with 21st-century skills"
]

export default function ForStudentsInstitutions() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            For <span className="text-gradient">Students & Institutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Whether you're a student looking to grow or an institution seeking innovation
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Students Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-8 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Why Students Should Join FTG</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {studentBenefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 group/benefit p-2 rounded-lg hover:bg-primary-500/5 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5 group-hover/benefit:scale-110 transition-transform" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <button className="mt-8 btn-primary w-full group">
              Join as Student
              <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          {/* Institutions Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-8 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-secondary-500/20 hover:border-secondary-500/40 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-secondary-500 to-accent-500">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Why Schools & Colleges Should Partner</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {institutionBenefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 group/benefit p-2 rounded-lg hover:bg-secondary-500/5 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5 group-hover/benefit:scale-110 transition-transform" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <button className="mt-8 btn-secondary w-full group">
              Partner with Us
              <Award className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}