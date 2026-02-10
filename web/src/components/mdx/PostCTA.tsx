import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PostCTA() {
    return (
        <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-6 text-sm italic font-sans">
                Need to structure a similar workflow for your AI Voice operations?
            </p>
            <Link
                href="/career"
                className="text-primary font-mono text-xs tracking-widest hover:underline flex items-center gap-2 group"
            >
                VIEW MY SYSTEMS RECORD
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}
