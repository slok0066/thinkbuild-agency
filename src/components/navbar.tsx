"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = () => {
    // Check which section is currently in view
    const sections = document.querySelectorAll("section[id]");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).clientHeight;
      if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
        current = section.getAttribute("id") || "";
      }
    });

    if (current) {
      setActiveSection(current);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    // Initialize ZCal
    const script = document.createElement('script');
    script.src = 'https://cdn.zcal.co/embed/v1/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeChild(script);
    };
  }, []);

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ];

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBookingPopup(true);
  };

  const closePopup = () => {
    setShowBookingPopup(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 py-3 transition-all duration-300 bg-background/80 backdrop-blur-lg shadow-md"
      >
        <div className="container max-w-[500px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative w-[250px] h-[100px]">
              <Image
                src="/upscalemedia-transformed.png"
                alt="UpscaleMedia Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-foreground/80 hover:text-primary transition-colors font-medium relative text-sm lg:text-base ${
                  (link.href === "/" && activeSection === "home") || 
                  (link.href.includes("#") && activeSection === link.href.replace("/#", "")) || 
                  (mounted && pathname === link.href) 
                    ? "text-primary" : ""
                }`}
              >
                {link.name}
                {((link.href === "/" && activeSection === "home") || 
                  (link.href.includes("#") && activeSection === link.href.replace("/#", "")) || 
                  (mounted && pathname === link.href)) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full animate-fade-in"></span>
                )}
              </Link>
            ))}
            <button
              onClick={handleBookCall}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg font-medium text-sm lg:text-base ml-2"
            >
              Book Call
            </button>
          </nav>

          {/* Mobile Menu Button with Logo */}
          <div className="flex items-center justify-between w-full md:hidden">
            <Link href="/" className="flex items-center">
              <div className="relative w-[180px] h-[70px]">
                <Image 
                  src="/upscalemedia-transformed.png" 
                  alt="UpscaleMedia Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-[72px] z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-border shadow-lg overflow-y-auto max-h-[calc(100vh-72px)]">
            <div className="container py-4">
              <nav className="flex flex-col">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors font-medium ${
                      (link.href === "/" && activeSection === "home") || 
                      (link.href.includes("#") && activeSection === link.href.replace("/#", "")) || 
                      (mounted && pathname === link.href) 
                        ? "text-primary bg-primary/10" : ""
                    }`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <button
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleBookCall(e);
                    }}
                    className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-5 py-3 rounded-lg transition-all shadow-md hover:shadow-lg font-medium text-center"
                  >
                    Book Call
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Booking Popup */}
      {showBookingPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h3 className="text-xl font-bold">Schedule a Meeting</h3>
              <button 
                onClick={closePopup}
                className="text-foreground/70 hover:text-foreground"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="zcal-inline-widget">
                <a href="https://zcal.co/i/_HyRAQtq">30 Minute Meeting - Schedule a meeting</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 