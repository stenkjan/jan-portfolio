import Header from "@/components/ui/Header";
import SiteFooter from "@/components/ui/SiteFooter";
import HeroSection from "@/components/sections/HeroSection";
import KonditionenSection from "@/components/sections/KonditionenSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <KonditionenSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
