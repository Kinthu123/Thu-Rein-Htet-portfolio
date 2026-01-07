'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#certificates" },
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.link.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const targetId = link.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={cn(
          "hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
          isScrolled ? "top-4" : "top-8"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-1 px-4 py-3 rounded-full border backdrop-blur-md transition-all duration-300",
            isScrolled 
              ? "bg-black/80 border-white/20 shadow-lg shadow-brand-purple-500/20" 
              : "bg-black/60 border-white/10"
          )}
        >
          {navItems.map((item) => {
            const sectionId = item.link.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => scrollToSection(e, item.link)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  isActive
                    ? "text-white"
                    : "text-white/60 hover:text-white/90"
                )}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-purple-500 to-brand-pink-500 rounded-full -z-10" />
                )}
                {item.name}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "p-3 rounded-full border backdrop-blur-md transition-all duration-300",
            isScrolled 
              ? "bg-black/80 border-white/20 shadow-lg shadow-brand-purple-500/20" 
              : "bg-black/60 border-white/10"
          )}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={cn(
              "block h-0.5 w-full bg-white transition-all duration-300",
              isMobileMenuOpen && "rotate-45 translate-y-2"
            )} />
            <span className={cn(
              "block h-0.5 w-full bg-white transition-all duration-300",
              isMobileMenuOpen && "opacity-0"
            )} />
            <span className={cn(
              "block h-0.5 w-full bg-white transition-all duration-300",
              isMobileMenuOpen && "-rotate-45 -translate-y-2"
            )} />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "absolute top-16 right-0 w-64 rounded-2xl border backdrop-blur-md transition-all duration-300 overflow-hidden",
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0 pointer-events-auto bg-black/90 border-white/20 shadow-lg shadow-brand-purple-500/20" 
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="p-2">
            {navItems.map((item) => {
              const sectionId = item.link.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={(e) => scrollToSection(e, item.link)}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 mb-1",
                    isActive
                      ? "bg-gradient-to-r from-brand-purple-500 to-brand-pink-500 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingNav;
