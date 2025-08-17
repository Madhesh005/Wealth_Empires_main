import { Button } from "@/components/ui/button";
import { ArrowRight, Building, BarChart3, FileText, Calculator, Package } from "lucide-react";

export default function ProductSuite() {
  return (
    <section className="bg-doola-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sm text-doola-dark font-medium">Product Suite</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-4">
          Your Back Office. Simplified.
        </h2>
        <p className="text-lg text-doola-dark text-center mb-12 max-w-2xl mx-auto">
          Each tool is powerful on its own, but together? Game-changing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="bg-black text-white hover:bg-gray-800">
            Create a Free Account <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="bg-white border-gray-300 text-doola-dark hover:bg-gray-50">
            Get a Demo
          </Button>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Formation Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-doola-yellow rounded-xl flex items-center justify-center mb-6">
              <Building className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">U.S. Business Formation</h3>
            <p className="text-doola-dark mb-6">
              Skip the paperwork. We set up your business so you can start selling faster.
            </p>
            <a href="#" className="text-black font-medium hover:underline">Start Your Business</a>
          </div>

          {/* Analytics Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-doola-yellow rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Smart Sales Analytics</h3>
            <p className="text-doola-dark mb-6">
              Know what's selling, what's not, and how to boost your revenue.
            </p>
            <a href="#" className="text-black font-medium hover:underline">Analyze Your Sales</a>
          </div>

          {/* Taxes Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-doola-yellow rounded-xl flex items-center justify-center mb-6">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Stress-Free Taxes</h3>
            <p className="text-doola-dark mb-6">
              Stay compliant, save time, and never stress about tax season again.
            </p>
            <a href="#" className="text-black font-medium hover:underline">File Your Taxes</a>
          </div>

          {/* Bookkeeping Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-doola-yellow rounded-xl flex items-center justify-center mb-6">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Seamless Bookkeeping</h3>
            <p className="text-doola-dark mb-6">
              No spreadsheets, no hassle, just real-time financial insights.
            </p>
            <a href="#" className="text-black font-medium hover:underline">Track Your Books</a>
          </div>

          {/* Business-in-a-Box Card */}
          <div className="bg-black rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 bg-doola-yellow rounded-xl flex items-center justify-center mb-6">
              <Package className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Business-in-a-Box™</h3>
            <p className="text-gray-300 mb-6">
              Everything you need—Formation, Bookkeeping, Taxes, and Analytics—bundled to save you time & money.
            </p>
            <a href="#" className="text-doola-yellow font-medium hover:underline flex items-center">
              View Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
