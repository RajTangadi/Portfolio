'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';


const projects = [
  {
    id: 1,
    title: "Text to Image Generator",
    image: "/projects/visionary.ai.png",
    description: "Text-to-image generator built on the MERN stack, utilizing AI to convert text prompts into visual artwork",
    technologies: ["React js", "ShadCN", "Tailwind CSS", "Node js","MongoDB", "Express js", "MongoDb", "Flux model"],
    liveUrl: "https://visionary-ai-hep7.vercel.app",
    githubUrl: "https://github.com/RajTangadi/VisionaryAI"
  },
  {
    id: 2,
    title: "Real Estate App",
    image: "/projects/RealEstate.png",
    description: "A Real Estate App is dynamic platform for buying, selling, or renting properties",
    technologies: ["React", "Tailwind CSS","Node.js", "Express", "MongoDB"],
    liveUrl: "https://mern-estate-2-g6uj.onrender.com",
    githubUrl: "https://github.com/RajTangadi/mern-estate"
  },
  {
    id: 3,
    title: "Movie App",
    image: "/projects/IMDB-clone.png",
    description: "An IMDb Clone project is a web application built to replicate the core functionalities of IMDb, such as browsing movies, TV shows, and celebrities. It typically allows users to search for titles, view detailed information like ratings, reviews, cast, and trailers",
    technologies: ["Next.js", "Clerk", "Tailwind CSS", "Ingest"],
    liveUrl: "https://movie-app-rosy-sigma.vercel.app",
    githubUrl: "https://github.com/RajTangadi/movie-app"
  },
  {
    id: 4,
    title: "Crypto Price Tracking App",
    image: "/projects/cryptocurrency.png",
    description: "An IMDb Clone project is a web application built to replicate the core functionalities of IMDb, such as browsing movies, TV shows, and celebrities. It typically allows users to search for titles, view detailed information like ratings, reviews, cast, and trailers",
    technologies: ["React js"],
    liveUrl: "https://crypto-hunter1.netlify.app",
    githubUrl: "https://github.com/RajTangadi/Crypto-Price-Tracking-App"
  }
];

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
            My Projects
          </h1>
          <div className="w-54 h-1 bg-[#22D3EE] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#374151] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#FFFFFF] mb-3">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-[#22D3EE] text-[#1F2937] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-[#9CA3AF] mb-6">{project.description}</p>

                <div className="flex gap-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-[#22D3EE] hover:text-[#67E8F9] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Live Preview
                  </Link>

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-[#22D3EE] hover:text-[#67E8F9] transition-colors"
                  >
                    <BsGithub />
                    Repo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage; 