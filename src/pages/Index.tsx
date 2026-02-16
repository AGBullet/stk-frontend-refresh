import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ScreenshotsCarousel from "@/components/landing/ScreenshotsCarousel";
import DemoSection from "@/components/landing/DemoSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsCarousel />
      <DemoSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
