'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Radio, Volume2, Brain, ArrowRight } from 'lucide-react'

export function Technology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const techSteps = [
    {
      icon: Radio,
      title: 'Depth Sensing',
      description: 'Advanced sensors map your environment in real-time',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cpu,
      title: 'Spatial Processing',
      description: 'AI processes spatial data to create navigation paths',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Volume2,
      title: 'Audio Guidance',
      description: 'Spatial audio provides precise directional cues',
      color: 'from-blue-700 to-blue-800'
    },
    {
      icon: Brain,
      title: 'Conversation AI',
      description: 'Natural language processing for social interactions',
      color: 'from-blue-800 to-blue-900'
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
            Technology Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Four core technologies working in harmony to create seamless, 
            eyes-closed navigation experiences.
          </p>
        </motion.div>

        {/* Technology flow */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {techSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection arrow */}
              {index < techSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-gray-600" />
                </div>
              )}
              
              {/* Tech card */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical specs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Technical Specifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">12+ Hours</div>
              <div className="text-gray-300">Battery Life</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">99.2%</div>
              <div className="text-gray-300">Navigation Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">50m</div>
              <div className="text-gray-300">Detection Range</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
