import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#fef4cc] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-inter text-black">
              <span className="text-doola-yellow">⚡</span>Wealth Empires
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="text-doola-dark hover:text-black font-medium flex items-center">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-doola-dark hover:text-black font-medium">
              Partner with Us
            </a>
            <div className="relative group">
              <button className="text-doola-dark hover:text-black font-medium flex items-center">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-doola-dark hover:text-black font-medium">
              Pricing
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a href="https://onboarding.wealthempires.in/">
            <Button className="bg-black text-white hover:bg-gray-800">
              Start your Business <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
