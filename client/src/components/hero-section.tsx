import { useState } from "react";
import { FileText, Shield, Briefcase } from "lucide-react";

export default function HeroSection() {
  const [activeTier, setActiveTier] = useState<'starter' | 'compliance' | 'business'>('business');
  return (
    <section className="bg-white py-20" data-testid="section-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="heading-main">
          Get More For Less.
        </h1>
        <p className="text-xl text-gray-600 mb-4" data-testid="text-subtitle-1">
          There's no reason to pay crazy high prices to start your business.
        </p>
        <p className="text-xl text-gray-600 mb-16" data-testid="text-subtitle-2">
          doola does it worry-free, without the hidden fees.
        </p>

        {/* Pricing Tier Selector */}
        <div className="flex justify-center items-center mb-2" data-testid="tier-selector">
          <div className="inline-flex items-center gap-8 border-b-2 border-gray-300">
            <button
              className={`flex items-center space-x-2 border-b-2 -mb-[2px] pb-1 transition-colors ${
                activeTier === 'starter' ? 'border-black text-black' : 'border-transparent text-gray-600'
              }`}
              onClick={() => setActiveTier('starter')}
              data-testid="tier-starter"
            >
              <FileText className="h-5 w-5" />
              <span>Starter</span>
            </button>
            <button
              className={`flex items-center space-x-2 border-b-2 -mb-[2px] pb-1 transition-colors ${
                activeTier === 'compliance' ? 'border-black text-black' : 'border-transparent text-gray-600'
              }`}
              onClick={() => setActiveTier('compliance')}
              data-testid="tier-compliance"
            >
              <Shield className="h-5 w-5" />
              <span>Total Compliance</span>
            </button>
            <button
              className={`flex items-center space-x-2 border-b-2 -mb-[2px] pb-1 transition-colors ${
                activeTier === 'business' ? 'border-black text-black' : 'border-transparent text-gray-600'
              }`}
              onClick={() => setActiveTier('business')}
              data-testid="tier-business-active"
            >
              <Briefcase className="h-5 w-5" />
              <span>Business-in-a-Box™</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
