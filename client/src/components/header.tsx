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
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-doola-dark hover:text-black font-medium flex items-center transition-colors duration-300">
                Products{" "}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <a
                  href="/incorporation"
                  className="block px-4 py-3 text-[#020202] hover:bg-yellow-50 hover:text-yellow-700 rounded-t-xl transition-all duration-200"
                >
                  Incorporation
                </a>
                <a
                  href="/tax-filling"
                  className="block px-4 py-3 text-[#020202] hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-200"
                >
                  Tax Filing
                </a>
                <a
                  href="/book-keeping"
                  className="block px-4 py-3 text-[#020202] hover:bg-yellow-50 hover:text-yellow-700 rounded-b-xl transition-all duration-200"
                >
                  360° Book Keeping
                </a>
                <a
                  href="/trademark"
                  className="block px-4 py-3 text-[#020202] hover:bg-yellow-50 hover:text-yellow-700 rounded-b-xl transition-all duration-200"
                >
                  Trademark
                </a>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-doola-dark hover:text-black font-medium flex items-center transition-colors duration-300">
                Services{" "}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <a
                  href="#"
                  className="block px-4 py-3 text-[#020202] hover:bg-yellow-50 hover:text-yellow-700 rounded-t-xl transition-all duration-200"
                >
                  Business Incorporation
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-[#020202]] hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-200"
                >
                  Accounting & Bookkeeping
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-[#020202] hover:bg-yellow-50 hover:text-yellow-700 rounded-b-xl transition-all duration-200"
                >
                  GST Compliance
                </a>
                                <a
                  href="#"
                  className="block px-4 py-3 text-[#020202] hover:bg-yellow-50 hover:text-yellow-700 rounded-b-xl transition-all duration-200"
                >
                  Trademark & Licensing
                </a>
              </div>
            </div>

            {/* Other Links */}
            <a
              href="#"
              className="text-doola-dark hover:text-black font-medium transition-colors duration-300"
            >
              Partner with Us
            </a>
            <a
              href="/pricing"
              className="text-doola-dark hover:text-black font-medium transition-colors duration-300"
            >
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
