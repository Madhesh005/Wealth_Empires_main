import Header from "@/components/header";
import Hero from "@/components/hero";
import BackedBy from "@/components/backed-by";
import ProductSuite from "@/components/product-suite";
import WhyDoola from "@/components/why-doola";
import Resources from "@/components/resources";
import Perks from "@/components/perks";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";
import ChatWidget from "@/components/chat-widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-doola-cream">
      <Header />
      <Hero />
      <BackedBy />
      <ProductSuite />
      <WhyDoola />
      <Resources />
      <Perks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <CookieConsent />
      <ChatWidget />
    </div>
  );
}
