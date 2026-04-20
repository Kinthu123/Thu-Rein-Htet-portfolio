import React from "react";
import { footer } from "@/data";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiSparkles, HiDownload } from "react-icons/hi";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <FaLinkedinIn className="w-6 h-6" />,
  behance:  <FaBehance    className="w-6 h-6" />,
  email:    <MdEmail      className="w-7 h-7" />,
  github:   <FaGithub     className="w-6 h-6" />,
};

const Footer = () => {
  return (
    <footer
      className="w-full relative overflow-hidden"
      id="contact"
      style={{ background: "linear-gradient(135deg, rgba(10,1,24,0.75) 0%, rgba(30,10,60,0.70) 100%)" }}
    >
      {/* Subtle purple glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-purple-600/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col lg:flex-row gap-12 lg:gap-8 items-start relative z-10">

        {/* Left — CTA */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 w-fit bg-white/5">
            <HiSparkles className="text-brand-purple-400 w-4 h-4" />
            <span className="text-white/60 text-sm font-medium">{footer.badge}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug max-w-md">
            {footer.title}
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href={footer.cta.primary.href}
              className="inline-flex items-center gap-2 bg-brand-purple-500 hover:bg-brand-purple-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              👋 {footer.cta.primary.label}
            </a>
            <a
              href={footer.cta.secondary.href}
              download="Thu_Rein_Htet_Resume.pdf"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-purple-400/60 text-white/70 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <HiDownload className="w-4 h-4" />
              {footer.cta.secondary.label}
            </a>
          </div>
        </div>

        {/* Right — Social Grid (2×2) */}
        <div className="flex-1 grid grid-cols-2 gap-3 w-full">
          {footer.socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-xl border border-white/10 p-5 hover:border-brand-purple-400/50 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(10,1,24,0.9) 0%, rgba(30,10,60,0.6) 100%)" }}
            >
              <span className="text-white/60 group-hover:text-brand-purple-400 transition-colors">
                {iconMap[social.icon]}
              </span>
              <span className="text-white/80 group-hover:text-white text-sm font-semibold transition-colors">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-white/10 relative z-10">
        <p className="text-center text-white/30 text-sm py-5">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
