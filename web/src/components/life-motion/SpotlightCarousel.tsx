"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Travel images from the public folder (all JPG/JPEG - .heic files not browser-compatible)
const TRAVEL_IMAGES = [
    "/images/travel/IMG_6508.JPG",
    "/images/travel/IMG_7845.JPG",
    "/images/travel/IMG_7956.JPG",
    "/images/travel/IMG_7971.JPG",
    "/images/travel/IMG_8035.JPG",
    "/images/travel/IMG_8054.JPG",
    "/images/travel/IMG_8089.JPG",
    "/images/travel/IMG_8092.JPG",
    "/images/travel/IMG_8257.JPG",
    "/images/travel/IMG_8336.JPG",
    "/images/travel/IMG_8337.JPG",
    "/images/travel/IMG_8339.JPG",
    "/images/travel/IMG_8341.JPG",
    "/images/travel/IMG_8497.JPG",
    "/images/travel/IMG_8503.JPG",
    "/images/travel/IMG_8707.JPG",
    "/images/travel/IMG_8986.JPG",
    "/images/travel/copy_6B064E4F-B2EC-44A4-830E-92DB72775B00.jpeg",
];

const AUTO_PLAY_INTERVAL = 1400; // 1.4 seconds

interface SpotlightCarouselProps {
    title?: string;
    subtitle?: string;
}

export function SpotlightCarousel({
    title = "Visual Chronicles",
    subtitle = "Captured Moments // Global Sequence"
}: SpotlightCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(2); // Start with 3rd image in center
    const [isHovered, setIsHovered] = useState(false);
    const totalImages = TRAVEL_IMAGES.length;

    // Navigate with infinite loop
    const goNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % totalImages);
    }, [totalImages]);

    const goPrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }, [totalImages]);

    // Auto-play: advance every 1.2s, pause on hover
    useEffect(() => {
        if (isHovered) return; // Don't auto-play when hovered

        const interval = setInterval(() => {
            goNext();
        }, AUTO_PLAY_INTERVAL);

        return () => clearInterval(interval);
    }, [isHovered, goNext]);

    // Get the 5 visible images (2 before, center, 2 after) with infinite wrap
    const getVisibleIndices = () => {
        const indices = [];
        for (let i = -2; i <= 2; i++) {
            indices.push((activeIndex + i + totalImages) % totalImages);
        }
        return indices;
    };

    const visibleIndices = getVisibleIndices();

    // Determine the style for each position (-2, -1, 0, 1, 2)
    const getPositionStyles = (position: number) => {
        const isCenter = position === 0;
        const isAdjacent = Math.abs(position) === 1;
        const isEdge = Math.abs(position) === 2;

        if (isCenter) {
            return {
                containerClass: "z-30 scale-100 opacity-100",
                imageClass: "animate-ken-burns",
                width: "w-64 md:w-80",
                height: "h-96 md:h-[480px]",
            };
        } else if (isAdjacent) {
            return {
                containerClass: "z-20 scale-90 opacity-80",
                imageClass: "blur-[2px]",
                width: "w-48 md:w-64",
                height: "h-80 md:h-[400px]",
            };
        } else if (isEdge) {
            return {
                containerClass: "z-10 scale-75 opacity-50",
                imageClass: "blur-[4px]",
                width: "w-40 md:w-52",
                height: "h-64 md:h-[320px]",
            };
        }
        return {
            containerClass: "",
            imageClass: "",
            width: "w-40",
            height: "h-64",
        };
    };

    return (
        <section
            className="relative z-10 py-20 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <header className="mb-16 text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[1px] w-12 bg-primary/40" />
                        <span className="font-sans text-[10px] font-medium tracking-[0.4em] text-primary">
                            Gallery // Exploration
                        </span>
                        <div className="h-[1px] w-12 bg-primary/40" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-stint text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
                        {subtitle}
                    </p>
                </header>

                {/* Carousel Container */}
                <div className="relative flex items-center justify-center min-h-[520px]">
                    {/* Navigation - Previous */}
                    <button
                        onClick={goPrev}
                        className="absolute left-2 md:left-8 z-40 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-110 group"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6 text-white/70 group-hover:text-white" />
                    </button>

                    {/* Images Container */}
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        {visibleIndices.map((imgIndex, i) => {
                            const position = i - 2; // -2, -1, 0, 1, 2
                            const styles = getPositionStyles(position);

                            return (
                                <div
                                    key={`${imgIndex}-${position}`}
                                    className={`relative ${styles.width} ${styles.height} ${styles.containerClass} transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer transform-gpu will-change-transform`}
                                    onClick={() => position !== 0 && setActiveIndex(imgIndex)}
                                >
                                    <div className={`relative w-full h-full overflow-hidden rounded-lg border border-white/10 transition-all duration-700`}>
                                        <Image
                                            src={TRAVEL_IMAGES[imgIndex]}
                                            alt={`Travel photo ${imgIndex + 1}`}
                                            fill
                                            className={`object-cover transition-all duration-700 ${styles.imageClass}`}
                                            sizes="(max-width: 768px) 200px, 320px"
                                        />
                                    </div>

                                    {/* Focus indicator for center */}
                                    {position === 0 && (
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                                            <span className="text-white/40 text-xs font-mono">
                                                {activeIndex + 1} / {totalImages}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation - Next */}
                    <button
                        onClick={goNext}
                        className="absolute right-2 md:right-8 z-40 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-110 group"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6 text-white/70 group-hover:text-white" />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-2 mt-12">
                    {TRAVEL_IMAGES.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex
                                ? "bg-primary w-6"
                                : "bg-white/20 hover:bg-white/40"
                                }`}
                            aria-label={`Go to image ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
