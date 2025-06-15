"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
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

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5
      }
    }
  };

  const gradientVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          variants={gradientVariants}
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-accent opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </motion.div>
        
        {/* Additional decorative elements */}
        <motion.div 
          className="absolute bottom-0 right-0 -z-10 transform-gpu overflow-hidden blur-2xl"
          variants={gradientVariants}
          custom={1}
        >
          <div
            className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/3 bg-gradient-to-l from-accent to-primary opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </motion.div>
      </motion.div>

      <div className="container px-4 sm:px-6">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Hero content */}
          <div className="space-y-10">
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                className="inline-block"
              >
                <span className="bg-primary/10 text-primary px-6 py-3 rounded-full text-base font-semibold tracking-wide">
                  Web & App Development Agency
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
                variants={titleVariants}
              >
                <motion.span 
                  className="block mb-2"
                  variants={itemVariants}
                >
                  From Vision to
                </motion.span>
                <motion.span 
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-x"
                  variants={itemVariants}
                >
                  Digital Dominance
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                We transform bold ideas into exceptional digital experiences that captivate audiences, elevate your brand, and drive measurable business growth.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-6 justify-center"
              variants={containerVariants}
            >
              <motion.a
                href="https://zcal.co/i/_HyRAQtq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-10 py-5 rounded-xl transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Book a Consultation
              </motion.a>
              
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  href="#services"
                  className="bg-secondary/80 text-secondary-foreground hover:bg-secondary px-10 py-5 rounded-xl transition-colors font-semibold text-lg border border-border flex items-center gap-2"
                >
                  Our Services
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="pt-8"
              variants={containerVariants}
            >
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-8"
                variants={itemVariants}
              >
                <div className="flex -space-x-6">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="w-14 h-14 rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-primary-foreground font-medium text-lg shadow-lg"
                      initial={{ opacity: 0, scale: 0.5, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                    >
                      {i}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <p className="font-semibold text-xl">100+ Satisfied Clients</p>
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 + i * 0.1 }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Link href="#services" aria-label="Scroll to services" className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium text-foreground/70">Explore More</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
} 