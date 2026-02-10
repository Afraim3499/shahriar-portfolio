"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Node {
    x: number;
    y: number;
    r: number;
    label: string;
    subLabel: string;
    year: string;
    connections: number[];
    baseX: number;
    baseY: number;
}

const DATA = [
    { year: "2015", label: "DATA ANALYST", sub: "Global Freelance", x: 0.15, y: 0.8 },
    { year: "2022", label: "CREDENTIALING MGR", sub: "Radiant Data", x: 0.35, y: 0.6 },
    { year: "2024", label: "OPS MANAGER", sub: "PrimeSync", x: 0.6, y: 0.4 },
    { year: "2026", label: "GLOBAL OPS DIRECTOR", sub: "PrimeSync (USA/Global)", x: 0.85, y: 0.2 },
];

export function NeuralNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);
    const [nodes, setNodes] = useState<Node[]>([]);
    const requestRef = useRef<number>(0);

    // Initialize Nodes
    useEffect(() => {
        if (!containerRef.current) return;
        const { width, height } = containerRef.current.getBoundingClientRect();

        // Create nodes based on relative coordinates
        const newNodes = DATA.map((item, i) => ({
            x: item.x * width,
            y: item.y * height,
            baseX: item.x * width,
            baseY: item.y * height,
            r: 6,
            label: item.label,
            subLabel: item.sub,
            year: item.year,
            connections: i < DATA.length - 1 ? [i + 1] : [], // Connect forward
        }));

        setNodes(newNodes);
    }, []);

    // Animation Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const animate = (time: number) => {
            if (!containerRef.current) return;
            const { width, height } = containerRef.current.getBoundingClientRect();

            // Resize canvas if needed
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }

            ctx.clearRect(0, 0, width, height);

            // Draw Connections
            ctx.beginPath();
            nodes.forEach((node, i) => {
                node.connections.forEach(targetIdx => {
                    const target = nodes[targetIdx];
                    // Gradient Line
                    const grad = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
                    grad.addColorStop(0, "rgba(200, 200, 200, 0.2)");
                    grad.addColorStop(1, "rgba(200, 200, 200, 0.2)");

                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 1;
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(target.x, target.y);
                });
            });
            ctx.stroke();

            // Draw Nodes & Pulses
            nodes.forEach((node, i) => {
                const isHovered = hoveredNode === i;

                // Pulse Effect
                const timeOffset = i * 1000;
                const pulse = (Math.sin((time + timeOffset) / 500) + 1) / 2; // 0 to 1

                // Draw Glow
                if (isHovered) {
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.r + 15, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(17, 17, 17, 0.1)"; // Charcoal glow
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.r + (pulse * 8), 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(200, 200, 200, 0.2)"; // Subtle pulse
                    ctx.fill();
                }

                // Draw Core
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
                ctx.fillStyle = isHovered ? "#111111" : "#666666";
                ctx.fill();

                // Draw Ring
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r + 4, 0, Math.PI * 2);
                ctx.strokeStyle = isHovered ? "#111111" : "#C0C0C0";
                ctx.stroke();
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current!);
    }, [nodes, hoveredNode]);

    // Interaction overlay (HTML over Canvas for accessibility/SEO)
    return (
        <div ref={containerRef} className="relative w-full h-[400px] bg-alabaster border-y border-steel overflow-hidden group">
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

            <div className="absolute inset-0">
                {nodes.map((node, i) => (
                    <div
                        key={i}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer p-4 group/node"
                        style={{
                            left: `${node.x}px`,
                            top: `${node.y}px`
                        }}
                        onMouseEnter={() => setHoveredNode(i)}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        {/* Text Label */}
                        <div className={cn(
                            "absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center transition-all duration-300",
                            hoveredNode === i ? "opacity-100 translate-y-0" : "opacity-70 translate-y-2"
                        )}>
                            <span className="block font-mono text-xs font-bold text-charcoal">{node.year}</span>
                            <span className="block font-serif text-lg text-charcoal">{node.label}</span>
                            <span className="block font-mono text-[10px] text-stone uppercase tracking-widest">{node.subLabel}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Ambient Overlay */}
            <div className="absolute top-4 left-4 font-mono text-xs text-stone">
                FIG 2.0: SYSTEM_EVOLUTION_MAP
            </div>
        </div>
    );
}
