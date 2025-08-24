import Header from "@/components/header";
import Hero from "@/components/hero";
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
import Reveal from "@/components/Reveal";
import Footermain from "@/components/footer-main";

export default function Home() {
  return (
    <div className="min-h-screen bg-doola-cream">
      <Header />
      <Reveal animation="fade-in" offset="0px 0px -5% 0px">
        <Hero />
      </Reveal>
      <Reveal animation="slide-right" delayMs={100}>
        <ProductSuite />
      </Reveal>
      <Reveal animation="fade-up" delayMs={150}>
        <WhyDoola />
      </Reveal>
      <Reveal animation="fade-up" delayMs={200}>
        <Resources />
      </Reveal>
      <Reveal animation="zoom-in" delayMs={200}>
        <Perks />
      </Reveal>
      <Reveal animation="fade-up" delayMs={150}>
        <Testimonials />
      </Reveal>
      <Reveal animation="slide-left" delayMs={150}>
        <FAQ />
      </Reveal>
      <Reveal animation="fade-in">
        <FinalCTA />
      </Reveal>
      <Footermain/>
      <CookieConsent />
      <ChatWidget />
    </div>
  );
}
