import { motion } from "framer-motion";
import { Video, Share2, Linkedin, Megaphone, ArrowRight } from "lucide-react";
import Button from "./Button";
import SEO from "./SEO";

const InsightActivationServices = () => {
    const servicesList = [
        {
            title: "COINSIGHT-LED VIDEO CONTENT",
            description: "Both short-form and long-form videos that convey trust, clarity, and brand intent are generated based on customer insights.",
            image: "/activation-video.jpg",
            icon: <Video className="w-6 h-6 text-[#a87e3b]" />,

        },
        {
            title: "SOCIAL MEDIA MANAGEMENT & STRATEGY",
            description: "Facebook & Instagram presence rely on actual audience behaviour rather than speculation - imagery that aligns with what consumers genuinely react to.",
            image: "/activation-social.jpg",
            icon: <Share2 className="w-6 h-6 text-[#a87e3b]" />,

        },
        {
            title: "THOUGHT LEADERSHIP ON LINKEDIN",
            description: "Using data-driven narratives and research-led posts to position founders and brands as knowledge-driven leaders.",
            image: "/activation-linkedin.jpg",
            icon: <Linkedin className="w-6 h-6 text-[#a87e3b]" />,

        },
        {
            title: "DIRECTIONS OF THE CAMPAIGN AND MESSAGE",
            description: "We convert survey results into communication frameworks, tone of voice, and content themes for various platforms.",
            image: "/activation-campaign.jpg",
            icon: <Megaphone className="w-6 h-6 text-[#a87e3b]" />,

        }
    ];

    return (
        <>
            <SEO
                title="Insight Activation Services"
                description="We take customer insights about your audience—their behaviour, language, and unspoken reactions—and turn them into high-converting video, social, and LinkedIn thought leadership content."
                keywords="insight activation, market research content, linkedin thought leadership, social media strategy, video content marketing"
                canonical="/insight-activation-services"
            />
            <div className="min-h-screen bg-linear-to-br from-(--c3) via-(--c4) to-(--c3) pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-24"
                    >
                        <div className="inline-flex items-center space-x-2 bg-white/40 border border-white/50 rounded-full px-5 py-2 mb-6 shadow-sm">
                            <span className="text-[#0855b1] text-xs md:text-sm font-semibold uppercase tracking-wider">
                                Insight Activation Services
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 tracking-tight leading-tight">
                            Why <span className="text-[#a87e3b]">Activation</span>, Not Automation
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto mt-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                                    Anyone can prompt an AI to write a caption. Almost no one can tell you why it will land — because that takes understanding people, not just processing patterns.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                                    Insight Activation is where we take what we've learned about your audience — their behaviour, their language, their unspoken reactions — and turn it into content your competitors' AI tools can't replicate. Not because the tools are bad. Because empathy isn't a dataset.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Service Blocks Section */}
                    <div className="space-y-24 md:space-y-36">
                        {servicesList.map((service, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7 }}
                                    className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        } gap-12 md:gap-16 items-center`}
                                >
                                    {/* Image container */}
                                    <div className="w-full md:w-1/2">
                                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 relative group">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-5 tracking-tight leading-tight">
                                            {service.title}
                                        </h2>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA Footer Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-28 md:mt-40 text-center"
                    >
                        <div className="bg-linear-to-r from-amber-400/20 to-blue-400/20 border border-amber-400/30 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto shadow-xl backdrop-blur-md">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight">
                                Ready to activate your insight?
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                                Let's work together to turn raw consumer feedback into authentic, high-impact content.
                            </p>
                            <div className="flex items-center justify-center">
                                <Button
                                    type="primary"
                                    text="Let's talk"
                                    href="/contact"
                                    backIcon={<ArrowRight className="w-4 h-4" />}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default InsightActivationServices;