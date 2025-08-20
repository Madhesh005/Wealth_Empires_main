import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import person1 from "@assets/person1.png";
import person2 from "@assets/person2.png";
import person3 from "@assets/person3.png";

const testimonials = [
  {
    id: 1,
    name: "Adam Fuller",
    title: "Co-Founder of Flagaholics",
    company: "Flagaholics",
    quote:
      "doola handled Flagaholics' legal and financial setup so we could focus on growth & delivering a great customer experience.",
    bgColor: "bg-teal-700",
    textColor: "text-white",
    image: person1,
  },
  {
    id: 2,
    name: "Deon Bryan",
    title: "CEO at Viteranz",
    company: "amazon",
    quote:
      "The ease of setup, combined with the resources available through doola, helped me get things done efficiently.",
    bgColor: "bg-[#f3eae1]",
    textColor: "text-white",
    image: person2,
  },
  {
    id: 3,
    name: "Alex Lieberman",
    title: "Founder of storyarb",
    company: "storyarb",
    quote:
      "I thought it was very smooth, it was done within a day and all I hit was like 5 buttons.",
    bgColor: "bg-[#f3eae1]",
    textColor: "text-gray-900",
    image: person1,
  },
];

export default function Testimonials() {
  const [expandedCard, setExpandedCard] = useState(3); // Default expanded card

  return (
    <section className="bg-pink-50 py-20" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 bg-doola-yellow/10 rounded-full text-doola-yellow text-sm font-medium mb-4"
            data-testid="text-founders-count"
          >
            10,000+ Founders
          </div>
          <h2
            className="text-5xl font-bold text-gray-900 leading-tight"
            data-testid="heading-built-for-founders"
          >
            Built for Founders.
            <br />
            <span className="text-doola-yellow">Loved by Founders.</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="testimonials-2024">
          <div className="testimonials-outer flex flex-row gap-4 justify-center items-stretch">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                layout
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={`testimonial-inner rounded-lg cursor-pointer overflow-hidden relative ${testimonial.bgColor} ${testimonial.textColor}`}
                onClick={() => setExpandedCard(testimonial.id)}
                data-testid={`testimonial-${testimonial.id}`}
                style={{
                  flex: expandedCard === testimonial.id ? "0 0 800px" : "",
                  borderRadius: "16px",
                }}
              >
                <AnimatePresence mode="wait">
                  {expandedCard === testimonial.id ? (
                    // Expanded view
                    <motion.div
                      key="expanded"
                      className="flex items-center justify-center h-full w-full p-6 gap-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {/* Image */}
                      <div
                        className="flex-shrink-0 rounded-lg overflow-hidden"
                        style={{
                          width: "380px",
                          height: "460px",
                          backgroundColor:
                            testimonial.id === 3
                              ? "#ffa979"
                              : testimonial.id === 2
                              ? "#dabfa5"
                              : "#00b6bc",
                        }}
                      >
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover object-center rounded-lg"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-white text-lg">No Image</span>
                          </div>
                        )}
                      </div>

                      {/* Text */}
                      <div className="flex flex-col justify-center bg-orange-200 rounded-lg p-8 shadow-lg w-[380px] h-[250px]">
                        <div className="text-4xl text-orange-400 mb-3 leading-none">
                          "
                        </div>
                        <blockquote className="text-lg mb-4 leading-relaxed font-medium text-gray-800">
                          {testimonial.quote}
                        </blockquote>
                        <div>
                          <div className="font-bold text-lg text-gray-900 mb-1">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {testimonial.title.includes("storyarb") ? (
                              <>
                                Founder of{" "}
                                <span className="text-orange-500">storyarb</span>
                              </>
                            ) : (
                              testimonial.title
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    // Collapsed view
                    <motion.div
                      key="collapsed"
                      className="relative w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover object-center rounded-lg"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center rounded-lg"
                          style={{ backgroundColor: "#ffa979" }}
                        >
                          <span className="text-white text-lg">No Image</span>
                        </div>
                      )}

                      {/* Vertical overlay name */}
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex items-end gap-4">
                        <div
                          className="font-semibold text-base text-white drop-shadow-lg"
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-sm text-white opacity-90 drop-shadow-md"
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {testimonial.title
                            .replace("Co-Founder of ", "")
                            .replace("Founder of ", "")
                            .replace("CEO at ", "")}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
