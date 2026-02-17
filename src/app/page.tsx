import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import SpecialtiesSection from '@/components/specialties-section';
import TestimonialsSection from '@/components/testimonials-section';
import PromotionsSection from '@/components/promotions-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecialtiesSection />
        <TestimonialsSection />
        <PromotionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
