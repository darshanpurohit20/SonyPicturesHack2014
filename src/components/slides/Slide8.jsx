import React from 'react';
import { motion } from 'framer-motion';

export default function Slide8() {
    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.98, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -50 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        
            className="relative w-full min-h-screen"
        >
            
<div className="grain-overlay"></div>
<div className="scanline"></div>
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#111111]/95 backdrop-blur-sm border-b border-[#D32F2F]/20">
<div className="text-xl font-black tracking-[-0.02em] text-[#D32F2F] font-headline uppercase animate-flicker">
        SONY_HACK.INTEL
    </div>
</header>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col w-64 bg-[#111111] border-r border-[#D32F2F]/15 pt-10 xl:pt-20 shadow-[20px_0_50px_rgba(0,0,0,0.8)]">
<div className="px-6 py-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-[#D32F2F]" style={{ fontVariationSettings: '\'FILL\' 1' }}>security</span>
</div>
<div>
<div className="text-white font-headline font-bold text-lg leading-none">OPERATIONS</div>
<div className="text-[#D32F2F] font-headline font-medium text-[10px] tracking-tighter mt-1">LIVE_TRACING_ON</div>
</div>
</div>
</div>
<nav className="flex-1">
<div className="flex flex-col">
<a className="flex items-center gap-4 text-white/40 hover:text-white/80 px-6 py-3 transition-all duration-75 hover:bg-white/5 group" href="#">
<span className="material-symbols-outlined text-sm" data-icon="skull">skull</span>
<span className="font-headline text-xs font-medium tracking-widest">THREAT_ACTOR</span>
</a>
<a className="flex items-center gap-4 text-white/40 hover:text-white/80 px-6 py-3 transition-all duration-75 hover:bg-white/5 group" href="#">
<span className="material-symbols-outlined text-sm" data-icon="hook">anchor</span>
<span className="font-headline text-xs font-medium tracking-widest">PHISHING</span>
</a>
<a className="flex items-center gap-4 text-white/40 hover:text-white/80 px-6 py-3 transition-all duration-75 hover:bg-white/5 group" href="#">
<span className="material-symbols-outlined text-sm" data-icon="network_check">network_check</span>
<span className="font-headline text-xs font-medium tracking-widest">NETWORK</span>
</a>
<a className="flex items-center gap-4 text-white/40 hover:text-white/80 px-6 py-3 transition-all duration-75 hover:bg-white/5 group" href="#">
<span className="material-symbols-outlined text-sm" data-icon="dns">dns</span>
<span className="font-headline text-xs font-medium tracking-widest">SERVER</span>
</a>
<a className="flex items-center gap-4 bg-[#D32F2F] text-white font-bold px-6 py-3 transition-all duration-75" href="#">
<span className="material-symbols-outlined text-sm" data-icon="public">public</span>
<span className="font-headline text-xs font-medium tracking-widest">GLOBAL</span>
</a>
</div>
</nav>
</aside>
{/*  Main Content  */}
<main className="pl-64 pt-10 xl:pt-20 pb-16 min-h-screen">
<div className="max-w-7xl mx-auto px-12 py-20">
{/*  Tactical Metadata Ticker  */}
<div className="mb-12  whitespace-nowrap border-y border-[#D32F2F]/20 py-2 bg-black/40">
<div className="inline-block animate-marquee-slower text-[10px] font-mono text-[#D32F2F] tracking-[0.3em] uppercase">
                SYS_LOG: 0x442A_ERR // PACKET_LOSS: 0.003% // ENCRYPTION: AES-256-GCM // TRACE_STATUS: ACTIVE // SESSION_ID: 9982-X-2024 // TRACE_STATUS: ACTIVE // SESSION_ID: 9982-X-2024 // 
            </div>
</div>
{/*  Page Title Area  */}
<div className="relative mb-24">
<div className="absolute -top-12 -left-8 text-[120px] font-black text-white/5 font-headline pointer-events-none select-none">REALITY</div>
<h1 className="text-8xl md:text-[10rem] font-headline font-black tracking-[-0.05em] uppercase text-on-background leading-none">
                THE NEW <br/>
<span className="text-[#D32F2F] glitch-hover-effect">REALITY</span>
</h1>
<div className="mt-8 flex items-center gap-4">
<div className="h-px w-24 bg-[#D32F2F]"></div>
<p className="font-headline text-sm font-bold tracking-[0.5em] text-[#D32F2F]">SLIDE 08 // LESSONS LEARNED</p>
</div>
</div>
{/*  Lessons Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-outline-variant/30">
{/*  Lesson 01  */}
<div className="relative group bg-[#111111] p-12 border-r border-outline-variant/30 flex flex-col justify-between lesson-card h-full">
<div className="flex justify-between items-start z-10 mb-8">
<span className="text-[10px] font-headline text-[#D32F2F] font-bold tracking-widest">01_CORE</span>
<span className="material-symbols-outlined text-[#D32F2F]/30 group-hover:text-[#D32F2F] transition-colors" data-icon="security">security</span>
</div>
<div className="bg-[#D32F2F] p-8 relative flex-grow group-hover:shadow-[0_0_50px_rgba(211,47,47,0.4)] transition-all animate-slam z-10" style={{ animationDelay: '0.1s' }}>
<div className="absolute top-0 right-0 w-16 h-16 bg-white/5 -mr-8 -mt-8 rotate-45 pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-headline font-black text-white uppercase leading-tight break-words">
                        Cybersecurity is no longer optional.
                    </h2>
</div>
<div className="mt-8 text-[10px] font-mono text-white/40 uppercase tracking-tighter z-10">
                    STATUS: MANDATORY_PROTOCOL<br/>
                    IMPACT: INFRASTRUCTURE_WIDE
                </div>
{/*  Background Pattern  */}
<div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
<div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #D32F2F 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
</div>
</div>
{/*  Lesson 02  */}
<div className="relative group bg-[#111111] p-12 border-r border-outline-variant/30 flex flex-col justify-between lesson-card h-full">
<div className="flex justify-between items-start z-10 mb-8">
<span className="text-[10px] font-headline text-[#D32F2F] font-bold tracking-widest">02_GATE</span>
<span className="material-symbols-outlined text-[#D32F2F]/30 group-hover:text-[#D32F2F] transition-colors" data-icon="fingerprint">fingerprint</span>
</div>
<div className="bg-[#D32F2F] p-8 relative flex-grow group-hover:shadow-[0_0_50px_rgba(211,47,47,0.4)] transition-all animate-slam z-10" style={{ animationDelay: '0.3s' }}>
<div className="absolute bottom-0 left-0 w-24 h-2 bg-white/20 pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-headline font-black text-white uppercase leading-tight break-words">
                        Identity is the new perimeter.
                    </h2>
</div>
<div className="mt-8 text-[10px] font-mono text-white/40 uppercase tracking-tighter z-10">
                    STATUS: ZERO_TRUST_ENFORCED<br/>
                    IMPACT: ACCESS_CONTROL
                </div>
{/*  Encrypted file texture effect  */}
<div className="absolute inset-0 opacity-5 pointer-events-none flex flex-wrap gap-1 p-2 font-mono text-[6px] text-white">
                    010010101101010110101101101010101011010101010101101010110101010110101010101101011010101011010110101101010101101011010101010101101010110101010110101010101101
                </div>
</div>
{/*  Lesson 03  */}
<div className="relative group bg-[#111111] p-12 flex flex-col justify-between lesson-card h-full">
<div className="flex justify-between items-start z-10 mb-8">
<span className="text-[10px] font-headline text-[#D32F2F] font-bold tracking-widest">03_VULN</span>
<span className="material-symbols-outlined text-[#D32F2F]/30 group-hover:text-[#D32F2F] transition-colors" data-icon="mail">mail</span>
</div>
<div className="bg-[#D32F2F] p-8 relative flex-grow group-hover:shadow-[0_0_50px_rgba(211,47,47,0.4)] transition-all animate-slam z-10" style={{ animationDelay: '0.5s' }}>
<h2 className="text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-headline font-black text-white uppercase leading-tight relative z-10 break-words">
                        One email can break a company.
                    </h2>
<div className="absolute top-2 right-2 text-white/10 text-8xl select-none font-headline font-black pointer-events-none">!</div>
</div>
<div className="mt-8 text-[10px] font-mono text-white/40 uppercase tracking-tighter z-10">
                    STATUS: HUMAN_ERROR_DETECTED<br/>
                    IMPACT: TOTAL_COLLAPSE_POTENTIAL
                </div>
{/*  Subtle grid background  */}
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
</div>
</div>
{/*  Asymmetric Design Elements  */}
<div className="mt-10 xl:mt-20 grid grid-cols-12 gap-6">
<div className="col-span-12 lg:col-span-8">
<div className="p-8 bg-[#1A1A1A] border-l-4 border-[#D32F2F] relative ">
<div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/10 uppercase">classification: level_05</div>
<p className="text-lg text-on-surface font-body leading-relaxed mb-6 relative z-10">
                        The breach at Sony wasn't just a technical failure; it was a socio-technical collapse. We must redefine our defensive posture from 'preventative' to 'resilient'. The data is gone, but the lesson remains etched in the digital ruins.
                    </p>
<div className="flex gap-4 relative z-10">
<span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-headline font-bold text-[#D32F2F] uppercase">EVIDENCE_008_REV</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-headline font-bold text-[#D32F2F] uppercase">FORENSIC_SUMMARY</span>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-4 bg-[#111111] p-8 border border-outline-variant/30 relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F]/5 to-transparent"></div>
<div className="relative h-full flex flex-col justify-center items-center text-center">
<div className="text-[60px] font-headline font-black text-[#D32F2F] leading-none mb-2 animate-flicker">94%</div>
<div className="text-[10px] font-headline font-bold text-white/60 tracking-widest uppercase">Breach Probability Increase <br/> Since Incident</div>
</div>
</div>
</div>
</div>
</main>

        </motion.div>
    );
}
