import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Perks() {
  const partnerBrands = [
    {
      name: "Shopify",
      category: "E-commerce",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      name: "Amazon",
      category: "E-commerce", 
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      name: "Mercury",
      category: "Banking",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mercury.svg",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600"
    },
    {
      name: "Omnisend",
      category: "Email Marketing",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/omnisend.svg",
      bgColor: "bg-black",
      iconColor: "text-white"
    },
    {
      name: "TikTok for Business",
      category: "Advertising",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      name: "Hands Off Sales Tax",
      category: "Sales Tax Registration",
      logo: "https://via.placeholder.com/40x40/FFD43B/000000?text=HOST",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      name: "AutoDS",
      category: "Automation",
      logo: "https://via.placeholder.com/40x40/4A90E2/FFFFFF?text=DS",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      name: "Gusto",
      category: "Payroll",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gusto.svg",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      name: "Virtual Post Mail",
      category: "Communication",
      logo: "https://via.placeholder.com/40x40/87CEEB/000000?text=VPM",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      name: "OpenPhone",
      category: "Phone",
      logo: "https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=OP",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      name: "Hubspot",
      category: "CRM",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      name: "Next",
      category: "Insurance",
      logo: "https://via.placeholder.com/40x40/00BFFF/FFFFFF?text=N",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    }
  ];

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

          <div className="grid grid-cols-2 gap-4">
            {partnerBrands.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className={`${brand.bgColor} rounded-lg p-2 flex-shrink-0`}>
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className={`w-8 h-8 ${brand.iconColor}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm mb-1">{brand.name}</h3>
                    <p className="text-gray-500 text-xs">{brand.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}