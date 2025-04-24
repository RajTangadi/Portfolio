'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative  min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#1F2937] via-[#1f2937] to-[#1F2937] text-[#FFFFFF] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative space-y-4 sm:space-y-6 max-w-2xl mx-auto"
      >
        {/* Avatar */}
        <motion.div 
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image
            src="/Raj.jpg" 
            alt="Developer Avatar"
            width={140}
            height={140}
            className="rounded-full border-4 border-[#6366F1] shadow-lg hover:shadow-xl transition-shadow duration-300"
            priority
          />
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Hi, I&apos;m <span className="text-[#6366F1] hover:text-[#F472B6] transition-colors duration-300">Raj Tangadi</span>
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl font-medium text-[#9CA3AF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Web Developer | React & TypeScript Enthusiast
        </motion.p>

        <motion.p 
          className="text-base sm:text-lg text-[#9CA3AF] max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          I craft beautiful and performant web experiences with modern technologies.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button 
            asChild 
            className="px-6 py-2 text-base sm:text-lg bg-[#6366F1] hover:bg-[#F472B6] text-[#FFFFFF] transition-colors duration-300"
          >
            <a href="/projects">🚀 View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#374151] text-[#FFFFFF] hover:bg-[#F472B6] hover:text-[#FFFFFF] px-6 py-2 text-base sm:text-lg transition-colors duration-300"
          >
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              📄 Download Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
