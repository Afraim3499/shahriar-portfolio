"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

interface ReelData {
    id: string;
    type: "landscape";
}

const REELS: ReelData[] = [
    { id: "DSSW8tKiXlK", type: "landscape" },
    { id: "DSQC65nkiBS", type: "landscape" },
    { id: "DSkDVSECQFY", type: "landscape" },
    { id: "DRSEGJACSSJ", type: "landscape" },
];

/**
 * We reduce the duplication to 2 sets (8 iframes total).
 * This significantly improves performance and reduces browser memory overhead (fixing the "lags").
 */
const EXTENDED_REELS = [...REELS, ...REELS];

export function InstagramWidescreen() {
    const controls = useAnimationControls();
    const [isHovered, setIsHovered] = useState(false);

    // Initial Animation Loop (Desktop Only)
    // We move -50% because the second set is an exact double of the first.
    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: "-50%",
                transition: {
                    duration: 80, // Slightly faster than 100 for better momentum, but still premium
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        };
        startAnimation();
    }, [controls]);

    // Reusable Precision Masked Reel Frame
    const ReelFrame = ({ id, index }: { id: string; index: number }) => (
        <div
            key={`${id}-${index}`}
            className="relative w-full md:w-[540px] aspect-video group rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_100px_rgba(var(--primary-rgb),0.25)] md:hover:scale-[1.02]"
        >
            {/* SURGICAL PRECISION MASKING (V2) */}
            <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto transition-all duration-700">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full relative">
                        <iframe
                            src={`https://www.instagram.com/reel/${id}/embed/`}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[18%] w-[100%] h-[178%] border-0 opacity-100 transition-all duration-1000 grayscale md:grayscale group-hover:grayscale-0 scale-[1.78] pointer-events-none md:group-hover:pointer-events-auto"
                            title={`Reel ${id}`}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Cinematic Overlay fades on Hover (Desktop Only) */}
                <div className="absolute inset-0 bg-black/60 hidden md:block group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Film Grain Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );

    return (
        <section className="relative z-10 py-32 bg-black/40 overflow-hidden">
            {/* Header */}
            <header className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-[1px] w-12 bg-primary/40" />
                    <div className="h-[1px] w-12 bg-primary/40" />
                </div>
                <h2 className="text-4xl md:text-6xl font-stint text-white mb-6">
                    Widescreen Observations
                </h2>
                <div className="max-w-2xl mx-auto space-y-2">
                </div>
            </header>

            {/* DESKTOP: The Infinite Seamless Gallery */}
            <div
                className="hidden md:block relative w-full overflow-hidden py-10"
                onMouseEnter={() => {
                    setIsHovered(true);
                    controls.stop();
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                    controls.start({
                        x: "-50%",
                        transition: {
                            duration: 80,
                            ease: "linear",
                            repeat: Infinity,
                        },
                    });
                }}
            >
                <motion.div
                    animate={controls}
                    initial={{ x: "0%" }}
                    /**
                     * STITCH-LESS GEOMETRY: 
                     * We use md:pr-12 instead of gap-12 to ensure the loop math is perfect.
                     * Total Repeat Unit = Frame Width + Padding.
                     */
                    className="flex w-max px-6 will-change-transform"
                >
                    {EXTENDED_REELS.map((reel, idx) => (
                        <div key={`desktop-${idx}`} className="md:pr-12 flex-none">
                            <ReelFrame id={reel.id} index={idx} />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* MOBILE: Integrated Vertical Stack */}
            <div className="md:hidden flex flex-col gap-12 px-6 max-w-xl mx-auto">
                {REELS.map((reel, idx) => (
                    <motion.div
                        key={`mobile-${idx}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.8 }}
                    >
                        <ReelFrame id={reel.id} index={idx} />
                    </motion.div>
                ))}
            </div>

            {/* Aesthetic Border Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        </section>
    );
}
