'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Navigation, Users, Smartphone, Car } from 'lucide-react'

export function UseCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const useCases = [
    {
      icon: Navigation,
      title: 'Independent Navigation',
      description: 'Navigate complex environments with confidence, eyes closed',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Social Confidence',
      description: 'Start and maintain conversations while navigating',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Smartphone,
      title: 'Daily Independence',
      description: 'Complete daily tasks without sighted assistance',
      color: 'from-blue-700 to-blue-800'
    },
    {
      icon: Car,
      title: 'Social Memory (Coming Soon)',
      description: 'For sighted users: AR face recognition and conversation memory',
      color: 'from-blue-800 to-blue-900'
    }
  ]

  return (
    <section ref={ref} className="py-32 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Empowering the Blind Community
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Starting with the blind community, Pathlight provides independence and confidence 
            in navigation. Plus, we're developing Social Memory for sighted users.
          </p>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group-hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/30 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Two Products, One Mission
          </h3>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            <strong>Pathlight</strong> empowers the blind community with confident, independent navigation. 
            <strong>Social Memory</strong> (coming soon) helps sighted users remember faces, past conversations, 
            and access information through AR and audio technology—enhancing social interactions and information access.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">Pathlight</div>
              <div className="text-gray-300">Blind & Visually Impaired Navigation</div>
              <div className="text-sm text-gray-400 mt-2">Available Now</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">Social Memory</div>
              <div className="text-gray-300">Sighted Users: Face Recognition & Conversation Memory</div>
              <div className="text-sm text-gray-400 mt-2">Coming Soon</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
