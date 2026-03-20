import React from 'react';
import { Shield, Sparkles, Trophy, Users, Heart, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="bg-white selection:bg-black selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-zinc-50">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-100/30 to-transparent blur-3xl opacity-60" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-zinc-200/40 to-transparent blur-3xl opacity-60" />
                </div>
                
                <div className="container mx-auto px-6 md:px-10 relative z-10">
                    <div className="max-w-4xl">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-zinc-400 mb-6 block animate-in fade-in slide-in-from-bottom-2 duration-700">
                            Our Story • Since Day One
                        </span>
                        <h1 className="text-4xl md:text-7xl font-semibold text-zinc-900 tracking-tighter leading-tight mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            Forged by Heritage,<br />
                            Styled for the Future.
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                            The official store for Hindustan Scouts and Guides Association, Telangana. 
                            We bridge the gap between tradition and modern athletic performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4 group">
                            <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-900 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm border border-zinc-100">
                                <Shield size={20} />
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-zinc-900">Official Integrity</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                Every item in our store is authorized by the HSGA Telangana State Headquarters, ensuring students receive official, regulation-compliant gear.
                            </p>
                        </div>
                        <div className="space-y-4 group">
                            <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-900 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm border border-zinc-100">
                                <Sparkles size={20} />
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-zinc-900">Premium Quality</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                We source high-grade fabrics that withstand the rigors of outdoor activities while maintaining a sleek, modern aesthetic for today's students.
                            </p>
                        </div>
                        <div className="space-y-4 group">
                            <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-900 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm border border-zinc-100">
                                <Users size={20} />
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-zinc-900">Community Driven</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                Our platform empowers institutions across Telangana to streamline their procurement, so they can focus on what matters: grooming future leaders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Impact */}
            <section className="py-16 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]" />
                </div>
                
                <div className="container mx-auto px-6 md:px-10 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
                        <div className="text-center md:border-r border-white/10 px-4">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-zinc-500 mb-2">Projects</p>
                            <h4 className="text-3xl md:text-5xl font-semibold tracking-tight">300+</h4>
                        </div>
                        <div className="text-center md:border-r border-white/10 px-4">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-zinc-500 mb-2">Districts</p>
                            <h4 className="text-3xl md:text-5xl font-semibold tracking-tight">33</h4>
                        </div>
                        <div className="text-center md:border-r border-white/10 px-4">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-zinc-500 mb-2">Students</p>
                            <h4 className="text-3xl md:text-5xl font-semibold tracking-tight">50k+</h4>
                        </div>
                        <div className="text-center px-4">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-zinc-500 mb-2">Years</p>
                            <h4 className="text-3xl md:text-5xl font-semibold tracking-tight">15+</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-zinc-50">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 leading-tight">
                                    Forging the Spirit of Self-Reliance.
                                </h2>
                                <p className="text-zinc-500 text-lg leading-relaxed">
                                    HSGA Telangana is committed to the holistic development of youth through scouting and volunteering. 
                                    Our shop was born from a need to provide students with gear that reflects the pride and discipline of the association.
                                </p>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 text-orange-600"><Trophy size={18} /></div>
                                    <div>
                                        <h4 className="font-semibold text-zinc-900 text-lg">National Recognition</h4>
                                        <p className="text-zinc-500 text-sm mt-1">Consistently awarded for excellence in youth empowerment and state-wide community service.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 text-orange-600"><Heart size={18} /></div>
                                    <div>
                                        <h4 className="font-semibold text-zinc-900 text-lg">Spirit of Service</h4>
                                        <p className="text-zinc-500 text-sm mt-1">A portion of all proceeds directly supports regional scout camps and leadership training workshops.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 text-orange-600"><Globe size={18} /></div>
                                    <div>
                                        <h4 className="font-semibold text-zinc-900 text-lg">State-wide Reach</h4>
                                        <p className="text-zinc-500 text-sm mt-1">Partnering with hundreds of schools across Telangana to build a unified identity.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-zinc-900/5 rounded-[2.5rem] blur-2xl group-hover:bg-orange-600/5 transition-colors duration-700" />
                            <div className="relative aspect-[4/5] bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-zinc-100 p-8 flex flex-col justify-end gap-10 group-hover:scale-[1.01] transition-all duration-700">
                                <div className="space-y-4">
                                    <div className="w-12 h-0.5 bg-black rounded-full" />
                                    <p className="text-2xl font-medium text-zinc-900 tracking-tight leading-snug">
                                        "HSGA is not just a uniform; it's a promise to serve with honor."
                                    </p>
                                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">— State Headquarters</p>
                                </div>
                                <img 
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png" 
                                    alt="HSGA Symbol" 
                                    className="w-20 opacity-10 grayscale absolute top-10 right-10 select-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="bg-zinc-950 rounded-[2.5rem] p-10 md:p-20 text-center space-y-10 relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                             <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-600/30 rounded-full blur-[120px]" />
                        </div>
                        
                        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter leading-tight">
                                Wear the Pride.<br />Lead the Change.
                            </h2>
                            <p className="text-zinc-400 text-lg">
                                Ready to join thousands of others in representing the state? Explore our official collections.
                            </p>
                        </div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                            <Link 
                                href="/uniforms" 
                                className="px-8 py-4 bg-white text-black rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5"
                            >
                                Shop Collections <ArrowRight size={18} />
                            </Link>
                            <Link 
                                href="/bulk-order" 
                                className="px-8 py-4 bg-zinc-800 text-white rounded-2xl font-semibold hover:bg-zinc-700 transition-all border border-zinc-700"
                            >
                                Institutional Procurement
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
