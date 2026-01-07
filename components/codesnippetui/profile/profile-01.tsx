"use client"
import {
    LogOut,
    MoveUpRight,
    Settings,
    CreditCard,
    FileText,
    ShieldCheck,
    ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MenuItem {
    label: string;
    value?: string;
    href: string;
    icon?: React.ReactNode;
    external?: boolean;
    isPremium?: boolean;
}

interface Profile01Props {
    name: string;
    role: string;
    avatar: string;
    subscription?: string;
}

const defaultProfile = {
    name: "Kimo Yee",
    role: "Lead AI Architect",
    // UNREAL ENGINE STYLE PROFESSIONAL HEADSHOT
    avatar: "https://images.unsplash.com/photo-1680965422649-8440c642c2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFuaW1lJTIwY2hhcmFjdGVyfGVufDB8fDB8fHww",
    subscription: "Pro Member",
} satisfies Required<Profile01Props>;

export default function Profile01({
    name = defaultProfile.name,
    role = defaultProfile.role,
    avatar = defaultProfile.avatar,
    subscription = defaultProfile.subscription,
}: Partial<Profile01Props> = defaultProfile) {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };

    const menuItems: MenuItem[] = [
        {
            label: "Subscription",
            value: subscription,
            href: "#",
            icon: <CreditCard className="w-4 h-4" />,
            isPremium: true,
        },
        {
            label: "Settings",
            href: "#",
            icon: <Settings className="w-4 h-4" />,
        },
        {
            label: "Security",
            href: "#",
            icon: <ShieldCheck className="w-4 h-4" />,
        },
        {
            label: "Privacy Policy",
            href: "#",
            icon: <FileText className="w-4 h-4" />,
            external: true,
        },
    ];

    return (
        <div className="w-full max-w-sm mx-auto p-4">
            <style>{`
                .profile-mesh {
                    background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(139, 92, 246, 0.15) 0%, transparent 60%);
                }
                @keyframes glow-pulse {
                    0%, 100% { border-color: rgba(168, 85, 247, 0.4); box-shadow: 0 0 10px rgba(168, 85, 247, 0.2); }
                    50% { border-color: rgba(236, 72, 153, 0.6); box-shadow: 0 0 20px rgba(236, 72, 153, 0.4); }
                }
                .avatar-glow {
                    animation: glow-pulse 4s infinite;
                }
            `}</style>

            <div 
                onMouseMove={handleMouseMove}
                className="relative overflow-hidden rounded-[2rem] bg-zinc-950 border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10"
                style={{ '--x': `${mousePos.x}%`, '--y': `${mousePos.y}%` } as any}
            >
                {/* Spotlight Effect */}
                <div className="absolute inset-0 profile-mesh pointer-events-none" />

                <div className="relative px-6 pt-10 pb-6">
                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="relative mb-4 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500">
                                <div className="w-full h-full rounded-full overflow-hidden bg-black ring-2 ring-black">
                                    <Image
                                        src={avatar}
                                        alt={name}
                                        width={96}
                                        height={96}
                                        className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 ring-[3px] ring-zinc-950 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        </div>

                        <div className="space-y-1">
                            <h2 className="text-2xl font-black text-white tracking-tight">
                                {name}
                            </h2>
                            <p className="text-zinc-400 text-sm font-medium tracking-wide uppercase flex items-center justify-center gap-2">
                                <span className="w-4 h-[1px] bg-purple-500" />
                                {role}
                                <span className="w-4 h-[1px] bg-purple-500" />
                            </p>
                        </div>
                    </div>

                    {/* Menu Section */}
                    <div className="space-y-1.5">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="group flex items-center justify-between p-3 
                                    bg-white/[0.03] hover:bg-white/[0.08] 
                                    border border-white/5 rounded-2xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "p-2 rounded-xl transition-colors",
                                        item.isPremium ? "bg-purple-500/10 text-purple-400" : "bg-zinc-900 text-zinc-400 group-hover:text-white"
                                    )}>
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                                        {item.label}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {item.value && (
                                        <span className="text-[10px] font-black uppercase tracking-tighter px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                            {item.value}
                                        </span>
                                    )}
                                    {item.external ? (
                                        <MoveUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
                                    ) : (
                                        <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                                    )}
                                </div>
                            </Link>
                        ))}

                        <button
                            type="button"
                            className="w-full mt-4 flex items-center justify-center gap-2 p-3 
                                bg-red-500/5 hover:bg-red-500/10 border border-red-500/10
                                rounded-2xl transition-all duration-300 group"
                        >
                            <LogOut className="w-4 h-4 text-red-500/70 group-hover:text-red-500 transition-colors" />
                            <span className="text-xs font-black uppercase tracking-widest text-red-500/70 group-hover:text-red-500">
                                Terminate Session
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}