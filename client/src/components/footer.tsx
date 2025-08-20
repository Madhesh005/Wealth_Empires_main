import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription for:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-[#f8f7f2] py-12  border-gray-200">
      <br /><br /><br />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-black">
                <span className="text-doola-yellow font-[Open_Sans]"></span>#WE
              </div>
            </div>
            <p className="text-doola-dark mb-8 max-w-md text-sm">
            Wealth Empires — India’s 1st startup-friendly accounting firm offering incorporation, accounting & bookkeeping, GST compliance, and trademark & licensing to streamline your business success.            </p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Join Wealth Empires's monthly newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border-gray-300 focus:ring-doola-yellow"
                required
              />
              <Button type="submit" className="bg-black text-white hover:bg-gray-800 rounded-full">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-md text-gray-500 mt-2 ">
              By subscribing you agree with our <a href="#" className="hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
      <br /><br /><br />
    </footer>
  );
}
