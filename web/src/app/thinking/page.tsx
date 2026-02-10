import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { DecisionMarker } from "@/components/ui/DecisionMarker";

export const metadata = {
    title: "Insights | Shahriar Kabir",
    description: "Systems thinking, operational strategy, and the future of global teams.",
};

export default async function ThinkingPage() {
    const articles = await getAllPosts("thinking");

    return (
        <div className="bg-background min-h-screen relative overflow-x-hidden">
            <HeroBackground />

            {/* Cinematic Header */}
            <header className="max-w-7xl mx-auto px-6 pt-40 pb-24 relative z-10">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span className="font-mono text-[10px] tracking-[0.4em] text-primary font-bold">Knowledge Bank // 2024</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight font-stint">
                        Insights<span className="text-primary">.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl leading-relaxed font-light">
                        Operational leadership, AI-assisted CX, and managing systems across borders—distilled from a decade of building global teams.
                    </p>
                </div>
            </header>

            {/* Bento Knowledge Grid */}
            <main className="max-w-7xl mx-auto px-6 pb-40 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((post, idx) => (
                        <Link
                            key={post.slug}
                            href={`/thinking/${post.slug}`}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-primary/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] flex flex-col ${idx === 0 ? "md:col-span-2 md:flex-row" : ""
                                }`}
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Image Container */}
                            <div className={`relative ${idx === 0 ? "md:w-1/2 h-64 md:h-full" : "h-64"} overflow-hidden bg-secondary/20`}>
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <BookOpen className="text-white/5 w-20 h-20" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Content Block */}
                            <div className={`p-8 flex flex-col justify-between flex-grow ${idx === 0 ? "md:w-1/2" : ""}`}>
                                <div>
                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <div className="flex items-center gap-2 text-[10px] font-mono text-primary font-bold tracking-widest">
                                            <Tag size={10} />
                                            {post.tags?.[0] || "General"}
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 tracking-widest">
                                            <Clock size={10} />
                                            {post.date}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide font-stint leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm md:text-base text-gray-400 line-clamp-3 leading-relaxed font-light mb-8 font-sans">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 font-mono text-[10px] text-white/20 tracking-[0.3em] font-bold group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 mt-auto">
                                    Access File <ArrowRight size={12} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom Visual Anchor */}
                <div className="mt-32 flex flex-col items-center gap-8">
                    <DecisionMarker variant="diamond" className="opacity-20" />
                    <span className="font-mono text-[9px] text-white/10 tracking-[0.5em]">End of knowledge bank // More syncing required</span>
                </div>
            </main>
        </div>
    );
}
