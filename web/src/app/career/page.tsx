"use client";

import { DecisionMarker } from "@/components/ui/DecisionMarker";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { ImpactMetrics } from "@/components/career/ImpactMetrics";
import { ArrowRight, ChevronsDown, Briefcase, Globe, Target } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BlueprintBackground } from "@/components/ui/Blueprint";
import { motion } from "framer-motion";

const careerGroups = [
    {
        company: "PrimeSync AI",
        roles: [
            {
                year: "Jan 2026 - Present",
                role: "Director of Operations",
                location: "Dhaka, Bangladesh · On-site",
                description: "I help guide PrimeSync through its growth phase by aligning execution across teams, regions, and functions. My work spans operational leadership, commercial coordination, and building teams capable of delivering AI-enabled customer experience at scale.",
                link: "https://www.primesync.ai/about",
                isActive: true
            },
            {
                year: "Jan 2026 - Present",
                role: "Acting Chief of Staff",
                location: "Dhaka, Bangladesh · On-site",
                description: "I support executive leadership by translating strategy into execution, coordinating across departments, and ensuring follow-through on critical priorities.",
                isActive: true
            },
            {
                year: "Jan 2024 - Jan 2026",
                role: "Manager, Operations",
                location: "Dhaka, Bangladesh · On-site",
                description: "Joined PrimeSync at an early stage and built the operational foundation. Scaled the organization from zero to over fifty team members, transitioned the company from a traditional BPO model to a CX-driven, AI-assisted operation, and built internal sales and marketing support teams."
            }
        ]
    },
    {
        company: "Upwork (Freelance)",
        roles: [
            {
                year: "Oct 2015 - Jan 2025",
                role: "Professional Freelancer",
                location: "Remote",
                description: "Worked with international clients on data analytics, reporting automation, and operational optimization. Specialized in building systems that improved visibility and decision-making."
            }
        ]
    },
    {
        company: "ATL",
        roles: [
            {
                year: "Jul 2023 - Nov 2023",
                role: "Business Development Manager",
                location: "Dhaka, Bangladesh",
                description: "Supported business development initiatives, website content, and outreach strategy. Contributed to HIPAA readiness and managed lead generation and sales cycles."
            }
        ]
    },
    {
        company: "Radiant Data Systems",
        roles: [
            {
                year: "Jun 2023 - Jul 2023",
                role: "Credentialing Manager",
                location: "On-site",
                description: "Led a team of over 55 professionals across multiple credentialing divisions serving U.S. healthcare clients. Oversaw compliance, training, reporting, and quality control."
            },
            {
                year: "Nov 2022 - Jun 2023",
                role: "Credentialing Supervisor",
                location: "Dhaka, Bangladesh",
                description: "Managed a 20-member team across licensing and regulatory operations. Helped teams meet service-level expectations and mature into independent operational units."
            },
            {
                year: "May 2022 - Nov 2022",
                role: "Credentialing Specialist",
                location: "Dhaka, Bangladesh",
                description: "Handled provider verification, compliance coordination, and audit support in regulated healthcare environments."
            }
        ]
    }
];

