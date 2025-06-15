"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MobileMenu } from "./mobile-menu";
import { useState, useEffect } from "react";
import Script from "next/script";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  // Set mounted state after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  // Animation variants
  const headerVariants = {
    initial: { boxShadow: "0 0 0 rgba(0,0,0,0)" },
    scrolled: { boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, rotate: 1, transition: { duration: 0.3 } }
  };

  const navItemVariants = {
    initial: { y: 0, opacity: 1 },
    hover: { y: -2, opacity: 1, transition: { duration: 0.2 } }
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBookingPopup(true);
  };

  const closePopup = () => {
    setShowBookingPopup(false);
  };

  return (
    <>
      <motion.header 
        className="border-b border-border py-3 sticky top-0 z-40 backdrop-blur-lg bg-background/80 shadow-md transition-all duration-300"
        variants={headerVariants}
        animate={scrolled ? "scrolled" : "initial"}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container max-w-[500px] mx-auto flex justify-between items-center">
          <Link href="/" className="relative group">
            <motion.div 
              className="relative w-[250px] h-[100px]"
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
              animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image 
                src="/upscalemedia-transformed.png" 
                alt="UpscaleMedia Logo" 
                fill
                className="object-contain" 
                priority
              />
            </motion.div>
          </Link>

          <motion.div 
            className="flex items-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <nav className="hidden md:flex items-center gap-4">
              {navItems.map((item, index) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    onMouseEnter={() => setHoveredItem(item.path)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative"
                    initial="initial"
                    whileHover="hover"
                    variants={itemVariants}
                    custom={index}
                  >
                    <motion.div
                      variants={navItemVariants}
                      className="relative z-10"
                    >
                      <Link
                        href={item.path}
                        className={`relative py-2 px-3 transition-colors duration-200 rounded-md ${
                          isActive ? "text-primary font-medium" : "hover:text-primary"
                        }`}
                      >
                        {item.name}
                        <AnimatePresence>
                          {(isActive || hoveredItem === item.path) && (
                            <motion.span 
                              className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                              layoutId="navBackground"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </AnimatePresence>
                      </Link>
                    </motion.div>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                );
              })}

              <motion.button
                onClick={handleBookCall}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-lg shadow-md hover:shadow-lg relative overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                variants={itemVariants}
              >
                <span className="relative z-10">Book a Call</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </motion.button>
            </nav>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              variants={itemVariants}
            >
              <ThemeToggle />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <MobileMenu navItems={navItems} onBookCall={handleBookCall} />
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* Booking Popup */}
      <AnimatePresence>
        {showBookingPopup && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div 
              className="bg-background rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-border flex justify-between items-center">
                <h3 className="text-xl font-bold">Schedule a Meeting</h3>
                <motion.button 
                  onClick={closePopup}
                  className="text-foreground/70 hover:text-foreground rounded-full p-1"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              <div className="relative w-full h-[700px]">
                <iframe 
                  src="https://zcal.co/i/_HyRAQtq?embed=1&embedType=iframe" 
                  loading="lazy" 
                  className="w-full h-full border-none"
                  title="Book a call"
                  scrolling="no"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}