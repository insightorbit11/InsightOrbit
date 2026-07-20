import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Video, Share2, Linkedin, Megaphone, ArrowRight } from "lucide-react";
import Button from "./Button";
import SEO from "./SEO";

interface MagneticTiltCardProps {
    children: (props: {
        buttonX: MotionValue<number>;
        buttonY: MotionValue<number>;
    }) => ReactNode;
}

const MagneticTiltCard = ({ children }: MagneticTiltCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
        stiffness: 150,
        damping: 18,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
        stiffness: 150,
        damping: 18,
    });

    const buttonX = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
        stiffness: 200,
        damping: 15,
    });
    const buttonY = useSpring(useTransform(y, [-0.5, 0.5], [-10, 10]), {
        stiffness: 200,
        damping: 15,
    });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="bg-linear-to-r from-amber-400/20 to-blue-400/20 border border-amber-400/30 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto shadow-xl backdrop-blur-md"
        >
            {children({ buttonX, buttonY })}
        </motion.div>
    );
};

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

    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        const idx = Number(target.dataset.index);
                        setActiveIndex(idx);
                    }
                });
            },
            {
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        sectionRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

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

                        <div className="w-full mt-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow text-[17px] space-y-6"
                            >
                                <p>
                                    Anyone can prompt an AI to write a caption. Almost no one can tell you why it will land — because that takes understanding people, not just processing patterns.
                                </p>
                                <p>
                                    Insight Activation is where we take what we've learned about your audience — their behaviour, their language, their unspoken reactions — and turn it into content your competitors' AI tools can't replicate.
                                </p>
                                <p>
                                    The limitation isn't the tools; <span className="text-[#a87e3b] font-semibold">it's that empathy can't be reduced to data.</span>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Marquee ticker strip */}
                    <div className="relative overflow-hidden mb-24 py-4 border-y border-white/40">
                        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-(--c3) to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-(--c3) to-transparent z-10 pointer-events-none" />
                        <div className="flex w-max animate-marquee">
                            {[0, 1].map((rep) => (
                                <div key={rep} className="flex items-center shrink-0">
                                    {[
                                        "BEHAVIOUR",
                                        "LANGUAGE",
                                        "UNSPOKEN REACTIONS",
                                        "TRUST",
                                        "CLARITY",
                                        "INTENT",
                                    ].map((word, idx) => (
                                        <span
                                            key={`${rep}-${idx}`}
                                            className="flex items-center shrink-0"
                                        >
                                            <span className="text-xl md:text-3xl font-extrabold uppercase tracking-wide text-[#a87e3b] px-6">
                                                {word}
                                            </span>
                                            <span className="text-xl md:text-3xl text-[#0855b1]/50">
                                                &middot;
                                            </span>
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <style>{`
                            @keyframes marquee-scroll {
                                from { transform: translateX(0); }
                                to { transform: translateX(-50%); }
                            }
                            .animate-marquee {
                                animation: marquee-scroll 28s linear infinite;
                            }
                            @media (prefers-reduced-motion: reduce) {
                                .animate-marquee {
                                    animation: none;
                                }
                            }
                        `}</style>
                    </div>

                    {/* Service Blocks Section — sticky image + scroll-progress rail */}
                    <div className="relative flex gap-8 md:gap-16">
                        {/* Progress rail (desktop only) */}
                        <div className="hidden md:flex flex-col items-center w-8 shrink-0 sticky top-1/2 -translate-y-1/2 self-start h-fit">
                            <div className="relative w-px h-64 bg-white/40 rounded-full overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 w-full bg-[#a87e3b] rounded-full"
                                    animate={{
                                        height: `${(activeIndex / (servicesList.length - 1)) * 100}%`,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                            </div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col justify-between h-64">
                                {servicesList.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300 ${idx <= activeIndex
                                            ? "bg-[#a87e3b] border-[#a87e3b]"
                                            : "bg-transparent border-gray-400/50"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Sticky image column */}
                        <div className="hidden md:block w-1/2 sticky top-32 self-start">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 relative">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeIndex}
                                        src={servicesList[activeIndex].image}
                                        alt={servicesList[activeIndex].title}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="w-full h-full object-cover absolute inset-0"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                                {/* Floating icon badge for the active service */}
                                <motion.div
                                    key={`badge-${activeIndex}`}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute bottom-5 left-5 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center"
                                >
                                    {servicesList[activeIndex].icon}
                                </motion.div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-32 md:gap-48 py-8">
                            {servicesList.map((service, idx) => (
                                <div
                                    key={idx}
                                    ref={(el) => {
                                        sectionRefs.current[idx] = el;
                                    }}
                                    data-index={idx}
                                    className="min-h-[30vh] flex flex-col justify-center"
                                >
                                    {/* Mobile-only image, since the sticky column is desktop-only */}
                                    <div className="md:hidden mb-6 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-white/50 border border-white/60 flex items-center justify-center shrink-0">
                                            {service.icon}
                                        </div>
                                        <div className="h-px flex-1 bg-gradient-to-r from-[#a87e3b]/40 to-transparent" />
                                    </div>

                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-5 tracking-tight leading-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Footer Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-28 md:mt-40 text-center"
                    >
                        <MagneticTiltCard>
                            {({ buttonX, buttonY }) => (
                                <>
                                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight">
                                        Ready to activate your insight?
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                                        Let's work together to turn raw consumer feedback into authentic, high-impact content.
                                    </p>
                                    <div className="flex items-center justify-center">
                                        <motion.div style={{ x: buttonX, y: buttonY }}>
                                            <Button
                                                type="primary"
                                                text="Let's talk"
                                                href="/contact"
                                                backIcon={<ArrowRight className="w-4 h-4" />}
                                            />
                                        </motion.div>
                                    </div>
                                </>
                            )}
                        </MagneticTiltCard>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default InsightActivationServices;