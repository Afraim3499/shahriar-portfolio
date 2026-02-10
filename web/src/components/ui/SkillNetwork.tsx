"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// --- CONFIGURATION ---
// Premium "Electric" Color Palette
const COLORS = {
    emerald: "#00FFA3",  // Electric Green
    blue: "#00F0FF",     // Cyber Blue
    pink: "#FF0099",     // Hot Pink
    cyan: "#00EAFF",     // Bright Cyan
    amber: "#FFD600",    // Neon Gold
    violet: "#BC13FE",   // Electric Purple
    white: "#FFFFFF",
    slate: "#94A3B8"
};

const CENTRAL_NODE = {
    id: "core-1",
    label: "Ops Leader",
    color: COLORS.white,
    x: 50,
    y: 50,
};

// Adjusted RING_NODES with STRICT angle constraints and INWARD positioning to prevent clipping
const RING_NODES = [
    {
        id: "job-1", // Top
        label: "PrimeSync",
        color: COLORS.emerald,
        x: 50,
        y: 28, // Moved inward y:25 -> y:28 to prevent top clipping
        skills: [
            { id: "s1-1", label: "Strategy", angle: 225 }, // Widened from 240
            { id: "s1-2", label: "Leadership", angle: 270 }, // Up
            { id: "s1-3", label: "AI Systems", angle: 315 }  // Widened from 300
        ]
    },
    {
        id: "job-3", // Top Right
        label: "Radiant Data",
        color: COLORS.blue,
        x: 78,
        y: 35,
        skills: [
            { id: "s3-1", label: "Compliance", angle: 330 },
            { id: "s3-2", label: "Audits", angle: 0 }, // Right
            { id: "s3-3", label: "Creden- tialing", angle: 30 }
        ]
    },
    {
        id: "job-5", // Bottom Right
        label: "Bit Mascot",
        color: COLORS.pink,
        x: 78,
        y: 65,
        skills: [
            { id: "s5-1", label: "SEO", angle: 0 }, // Right
            { id: "s5-2", label: "Analytics", angle: 45 },
            { id: "s5-3", label: "Content", angle: 90 } // Down
        ]
    },
    {
        id: "job-6", // Bottom
        label: "TechLayer",
        color: COLORS.cyan,
        x: 50,
        y: 72, // Moved inward y:75 -> y:72 to prevent bottom clipping
        skills: [
            { id: "s6-1", label: "HTML/CSS", angle: 45 }, // Widened from 60
            { id: "s6-2", label: "MySql", angle: 90 }, // Down
            { id: "s6-3", label: "PHP", angle: 135 } // Widened from 120
        ]
    },
    {
        id: "job-4", // Bottom Left
        label: "Remote Office",
        color: COLORS.amber,
        x: 22,
        y: 65,
        skills: [
            { id: "s4-1", label: "Marketing", angle: 135 },
            { id: "s4-2", label: "Brand", angle: 180 }, // Left
            { id: "s4-3", label: "Campaigns", angle: 225 }
        ]
    },
    {
        id: "job-2", // Top Left
        label: "ATL",
        color: COLORS.violet,
        x: 22,
        y: 35,
        skills: [
            { id: "s2-1", label: "Biz Dev", angle: 180 }, // Left
            { id: "s2-2", label: "Lead Gen", angle: 210 },
            { id: "s2-3", label: "Outreach", angle: 240 }
        ]
    }
];

