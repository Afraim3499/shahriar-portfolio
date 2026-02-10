"use client";

import { useEffect, useRef } from "react";

export function BlueprintBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();

            const x = (clientX - left) / width;
            const y = (clientY - top) / height;

            containerRef.current.style.setProperty("--mouse-x", x.toString());
            containerRef.current.style.setProperty("--mouse-y", y.toString());
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30 bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(200,200,200,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,200,200,0.4)_1px,transparent_1px)]"
        >
            {/* The "Torch" Effect */}
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_calc(var(--mouse-x,0.5)*100%)_calc(var(--mouse-y,0.5)*100%),rgba(38,70,83,0.1)_0%,transparent_20%)]"
            />


        </div>
    );
}
