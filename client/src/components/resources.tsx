import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Resources() {
  return (
    <section className="bg-doola-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-lg text-[#957800] font-bold">Overview</span>
        </div>
        <h2 className="text-4xl lg:text-4xl font-bold text-black text-center mb-12">
          The Growth Playbook For Do'ers
        </h2>
        <p className="text-lg text-doola-dark text-center mb-16 max-w-2xl mx-auto">
          Powerful resources to help you scale smarter and faster.
        </p>


        {/* Resource Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Resource 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Business bank account setup" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h4 className="text-lg font-bold text-black mb-2">
                How To Open a US Business Bank Account
              </h4>
              <p className="text-doola-dark text-sm mb-4">
                Opening a business bank account is essential. Discover how to do this with this guide (that also covers international founders).
              </p>
              <a href="#" className="text-black font-medium hover:underline">Learn More</a>
            </div>
          </div>

          {/* Resource 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="E-commerce accounting dashboard" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h4 className="text-lg font-bold text-black mb-2">
                E-Commerce Accounting 101: Best Guide for Business Owners in 2025
              </h4>
              <p className="text-doola-dark text-sm mb-4">
                E-commerce has exploded into a trillion-dollar global industry. By 2025: Driven by the convenience of online shopping...
              </p>
              <a href="#" className="text-black font-medium hover:underline">Learn More</a>
            </div>
          </div>

          {/* Resource 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Tax savings and profit maximization" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h4 className="text-lg font-bold text-black mb-2">
                Maximize Your Profits: Save $30K in Taxes
              </h4>
              <p className="text-doola-dark text-sm mb-4">
                If you're an aspiring e-commerce seller, the thought of scaling to six or even seven figures might seem like a pipe dream...
              </p>
              <a href="#" className="text-black font-medium hover:underline">Learn More</a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-black text-white hover:bg-gray-800">
            Explore Resources <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
