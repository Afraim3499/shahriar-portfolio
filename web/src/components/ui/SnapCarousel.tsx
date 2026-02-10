"use client";

import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CarouselItem {
    src: string;
    alt: string;
    caption?: string;
}

interface SnapCarouselProps {
    items: CarouselItem[];
    className?: string;
}

export function SnapCarousel({ items, className }: SnapCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className={cn("w-full py-8 group", className)}>
            <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 scrollbar-spruce"
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center first:pl-2 last:pr-2"
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-mist bg-mist">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 60vw, 45vw"
                            />
                        </div>
                        {item.caption && (
                            <p className="mt-3 text-sm font-medium text-stone font-serif italic border-l-2 border-spruce pl-3">
                                {item.caption}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
