import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dummy from "@assets/dummy.webp";

export default function Perks() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-center lg:text-left mb-4">
              <span className="text-sm text-doola-dark font-medium">Perks and Rewards</span>
            </div>
            <h2 className="text-4xl lg:text-4xl font-bold text-black mb-4 lg:leading-tight">
              Score $100K+ in Perks<br />From Top Brands Worldwide.
            </h2>
            <p className="text-lg text-doola-dark mb-8 max-w-2xl">
              Exclusive deals, big savings, and founder-first tools.
            </p>
            <Button className="bg-black text-white rounded-full hover:bg-gray-800">
              Visit Marketplace <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="">
            <img
              src={dummy}
              alt="Perks preview"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}