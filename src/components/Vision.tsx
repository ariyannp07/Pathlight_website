'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-32 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Built for the blind community first.
            <br />
            <span className="text-blue-400">
              Designed for independence and confidence.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pathlight represents a fundamental shift in assistive technology. Instead of relying on visual cues, 
            we're building a world where spatial awareness and audio guidance empower blind individuals to navigate 
            independently with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
