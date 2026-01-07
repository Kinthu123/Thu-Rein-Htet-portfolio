"use client";

import React from "react";
import { certificates } from "@/data";
import { SplitText } from "./ui";

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 w-full relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Title */}
          <div className="w-full lg:w-1/3 pt-2 flex flex-col items-center lg:items-start">
            <h2 className="heading-lg text-brand-purple-400 text-center lg:text-left leading-tight mb-4">
              <SplitText delay={0.04}>Certificates</SplitText>
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed max-w-sm text-center lg:text-left">
              A collection of professional certifications and milestones in my development journey.
            </p>
          </div>

          {/* Right Side: Masonry/Grid of Certificates */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className={`relative rounded-xl border border-white/10 transition-all duration-300 hover:border-brand-purple-400/50 overflow-hidden min-h-[240px] group/bento ${cert.className}`}
                style={{
                  background: 'linear-gradient(135deg, rgba(10, 1, 24, 0.9) 0%, rgba(30, 10, 60, 0.6) 100%)',
                }}
              >
                <div className="w-full h-full relative z-10">
                  <img
                    src={cert.image}
                    alt={`Certificate ${cert.id}`}
                    className="absolute inset-0 w-full h-full object-contain p-2 opacity-90 group-hover/bento:opacity-100 transition-opacity duration-500 group-hover/bento:scale-105 transform"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover/bento:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
