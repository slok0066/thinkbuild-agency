"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    title: "Modern Portfolio Website",
    category: "Web Development",
    image: "/images/portfolio-project.svg",
    description: "A sleek, responsive portfolio website with modern UI animations, theme switching, interactive project galleries, and optimized performance.",
    link: "https://porfolio1-lrha.onrender.com",
    technologies: ["React", "TailwindCSS", "Framer Motion", "JavaScript"]
  },
  {
    title: "Tic-Tac-Toe Game",
    category: "Web Development",
    image: "/images/tictactoe-project.svg",
    description: "An engaging Tic-Tac-Toe game featuring adaptive AI opponents, multiplayer mode, customizable difficulty levels, and real-time score tracking.",
    link: "https://tic-tac-toe-5-ffqy.onrender.com/",
    technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"]
  }
];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headingVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-32 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 sm:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span variants={headingVariants} className="inline-block text-primary font-semibold tracking-wider uppercase mb-2">Our Work</motion.span>
          <motion.h2 variants={headingVariants} className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Featured Projects</motion.h2>
          <motion.div variants={headingVariants} className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full"></motion.div>
          <motion.p variants={headingVariants} className="text-lg md:text-xl text-foreground/80">
            Explore our showcase of innovative solutions that demonstrate our technical expertise and creative problem-solving.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-medium text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies && project.technologies.map((tech, i) => (
                        <span key={i} className="text-sm bg-primary/20 text-primary-foreground px-3 py-1 rounded-full border border-primary/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">
                    {project.category}
                  </span>
                  <motion.div 
                    initial={{ scale: 1 }}
                    animate={{ scale: hoveredIndex === index ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group-hover:underline"
                  >
                    View Live Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}