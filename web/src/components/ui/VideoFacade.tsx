"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface VideoFacadeProps {
    videoId: string; // YouTube ID for now
    posterSrc: string;
    title: string;
    className?: string;
}

export function VideoFacade({ videoId, posterSrc, title, className }: VideoFacadeProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className={cn("relative w-full aspect-video rounded-xl overflow-hidden bg-mist border border-mist group", className)}>
            <AnimatePresence>
                {!isPlaying ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-10 cursor-pointer"
                        onClick={() => setIsPlaying(true)}
                    >
                        {/* Poster Image */}
                        <Image
                            src={posterSrc}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-16 h-16 bg-spruce rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                            >
                                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={title}
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
