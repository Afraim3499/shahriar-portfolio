import Link from "next/link";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { DecisionMarker } from "@/components/ui/DecisionMarker";

export function Footer() {
    return (
        <footer className="w-full bg-black py-20 relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <DecisionMarker variant="diamond" />
                            <span className="font-stint text-2xl text-white tracking-tighter">
                                SHAHRIAR KABIR<span className="text-primary">.</span>
                            </span>
                        </div>
                        <p className="font-serif text-lg text-white/50 max-w-sm leading-relaxed mb-8 italic">
                            Building resilient systems and scaling human potential through technical architecture and strategic leadership.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="https://linkedin.com/in/shahrlyr" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile" className="text-white/30 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://youtube.com/@shahrlyr" target="_blank" rel="noopener noreferrer" title="YouTube Channel" className="text-white/30 hover:text-primary transition-colors">
                                <Youtube size={20} />
                            </a>
                            <a href="https://instagram.com/shahrlyr" target="_blank" rel="noopener noreferrer" title="Instagram Profile" className="text-white/30 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://twitter.com/shahrlyr" target="_blank" rel="noopener noreferrer" title="Twitter/X Profile" className="text-white/30 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="font-stint text-white/40 hover:text-white transition-colors">Overview</Link></li>
                            <li><Link href="/thinking" className="font-stint text-white/40 hover:text-white transition-colors">Thinking</Link></li>
                            <li><Link href="/life-motion" className="font-stint text-white/40 hover:text-white transition-colors">Life & Motion</Link></li>
                            <li><Link href="/dossier" className="font-stint text-white/40 hover:text-white transition-colors">Dossier</Link></li>
                        </ul>
                    </div>

                    {/* Context Column */}
                    <div>
                        <h4 className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-8">Legals</h4>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="font-stint text-white/40 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="font-stint text-white/40 hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><a href="mailto:kabir.shahriar@icloud.com" className="font-stint text-white/40 hover:text-white transition-colors">Direct Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="font-mono text-[9px] text-white/20 tracking-widest">
                        &copy; {new Date().getFullYear()} SHAHRIAR KABIR. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="font-mono text-[9px] text-white/40 tracking-[0.2em] uppercase font-bold">
                            ALGORITHMIC DOMINANCE SECURED
                        </span>
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[#050505] -z-10" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] -z-10 opacity-30" />
        </footer>
    );
}
