"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Globe, Newspaper, Award } from "lucide-react";

const NEWS_ARTICLES = [
    {
        id: "NEWS-01",
        source: "Prothom Alo",
        title: "US Ambassador announces winner of SelectUSA 2026 Tech Pitch Competition",
        excerpt: "US Ambassador Brent T. Christensen announced PrimeSync Solutions as the winner chosen from among 350 applicants.",
        date: "Jan 30, 2026",
        url: "https://en.prothomalo.com/amp/story/bangladesh/city/qpiheod9yb",
        color: "#f15a22"
    },
    {
        id: "NEWS-02",
        source: "The Business Standard",
        title: "PrimeSync Solutions wins SelectUSA 2026 tech pitch competition",
        excerpt: "Brent T. Christensen announced PrimeSync Solutions as the winner. Selected from among 350 applicants at the EMK Center.",
        date: "Jan 30, 2026",
        url: "https://www.tbsnews.net/economy/corporates/primesync-solutions-wins-selectusa-2026-tech-pitch-competition-1347916",
        color: "#00a1ff"
    },
    {
        id: "NEWS-03",
        source: "Views Bangladesh",
        title: "PrimeSync Solutions wins SelectUSA 2026 Tech Pitch Competition",
        excerpt: "PrimeSync Solutions, a US-based BPO company headquartered in Columbus of Ohio, awarded as the winner.",
        date: "Jan 30, 2026",
        url: "https://viewsbangladesh.com/primesync-solutions-wins-selectusa-2026-tech-pitch-competition/",
        color: "#e61e25"
    },
    {
        id: "NEWS-04",
        source: "Daily Sun",
        title: "Winner of SelectUSA 2026 Tech Pitch Competition announced",
        excerpt: "US Ambassador announces winner of SelectUSA 2026 Tech Pitch Competition featuring Bangladeshi innovation.",
        date: "Jan 30, 2026",
        url: "https://www.daily-sun.com/diplomacy/854803/us-ambassador-announces-winner-of-selectusa-2026-tech-pitch-competition",
        color: "#ed1c24"
    }
];

export function FeaturedIn() {
    return (
        <section className="w-full bg-black py-24 relative overflow-hidden border-t border-white/5">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-primary/40" />
                            <span className="font-mono text-[10px] text-primary tracking-[0.4em] font-bold">Press Archive V2</span>
                            <span className="w-8 h-[1px] bg-primary/40" />
                        </div>
                        <h2 className="font-stint text-4xl md:text-5xl text-gradient tracking-tight leading-tight mb-6">
                            Featured In
                        </h2>
                    </motion.div>

                    {/* Feature Image Banner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full relative group overflow-hidden border border-white/10 rounded-3xl aspect-[16/9] mb-20 shadow-2xl"
                    >
                        <Image
                            src="/images/news/featured-in-v2.jpg"
                            alt="News Feature Recognition"
                            fill
                            className="object-cover object-center scale-[1.05] group-hover:scale-100 transition-all duration-[1.5s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

                        {/* Hover-revealed live status line */}
                        <div className="absolute bottom-6 left-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                            <p className="font-mono text-[10px] text-white/90 tracking-[0.2em] font-bold">
                                <span style={{ color: '#10B981' }}>PrimeSync Solutions</span> wins <span style={{ color: '#8B5CF6' }}>SelectUSA 2026</span> Tech Pitch Competition
                            </p>
                        </div>

                        {/* Tactical Corner Accents */}
                        <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-primary/40" />
                        <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-primary/40" />
                    </motion.div>
                </div>

                {/* News Grid Feed */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {NEWS_ARTICLES.map((article, index) => (
                        <motion.a
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col p-6 glass border border-white/5 hover:border-primary/30 transition-all duration-500 rounded-2xl relative"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-mono text-[9px] text-white/30 tracking-widest">
                                    {article.source}
                                </span>
                                <ArrowUpRight size={12} className="text-white/20 group-hover:text-primary transition-colors" />
                            </div>

                            <h4 className="font-stint text-xl text-white mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-3 h-[5rem]">
                                {article.title}
                            </h4>

                            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                <span className="font-mono text-[9px] text-white/20 tracking-widest">
                                    {article.date}
                                </span>
                                <div
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ backgroundColor: article.color }}
                                />
                            </div>

                            {/* Hover Status Bar */}
                            <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.a>
                    ))}
                </div>

                {/* Bottom Global Status */}
                <div className="mt-16 flex items-center justify-center gap-6 opacity-20">
                    <div className="w-12 h-[1px] bg-white/20" />
                    <div className="flex items-center gap-3">
                        <Globe size={12} />
                        <span className="font-mono text-[9px] tracking-[0.5em]">International Media Validated</span>
                    </div>
                    <div className="w-12 h-[1px] bg-white/20" />
                </div>
            </div>
        </section>
    );
}
