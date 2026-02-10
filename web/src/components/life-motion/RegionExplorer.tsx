"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const regions = [
    {
        id: "sri-lanka",
        name: "01. Sri Lanka",
        title: "Layers of Stillness",
        subtitle: "Sigiriya · Nuwara Eliya · Ella · Galle",
        description: "Some places don’t announce themselves. They unfold slowly. In Sri Lanka, the rhythm shifts as you move through elevation and coastline. Mornings in Nuwara Eliya arrive wrapped in mist, shaped by tea fields and quiet routines. In Ella, life feels suspended between hills—days marked by walking paths and long pauses.",
        highlight: "Sri Lanka reinforces a principle I carry into Process Fix: operational excellence isn’t about speed alone — it’s about alignment.",
        quote: "Sigiriya rises with intention. The Lion Rock isn’t just a monument—it’s a reminder that even ancient ambition had to work with gravity, stone, and climate.",
        type: "cards",
        items: [
            { id: "01.", content: "Highland routines built on alignment and environment" },
            { id: "02.", content: "Coastal rhythms where coastal systems meet history" }
        ]
    },
    {
        id: "indonesia",
        name: "02. Indonesia",
        title: "Decentralized by Design",
        subtitle: "Nusa Lembongan · Penida · Gili Air",
        description: "Indonesia doesn’t operate as one continuous flow. It works in nodes. Each island feels self-contained, tuned to its own inputs and limits. In Nusa Ceningan and Lembongan, days revolve around tides, foot traffic, and timing boats just right. Nothing is centralized, yet everything functions.",
        highlight: "Strong operations don’t rely on one massive control center. They’re modular. Decentralized. Designed to perform independently while staying aligned.",
        quote: "Nusa Penida makes you respect sequencing: planning isn't optional; it's the difference between momentum and fatigue.",
        type: "cards",
        items: [
            { id: "01.", content: "Modular island ecosystems performing independently" },
            { id: "02.", content: "Gili Air: Stripping back complexity for consistency" }
        ]
    },
    {
        id: "nepal",
        name: "03. Nepal",
        title: "Built on Elevation",
        subtitle: "Kathmandu · Pokhara · Mardi Himal",
        description: "Nepal doesn’t ease you in. It asks something from you immediately. Kathmandu is dense with motion — layered streets, overlapping sounds, and life compressed into corridors. Pokhara changes the tempo, creating space to think where balance becomes visible.",
        highlight: "High performance isn’t dramatic. It’s cumulative. Clear inputs. Measured steps. Respect for constraints.",
        quote: "Mardi Himal Base Camp: You learn quickly that progress in altitude mirrors progress in execution: pacing, energy, and sequencing matter.",
        type: "gallery",
        items: [
            "Kathmandu: Navigating complexity instinctively",
            "Pokhara: Balance between movement and pause",
            "Mardi Himal: Reaching base camp through process"
        ]
    },
    {
        id: "singapore",
        name: "04. Singapore",
        title: "Precision at Scale",
        subtitle: "Engineered Discipline · Benchmark Logic",
        description: "Singapore feels engineered before it feels inhabited. Movement here is intentional. Streets are clean not by chance, transport runs on rhythm rather than hope, and space is treated as a scarce asset. Systems don’t rely on reminders — they rely on design.",
        highlight: "This is operational excellence made visible: define the process, remove variance, design for scale, and let systems carry the load.",
        quote: "What’s striking isn’t the technology. It’s the discipline. Singapore shows how clarity reduces friction. Excellence is quiet, repeatable, and consistent.",
        type: "cards",
        items: [
            { id: "01.", content: "Defined outcomes through standardized inputs" },
            { id: "02.", content: "Predictability built into the infrastructure design" }
        ]
    },
    {
        id: "bangladesh",
        name: "05. Bangladesh",
        title: "Resilient by Nature",
        subtitle: "Bandarban · Sylhet · Sundarbans",
        description: "Bangladesh doesn’t optimize for comfort — it optimizes for continuity. From Cox’s Bazar to Bandarban’s hills, life adapts to terrain. Sylhet breathes through tea gardens, while the Sundarbans operates on survival logic — tides in, tides out.",
        highlight: "Strength comes from adaptability, clarity in roles, and forward motion despite friction. Processes that hold under pressure.",
        type: "grid",
        items: [
            "Sylhet Rain Pacing",
            "Bandarban Elevation Adaptability",
            "Sundarbans Survival Logic",
            "Dhaka Resilient Flow"
        ]
    }
];

