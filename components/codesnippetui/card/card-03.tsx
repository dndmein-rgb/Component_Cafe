"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, Layout, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Card_03Props {
    title?: string;
    subtitle?: string;
    image?: string;
    tag?: string;
    href?: string;
}

export default function Card_03({
    title = "New UI Design Fundamentals",
    subtitle = "Explore the fundamentals of contemporary UI design and modern design systems.",
    image = "https://images.unsplash.com/photo-1708034678252-ce866ca93b5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFuaW1lJTIwY2hhcmFjdGVyfGVufDB8fDB8fHww",
    tag = "New",
    href = "#",
}: Card_03Props) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const dx = (x - xc) / 20;
        const dy = (y - yc) / 20;
        setRotate({ x: -dy, y: dx });
    };

    return (
        <div className="w-full flex justify-center py-4" style={{ perspective: "1000px" }}>
            <Link 
                href={href} 
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setRotate({ x: 0, y: 0 })}
                className="group relative block w-full max-w-[300px] transition-transform duration-200 ease-out"
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transformStyle: "preserve-3d"
                }}
            >
                {/* Outer Glow Container */}
                <div className={cn(
                    "relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]",
                    "bg-zinc-950 border border-red-900/30 shadow-2xl transition-all duration-500",
                    "group-hover:border-red-500 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                )}>
                    
                    {/* Background Layer with Red Tint */}
                    <div className="absolute inset-0 z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            priority
                            sizes="300px"
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        {/* Reddish overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-zinc-950/60 to-zinc-950" />
                        <div className="absolute inset-0 bg-red-900/10 mix-blend-color" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative h-full z-10 p-6 flex flex-col justify-between">
                        {/* Glowing Red Badge */}
                        <div className="flex justify-start">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-red-500/20 text-red-400 border border-red-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                                <Sparkles className="w-3 h-3 fill-red-400" />
                                {tag}
                            </span>
                        </div>

                        {/* Text Container with Glowing Effect */}
                        <div className="space-y-3">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-white leading-tight transition-all group-hover:text-red-50 group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.5)]">
                                    {title}
                                </h3>
                                <p className="text-sm font-medium text-zinc-100 leading-relaxed group-hover:text-white transition-colors">
                                    {subtitle}
                                </p>
                            </div>
                            
                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-red-500/20">
                                <div className="flex items-center gap-2 text-red-400 group-hover:text-red-300 transition-colors">
                                    <Layout className="w-4 h-4" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Guide</span>
                                </div>
                                
                                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Unreal Pulse Shimmer */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-red-500/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </Link>
        </div>
    );
}