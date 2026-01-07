import { Button, SplitText } from "@/components/ui";
import { hero } from "../data";
import Grid from "@/components/Grid";
import { RecentProjects } from "@/components/RecentProjects";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen">{/* Hero Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Top Label */}
            <p className="label-lg text-white/70 mb-8 pointer-events-auto">
              {hero.topLabel}
            </p>
            
            {/* Main Headline */}
            <h1 className="heading-xl text-white mb-6 pointer-events-auto">
              <SplitText delay={0.02}>
                {hero.title.line1}
              </SplitText>
              <br />
              <SplitText delay={0.04} className="text-brand-purple-400">
                {hero.title.line2}
              </SplitText>
            </h1>
            
            {/* Subheadline */}
            <p className="body-lg text-white/80 max-w-2xl mx-auto mb-10 pointer-events-auto">
              {hero.subtitle}
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center pointer-events-auto">
              <a href="#projects">
                <Button variant="ghost" size="lg" className="group">
                  {hero.cta}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <Grid />
      
      {/* Projects Section */}
      <section id="projects">
        <RecentProjects />
      </section>
      
      {/* Certificates Section */}
      <Certificates />
      
      {/* Contact Section */}
      <Footer />
    </main>
  );
}
