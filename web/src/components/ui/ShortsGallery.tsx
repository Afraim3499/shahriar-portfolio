"use client";

import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShortsGalleryProps {
    videoIds: string[];
    className?: string;
}

/**
 * A horizontal gallery of YouTube Shorts displayed in their native 9:16 aspect ratio.
 * Shows multiple Shorts side by side with navigation.
 */
export function ShortsGallery({ videoIds, className }: ShortsGalleryProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handlePrev = () => {
        if (activeIndex !== null && activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleNext = () => {
        if (activeIndex !== null && activeIndex < videoIds.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    return (
        <div className={cn("relative", className)}>
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {videoIds.map((videoId, index) => (
                    <motion.div
                        key={videoId}
                        className="relative aspect-[9/16] bg-secondary/20 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden cursor-pointer group transition-all duration-700 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setActiveIndex(index)}
                    >
                        {/* Thumbnail with Smooth Zoom */}
                        <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110">
                            <img
                                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                alt={`Short ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Soft Cinematic Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 transition-opacity duration-700" />

                        {/* Hover Vignette Intensity */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                        {/* Play Button - Minimalist */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100 z-20">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
                                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center"
                        onClick={() => setActiveIndex(null)}
                        aria-label={activeIndex !== null ? "Close video player" : "Open video player"}
                        aria-expanded={activeIndex !== null}
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Close hint */}
                        <div className="absolute top-6 right-6 font-mono text-xs text-alabaster/60">
                            [ ESC TO CLOSE ]
                        </div>

                        {/* Navigation */}
                        <button
                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                            disabled={activeIndex === 0}
                            className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-colors rounded-full"
                            aria-label="Previous video"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                            disabled={activeIndex === videoIds.length - 1}
                            className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-colors rounded-full"
                            aria-label="Next video"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>

                        {/* Video Player */}
                        <motion.div
                            key={videoIds[activeIndex]}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-[90vw] max-w-[400px] aspect-[9/16]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${videoIds[activeIndex]}?autoplay=1&mute=0&loop=1&playlist=${videoIds[activeIndex]}&controls=1&modestbranding=1&rel=0&playsinline=1`}
                                title={`Short ${activeIndex + 1}`}
                                className="absolute inset-0 w-full h-full border border-steel"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />

                            {/* Frame indicators */}
                            <div className="absolute -top-8 left-0 font-mono text-xs text-alabaster/60">
                                PLAYING: [{String(activeIndex + 1).padStart(2, '0')}/{String(videoIds.length).padStart(2, '0')}]
                            </div>
                        </motion.div>

                        {/* Progress dots */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                            {videoIds.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                                    className={cn(
                                        "h-1 rounded-full transition-all",
                                        idx === activeIndex ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                                    )}
                                    aria-label={`Go to video ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
