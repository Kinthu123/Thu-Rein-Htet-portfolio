import React from "react";
import { footer} from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-5 relative overflow-hidden" id="contact">
      {/* Background Grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image 
          src="/footer-grid.svg" 
          alt="grid" 
          className="w-full h-full opacity-50" 
          width={100} height={100} 
        /> 
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-10 relative z-10 max-w-7xl mx-auto">
        
        {/* Left Side: Title */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-[800px] leading-tight text-center md:text-left">
            {footer.title.split(" ").map((word, i) => (
               <span key={i} className={i < 2 ? "text-purple-300" : "text-white/80"}>
                 {word}{" "}
               </span>
            ))}
          </h1>
        </div>

        {/* Right Side: Contact & Socials */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6">
           {/* Copyright - Top Right on Desktop */}
           <div className="text-white/40 text-xs font-light uppercase tracking-wider order-3 md:order-1">
             {footer.copyright}
           </div>

           {/* Contact Info */}
           <div className="flex flex-col items-center md:items-end gap-1 order-2">
             <p className="text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-1">
               {footer.contact.label}
             </p>
             <a href={`tel:${footer.contact.phone.replace(/\s+/g, '')}`} className="text-white text-base md:text-lg font-medium hover:text-purple-300 transition-colors">
               {footer.contact.phone}
             </a>
             <a href={`mailto:${footer.contact.email}`} className="text-white text-base md:text-lg font-medium hover:text-purple-300 transition-colors">
               {footer.contact.email}
             </a>
           </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
