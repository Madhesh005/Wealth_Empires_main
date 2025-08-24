import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Mail,
  Video,
  Star,
  User,
  Calendar,
  FileText,
  Layers3,
  FileCheck2,
  Upload,
  CheckCircle2,
  Rocket,
  ChevronRight,
} from "lucide-react";
import {
  ShoppingBag,
  MessageSquare,
  Sparkles,
  Clock,
  Trophy,
  BarChart3
} from "lucide-react";

import Header from "@/components/header";
import Taxnotice from "@assets/noticetax.png";
import mapimg from "@assets/map.png"
import trade4 from "@assets/trade4.jpeg";
import trial from "@assets/trial.png";
import trade1 from "@assets/trade1.jpeg";
import trade2 from "@assets/trade2.jpeg";
import trade3 from "@assets/trade3.jpeg";
import Footer from "@/components/footer";
import Footermain from "@/components/footer-main";
import Resources from "@/components/resources";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

const PillButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className = "",
  children,
  ...props
}) => (
  <button
    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Rating: React.FC<{ compact?: boolean }> = ({ compact }) => (
    <div className="flex items-center gap-2">
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
);

const FauxVideoCard: React.FC = () => (
  <div className="relative rounded-2xl overflow-hidden bg-black/90 text-white min-h-[320px]">
    {/* Top-right mini review card */}
    <div className="absolute right-4 top-4 bg-white rounded-xl shadow p-3">
      <div className="text-[10px] text-gray-600">Trustpilot Reviews</div>
      <div className="text-xl font-bold text-black leading-none">4.5</div>
      <div className="mt-1 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3 w-3 text-green-500 fill-current" />
        ))}
      </div>
    </div>


    {/* Right Content - Video */}
    <div className="relative rounded-2xl overflow-hidden bg-black/90 text-white min-h-[320px]">
      {/* YouTube Video Embed */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl" data-testid="video-player">
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/97N56L1kjno?autoplay=1&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

const HelperCard: React.FC = () => (
  <div className="rounded-3xl p-8 bg-[#f7f7f7]">
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
      <div className="flex flex-col items-center ">
        {/* Profile Image */}
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face"
            className="h-20 w-20 rounded-full object-cover border-4 border-white shadow-lg mb-4"
            alt="Mathew Gregory"
          />

          {/* Name and Title */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Mathew Gregory</h3>
            <p className="text-gray-500 mt-1">Dedicated Bookkeeper</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-6"></div>

        {/* Help Section */}
        <div className="w-full">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Need help?</h4>
          <div className="space-y-3">
            <button className="w-full flex items-center  gap-3 py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-black-700 text-lg">
              <Mail className="h-5 w-5" />
              <span>Email for queries</span>
            </button>
            <button className="w-full flex items-center  gap-3 py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-black-700 text-lg">
              <Video className="h-5 w-5" />
              <span>Schedule a call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const UploadWidget: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const timer = useRef<number | null>(null);

  const start = () => {
    setOpen(true);
    setProgress(0);
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          if (timer.current) window.clearInterval(timer.current);
          return 100;
        }
        return p + 5;
      });
    }, 120);
  };

  useEffect(() => {
    return () => {
      if (timer.current) {
        window.clearInterval(timer.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={start}
        className="group w-24 h-28 rounded-xl bg-blue-500 hover:bg-blue-600 transition-colors grid place-items-center shadow-md"
      >
        <FileText className="h-10 w-10 text-white" />
      </button>
      <p className="mt-2 text-sm text-gray-600">ITR2024.pdf</p>

      {open && (
        <div className="absolute mt-6 w-80 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-700">
              <Upload className="h-5 w-5" />
              <span className="text-sm">uploading file</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600">×</button>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-2 rounded-full bg-blue-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress === 100 && (
            <div className="mt-2 flex items-center gap-2 text-green-600 text-sm">
              <CheckCircle2 className="h-4 w-4" /> Uploaded
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default function Trademark() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Hero */}
      <section className="px-16 py-16 mt-5">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-semibold ">
              <span>do. </span>
              <span className="text-[#0d792c]">Analytics</span> <span>Accurately</span>
            </h1>
            <p className="mb-8 max-w-xl text-md leading-relaxed text-black-600">
              Turn your business and ad data into powerful insights. Track performance, measure ad spend, identify trends, and make confident decisions that drive real results.

            </p>
            <div className="mb-6 flex flex-wrap gap-3">
              <PillButton className="bg-black text-white hover:bg-gray-800">Analyse your sales →</PillButton>
            </div>
            <Rating />
          </div>
          <FauxVideoCard />
        </div>
      </section>

      {/*Product Tour*/}
      <section className="px-16 py-16 mt-5">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold ">
              <span>1-Minute. </span>
              <span>Product</span> <span>Tour</span>
            </h1>
            <p className="mb-8 max-w-xl text-md leading-relaxed text-black-600">
              Let Arjun, our Founder & CEO, walk you through our new E-Commerce Analytics tool. Try it free for 30 days!
            </p>
            <div className="mb-6 flex flex-wrap gap-3">
              <PillButton className="bg-black text-white hover:bg-gray-800">Start your Business →</PillButton>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-black/90 text-white min-h-[320px]">
            {/* Background image blur (placeholder) */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* On-video copy like in screenshot */}
            <div className="relative z-10 h-full w-full flex flex-col items-start justify-end p-8 gap-1">
              <div className="text-3xl md:text-4xl font-bold">We Keep You</div>
              <div className="text-yellow-400 text-3xl md:text-5xl font-black leading-none">On Track</div>
              <div className="mt-auto ml-auto text-right">
                <div className="text-2xl md:text-3xl font-semibold">So You File</div>
                <div className="text-yellow-400 text-2xl md:text-4xl font-extrabold">On Time Every Time</div>
              </div>
            </div>          </div>
        </div>
      </section>

      {/*Tax Deadline*/}
      <section className="bg-gray-50 px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl flex flex-col items-center">
          <div className="mb-3 text-md font-semibold text-[#0d792c]">Analytics</div>
          <h2 className="mb-3 text-4xl font-extrabold">The Only Tool Sellers Need to Win..</h2>
          <img src={trial} alt="trialimg" className="w-60" />
        </div>
      </section>
      {/*Top of Orders*/}

      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={trade3}
              alt="Analytics Dashboard"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Financial Metrics */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay on Top of Orders</h2>
              <br />
              <br />

              {/* Feature List */}
              <div className="mt-8 space-y-6">
                <div className="flex gap-3">
                  <div className="rounded-full p-2 bg-red-50">
                    <Clock className="h-10 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Real-Time Updates</h3>
                    <p className="text-gray-600 text-sm">Stay in control with live order stats: track sales, returns, and trends by platform to fine-tune your fulfillment strategy.</p>
                  </div>
                </div><br />
                <div className="flex gap-3">
                  <div className="rounded-full p-2 bg-purple-50">
                    <BarChart3 className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Order History</h3>
                    <p className="text-gray-600 text-sm">Quickly access past orders, including payment and shipping details. Filter by date, platform, or status.</p>
                  </div>
                </div><br />
                <div className="flex gap-3">
                  <div className="rounded-full p-2 bg-blue-50">
                    <Trophy className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Restock Smarter</h3>
                    <p className="text-gray-600 text-sm">Never run out. Spot best-sellers, slow movers, and low-stock items instantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Track Ads Campaign*/}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right side - Financial Metrics */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Track Ads Campaign</h2>
              <br />
              <br />

              {/* Feature List */}
              <div className="mt-8 space-y-6">
                <div className="flex gap-3">
                  <div className="rounded-full p-2 bg-red-50">
                    <Clock className="h-10 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1"> Keep an Eye on Spending</h3>
                    <p className="text-gray-600 text-sm">Track ad spend and performance across every platform, in one place.</p>
                  </div>
                </div><br />
                <div className="flex gap-3">
                  <div className="rounded-full p-2 bg-purple-50">
                    <BarChart3 className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1"> Boost Conversions</h3>
                    <p className="text-gray-600 text-sm">See which ads drive conversions, and which don’t. Identify low performers and double down on what works.</p>
                  </div>
                </div><br />
                <div className="flex gap-3">
                  <div className="rounded-full p-2 bg-blue-50">
                    <Trophy className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1"> Connect your Platforms</h3>
                    <p className="text-gray-600 text-sm">Connect your ad platforms to centralize insights and measure what truly performs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Left side - Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={trade1}
              alt="Analytics Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>



      {/*Understand your revenue*/}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={trade2}
              alt="Analytics Dashboard"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Financial Metrics */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Understand Your Revenue</h2>
              <br />
              <br />

              {/* Feature List */}
              <div className="mt-8 space-y-6">
                <div className="flex gap-3">
                  <div className="rounded-full p-2 bg-red-50">
                    <Clock className="h-10 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Profit Breakdowns</h3>
                    <p className="text-gray-600 text-sm">See where your money goes. Analyze revenue, costs, and margins by product or platform.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="rounded-full p-2 bg-blue-50">
                    <Trophy className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Top Performers</h3>
                    <p className="text-gray-600 text-sm">Find your winning products with smart filters by platform, product, and time.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="rounded-full p-2 bg-purple-50">
                    <BarChart3 className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Sales Trends</h3>
                    <p className="text-gray-600 text-sm">Spot seasonal spikes, uncover slow months, and use data to fuel smarter growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Expert Team*/}
      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold">Your Expert Team, <br className="hidden sm:block" /> Handling It All.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[{ title: "Bookkeeper", icon: User, copy: "Keeps your finances in check, organizes your books, and prepares monthly reports. Got questions? They're just an email away." }, { title: "Tax Coordinator", icon: User, copy: "Guides you through the tax process, helps gather documents, and ensures everything is ready for a seamless filing experience." }, { title: "Tax Advisor", icon: User, copy: "Licensed professionals handling everything from filing your taxes to year-round advisory support, so you're always covered." }].map((c, i) => (
              <div key={i} className="text-left px-10">
                <div className="mb-6 grid h-12 w-12 place-items-center">
                  <c.icon className="h-8 w-8 text-gray-700 " />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{c.title}</h3>
                <p className="text-black">{c.copy}</p>
              </div>
            ))}
          </div>
          <PillButton className="mt-12 bg-black text-white hover:bg-gray-800">View Pricing →</PillButton>
        </div>
      </section>
      {/* Business-in-a-Box Pricing Card */}
      <section className="bg-[#ffeef2] px-6 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="p-10">
            <h2 className="text-4xl font-extrabold">What If Today Was The Day?</h2>
            <br />
            <p>Your dream business is waiting, let's get it off the ground.</p>
            <PillButton className="mt-12 bg-black text-white hover:bg-gray-800">
              Plans & Pricing →
            </PillButton>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col">
              <div className="flex items-start gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-gray-700" />
                    <h3 className="text-xl font-bold text-gray-900">Business-in-a-Box™</h3>
                  </div>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    Dedicated Human Bookkeeper + Bookkeeping Software + Business Analytics Software + State & IRS Tax Filings + CPA Consultation.
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="rounded-2xl bg-gray-50 px-6 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">$2,999</span>
                      <span className="text-gray-600">/yr</span>
                    </div>
                  </div>
                  <button className="mt-4 rounded-full p-3 bg-[#eeeeee] text-black hover:bg-black hover:text-white transition-colors">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Resources />
      {/* Extras */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-4xl font-extrabold">The Extras That Set You Up for Success.</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-yellow-100 p-8">
              <div className="mb-6 grid h-12 w-12 place-items-center"><Rocket className="h-8 w-8 text-gray-700" /></div>
              <h3 className="mb-3 text-2xl font-bold">Incorporation</h3>
              <p className="mb-6 text-gray-700">We simplify incorporation by handling all paperwork and support, so you can focus on growth.</p>
              <button className="mb-6 font-semibold text-yellow-700 hover:underline">Start Your Business →</button>
              <div className="rounded-xl bg-white p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="text-sm font-semibold">Formation Completed</span>
                </div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>✓ Operating Agreement</div>
                  <div>✓ Company Profile</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-pink-100 p-8">
              <div className="mb-6 grid h-12 w-12 place-items-center"><Sparkles className="h-8 w-8 text-gray-700" /></div>
              <h3 className="mb-3 text-2xl font-bold">Accounting & Bookkeeping</h3>
              <p className="mb-6 text-gray-700">We deliver expert accounting and bookkeeping services with precision, and industry-wide expertise.</p>
              <button className="mb-6 font-semibold text-pink-700 hover:underline">Analyze Your Sales →</button>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><div className="h-4 w-4 rounded bg-orange-400" /><span className="text-sm">Total Orders</span></div>
                  <span className="text-sm font-semibold">213</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><div className="h-4 w-4 rounded bg-green-400" /><span className="text-sm">Total Orders</span></div>
                  <span className="text-sm font-semibold">189</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><div className="h-4 w-4 rounded bg-gray-300" /><span className="text-sm text-gray-400">Total Orders</span></div>
                  <span className="text-sm text-gray-400">82</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-blue-100 p-8">
              <div className="mb-6 grid h-12 w-12 place-items-center"><Clock className="h-8 w-8 text-gray-700" /></div>
              <h3 className="mb-3 text-2xl font-bold">Trademark & Licensing</h3>
              <p className="mb-6 text-gray-700">We safeguard your brand’s identity with expert trademark services, protecting its integrity and uniqueness.</p>
              <button className="mb-6 font-semibold text-blue-700 hover:underline">Track Your Books →</button>
              <div className="rounded-xl bg-white p-4">
                <div className="text-sm text-blue-600">Total Revenue</div>
                <div className="text-xl font-bold text-blue-600">$112,780</div>
                <svg className="mt-2 h-8 w-full" viewBox="0 0 120 30">
                  <path d="M0,25 Q30,15 60,20 T120,10" stroke="#3b82f6" strokeWidth="3" fill="none" />
                  <circle cx="120" cy="10" r="3" fill="#3b82f6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footermain />
    </div>
  )
};
