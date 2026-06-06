'use client'

import { Sparkles, Twitter, Github, Linkedin, Mail, Heart, Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  Product: ['Features', 'How It Works', 'Pricing', 'FAQ', 'Changelog'],
  'For Students': ['Learning Paths', 'Challenges', 'Leaderboards', 'Rewards', 'Community'],
  'For Institutions': ['School Partnership', 'College Program', 'Analytics Dashboard', 'Custom Tournaments', 'Teacher Resources'],
  Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security', 'GDPR']
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-gray-800 overflow-hidden">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">FTG</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-sm">
              Transforming education through gamification and AI. Making learning fun, engaging, and rewarding for students worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500 transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary-400" />
              <span className="text-gray-300">Subscribe to our newsletter</span>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full bg-dark-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium hover:from-primary-500 hover:to-primary-400 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FTG - Fun To Grow. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>for the future of education</span>
          </div>
        </div>
      </div>
    </footer>
  )
}