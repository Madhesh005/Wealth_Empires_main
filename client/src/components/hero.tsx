import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Calculator, Star } from "lucide-react";
import test1image from "@assets/business-growth-illustration.svg";
import testimage from "@assets/business-growth-illustration1.png";
export default function Hero() {
  return (
    <section className="bg-[#d6b4fc] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:px-16">
          {/* Left Content */}
          <div>
            <span className="text-lg text-doola-dark font-medium mb-4 block">
              Wealth Empires
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight">
              #WE is for Growth.
            </h1>
            <p className="text-lg text-doola-dark mb-8 leading-relaxed">
              Incorporation, Accounting, GST Compliance, and Trademark Services—
              one point of contact, zero stress.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://onboarding.wealthempires.in/">
                <Button className="bg-black text-white px-6 py-4 rounded-full font-inter hover:bg-gray-800">
                  Start your business <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            {/* Google Reviews */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-black">Excellent</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">Google</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:ml-auto lg:mr-0">
              {/* Main Image */}
              <div className="absolute inset-0 bg-doola-yellow rounded-full flex justify-center items-center">
                <img src={testimage} alt="person" className="h-72 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
