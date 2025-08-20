import { ArrowRight, Check, X } from "lucide-react";

const ComparisonRow = ({ 
  title, 
  doolaFeature, 
  diyFeature, 
  legalzoomFeature, 
  zenbusinessFeature, 
  atlasFeature,
  sectionId 
}: {
  title: string;
  doolaFeature: { included: boolean; price?: string; note?: string };
  diyFeature: { included: boolean; price?: string; note?: string };
  legalzoomFeature: { included: boolean; price?: string; note?: string };
  zenbusinessFeature: { included: boolean; price?: string; note?: string };
  atlasFeature: { included: boolean; price?: string; note?: string };
  sectionId?: string;
}) => (
  <div className="bg-gray-50 rounded-lg shadow-sm mb-6 overflow-hidden" id={sectionId} data-testid={`comparison-${title.toLowerCase().replace(/\s+/g, '-')}`}>
    <div className="px-6 py-4 bg-gray-100 border-b">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
      <div className="p-4 border-r border-gray-200">
        <div className="flex items-center justify-center">
          {doolaFeature.included ? (
            (doolaFeature.price || doolaFeature.note) ? (
              <>
                {doolaFeature.price && <span className="font-medium">{doolaFeature.price}</span>}
                {doolaFeature.note && <span className="text-sm text-gray-600 ml-2">{doolaFeature.note}</span>}
              </>
            ) : (
              <Check className="h-8 w-8 text-green-600" />
            )
          ) : (
            <X className="h-8 w-8 text-red-600" />
          )}
        </div>
      </div>
      <div className="p-4 border-r border-gray-200">
        <div className="text-center">
          {diyFeature.included ? (
            (diyFeature.price || diyFeature.note) ? (
              <>
                {diyFeature.price && <div className="font-medium">{diyFeature.price}</div>}
                {diyFeature.note && <div className="text-sm text-gray-600 mt-1">{diyFeature.note}</div>}
              </>
            ) : (
              <Check className="h-8 w-8 text-green-600 mx-auto" />
            )
          ) : (
            <X className="h-8 w-8 text-red-600 mx-auto" />
          )}
        </div>
      </div>
      <div className="p-4 border-r border-gray-200">
        <div className="text-center">
          {legalzoomFeature.included ? (
            (legalzoomFeature.price || legalzoomFeature.note) ? (
              <>
                {legalzoomFeature.price && <div className="font-medium">{legalzoomFeature.price}</div>}
                {legalzoomFeature.note && <div className="text-sm text-gray-600 mt-1">{legalzoomFeature.note}</div>}
              </>
            ) : (
              <Check className="h-8 w-8 text-green-600 mx-auto" />
            )
          ) : (
            <X className="h-8 w-8 text-red-600 mx-auto" />
          )}
        </div>
      </div>
      <div className="p-4 border-r border-gray-200">
        <div className="text-center">
          {zenbusinessFeature.included ? (
            (zenbusinessFeature.price || zenbusinessFeature.note) ? (
              <>
                {zenbusinessFeature.price && <div className="font-medium">{zenbusinessFeature.price}</div>}
                {zenbusinessFeature.note && <div className="text-sm text-gray-600 mt-1">{zenbusinessFeature.note}</div>}
              </>
            ) : (
              <Check className="h-8 w-8 text-green-600 mx-auto" />
            )
          ) : (
            <X className="h-8 w-8 text-red-600 mx-auto" />
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="text-center">
          {atlasFeature.included ? (
            (atlasFeature.price || atlasFeature.note) ? (
              <>
                {atlasFeature.price && <div className="font-medium">{atlasFeature.price}</div>}
                {atlasFeature.note && <div className="text-sm text-gray-600 mt-1">{atlasFeature.note}</div>}
              </>
            ) : (
              <Check className="h-8 w-8 text-green-600 mx-auto" />
            )
          ) : (
            <X className="h-8 w-8 text-red-600 mx-auto" />
          )}
        </div>
      </div>
    </div>
  </div>
);

export default function ComparisonTable() {
  return (
    <section className="bg-white pt-4 pb-12" data-testid="section-comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ComparisonRow
          title="U.S. Business Formation"
          doolaFeature={{ included: true, price: "$0 + State Fees" }}
          diyFeature={{ included: true, price: "$0 + State Fees", note: "Using LegalZoom" }}
          legalzoomFeature={{ included: true, price: "$0 + State Fees" }}
          zenbusinessFeature={{ included: true, price: "$0 + State Fees" }}
          atlasFeature={{ included: true, price: "$500" }}
        />

        <ComparisonRow
          title="EIN & Operating Agreement"
          doolaFeature={{ included: true }}
          diyFeature={{ included: true, price: "$159 One-Time", note: "Using LegalZoom" }}
          legalzoomFeature={{ included: true, price: "$159 One-Time" }}
          zenbusinessFeature={{ included: true, price: "$198 One-Time" }}
          atlasFeature={{ included: true }}
        />

        <ComparisonRow
          title="Registered Agent Service"
          doolaFeature={{ included: true }}
          diyFeature={{ included: true, price: "$199/yr", note: "Using ZenBusiness" }}
          legalzoomFeature={{ included: true, price: "$299/yr" }}
          zenbusinessFeature={{ included: true, price: "$199/yr" }}
          atlasFeature={{ included: true, price: "$100/yr", note: "First Year Free" }}
        />

        <ComparisonRow
          title="Annual State Filing"
          doolaFeature={{ included: true }}
          diyFeature={{ included: true, price: "$149/yr", note: "Using LegalZoom" }}
          legalzoomFeature={{ included: true, price: "$149/yr" }}
          zenbusinessFeature={{ included: false }}
          atlasFeature={{ included: false }}
        />

        <ComparisonRow
          title="Mailing/Business Address"
          doolaFeature={{ included: true }}
          diyFeature={{ included: true, price: "$348/yr", note: "Using LegalZoom" }}
          legalzoomFeature={{ included: true, price: "$348/yr" }}
          zenbusinessFeature={{ included: false }}
          atlasFeature={{ included: false }}
        />

        <ComparisonRow
          title="Bookkeeping Software"
          doolaFeature={{ included: true }}
          diyFeature={{ included: true, price: "$360/yr", note: "Using ZenBusiness" }}
          legalzoomFeature={{ included: false }}
          zenbusinessFeature={{ included: true, price: "$360/yr" }}
          atlasFeature={{ included: false }}
        />

        <ComparisonRow
          title="Dedicated Bookkeeping"
          doolaFeature={{ included: true }}
          diyFeature={{ included: true, price: "$2,988/yr", note: "Using Bench" }}
          legalzoomFeature={{ included: false }}
          zenbusinessFeature={{ included: false }}
          atlasFeature={{ included: false }}
        />

        <ComparisonRow
          title="CPA Tax Consultation"
          sectionId="cpa-section"
          doolaFeature={{ included: true }}
          diyFeature={{ included: true, price: "$1,200/yr", note: "Using 3rd Party CPA" }}
          legalzoomFeature={{ included: false }}
          zenbusinessFeature={{ included: false }}
          atlasFeature={{ included: false }}
        />

        <ComparisonRow
          title="IRS Federal Tax Filing"
          doolaFeature={{ included: true }}
          diyFeature={{ included: true, price: "$2,450/yr", note: "Using Pilot" }}
          legalzoomFeature={{ included: false }}
          zenbusinessFeature={{ included: false }}
          atlasFeature={{ included: false }}
        />

        {/* CTA Section */}
        <div className="text-center mb-12" data-testid="comparison-cta">
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 mr-4" data-testid="button-get-started">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" data-testid="button-free-consultation">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
