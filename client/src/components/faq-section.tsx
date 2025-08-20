import { useState } from "react";
import { Plus, Minus, ChevronDown } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What is doola?",
    answer: "doola is the all-in-one back-office solution for entrepreneurs. Whether you’re launching a new business or scaling an existing one, doola handles the essential operations—LLC formation, bookkeeping, tax compliance, and more—so you can focus on growth. Thousands of founders trust doola to streamline their business setup, save time, and stay compliant."
  },
  {
    id: 2,
    question: "Do I need to be a US citizen to work with doola?",
    answer: "No. doola supports founders from over 100+ countries to form and run US businesses. You can register an LLC, get an EIN, open a US business bank account (through our partners), and manage ongoing compliance without being a US citizen or resident."
  },
  {
    id: 3,
    question: "Why should I get an LLC and a business bank account?",
    answer: "An LLC helps protect your personal assets, can offer tax advantages, and builds credibility. A dedicated business bank account separates personal and business finances, simplifies bookkeeping, and is often required by payment processors and vendors."
  },
  {
    id: 4,
    question: "What information do you need from me to get started?",
    answer: "We’ll ask for your personal details (name, address, passport/ID), preferred company name(s), business purpose, and ownership info. Our onboarding is guided and only takes a few minutes to complete."
  }
];

export default function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const visibleFAQs = showAll ? faqData : faqData.slice(0, 4);

  return (
    <section className="bg-white py-20" data-testid="section-faq">
      <div className="w-[800px] mx-auto px-0">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10" data-testid="heading-faq">
          FAQs
        </h2>
        <div className="space-y-3">
          {visibleFAQs.map((faq) => (
            <div
              key={faq.id}
              className={`bg-[#f6f6f6] rounded-lg shadow-sm w-[800px] ${expandedFAQ === faq.id ? 'h-auto' : 'h-[72px] overflow-hidden'}`}
              data-testid={`faq-item-${faq.id}`}
            >
              <button 
                className="w-full h-full text-left px-5 py-3 flex justify-between items-center hover:bg-[#ececec]"
                onClick={() => toggleFAQ(faq.id)}
                data-testid={`faq-button-${faq.id}`}
              >
                <span className="font-semibold text-gray-900 text-base">{faq.question}</span>
                {expandedFAQ === faq.id ? (
                  <Minus className="text-gray-400 h-5 w-5" />
                ) : (
                  <Plus className="text-gray-400 h-5 w-5" />
                )}
              </button>
              {expandedFAQ === faq.id && (
                <div className="px-5 pt-2 pb-4 text-gray-700 text-sm leading-6" data-testid={`faq-answer-${faq.id}`}> 
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {faqData.length > 4 && (
          <div className="text-center mt-12">
            <button 
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
              onClick={() => setShowAll(!showAll)}
              data-testid="button-show-more-faq"
            >
              {showAll ? 'Show Less' : 'Show More'} <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
