import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../components/Button";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const faqs = [
    {
      q: "How does InsightOrbit ensure data quality and accuracy?",
      a: "At InsightOrbit, data quality starts at the question level. We employ psychology-backed questionnaire design, strong sampling logic, and multilayer validation checks to ensure insights are reliable, unbiased, and decision-ready.",
    },
    {
      q: "How does InsightOrbit build and manage dedicated research panels or communities?",
      a: "InsightOrbit builds dedicated research panels and communities where your target audience can share opinions, ideas, and experiences in a structured digital environment, enabling deeper and continuous insights. We follow a simple philosophy: genuine panelists lead to quality responses, as authentic input from real participants is essential for generating reliable data and actionable insights. Through rigorous screening and high-quality recruitment sources, we ensure diverse and credible panel representation across multiple demographic and population segments. We also foster a rewarding panel experience through engaging interactions, innovative incentives, and meaningful participation opportunities.",
    },
    {
      q: "What is the minimum sample size required to conduct a reliable study?",
      a: "Sample size varies based on your goals, target audience, and market scope. We recommend statistically valid sample sizes that strike a balance between accuracy and efficiency, ensuring insights are meaningful without collecting excess data.",
    },
    {
      q: "What research practices and methodologies do you follow?",
      a: "We follow European Society for Opinion & Market Research (ESOMAR)- compliant standards, along with principles of behavioural science. Our methodologies integrate quantitative surveys, qualitative insights, sentiment analysis, and pattern recognition to capture both data and human context.",
    },
    {
      q: "Is personal and respondent data protected and confidential?",
      a: "Yes. Respondent privacy and data protection are fundamental to our research practices. All participant information is anonymised and securely stored. InsightOrbit never sells, shares, or discloses respondent data, ensuring strict confidentiality and ethical handling at every stage of the research process.",
    },
    {
      q: "Do your surveys comply with the data protection standards?",
      a: "Yes, our practices for research are in line with laws related to data protection and guidelines on ethical research. Consent, transparency, and respondent dignity are cornerstones of every InsightOrbit study",
    },
    {
      q: "How long does the average research or survey project take?",
      a: "Project timelines vary by scope and complexity. Most surveys are completed within 4–6 weeks, including design, data collection, analysis report, and strategic recommendations.",
    },
    {
      q: "How long does it take for a respondent to complete a survey?",
      a: "Attention and time are respected with our surveys. Most questionnaires take 5–10 minutes to avoid respondent fatigue, making it encouraging while capturing depth and clarity.",
    },
    {
      q: "Why do people participate in an InsightOrbit survey?",
      a: "We design surveys that are engaging, respectful of respondents’ time, and meaningful in purpose. Participants feel valued because their opinions directly contribute to shaping better products, services, and experiences for the wider community.",
    },
    {
      q: "How does InsightOrbit address the cultural and linguistic diversity of India?",
      a: "We create questionnaires that are easy to understand and culturally aware. Our process takes into account India's diverse behaviours. This way, we ensure that the insights we gather are relevant to local contexts while also being useful across the country.",
    },
    {
      q: "In what ways does InsightOrbit differ from other market research companies?",
      a: "Traditional firms deliver data. InsightOrbit delivers clarity. We are not just a survey company. We are a psychological market readiness engine. We help founders, brands, and enterprises: Launch new products, validate market fit, understand behavioural triggers and identify early adopters.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "InsightOrbit",
    description:
      "Transform data into human truths through behavioral psychology and advanced research design",
    url: "https://insightorbit.org",
    priceRange: "$$$",
    areaServed: "Worldwide",
    serviceType: [
      "Market Research",
      "Consumer Insights",
      "Data Analytics",
      "Survey Design",
    ],
  };

  return (
    <>
      <SEO
        title="Insight Elevated. Emotions Understood."
        description="We don't just collect data—we uncover human truths. By blending behavioral psychology with advanced research design, we transform raw responses into strategic clarity."
        keywords="market research, consumer insights, behavioral psychology, data analytics, survey design, business intelligence, growth strategy"
        canonical="/"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-linear-to-br from-(--c3) via-(--c4) to-(--c3)">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute top-20 inset-0 opacity-80 flex items-center justify-center overflow-hidden">
            <video
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            ></video>
          </div>
          <div className="absolute top-20 inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/20 z-1" />
          <div className="relative z-10 w-full max-w-7xl mx-auto md:px-8 px-5 text-left mt-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-(--c1)/10 border border-(--c1)/30 rounded-full px-6 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-white" />
                {/* <span className="text-(--c1) text-sm font-medium">
                  Where Data Meets Human Truth
                </span> */}
                <span className="text-white text-sm font-medium">
                  We are a psychological market readiness engine
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                {/* <span className="bg-linear-to-r capitalize from-(--c1) via-blue-600 to-(--c1) bg-clip-text text-transparent flex flex-nowrap items-center justify-center text-nowrap">
                  Insights Elevated.
                </span>
                <span className="bg-linear-to-r capitalize from-(--c1) via-blue-600 to-(--c1) bg-clip-text text-transparent flex flex-nowrap items-center justify-center text-nowrap">
                  Emotions understood.
                </span> */}
                <span className="capitalize text-white flex flex-nowrap items-center justify-start text-nowrap">
                  Insights Elevated.
                </span>
                <span className="capitalize text-white flex flex-nowrap items-center justify-start text-nowrap">
                  Emotions understood.
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-12 max-w-3xl leading-relaxed font-semibold">
                Where human truth becomes strategy. We uncover the subtle
                emotions, unspoken expectations, and shifting behaviors that
                drive success—translating them into strategic clarity for
                leaders who shape tomorrow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-4">
                <Button
                  text="Start Your Journey"
                  type="primary"
                  href="#reach-out"
                  backIcon={<ArrowRight className="w-4 h-4" />}
                />
                {/* <Button
                  text="Explore Services"
                  type="secondary"
                  href="/services"
                /> */}
                <Link
                  to="/services"
                  target="_blank"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-(--c1) text-gray-200 rounded-full font-semibold cursor-pointer"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-(--c1)" />
          </motion.div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-700 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Everything you need to know about working with us
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-(--c5) backdrop-blur-md border border-(--c1)/10 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActiveFaq(Number(activeFaq) === idx ? null : idx)
                    }
                    className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-gray-600 font-medium pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-(--c1) transition-transform shrink-0 ${
                        Number(activeFaq) === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {Number(activeFaq) === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-500">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4" id="reach-out">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-linear-to-r from-amber-400/20 to-blue-400/20 border border-amber-400/30 rounded-3xl p-12"
            >
              <h2 className="text-4xl font-bold capitalize text-white mb-4">
                Ready to hear the unspoken?
              </h2>
              <div className="flex items-center justify-center">
                <Button type="primary" href="/contact" text="Reach Out" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
