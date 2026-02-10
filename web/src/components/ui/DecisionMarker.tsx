import { cn } from "@/lib/utils";

interface DecisionMarkerProps {
    className?: string;
    variant?: "diamond" | "circle";
}

export function DecisionMarker({ className, variant = "diamond" }: DecisionMarkerProps) {
    return (
        <span className={cn("inline-flex items-center justify-center text-primary", className)}>
            {variant === "diamond" ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 0L12 6L6 12L0 6L6 0Z" />
                </svg>
            ) : (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <circle cx="5" cy="5" r="5" />
                </svg>
            )}
        </span>
    );
}
