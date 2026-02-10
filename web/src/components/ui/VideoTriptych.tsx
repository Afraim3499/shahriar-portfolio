"use client";

import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoTriptychProps {
    leftVideoId: string;
    centerVideoId: string;
    rightVideoId: string;
    className?: string;
}

/**
 * A triptych video layout with sticky hover-to-play:
 * - Videos play when hovered
 * - Video keeps playing until you hover another video or scroll away
 * - Sound enabled by default
 */
export function VideoTriptych({ leftVideoId, centerVideoId, rightVideoId, className }: VideoTriptychProps) {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const [isInView, setIsInView] = useState(true);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Intersection Observer to detect when section scrolls out of view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
                // Stop video when section scrolls out of view
                if (!entry.isIntersecting) {
                    setActiveVideo(null);
                }
            },
            { threshold: 0.3 } // 30% of section must be visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Handle hover - set active video (it stays active until another is hovered)
    const handleHover = (videoId: string) => {
        setActiveVideo(videoId);
    };

    // Optimized YouTube embed URL
    const getEmbedUrl = (videoId: string, autoplay: boolean) => {
        const params = new URLSearchParams({
            autoplay: autoplay ? '1' : '0',
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

    const VerticalShort = ({ videoId, position }: { videoId: string; position: "left" | "right" }) => {
        const isActive = activeVideo === videoId && isInView;

        return (
            <div
                className="relative aspect-[9/16] bg-midnight border border-steel/30 overflow-hidden group cursor-pointer"
                onMouseEnter={() => handleHover(videoId)}
            >
                {/* Video iframe - always present when active */}
                {isActive && (
                    <iframe
                        src={getEmbedUrl(videoId, true)}
                        title={`Short ${position}`}
                        className="absolute inset-0 w-full h-full border-0 z-10"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        loading="eager"
                    />
                )}

                {/* Thumbnail overlay - fades when active */}
                <div className={cn(
                    "absolute inset-0 transition-opacity duration-700",
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                )}>
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={`Short ${position}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Play indicator */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                            <Play size={20} className="text-white ml-1" fill="currentColor" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const RotatedCenter = ({ videoId }: { videoId: string }) => {
        const isActive = activeVideo === videoId && isInView;

        return (
            <div
                className="relative aspect-[16/9] bg-midnight border border-steel/30 overflow-hidden group cursor-pointer"
                onMouseEnter={() => handleHover(videoId)}
            >
                {/* Active rotated iframe */}
                {isActive && (
                    <div className="absolute inset-0 overflow-hidden z-10">
                        <iframe
                            src={getEmbedUrl(videoId, true)}
                            title="Featured Reel"
                            className="absolute top-1/2 left-1/2 h-[180%] border-0 aspect-[9/16] -translate-x-1/2 -translate-y-1/2 -rotate-90"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="eager"
                        />
                    </div>
                )}

                {/* Thumbnail overlay */}
                <div className={cn(
                    "absolute inset-0 overflow-hidden transition-opacity duration-700",
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                )}>
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt="Center Short"
                        className="absolute top-1/2 left-1/2 h-[180%] w-auto max-w-none object-cover -translate-x-1/2 -translate-y-1/2 -rotate-90 transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Play indicator */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-2xl">
                            <Play size={32} className="text-white ml-2" fill="currentColor" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div ref={sectionRef} className={cn("relative", className)}>
            {/* Triptych Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 items-center">
                {/* Left Vertical */}
                <div className="hidden md:block relative group">
                    {/* Ambient Glow */}
                    {activeVideo === leftVideoId && (
                        <div className="absolute inset-x-0 -inset-y-10 bg-accent/20 blur-[100px] z-0 rounded-full" />
                    )}
                    <VerticalShort videoId={leftVideoId} position="left" />
                </div>

                {/* Center Rotated */}
                <div className="relative group">
                    {/* Ambient Glow - Emerald Centerpiece */}
                    {activeVideo === centerVideoId && (
                        <div className="absolute inset-x-0 -inset-y-16 bg-primary/20 blur-[120px] z-0 rounded-full" />
                    )}
                    <RotatedCenter videoId={centerVideoId} />
                </div>

                {/* Right Vertical */}
                <div className="hidden md:block relative group">
                    {/* Ambient Glow */}
                    {activeVideo === rightVideoId && (
                        <div className="absolute inset-x-0 -inset-y-10 bg-accent/20 blur-[100px] z-0 rounded-full" />
                    )}
                    <VerticalShort videoId={rightVideoId} position="right" />
                </div>
            </div>

            {/* Mobile: Show all three stacked */}
            <div className="grid grid-cols-2 gap-4 mt-4 md:hidden">
                <VerticalShort videoId={leftVideoId} position="left" />
                <VerticalShort videoId={rightVideoId} position="right" />
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
                <span className={cn(
                    "w-2 h-2 rounded-full",
                    activeVideo ? "bg-red-500 animate-pulse" : "bg-spruce"
                )} />
                <span className="font-mono text-[10px] text-alabaster/50 uppercase tracking-widest">
                    {activeVideo ? "NOW PLAYING" : "HOVER TO PLAY"} // SOUND ON
                </span>
            </div>
        </div>
    );
}
