import { Button } from "@/components/ui/button";
import { ArrowRight, Building, BarChart3, FileText, Calculator, Package } from "lucide-react";

export default function ProductSuite() {
  return (
    <section className="bg-doola-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-lg text-[#9400D3] font-medium">Product Suite</span>
        </div>
        <h2 className="text-4xl lg:text-4xl font-bold text-black text-center mb-4">
          Your Back Office. Simplified.
        </h2>
        <p className="text-lg text-doola-dark text-center mb-12 max-w-2xl mx-auto">
          Each tool is powerful on its own, but together? Game-changing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="https://onboarding.wealthempires.in/">
            <Button className="bg-black text-white px-6 py-4 rounded-full font-inter hover:bg-gray-800">
              Start your business <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        <br /><br />

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Formation Card */}
          <div className="bg-[#fef4cc] rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-doola-yellow rounded-xl flex items-center justify-center mb-6">
              <Building className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Incorporation</h3>
            <p className="text-doola-dark mb-6">
              We simplify incorporation by handling all paperwork and support, so you can focus on growth.</p>
            <a href="#" className="text-black font-medium hover:underline flex items-center">Start Your Business <ArrowRight className="ml-2 h-4 w-4" /></a>
          </div>

          {/* Analytics Card */}
          <div className="bg-[#ffeef2] rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-doola-yellow rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Accounting & Bookkeeping</h3>
            <p className="text-doola-dark mb-6">
              We deliver expert accounting and bookkeeping services with precision, and industry-wide expertise.            </p>
            <a href="#" className="text-black font-medium hover:underline flex items-center">Analyze Your Sales<ArrowRight className="ml-2 h-4 w-4" /></a>
          </div>

          {/* Taxes Card */}
          <div className="bg-[#f3eae1] rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-doola-yellow rounded-xl flex items-center justify-center mb-6">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">GST Compliance</h3>
            <p className="text-doola-dark mb-6">
              We provide seamless GST compliance services, ensuring your business stays fully compliant while you focus on growth.
            </p>
            <a href="#" className="text-black font-medium hover:underline flex items-center">Trademark & Licensing<ArrowRight className="ml-2 h-4 w-4" /></a>
          </div>

          {/* Bookkeeping Card */}
          <div className="bg-[#d0f4db] rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-doola-yellow rounded-xl flex items-center justify-center mb-6">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Trademark & Licensing</h3>
            <p className="text-doola-dark mb-6">
              We safeguard your brand’s identity with expert trademark services, protecting its integrity and uniqueness.</p>
            <a href="#" className="text-black font-medium hover:underline flex items-center ">Track Your Books <ArrowRight className="ml-2 h-4 w-4" /></a>
          </div>

          {/* Business-in-a-Box Card */}
          <div className="bg-[#eef3fe] rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 bg-doola-yellow rounded-xl flex items-center justify-center mb-6">
              <Package className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Business-in-a-Box™</h3>
            <p className="text-black-300 mb-6">
              Everything you need—Formation, Bookkeeping, Taxes, and Analytics—bundled to save you time & money.
            </p>
            <a href="#" className="text-black font-medium hover:underline flex items-center">
              View Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
