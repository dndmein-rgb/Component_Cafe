import { cn } from "@/lib/utils";
import { Calendar, Sparkles, Code2, ExternalLink, Share2, Star, Award, TrendingUp, Briefcase } from "lucide-react";
import { useState } from "react";

interface Skill {
    name: string;
    level: number;
}

interface Card02Props {
    name?: string;
    role?: string;
    image?: string;
    status?: string;
    skills?: Skill[];
    portfolio?: string;
}

const defaultProfile = {
    name: "Eugene K",
    role: "Senior Developer",
    // UNREAL IMAGE: High-fidelity cinematic digital human
    image: "https://plus.unsplash.com/premium_photo-1738740634915-772e81092628?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWUlMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D",
    status: "Open to Work",
    skills: [
        { name: "Frontend", level: 5 },
        { name: "Backend", level: 4 },
        { name: "DevOps", level: 4 },
    ],
    portfolio: "github.com/alexchen",
};

export default function Card02({
    name = defaultProfile.name,
    role = defaultProfile.role,
    image = defaultProfile.image,
    status = defaultProfile.status,
    skills = defaultProfile.skills,
    portfolio = defaultProfile.portfolio,
}: Card02Props) {
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update Spotlight position
        setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;
        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div className="w-full max-w-sm mx-auto p-4 perspective-1000">
            <style>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes border-dance {
                    0% { stroke-dashoffset: 1000; }
                    100% { stroke-dashoffset: 0; }
                }
                .mesh-gradient {
                    background: 
                        radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                        radial-gradient(at 40% 20%, rgba(102, 126, 234, 0.1) 0, transparent 50%),
                        radial-gradient(at 0% 100%, rgba(240, 147, 251, 0.1) 0, transparent 50%);
                }
                .unreal-shadow {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
            `}</style>
            
            <div
                className="relative bg-slate-950 rounded-[2.5rem] overflow-hidden unreal-shadow border border-white/5"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transition: 'transform 0.1s ease-out',
                    '--x': `${mousePos.x}%`,
                    '--y': `${mousePos.y}%`
                } as any}
            >
                {/* Spotlight/Mesh effect */}
                <div className="absolute inset-0 mesh-gradient pointer-events-none" />
                
                {/* Animated Border SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                    <rect
                        x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)"
                        rx="38" fill="none" stroke="url(#unreal-grad)" strokeWidth="2"
                        strokeDasharray="10 5" style={{ animation: 'border-dance 30s linear infinite' }}
                    />
                    <defs>
                        <linearGradient id="unreal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="relative p-7 space-y-6">
                    {/* Header Layout */}
                    <div className="flex items-center gap-5">
                        <div className="relative shrink-0">
                            <div className="w-20 h-20 rounded-2xl p-[2px] bg-gradient-to-br from-purple-500 to-pink-500 rotate-3 transition-transform group-hover:rotate-0">
                                <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500 scale-110 hover:scale-100"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-1.5 shadow-lg shadow-emerald-500/40">
                                <TrendingUp className="w-3 h-3 text-white" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                {status}
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tight leading-none pt-1">
                                {name}
                            </h3>
                            <p className="text-zinc-400 text-xs font-medium flex items-center gap-1.5">
                                <Briefcase className="w-3 h-3 text-purple-400" />
                                {role}
                            </p>
                        </div>
                    </div>

                    {/* Skill Section */}
                    <div className="grid grid-cols-1 gap-3">
                        {skills?.map((skill, idx) => (
                            <div
                                key={skill.name}
                                className="group/skill relative p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] transition-all duration-300"
                                onMouseEnter={() => setHoveredSkill(idx)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                                            <Code2 className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-200 uppercase tracking-tighter">{skill.name}</p>
                                            <div className="flex gap-1 mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div 
                                                        key={i} 
                                                        className={`h-1 w-6 rounded-full transition-all duration-500 ${i < skill.level ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]' : 'bg-white/10'}`} 
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <Star className={cn("w-4 h-4 transition-colors", hoveredSkill === idx ? "text-amber-400 fill-amber-400" : "text-white/10")} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex gap-3 pt-2">
                        <button className="flex-[2] group relative overflow-hidden rounded-xl bg-white text-black font-black text-xs uppercase tracking-widest py-4 transition-transform active:scale-95">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                Portfolio
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                        <button className="flex-1 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}