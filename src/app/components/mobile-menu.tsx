"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  navItems: { name: string; path: string }[];
  onBookCall?: (e: React.MouseEvent) => void;
}

export function MobileMenu({ navItems, onBookCall }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleBookCallClick = (e: React.MouseEvent) => {
    closeMenu();
    if (onBookCall) {
      onBookCall(e);
    }
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <div className="md:hidden">
      <motion.button
        onClick={toggleMenu}
        className="relative w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="w-6 h-6 flex flex-col justify-center items-center"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 2 },
            }}
            className="w-5 h-0.5 bg-foreground block mb-1.5 origin-center"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-5 h-0.5 bg-foreground block mb-1.5"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -2 },
            }}
            className="w-5 h-0.5 bg-foreground block origin-center"
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-xl border-b border-border shadow-lg z-50 max-h-[80vh] overflow-y-auto"
          >
            <nav className="container py-6">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.li 
                      key={item.path}
                      variants={itemVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={item.path}
                        onClick={closeMenu}
                        className={`block py-3 px-4 rounded-lg transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-medium"
                            : "hover:bg-foreground/5"
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="relative">
                            {item.name}
                            {isActive && (
                              <motion.span
                                layoutId="mobileActiveIndicator"
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                              />
                            )}
                          </span>
                          {isActive && (
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 20 20" 
                              fill="currentColor" 
                              className="w-5 h-5 ml-auto text-primary"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </motion.svg>
                          )}
                        </div>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <motion.div 
                className="mt-6 pt-4 border-t border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <motion.button
                  onClick={handleBookCallClick}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="block w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-5 py-3 rounded-lg transition-all shadow-md hover:shadow-lg font-medium text-center"
                >
                  Book a Call
                </motion.button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 