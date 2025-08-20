import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            <div className="relative w-80 h-80">
              {/* Main 3D Box */}
              <div className="absolute inset-0 bg-doola-yellow rounded-2xl shadow-lg transform rotate-6 border-2 border-yellow-300">
                {/* Box flaps */}
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-doola-yellow rounded-tl-lg border-l-2 border-t-2 border-yellow-300 transform -rotate-12"></div>
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-doola-yellow rounded-tr-lg border-r-2 border-t-2 border-yellow-300 transform rotate-12"></div>
                
                {/* Icons inside the box */}
                <div className="absolute top-8 left-8 w-12 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-8 h-4 bg-blue-500 rounded flex items-center justify-center">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                </div>
                
                <div className="absolute top-8 right-8 w-10 h-10 bg-green-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">%</span>
                </div>
                
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-red-400 via-blue-400 to-green-400 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Platform Icons with dotted lines */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                  <span className="text-black font-bold text-lg">a</span>
                </div>
                <div className="absolute top-1/2 right-0 w-8 h-0.5 bg-black opacity-30 transform translate-x-full">
                  <div className="w-full h-full border-t-2 border-dotted border-black"></div>
                </div>
              </div>

              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                  <span className="text-red-500 font-bold text-lg">E</span>
                </div>
                <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-black opacity-30 transform -translate-x-1/2">
                  <div className="w-full h-full border-l-2 border-dotted border-black"></div>
                </div>
              </div>

              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                  <span className="text-blue-600 font-bold text-sm">eBay</span>
                </div>
                <div className="absolute top-1/2 left-0 w-8 h-0.5 bg-black opacity-30 transform -translate-x-full">
                  <div className="w-full h-full border-t-2 border-dotted border-black"></div>
                </div>
              </div>

              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-black opacity-30 transform -translate-x-1/2">
                  <div className="w-full h-full border-l-2 border-dotted border-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
