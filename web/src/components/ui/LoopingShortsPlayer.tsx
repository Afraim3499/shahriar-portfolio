"use client";

import { useState, useRef, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { cn } from "@/lib/utils";

interface LoopingShortsPlayerProps {
    videoIds: string[];
    className?: string;
}

export function LoopingShortsPlayer({ videoIds, className }: LoopingShortsPlayerProps) {
    const [player, setPlayer] = useState<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-Play when in view
    useEffect(() => {
        if (!player || !containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        player.playVideo();
                    } else {
                        player.pauseVideo();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [player]);

    const onReady: YouTubeProps["onReady"] = (event) => {
        setPlayer(event.target);
        event.target.mute(); // Mute by default for autoplay
    };

    const onEnd: YouTubeProps["onEnd"] = (event) => {
        // Play next video
        const nextIndex = (currentIndex + 1) % videoIds.length;
        setCurrentIndex(nextIndex);
    };

    // YouTube Options
    const opts: YouTubeProps["opts"] = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            loop: 0, // We handle looping manually to switch videos
            playsinline: 1,
            fs: 0,
        },
    };

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full h-full overflow-hidden bg-black", className)}
        >
            <div className="absolute inset-0 pointer-events-none">
                <YouTube
                    key={videoIds[currentIndex]} // Force re-render on video change
                    videoId={videoIds[currentIndex]}
                    opts={opts}
                    onReady={onReady}
                    onEnd={onEnd}
                    className="w-full h-full object-cover"
                    iframeClassName="w-full h-full object-cover absolute inset-0" // Removed scaling since container matches video aspect ratio
                />
            </div>

            {/* Overlay to prevent interaction if desired, or just styling */}
            <div className="absolute inset-0 bg-transparent pointer-events-auto" />

            {/* Status Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {videoIds.map((_, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "h-1 rounded-full transition-all duration-300",
                            idx === currentIndex ? "w-8 bg-white" : "w-1 bg-white/30"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
