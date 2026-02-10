"use client";

import React from "react";

export function HeroBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Floating Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-float opacity-50" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] animate-float opacity-50 [animation-delay:-7s]" />
            </div>

            {/* Ambient Gradient Effects */}
            <div className="absolute inset-0 ambient-combined" />

            {/* Grid Background Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
    );
}
