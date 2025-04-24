'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Projects from "./Projects"

const frontendTechs = [
  { name: "HTML", logo: "/tech/html.svg" },
  { name: "CSS", logo: "/tech/css.svg" },
  { name: "TypeScript", logo: "/tech/typescript.svg" },
  { name: "JavaScript", logo: "/tech/javascript.svg" },
  { name: "Next.js", logo: "/tech/nextjs.svg" },
  { name: "Shadcn", logo: "/tech/shadcn.png" },
  { name: "React", logo: "/tech/react.svg" },
  { name: "Bootstrap", logo: "/tech/bootstrap.svg" },
  { name: "Material UI", logo: "/tech/material-ui.svg" },
  { name: "Tailwind CSS", logo: "/tech/tailwind.svg" },
  { name: "Redux Toolkit", logo: "/tech/redux.svg" },
]

const backendTechs = [
  { name: "Node.js", logo: "/tech/nodejs.svg" },
  { name: "MongoDB", logo: "/tech/mongodb.svg" },
  { name: "Express.js", logo: "/tech/express.svg" },
  { name: "Java", logo: "/tech/java.svg" },
  { name: "MySQL", logo: "/tech/mysql.svg" },
  { name: "Supabase", logo: "/tech/supabase.svg" },
]

const Technology = () => {
  return (
    <>
      <section className="px-4 sm:px-4 bg-[#1F2937]">
        <div className="max-w-3xl mx-auto">
          <div className="underline decoration-wavy decoration-[#22D3EE] md:flex">
            <motion.h2 
              className="text-xl font-bold text-center mb-5 text-[#FFFFFF]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Tools that I have used
            </motion.h2>
          </div>

          {/* Frontend Technologies Marquee */}
          <div className="relative overflow-hidden py-8 w-full max-w-[1200px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937] via-transparent to-[#1F2937] z-10 pointer-events-none"></div>
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[...frontendTechs, ...frontendTechs].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center min-w-[100px]"
                >
                  <div className="w-8 h-8 relative">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[#9CA3AF] text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Backend Technologies Marquee */}
          <div className="relative overflow-hidden py-8 w-full max-w-[1200px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937] via-transparent to-[#1F2937] z-10 pointer-events-none"></div>
            <motion.div
              className="flex gap-8"
              animate={{
                x: [-1000, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[...backendTechs, ...backendTechs].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center min-w-[100px]"
                >
                  <div className="w-8 h-8 relative">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[#9CA3AF] text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Projects />
    </>
  )
}

export default Technology
