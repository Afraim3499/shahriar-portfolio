"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// --- MISSION DATA (All 6 milestones preserved) ---
const MISSION_DATA = [
    {
        id: 1,
        year: "2016-17",
        role: "Web Dev",
        company: "TechLayer",
        phase: "GENESIS",
        description: "Initial deployment into full-stack architecture. Mastered the core protocols of modern delivery."
    },
    {
        id: 2,
        year: "2018",
        role: "SEO Analyst",
        company: "Bit Mascot",
        phase: "AUDIENCE",
        description: "Optimizing visibility algorithms and architecting frameworks for search dominance."
    },
    {
        id: 3,
        year: "2021",
        role: "Marketing",
        company: "Remote",
        phase: "COMMAND",
        description: "Leading decentralized operations across global zones. Scaling reach and impact."
    },
    {
        id: 4,
        year: "2022-23",
        role: "Ops Spec",
        company: "Radiant",
        phase: "AUDIT",
        description: "Enforcing high-stakes operational compliance and global audit protocols."
    },
    {
        id: 5,
        year: "2023",
        role: "BDM, BPO",
        company: "ATL",
        phase: "SCALING",
        description: "Architecting BPO workflows for massive lead generation and strategic growth."
    },
    {
        id: 6,
        year: "2024-Now",
        role: "Director",
        company: "PrimeSync",
        phase: "APEX",
        description: "Leading global mission units. Orchestrating AI systems and elite talent at scale."
    }
];

// Number of yellow stripes on the road
const STRIPE_COUNT = 15;

