import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-doola-yellow py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
          Less blah,<br />More doola.
        </h2>
        <p className="text-lg text-doola-dark mb-8">
          Join doola and start building today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black text-white hover:bg-gray-800">
            Create a Free Account <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="bg-white border-gray-300 text-doola-dark hover:bg-gray-50">
            Get a Demo
          </Button>
        </div>

        {/* Decorative Element */}
        <div className="mt-12">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
            alt="Business professionals celebrating success" 
            className="w-64 h-40 object-cover rounded-2xl mx-auto opacity-50" 
          />
        </div>
      </div>
    </section>
  );
}
