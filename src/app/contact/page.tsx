"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        damping: 12
      }
    }
  };

  return (
    <main className="container py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Background elements */}
        {mounted && (
          <>
            <motion.div 
              className="absolute -top-40 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute top-60 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute bottom-40 left-1/2 -translate-x-1/2 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2
              }}
            />
          </>
        )}

        <motion.div
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link 
              href="/" 
              className="text-primary hover:text-primary/80 flex items-center gap-2 mb-8 group aura-primary"
            >
              <motion.div 
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </motion.div>
              <span className="group-hover:underline">Back to Home</span>
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="relative w-64 h-24 mx-auto mb-8 aura-glow">
              <Image 
                src="/images/thinkbuild-logo.svg" 
                alt="ThinkBuild Logo" 
                fill
                className="object-contain dark:block hidden animate-float" 
                priority
              />
              <Image 
                src="/images/thinkbuild-logo-light.svg" 
                alt="ThinkBuild Logo" 
                fill
                className="object-contain dark:hidden block animate-float" 
                priority
              />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent bg-size-200 animate-gradient-x text-shadow-glow"
          >
            Contact Us
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-xl text-foreground/70 mb-12 text-center max-w-2xl mx-auto"
          >
            We'd love to hear from you. Let's build something amazing together.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              className="bg-background shadow-lg rounded-xl p-8 border border-border relative overflow-hidden group aura-pulse"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-8 flex items-center">
                  <motion.span 
                    className="bg-primary/10 p-2 rounded-lg mr-3 aura-primary"
                    whileHover={{ rotate: 15 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </motion.span>
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <motion.div 
                    className="flex items-start gap-4 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="bg-primary/10 p-3 rounded-full group-hover/item:bg-primary/20 transition-colors aura-primary"
                      whileHover={{ rotate: 15 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <a 
                        href="mailto:thinkbuild8@gmail.com" 
                        className="text-primary hover:underline inline-flex items-center gap-1 group-hover/item:gap-2 transition-all aura-shine"
                      >
                        thinkbuild8@gmail.com
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </motion.svg>
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="bg-primary/10 p-3 rounded-full group-hover/item:bg-primary/20 transition-colors aura-primary"
                      whileHover={{ rotate: 15 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <a 
                        href="tel:+19204527554" 
                        className="text-foreground/80 hover:text-primary inline-flex items-center gap-1 group-hover/item:gap-2 transition-all aura-shine"
                      >
                        +1 (920) 452-7554
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </motion.svg>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Business Hours */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              className="bg-background shadow-lg rounded-xl p-8 border border-border relative overflow-hidden group aura-pulse"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-8 flex items-center">
                  <motion.span 
                    className="bg-accent/10 p-2 rounded-lg mr-3 aura-accent"
                    whileHover={{ rotate: 15 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.span>
                  Business Hours
                </h2>
                
                <ul className="space-y-5">
                  <motion.li 
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-foreground/5 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium flex items-center gap-2">
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-5 h-5 text-primary"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </motion.svg>
                      Monday - Friday
                    </span>
                    <span className="text-foreground/80 bg-primary/5 py-1 px-3 rounded-full text-sm">9:00 AM - 6:00 PM</span>
                  </motion.li>
                  
                  <motion.li 
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-foreground/5 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium flex items-center gap-2">
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-5 h-5 text-accent"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </motion.svg>
                      Saturday
                    </span>
                    <span className="text-foreground/80 bg-accent/5 py-1 px-3 rounded-full text-sm">10:00 AM - 4:00 PM</span>
                  </motion.li>
                  
                  <motion.li 
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-foreground/5 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium flex items-center gap-2">
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-5 h-5 text-foreground/70"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </motion.svg>
                      Sunday
                    </span>
                    <span className="text-foreground/80 bg-foreground/10 py-1 px-3 rounded-full text-sm">Closed</span>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-10 text-center relative overflow-hidden aura-glow"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
              animate={{ 
                x: ['-100%', '100%'],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                repeatType: "mirror" 
              }}
            />
            
            <motion.div 
              className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-accent/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div 
              className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-primary/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-shadow-glow">Ready to start your project?</h2>
              <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
                Reach out to us via email or phone and we'll get back to you as soon as possible to discuss your needs and how we can help bring your vision to life.
              </p>
              <motion.a 
                href="mailto:thinkbuild8@gmail.com" 
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center gap-2 group animate-glow aura-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Us Now
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-5 h-5"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "loop" 
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </motion.svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 