export function HorizontalTimeline() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Calculate progress percentage for the road lighting
    const progressPercent = hoveredIndex !== null
        ? ((hoveredIndex + 1) / MISSION_DATA.length) * 100
        : 0;

    // Calculate how many stripes should be lit
    const litStripeCount = hoveredIndex !== null
        ? Math.ceil(((hoveredIndex + 1) / MISSION_DATA.length) * STRIPE_COUNT)
        : 0;

    return (
        <section
            className="w-full bg-[#030712] py-32 relative overflow-hidden"
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="font-stint text-4xl md:text-5xl text-gradient tracking-tight mb-8 pb-2">
                        Strategic Road
                    </h2>
                    <p className="text-white/40 font-mono text-sm tracking-widest">
                        CAREER TRAJECTORY • 2016 → PRESENT
                    </p>
                </div>

                {/* DESKTOP ROADMAP */}
                <div className="hidden lg:block relative">

                    {/* The Road Container */}
                    <div className="relative mx-auto" style={{ height: '500px' }}>

                        {/* Road Surface - More Prominent */}
                        <div className="absolute top-[180px] left-0 right-0 h-20 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden">

                            {/* Progressive Road Glow */}
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary/80 to-accent"
                                initial={{ width: 0 }}
                                animate={{ width: `${progressPercent}%` }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                style={{
                                    boxShadow: hoveredIndex !== null
                                        ? '0 0 40px rgba(16, 185, 129, 0.6), 0 0 80px rgba(139, 92, 246, 0.4)'
                                        : 'none',
                                    opacity: 0.5
                                }}
                            />

                            {/* Yellow Center Dashed Line - Progressive Lighting */}
                            <div className="absolute top-1/2 left-12 right-12 -translate-y-1/2 h-1 flex gap-6 z-10">
                                {Array.from({ length: STRIPE_COUNT }).map((_, i) => {
                                    const isLit = i < litStripeCount;
                                    return (
                                        <motion.div
                                            key={i}
                                            className="flex-1 h-full rounded-sm"
                                            animate={{
                                                backgroundColor: isLit ? '#FACC15' : 'rgba(250, 204, 21, 0.3)',
                                                boxShadow: isLit
                                                    ? '0 0 12px rgba(250, 204, 21, 0.9), 0 0 20px rgba(250, 204, 21, 0.6)'
                                                    : '0 0 0 transparent'
                                            }}
                                            transition={{ duration: 0.2, delay: isLit ? i * 0.03 : 0 }}
                                        />
                                    );
                                })}
                            </div>

                            {/* Road Edge Lines - White */}
                            <div className="absolute top-3 left-6 right-6 h-[3px] bg-white/40 rounded-full z-10" />
                            <div className="absolute bottom-3 left-6 right-6 h-[3px] bg-white/40 rounded-full z-10" />
                        </div>

                        {/* Milestone Cards on Road */}
                        <div className="absolute inset-x-0 top-0 flex justify-between items-start px-4">
                            {MISSION_DATA.map((mission, index) => {
                                const isActive = hoveredIndex !== null && index <= hoveredIndex;
                                const isCurrentHover = hoveredIndex === index;

                                return (
                                    <div
                                        key={mission.id}
                                        className="flex flex-col items-center w-[160px] cursor-pointer py-4 px-2 -mx-2 rounded-xl transition-colors duration-300 hover:bg-white/[0.02]"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                    >
                                        {/* Year Card - Brand Colors */}
                                        <motion.div
                                            className={cn(
                                                "relative w-24 h-24 rounded-2xl cursor-pointer",
                                                "flex items-center justify-center",
                                                "bg-gradient-to-br from-primary to-accent shadow-2xl",
                                                "border-4",
                                                isActive ? "border-white/50" : "border-white/20"
                                            )}
                                            animate={{
                                                y: isCurrentHover ? -12 : isActive ? -4 : 0,
                                                scale: isCurrentHover ? 1.15 : isActive ? 1.05 : 1,
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            style={{
                                                boxShadow: isActive
                                                    ? '0 25px 50px -10px rgba(16, 185, 129, 0.5), 0 0 50px rgba(139, 92, 246, 0.4)'
                                                    : '0 15px 40px -10px rgba(0,0,0,0.6)'
                                            }}
                                        >
                                            <span className={cn(
                                                "font-bold text-base drop-shadow-lg transition-colors",
                                                isActive ? "text-white" : "text-white/80"
                                            )}>
                                                {mission.year}
                                            </span>
                                            {/* Pulse ring on current hover */}
                                            {isCurrentHover && (
                                                <div className="absolute inset-0 rounded-2xl border-2 border-white/70 animate-pulse" />
                                            )}
                                        </motion.div>

                                        {/* Connector Line to Road */}
                                        <motion.div
                                            className="w-[3px] h-16"
                                            animate={{
                                                background: isActive
                                                    ? 'linear-gradient(to bottom, rgba(16,185,129,0.9), rgba(139,92,246,0.5))'
                                                    : 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)'
                                            }}
                                        />

                                        {/* Road Node */}
                                        <motion.div
                                            className={cn(
                                                "w-5 h-5 rounded-full border-3 transition-all duration-300",
                                                isActive
                                                    ? "border-primary bg-primary"
                                                    : "border-white/40 bg-gray-700"
                                            )}
                                            animate={{
                                                scale: isCurrentHover ? 1.6 : isActive ? 1.3 : 1,
                                                boxShadow: isActive
                                                    ? '0 0 25px rgba(16, 185, 129, 0.9)'
                                                    : '0 0 0 transparent'
                                            }}
                                        />

                                        {/* Content Below Road - More Spacing */}
                                        <motion.div
                                            className="mt-24 text-center max-w-[150px]"
                                            animate={{
                                                opacity: isActive ? 1 : 0.35,
                                                y: isActive ? 0 : 15
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h3 className={cn(
                                                "font-stint text-xl font-bold mb-2 transition-colors duration-300",
                                                isActive ? "text-white" : "text-white/50"
                                            )}>
                                                {mission.role}
                                            </h3>
                                            <p
                                                className="text-base font-mono tracking-wider mb-3"
                                                style={{ color: 'var(--accent)' }}
                                            >
                                                {mission.company}
                                            </p>
                                            <motion.p
                                                className="text-sm text-white/60 leading-relaxed"
                                                animate={{
                                                    opacity: isActive ? 1 : 0,
                                                    height: isActive ? 'auto' : 0
                                                }}
                                            >
                                                {mission.description}
                                            </motion.p>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* MOBILE/TABLET VERTICAL LAYOUT */}
                <div className="lg:hidden space-y-0">
                    {MISSION_DATA.map((mission, index) => (
                        <div key={mission.id} className="flex gap-6">
                            {/* Vertical Road */}
                            <div className="flex flex-col items-center">
                                {/* Card */}
                                <div
                                    className={cn(
                                        "w-16 h-16 rounded-xl flex items-center justify-center",
                                        "bg-gradient-to-br from-primary to-accent shadow-lg",
                                        "border-2 border-white/20"
                                    )}
                                    style={{
                                        boxShadow: '0 8px 20px -5px rgba(16, 185, 129, 0.3)'
                                    }}
                                >
                                    <span className="text-white font-bold text-xs drop-shadow-md">
                                        {mission.year}
                                    </span>
                                </div>
                                {/* Connector */}
                                {index < MISSION_DATA.length - 1 && (
                                    <div className="w-[3px] h-20 bg-gradient-to-b from-primary/40 via-accent/30 to-primary/40 my-2" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-2 pb-8">
                                <span className="font-mono text-[10px] tracking-widest text-primary/60 block mb-1">
                                    #{mission.phase}
                                </span>
                                <h3
                                    className="font-stint text-xl font-bold mb-1"
                                    style={{ color: 'var(--accent)' }}
                                >
                                    {mission.role}
                                </h3>
                                <p
                                    className="text-base font-mono font-semibold mb-2"
                                    style={{ color: 'var(--accent)' }}
                                >
                                    {mission.company}
                                </p>
                                <p className="text-sm text-white/60 leading-relaxed">
                                    {mission.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
