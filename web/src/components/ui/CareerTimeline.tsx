"use client";

import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
    year: string;
    role: string;
    company: string;
    description: string;
    current?: boolean;
}

export function CareerTimeline() {
    return (
        <section className="border-b border-foreground/10 relative overflow-hidden">
            <div className="absolute inset-0 ambient-emerald pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="flex items-center gap-4">
                        <Briefcase size={32} className="text-primary hidden md:block" />
                        <h2 className="font-stint text-5xl md:text-6xl text-white tracking-tight">
                            Career Journey<span className="text-primary">.</span>
                        </h2>
                    </div>
                    <Link href="/career" className="font-mono text-[10px] text-foreground/50 hover:text-primary transition-all flex items-center gap-2 group tracking-[0.2em]">
                        View full archive <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TimelineCard
                        year="2023 - Now"
                        role="Director of Operations"
                        company="PrimeSync AI"
                        description="Leading global operations across US, Canada, LATAM, and Philippines."
                        current
                    />
                    <TimelineCard
                        year="2021 - 2023"
                        role="Operations Manager"
                        company="Tech Startup"
                        description="Scaled team from 20 to 80 members across 3 time zones."
                    />
                    <TimelineCard
                        year="2019 - 2021"
                        role="Team Lead"
                        company="BPO Organization"
                        description="Managed customer experience operations for Fortune 500 clients."
                    />
                </div>
            </div>
        </section>
    );
}

function TimelineCard({ year, role, company, description, current }: TimelineItemProps) {
    return (
        <div className={cn(
            "relative p-8 rounded-3xl bg-white/[0.03] border transition-all duration-500 group overflow-hidden flex flex-col h-full",
            current
                ? "border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] bg-white/[0.05]"
                : "border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
        )}>
            {/* Ambient Background Glow */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                current ? "bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-100" : "bg-gradient-to-br from-white/5 via-transparent to-transparent"
            )} />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                    <span className={cn(
                        "font-mono text-[10px] tracking-widest px-3 py-1 rounded-full border",
                        current ? "text-primary border-primary/20 bg-primary/5" : "text-white/30 border-white/10"
                    )}>
                        {year}
                    </span>
                    {current && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />}
                </div>

                <h3 className="font-sans text-2xl font-semibold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {role}
                </h3>

                <p className="font-mono text-[10px] text-accent font-bold tracking-[0.2em] mb-6">
                    {company}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed font-light mt-auto font-sans">
                    {description}
                </p>
            </div>
        </div>
    );
}
