import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WhyDoola() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sm text-doola-dark font-medium">Resources</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-4">
          Why doola?
        </h2>
        <p className="text-lg text-doola-dark text-center mb-12 max-w-2xl mx-auto">
          We don't just set up your business, we set you up for success.
        </p>
        <p className="text-center text-doola-dark mb-12">
          See how doola stacks up against the competition.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Do It With Doola */}
          <div className="bg-doola-cream rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-black mb-4">Do It With doola</h3>
            <p className="text-doola-dark mb-6">
              Build your dream. We'll handle the rest.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800">
              Create a Free Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Do It Yourself */}
          <div className="bg-doola-light-gray rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-black mb-4">Do It Yourself</h3>
            <p className="text-doola-dark mb-6">
              Going solo? See how we compare.
            </p>
            <Button variant="outline" className="bg-white border-gray-300 text-doola-dark hover:bg-gray-50">
              Compare <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
