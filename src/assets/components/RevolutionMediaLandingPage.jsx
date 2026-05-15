import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function RevolutionMediaLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      <HeroSection />

      <ServicesSection />

      <AboutSection />

      <PortfolioSection />

      <PricingSection />

      <TestimonialsSection />

      <CTASection />

      <Footer />
    </div>
  );
}
