import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesSection from "@/components/ServicesSection";
import ValuesStrip from "@/components/ValuesStrip";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <ValuesStrip />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
