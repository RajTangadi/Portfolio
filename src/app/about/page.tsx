'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen bg-[#1F2937] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#22D3EE] mb-4">
            About Me
          </h1>
          <div className="w-45 h-1 bg-[#22D3EE] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Image Section */}
          <motion.div
            className="relative h-80 md:h-96 w-full"
            variants={itemVariants}
          >
            <Image
              src="/Raj.jpg"
              alt="Raj Tangadi"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-6 text-[#9CA3AF]"
            variants={itemVariants}
          >
            <motion.p
              className="text-lg leading-relaxed"
              variants={itemVariants}
            >
              Hello, my name is{' '}
              <span className="text-[#22D3EE] font-semibold">Raj Tangadi</span>. I recently graduated with a 
              Bachelor&apos;s degree in Computer Science from{' '}
              <span className="text-[#22D3EE] font-semibold">Mumbai University</span>.
              During my academic journey, I gained a strong foundation in{' '}
              <span className="text-[#22D3EE]">React</span>,{' '}
              <span className="text-[#22D3EE]">JavaScript</span>, and{' '}
              <span className="text-[#22D3EE]">MongoDB</span>.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              variants={itemVariants}
            >
             I am Worked as an Intern at{' '}
              <span className="text-[#22D3EE] font-semibold">Binary Stitch Solution</span>,
              where I am gaining hands-on experience as a{' '}
              <span className="text-[#22D3EE]">Web Developer</span>. 
              I am passionate about building and designing web applications and am eager to learn and grow in the 
              field of technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-[#374151] rounded-lg text-[#22D3EE]"
              >
                React
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-[#374151] rounded-lg text-[#22D3EE]"
              >
                JavaScript
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-[#374151] rounded-lg text-[#22D3EE]"
              >
                MongoDB
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-[#374151] rounded-lg text-[#22D3EE]"
              >
                Next.js
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
