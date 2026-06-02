import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SkillsMarquee />
      <ProjectsSection />
      <AboutSection />
      <div className="divider" />
      <ExperienceSection />
      <div className="divider" />
      <SkillsSection />
      <div className="divider" />
      <ContactSection />
      <Footer />
    </main>
  );
}
