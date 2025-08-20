import { useEffect, useState } from "react";

export default function StickyPricing() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const cpaSectionElement = document.getElementById('cpa-section');
      if (cpaSectionElement) {
        const cpaSectionTop = cpaSectionElement.offsetTop;
        const scrollY = window.scrollY;
        setIsVisible(scrollY <= cpaSectionTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="sticky top-16 z-40 bg-white"
      data-testid="sticky-pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 md:gap-[10px] w-full h-[184px] mx-auto">
          {/* doola Column */}
          <div className="text-center p-4 bg-[#fde999] rounded-lg w-full h-[184px] flex flex-col items-center justify-center" data-testid="pricing-doola">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              <span className="text-doola-yellow">//</span>Wealth Empires
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              $2,999<span className="text-base font-normal">/yr</span>
            </div>
            <div className="text-sm text-gray-600">+ State Fees</div>
          </div>

          {/* Do It Yourself */}
          <div className="text-center p-4 border border-gray-200 rounded-lg bg-white w-full h-[184px] flex flex-col items-center justify-center" data-testid="pricing-diy">
            <div className="text-lg font-semibold text-gray-900 mb-2">Do It Yourself</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              $7,694<span className="text-base font-normal">/yr</span>
            </div>
            <div className="text-sm text-gray-600">+ $159 One-Time</div>
            <div className="text-sm text-gray-600">+ State Fees</div>
          </div>

          {/* LegalZoom */}
          <div className="text-center p-4 border border-gray-200 rounded-lg bg-white w-full h-[184px] flex flex-col items-center justify-center" data-testid="pricing-legalzoom">
            <div className="text-lg font-semibold text-gray-900 mb-2">LegalZoom</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              $796<span className="text-base font-normal">/yr</span>
            </div>
            <div className="text-sm text-gray-600">+ $159 One-Time</div>
            <div className="text-sm text-gray-600">+ State Fees</div>
          </div>

          {/* ZenBusiness */}
          <div className="text-center p-4 border border-gray-200 rounded-lg bg-white w-full h-[184px] flex flex-col items-center justify-center" data-testid="pricing-zenbusiness">
            <div className="text-lg font-semibold text-gray-900 mb-2">ZenBusiness</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              $559<span className="text-base font-normal">/yr</span>
            </div>
            <div className="text-sm text-gray-600">+ $198 One-Time</div>
            <div className="text-sm text-gray-600">+ State Fees</div>
          </div>

          {/* Atlas */}
          <div className="text-center p-4 border border-gray-200 rounded-lg bg-white w-full h-[184px] flex flex-col items-center justify-center" data-testid="pricing-atlas">
            <div className="text-lg font-semibold text-gray-900 mb-2">Atlas</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              $500<span className="text-base font-normal"> One-Time</span>
            </div>
            <div className="text-sm text-gray-600">+ $100 /yr</div>
          </div>
        </div>
      </div>
    </div>
  );
}