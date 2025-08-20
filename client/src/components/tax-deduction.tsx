import { ArrowRight } from "lucide-react";

export default function TaxDeduction() {
  return (
    <section className="bg-doola-light py-20" data-testid="section-tax-deduction">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="heading-deduct">
          Deduct Up to{" "}
          <span className="bg-doola-yellow px-2 py-1 rounded" data-testid="highlight-amount">
            $5,000
          </span>{" "}
          in Startup Costs.
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto" data-testid="text-description">
          You can deduct up to $5,000 for organizational expenses in the year your business is formed 
          (including what you spend with doola). Your doola subscription is tax deductible and can be 
          used to offset some of the taxes that your business may need to pay.
        </p>
        <p className="text-sm text-gray-600 mb-8" data-testid="text-disclaimer">
          These expenses must be recorded in your business accounting books to qualify as a tax deduction, 
          and you must also retain and maintain receipts for these expenses.
        </p>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800" data-testid="button-learn-more">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
