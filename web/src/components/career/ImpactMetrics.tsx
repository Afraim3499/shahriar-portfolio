"use client";

import { Zap, Users, BarChart3, ShieldCheck } from "lucide-react";

const metrics = [
    { label: "OPERATIONAL EFFICIENCY", value: "+40%", icon: Zap },
    { label: "TEAM MEMBERS MANAGED", value: "55+", icon: Users },
    { label: "SYSTEM UPTIME", value: "99.9%", icon: ShieldCheck },
    { label: "WORKFLOW NODES OPTIMIZED", value: "200+", icon: BarChart3 },
];

export function ImpactMetrics() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {metrics.map((m) => (
                <div
                    key={m.label}
                    className="border border-white/5 bg-white/[0.02] p-6 flex flex-col items-center text-center group hover:border-primary/30 transition-colors backdrop-blur-sm"
                >
                    <m.icon size={20} className="text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-3xl font-stint text-white mb-1">{m.value}</span>
                    <span className="text-[10px] font-mono tracking-tighter text-gray-500 uppercase">{m.label}</span>
                </div>
            ))}
        </div>
    );
}
