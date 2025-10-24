'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Battery, Wifi, Zap, Shield } from 'lucide-react'

export function Product() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Battery,
      title: '12+ Hour Battery',
      description: 'All-day navigation without interruption'
    },
    {
      icon: Wifi,
      title: '5G Connectivity',
      description: 'Real-time updates and cloud processing'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Sub-50ms latency for real-time guidance'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Local processing keeps your data secure'
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
            The Product
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Premium technology that speaks for itself. Every detail engineered 
            for seamless, eyes-closed navigation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Device showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Simple device mockup */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Device frame */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                {/* Screen area */}
                <div className="bg-black rounded-xl p-4 border border-gray-600">
                  <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg" />
                  </div>
                </div>
                
                {/* Device details */}
                <div className="mt-4 space-y-2">
                  <div className="h-1.5 bg-gray-600 rounded-full" />
                  <div className="h-1.5 bg-gray-600 rounded-full w-3/4" />
                  <div className="h-1.5 bg-gray-600 rounded-full w-1/2" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Specs table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Technical Specifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-800">
                <span className="text-gray-300">Weight</span>
                <span className="text-white font-semibold">45g</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-800">
                <span className="text-gray-300">Battery Life</span>
                <span className="text-white font-semibold">12+ hours</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-800">
                <span className="text-gray-300">Detection Range</span>
                <span className="text-white font-semibold">50 meters</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-800">
                <span className="text-gray-300">Connectivity</span>
                <span className="text-white font-semibold">5G, WiFi 6</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-800">
                <span className="text-gray-300">Audio Quality</span>
                <span className="text-white font-semibold">Spatial Audio</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-800">
                <span className="text-gray-300">Water Resistance</span>
                <span className="text-white font-semibold">IPX7</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
