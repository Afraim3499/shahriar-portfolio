"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { href: "/", label: "OVERVIEW" },
    { href: "/thinking", label: "INSIGHTS" },
    { href: "/life-motion", label: "LIFE & MOTION" },
    { href: "/dossier", label: "DOSSIER" },
];

export function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 20);

            if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !isOpen) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsVisible(true);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            {/* Dark Backdrop for Mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: isVisible ? 0 : -120 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "fixed z-50 transition-colors duration-300",
                    "top-3 left-3 right-3 lg:left-1/2 lg:-translate-x-1/2 lg:w-[calc(100%-24px)] lg:max-w-7xl",
                    "overflow-hidden rounded-sm",
                    (isScrolled || isOpen)
                        ? "glass border border-foreground/10 shadow-lg"
                        : "bg-transparent border border-transparent"
                )}
            >
                <div className={cn(
                    "max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300",
                    isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"
                )}>
                    {/* Brand - With Emerald Indicator */}
                    <Link href="/" className="font-stint text-sm md:text-base tracking-tight text-foreground flex items-center gap-2 group max-w-[70%] overflow-hidden">
                        <span className="w-3 h-3 bg-primary group-hover:bg-primary-light transition-colors shrink-0 rounded-sm group-hover:shadow-[0_0_12px_rgba(16,185,129,0.5)]"></span>
                        <span className="truncate group-hover:text-primary transition-colors">Shahriar Kabir</span>
                    </Link>

                    {/* Desktop Nav - Dark Style */}
                    <div className="hidden md:flex items-center gap-1 h-full">
                        {links.map((link) => {
                            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-3 text-xs md:text-sm font-stint tracking-wide transition-colors duration-300",
                                        isActive ? "font-bold" : ""
                                    )}
                                    style={{
                                        color: isActive ? 'var(--primary)' : 'rgba(249, 250, 251, 0.6)'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) e.currentTarget.style.color = 'var(--accent)';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) e.currentTarget.style.color = 'rgba(249, 250, 251, 0.6)';
                                    }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <Link
                            href="https://calendar.app.google/EH9rYwo4E5u1HkjR6"
                            target="_blank"
                            className="px-5 py-2 flex items-center bg-accent/10 text-accent text-xs md:text-sm font-stint font-bold tracking-wide rounded-full border border-accent/40 hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_16px_rgba(139,92,246,0.4)] transition-all duration-300 ml-4"
                        >
                            BOOK A SYNC
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-4 text-foreground border border-foreground/20 rounded-sm hover:bg-foreground/10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu - Dark Glass */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-secondary overflow-hidden"
                    >
                        <div className="flex flex-col border-t border-foreground/10">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "block px-6 py-5 text-sm font-stint tracking-wide border-b border-foreground/10 relative group transition-colors duration-300",
                                            (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)) ? "text-primary font-bold" : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className={cn(
                                                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                                (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)) ? "bg-primary shadow-[0_0_8px_rgba(16,185,129,0.6)]" : "bg-foreground/20 group-hover:bg-primary"
                                            )} />
                                            {link.label}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: links.length * 0.05 }}
                            >
                                <Link
                                    href="https://calendar.app.google/EH9rYwo4E5u1HkjR6"
                                    target="_blank"
                                    className="block px-6 py-8 text-sm font-stint bg-primary text-white font-bold text-center tracking-wide hover:bg-primary-light transition-colors"
                                >
                                    Talk to Shahriar
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