export default function CareerPage() {
    return (
        <div className="bg-background min-h-screen relative overflow-x-hidden text-foreground">
            <BlueprintBackground />

            {/* Header Block - Cinematic Entrance */}
            <header className="max-w-7xl mx-auto px-6 pt-40 pb-24 relative z-10 border-b border-white/10">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#10B981]"></span>
                        <span className="font-mono text-[10px] tracking-[0.4em] text-primary font-bold">Personnel Archive // Career History</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.85] font-stint">
                        Professional <br /> Experience<span className="text-primary">.</span>
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-12 mt-8 border-t border-white/5">
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-serif italic">
                            A complete chronological record of deployments, strategic roles, and operational command across a decade of global systems architectural design.
                        </p>
                        <div className="font-mono text-[10px] text-white/30 flex flex-col gap-2 items-start md:items-end tracking-[0.2em]">
                            <div className="flex gap-4"><span>Total_Exp:</span> <span className="text-white font-bold">10 Years</span></div>
                            <div className="flex gap-4"><span>Status:</span> <span className="text-primary font-bold">Active_Duty</span></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Career Record Map */}
            <main className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                {/* Quantified Authority */}
                <ImpactMetrics />

                {careerGroups.map((group, i) => (
                    <div key={i} className="mb-32 last:mb-0">
                        {/* Company Section Header */}
                        <div className="sticky top-20 z-20 mb-12 py-6 border-b border-white/10 glass rounded-2xl px-8 flex items-center justify-between group">
                            <h2 className="font-stint text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-6">
                                <span className="text-primary/40 font-mono text-lg">0{i + 1}</span>
                                {group.company}
                            </h2>
                            <div className="flex items-center gap-4">
                                <span className="hidden md:block font-mono text-[9px] text-white/20 tracking-[0.4em]">Deployment Sequence</span>
                                <ChevronsDown className="text-primary animate-bounce" size={20} />
                            </div>
                        </div>

                        {/* Roles Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {group.roles.map((role, j) => (
                                <CareerCard key={j} role={role} company={group.company} />
                            ))}
                        </div>
                    </div>
                ))}

                {/* Tactical Note Container */}
                <div className="mt-40 mb-32 p-12 md:p-20 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/5 blur-[120px] pointer-events-none" />

                    <div className="max-w-3xl relative z-10">
                        <h3 className="font-stint text-4xl text-white mb-8 tracking-tight flex items-center gap-4">
                            <Target size={24} className="text-primary" />
                            Tactical Interval Note
                        </h3>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-serif italic">
                            Between 2019 and 2020, I stepped away from professional deployment to support familial obligations following a bereavement and completed basic military training. This interval reinforced my foundations in <span className="text-white font-bold">absolute discipline</span>, high-pressure leadership, and organizational resilience.
                        </p>
                    </div>
                </div>

                {/* Final End Quote / Anchor */}
                <div className="flex flex-col items-center gap-12 pt-12">
                    <DecisionMarker variant="diamond" className="opacity-40" />
                    <div className="text-center space-y-4">
                        <h3 className="font-mono text-lg text-white/20 tracking-[0.6em]">End points of record</h3>
                        <p className="text-primary font-mono text-[10px] tracking-widest">System standby // Ready for future deployments</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

function CareerCard({ role, company }: { role: any, company: string }) {
    return (
        <div className={cn(
            "group relative p-10 rounded-3xl border transition-all duration-700 h-full flex flex-col justify-between overflow-hidden",
            role.isActive
                ? "bg-white/[0.05] border-primary/30 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
                : "bg-white/[0.02] border-white/5 hover:border-white/20"
        )}>
            {/* Active Highlight */}
            {role.isActive && (
                <div className="absolute top-0 right-0 bg-primary/20 text-primary text-[9px] font-mono px-4 py-1.5 font-bold tracking-[0.3em] rounded-bl-xl border-l border-b border-primary/20 backdrop-blur-md">
                    Active Command
                </div>
            )}

            {/* Ambient Beams for Active Roles */}
            {role.isActive && <BorderBeam size={400} duration={8} colorFrom="#10B981" colorTo="#8B5CF6" />}

            <div>
                <div className="flex items-center gap-4 mb-8">
                    <span className="font-mono text-[9px] tracking-[0.3em] text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1.5 rounded-full">
                        {role.year}
                    </span>
                    <div className="h-[1px] flex-grow bg-white/5" />
                </div>

                <h3 className="font-sans text-2xl md:text-3xl font-bold text-gray-100 leading-tight mb-4 group-hover:text-primary transition-colors duration-500 tracking-tight">
                    {role.role}
                </h3>

                <div className="flex flex-wrap items-center gap-6 mb-10 text-white/40 font-mono text-[10px] tracking-widest">
                    <div className="flex items-center gap-2">
                        <Briefcase size={12} className="text-primary/60" />
                        <span>{company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Globe size={12} className="text-primary/60" />
                        <span className="truncate max-w-[150px]">{role.location}</span>
                    </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light font-sans border-t border-white/5 pt-8 mb-10">
                    {role.description}
                </p>
            </div>

            {role.link && (
                <Link
                    href={role.link}
                    target="_blank"
                    className="flex items-center gap-3 text-white/20 hover:text-primary font-mono text-[10px] font-bold tracking-[0.4em] transition-all group/link"
                >
                    <span>Verification File</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
            )}
        </div>
    );
}
