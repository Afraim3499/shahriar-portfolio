"use client";

import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { Linkedin, Youtube, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { DecisionMarker } from "@/components/ui/DecisionMarker";

const WHATSAPP_NUMBER = "8801867685911";
const WHATSAPP_MESSAGE = encodeURIComponent("Hey Shahriar, let's talk about opportunities");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function WhatsAppIcon({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

function XIcon({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function TikTokIcon({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
        </svg>
    );
}

export function Footer() {
    return (
        <footer className="w-full bg-black pt-40 pb-20 relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Unified CTA Section */}
                <div className="text-center mb-32">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-12 leading-tight">
                        Let&apos;s build operations <br /> that scale.
                    </h2>
                    <a
                        href="https://calendar.app.google/EH9rYwo4E5u1HkjR6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 text-white font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500 group"
                    >
                        Initiate conversation <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                {/* Social Links Row */}
                <div className="flex items-center gap-12 mb-40">
                    <a href="https://www.linkedin.com/in/kabirshahriar/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile" className="text-white/20 hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://x.com/shahriarhisham/" target="_blank" rel="noopener noreferrer" title="X Profile" className="text-white/20 hover:text-white transition-colors">
                        <XIcon size={24} />
                    </a>
                    <a href="https://www.youtube.com/@towherenext" target="_blank" rel="noopener noreferrer" title="YouTube Channel" className="text-white/20 hover:text-white transition-colors">
                        <Youtube size={24} />
                    </a>
                    <a href="https://www.instagram.com/hishamshahriar/" target="_blank" rel="noopener noreferrer" title="Instagram Profile" className="text-white/20 hover:text-white transition-colors">
                        <Instagram size={24} />
                    </a>
                    <a href="https://www.facebook.com/hishamshahriar24/" target="_blank" rel="noopener noreferrer" title="Facebook Profile" className="text-white/20 hover:text-white transition-colors">
                        <Facebook size={24} />
                    </a>
                    <a href="https://www.tiktok.com/@wherenext24" target="_blank" rel="noopener noreferrer" title="TikTok Profile" className="text-white/20 hover:text-white transition-colors">
                        <TikTokIcon size={24} />
                    </a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="text-white/20 hover:text-[#25D366] transition-colors">
                        <WhatsAppIcon size={24} />
                    </a>
                </div>

                {/* Grid Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24 mb-20 w-full max-w-4xl">
                    {/* Navigation Column */}
                    <div>
                        <h4 className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-8 font-bold">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="font-mono text-[10px] text-white/30 hover:text-white transition-colors tracking-widest block">OVERVIEW</Link></li>
                            <li><Link href="/thinking" className="font-mono text-[10px] text-white/30 hover:text-white transition-colors tracking-widest block">INSIGHTS</Link></li>
                            <li><Link href="/life-motion" className="font-mono text-[10px] text-white/30 hover:text-white transition-colors tracking-widest block">LIFE & MOTION</Link></li>
                            <li><Link href="/dossier" className="font-mono text-[10px] text-white/30 hover:text-white transition-colors tracking-widest block">DOSSIER</Link></li>
                        </ul>
                    </div>

                    {/* Legals Column */}
                    <div>
                        <h4 className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-8 font-bold">Legals</h4>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="font-mono text-[10px] text-white/30 hover:text-white transition-colors tracking-widest block">PRIVACY POLICY</Link></li>
                            <li><Link href="/terms" className="font-mono text-[10px] text-white/30 hover:text-white transition-colors tracking-widest block">TERMS OF SERVICE</Link></li>
                            <li><a href="mailto:hishamshahriar@gmail.com" className="font-mono text-[10px] text-white/30 hover:text-white transition-colors tracking-widest block">DIRECT CONTACT</a></li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
                        <h4 className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-8 font-bold">Connect</h4>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 mb-4 bg-white p-2 w-fit"
                            title="Scan to chat on WhatsApp"
                        >
                            <QRCodeSVG
                                value={WHATSAPP_URL}
                                size={130}
                                bgColor="#ffffff"
                                fgColor="#000000"
                                level="M"
                                includeMargin={false}
                            />
                        </a>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-[10px] text-white/30 hover:text-[#25D366] transition-colors tracking-widest"
                        >
                            <WhatsAppIcon size={14} />
                            Send a message
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full pt-10 border-t border-white/5 flex flex-col items-center">
                    <p className="font-mono text-[9px] text-white/20 tracking-widest">
                        &copy; {new Date().getFullYear()} SHAHRIAR KABIR. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>

            {/* Large Background Text - Cinematic Authority */}
            <div className="absolute inset-0 flex flex-col items-center justify-start select-none pointer-events-none z-0 overflow-hidden leading-[0.75] pt-10">
                <span className="text-[10vw] md:text-[13vw] font-stint font-black whitespace-nowrap tracking-tighter uppercase text-white/[0.12] w-full text-center">
                    SHAHRIAR
                </span>
                <span className="text-[10vw] md:text-[13vw] font-stint font-black whitespace-nowrap tracking-tighter uppercase text-white/[0.12] w-full text-center">
                    KABIR
                </span>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[#050505] -z-10" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-primary/5 via-transparent to-transparent -z-10 opacity-30" />
        </footer>
    );
}
