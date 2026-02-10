"use client";

import Link from "next/link";
import { DecisionMarker } from "@/components/ui/DecisionMarker";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Users, Shield, Zap, Check, MapPin, Briefcase, Globe, Award, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen relative overflow-x-hidden text-foreground selection:bg-primary selection:text-white">
            <HeroBackground />

            <div className="max-w-7xl mx-auto px-6 pt-40 pb-32 relative z-10">

                {/* Dossier Header */}
                <header className="mb-24 border-b border-white/10 pb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#10B981]"></span>
                                <span className="font-mono text-[10px] tracking-[0.4em] text-primary font-bold">Personnel Dossier // Director of Operations</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter font-stint leading-tight">
                                Introduction<span className="text-primary">.</span>
                            </h1>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2 text-right">
                            <span className="font-mono text-[10px] text-white/20 tracking-[0.3em]">Location Protocol</span>
                            <div className="flex items-center gap-2 text-white/60 font-medium">
                                <MapPin size={14} className="text-primary" />
                                <span>Dhaka // Global</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid lg:grid-cols-[350px_1fr] gap-16 md:gap-24">

                    {/* Sidebar Configuration */}
                    <aside className="space-y-10">
                        {/* Profile Image */}
                        <section className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] -z-10" />
                            <img
                                src="/images/dossier-image.webp"
                                alt="SHA - Process Architect"
                                className="w-full h-auto object-cover rounded-3xl"
                            />
                        </section>

                        <section className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] -z-10" />
                            <h3 className="font-stint text-base font-bold text-primary mb-8 tracking-[0.2em]">Core Focus Areas</h3>
                            <ul className="space-y-6">
                                <SidebarItem label="Scaling Distributed Teams" />
                                <SidebarItem label="AI-Enabled CX Operations" />
                                <SidebarItem label="Compliance-Sensitive Ops" />
                                <SidebarItem label="Cross-Border Leadership" />
                            </ul>
                        </section>

                        <section className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl group">
                            <h3 className="font-stint text-base font-bold text-white/30 mb-6 tracking-[0.2em]">Status Check</h3>
                            <a
                                href="https://primesync.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group/link"
                            >
                                <div className="relative">
                                    <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute inset-0"></div>
                                    <div className="w-3 h-3 bg-primary rounded-full relative"></div>
                                </div>
                                <span className="font-mono text-xs font-bold text-primary tracking-widest group-hover/link:underline">Deployed @ PrimeSync AI</span>
                            </a>
                        </section>

                        <section className="p-8 rounded-3xl border border-white/10 bg-secondary/20 backdrop-blur-sm">
                            <h3 className="font-stint text-base font-bold text-white/30 mb-6 tracking-[0.2em]">Deployment Metrics</h3>
                            <div className="space-y-4 font-mono text-[10px] text-white/50 tracking-widest">
                                <div className="flex justify-between"><span>Regions:</span> <span className="text-white">4</span></div>
                                <div className="flex justify-between"><span>Scalability:</span> <span className="text-primary">Enterprise</span></div>
                                <div className="flex justify-between"><span>Latency:</span> <span className="text-white">Minimal</span></div>
                            </div>
                        </section>
                    </aside>

                    {/* Narrative Core */}
                    <main className="space-y-20">
                        <article className="prose prose-invert prose-lg max-w-none prose-p:font-sans prose-p:text-gray-400 prose-p:font-light prose-p:leading-relaxed">
                            <h2 className="text-4xl md:text-5xl font-bold text-white font-stint tracking-tight mb-8">How I Think About Operations</h2>
                            <p className="text-gray-300 text-xl md:text-2xl font-medium tracking-tight mb-8">
                                Strong operations remove friction. They give teams clarity on what matters and autonomy on how to execute.
                            </p>
                            <p>
                                My role is to design systems that scale without losing accountability, quality, or trust. It isn&apos;t just about building the engine—it&apos;s about ensuring the engine can run at redline for 10,000 miles across territory that hasn&apos;t been mapped yet.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-16">
                                <FeatureBox icon={<Users />} title="Global Ops" desc="Leading teams in BD, PH, LATAM & USA." />
                                <FeatureBox icon={<Shield />} title="Zero Fail" desc="Managed critical healthcare environments." />
                                <FeatureBox icon={<Zap />} title="Voice AI" desc="Integrating Voice Agents into workflows." />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white font-stint tracking-tight mb-8 pt-8 border-t border-white/5">Work @ PrimeSync</h2>
                            <p className="text-gray-300 font-medium">
                                At PrimeSync, I serve as <span className="text-white font-bold italic">Director of Operations</span> and Acting Chief of Staff. We are building AI-powered customer experience capabilities for U.S. businesses—combining technology with disciplined execution.
                            </p>
                            <p>
                                My responsibility is to ensure that growth strengthens the organization rather than stretching it thin. We architect distributed teams that feel in-house, regardless of the longitude.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/kabirshahriar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 not-prose"
                                style={{ boxShadow: '0 10px 30px -10px rgba(16, 185, 129, 0.4)' }}
                            >
                                View Full Career Journey
                                <span className="text-lg">→</span>
                            </a>

                            <h2 className="text-4xl md:text-5xl font-bold text-white font-stint tracking-tight mb-8 pt-8 border-t border-white/5">Outside the Grid</h2>
                            <p className="text-gray-300 font-medium">
                                I travel extensively. Not for escape—but for understanding.
                            </p>
                            <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-3xl italic text-gray-400 text-xl leading-relaxed shadow-2xl relative overflow-hidden group font-serif">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                &quot;Spending time in different countries, cultures, and communities has shaped how I lead. It has taught me how people communicate, what motivates them, and how trust is built differently across regions. This perspective directly influences how I manage global teams.&quot;
                            </div>
                        </article>
                    </main>
                </div>
            </div>

            {/* Full-Width CTA Section - Spans Both Columns */}
            <section className="relative mt-24 py-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

                {/* Animated Glow Orbs */}
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Content */}
                <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 flex items-center justify-center gap-8">
                    <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-stint whitespace-nowrap">
                        Ready to discuss operations, AI, or partnerships?
                    </p>
                    <Link
                        href="https://calendar.app.google/EH9rYwo4E5u1HkjR6"
                        target="_blank"
                        className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-mono text-sm font-bold tracking-widest hover:scale-105 transition-all duration-300 rounded-full shadow-lg hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
                    >
                        Initiate Conversation
                        <ArrowUpRight size={16} className="inline ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

function SidebarItem({ label }: { label: string }) {
    return (
        <li className="flex items-center gap-3 text-white/50 group-hover:text-white transition-colors">
            <Check size={14} className="text-primary" />
            <span className="font-mono text-[10px] tracking-widest">{label}</span>
        </li>
    );
}

function FeatureBox({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/5 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-500">{icon}</div>
            <h4 className="font-sans text-lg font-bold text-gray-100 mb-2 tracking-tight group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-[10px] text-white/30 leading-relaxed font-mono tracking-widest">{desc}</p>
        </div>
    );
}
