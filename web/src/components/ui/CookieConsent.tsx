"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
            <div className="max-w-4xl mx-auto glass rounded-2xl border border-white/10 p-6 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-2xl">
                {/* Close button */}
                <button
                    onClick={handleDecline}
                    className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors md:hidden"
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                {/* Content */}
                <div className="flex-1 pr-8 md:pr-0">
                    <p className="text-sm text-gray-300 leading-relaxed font-sans">
                        I use cookies to enhance your browsing experience and analyze site traffic.
                        By continuing to use this site, you agree to my{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                        </a>.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 shrink-0">
                    <button
                        onClick={handleDecline}
                        className="px-5 py-2.5 font-mono text-[10px] tracking-widest text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-all rounded-sm"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-5 py-2.5 font-mono text-[10px] tracking-widest bg-primary text-white font-bold hover:bg-primary-light transition-all rounded-sm"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
