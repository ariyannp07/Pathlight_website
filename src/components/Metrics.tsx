'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Clock, Users, Award } from 'lucide-react'

export function Metrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const metrics = [
    {
      icon: Target,
      value: '99.2%',
      label: 'Navigation Accuracy',
      description: 'Tested across 1000+ real-world scenarios'
    },
    {
      icon: Clock,
      value: '12+ Hours',
      label: 'Battery Life',
      description: 'Continuous navigation without interruption'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Beta Testers',
      description: 'Blind community members testing daily'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Awards & Grants',
      description: 'Recognition from leading organizations'
    }
  ]

  return (
    <section ref={ref} className="py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Metrics That Matter
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real results from real testing. These numbers represent thousands of hours 
            of development and validation with the blind community.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-3xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                
                <div className="text-lg font-semibold text-gray-200 mb-2">
                  {metric.label}
                </div>
                
                <div className="text-gray-400 text-sm">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press mentions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Recognition & Press
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-gray-300 mb-2">Featured in</div>
              <div className="text-white font-semibold">TechCrunch</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Winner of</div>
              <div className="text-white font-semibold">Accessibility Innovation Award</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Grant recipient</div>
              <div className="text-white font-semibold">National Science Foundation</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
