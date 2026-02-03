import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import SmarterWorldSection from "@/components/SmarterWorldSection";
import SpacesSection from "@/components/SpacesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <SmarterWorldSection />
      <SpacesSection />
      <Footer />
    </main>
  );
}
