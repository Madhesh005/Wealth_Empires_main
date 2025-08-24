import { useState, useEffect, useRef } from "react";
import {
    ArrowRight,
    Check,
    Clock,
    CheckCircle,
    Building,
    Hash,
    AtSign,
    RotateCcw,
    FileText,
    Star,
    Rocket,
    Users,
    Edit,
    X,
    Percent,
} from "lucide-react";
import {
    ChevronDown,
    Mail,
    Video,
    User,
    Calendar,
    Layers3,
    FileCheck2,
    Upload,
    CheckCircle2,
    Sparkles,
    BarChart3,
    ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import FAQ from "@/components/faq";
import Testimonials from "@/components/testimonials";
import Resources from "@/components/resources";
import Footermain from "@/components/footer-main";
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
export default function Incorporation() {
    // Business type state
    const [activeBusinessType, setActiveBusinessType] = useState<
        "LLC" | "C-Corp" | "S-Corp"
    >("LLC");

    // Process flow state
    const [activeStep, setActiveStep] = useState(-1);
    const sectionRef = useRef<HTMLDivElement>(null);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Process flow data
    const steps = [
        {
            title: "Submit Your Information Through Our User-Friendly Dashboard",
            badge: "Step 1",
            details: {
                title:
                    "To kick off the process, you'll need to provide some basic information about your future business.",
                items: [
                    {
                        title: "Company Information",
                        subtitle:
                            "(Preferred Name, Entity Type, State, and a Few Other Basics)",
                    },
                    {
                        title: "Members Information",
                        subtitle:
                            "(Legal Name, Address, Ownership, and a Few Additional Details)",
                    },
                ],
                duration: "15 minutes",
            },
        },
        {
            title: "Start Your U.S. Company in Any of The 50 States",
            badge: "Step 2",
            details: {
                title:
                    "We help you set up everything you need to start your business in any state.",
                items: [
                    {
                        title: "Company Formation",
                        subtitle: "In Any U.S. State",
                    },
                    {
                        title: "Operating Agreement & Articles of Organization",
                        subtitle: "",
                    },
                    {
                        title: "Registered Agent Service",
                        subtitle: "For Secure Document Handling",
                    },
                ],
                duration: "1 week (on average)",
            },
        },
        {
            title: "Secure Your Business Documentation",
            badge: "Step 3",
            details: {
                title:
                    "We secure your Business Documents needed for opening a business bank account, hiring employees, and filing taxes.",
                items: [
                    {
                        title: "Essential Business Documents",
                        subtitle: "",
                    },
                ],
                duration: "1 – 2 business days (US residents)",
                duration2: "4–8 weeks (on average) (non-US residents)",
            },
        },
        {
            title: "Set Up Your U.S. Bank Account",
            badge: "Step 4",
            details: {
                title:
                    "Once you get your business documents, you can apply for a U.S. bank account through our partner portal",
                items: [
                    {
                        title: "Business Documents Required",
                        subtitle: "",
                    },
                    {
                        title: "Passport Required",
                        subtitle: "(for International Clients)",
                    },
                ],
                duration: "3 – 5 business days",
            },
        },
        {
            title: "Run & Grow Your Business",
            badge: "Step 5",
            details: {
                title:
                    "Your business is fully set up and compliant, so you're ready to dive into your work with confidence.",
                items: [
                    {
                        title: "Additional Services",
                        subtitle:
                            "Keep your company on track with our Bookkeeping and Tax services.",
                    },
                    {
                        title: "Stay Compliant",
                        subtitle:
                            "For full compliance support, consider starting with Total Compliance.",
                    },
                ],
                hasButton: true,
            },
        },
    ];

    // Services data
    const services = [
        {
            icon: <Building className="h-6 w-6" />,
            title: "Start Your U.S. Business",
            description:
                "We help you start your business in the United States, ensuring compliance from day one.",
            link: "Learn More",
        },
        {
            icon: <Hash className="h-6 w-6" />,
            title: "Business Documentation",
            description:
                "We help you get essential documents for banking, taxes, and e-commerce, including an operating agreement and articles of organization.",
            link: "Learn More",
        },
        {
            icon: <AtSign className="h-6 w-6" />,
            title: "Registered Agent Service",
            description:
                "We provide a trusted Registered Agent to receive important government documents on your behalf, keeping your business compliant.",
            link: "Learn More",
        },
        {
            icon: <RotateCcw className="h-6 w-6" />,
            title: "Sales Tax & Reseller Certificate",
            description:
                "Setup your business for sales tax and get a reseller certificate, ensuring compliance while unlocking tax-exempt purchasing for your business.",
            link: "Learn More",
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Dedicated Bookkeeping",
            description:
                "We manage your books while our platform syncs with your bank accounts and Stripe, tracking and categorizing every transaction.",
            link: "Learn More",
        },
        {
            icon: <FileText className="h-6 w-6" />,
            title: "Business Taxes",
            description:
                "We handle your annual tax paperwork with our in-house tax and CPA teams to maintain good standings and avoid hefty penalties.",
            link: "Learn More",
        },
    ];

    // Business types data
    const businessTypes = {
        LLC: {
            title: "Limited Liability Companies (LLC)",
            subtitle: null as string | null,
            description:
                "A Limited Liability Company (LLC) is a flexible business structure in the U.S. that offers personal liability protection and can have one or multiple owners (called members). It's popular among small business owners and entrepreneurs for its simplicity and tax flexibility.",
            image:
                "https://doolastaging2.wpenginepowered.com/wp-content/uploads/2024/11/llcc-1.jpg",
            overlayText: true,
            pros: [
                "Limited liability protection for owners",
                "Simple management structure and easy to operate",
                "Unlimited owners (U.S. and international)",
            ],
            cons: ["LLCs cannot issue stock", "Ownership represented by members"],
        },
        "C-Corp": {
            title: "C-Corporation (C-Corp)",
            subtitle: null as string | null,
            description:
                "A C-Corporation (C-Corp) is a type of business entity that is legally separate from its owners, providing strong liability protection. It's the default corporation type in the U.S. and is often chosen by businesses that plan to grow and attract investors.",
            image:
                "https://doolastaging2.wpenginepowered.com/wp-content/uploads/2024/11/sscorp.jpg",
            overlayText: false,
            pros: [
                "Limited liability protection for owners",
                "Ability to raise capital by issuing stock",
                "Ownership represented by shareholders",
            ],
            cons: ["Management structure with more operating requirements"],
        },
        "S-Corp": {
            title: "S-Corporation (S-Corp)",
            subtitle: "Only U.S. citizens or residents can be shareholders.",
            description:
                "An S-Corporation (S-Corp) is a business structure that offers limited liability like a corporation but with the tax benefits of a pass-through entity. Profits and losses pass directly to the owners' personal income, avoiding double taxation.",
            image:
                "https://doolastaging2.wpenginepowered.com/wp-content/uploads/2024/11/ccorp-3.jpg",
            overlayText: false,
            pros: [
                "Limited liability protection for owners",
                "Pass-through taxation",
                "Ability to raise capital by issuing stock",
            ],
            cons: [
                "Only U.S. citizens or residents can be shareholders",
                "Limited to 100 shareholders or fewer",
            ],
        },
    } as const;

    type BusinessTypeKey = keyof typeof businessTypes;

    // Blog articles data
    const articles = [
        {
            title: "How To Open a US Business Bank Account",
            description:
                "Opening a business bank account is essential. Discover how to do this with this guide (that also covers international founders).",
            image:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
            alt: "How To Open a US Business Bank Account",
        },
        {
            title:
                "How to Open an LLC for Non US Residents: 8 Simple Steps to Get Started",
            description:
                "We've personally helped hundreds of founders from around the world launch, maintain and grow US LLCs. Here's a list of their most common questions....",
            image:
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
            alt: "How to Open an LLC for Non US Residents: 8 Simple Steps to Get Started",
        },
        {
            title:
                "How to Create a US Stripe Account – International Founder Guide",
            description:
                "Trying to create a US Stripe Account as an international founder? Discover your options and streamline the process with doola — your trusted partner in....",
            image:
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
            alt: "How to Create a US Stripe Account – International Founder Guide",
        },
    ];

    // Features data (currently unused on page but kept for future use)
    const features = [
        {
            icon: <Star className="h-6 w-6 text-gray-700" />,
            title: "Smart Sales Analytics",
            description:
                "Know what's selling, what's not, and how to boost your revenue.",
            link: "Analyze Your Sales",
            bgColor: "bg-pink-100",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
            alt: "Sales Analytics Dashboard",
        },
        {
            icon: <Clock className="h-6 w-6 text-gray-700" />,
            title: "Seamless Bookkeeping",
            description:
                "No spreadsheets, no hassle. Just real-time financial insights.",
            link: "Track Your Books",
            bgColor: "bg-blue-100",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
            alt: "Revenue Dashboard",
        },
        {
            icon: <Percent className="h-6 w-6 text-gray-700" />,
            title: "Stress-Free Taxes",
            description:
                "Stay compliant, save time, and never stress about tax season again.",
            link: "File Your Taxes",
            bgColor: "bg-green-100",
            image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
            alt: "Tax Filings Dashboard",
        },
    ];

    // Process flow scroll animation
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const sectionTop = sectionRef.current.offsetTop;

            // Only start activating steps when user scrolls to the section
            if (scrollY + windowHeight < sectionTop + 200) {
                setActiveStep(-1);
                return;
            }

            // Calculate which step should be active based on scroll position
            let newActiveStep = -1;
            stepRefs.current.forEach((stepRef, index) => {
                if (stepRef) {
                    const stepTop = stepRef.offsetTop;
                    const stepMiddle = stepTop + stepRef.offsetHeight / 2;

                    if (scrollY + windowHeight / 2 >= stepMiddle) {
                        newActiveStep = index;
                    }
                }
            });

            setActiveStep(newActiveStep);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Business type switch function
    const switchBusinessType = (type: BusinessTypeKey) => {
        setActiveBusinessType(type);
    };

    // YouTube embed component (optional)
    const YouTubeEmbed = ({
        videoId,
        title,
        className = "",
    }: {
        videoId: string;
        title: string;
        className?: string;
    }) => {
        return (
            <div
                className={`aspect-video rounded-xl overflow-hidden shadow-2xl ${className}`}
                data-testid="youtube-embed"
            >
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0`}
                    title={title}
                    className="w-full h-full"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-testid="youtube-iframe"
                />
            </div>
        );
    };

    const progressHeight =
        activeStep >= 0
            ? `${Math.min(((activeStep + 1) / steps.length) * 100, 100)}%`
            : "0%";

    const activeType = activeBusinessType as BusinessTypeKey;

    return (
        <div className="font-sans antialiased bg-white text-gray-900">
            {/* Header */}
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

            {/* Services Section */}
            <section
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                data-testid="services-section"
            >
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        data-testid="services-headline"
                    >
                        Start Smart. Stay Compliant.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white hover:bg-doola-yellow/60 rounded-2xl p-8 border border-gray-100 transition-all duration-300 cursor-pointer"
                            data-testid={`service-card-${index}`}
                        >
                            <div className="space-y-4">
                                <div
                                    className="text-gray-600 group-hover:text-gray-800"
                                    data-testid={`service-icon-${index}`}
                                >
                                    {service.icon}
                                </div>

                                <h3
                                    className="text-xl font-semibold text-gray-900"
                                    data-testid={`service-title-${index}`}
                                >
                                    {service.title}
                                </h3>

                                <p
                                    className="text-gray-600 text-sm leading-relaxed"
                                    data-testid={`service-description-${index}`}
                                >
                                    {service.description}
                                </p>

                                <div className="pt-2">
                                    <button
                                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:text-blue-700"
                                        data-testid={`service-link-${index}`}
                                    >
                                        {service.link}
                                        <ArrowRight className="ml-1 h-3 w-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Flow Section */}
            <section
                ref={sectionRef}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                data-testid="process-flow-section"
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
                        data-testid="process-headline"
                    >
                        Launch in No Time.
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-lg"
                            data-testid="button-start-business"
                        >
                            Start Your Business <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="secondary"
                            className="px-8 py-3 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors font-medium text-lg"
                            data-testid="button-free-consultation"
                        >
                            Free Consultation
                        </Button>
                    </div>
                </div>

                {/* Process Flow */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200">
                        <div
                            className="w-full bg-doola-yellow transition-all duration-500 ease-out"
                            style={{ height: progressHeight }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                ref={(el) => (stepRefs.current[index] = el)}
                                className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                    }`}
                                data-testid={`process-step-${index}`}
                            >
                                {/* Step Content */}
                                <div
                                    className={`w-5/12 ${index % 2 === 0 ? "text-right pr-20" : "text-left pl-20"
                                        }`}
                                >
                                    <div
                                        className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${activeStep >= index
                                            ? "bg-doola-yellow text-gray-900"
                                            : "bg-gray-100 text-gray-600"
                                            }`}
                                        data-testid={`step-badge-${index}`}
                                    >
                                        {step.badge}
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-900 leading-tight"
                                        data-testid={`step-title-${index}`}
                                    >
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Timeline Shape */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-6 border-4 border-white z-10">
                                    <div
                                        className={`w-full h-full transition-all duration-500 ${activeStep >= index
                                            ? "bg-doola-yellow rounded-full"
                                            : "bg-white border-2 border-gray-300 rounded-sm"
                                            }`}
                                        data-testid={`step-shape-${index}`}
                                    />
                                </div>

                                {/* Step Details */}
                                <div
                                    className={`w-5/12 ${index % 2 === 0 ? "pl-20" : "pr-20"
                                        }`}
                                >
                                    <div
                                        className="bg-doola-yellow/20 rounded-2xl p-8"
                                        data-testid={`step-details-${index}`}
                                    >
                                        <p className="text-gray-700 mb-6 leading-relaxed">
                                            {step.details.title}
                                        </p>

                                        <div className="space-y-4 mb-6">
                                            {step.details.items.map((item: any, itemIndex: number) => (
                                                <div key={itemIndex} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-medium text-gray-900">{item.title}</p>
                                                        {item.subtitle && (
                                                            <p className="text-sm text-gray-600 mt-1">
                                                                {item.subtitle}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {step.details.duration && (
                                            <div className="flex items-center space-x-2 text-gray-600">
                                                <Clock className="h-4 w-4" />
                                                <span className="text-sm font-medium">
                                                    {step.details.duration}
                                                </span>
                                            </div>
                                        )}

                                        {step.details.duration2 && (
                                            <div className="flex items-center space-x-2 text-gray-600 mt-2">
                                                <Clock className="h-4 w-4" />
                                                <span className="text-sm font-medium">
                                                    {step.details.duration2}
                                                </span>
                                            </div>
                                        )}

                                        {step.details.hasButton && (
                                            <div className="mt-6">
                                                <Button
                                                    className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
                                                    data-testid="button-start-your-business-final"
                                                >
                                                    Start Your Business
                                                    <ArrowRight className="ml-2 h-5 w-5" />
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Type Section */}
            <section
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                data-testid="business-type-section"
            >
                {/* Header */}
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                        data-testid="business-type-headline"
                    >
                        LLC or C-Corp?
                        <br />
                        We'll Help You Decide.
                    </h2>

                    <button
                        className="flex items-center mx-auto text-blue-600 hover:text-blue-700 font-medium"
                        data-testid="take-quiz-link"
                    >
                        Take our Quiz <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-gray-50 rounded-lg p-1" data-testid="business-type-tabs">
                        <button
                            onClick={() => switchBusinessType("LLC")}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all ${activeBusinessType === "LLC"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                            data-testid="tab-llc"
                        >
                            <Users className="h-4 w-4" />
                            <span>LLC</span>
                        </button>
                        <button
                            onClick={() => switchBusinessType("C-Corp")}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all ${activeBusinessType === "C-Corp"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                            data-testid="tab-c-corp"
                        >
                            <Building className="h-4 w-4" />
                            <span>C-Corp</span>
                        </button>
                        <button
                            onClick={() => switchBusinessType("S-Corp")}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all ${activeBusinessType === "S-Corp"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                            data-testid="tab-s-corp"
                        >
                            <Edit className="h-4 w-4" />
                            <span>S-Corp</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Image */}
                    <div className="relative">
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-900 to-orange-800"
                            style={{ width: "542px", height: "492px" }}
                            data-testid="business-type-image"
                        >
                            <img
                                src={businessTypes[activeType].image}
                                alt="Business owner"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            {businessTypes[activeType].overlayText && (
                                <div className="absolute bottom-6 left-6" data-testid="image-overlay-text">
                                    <div className="bg-black/70 rounded-lg p-4 text-white backdrop-blur-sm">
                                        <p className="text-lg leading-relaxed">
                                            <span className="font-semibold">Siddharth</span> is an
                                            <br />
                                            <span className="font-semibold">Amazon Seller</span> who
                                            <br />
                                            started a <span className="font-semibold text-doola-yellow">US LLC</span>
                                            <br />
                                            from <span className="font-semibold">India</span>.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Business Type Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900" data-testid="business-type-title">
                            {businessTypes[activeType].title}
                        </h3>

                        {businessTypes[activeType].subtitle && (
                            <p className="text-gray-700 font-medium text-lg" data-testid="business-type-subtitle">
                                {businessTypes[activeType].subtitle}
                            </p>
                        )}

                        <p className="text-gray-600 leading-relaxed" data-testid="business-type-description">
                            {businessTypes[activeType].description}
                        </p>

                        {/* Pros */}
                        <div className="space-y-3">
                            {businessTypes[activeType].pros.map((pro, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700" data-testid={`pro-${index}`}>
                                        {pro}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Cons */}
                        <div className="space-y-3">
                            {businessTypes[activeType].cons.map((con, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700" data-testid={`con-${index}`}>
                                        {con}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
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
                    <h3 className="text-xl font-bold text-gray-900">Starter</h3>
                  </div>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    Dedicated Human Bookkeeper + Bookkeeping Software + Business Analytics Software + State & IRS Tax Filings + CPA Consultation.
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="rounded-2xl bg-gray-50 px-6 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">$297</span>
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

            {/* Blog Section */}
            <section
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                data-testid="blog-section"
            >
                {/* Header */}
                <Resources />
            </section>
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

            {/* Testimonials Section */}
            <Testimonials />

            {/* FAQ Section */}
            <FAQ />
            <FinalCTA />
            <Footermain />
        </div>
    );
}
