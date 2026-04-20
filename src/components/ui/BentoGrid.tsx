"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Globe } from "./Globe";
import { LogoLoop } from "./LogoLoop";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 auto-rows-[minmax(100px,auto)]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
  bio,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id: number;
  bio?: string;
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isGlobeHovered, setIsGlobeHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    // Detect if the device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
  }, []);

  const handleClick = () => {
    // Only handle clicks on touch devices
    if (isTouchDevice && id === 1 && bio) {
      setIsActive(!isActive);
    }
  };

  return (
    <div
      className={cn(
        "group/bento row-span-1 relative flex flex-col justify-end rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-brand-purple-400/50 overflow-hidden min-h-[250px]",
        id === 1 && bio && isTouchDevice && "cursor-pointer",
        className,
      )}
      style={{
        background: 'linear-gradient(135deg, rgba(10, 1, 24, 0.9) 0%, rgba(30, 10, 60, 0.6) 100%)',
      }}
      onClick={handleClick}
      onMouseEnter={() => {
        if (id === 2) setIsGlobeHovered(true);
        if (id === 3) setIsLogoHovered(true);
      }}
      onMouseLeave={() => {
        if (id === 2) setIsGlobeHovered(false);
        if (id === 3) setIsLogoHovered(false);
      }}
    >
      {/* Background Image */}
      {img && (
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={img} 
            alt={title as string} 
            className={cn("w-full h-full object-cover object-center", imgClassName)} 
          />
          {/* Gradient overlays to infuse profile with background */}
          {id === 1 && (
            <>
              {/* Top gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,1,24,0.95)] via-transparent to-transparent opacity-40" />
              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,1,24,0.95)] via-[rgba(30,10,60,0.4)] to-transparent opacity-40" />
              {/* Side gradients for better infusion */}
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,1,24,0.7)] via-transparent to-[rgba(10,1,24,0.7)] opacity-60" />
              {/* Radial gradient from center */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,1,24,0.8)_100%)] opacity-70" />
            </>
          )}
        </div>
      )}
      
      {/* Globe for timezone card */}
      {id === 2 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Globe className="opacity-70" scale={isGlobeHovered ? 1.15 : 1} />
        </div>
      )}
      
      {/* Logo Loop for tech stack card */}
      {id === 3 && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pb-12">
          <LogoLoop className="w-full" scale={isLogoHovered ? 1.1 : 1} />
        </div>
      )}
   
      
      {/* Bio Overlay for About Me card (click on mobile, hover on desktop) */}
      {id === 1 && bio && (
        <div className={cn(
          "absolute inset-0 z-20 transition-opacity duration-500 ease-in-out",
          isTouchDevice 
            ? (isActive ? "opacity-100" : "opacity-0")
            : "opacity-0 group-hover/bento:opacity-100"
        )}>
          {/* Gradient overlay background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,1,24,0.97)] via-[rgba(30,10,60,0.95)] to-[rgba(50,20,80,0.93)] backdrop-blur-sm" />
          
          {/* Bio text content - scrollable on mobile */}
          <div className="relative h-full overflow-y-auto overflow-x-hidden">
            <div className="min-h-full flex flex-col justify-center px-6 md:px-12 py-8 md:py-12">
              <div className="max-w-3xl">
                {/* Small label at top */}
                <p className="text-brand-purple-400 text-[10px] md:text-sm font-semibold uppercase tracking-[0.2em] mb-4 md:mb-8">
                  My Story
                </p>
                
                {/* Large headline - smaller on mobile */}
                <h2 className="font-sans font-bold text-white text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8 leading-tight">
                  Designing experiences,
                  <br />
                  building with code
                </h2>
                
                {/* Supporting text - adjusted for mobile */}
                <div className="space-y-3 md:space-y-4 text-white/80 text-xs md:text-base lg:text-lg leading-relaxed">
                  <p>
                    I&apos;m <span className="text-white font-semibold">Thu Rein Htet (Tyson)</span>, a final-year Digital Innovation Technology student at Rangsit University with a strong passion for UI/UX design and frontend development.
                  </p>
                  <p>
                    I enjoy designing user-friendly interfaces and building them with clean, practical code. My main focus is UI/UX, while frontend development helps me understand how designs work in real products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Text Content - Bottom Left */}
      <div className={cn("relative z-10 transition duration-200 group-hover/bento:translate-x-1", id === 6 && "flex justify-center")}>
        {description && (
          <p className="text-[10px] md:text-xs text-white/50 mb-1 md:mb-2 uppercase tracking-wider">
            {description}
          </p>
        )}
        <h3 className={cn("font-sans font-bold text-white text-sm md:text-lg lg:text-xl leading-tight", titleClassName)}>
          {title}
        </h3>
        {id === 2 && (
          <a
            href="mailto:icedevil196@gmail.com"
            className="inline-flex items-center gap-2 mt-3 bg-brand-purple-500 hover:bg-brand-purple-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
          >
            Connect with me ✉️
          </a>
        )}
      </div>
    </div>
  );
};
