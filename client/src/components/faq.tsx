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
      question: "What is doola?",
      answer: "doola is the all-in-one back-office solution for entrepreneurs. Whether you're launching a new business or scaling an existing one, doola handles the essential operations—LLC formation, bookkeeping, tax compliance, and more—so you can focus on growth. Thousands of founders trust doola to streamline their business setup, save time, and stay compliant."
    },
    {
      question: "Do I need to be a US citizen to work with doola?",
      answer: "No, you don't! We work with entrepreneurs from around the world to get their businesses incorporated. Don't take our word for it, though; check out our TrustPilot Page to hear what people globally have to say about doola."
    },
    {
      question: "Why should I get an LLC and a business bank account?",
      answer: "Forming an LLC and opening a business bank account are essential steps to protect your personal assets and streamline your finances. An LLC limits your personal liability in case of legal or financial issues, while a business bank account helps you separate personal and business finances, making tax preparation easier and ensuring a more professional image for your business."
    },
    {
      question: "What information do you need from me to get started?",
      answer: (
        <div>
          <p className="mb-2">We don't need any documents to get started. We just need a few pieces of info from you:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your Company Name</li>
            <li>Your Personal Address</li>
            <li>Phone Number and Email (For contact purposes)</li>
          </ul>
          <p className="mt-2">Later in the process, you'll need a passport to set up your bank account.</p>
        </div>
      )
    },
    {
      question: "What is doola Bookkeeping?",
      answer: (
        <div className="space-y-2">
          <p>doola Bookkeeping is a financial management platform that allows you to easily manage your business finances. It offers a variety of features, including:</p>
          <p><strong>Income and Expense Tagging:</strong> You can easily tag your income and expenses to keep track of where your money is going.</p>
          <p><strong>Ability to Link Multiple Bank Accounts:</strong> doola Bookkeeping lets you link multiple bank accounts to the platform, making it easy to view all of your financial information in one place.</p>
          <p><strong>Financial Health Reports:</strong> The platform provides financial health reports, giving you an overview of your business's financial performance to help make informed decisions.</p>
          <p><strong>Recordkeeping:</strong> doola Bookkeeping helps you keep track of important financial records, making tax season a breeze.</p>
          <p><strong>Dedicated Bookkeeping:</strong> With dedicated bookkeeping, a human bookkeeper will get to know your business, bring your books up to date, and do your book for you, start to finish.</p>
          <p>Overall, doola Bookkeeping streamlines your financial management, allowing you to focus on growing your business.</p>
        </div>
      )
    },
    {
      question: "Can doola help me with my business taxes?",
      answer: "We set up your business for sales tax, obtain a reseller certificate, and handle your annual business tax filings with our in-house tax and CPA teams—ensuring compliance, maintaining good standing, and avoiding hefty penalties."
    }
  ];

  const additionalFAQs = [
    {
      question: "Who is doola Analytics for?",
      answer: "doola Analytics is designed for e-commerce business owners to help track sales, manage orders, and monitor financial metrics in a simple, intuitive dashboard. For the initial product launch, doola will offer integrations with Shopify and Amazon, but will continue to expand to add more integrations."
    },
    {
      question: "Can doola help me with sales tax and reseller certificates?",
      answer: "We can help you with your initial sales tax registration in one state, and help you obtain a reseller certificate (if eligible). Whether you're selling on Shopify, Amazon, or across multiple states, our team helps you navigate the complexities—so you can focus on growing your business, not paperwork."
    },
    {
      question: "Still have a question?",
      answer: "Schedule a free consultation with an expert from doola, today."
    }
  ];

  const displayFAQs = showMore ? [...baseFAQs, ...additionalFAQs] : baseFAQs;

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-16">FAQs</h2>

        <div className="space-y-4">
          {displayFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="text-black hover:underline flex items-center mx-auto"
          >
            {showMore ? 'Show Less' : 'Show More'} 
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showMore ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
