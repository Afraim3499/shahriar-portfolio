import Link from "next/link";
import { Twitter, Linkedin, Youtube, Instagram, ArrowUpRight } from "lucide-react";
import { DecisionMarker } from "@/components/ui/DecisionMarker";

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
                    <a href="https://linkedin.com/in/shahrlyr" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile" className="text-white/20 hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://twitter.com/shahrlyr" target="_blank" rel="noopener noreferrer" title="Twitter/X Profile" className="text-white/20 hover:text-white transition-colors">
                        <Twitter size={24} />
                    </a>
                    <a href="https://youtube.com/@shahrlyr" target="_blank" rel="noopener noreferrer" title="YouTube Channel" className="text-white/20 hover:text-white transition-colors">
                        <Youtube size={24} />
                    </a>
                    <a href="https://instagram.com/shahrlyr" target="_blank" rel="noopener noreferrer" title="Instagram Profile" className="text-white/20 hover:text-white transition-colors">
                        <Instagram size={24} />
                    </a>
                </div>

                {/* Grid Navigation */}
                <div className="grid grid-cols-2 gap-24 md:gap-32 mb-20">
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
                            <li><a href="mailto:kabir.shahriar@icloud.com" className="font-mono text-[10px] text-white/30 hover:text-white transition-colors tracking-widest block">DIRECT CONTACT</a></li>
                        </ul>
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
