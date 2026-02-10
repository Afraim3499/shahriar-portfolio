import { ShortsReel } from "@/components/ui/ShortsReel";
import { DecisionMarker } from "@/components/ui/DecisionMarker";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { RotatedVideoFrame } from "@/components/ui/RotatedVideoFrame";
import { VideoTriptych } from "@/components/ui/VideoTriptych";
import { SpotlightCarousel } from "@/components/life-motion/SpotlightCarousel";
import { RegionExplorer } from "@/components/life-motion/RegionExplorer";
import { InstagramWidescreen } from "@/components/life-motion/InstagramWidescreen";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Life & Motion | Shahriar Kabir",
    description: "A forensic record of momentum and exploration through diverse global regions.",
    openGraph: {
        title: "Life & Motion | Shahriar Kabir",
        description: "A forensic record of momentum and exploration through diverse global regions.",
        type: "website",
    }
};

// Consolidated Video Data
const allShorts = [
    {
        videoId: "_d8D52DAFQA",
        title: "The kind of day you remember",
        location: "Nuwara Eliya"
    },
    {
        videoId: "TYq5gvLlRFo",
        title: "Everyday life alongside elephants",
        location: "Pinnawala Kandy"
    },
    {
        videoId: "pzXMktnjI80",
        title: "Perspective from above",
        location: "Sigiriya Fortress"
    },
    {
        videoId: "SdAGh10zuBw",
        title: "Above the blue",
        location: "Ceningan Island"
    }
];

export default function TravelsPage() {
    return (
        <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-background relative overflow-x-hidden">
            <HeroBackground />

            {/* HERO HEADER SECTION - Editorial High-End Look */}
            <header className="max-w-7xl mx-auto px-6 pt-40 pb-32 relative z-10 border-b border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="h-[1px] w-12 bg-primary/40" />
                        </div>

                        <h1 className="text-7xl md:text-9xl mb-12 tracking-tighter font-bold text-white relative leading-[0.8] font-stint">
                            Life & Motion<span className="text-primary/80">.</span>
                        </h1>

                        <p className="text-3xl md:text-5xl leading-[1.1] mb-12 text-gray-100 font-serif tracking-tight">
                            I travel because it slows me down enough to notice people.
                        </p>

                        <div className="text-xl leading-relaxed text-gray-400 max-w-2xl space-y-8 font-serif italic">
                            <p>
                                Not places. Not landmarks. <span className="text-foreground not-italic font-medium border-b border-primary/30 pb-1">People</span> — how they move, work, rest, adapt, and coexist.
                            </p>
                            <p className="not-italic">
                                Over time, travel has become less about destinations and more about perspective. It has taught me how culture shapes behavior, how environments influence decisions, and why leadership looks different in different contexts.
                            </p>
                            <div className="pt-6">
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* FEATURED CINEMATIC LOGS (Relocated from Home) */}
            <section className="relative z-20 -mt-20 mb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <RotatedVideoFrame
                        videoId="UfqEvOko_Eg"
                        title="Behind The Operations"
                    />
                    <div className="mt-20">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex flex-col items-center text-center">
                                <h2 className="text-4xl md:text-5xl text-gradient tracking-tight font-stint mb-4 pb-2">Latest Visuals</h2>
                            </div>
                        </div>
                        <VideoTriptych
                            leftVideoId="pzXMktnjI80"
                            centerVideoId="58LG06wI1QA"
                            rightVideoId="TYq5gvLlRFo"
                        />
                    </div>
                </div>
            </section>


            {/* VISUAL LOGS SECTION (Cinematic Video Wall) */}
            <section className="relative z-10 py-20 bg-black/20">
                <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
                    <h2 className="text-4xl md:text-5xl text-gradient tracking-tight font-stint mb-4 pb-2">Captured Moments</h2>
                    <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse" />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                        <ShortsReel items={allShorts} />
                    </div>
                </div>
            </section>

            {/* REGIONAL INSIGHTS EXPLORER (Consolidated) */}
            <RegionExplorer />

            {/* INSTAGRAM SOCIAL WIDESCREEN ARCHIVE */}
            <InstagramWidescreen />

            {/* EDITORIAL CONCLUSION */}
            <section className="py-40 relative z-10 border-t border-white/5">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <div className="inline-block p-4 mb-12">
                        <DecisionMarker variant="circle" className="mx-auto" />
                    </div>

                    <h2 className="text-4xl md:text-5xl mb-24 text-gradient font-bold tracking-tight leading-[1.1] font-stint text-center pb-2">
                        Short Moments, Long Impact.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 text-left mb-32">
                        <div className="bg-white/[0.02] backdrop-blur-3xl p-16 rounded-[3rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px]" />
                            <h3 className="font-sans text-[10px] font-bold text-primary mb-8 tracking-[0.5em]">The Micro</h3>
                            <p className="text-white text-2xl mb-8 font-bold leading-tight">Every detail carries weight.</p>
                            <ul className="space-y-4 text-foreground/40 font-medium text-lg italic">
                                <li>— A scent that halts the rush</li>
                                <li>— A street observed, not traversed</li>
                                <li>— A day without agenda</li>
                            </ul>
                        </div>
                        <div className="bg-white/[0.02] backdrop-blur-3xl p-16 rounded-[3rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 blur-[60px]" />
                            <h3 className="font-sans text-[10px] font-bold text-primary mb-8 tracking-[0.5em]">The Macro</h3>
                            <p className="text-white text-2xl mb-8 font-bold leading-tight">Systems in the wild.</p>
                            <ul className="space-y-4 text-foreground/60 font-medium text-lg">
                                <li>— Global Cultural Awareness</li>
                                <li>— Cross-contextual Empathy</li>
                                <li>— Comfort within Ambiguity</li>
                            </ul>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <p className="text-2xl md:text-3xl text-foreground/90 font-medium leading-tight mb-12">
                            Travel provides exposure to differences in a way no meeting can. It sharpens the ability to lead globally—not by assuming similarity, but by understanding difference.
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <div className="h-16 w-[1px] bg-gradient-to-b from-primary to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* TRAVEL IMAGE SPOTLIGHT CAROUSEL */}
            <SpotlightCarousel />

        </div>
    );
}
