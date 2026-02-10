"use client";

import { useRef, useState, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { cn } from "@/lib/utils";

interface ShortProps {
    videoId: string;
    title: string;
    location: string;
}

export function ShortsReel({ items }: { items: ShortProps[] }) {
    return (
        <div className="w-full">
            {/* 
         Desktop: THE CINEMATIC WALL 
         - Gapless grid
         - Immersive vertical slices
      */}
            <div className="hidden md:grid grid-cols-4 w-full h-[600px] border-y border-steel bg-black">
                {items.map((item) => (
                    <CinematicShort key={item.videoId} {...item} mode="desktop" />
                ))}
            </div>

            {/* 
         Mobile: THE REEL SLIDES
         - Horizontal Scroll
         - Focus on current item 
      */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-[80vh]">
                {items.map((item) => (
                    <div key={item.videoId} className="flex-none w-[85vw] h-full snap-center border-r border-white/10">
                        <CinematicShort {...item} mode="mobile" />
                    </div>
                ))}
            </div>
        </div>
    );
}

function CinematicShort({
    videoId,
    title,
    location,
    mode
}: ShortProps & { mode: 'mobile' | 'desktop' }) {
    const [player, setPlayer] = useState<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mobile Auto-Play (Intersection Observer)
    useEffect(() => {
        if (mode === 'desktop' || !player || !containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
                        player.mute();
                        player.playVideo();
                        setIsPlaying(true);
                    } else {
                        player.pauseVideo();
                        setIsPlaying(false);
                    }
                });
            },
            { threshold: 0.85 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [player, mode]);

    // Desktop Hover Interaction
    const handleMouseEnter = () => {
        if (mode === 'desktop' && player) {
            player.playVideo();
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (mode === 'desktop' && player) {
            player.pauseVideo();
            setIsPlaying(false);
        }
    };

    const onReady: YouTubeProps["onReady"] = (event) => {
        setPlayer(event.target);
        event.target.mute();
    };

    // YouTube Options
    const opts: YouTubeProps["opts"] = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            loop: 1,
            playlist: videoId,
            playsinline: 1,
        },
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Video Layer */}
            <div className={cn(
                "absolute inset-0 transition-transform duration-[2000ms] ease-out",
                isPlaying ? "scale-110" : "scale-100"
            )}>
                {/* Interaction Shield */}
                <div className="absolute inset-0 z-10 bg-transparent" />

                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={onReady}
                    className="w-full h-full object-cover"
                    iframeClassName="w-full h-full object-cover absolute inset-0"
                />
            </div>

            {/* Cinematic Overlay (Vignette) */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-90 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            {/* Typography Layer - Minimalist Editorial */}
            <div className="absolute bottom-0 left-0 right-0 p-10 z-30 transform transition-transform duration-1000 group-hover:-translate-y-2 pointer-events-none">
                <div className="mb-4 overflow-hidden">
                    <span className="block font-sans text-[10px] text-white/40 tracking-[0.5em] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100 italic">
                        {location.replace('_', ' ')}
                    </span>
                </div>
                <h3 className="text-3xl md:text-4xl text-white font-bold leading-[0.9] tracking-tighter uppercase transition-colors duration-500 group-hover:text-primary">
                    {title}
                </h3>
            </div>
        </div>
    );
}
