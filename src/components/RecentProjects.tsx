"use client";

import { projects } from "@/data";
import React from "react";

const ProjectCard = ({ project, className }: { project: typeof projects[0]; className?: string }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative overflow-hidden rounded-2xl block bg-white/5 ${className}`}
  >
    {project.img && (
      <img
        src={project.img}
        alt={project.title}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.imgPosition ?? "object-top"}`}
      />
    )}

    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10"
      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-brand-purple-400 mb-1">
        {project.type}
      </span>
      <h3 className="text-white font-bold text-lg leading-snug mb-2">
        {project.title}
      </h3>
      <span className="inline-flex items-center gap-1 text-xs text-white/70 font-medium">
        View project
        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  </a>
);

export const RecentProjects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto" id="projects">
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 lg:mb-16">
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard key={project.id} project={project} className="aspect-[4/3]" />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {projects.slice(4).map((project) => (
          <ProjectCard key={project.id} project={project} className="aspect-[4/3]" />
        ))}
      </div>
    </section>
  );
};
