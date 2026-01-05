"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen, CheckCircle2, Play } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Card_LiquidProgress() {
    const [isHovered, setIsHovered] = useState(false);
    const progress = 65; // Percentage completed

    return (
        <div 
            className="group relative w-full max-w-[320px] p-1 rounded-[2.5rem] bg-linear-to-br from-zinc-800 to-zinc-950 shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden rounded-[2.3rem] bg-zinc-950 p-6">
                
                {/* Animated Background Mesh */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0,transparent_50%)] animate-pulse" />
                </div>

                {/* Top Section: Progress Ring */}
                <div className="relative z-10 flex justify-center py-6">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        {/* Static Track */}
                        <svg className="w-full h-full -rotate-90">
                            <circle
                                cx="64"
                                cy="64"
                                r="58"
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth="8"
                                className="text-zinc-800"
                            />
                            {/* Glowing Progress Bar */}
                            <motion.circle
                                cx="64"
                                cy="64"
                                r="58"
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeDasharray={364}
                                initial={{ strokeDashoffset: 364 }}
                                animate={{ strokeDashoffset: 364 - (364 * progress) / 100 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                                strokeLinecap="round"
                            />
                        </svg>
                        
                        {/* Center Icon/Percent */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-black text-white">{progress}%</span>
                            <span className="text-[10px] uppercase tracking-tighter text-zinc-500 font-bold">Done</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 mt-4 space-y-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-red-400">
                            <BookOpen className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Module 04</span>
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                            Advanced Grid Systems & Layouts
                        </h3>
                    </div>

                    <p className="text-sm text-zinc-400 line-clamp-2">
                        Mastering the math behind responsive layouts and fractional units in modern UI design.
                    </p>

                    {/* Interactive Footer */}
                    <div className="pt-4 flex items-center justify-between border-t border-white/5">
                        <div className="flex items-center gap-1 text-zinc-500">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs font-medium">12/18 Lessons</span>
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white text-xs font-bold transition-all hover:bg-red-400 active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                            {isHovered ? "Continue" : <Play className="w-3 h-3 fill-current" />}
                            <ArrowRight className={cn("w-3 h-3 transition-transform", isHovered ? "translate-x-0" : "-translate-x-2 opacity-0")} />
                        </button>
                    </div>
                </div>

                {/* Glass Glint Overlay */}
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 pointer-events-none" />
            </div>
        </div>
    );
}