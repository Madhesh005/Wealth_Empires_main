import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Perks() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sm text-doola-dark font-medium">Perks and Rewards</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-4">
          Score $100K+ in Perks<br />From Top Brands Worldwide.
        </h2>
        <p className="text-lg text-doola-dark text-center mb-12 max-w-2xl mx-auto">
          Exclusive deals, big savings, and founder-first tools.
        </p>

        <div className="text-center">
          <Button className="bg-black text-white hover:bg-gray-800">
            Visit Marketplace <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
