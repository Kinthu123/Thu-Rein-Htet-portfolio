"use client";

import { projects } from "@/data";
import React from "react";
import { BentoGrid } from "./ui/BentoGrid";
import { SplitText } from "./ui";

export const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading-lg text-brand-purple-400 text-center mb-16">
        <SplitText delay={0.04}>Recent Projects</SplitText>
      </h1>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BentoGrid className="lg:grid-cols-2 md:grid-cols-2 gap-8 mt-8">
        {projects.map(({ id, title, des, iconLists, link, type }) => (
            <div
              key={id}
              className="lg:min-h-[16rem] h-auto flex items-center justify-center w-full relative z-10"
            >
              <div 
                className="relative rounded-xl border border-white/10 overflow-hidden w-full h-full flex flex-col justify-between group hover:border-brand-purple-400/50 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(10, 1, 24, 0.9) 0%, rgba(30, 10, 60, 0.6) 100%)',
                }}
              >
                
                {/* Content */}
                <div className="relative z-20 px-6 py-7 h-full flex flex-col">
                  
                  {/* Type Indicator */}
                  <div className="mb-[21px]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-purple-400">
                      {type}
                    </p>
                  </div>

                  <h1 className="font-semibold text-xl text-white mb-[21px] line-clamp-1">
                    {title}
                  </h1>

                  <p className="text-sm font-light text-neutral-400 line-clamp-2 mb-[21px] leading-relaxed">
                    {des}
                  </p>

                  {/* Footer: Tech Stack & Link */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/[0.1] rounded-full bg-black lg:w-8 lg:h-8 w-7 h-7 flex justify-center items-center overflow-hidden"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={icon} alt={icon} className="w-full h-full rounded-full p-[2px]" />
                        </div>
                      ))}
                    </div>

                    <a href={link} className="flex justify-center items-center text-neutral-400 hover:text-brand-purple-300 transition-colors group/link">
                      <span className="flex text-xs font-medium">View project</span>
                      <svg className="ms-1 w-3 h-3 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};
