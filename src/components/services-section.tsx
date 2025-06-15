"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "Web Development",
    description:
      "We build responsive, high-performance websites that provide exceptional user experiences and drive business results.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "CMS Integration"],
    color: "from-blue-500 to-indigo-600",
    highlight: "93% of users judge websites by design quality",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    title: "Mobile App Development",
    description:
      "Our expert team creates native and cross-platform mobile applications that engage users and deliver seamless experiences.",
    features: ["iOS & Android Apps", "Cross-platform Solutions", "UI/UX Design", "App Store Optimization"],
    color: "from-purple-500 to-pink-600",
    highlight: "Mobile apps can increase customer engagement by 88%",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "We create intuitive, visually stunning interfaces that enhance user engagement and satisfaction while reflecting your brand identity.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    color: "from-teal-500 to-emerald-600",
    highlight: "Good UI can raise conversion rates by up to 200%",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
    title: "Digital Marketing",
    description:
      "Our comprehensive digital marketing strategies help you reach your target audience, increase brand awareness, and drive conversions.",
    features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
    color: "from-orange-500 to-amber-600",
    highlight: "Digital marketing delivers 5x higher ROI than traditional marketing",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
    title: "E-commerce Solutions",
    description:
      "We build secure, scalable online stores that provide seamless shopping experiences and drive sales for your business.",
    features: ["Custom Storefronts", "Payment Integration", "Inventory Management", "Mobile Commerce"],
    color: "from-cyan-500 to-blue-600",
    highlight: "E-commerce sales are projected to grow by 50% in the next 3 years",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
    ),
    title: "Custom Software Development",
    description:
      "We develop tailored software solutions that address your specific business needs and streamline your operations.",
    features: ["Custom Applications", "API Development", "Legacy System Integration", "Cloud Solutions"],
    color: "from-red-500 to-rose-600",
    highlight: "Custom software can reduce operational costs by up to 30%",
  },
];

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

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

  // Auto-rotate active service every 5 seconds
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
      
      // Scroll the active tab into view for mobile
      if (tabsRef.current) {
        const activeTab = tabsRef.current.children[activeService] as HTMLElement;
        if (activeTab) {
          tabsRef.current.scrollLeft = activeTab.offsetLeft - tabsRef.current.offsetWidth / 2 + activeTab.offsetWidth / 2;
        }
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isVisible, activeService]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: custom * 0.1
      }
    })
  };

  const tabVariants: Variants = {
    inactive: { scale: 0.95, opacity: 0.7 },
    active: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    hover: { 
      scale: 1.03,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-background to-secondary/20 theme-transition overflow-hidden"
    >
      {/* Background elements */}
      <motion.div 
        className="absolute left-0 right-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-60 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        ></motion.div>
      </motion.div>

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span 
            variants={itemVariants}
            className="bg-primary/10 text-primary px-6 py-3 rounded-full text-base font-semibold inline-block mb-6"
          >
            From Vision to Digital Dominance
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
          >
            Our Services
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-foreground/80 mb-10 leading-relaxed"
          >
            We deliver comprehensive digital solutions designed to transform your business and establish your market leadership.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/10"
          >
            <p className="text-xl md:text-2xl font-medium italic">
              "We don't just build digital products. We architect transformative experiences that position your business for long-term success."
            </p>
            <p className="mt-4 text-foreground/70 font-medium">
              Our mission is to help ambitious businesses achieve digital excellence through strategic innovation.
            </p>
          </motion.div>
        </motion.div>

        {/* Services tabs for larger screens */}
        <div className="hidden lg:block">
          <motion.div 
            className="flex justify-center mb-16 overflow-x-auto pb-2" 
            ref={tabsRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="inline-flex p-1.5 bg-secondary/50 rounded-xl shadow-lg">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeService === index
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  animate={activeService === index ? "active" : "inactive"}
                  whileHover={activeService !== index ? "hover" : undefined}
                  variants={tabVariants}
                >
                  <span className="relative whitespace-nowrap">
                    {service.title}
                    {hoveredService === index && activeService !== index && (
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      ></motion.span>
                    )}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-12 gap-10 items-center">
            {/* Service details */}
            <motion.div 
              className="col-span-12 lg:col-span-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <motion.div 
                    className={`bg-gradient-to-br ${services[activeService].color} text-white rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg`}
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    {services[activeService].icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {services[activeService].title}
                  </motion.h3>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-primary/10 to-accent/10 px-5 py-3 rounded-lg inline-block border border-primary/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-sm font-medium">Did you know? {services[activeService].highlight}</p>
                  </motion.div>
                  
                  <motion.p 
                    className="text-xl text-foreground/80 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {services[activeService].description}
                  </motion.p>
                  
                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {services[activeService].features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                          <span className={`bg-gradient-to-br ${services[activeService].color} text-white rounded-full p-1 shadow-sm`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Service illustration */}
            <motion.div 
              className="col-span-12 lg:col-span-6 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="relative w-full max-w-md aspect-square">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeService}
                    className={`absolute inset-0 bg-gradient-to-br ${services[activeService].color} opacity-20 rounded-full blur-3xl`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </AnimatePresence>
                
                <motion.div 
                  className="relative h-full w-full rounded-3xl bg-card border border-border shadow-xl overflow-hidden flex items-center justify-center p-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeService}
                      className={`text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${services[activeService].color} opacity-20`}
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                      transition={{ duration: 0.5 }}
                    >
                      {activeService + 1}
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={activeService}
                        className={`bg-gradient-to-br ${services[activeService].color} text-white rounded-full w-28 h-28 flex items-center justify-center shadow-lg`}
                        initial={{ scale: 0, rotate: -30 }}
                        animate={{ 
                          scale: 1, 
                          rotate: 0,
                          y: [0, -10, 0],
                          transition: {
                            scale: { type: "spring", stiffness: 200, damping: 15 },
                            rotate: { type: "spring", stiffness: 200, damping: 15 },
                            y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                          }
                        }}
                        exit={{ scale: 0, rotate: 30 }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        >
                          {services[activeService].icon}
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services cards for mobile */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="group bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <motion.div 
                  className={`bg-gradient-to-br ${service.color} text-white rounded-xl w-16 h-16 flex items-center justify-center mb-6 shadow-md`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 px-4 py-2 rounded-lg mb-4 inline-block">
                  <p className="text-sm font-medium">{service.highlight}</p>
                </div>
                
                <p className="text-foreground/80 mb-6 text-lg">{service.description}</p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className={`bg-gradient-to-br ${service.color} bg-opacity-10 text-foreground/80 px-3 py-1 rounded-full text-sm`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 w-16 h-16 text-4xl font-bold text-foreground/5 flex items-center justify-center">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Service selection indicators for mobile */}
      <motion.div 
        className="mt-12 flex justify-center lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex gap-2">
          {services.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeService ? "w-8 bg-primary" : "bg-primary/30"
              }`}
              onClick={() => setActiveService(index)}
              aria-label={`Select ${services[index].title}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
} 