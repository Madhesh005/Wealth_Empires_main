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
  Clock,
  Rocket,
  Sparkles,
  BarChart3,
  ChevronRight,
} from "lucide-react";

import Header from "@/components/header";
import Taxnotice from "@assets/noticetax.png";
import mapimg from "@assets/map.png"
import Footer from "@/components/footer";
import Footermain from "@/components/footer-main";
import Resources from "@/components/resources";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
/**
 * Doola Tax Filing – Visual Clone
 * - Single-file TSX React component
 * - Uses TailwindCSS for styling (no backend)
 * - Icon set: lucide-react
 * - Mimics the structure & look of the provided screenshots
 */

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
    <div className={`flex ${compact ? "gap-0.5" : "gap-1"}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${compact ? "h-3 w-3" : "h-4 w-4"} fill-current text-green-500`} />
      ))}
    </div>
    <span className={`text-gray-600 ${compact ? "text-xs" : "text-sm"}`}>Excellent</span>
    <span className={`text-gray-500 ${compact ? "text-xs" : "text-sm"}`}>Trustpilot</span>
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

    {/* Background image blur (placeholder) */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    </div>

    {/* On-video copy like in screenshot */}
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

export default function TaxFilingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Hero */}
      <section className="px-16 py-16 mt-5">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-semibold ">
              <span>do. </span>
              <span className="text-[#0d792c]">Taxes</span> <span>Totally Compliant</span>
            </h1>
            <p className="mb-8 max-w-xl text-md leading-relaxed text-black-600">
              Simplified tax preparation, filing, and compliance for entrepreneurs. Expert guidance to maximize deductions and keep your business protected.
            </p>
            <div className="mb-6 flex flex-wrap gap-3">
              <PillButton className="bg-black text-white hover:bg-gray-800">File Your Taxes →</PillButton>
            </div>
            <Rating />
          </div>
          <FauxVideoCard />
        </div>
      </section>

      {/* 3 Feature Columns */}
      <section className="px-16 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div className="text-center border-r-2 ">
            <div className="mx-auto mb-6 grid h-16 w-16 place-items-center">
              <User className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">A Dedicated Tax team</h3>
            <p className="text-gray-600">Filing taxes is complicated, we make it simple. Our experts handle everything, keeping you compliant and ahead of deadlines all year.</p>
          </div>
          <div className="text-center border-r-2 px-4">
            <div className="mx-auto mb-6 grid h-16 w-16 place-items-center">
              <Calendar className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Maximize Your Refunds</h3>
            <p className="text-gray-600">Don't leave money on the table. We help you find every deduction, so you keep more of what you earn.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-6 grid h-16 w-16 place-items-center">
              <Layers3 className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">All-in-One Solution</h3>
            <p className="text-gray-600">Our <span className="text-blue-600 underline">Business-in-a-Box Plan</span> combines expert bookkeeping and tax support to keep your finances organized all year, every year.</p>
          </div>
        </div>
      </section>

      {/* Tax Deadlines heading */}
      <section className="bg-gray-50 px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-md font-semibold text-[#0d792c]">Tax Deadlines</div>
          <h2 className="mb-3 text-4xl font-extrabold">Never Miss a Tax Deadline.</h2>
          <p className="text-lg text-gray-600">We keep you on track so you file on time, every time.</p>
        </div>
      </section>

      {/* SMLLC + C-Corp and helper card */}
      <section className="px-6 py-16">
        <div className="mx-auto  grid max-w-7xl gap-16 lg:grid-cols-2">
          <HelperCard />
          <div className="space-y-10 pt-10">
            <div>
              <h3 className="mb-1 text-3xl font-bold text-black">Single Member LLCs and C-Corporations</h3>
              <p className="mb-6 text-black">Deadline: April 15th, 2025</p>
              <div className="space-y-10">
                <div>
                  <div className="mb-1 font-semibold text-2md">For US Residents with a SMLLC</div>
                  <p className="text-black"><span className="text-blue-600 ">Schedule C</span>, Profit or Loss from Single Member LLC.</p>
                </div>
                <div>
                  <div className="mb-1 font-semibold">For US Non-Residents with a SMLLC and C-Corporations</div>
                  <p className="text-black"><span className="text-blue-600 ">Form 1120</span>, US Corporation Tax Return</p>
                  <p className="text-black"><span className="text-blue-600 ">Form 5472</span>, Information Return of a 25% Foreign-Owned U.S. Corporation or a Foreign Corporation Engaged in a U.S. Trade or Business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships & S-Corp with upload */}
      <section className="bg-gray-50 px-20 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 text-3xl font-bold">Multiple Member LLCs (Partnerships)<br />and S-Corporations</h2>
            <p className="mb-8 text-gray-600">Deadline: March 17th, 2025</p>
            <div className="space-y-8">
              <div>
                <h4 className="mb-1 text-xl font-semibold">For Multi Member LLCs</h4>
                <p className="text-gray-600"><span className="text-blue-600">Form 1065</span>, US Return of Partnership Income + K-1 Forms</p>
              </div>
              <div>
                <h4 className="mb-1 text-xl font-semibold">For S-Corporations</h4>
                <p className="text-gray-600"><span className="text-blue-600">Form 1120-S</span>, Income Tax Return for an S Corporation + K-1 Forms</p>
              </div>
            </div>
          </div>
          <div className="relative grid place-items-center">
            <UploadWidget />
          </div>
        </div>
      </section>

      {/* Form 1099 CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl  rounded-3xl bg-[#d0f4db] p-10 py-1">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-4xl font-extrabold">Need to File Form 1099?</h2>
              <p className="mb-2 text-lg text-gray-700">No stress, no confusion—just fast, accurate 1099 filing.</p>
              <p className="mb-8 text-gray-600">We handle the details so you stay compliant and worry-free.</p>
              <PillButton className="bg-black text-white hover:bg-gray-800">Start your Business →</PillButton>
            </div>
            <div className="grid place-items-center">
              <img src={Taxnotice} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Sales Tax Map */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-extrabold leading-tight">Check Sales Tax Rates<br />in Any State.</h2>
            <p className="mb-8 text-lg text-gray-600">Explore sales tax rates across the U.S. with our interactive map.</p>
            <PillButton className="bg-black text-white hover:bg-gray-800">Check Sales Tax Rates →</PillButton>
          </div>
          <div className="rounded-2xl p-8 shadow">
            <img src={mapimg} alt="map_image" />
          </div>
        </div>
      </section>

      {/* Expert Team */}
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
      <section className="bg-[#d0f4db] px-6 py-16">
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
  );
}


