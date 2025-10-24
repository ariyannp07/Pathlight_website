'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Users, Briefcase, FileText } from 'lucide-react'

export function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 3000)
  }

  const ctaOptions = [
    {
      icon: Users,
      title: 'For Investors',
      description: 'Learn about our funding opportunities',
      action: 'Contact Investors'
    },
    {
      icon: FileText,
      title: 'Press Inquiry',
      description: 'Media kit and press materials',
      action: 'Press Kit'
    },
    {
      icon: Briefcase,
      title: 'Partnerships',
      description: 'Collaborate with us',
      action: 'Partner With Us'
    }
  ]

  return (
    <section ref={ref} className="py-32 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Blind Community Mission
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Be part of empowering independence for the blind community. Whether you're interested in 
            early access, investment opportunities, or partnerships, we'd love to hear from you.
          </p>
        </motion.div>

        {/* Primary CTA - Waitlist */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/30 mb-16"
        >
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Blind Community Waitlist
            </h3>
            <p className="text-gray-300 mb-6">
              Be among the first blind individuals to experience confident, independent navigation. 
              Get early access and exclusive updates.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 whitespace-nowrap"
              >
                {isSubmitted ? 'Thank You!' : 'Join Waitlist'}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Secondary CTAs */}
        <div className="grid md:grid-cols-3 gap-8">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group-hover:scale-105">
                <option.icon className="w-12 h-12 text-blue-400 mb-6" />
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {option.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {option.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold rounded-full hover:from-gray-600 hover:to-gray-500 transition-all duration-300"
                >
                  {option.action}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <div className="text-2xl font-bold text-white mb-4">Pathlight</div>
          <p className="text-gray-400 mb-4">
            Making eyesight optional. Navigate life with your eyes closed.
          </p>
          <div className="text-gray-500 text-sm">
            © 2024 Pathlight. All rights reserved.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
