"use client";

import Link from "next/link";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutPage() {
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

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "/images/team/team-1.jpg",
      description: "With over 15 years of experience in web development and digital marketing, Alex leads our team with passion and vision.",
      auraClass: "aura-primary"
    },
    {
      name: "Sarah Williams",
      role: "Lead Designer",
      image: "/images/team/team-2.jpg",
      description: "Sarah brings creativity and innovation to every project, ensuring our designs are both beautiful and functional.",
      auraClass: "aura-accent"
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      image: "/images/team/team-3.jpg",
      description: "Michael's technical expertise and problem-solving skills help us deliver high-quality solutions for our clients.",
      auraClass: "aura-rainbow"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Specialist",
      image: "/images/team/team-4.jpg",
      description: "Emily's strategic approach to marketing helps our clients reach their target audience and achieve their business goals.",
      auraClass: "aura-orbit"
    }
  ];

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
            className="text-4xl md:text-5xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent bg-size-200 animate-gradient-x text-shadow-neon"
          >
            About Us
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-xl text-foreground/70 mb-12 text-center max-w-2xl mx-auto"
          >
            We're a team of passionate designers and developers creating exceptional digital experiences.
          </motion.p>
          
          {/* Our Story Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-16 bg-background shadow-lg rounded-xl p-8 border border-border relative overflow-hidden aura-ripple-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <motion.span 
                  className="bg-primary/10 p-2 rounded-lg mr-3 text-primary aura-primary"
                  whileHover={{ rotate: 15 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </motion.span>
                Our Story
              </h2>
              
              <div className="space-y-4 text-foreground/80">
                <p>
                  Founded in 2018, ThinkBuild started with a simple mission: to help businesses succeed in the digital world. What began as a small team of passionate freelancers has grown into a full-service web agency with a reputation for excellence.
                </p>
                <p>
                  We believe that great design and technology should be accessible to businesses of all sizes. That's why we work closely with our clients to understand their unique needs and create custom solutions that help them achieve their goals.
                </p>
                <p>
                  Our approach combines creativity with technical expertise, allowing us to deliver websites and applications that not only look great but also perform exceptionally well. We're proud of the work we do and the relationships we've built with our clients.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Our Values Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-background shadow-lg rounded-xl p-6 border border-border text-center aura-focus"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto text-primary aura-primary"
                  whileHover={{ rotate: 15 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-foreground/70">
                  We strive for excellence in everything we do, from the code we write to the designs we create.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-background shadow-lg rounded-xl p-6 border border-border text-center aura-focus"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto text-accent aura-accent"
                  whileHover={{ rotate: 15 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-foreground/70">
                  We believe in working closely with our clients to create solutions that meet their unique needs.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-background shadow-lg rounded-xl p-6 border border-border text-center aura-focus"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto text-primary aura-rainbow"
                  whileHover={{ rotate: 15 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-foreground/70">
                  We constantly push the boundaries of what's possible to create innovative solutions for our clients.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Our Team Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                  className={`bg-background shadow-lg rounded-xl overflow-hidden border border-border group ${member.auraClass}`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-foreground/70">{member.description}</p>
                    
                    <div className="mt-4 flex gap-3">
                      <motion.a 
                        href="#" 
                        className="bg-foreground/5 p-2 rounded-full hover:bg-foreground/10 transition-colors aura-shine"
                        whileHover={{ y: -2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className="bg-foreground/5 p-2 rounded-full hover:bg-foreground/10 transition-colors aura-shine"
                        whileHover={{ y: -2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className="bg-foreground/5 p-2 rounded-full hover:bg-foreground/10 transition-colors aura-shine"
                        whileHover={{ y: -2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-10 text-center relative overflow-hidden aura-glow"
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
              <h2 className="text-3xl font-bold mb-4 text-shadow-glow">Let's Work Together</h2>
              <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
                Ready to start your next project? Contact us today to discuss how we can help bring your vision to life.
              </p>
              <motion.a 
                href="/contact" 
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center gap-2 group aura-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </motion.svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}