export function RegionExplorer() {
    const [activeRegion, setActiveRegion] = useState(regions[0]);

    return (
        <section className="relative z-10 py-24 md:py-40">
            <div className="max-w-7xl mx-auto px-6">
                {/* Switcher Navigation */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20">
                    {regions.map((region) => (
                        <button
                            key={region.id}
                            onClick={() => setActiveRegion(region)}
                            className={`px-8 py-3 rounded-full border transition-all duration-500 font-stint text-lg tracking-wider relative overflow-hidden group ${activeRegion.id === region.id
                                ? "border-primary/50 text-white bg-primary/5"
                                : "border-white/5 text-white/40 hover:border-white/20 hover:text-white/60"
                                }`}
                        >
                            {activeRegion.id === region.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary/10 -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {region.name}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[600px] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRegion.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="grid lg:grid-cols-2 gap-16 items-center"
                        >
                            {/* Left Side: Content */}
                            <div>
                                <div className="flex flex-col items-start mb-8">
                                    <h2 className="font-stint text-4xl md:text-5xl text-gradient tracking-tight mb-4 pb-2">
                                        {activeRegion.name.split(". ")[1]}
                                    </h2>
                                    <div className="h-[1px] w-24 bg-primary/20" />
                                </div>

                                <h3 className="text-5xl md:text-6xl mb-10 tracking-tight font-bold text-white leading-tight font-stint">
                                    {activeRegion.title}
                                </h3>
                                <p className="font-sans text-[11px] text-white/30 mb-8 tracking-[0.3em] uppercase">
                                    {activeRegion.subtitle}
                                </p>

                                <div className="text-gray-400 text-xl leading-relaxed mb-12 space-y-6 font-serif italic">
                                    <p>{activeRegion.description}</p>
                                    {activeRegion.highlight && (
                                        <span className="text-white block mt-6 not-italic font-sans font-medium">
                                            {activeRegion.highlight}
                                        </span>
                                    )}
                                    {activeRegion.quote && (
                                        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl backdrop-blur-3xl italic text-white/80 font-serif text-lg leading-relaxed shadow-xl mt-8">
                                            "{activeRegion.quote}"
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Side: Visual/Special Content */}
                            <div className="relative">
                                {activeRegion.type === "cards" && (
                                    <div className="grid gap-6">
                                        {activeRegion.items.map((item: any, idx: number) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl backdrop-blur-xl group hover:border-primary/20 transition-colors duration-500"
                                            >
                                                <span className="text-primary font-bold text-2xl block mb-2 opacity-50">{item.id}</span>
                                                <p className="text-sm text-foreground tracking-widest leading-loose">{item.content}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}

                                {activeRegion.type === "gallery" && (
                                    <div className="w-full bg-white/[0.02] backdrop-blur-3xl p-12 border border-white/5 shadow-2xl rounded-[2.5rem] relative group overflow-hidden">
                                        <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                        <div className="mb-10 border-b border-white/5 pb-4 relative" />
                                        <ul className="space-y-6 text-foreground/70 font-medium tracking-tight text-lg relative">
                                            {activeRegion.items.map((item: any, idx: number) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex gap-5 items-start"
                                                >
                                                    <span className="font-sans text-white/10 text-xl font-bold mt-1">0{idx + 1}</span>
                                                    <span>{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeRegion.type === "grid" && (
                                    <div className="bg-black/20 p-12 md:p-16 rounded-[2.5rem] border border-white/5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans text-sm text-white/30 tracking-[0.4em]">
                                            {activeRegion.items.map((item: any, idx: number) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-center gap-3 group"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
                                                    <span className="group-hover:text-white transition-colors duration-300 uppercase leading-snug">{item}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                                            <div className="flex gap-2">
                                                <div className="h-1 w-8 bg-primary/20 rounded-full" />
                                                <div className="h-1 w-4 bg-primary/10 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
