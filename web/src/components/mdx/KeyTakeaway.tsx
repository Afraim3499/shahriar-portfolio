import { Zap } from "lucide-react";

interface KeyTakeawayProps {
    children: React.ReactNode;
}

export function KeyTakeaway({ children }: KeyTakeawayProps) {
    return (
        <div className="my-8 border-l-2 border-primary bg-primary/5 p-6 backdrop-blur-sm rounded-r-xl">
            <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-widest uppercase">
                <Zap size={14} /> Executive Summary
            </div>
            <div className="text-gray-300 font-sans leading-relaxed italic">
                {children}
            </div>
        </div>
    );
}
