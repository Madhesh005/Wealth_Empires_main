import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Calculator } from "lucide-react";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-doola-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-doola-dark font-medium">Business-in-a-Box™</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              doola is for Do'ers.
            </h1>
            <p className="text-lg text-doola-dark mb-8 leading-relaxed">
              LLC Formation, Bookkeeping, Business Taxes, and E-Commerce Analytics—one platform, one point of contact, zero stress.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-black text-white hover:bg-gray-800">
                Create a Free Account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-white border-gray-300 text-doola-dark hover:bg-gray-50">
                Get a Demo
              </Button>
            </div>

            {/* Trustpilot Rating */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-doola-dark">Excellent</span>
              <div className="flex text-green-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-doola-dark">Trustpilot</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:ml-auto lg:mr-0">
              <div className="absolute inset-0 bg-doola-yellow rounded-full"></div>
              
              {/* Formation Card */}
              <div className="absolute top-8 left-8 bg-white rounded-xl p-4 shadow-lg w-48">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-doola-dark">✏️ Formation</span>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-doola-yellow h-2 rounded-full w-full"></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-green-600">✓ Formation Completed</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Awaiting Approval</div>
              </div>

              {/* Testimonial Card */}
              <div className="absolute bottom-0 right-0 bg-white rounded-xl p-4 shadow-lg w-56 transform translate-x-8 translate-y-8">
                <div className="flex items-start space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                    alt="Alex Lieberman" 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <p className="text-xs text-doola-dark leading-relaxed mb-2">
                      "doola made it effortless"
                    </p>
                    <div>
                      <div className="text-xs font-medium text-black">Alex Lieberman</div>
                      <div className="text-xs text-gray-500">Storyarb</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <TrendingUp className="h-5 w-5 text-doola-yellow" />
              </div>
              <div className="absolute top-16 -left-8 bg-white rounded-full p-3 shadow-lg">
                <Calculator className="h-5 w-5 text-doola-yellow" />
              </div>
              <div className="absolute bottom-16 -right-8 bg-white rounded-full p-3 shadow-lg">
                <span className="text-doola-yellow font-bold text-lg">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
