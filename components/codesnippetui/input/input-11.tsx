"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus, Users, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const MAX_TEAM_SIZE = 6;

const avatarUrls = [
    "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png",
    "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
    "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-03-JateJIUhtd3PXynaMG9TDWQ55j5AVP.png",
    "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-04-uuYHWIRvVPi01gEt6NwnGyjqLeeZhz.png",
    "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png",
    "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
];

export default function Input11() {
    const [count, setCount] = useState(1);
    const [error, setError] = useState(false);

    const triggerError = () => {
        setError(true);
        setTimeout(() => setError(false), 400);
    };

    const increment = () => {
        if (count < MAX_TEAM_SIZE) setCount(prev => prev + 1);
        else triggerError();
    };

    const decrement = () => {
        if (count > 1) setCount(prev => prev - 1);
        else triggerError();
    };

    return (
        <div className="flex flex-col items-center justify-center p-12 bg-zinc-50 dark:bg-zinc-950 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 shadow-xl">
            {/* The Orbital Stage */}
            <div className="relative w-64 h-64 flex items-center justify-center mb-8">
                {/* Background decorative rings */}
                <div className="absolute inset-0 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-8 border border-zinc-200 dark:border-zinc-800 rounded-full" />
                
                {/* Central Status Node */}
                <motion.div 
                    animate={error ? { scale: [1, 1.1, 1], backgroundColor: ["#ef444422", "#ef444400"] } : {}}
                    className="z-20 w-20 h-20 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.2)] flex flex-col items-center justify-center"
                >
                    <AnimatePresence mode="wait">
                        {error ? (
                            <motion.div key="err" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <AlertCircle className="w-6 h-6 text-red-500" />
                            </motion.div>
                        ) : (
                            <motion.div key="count" initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
                                <span className="text-2xl font-black text-indigo-500">{count}</span>
                                <p className="text-[8px] uppercase tracking-tighter text-zinc-500">Members</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Orbiting Avatars */}
                <AnimatePresence>
                    {Array.from({ length: count }).map((_, i) => {
                        const angle = (i * (360 / count)) - 90; // Distribute evenly
                        const radius = 90;
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;

                        return (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, x: 0, y: 0 }}
                                animate={{ scale: 1, x, y }}
                                exit={{ scale: 0, x: 0, y: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="absolute z-10"
                            >
                                <div className="relative p-1 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-md">
                                    <Image
                                        src={avatarUrls[i]}
                                        width={48}
                                        height={48}
                                        alt="Avatar"
                                        className="rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900" />
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 bg-zinc-200/50 dark:bg-zinc-900/50 p-2 rounded-2xl backdrop-blur-sm">
                <button
                    onClick={decrement}
                    className="p-3 rounded-xl bg-white dark:bg-zinc-800 hover:bg-red-50 dark:hover:bg-red-900/20 text-zinc-600 dark:text-zinc-400 hover:text-red-500 transition-all active:scale-90"
                >
                    <Minus className="w-5 h-5" />
                </button>
                
                <div className="px-4 py-2 bg-indigo-500 rounded-xl shadow-lg shadow-indigo-500/20">
                    <Users className="w-5 h-5 text-white" />
                </div>

                <button
                    onClick={increment}
                    className="p-3 rounded-xl bg-white dark:bg-zinc-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-all active:scale-90"
                >
                    <Plus className="w-5 h-5" />
                </button>
            </div>

            <p className="mt-4 text-[10px] text-zinc-400 font-medium uppercase tracking-[0.2em]">
                Team Capacity: {MAX_TEAM_SIZE} Nodes
            </p>
        </div>
    );
}