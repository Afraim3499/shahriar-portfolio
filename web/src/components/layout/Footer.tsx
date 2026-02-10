import Link from "next/link";
import Image from "next/image";
import { Linkedin, Youtube, Instagram, Twitter, ArrowUpRight, MessageSquare } from "lucide-react";
import { DecisionMarker } from "@/components/ui/DecisionMarker";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#030712] relative overflow-hidden pt-32 pb-12 px-6">
            {/* Massive Typographic Background Layer - Stacked Tower Variant */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-0">
                <div className="font-stint text-[16vw] sm:text-[15vw] md:text-[17vw] leading-[0.85] text-white/[0.03] uppercase tracking-tighter flex flex-col items-center">
                    <span>SHAHRIAR</span>
                    <span>KABIR</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
                {/* Visual Anchor */}
                <div className="mb-12">
                    <DecisionMarker variant="diamond" className="mx-auto scale-150" />
                </div>

                {/* Sub-headline */}
                <p className="font-sans text-[10px] tracking-[0.5em] text-primary mb-6 font-bold">
                    Strategic Collaboration // {currentYear}
                </p>

                {/* Central Action CTA */}
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight max-w-2xl leading-tight">
                    Let&apos;s build operations that scale.
                </h2>

                <Link
                    href="https://calendar.app.google/EH9rYwo4E5u1HkjR6"
                    target="_blank"
                    className="group relative px-12 py-6 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-full overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_50px_rgba(16,185,129,0.1)] mb-32"
                >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center gap-3 font-mono text-xs font-bold tracking-[0.2em] text-white">
                        Initiate conversation <ArrowUpRight size={16} className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                    </span>
                </Link>

                {/* Social Row - Minimalist + WhatsApp */}
                <div className="flex items-center gap-8 mb-20">
                    <SocialIcon href="https://linkedin.com/in/kabirshahriar" icon={<Linkedin size={18} />} />
                    <SocialIcon href="https://twitter.com/shahriarhisham" icon={<Twitter size={18} />} />
                    <SocialIcon href="https://youtube.com/@ToWhereNext" icon={<Youtube size={18} />} />
                    <SocialIcon href="https://instagram.com/hishamshahriar" icon={<Instagram size={18} />} />
                    <SocialIcon
                        href="https://wa.me/8801867685911?text=Hey%20Shahriar,%20Let's%20talk%20business."
                        icon={
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        }
                    />
                </div>

                {/* Bottom Metadata & WhatsApp QR */}
                <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 text-[9px] font-mono tracking-[0.3em] text-white/20">
                    <div className="flex flex-col md:flex-row items-center gap-8 order-2 md:order-1">
                        <div>Dhaka // Global Ops</div>
                        <div className="text-white/40">&copy; {currentYear} All rights reserved</div>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                        </div>
                    </div>

                    {/* QR Code Anchor */}
                    <div className="order-1 md:order-2 flex flex-col items-center md:items-end gap-4 group">
                        <div className="relative w-28 h-28 p-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden group-hover:border-primary/40 transition-all duration-700 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)]">
                            <div className="w-full h-full relative overflow-hidden rounded-lg">
                                <Image
                                    src="/images/whatsapp-qr.png"
                                    alt="WhatsApp Business QR"
                                    fill
                                    className="object-cover scale-[1.8] translate-y-[2%] transition-transform duration-700 group-hover:scale-[1.9]"
                                />
                            </div>
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                        </div>
                        <span className="text-[8px] uppercase tracking-[0.4em] text-white/10 group-hover:text-primary/60 transition-colors">
                            Direct Connect // WhatsApp
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-primary transition-all duration-300 hover:scale-110 p-3"
        >
            {icon}
        </Link>
    );
}
