import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { DecisionMarker } from "@/components/ui/DecisionMarker";
import { BlueprintBackground } from "@/components/ui/Blueprint";
import { KeyTakeaway } from "@/components/mdx/KeyTakeaway";
import { PostCTA } from "@/components/mdx/PostCTA";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";

export async function generateStaticParams() {
    const posts = await getAllPosts("thinking");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug, "thinking");
    if (!post) {
        return { title: "Post Not Found" };
    }

    const url = `https://shahriar-kabir.com/thinking/${slug}`;
    const ogImage = `https://shahriar-kabir.com/api/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.tags?.[0] || 'Insight')}`;

    return {
        title: `${post.title} | Shahriar Kabir`,
        description: post.excerpt,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: url,
            type: "article",
            publishedTime: post.date,
            authors: ["Shahriar Kabir"],
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [ogImage],
        },
    };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug, "thinking");

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image ? [`https://shahriar-kabir.com${post.image}`] : [],
        "datePublished": post.date,
        "author": [{
            "@type": "Person",
            "name": "Shahriar Kabir",
            "url": "https://shahriar-kabir.com"
        }],
        "description": post.excerpt,
    };

    return (
        <div className="bg-background min-h-screen relative overflow-x-hidden text-foreground">
            <BlueprintBackground />

            <article className="max-w-4xl mx-auto px-6 pt-40 pb-32 relative z-10">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Navigation Back */}
                <Link
                    href="/thinking"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md text-white/40 hover:text-primary hover:border-primary/30 transition-all mb-12 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-[10px] tracking-widest uppercase">Return to Bank</span>
                </Link>

                <header className="mb-20 max-w-4xl mx-auto">
                    {/* Metadata Protocol */}
                    <div className="flex flex-wrap items-center gap-6 mb-10">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <Tag size={12} className="text-primary" />
                            <span className="font-mono text-[10px] text-primary font-bold uppercase tracking-wider">
                                {post.tags?.[0] || "Insight"}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-white/30">
                            <Calendar size={12} />
                            <span className="font-mono text-[10px] uppercase tracking-widest">{post.date}</span>
                        </div>
                        <div className="h-[1px] flex-grow bg-white/5" />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-12 leading-[0.85] tracking-tighter font-stint uppercase">
                        {post.title}
                    </h1>

                    <div className="max-w-3xl">
                        <p className="text-xl md:text-2xl text-gray-400 font-serif italic leading-relaxed border-l-2 border-primary/30 pl-6 mb-12">
                            {post.excerpt}
                        </p>
                    </div>

                    {post.image && (
                        <div className="aspect-[21/9] relative w-full mb-16 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl group">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                        </div>
                    )}
                </header>

                <div className="w-full h-[1px] bg-white/10 mb-20 max-w-3xl mx-auto" />

                {/* Content Block - The Reading Lane */}
                <div className="prose prose-invert prose-lg max-w-3xl mx-auto
                    prose-headings:font-stint prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-white prose-headings:mt-24 prose-headings:mb-8
                    prose-h2:text-4xl prose-h3:text-2xl
                    prose-p:font-sans prose-p:text-gray-300 prose-p:leading-loose prose-p:font-light
                    prose-strong:text-white prose-strong:font-bold
                    prose-li:text-gray-300 prose-li:font-light
                    prose-img:rounded-3xl prose-img:border prose-img:border-white/10 prose-img:my-12 prose-img:shadow-2xl
                    prose-blockquote:border-l-primary prose-blockquote:bg-white/[0.02] prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-gray-200
                    
                    /* The Lede & Drop Cap Engine */
                    first-of-type:prose-p:font-serif first-of-type:prose-p:text-xl md:first-of-type:prose-p:text-2xl first-of-type:prose-p:text-gray-100 first-of-type:prose-p:leading-relaxed
                    first-of-type:prose-p:first-letter:text-7xl first-of-type:prose-p:first-letter:font-stint first-of-type:prose-p:first-letter:text-white first-of-type:prose-p:first-letter:mr-4 first-of-type:prose-p:first-letter:float-left first-of-type:prose-p:first-letter:leading-[0.8] first-of-type:prose-p:first-letter:mt-2
                ">
                    <MDXRemote source={post.content} components={{ DecisionMarker, KeyTakeaway, PostCTA }} />
                </div>

                {/* Closing Visual Anchor */}
                <footer className="mt-24 pt-16 border-t border-white/5 flex flex-col items-center gap-8">
                    <DecisionMarker />
                    <span className="font-mono text-[9px] text-white/10 tracking-[0.5em] uppercase">Transmission Complete</span>
                </footer>
            </article>
        </div>
    );
}
