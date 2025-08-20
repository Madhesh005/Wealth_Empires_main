import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import StickyPricing from "@/components/sticky-pricing";
import ComparisonTable from "@/components/comparison-table";
import TaxDeduction from "@/components/tax-deduction";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import { useEffect } from "react";

export default function DoolaAlternatives() {
  useEffect(() => {
    // Ensure we start at the top when navigating here
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50" data-testid="page-doola-alternatives">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <StickyPricing />
        <ComparisonTable />
        <TaxDeduction />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <br />  
      </main>
    </div>
  );
}