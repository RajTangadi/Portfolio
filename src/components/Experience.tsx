'use client'

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Binarystitch Softwares LLP",
    period: "Aug 2024– April 2025",
    role: "Frontend Developer",
    location: "Vasai, India",
    achievements: [
      "Created the skill component, which allows users to effectively add and change their skill sets",
      "Integrated a rich text editor includes that make users simplified and styled the contents of their resume",
      "Created a real-time preview component, helping users visualize their resume layout before finalizing it",
      "Utilized Radix UI for building accessible and customizable UI components"
    ]
  }
]

const Experience = () => {
  return (
    <section className="px-4 sm:px-4 bg-[#1F2937] ">
      <div className="max-w-3xl mx-auto">
        <div className="underline decoration-wavy decoration-[#22D3EE] md:flex">
          <motion.h2 
            className="text-xl font-bold text-center mb-5 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
        </div>

        <div className="mt-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-8 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#22D3EE]"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-0 w-3 h-3 rounded-full bg-[#22D3EE]"></div>

              <div className="bg-[#374151] rounded-lg p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#FFFFFF]">{experience.company}</h3>
                  <span className="text-[#22D3EE] text-sm">{experience.period}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                  <span className="text-[#9CA3AF] font-medium">{experience.role}</span>
                  <span className="hidden sm:block text-[#9CA3AF]">•</span>
                  <span className="text-[#9CA3AF]">{experience.location}</span>
                </div>

                <ul className="list-disc list-inside space-y-2">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-[#9CA3AF]">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 