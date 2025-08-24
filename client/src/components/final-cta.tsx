import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import nohassle from "@assets/nohassle.jpg";
export default function FinalCTA() {
  return (
    <section className="bg-[#fde999] py-16 rounded-[50px] mx-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-20">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl  text-black mb-4">
            No hassle<br />just growth
            </h2>
            <p className="text-md text-black mb-8">
              Join Wealth Empires and start building today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://onboarding.wealthempires.in/">
                <Button className="bg-black text-white hover:bg-gray-800 py-8 px-8 rounded-full">
                  Start your Business<ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </a>
            </div>
          </div>

          {/* Right Content - 3D Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <img src={nohassle} alt="nohassleimg" />
          </div>
        </div>
      </div>
    </section>
  );
}
