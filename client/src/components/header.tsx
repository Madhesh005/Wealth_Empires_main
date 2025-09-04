import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import logo from "@assets/wealthempireslogo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-[#d6b4fc] sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Wealth Empires Logo"
              className="w-16 h-20 object-contain"
              style={{ verticalAlign: "middle" }}
            />
            <span className="text-2xl font-inter text-black">Wealth Empires</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-black hover:text-black font-medium flex items-center transition-colors duration-300">
                Products{" "}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <a
                  href="/incorporation"
                  className="block px-4 py-3 text-[#020202] hover:bg-[#E6F3FF] hover:text-[#804FB3] rounded-t-xl transition-all duration-200"
                >
                  Incorporation
                </a>
                <a
                  href="/tax-filling"
                  className="block px-4 py-3 text-[#020202] hover:bg-[#E6F3FF] hover:text-[#804FB3] transition-all duration-200"
                >
                  Tax Filing
                </a>
                <a
                  href="/book-keeping"
                  className="block px-4 py-3 text-[#020202] hover:bg-[#E6F3FF] hover:text-[#804FB3] transition-all duration-200"
                >
                  360° Book Keeping
                </a>
                <a
                  href="/trademark"
                  className="block px-4 py-3 text-[#020202] hover:bg-[#E6F3FF] hover:text-[#804FB3] rounded-b-xl transition-all duration-200"
                >
                  Trademark
                </a>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-black hover:text-black font-medium flex items-center transition-colors duration-300">
                Services{" "}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <a
                  href="#"
                  className="block px-4 py-3 text-[#020202] hover:bg-[#E6F3FF] hover:text-[#804FB3] rounded-t-xl transition-all duration-200"
                >
                  Business Incorporation
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-[#020202] hover:bg-[#E6F3FF] hover:text-[#804FB3] transition-all duration-200"
                >
                  Accounting & Bookkeeping
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-[#020202] hover:bg-[#E6F3FF] hover:text-[#804FB3] transition-all duration-200"
                >
                  GST Compliance
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-[#020202] hover:bg-[#E6F3FF] hover:text-[#804FB3] rounded-b-xl transition-all duration-200"
                >
                  Trademark & Licensing
                </a>
              </div>
            </div>

            {/* Other Links */}
            <a
              href="#"
              className="text-black hover:text-black font-medium transition-colors duration-300"
            >
              Partner with Us
            </a>
            <a
              href="/pricing"
              className="text-black hover:text-black font-medium transition-colors duration-300"
            >
              Pricing
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a href="https://onboarding.wealthempires.in/">
              <Button className="bg-[#000000] text-white hover:bg-gray-800 rounded-full">
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
