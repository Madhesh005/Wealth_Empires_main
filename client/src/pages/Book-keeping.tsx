import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronDown, 
  ChevronRight, 
  Clock, 
  Star, 
  TrendingUp, 
  FileText, 
  Activity,
  CreditCard,
  Grid3X3,
  FileImage,
  BarChart,
  Laptop,
  Users,
  CalendarCheck,
  Mail,
  Calendar,
  CheckCircle,
  Clipboard,
  Bus,
  CloudUpload,
  Calculator,
  GraduationCap,
  Package,
  Rocket,
  Check,
  X,
  Menu
} from "lucide-react";
import Header from "@/components/header";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footermain from "@/components/footer-main";
import Reveal from "@/components/Reveal"; // Make sure this import path is correct

export default function Bookkeeping() {
  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "A Guide to Excel Accounting and Bookkeeping",
      excerpt: "Spreadsheets might be look boring, but it's a place where every cell counts, and every column can hold the potential for profit! They can transform your accounting and...",
      alt: "Excel accounting workspace with spreadsheets and financial documents"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "Bookkeeping Guide: Everything Amazon FBA Sellers Need to Know",
      excerpt: "If you're diving into the world of Amazon FBA, you've stepped onto a platform overflowing with potential and opportunity. But as your business...",
      alt: "Amazon FBA business setup with shipping boxes and packaging materials"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "Best Bookkeeping Services for Shopify Store Owners 2025",
      excerpt: "Running a successful Shopify store isn't just about having great products or an attractive website — it's about mastering the financial management that underpi...",
      alt: "Shopify store owner working on laptop managing online business"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      
      <Reveal>
        {/* Hero */}
        <section className="bg-white py-16" data-testid="hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                {/* Trial Badge */}
                <Badge 
                  variant="secondary" 
                  className="inline-flex items-center bg-doola-light-blue text-doola-blue mb-8 px-4 py-2"
                  data-testid="badge-trial"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  30-Day Free Trial. Try Now!
                </Badge>

                {/* Main Heading */}
                <h1 className="text-5xl lg:text-4xl font-bold text-black mb-6" data-testid="heading-main">
                  do. <span className="text-doola-blue">Bookkeeping</span> Better
                </h1>

                {/* Description */}
                <p className="text-md text-gray-600 mb-8 leading-relaxed" data-testid="text-description">
Professional bookkeeping that gives you financial clarity without the headache. Monthly reconciliation, reports, and insights that fuel growth.              </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    className="bg-black hover:bg-gray-800 text-white px-8 py-3"
                    data-testid="button-track"
                  >
                    Track Your Books
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Google Reviews */}
                <div className="flex items-center space-x-2" data-testid="google-reviews">
                  <span className="text-sm font-medium text-black">Excellent</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Google</span>
                </div>
              </div>

              {/* Right Content - Video */}
              <div>
                {/* YouTube Video Embed */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl" data-testid="video-player">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/97N56L1kjno?autoplay=1&mute=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full object-cover"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        {/* Features */}
        <section className="bg-gray-50 py-20" data-testid="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block text-sm text-doola-blue mb-4" data-testid="label-bookkeeping">
                Bookkeeping Software
              </div>
              <h2 className="text-4xl font-bold text-black mb-6" data-testid="heading-features">
                Bookkeeping Made Simple
              </h2>
              <Badge 
                variant="secondary" 
                className="inline-flex items-center bg-doola-light-blue text-doola-blue px-4 py-2"
                data-testid="badge-trial-features"
              >
                <Clock className="w-4 h-4 mr-2" />
                30-Day Free Trial. Try Now!
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Interface Mockup */}
              <div className="order-2 lg:order-1">
                <Card className="bg-white rounded-xl shadow-lg overflow-hidden" data-testid="interface-mockup">
                  {/* Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b">
                    <div className="flex items-center space-x-4">
                      <Button 
                        size="sm" 
                        className="bg-doola-blue hover:bg-doola-blue/90 text-white"
                        data-testid="button-transactions"
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Transactions
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Grid3X3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <FileImage className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <BarChart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Transactions */}
                  <div className="p-6">
                    {/* Amazon Transaction */}
                    <div className="flex items-center justify-between py-4 border-b border-gray-100" data-testid="transaction-amazon">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                          <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.045 18.02c9.793 4.196 19.372 1.568 23.287-2.565.391-.413-.022-.955-.531-.955h-1.951c-.307 0-.555.12-.793.366-3.076 3.103-10.707 3.103-13.783 0-.238-.246-.486-.366-.793-.366H3.53c-.509 0-.922.542-.531.955zM14.465.023c.391-.413-.022-.955-.531-.955H12.1c-.307 0-.555.12-.793.366-3.076 3.103-10.707 3.103-13.783 0C-2.714-.812-3.35-.346-3.35.023v1.951c0 .307.12.555.366.793 4.196 3.076 4.196 10.707 0 13.783-.246.238-.366.486-.366.793v1.951c0 .369.636.835.874.589 3.076-3.103 10.707-3.103 13.783 0 .238.246.486.366.793.366h1.951c.509 0 .922-.542.531-.955-4.196-9.793-1.568-19.372 2.565-23.287z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Amazon</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">+$2,158.43</div>
                        <Badge className="bg-green-100 text-green-800 text-xs">Income</Badge>
                      </div>
                    </div>

                    {/* Invoice Transaction */}
                    <div className="flex items-center justify-between py-4" data-testid="transaction-invoice">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <FileText className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Invoice #429</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">-$1,358.30</div>
                        <Badge className="bg-orange-100 text-orange-800 text-xs">Payroll</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right - Features */}
              <div className="order-1 lg:order-2">
                {/* Feature 1 */}
                <div className="mb-12" data-testid="feature-track">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-doola-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">Track & Categorize Transactions</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Stay updated with real-time insights. Never miss a transaction.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="mb-12" data-testid="feature-invoices">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-doola-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">Invoices & Payments Made Easy</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Send professional invoices and get paid faster.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div data-testid="feature-health">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-doola-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">Know Your Business Health</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Access financial dashboards, reports, and metrics that fuel smarter decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        {/* Dedicated Bookkeeper */}
        <section className="bg-white py-20" data-testid="dedicated-bookkeeper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block text-sm text-doola-blue mb-4" data-testid="label-dedicated">
                Dedicated Bookkeeper
              </div>
              <h2 className="text-4xl font-bold text-black" data-testid="heading-bookkeeper">
                Your Books, Our Experts.
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Features */}
              <div>
                {/* Feature 1 */}
                <div className="mb-8" data-testid="feature-software">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <Laptop className="w-4 h-4 text-doola-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">Incl. Bookkeeping Software</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Access live financial data whenever you need it. Stay informed, track spending, and make smarter decisions without the guesswork.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="mb-8" data-testid="feature-support">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-doola-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">Unlimited Transactions & Expert Support</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Your dedicated bookkeeper is always available to answer questions, review your books, and keep your finances on track so you never have to do it alone.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div data-testid="feature-closings">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <CalendarCheck className="w-4 h-4 text-doola-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">Monthly & Quarterly Closings</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We close your books monthly & quarterly—accurate, tax-ready, and hassle-free. Need help? We're always here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Bookkeeper Profile */}
              <div>
                <Card className="bg-gray-50 rounded-xl p-8" data-testid="bookkeeper-profile">
                  {/* Professional headshot */}
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                      alt="Mathew Gregory - Dedicated Bookkeeper" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      data-testid="img-bookkeeper"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-black" data-testid="text-name">Mathew Gregory</h3>
                      <p className="text-gray-600" data-testid="text-role">Dedicated Bookkeeper</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6" data-testid="text-help">Need help?</p>

                  {/* Contact Options */}
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start bg-white hover:bg-gray-50"
                      data-testid="button-email"
                    >
                      <Mail className="w-4 h-4 mr-3" />
                      Email for queries
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start bg-white hover:bg-gray-50"
                      data-testid="button-schedule"
                    >
                      <Calendar className="w-4 h-4 mr-3" />
                      Schedule a call
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        {/* Compliance */}
        <section className="bg-gray-50 py-20" data-testid="compliance">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block text-sm text-doola-blue mb-4" data-testid="label-catchup">
                Catch-Up
              </div>
              <h2 className="text-4xl font-bold text-black mb-6" data-testid="heading-compliance">
                Stay Compliant, Stay Focused.
              </h2>
              <a 
                href="#" 
                className="text-doola-blue hover:underline flex items-center justify-center"
                data-testid="link-learn-more"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - File Upload Interface */}
              <div>
                <Card className="bg-white rounded-xl shadow-lg p-8" data-testid="upload-interface">
                  {/* File Upload Area */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                    <div className="w-16 h-16 bg-doola-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-medium text-gray-900 mb-2" data-testid="text-filename">ITR2024.pdf</p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-4">
                      <CloudUpload className="w-4 h-4" />
                      <span data-testid="text-uploading">uploading file</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2" data-testid="progress-bar">
                      <div className="bg-doola-blue h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right - Features */}
              <div>
                {/* Feature 1 */}
                <div className="mb-8" data-testid="feature-organized">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-doola-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">Stay Organized & Tax-Ready</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We structure your financials so everything is clear, compliant, and ready to file.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="mb-8" data-testid="feature-filing">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clipboard className="w-4 h-4 text-doola-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">Done-For-You Tax Filing</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our licensed pros handle the entire process, ensuring accuracy and no missed deadlines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div data-testid="feature-cpa">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bus className="w-4 h-4 text-doola-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">CPA Support, Anytime</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Got tax questions? Talk to a licensed CPA and make confident financial decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        {/* Expert Team */}
        <section className="bg-white py-20" data-testid="expert-team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-2" data-testid="heading-team-1">Your Expert Team,</h2>
              <h2 className="text-4xl font-bold text-black mb-12" data-testid="heading-team-2">Handling It All.</h2>
            </div>

            {/* Team Roles Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Bookkeeper */}
              <div className="text-center" data-testid="role-bookkeeper">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4" data-testid="title-bookkeeper">Bookkeeper</h3>
                <p className="text-gray-600 leading-relaxed" data-testid="desc-bookkeeper">
                  Keeps your finances in check, organizes your books, and prepares monthly reports. Got questions? They're just an email away.
                </p>
              </div>

              {/* Tax Coordinator */}
              <div className="text-center" data-testid="role-coordinator">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4" data-testid="title-coordinator">Tax Coordinator</h3>
                <p className="text-gray-600 leading-relaxed" data-testid="desc-coordinator">
                  Guides you through the tax process, helps gather documents, and ensures everything is ready for a seamless filing experience.
                </p>
              </div>

              {/* Tax Advisor */}
              <div className="text-center" data-testid="role-advisor">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4" data-testid="title-advisor">Tax Advisor</h3>
                <p className="text-gray-600 leading-relaxed" data-testid="desc-advisor">
                  Licensed professionals handling everything from filing your taxes to year-round advisory support, so you're always covered.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-8 py-3"
                data-testid="button-pricing"
              >
                View Pricing
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        {/* Pricing */}
        <section className="bg-[#d6b4fc] py-20" data-testid="pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl font-bold text-black mb-6" data-testid="heading-what-if">
                  What If Today Was The Day?
                </h2>
                <p className="text-xl text-gray-600 mb-8" data-testid="text-dream">
                  Your dream business is waiting, let's get it off the ground.
                </p>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3"
                  data-testid="button-plans"
                >
                  Plans & Pricing
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Right - Pricing Card */}
              <div>
                <Card className="bg-white rounded-xl shadow-lg p-8" data-testid="pricing-card">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <Package className="w-6 h-6 text-gray-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-2" data-testid="package-title">
                        Business-in-a-Box™
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed" data-testid="package-description">
                        Dedicated Human Bookkeeper + Bookkeeping Software + Business Analytics Software + State & IRS Tax Filings + CPA Consultation.
                      </p>
                    </div>
                    <Button 
                      size="icon" 
                      className="bg-black text-white rounded-full"
                      data-testid="button-arrow"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-black" data-testid="price-amount">$2,999</span>
                    <span className="text-gray-600 ml-1" data-testid="price-period">/yr</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        {/* Blog */}
        <section className="bg-white py-20" data-testid="blog">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black" data-testid="heading-blog">
                Essential Reads for Do'ers.
              </h2>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  data-testid={`article-${article.id}`}
                >
                  <img
                    src={article.image}
                    alt={article.alt}
                    className="w-full h-48 object-cover"
                    data-testid={`img-article-${article.id}`}
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3" data-testid={`title-article-${article.id}`}>
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed" data-testid={`excerpt-article-${article.id}`}>
                      {article.excerpt}
                    </p>
                    <Button
                      variant="outline"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700"
                      data-testid={`button-learn-${article.id}`}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        {/* Services */}
        <section className="bg-gray-50 py-20" data-testid="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black" data-testid="heading-services">
                The Extras That Set You Up for Success.
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* U.S. Business Formation */}
              <Card className="bg-yellow-100 rounded-xl p-8" data-testid="service-formation">
                <div className="w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-yellow-700" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4" data-testid="title-formation">
                  U.S. Business Formation
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed" data-testid="desc-formation">
                  Skip the paperwork. We set up your business so you can start selling faster.
                </p>
                <a 
                  href="#" 
                  className="text-yellow-800 font-medium hover:underline flex items-center mb-6"
                  data-testid="link-start-business"
                >
                  Start Your Business
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                
                {/* Status Card */}
                <div className="space-y-3">
                  <Card className="bg-yellow-200 rounded-lg p-3 flex items-center space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">Formation Completed</span>
                  </Card>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-gray-400" />
                      <span>Operating Agreement</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-gray-400" />
                      <span>Company Profile</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Smart Sales Analytics */}
              <Card className="bg-pink-100 rounded-xl p-8" data-testid="service-analytics">
                <div className="w-12 h-12 bg-pink-200 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-pink-700" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4" data-testid="title-analytics">
                  Smart Sales Analytics
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed" data-testid="desc-analytics">
                  Know what's selling, what's not, and how to boost your revenue.
                </p>
                <a 
                  href="#" 
                  className="text-pink-800 font-medium hover:underline flex items-center mb-6"
                  data-testid="link-analyze-sales"
                >
                  Analyze Your Sales
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                
                {/* Analytics Cards */}
                <div className="space-y-3" data-testid="analytics-cards">
                  <Card className="bg-white rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.045 18.02c9.793 4.196 19.372 1.568 23.287-2.565.391-.413-.022-.955-.531-.955h-1.951c-.307 0-.555.12-.793.366-3.076 3.103-10.707 3.103-13.783 0-.238-.246-.486-.366-.793-.366H3.53c-.509 0-.922.542-.531.955z"/>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Total Orders</span>
                    </div>
                    <span className="text-sm font-medium text-gray-500">213</span>
                  </Card>
                  <Card className="bg-white rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0z"/>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Total Orders</span>
                    </div>
                    <span className="text-sm font-medium text-gray-500">189</span>
                  </Card>
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-400 rounded"></div>
                      </div>
                      <span className="text-sm text-gray-500">Total Orders</span>
                    </div>
                    <span className="text-sm text-gray-500">87</span>
                  </div>
                </div>
              </Card>

              {/* Stress-Free Taxes */}
              <Card className="bg-green-100 rounded-xl p-8" data-testid="service-taxes">
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4" data-testid="title-taxes">
                  Stress-Free Taxes
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed" data-testid="desc-taxes">
                  Stay compliant, save time, and never stress about tax season again.
                </p>
                <a 
                  href="#" 
                  className="text-green-800 font-medium hover:underline flex items-center mb-6"
                  data-testid="link-file-taxes"
                >
                  File Your Taxes
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                
                {/* Tax Status Cards */}
                <div className="space-y-3" data-testid="tax-status">
                  <Card className="bg-green-500 text-white rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Tax Filings</div>
                      <div className="text-xs opacity-80">Completed</div>
                    </div>
                    <Check className="h-5 w-5" />
                  </Card>
                  <Card className="bg-white rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-green-700 font-medium">CPA Consultation</div>
                        <div className="text-xs text-gray-500">Feb 23, 2025</div>
                      </div>
                      <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-8 py-3"
                data-testid="button-pricing-services"
              >
                View Pricing
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </Reveal>
      <Testimonials/>
      <FAQ />
      <FinalCTA />
      <Footermain />
    </div>
  );
}