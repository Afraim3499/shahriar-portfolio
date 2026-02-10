"use client";

import { DecisionMarker } from "@/components/ui/DecisionMarker";
import { HorizontalTimeline } from "@/components/ui/HorizontalTimeline";
import { Recommendations } from "@/components/ui/Recommendations";
import { FeaturedIn } from "@/components/ui/FeaturedIn";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { SkillNetwork } from "@/components/ui/SkillNetwork";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Activity, Globe, Cpu } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import React from "react";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-background">

            {/* Hero Section - Premium Portfolio Style */}
            <section className="relative overflow-hidden min-h-[100vh] flex items-center justify-center">
                <HeroBackground />

                <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 text-center">


                    {/* Large Rounded Profile Image - Refined Reveal */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-56 h-56 md:w-64 md:h-64 mx-auto mb-8 group"
                    >
                        <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-secondary shadow-2xl relative">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <Image
                                    src="/images/shahriar-profile.jpg"
                                    alt="Shahriar Kabir"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    priority
                                />
                            </div>
                            <BorderBeam duration={8} size={400} />
                        </div>
                        {/* Interactive Glow */}
                        <div className="absolute inset-0 -z-10 bg-primary/10 blur-[100px] rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    </motion.div>

                    {/* Main Headline - Elegant Two-Line Layout */}
                    <div className="max-w-5xl mx-auto mb-6 px-4">
                        <div className="mb-3">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gradient leading-tight font-stint"
                            >
                                I Turn Messy Processes Into Clean Delivery
                            </motion.h1>
                        </div>

                        <div>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium tracking-tight font-sans"
                            >
                                CX ops & offshore teams that feel <span className="text-white italic">in-house</span> for growth-stage companies
                            </motion.p>
                        </div>
                    </div>

                    {/* Subtitle - Contextual Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1.2 }}
                        className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8 font-light tracking-[0.15em] font-sans"
                    >
                        <span className="text-gradient font-bold">Director of Operations</span> at <span className="text-primary font-bold">PrimeSync AI</span>. <br className="hidden md:block" />
                        Architecting globally distributed teams that deliver AI-enabled customer experience at absolute scale.
                    </motion.p>

                    {/* CTA Buttons - Premium Shimmer */}
                    {/* Hero CTA Group - Dual Engine */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
                    >
                        {/* Primary: The New Authority Path */}
                        <Link
                            href="/dossier"
                            className="font-mono text-[11px] font-bold tracking-widest bg-[#030712] text-[#F9FAFB] border border-white/10 px-10 py-5 hover:bg-white hover:text-black transition-all flex items-center gap-3 hover-glow-white rounded-none relative overflow-hidden group shadow-2xl"
                        >
                            <span className="relative z-10 flex items-center gap-2 uppercase">
                                Check My Work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        {/* Secondary: The Thinking Path */}
                        <Link
                            href="/thinking"
                            className="font-mono text-[11px] font-bold tracking-widest border border-white/20 text-white px-10 py-5 hover:bg-white/5 transition-all flex items-center gap-3 rounded-none group"
                        >
                            READ INSIGHTS
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Key Metrics Strip */}
            <section className="border-y border-foreground/10 bg-secondary/50">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <MetricBox icon={<Users size={20} />} value="200+" label="Team Members Managed" />
                        <MetricBox icon={<Globe size={20} />} value="4" label="Regions Covered" />
                        <MetricBox icon={<Cpu size={20} />} value="15+" label="AI Systems Deployed" />
                        <MetricBox icon={<Activity size={20} />} value="99.2%" label="Uptime Delivered" />
                    </div>
                </div>
            </section>

            {/* Skill Network Section */}
            <section className="border-b border-foreground/10 relative overflow-hidden">
                <div className="absolute inset-0 ambient-emerald pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="flex items-center justify-center mb-8">
                        <h2 className="font-stint text-4xl md:text-5xl text-gradient tracking-tight text-center">Skill Architecture</h2>
                    </div>
                    <SkillNetwork />
                </div>
            </section>

            {/* Featured Writing */}
            <section className="border-b border-foreground/10 relative overflow-hidden">
                <div className="absolute inset-0 ambient-violet pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="flex flex-col items-center mb-20">
                        <h2 className="text-4xl md:text-5xl text-gradient tracking-tight font-stint text-center mb-8 pb-2">Featured Writing</h2>
                        <Link href="/thinking" className="font-mono text-[10px] text-white/30 hover:text-primary transition-colors flex items-center gap-2 tracking-widest">
                            View all <ArrowRight size={12} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <FeaturedCard
                            href="/thinking/mobile-auto-repair-ai"
                            title="Mobile Auto Repair + AI: How to Fix the Hidden Revenue Leak"
                            excerpt="Discover how AI voice agents turn every ring into revenue for mobile service businesses by automating scheduling and lead capture."
                            tag="Automation"
                        />
                        <FeaturedCard
                            href="/thinking/bpo-cx-strategy"
                            title="How BPO and CX Create Winning Strategies"
                            excerpt="A deep dive into building customer experience systems that scale with your business."
                            tag="Operations"
                        />
                    </div>
                </div>
            </section>

            {/* Featured In Section */}
            <FeaturedIn />

            {/* Career Record Section */}
            <HorizontalTimeline />

            {/* Recommendations Section */}
            <Recommendations />

            {/* CTA Section */}
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0 ambient-combined pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl mb-12 pb-2 text-gradient tracking-tight font-stint text-center">Let&apos;s Build Something Together</h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-base font-sans">
                        Whether you&apos;re scaling operations, building distributed teams, or need strategic guidance on AI implementation.
                    </p>
                    <Link
                        href="https://calendar.app.google/EH9rYwo4E5u1HkjR6"
                        target="_blank"
                        className="inline-block font-mono text-xs font-bold tracking-widest bg-primary text-white px-10 py-5 hover:bg-primary-dark transition-all hover-glow-emerald"
                    >
                        Schedule A Conversation
                    </Link>
                </div>
            </section>

            <DecisionMarker />
        </div>
    );
}

