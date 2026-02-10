"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const RECOMMENDATIONS = [
    {
        id: "REC-04",
        name: "Marc Levi",
        role: "Credentialing Manager at AMN Healthcare",
        relationship: "Marc worked with Shahriar on the same team",
        date: "July 27, 2023",
        image: "/images/recommendations/marc-levi.jpg",
        text: "It was a pleasure working with Shahriar. He was an adaptable leader with can do attitude. He is a detailed- and deadline-oriented executor and excellent in relaying expectations to his team for results. he'd be a great leader at any organization."
    },
    {
        id: "REC-05",
        name: "Christina Miner, MBA",
        role: "Transformative Operational and People Leader",
        relationship: "Christina managed Shahriar directly",
        date: "June 15, 2023",
        image: "/images/recommendations/christina-miner.jpg",
        text: "During my time spent working with Shahriat, I was impressed with his ability to learn quickly, adapt in various roles, teach others, and execute on requested items. I’d recommend him to future organizations."
    },
    {
        id: "REC-06",
        name: "Jenae Parr",
        role: "Driving Equity in Learning, Leadership & Culture",
        relationship: "Jenae was Shahriar’s teacher",
        date: "October 27, 2022",
        image: "/images/recommendations/jenae-parr.jpg",
        text: "Partnership with Shahriar is a breeze. I had the pleasure of onboarding Shahriar to a complex role and he handled the training with grace and flexibility. He brought his heart every day and was consistently willing to help peers with their challenges. He brings a positive attitude that is contagious. Shahriar is a pleasure to work with and I would be grateful to have another opportunity to do so."
    },
    {
        id: "REC-01",
        name: "Tanjim Bin Hossain Arafat",
        role: "Business Development Specialist at PrimeSync",
        relationship: "Tanjim reported to Shahriar directly",
        date: "September 19, 2024",
        image: "/images/recommendations/tanjim.jpg",
        text: "I’m greatly indebted to have Shahriar as my first mentor. Specially coming from different background. My constant questions were never taken as annoyance. More power to people like you in the corporate world, who acts like a guiding compass for a sailing boat. 🙌🏻"
    },
    {
        id: "REC-02",
        name: "Shefayet Alam",
        role: "Credentialing Supervisor, Locums, at Radiant Data Systems, Ltd",
        relationship: "Shefayet reported to Shahriar directly",
        date: "September 1, 2024",
        image: "/images/recommendations/shefayet.jpg",
        text: "I had the privilege of working in a Team where Shah was my Supervisor. The things that I really liked about him was that he gave time to his each team member, making sure every single one if us were enjoying both our work and also and the time we spent. He gave me respect and was always proactive and dynamic in his work. Do pray for him and hope he achieve all the success."
    },
    {
        id: "REC-03",
        name: "Md. Omar Faruk",
        role: "Operations Lead || Augmedix || Ahsan Technologies LTD (ATL)",
        relationship: "Md. Omar worked with Shahriar on the same team",
        date: "August 25, 2024",
        image: "/images/recommendations/omar-faruk.jpg",
        text: "I've had the pleasure of working with Shahriar, and he stands out as a highly capable and intellectually sharp professional. His problem-solving skills are exceptional, consistently finding effective solutions to complex challenges. Shahriar also has a unique talent for fostering strong team bonds, creating a positive and cohesive work environment. He’s a strategic thinker, a natural leader, and an asset to any team. I highly recommend him for any role that demands operational expertise and excellent leadership."
    }
];

export function Recommendations() {
    return (
        <section className="w-full bg-black py-24 relative overflow-hidden border-t border-white/5">
            {/* Ambient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,163,0.02)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="font-stint text-4xl md:text-5xl text-gradient tracking-tight leading-tight mb-4">
                        Recommendations
                    </h2>
                </div>

                {/* MASONRY-STYLE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {RECOMMENDATIONS.map((rec, index) => (
                        <motion.div
                            key={rec.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass border border-white/5 rounded-none flex flex-col group hover:border-primary/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Card Header: Balanced Profile Layout */}
                            <div className="p-6 flex items-start gap-5 border-b border-white/5 bg-white/[0.02]">
                                <div className="relative w-24 h-24 shrink-0 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10 group-hover:border-primary/50">
                                    <Image
                                        src={rec.image}
                                        alt={rec.name}
                                        fill
                                        className="object-cover object-top scale-100 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    {/* Corner Accents */}
                                    <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary/40 group-hover:border-primary transition-colors" />
                                </div>
                                <div className="flex flex-col justify-center min-h-[96px]">
                                    <span className="font-mono text-[8px] text-primary/60 tracking-[0.3em] font-bold mb-2">
                                        Verified Personnel
                                    </span>
                                    <h3 className="font-stint text-xl font-bold text-white tracking-tight leading-loose group-hover:text-primary transition-colors">
                                        {rec.name}
                                    </h3>
                                    <p className="font-mono text-[9px] text-white/40 tracking-widest line-clamp-2 leading-relaxed">
                                        {rec.role}
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col gap-6 bg-black relative">
                                {/* Relationship ID & Date */}
                                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                    <span className="font-mono text-[9px] text-white/20 tracking-widest">
                                        REF_ID: {rec.id}
                                    </span>
                                    <span className="font-mono text-[9px] text-primary/60 tracking-widest font-bold">
                                        {rec.date}
                                    </span>
                                </div>

                                {/* Testimony Body */}
                                <p className="text-sm leading-relaxed text-gray-400 font-sans italic relative py-2">
                                    <span className="text-primary/20 text-4xl absolute -top-4 -left-2 font-serif">&ldquo;</span>
                                    {rec.text}
                                    <span className="text-primary/20 text-4xl absolute -bottom-8 -right-2 font-serif">&rdquo;</span>
                                </p>

                                {/* Card Footer: Metadata */}
                                <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                                        <p className="font-mono text-[9px] text-white/40 tracking-[0.2em]">
                                            {rec.relationship}
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="w-1 h-0.5 bg-primary/10 rounded-full group-hover:bg-primary/30 transition-colors" style={{ animationDelay: `${i * 0.1}s` }} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Tactical Bottom Accents */}
                            <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-3 h-3 border-r border-b border-primary" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
