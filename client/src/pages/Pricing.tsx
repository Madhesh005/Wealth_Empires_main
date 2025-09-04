import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Footermain from "@/components/footer-main";
import Reveal from "@/components/Reveal";

/** =========================
 * Animated Text Component
 * ========================= */
function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    { text: "Formation", color: "text-blue-500" },
    { text: "Compliance", color: "text-green-500" },
    { text: "Taxes", color: "text-red-500" },
    { text: "Bookkeeping", color: "text-purple-500" },
    { text: "Analytics", color: "text-orange-500" },
    { text: "it all with Wealth Empires", color: "text-black" },
  ];

  useEffect(() => {
    if (currentIndex < texts.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((idx) => idx + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, texts.length]);

  return (
    <div
      className="text-6xl font-bold mb-4 flex items-baseline justify-center"
      data-testid="hero-title"
    >
      <span>do.</span>
      <div className="relative overflow-hidden" style={{ height: "1.2em", width: "auto" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`block whitespace-nowrap ${texts[currentIndex].color}`}
            data-testid={`animated-text-${currentIndex}`}
          >
            {texts[currentIndex].text}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** =========================
 * Pricing Card Component
 * ========================= */
interface PricingCardProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  monthlyPrice?: string;
  period?: string;
  additionalFees?: string;
  icon: string; // Font Awesome class string
  features?: string[];
  isPopular?: boolean;
  hasToggle?: boolean;
  trialText?: string;
  isAnnual?: boolean;
  onToggleChange?: (isAnnual: boolean) => void;
}

function PricingCard({
  title,
  subtitle,
  description,
  price,
  monthlyPrice,
  period,
  additionalFees,
  icon,
  features,
  isPopular = false,
  hasToggle = false,
  trialText,
  isAnnual = true,
  onToggleChange,
}: PricingCardProps) {
  const displayPrice = hasToggle && !isAnnual && monthlyPrice ? monthlyPrice : price;
  const displayPeriod = hasToggle && !isAnnual ? "/mo" : period;

  return (
    <Card
      className={`p-6 hover:shadow-lg transition-shadow relative ${
        isPopular ? "bg-yellow-100 border-yellow-300" : "bg-white border-gray-200"
      } border-2 rounded-xl`}
      data-testid={`pricing-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-4 bg-black text-white px-3 py-1 rounded text-xs font-semibold">
          Most Popular
        </div>
      )}

      <div className="text-left">
        <div className="flex items-center mb-4">
          <i className={`${icon} ${isPopular ? "text-gray-700" : "text-gray-600"} mr-3`} />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <p className={`text-sm mb-2 ${isPopular ? "text-gray-700" : "text-yellow-600"}`}>{subtitle}</p>

        <p className={`text-sm mb-6 ${isPopular ? "text-gray-700" : "text-gray-600"}`}>{description}</p>

        <div className="mb-4">
          {trialText ? (
            <>
              <span className="text-xl font-bold">{trialText}</span>
              <p className="text-xs text-gray-500">{price}</p>
            </>
          ) : (
            <>
              <span className="text-3xl font-bold">{displayPrice}</span>
              {displayPeriod && (
                <span className={`ml-1 ${isPopular ? "text-gray-700" : "text-gray-600"}`}>
                  {displayPeriod}
                </span>
              )}
              {additionalFees && (
                <p className={`text-xs ${isPopular ? "text-gray-600" : "text-gray-500"}`}>
                  {additionalFees}
                </p>
              )}
            </>
          )}
        </div>

        {hasToggle && (
          <div className="flex items-center mb-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isAnnual}
                onChange={(e) => onToggleChange?.(e.target.checked)}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black" />
              <span className="ml-3 text-sm font-medium text-gray-700">
                {isAnnual ? "Annual" : "Monthly"}
              </span>
              <span className="ml-2 text-xs text-green-600">Save 25% Annually</span>
            </label>
          </div>
        )}

        {features && features.length > 0 && (
          <div className="mb-6">
            <h4 className={`font-semibold mb-2 ${isPopular ? "text-gray-700" : "text-yellow-600"}`}>
              Core Features:
            </h4>
            <ul className={`text-xs space-y-1 ${isPopular ? "text-gray-700" : "text-gray-600"}`}>
              {features.map((feature, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
              ))}
            </ul>
          </div>
        )}

        <Button
          className={`w-full py-3 rounded-lg font-semibold ${
            isPopular || title === "Total Compliance"
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          data-testid={`button-select-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          Select Plan <i className="fas fa-arrow-right ml-2" />
        </Button>
      </div>
    </Card>
  );
}

/** =========================
 * Feature Table Component
 * ========================= */
type FeatureItem = {
  name: string;
  subtext?: string;
  starter: boolean;
  pulse?: boolean;
  total: boolean;
  business: boolean;
};

type FeatureSection = {
  category: string;
  subtext?: string;
  items: FeatureItem[];
};

function FeatureTable() {
  const features: FeatureSection[] = [
    {
      category: "$0 Business Formation",
      subtext: "STATE FEES",
      items: [
        { name: "Formation Filings", starter: true, pulse: true, total: true, business: true },
        { name: "Employer Identification Number (EIN)", starter: true, pulse: true, total: true, business: true },
        { name: "Operating Agreement / Corporate Bylaws", starter: true, pulse: true, total: true, business: true },
        {
          name: "Expedited EIN Processing",
          starter: false,
          pulse: true,
          total: true,
          business: true,
          subtext: "ONLY WITH ANNUAL BILLING",
        },
        {
          name: "Sales Tax Registration & Reseller Certificate",
          starter: false,
          pulse: true,
          total: true,
          business: true,
          subtext: "TERMS APPLY",
        },
        { name: "Free Dissolution", starter: false, pulse: true, total: true, business: true },
      ],
    },
    {
      category: "Compliance",
      items: [
        { name: "Registered Agent Service", starter: false, pulse: true, total: true, business: true },
        { name: "Virtual Mailing/Business Address", starter: true, pulse: true, total: true, business: true },
        { name: "VIP Account Management", starter: false, pulse: true, total: true, business: true },
      ],
    },
    {
      category: "Taxes",
      items: [
        { name: "Annual State Tax Filings", starter: false, pulse: true, total: true, business: true },
        { name: "1:1 CPA Consultation", starter: false, pulse: true, total: true, business: true },
        { name: "Business IRS Tax Filings", starter: false, pulse: true, total: true, business: true },
      ],
    },
    {
      category: "Bookkeeping & Analytics",
      items: [
        { name: "E-Commerce Analytics", starter: false, pulse: true, total: true, business: true },
        { name: "Track Your Transactions", starter: false, pulse: true, total: true, business: true },
        { name: "Send Invoices", starter: false, pulse: true, total: true, business: true },
        { name: "Download Financial Reports", starter: false, pulse: true, total: true, business: true },
        { name: "Connect Multiple Bank Accounts", starter: false, pulse: true, total: true, business: true },
        { name: "Monthly/Quarterly Closings", starter: false, pulse: false, total: true, business: true },
        { name: "Dedicated Bookkeeper", starter: false, pulse: false, total: false, business: true },
      ],
    },
    {
      category: "Free Bonuses",
      items: [
        { name: "$100,000 in Perks and Rewards", starter: true, pulse: true, total: true, business: true },
        { name: "Wealth Empires Founders Fund T&C Apply", starter: false, pulse: true, total: true, business: true },
      ],
    },
  ];

  const renderIcon = (hasFeature: boolean) => (
    <div className="flex justify-center">
      <img
        src={
          hasFeature
            ? "https://www.doola.com/wp-content/uploads/2024/10/yes.png.webp"
            : "https://www.doola.com/wp-content/uploads/2024/10/no.png.webp"
        }
        alt={hasFeature ? "Included" : "Not included"}
        className="w-8 h-8"
      />
    </div>
  );

  // Split features into sections before and after Free Bonuses
  const sectionsBeforeFree = features.slice(0, -1); // All except Free Bonuses
  const freeBonusSection = features[features.length - 1]; // Free Bonuses section

  return (
    <section className="bg-gray-50 py-16" data-testid="feature-comparison-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm">
          {/* Sticky Container for sections before Free Bonuses */}
          <div className="overflow-hidden">
            {/* Sticky Pricing Header */}
            <div className="sticky top-0 z-10 bg-white shadow-sm">
              <div className="grid grid-cols-4 gap-4 px-6 py-6">
                <div className="col-span-1" />
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Starter</h3>
                  <p className="text-2xl font-bold mb-1">
                    $297<span className="text-sm font-normal">/yr</span> + State Fees
                  </p>
                  <Button className="bg-black text-white px-2 py-1 text-sm rounded-lg font-semibold hover:bg-gray-800 w-full">
                    Choose Plan
                  </Button>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Total Compliance</h3>
                  <p className="text-2xl font-bold mb-1">
                    $1,999<span className="text-sm font-normal">/yr</span> + State Fees
                  </p>
                  <Button className="bg-black text-white px-2 py-1 text-sm rounded-lg font-semibold hover:bg-gray-800 w-full">
                    Choose Plan
                  </Button>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Business-in-a-Box™</h3>
                  <p className="text-2xl font-bold mb-1">
                    $2,999<span className="text-sm font-normal">/yr</span> + State Fees
                  </p>
                  <Button className="bg-black text-white px-2 py-1 text-sm rounded-lg font-semibold hover:bg-gray-800 w-full">
                    Choose Plan
                  </Button>
                </div>
              </div>
            </div>

            {/* Features Content - Sections before Free Bonuses */}
            {sectionsBeforeFree.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="bg-gray-100 px-6 py-3">
                  <h3 className="font-semibold text-gray-800">{section.category}</h3>
                  {section.subtext && <p className="text-xs text-gray-500 mt-1">{section.subtext}</p>}
                </div>
                <div className="divide-y divide-gray-100">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="grid grid-cols-4 gap-4 px-6 py-4">
                      <div className="font-medium text-gray-700 col-span-1">
                        {item.name}
                        {item.subtext && <p className="text-xs text-gray-500 mt-1">{item.subtext}</p>}
                      </div>
                      <div className="col-span-1">{renderIcon(item.starter)}</div>
                      <div className="col-span-1">{renderIcon(item.total)}</div>
                      <div className="col-span-1">{renderIcon(item.business)}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Free Bonuses Section - Outside sticky container */}
          <div>
            <div className="bg-gray-100 px-6 py-3">
              <h3 className="font-semibold text-gray-800">{freeBonusSection.category}</h3>
              {freeBonusSection.subtext && (
                <p className="text-xs text-gray-500 mt-1">{freeBonusSection.subtext}</p>
              )}
            </div>
            <div className="divide-y divide-gray-100">
              {freeBonusSection.items.map((item, itemIndex) => (
                <div key={itemIndex} className="grid grid-cols-4 gap-4 px-6 py-4">
                  <div className="font-medium text-gray-700 col-span-1">
                    {item.name}
                    {item.subtext && <p className="text-xs text-gray-500 mt-1">{item.subtext}</p>}
                  </div>
                  <div className="col-span-1">{renderIcon(item.starter)}</div>
                  <div className="col-span-1">{renderIcon(item.total)}</div>
                  <div className="col-span-1">{renderIcon(item.business)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** =========================
 * Hero Section (Promo)
 * ========================= */
function HeroSection() {
  return (
    <section className="bg-yellow-100 py-16" data-testid="hero-section-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold mb-4 text-black">
              Less blah,
              <br />
              More Wealth Empires.
            </h1>
            <p className="text-lg text-gray-700 mb-8">Join Wealth Empires and start building today.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
                data-testid="button-create-free-account-bottom"
              >
                Create a Free Account
              </Button>
              <Button
                className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 border border-gray-200"
                data-testid="button-demo-bottom"
              >
                Get a Demo
              </Button>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main yellow box */}
              <div className="bg-yellow-400 rounded-2xl p-8 w-80 h-64 relative overflow-visible shadow-lg">
                {/* Discount badge inside box */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-xl font-bold">%</span>
                </div>

                {/* Chart icon inside box */}
                <div className="absolute bottom-6 left-6 w-16 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <div className="flex items-end space-x-1">
                    <div className="w-2 h-4 rounded-sm bg-blue-500" />
                    <div className="w-2 h-6 rounded-sm bg-blue-500" />
                    <div className="w-2 h-3 rounded-sm bg-blue-500" />
                  </div>
                </div>

                {/* Pie chart inside box */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400" />
                </div>
              </div>

              {/* Floating platform icons with dotted lines */}
              {/* Amazon icon - top left */}
              <div className="absolute -top-4 -left-4">
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">a</span>
                </div>
                <svg className="absolute top-5 left-5 w-16 h-16 -z-10">
                  <path d="M5 5 Q20 20 40 40" stroke="#666" strokeWidth="2" strokeDasharray="4,4" fill="none" />
                </svg>
              </div>

              {/* Shopify icon - top right */}
              <div className="absolute -top-4 -right-4">
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">S</span>
                </div>
                <svg className="absolute top-5 right-5 w-16 h-16 -z-10">
                  <path d="M35 5 Q20 20 0 40" stroke="#666" strokeWidth="2" strokeDasharray="4,4" fill="none" />
                </svg>
              </div>

              {/* eBay icon - bottom left */}
              <div className="absolute -bottom-4 -left-4">
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-red-500 font-bold text-xs">eBay</span>
                </div>
                <svg className="absolute bottom-5 left-5 w-16 h-16 -z-10">
                  <path d="M5 35 Q20 20 40 0" stroke="#666" strokeWidth="2" strokeDasharray="4,4" fill="none" />
                </svg>
              </div>

              {/* Generic platform icon - bottom right */}
              <div className="absolute -bottom-4 -right-4">
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-400 rounded-sm" />
                </div>
                <svg className="absolute bottom-5 right-5 w-16 h-16 -z-10">
                  <path d="M35 35 Q20 20 0 0" stroke="#666" strokeWidth="2" strokeDasharray="4,4" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** =========================
 * Main Home Component
 * ========================= */
export default function Home() {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingCards: PricingCardProps[] = [
    {
      title: "Starter",
      subtitle: "For New Businesses",
      description: "For first-time founders who need the basics to launch with confidence.",
      price: "$297",
      period: "/yr",
      additionalFees: "+ State Fees",
      icon: "fas fa-rocket",
    },
    {
      title: "Pulse",
      subtitle: "For Existing Businesses",
      description: "Pulse helps you automate bookkeeping, track payouts, monitor expenses.",
      price: "Renew at $300/yr",
      trialText: "30 Day Trial",
      icon: "fas fa-chart-line",
    },
    {
      title: "Total Compliance",
      subtitle: "For New & Existing Businesses",
      description: "Stay 100% compliant with tax, legal, and regulatory rules.",
      price: "$1,999",
      period: "/yr",
      additionalFees: "+ State Fees",
      icon: "fas fa-bolt",
      features: [
        "<strong>Company Formation</strong><br>Included (fee if needed).",
        "<strong>Tax Filings</strong><br>File your federal business taxes with confidence.",
        "<strong>Bookkeeping & Analytics</strong><br>Stay on top of your finances and spot trends.",
        "<strong>All Features</strong>",
      ],
    },
    {
      title: "Business-in-a-Box™",
      subtitle: "For New & Existing Businesses",
      description:
        "For founders who want full legal + compliance, plus a dedicated bookkeeper.",
      price: "$2,999",
      monthlyPrice: "$329",
      period: "/yr",
      additionalFees: "+ State Fees",
      icon: "fas fa-cog",
      isPopular: true,
      hasToggle: true,
      isAnnual: isAnnual,
      onToggleChange: setIsAnnual,
      features: [
        "<strong>Company Formation</strong><br>Included (fee if needed).",
        "<strong>Tax Filings</strong><br>File your federal business taxes with confidence.",
        "<strong>Bookkeeping & Analytics</strong><br>Stay on top of your finances and spot trends.",
        "<strong>Dedicated Bookkeeper</strong><br>A trusted bookkeeper keeping your finances organized and tax-ready.",
        "<strong>All Features</strong>",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/*Header Section */}
      <Header />

      <Reveal>
        {/* Hero Section */}
        <section className="bg-white py-16" data-testid="hero-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <AnimatedText />
              <p className="text-gray-600 text-lg" data-testid="hero-subtitle">
                Unlock the best all-in-one platform in the industry.
              </p>
            </div>

            {/* Funding Banner */}
            <div
              className="bg-black rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between text-white gap-6"
              data-testid="funding-banner"
            >
              <div className="flex items-start md:items-center gap-4 text-left">
                <div className="text-yellow-400 text-2xl">
                  <i className="fas fa-trophy" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Win <span className="text-yellow-400">$5,000</span> in Startup Funding
                  </h3>
                  <p className="text-gray-300">
                    Access to the Wealth Empires Founders Fund is available to Total Compliance or
                    Business-in-a-Box™ Annual plan subscribers
                  </p>
                </div>
              </div>
              <Button
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                data-testid="button-learn-more"
              >
                Learn More <i className="fas fa-arrow-right ml-2" />
              </Button>
            </div>

            {/* Pricing Cards */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto"
              data-testid="pricing-cards-grid"
            >
              {/* First Column - Starter and Pulse */}
              <div className="space-y-6">
                <PricingCard {...pricingCards[0]} />
                <PricingCard {...pricingCards[1]} />
              </div>

              {/* Second Column - Total Compliance */}
              <div className="flex">
                <div className="w-full">
                  <PricingCard {...pricingCards[2]} />
                </div>
              </div>

              {/* Third Column - Business-in-a-Box™ */}
              <div className="flex">
                <div className="w-full">
                  <PricingCard {...pricingCards[3]} />
                </div>
              </div>
            </div>

            {/* Deduct Up to Section */}
            <div className="bg-[#eef3fe] py-16 mb-16 rounded-3xl" data-testid="deduct-section">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Deduct Up to <span className="text-blue-500">$5,000</span> in Startup Costs.
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
                  You can deduct up to $5,000 for organizational expenses in the year your business is formed
                  (including what you spend with Wealth Empires). Your Wealth Empires subscription is tax
                  deductible and can be used to offset some of the taxes that your business may need to pay.
                </p>
                <p className="text-gray-600 text-sm mb-8 max-w-3xl mx-auto">
                  These expenses must be recorded in your business accounting books to qualify as a tax
                  deduction, and you must also retain and maintain receipts for these expenses.
                </p>
                <Button
                  className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800"
                  data-testid="button-learn-more-deduct"
                >
                  Learn More <i className="fas fa-arrow-right ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        {/* Feature Comparison Table */}
        <FeatureTable />
      </Reveal>

      <Reveal>
        {/* Best Value Section */}
        <section className="bg-white py-16" data-testid="best-value-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 text-black">The Best Value in the Industry</h2>
            <p className="text-black text-lg mb-8">
              Whether you're looking for comprehensive features or unbeatable savings,
              <br />
              our solution stands out as the most affordable choice.
            </p>

            <Button
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 mb-12"
              data-testid="button-compare"
            >
              Compare Now <i className="fas fa-arrow-right ml-2" />
            </Button>

            {/* Service Cards Grid as Image */}
            <div className="flex justify-center" data-testid="service-cards-grid">
              <img
                src="https://www.doola.com/wp-content/uploads/2025/07/compare-desk.png.webp"
                alt="Service comparison cards showing pilot, quickbooks, and other services"
                className="max-w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </section>
      </Reveal>

      <FAQ />
      <FinalCTA />
      <Footermain />
    </div>
  );
}