// Component: AnimatedCounter
function AnimatedCounter({ value, suffix = "", decimals = 0 }: { value: number, suffix?: string, decimals?: number }) {
    const ref = React.useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-20px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const formatted = useTransform(spring, (latest) => {
        if (decimals > 0) {
            return latest.toFixed(decimals) + suffix;
        }
        return Math.round(latest) + suffix;
    });

    React.useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, value, spring]);

    return <motion.span ref={ref} className="text-gradient font-stint text-4xl md:text-5xl font-bold leading-tight">{formatted}</motion.span>;
}

// Component: MetricBox
function MetricBox({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
    // Parse the value string to separate number and suffix
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');
    const hasDecimals = value.includes('.');

    return (
        <div className="glass p-6 flex flex-col items-center text-center gap-4 premium-hover-subtle group border-t-2 border-transparent hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            <div className="text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300 p-3 bg-primary/5 rounded-full border border-primary/10 group-hover:border-primary/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                {icon}
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <AnimatedCounter
                    value={numericValue}
                    suffix={suffix}
                    decimals={hasDecimals ? 1 : 0}
                />
                <div className="font-mono text-[10px] text-white/40 tracking-[0.2em] mt-2 group-hover:text-white/60 transition-colors">
                    {label}
                </div>
            </div>
        </div>
    );
}

// Component: FeaturedCard
function FeaturedCard({ href, title, excerpt, tag }: { href: string; title: string; excerpt: string; tag: string }) {
    return (
        <Link href={href} className="group block glass p-8 hover:border-primary/50 border border-white/5 transition-all duration-500 premium-hover rounded-3xl">
            <span className="font-mono text-[10px] text-primary tracking-[0.3em] font-bold">{tag}</span>
            <h3 className="font-sans text-xl md:text-2xl font-bold text-gray-100 mt-3 mb-4 group-hover:text-primary transition-colors tracking-tight leading-tight">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light font-sans">{excerpt}</p>
            <span className="inline-flex items-center gap-2 mt-6 font-mono text-[10px] text-white/30 group-hover:text-primary tracking-widest font-bold">
                Read Transcript <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </span>
        </Link>
    );
}

