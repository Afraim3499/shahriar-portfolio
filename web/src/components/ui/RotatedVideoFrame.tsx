"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RotatedVideoFrameProps {
    videoId: string;
    title?: string;
    className?: string;
}

/**
 * A special video frame for YouTube Shorts (1080x1920) rotated 90 degrees left.
 * Plays on hover and stays playing until scrolled away.
 */
export function RotatedVideoFrame({ videoId, title = "Video", className }: RotatedVideoFrameProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isInView, setIsInView] = useState(true);
    const frameRef = useRef<HTMLDivElement>(null);

    // Intersection Observer to detect when section scrolls out of view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
                if (!entry.isIntersecting) {
                    setIsPlaying(false);
                }
            },
            { threshold: 0.3 }
        );

        if (frameRef.current) {
            observer.observe(frameRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Handle hover - start playing
    const handleHover = () => {
        if (isInView) {
            setIsPlaying(true);
        }
    };

    // Optimized YouTube embed URL
    const getEmbedUrl = () => {
        const params = new URLSearchParams({
            autoplay: '1',
            mute: '0',
            loop: '1',
            playlist: videoId,
            controls: '0',
            modestbranding: '1',
            rel: '0',
            playsinline: '1',
            enablejsapi: '1',
            iv_load_policy: '3',
            fs: '0',
            disablekb: '1',
            start: '0',
        });
        return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    };

    const shouldPlay = isPlaying && isInView;

    return (
        <div ref={frameRef} className={cn("relative w-full", className)}>
            {/* Container with 16:9 aspect ratio */}
            <div
                className="relative aspect-[16/9] bg-charcoal overflow-hidden border border-steel cursor-pointer"
                onMouseEnter={handleHover}
            >
                {/* Technical corner markers */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-steel/50 z-20" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-steel/50 z-20" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-steel/50 z-20" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-steel/50 z-20" />

                {/* Title bar */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent z-10 px-4 py-3">
                    <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-alabaster/80 tracking-widest uppercase">
                            [ FEATURED_REEL ]
                        </span>
                        <div className="flex items-center gap-2">
                            {shouldPlay && (
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                    <span className="font-mono text-[9px] text-white/70">LIVE</span>
                                </div>
                            )}
                            <span className="font-mono text-[10px] text-steel">
                                1080×1920 → 90°
                            </span>
                        </div>
                    </div>
                </div>

                {/* Video iframe - shows when playing */}
                {shouldPlay && (
                    <div className="absolute inset-0 overflow-hidden z-5">
                        <iframe
                            src={getEmbedUrl()}
                            title={title}
                            className="absolute top-1/2 left-1/2 h-[180%] border-0 aspect-[9/16] -translate-x-1/2 -translate-y-1/2 -rotate-90"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="eager"
                        />
                    </div>
                )}

                {/* Thumbnail overlay - fades when playing */}
                <div className={cn(
                    "absolute inset-0 overflow-hidden transition-opacity duration-300",
                    shouldPlay ? "opacity-0 pointer-events-none" : "opacity-100"
                )}>
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={title}
                        className="absolute top-1/2 left-1/2 h-[180%] w-auto max-w-none object-cover -translate-x-1/2 -translate-y-1/2 -rotate-90"
                    />
                    <div className="absolute inset-0 bg-charcoal/30" />

                    {/* Play indicator */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-l-[22px] border-l-white border-t-[13px] border-t-transparent border-b-[13px] border-b-transparent ml-1.5" />
                        </div>
                    </div>
                </div>

                {/* Bottom info bar when playing */}
                {shouldPlay && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent z-10 px-4 py-3">
                        <span className="font-mono text-xs text-alabaster/60">{title}</span>
                    </div>
                )}
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 mt-3">
                <span className={cn(
                    "w-2 h-2 rounded-full",
                    shouldPlay ? "bg-red-500 animate-pulse" : "bg-spruce"
                )} />
                <span className="font-mono text-[10px] text-stone uppercase tracking-widest">
                    {shouldPlay ? "NOW_PLAYING" : "HOVER_TO_PLAY"} // ROTATED_FRAME
                </span>
            </div>
        </div>
    );
}
