'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function Backers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const backers = [
    { name: 'Yale University', logo: '🏛️' },
    { name: 'Princeton University', logo: '🎓' },
    { name: 'Penn State', logo: '🦁' },
    { name: 'Iowa University', logo: '🐯' },
    { name: 'NSF-I Corps', logo: '🔬' },
    { name: 'NSHSS', logo: '⭐' },
    { name: 'Yale Tsai Accelerator', logo: '🚀' },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Backers
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Backed financially (non-dilutive) by leading universities and organizations. 
            Founded by Stanford and Yale students studying entrepreneurship, healthcare, and engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="flex animate-scroll">
            {/* Duplicate the logos for seamless scrolling */}
            {[...backers, ...backers].map((backer, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex flex-col items-center justify-center min-w-[200px]">
                <div className="text-6xl mb-4">{backer.logo}</div>
                <div className="text-white font-semibold text-center">{backer.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">
              Founded by Stanford & Yale Students
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our team combines expertise in entrepreneurship, healthcare, and engineering 
              from two of the world's leading universities, bringing together academic 
              excellence and real-world impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