export function SkillNetwork() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const [activeSignal, setActiveSignal] = useState<string | null>(null); // 'broadcast' | node.id | null

    // Helper: Calculate positions with fixed precision
    const getSatellitePos = (cx: number, cy: number, angle: number, isMobile: boolean = false) => {
        // Reduced vertical radius to prevent clipping on mobile/desktop
        // Horizontal radius of 15% is fine, Vertical of 16% is safer than 21%
        const radiusX = isMobile ? 12 : 15;
        const radiusY = isMobile ? 12 : 16;

        const rad = (angle * Math.PI) / 180;
        return {
            x: Number((cx + Math.cos(rad) * radiusX).toFixed(6)),
            y: Number((cy + Math.sin(rad) * radiusY).toFixed(6))
        };
    };

    const isGlobalHover = hoveredNode === CENTRAL_NODE.id;
    const isBroadcast = activeSignal === 'broadcast';

    const handleNodeClick = (id: string) => {
        // Toggle the signal. If clicking same, turn off. If clicking global, set broadcast.
        if (id === CENTRAL_NODE.id) {
            setActiveSignal(prev => prev === 'broadcast' ? null : 'broadcast');
        } else {
            setActiveSignal(prev => prev === id ? null : id);
        }
    };

    // --- ANIMATION SYNC CONFIG ---
    // Signal Flow: Center -> Ring -> Skill
    // We want a rhythmic pulse.
    // Cycle Time: 1.6s
    // Leg 1 (Center->Ring): Active 0s-0.8s, Wait 0.8s-1.6s. (Duration 0.8, RepeatDelay 0.8)
    // Leg 2 (Ring->Skill):  Wait 0s-0.7s, Active 0.7s-1.3s, Wait 1.3s-1.6s. (Delay 0.7, Duration 0.6, RepeatDelay 1.0)

    return (
        // INCREASED HEIGHT: min-h-[750px] to ensure vertical breathing room for mobile stacking
        <div className="relative w-full min-h-[750px] aspect-square md:aspect-[21/9] bg-black/60 border-y border-white/5 overflow-hidden group-container flex items-center justify-center select-none">

            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            {/* Dark Grid & Vignette */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

            {/* SVG Connections Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* 1. Starburst: Center to Ring */}
                {RING_NODES.map((node) => {
                    const isHovered = isGlobalHover || hoveredNode === node.id;
                    const isSignalActive = isBroadcast || activeSignal === node.id;

                    return (
                        <g key={`core-${node.id}`}>
                            {/* Base Line */}
                            <motion.line
                                x1={`${CENTRAL_NODE.x}%`} y1={`${CENTRAL_NODE.y}%`}
                                x2={`${node.x}%`} y2={`${node.y}%`}
                                stroke={node.color}
                                strokeWidth={isHovered ? 3 : 1.5}
                                strokeOpacity={isHovered ? 0.3 : 0.15}
                                animate={{
                                    strokeWidth: isHovered ? 3 : 1.5,
                                    strokeOpacity: isHovered ? 0.3 : 0.15
                                }}
                            />
                            {/* Moving Signal Beam (SYNCED: Leg 1) */}
                            {isSignalActive && (
                                <motion.line
                                    x1={`${CENTRAL_NODE.x}%`} y1={`${CENTRAL_NODE.y}%`}
                                    x2={`${node.x}%`} y2={`${node.y}%`}
                                    stroke={node.color}
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: [0, 1],
                                        opacity: [0, 1, 0],
                                        strokeDasharray: "20 1000" // Bullet effect
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        repeatDelay: 0.8, // Total Cycle ~1.6s
                                        ease: "easeInOut"
                                    }}
                                    style={{ filter: `drop-shadow(0 0 8px ${node.color})` }}
                                />
                            )}
                        </g>
                    );
                })}

                {/* 2. Ring Connections (Pentagon/Hexagon Shape) */}
                {RING_NODES.map((node, i) => {
                    const nextNode = RING_NODES[(i + 1) % RING_NODES.length];
                    const isHovered = isGlobalHover || hoveredNode === node.id || hoveredNode === nextNode.id;
                    const isSignalActive = isBroadcast; // Only active on broadcast

                    return (
                        <g key={`ring-${node.id}`}>
                            <motion.line
                                x1={`${node.x}%`} y1={`${node.y}%`}
                                x2={`${nextNode.x}%`} y2={`${nextNode.y}%`}
                                stroke="rgba(255, 255, 255, 0.2)"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                                animate={{
                                    stroke: isHovered ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)"
                                }}
                            />
                            {/* Optional: Ring signals flow differently */}
                            {isSignalActive && (
                                <motion.line
                                    x1={`${node.x}%`} y1={`${node.y}%`}
                                    x2={`${nextNode.x}%`} y2={`${nextNode.y}%`}
                                    stroke="white"
                                    strokeWidth={1}
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: [0, 1] }}
                                    transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                                />
                            )}
                        </g>
                    );
                })}

                {/* 3. Skill Connections */}
                {RING_NODES.map((job) => (
                    <g key={job.id}>
                        {job.skills.map((skill) => {
                            const endPos = getSatellitePos(job.x, job.y, skill.angle, false);
                            const isHovered = isGlobalHover || hoveredNode === job.id || hoveredNode === skill.id;
                            const isSignalActive = isBroadcast || activeSignal === job.id;

                            return (
                                <g key={skill.id}>
                                    {/* Base Line */}
                                    <motion.line
                                        x1={`${job.x}%`} y1={`${job.y}%`}
                                        x2={`${endPos.x}%`} y2={`${endPos.y}%`}
                                        stroke={job.color}
                                        strokeWidth={isHovered ? 2 : 1}
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{
                                            pathLength: isHovered || isSignalActive ? 1 : 0, // Always show if signal active
                                            opacity: isHovered || isSignalActive ? 0.4 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    {/* Signal Beam (SYNCED: Leg 2 - Delayed) */}
                                    {isSignalActive && (
                                        <motion.line
                                            x1={`${job.x}%`} y1={`${job.y}%`}
                                            x2={`${endPos.x}%`} y2={`${endPos.y}%`}
                                            stroke={job.color}
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            animate={{
                                                pathLength: [0, 1],
                                                opacity: [0, 1, 0]
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.7, // Start after Leg 1 is mostly done
                                                repeat: Infinity,
                                                repeatDelay: 1.0, // Re-align with 1.6s cycle
                                                ease: "easeOut"
                                            }}
                                            style={{ filter: `drop-shadow(0 0 5px ${job.color})` }}
                                        />
                                    )}
                                </g>
                            );
                        })}
                    </g>
                ))}
            </svg>

            {/* DOM Nodes Layer */}
            <div className="absolute inset-0 pointer-events-none">

                {/* 1. CENTRAL NODE: Global Operations */}
                <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer flex flex-col items-center justify-center z-50"
                    style={{ left: `${CENTRAL_NODE.x}%`, top: `${CENTRAL_NODE.y}%` }}
                    onMouseEnter={() => setHoveredNode(CENTRAL_NODE.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => handleNodeClick(CENTRAL_NODE.id)}
                >
                    <div className="relative flex items-center justify-center">
                        {/* Pulse Effect */}
                        <div className={cn(
                            "absolute w-32 h-32 md:w-56 md:h-56 rounded-full blur-3xl transition-opacity duration-500",
                            isGlobalHover || isBroadcast ? "opacity-60 bg-white/20" : "opacity-20 bg-white/5"
                        )} />

                        <motion.div
                            className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-white/20 bg-black flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] relative z-10 backdrop-blur-xl"
                            animate={{
                                scale: isGlobalHover ? 1.05 : 1,
                                borderColor: isGlobalHover || isBroadcast ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="text-center z-20">
                                <span className="block font-stint text-xl md:text-3xl font-black text-white leading-tight tracking-tighter drop-shadow-lg">
                                    Global
                                </span>
                                <span className="block font-sans text-[8px] md:text-xs font-bold text-white/80 tracking-[0.2em] mt-1 md:mt-2">
                                    Operations
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 2. RING NODES: Roles */}
                {RING_NODES.map((job) => {
                    const isActive = isGlobalHover || hoveredNode === job.id;
                    const isSignalActive = isBroadcast || activeSignal === job.id;

                    return (
                        <div
                            key={job.id}
                            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer z-40 flex flex-col items-center justify-center"
                            style={{ left: `${job.x}%`, top: `${job.y}%` }}
                            onMouseEnter={() => setHoveredNode(job.id)}
                            onMouseLeave={() => setHoveredNode(null)}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNodeClick(job.id);
                            }}
                        >
                            {/* Colorful Glow */}
                            <div
                                className="absolute rounded-full blur-2xl transition-all duration-300 pointer-events-none mix-blend-screen"
                                style={{
                                    backgroundColor: job.color,
                                    width: isActive || isSignalActive ? '140px' : '80px',
                                    height: isActive || isSignalActive ? '140px' : '80px',
                                    opacity: isActive || isSignalActive ? 0.6 : 0.15
                                }}
                            />

                            {/* Node Body */}
                            <motion.div
                                className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 flex items-center justify-center shadow-xl relative bg-black/90 backdrop-blur-md"
                                style={{
                                    borderColor: isActive || isSignalActive ? job.color : 'rgba(255,255,255,0.1)',
                                    boxShadow: isActive || isSignalActive ? `0 0 20px ${job.color}40, inset 0 0 10px ${job.color}20` : 'none'
                                }}
                                animate={{ scale: isActive ? 1.15 : 1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="font-stint text-[10px] md:text-[13px] font-bold text-center text-white px-2 leading-tight drop-shadow-md">
                                    {job.label}
                                </span>
                            </motion.div>
                        </div>
                    );
                })}

                {/* 3. SATELLITE SKILLS */}
                {RING_NODES.map((job) => (
                    <div key={`skills-${job.id}`}>
                        {job.skills.map((skill) => {
                            const pos = getSatellitePos(job.x, job.y, skill.angle, false);

                            // Trigger if Global is hovered OR Parent is hovered OR Self is hovered
                            const isHovered = isGlobalHover || hoveredNode === job.id || hoveredNode === skill.id;
                            const isSignalActive = isBroadcast || activeSignal === job.id;

                            return (
                                <motion.div
                                    key={skill.id}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                                    style={{ left: `${pos.x}%`, top: `${pos.y}%`, zIndex: isHovered || isSignalActive ? 50 : 30 }}
                                    onMouseEnter={() => setHoveredNode(skill.id)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                    animate={{
                                        scale: isHovered || isSignalActive ? 1 : 0.5,
                                        opacity: isHovered || isSignalActive ? 1 : 0,
                                        y: isHovered || isSignalActive ? 0 : 10
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* BIGGER SUB-NODES: slightly larger on mobile too (w-14) to fit text */}
                                    <div
                                        className="bg-black/95 border border-white/20 rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center hover:border-white/50 transition-colors shadow-lg backdrop-blur-md group"
                                        style={{
                                            borderColor: isHovered || isSignalActive ? job.color : 'rgba(255,255,255,0.15)',
                                            boxShadow: isHovered || isSignalActive ? `0 4px 12px -2px ${job.color}30` : 'none'
                                        }}
                                    >
                                        <span
                                            className="text-[9px] md:text-[11px] font-mono font-bold text-white text-center leading-tight px-1 break-words w-full shadow-black drop-shadow-[0_1px_2px_rgba(0,0,0,1)]"
                                            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.9)" }}
                                        >
                                            {skill.label}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ))}

            </div>
        </div>
    );
}
