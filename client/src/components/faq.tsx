import { useState } from "react";
import { Plus, Minus, ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-black">{question}</span>
        {isOpen ? (
          <Minus className="h-5 w-5 text-doola-dark" />
        ) : (
          <Plus className="h-5 w-5 text-doola-dark" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <div className="text-doola-dark">
            {typeof answer === 'string' ? <p>{answer}</p> : answer}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [showMore, setShowMore] = useState(false);

  const baseFAQs = [
    {
      question: "What services does Wealth Empires offer?",
      answer: "Wealth Empires provides end-to-end financial solutions—including company incorporation, accounting & bookkeeping, GST compliance, trademark protection, and even Virtual CFO support—designed to simplify business operations and fuel growth."
    },
    {
      question: "How can Wealth Empires help with business incorporation?",
      answer: "Our team handles the entire incorporation process—from filing the initial documents to ongoing compliance—so you can launch your business with confidence and focus on growth."
    },
    {
      question: "Do you manage GST-related services?",
      answer: "Yes! We manage the entire GST lifecycle: registration, filing, and audit assistance. Let us streamline your GST compliance so you can stay focused on your core business."
    },
    {
      question: "Why should I choose Wealth Empires?",
      answer: "With 25 seasoned professionals, transparent pricing, 24/7 client support, rapid execution, and secure data handling, we’ve helped clients create significant wealth, save on taxes, and grow sustainably."
    },
    {
      question: "How many clients have you served and what's the impact?",
      answer: "Wealth Empires has empowered 16+ businesses, helped create over ₹10 lakh in wealth, and saved more than ₹2.9 lakh in taxes for our clients."
    },
    {
      question: "Can Wealth Empires help me with my business taxes?",
      answer: "We set up your business for sales tax, obtain a reseller certificate, and handle your annual business tax filings with our in-house tax and CPA teams—ensuring compliance, maintaining good standing, and avoiding hefty penalties."
    }
  ];

  const additionalFAQs = [
    {
      question: "Who is Wealth Empires Analytics for?",
      answer: "Wealth Empires Analytics is designed for e-commerce business owners to help track sales, manage orders, and monitor financial metrics in a simple, intuitive dashboard. For the initial product launch, Wealth Empires will offer integrations with Shopify and Amazon, but will continue to expand to add more integrations."
    },
    {
      question: "Can Wealth Empires help me with sales tax and reseller certificates?",
      answer: "We can help you with your initial sales tax registration in one state, and help you obtain a reseller certificate (if eligible). Whether you're selling on Shopify, Amazon, or across multiple states, our team helps you navigate the complexities—so you can focus on growing your business, not paperwork."
    },
    {
      question: "Still have a question?",
      answer: "Schedule a free consultation with an expert from Wealth Empires, today."
    }
  ];

  const displayFAQs = showMore ? [...baseFAQs, ...additionalFAQs] : baseFAQs;

  return (
    <section className="bg-[#f8f7f2] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-16">FAQs</h2>

        <div className="space-y-4">
          {displayFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
