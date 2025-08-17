import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-doola-cream border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">
              <span className="text-doola-yellow">⚡⚡</span>doola
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
            <span className="hidden lg:block text-sm text-doola-dark">
              Already Have an Account?{" "}
              <a href="#" className="font-medium text-black hover:underline">
                Sign In
              </a>
            </span>
            <Button 
              variant="outline" 
              className="hidden md:block bg-white border-gray-300 text-doola-dark hover:bg-gray-50"
            >
              Get a Demo
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              Create a Free Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
