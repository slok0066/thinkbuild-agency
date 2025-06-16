"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, TechVision",
    quote: "ThinkBuild transformed our digital presence completely. Their team delivered a website that not only looks stunning but also performs exceptionally well. The increase in user engagement and conversions has been remarkable.",
    industry: "Technology",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder, GreenLeaf",
    quote: "Working with ThinkBuild was a game-changer for our startup. Their mobile app development expertise helped us launch a product that our users love. The attention to detail and commitment to quality is unmatched.",
    industry: "Eco-Friendly Products",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    role: "Marketing Director, Pulse Fitness",
    quote: "The UI/UX design work that ThinkBuild did for our fitness app completely elevated our brand. User engagement increased by 200% and we've received countless compliments on the intuitive interface and beautiful design.",
    industry: "Health & Fitness",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "CTO, Finance Plus",
    quote: "We hired ThinkBuild to rebuild our outdated financial platform, and they delivered beyond our expectations. The custom software solution they developed has streamlined our operations and significantly improved our customer experience.",
    industry: "Financial Services",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Owner, Boutique Collections",
    quote: "Our e-commerce sales have doubled since launching the new website built by ThinkBuild. The shopping experience is seamless, the design is beautiful, and their ongoing support has been exceptional.",
    industry: "E-commerce",
    rating: 5,
  },
  {
    name: "Ravi Deshmukh",
    role: "Operations Manager, LogiTech Solutions",
    quote: "Security was our top priority when developing our financial application. ThinkBuild's team implemented robust security measures and created a user-friendly interface that our customers love. Their technical expertise in handling sensitive data was impressive. We've seen a 40% increase in user retention since launch.",
    industry: "Logistics & Supply Chain",
    rating: 5,
  },
  {
    name: "Meera Reddy",
    role: "Director, EduSmart Academy",
    quote: "ThinkBuild helped us create an interactive learning platform that has revolutionized our teaching methods. The intuitive design and seamless functionality have made online education accessible to students across rural areas. Their team was patient with our requirements and delivered a platform that exceeded our expectations. Student enrollment has increased by 85% since launch!",
    industry: "Education",
    rating: 5,
  },
  {
    name: "Sunil Choudhary",
    role: "Head of Digital, MediCare Hospital",
    quote: "Our patient management system developed by ThinkBuild has significantly improved our operational efficiency. The thoughtful design and attention to healthcare-specific needs has made a real difference in how we deliver care.",
    industry: "Healthcare",
    rating: 5,
  },
  {
    name: "Robert Wilson",
    role: "Director, Education First",
    quote: "ThinkBuild's work on our learning management system has been transformative for our educational institution. Students and faculty alike find the platform intuitive and powerful. Their team was responsive and collaborative throughout the entire process.",
    industry: "Education",
    rating: 5,
  },
  {
    name: "Jennifer Lee",
    role: "Marketing Manager, Urban Eats",
    quote: "Our healthcare application needed to be both user-friendly and compliant with strict medical regulations. ThinkBuild delivered a secure, accessible platform that has helped us connect patients with doctors seamlessly. Their attention to detail in designing the user experience has been praised by both medical professionals and patients alike. Patient satisfaction scores have improved by 65% since implementing the new system.",
    industry: "Food & Beverage",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    role: "Operations Director, MediHealth",
    quote: "The patient management system ThinkBuild created for our healthcare practice has revolutionized how we operate. The interface is clean, HIPAA-compliant, and has reduced administrative time by 35%. I highly recommend their services to any healthcare provider.",
    industry: "Healthcare",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const maxIndex = testimonials.length - 1;

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

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

  // Auto-advance carousel
  useEffect(() => {
    if (isTransitioning) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={i < rating ? "currentColor" : "none"}
        stroke={i < rating ? "none" : "currentColor"}
        className={`w-5 h-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    ));
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-secondary/20 theme-transition overflow-hidden"
    >
      <div className="container relative">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div
              className={`overflow-hidden rounded-2xl bg-card shadow-xl border border-border ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{
                backgroundImage: "radial-gradient(circle at top right, rgba(var(--primary-rgb), 0.05), transparent 70%)",
              }}
            >
              <div 
                ref={testimonialRef}
                className={`p-8 md:p-12 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
              >
                <div className="flex flex-col gap-8">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`bg-gradient-to-br from-primary to-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-md`}>
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-foreground/70">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {testimonials[currentIndex].industry}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    
                    <svg
                      className="h-10 w-10 text-primary/30 mb-4"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-xl md:text-2xl font-medium italic mb-6 leading-relaxed">
                      &quot;{testimonials[currentIndex].quote}&quot;
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-4 h-px w-12 bg-gradient-to-r from-primary to-accent"></div>
                        <div className="md:hidden">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            {testimonials[currentIndex].industry}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-foreground/60">
                        Verified Client
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-10">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-card border border-border hover:bg-secondary hover:border-primary/50 transition-all shadow-sm hover:shadow group"
                aria-label="Previous testimonial"
                disabled={isTransitioning}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:text-primary transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isTransitioning || currentIndex === index) return;
                      setIsTransitioning(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentIndex === index
                        ? "bg-gradient-to-r from-primary to-accent w-8"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    disabled={isTransitioning}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-card border border-border hover:bg-secondary hover:border-primary/50 transition-all shadow-sm hover:shadow group"
                aria-label="Next testimonial"
                disabled={isTransitioning}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:text-primary transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Testimonial stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-foreground/70">Happy Clients</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-foreground/70">Client Retention</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">250+</div>
            <div className="text-sm text-foreground/70">Projects Completed</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-sm text-foreground/70">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
} 