'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, Eye, EyeOff } from 'lucide-react'

export function Demo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
            Designed for Blind Navigation
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how Pathlight transforms navigation challenges for the blind community into 
            confident, independent mobility experiences.
          </p>
        </motion.div>

        {/* Demo comparison */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Traditional navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
          >
            <div className="flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-gray-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-300">Current Challenges</h3>
            </div>
            
            {/* Demo placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Limited independence</p>
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                Reliance on sighted assistance
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                Limited mobility confidence
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                Navigation anxiety and uncertainty
              </li>
            </ul>
          </motion.div>

          {/* Pathlight navigation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"
          >
            <div className="flex items-center justify-center mb-6">
              <EyeOff className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Pathlight Solution</h3>
            </div>
            
            {/* Demo placeholder */}
            <div className="aspect-video bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
              <div className="text-center relative z-10">
                <Play className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <p className="text-blue-200">Confident independence</p>
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                Navigate independently with confidence
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                Real-time spatial awareness
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                Enhanced mobility and freedom
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
