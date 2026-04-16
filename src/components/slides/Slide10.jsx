import React from 'react';
import { motion } from 'framer-motion';

export default function Slide10() {
    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.98, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -50 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        
            className="relative w-full min-h-screen"
        >
            
<div className="fixed inset-0 grain-overlay z-[100]"></div>
{/*  Atmospheric Elements  */}
<div className="scanlines"></div>
<div className="scanline-move"></div>
<div className="dust" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
<div className="dust" style={{ top: '60%', left: '80%', animationDelay: '1s' }}></div>
<div className="dust" style={{ top: '40%', left: '50%', animationDelay: '2s' }}></div>
<div className="dust" style={{ top: '80%', left: '30%', animationDelay: '1.5s' }}></div>
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0A0A0A] dark:bg-[#0A0A0A] border-b border-[#D32F2F]/15">
<div className="flex items-center gap-8">
<span className="text-xl font-black tracking-[-0.02em] text-[#D32F2F] font-headline uppercase">SONY_HACK.INTEL</span>
<nav className="hidden md:flex gap-6 items-center">
<a className="font-headline tracking-tighter uppercase font-bold text-white/60 hover:text-[#D32F2F] hover:bg-white/5 transition-colors duration-75 text-sm" href="#">INTEL</a>
<a className="font-headline tracking-tighter uppercase font-bold text-white/60 hover:text-[#D32F2F] hover:bg-white/5 transition-colors duration-75 text-sm" href="#">BREACH</a>
<a className="font-headline tracking-tighter uppercase font-bold text-white/60 hover:text-[#D32F2F] hover:bg-white/5 transition-colors duration-75 text-sm" href="#">EXFIL</a>
<a className="font-headline tracking-tighter uppercase font-bold text-white/60 hover:text-[#D32F2F] hover:bg-white/5 transition-colors duration-75 text-sm" href="#">IMPACT</a>
</nav>
</div>
<div className="flex items-center gap-4">
<span className="font-headline tracking-tighter uppercase font-bold text-[#D32F2F] text-xs px-3 py-1 border border-[#D32F2F]/30 bg-[#D32F2F]/5">SCENE 10 // Q&amp;A</span>
</div>
</header>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-[#0A0A0A] dark:bg-[#0A0A0A] w-64 border-r border-[#D32F2F]/15 pt-10 xl:pt-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<div className="px-6 py-4 mb-6">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[#D32F2F]" data-icon="shield_person">shield_person</span>
</div>
<div>
<p className="font-headline text-xs font-bold text-white uppercase tracking-tight">OPERATIONS</p>
<p className="font-label text-[10px] text-[#D32F2F] tracking-widest uppercase">LIVE_TRACING_ON</p>
</div>
</div>
</div>
<nav className="flex-1">
<div className="flex flex-col gap-1">
<a className="text-white/40 hover:text-white/80 px-6 py-3 flex items-center gap-4 font-headline text-xs font-medium transition-all hover:bg-white/5" href="#">
<span className="material-symbols-outlined" data-icon="skull">skull</span>
<span>THREAT_ACTOR</span>
</a>
<a className="text-white/40 hover:text-white/80 px-6 py-3 flex items-center gap-4 font-headline text-xs font-medium transition-all hover:bg-white/5" href="#">
<span className="material-symbols-outlined" data-icon="hook">anchor</span>
<span>PHISHING</span>
</a>
<a className="text-white/40 hover:text-white/80 px-6 py-3 flex items-center gap-4 font-headline text-xs font-medium transition-all hover:bg-white/5" href="#">
<span className="material-symbols-outlined" data-icon="network_check">network_check</span>
<span>NETWORK</span>
</a>
<a className="text-white/40 hover:text-white/80 px-6 py-3 flex items-center gap-4 font-headline text-xs font-medium transition-all hover:bg-white/5" href="#">
<span className="material-symbols-outlined" data-icon="dns">dns</span>
<span>SERVER</span>
</a>
<a className="bg-[#D32F2F] text-white font-bold px-6 py-3 flex items-center gap-4 font-headline text-xs font-medium" href="#">
<span className="material-symbols-outlined" data-icon="public">public</span>
<span>GLOBAL</span>
</a>
</div>
</nav>
<div className="p-6">
<button className="w-full bg-primary-container text-white py-3 px-4 font-headline text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="download">download</span>
                DOWNLOAD EVIDENCE
            </button>
</div>
</aside>
<main className="flex-1 lg:ml-64 mt-8 xl:mt-16 p-8 xl:p-12 overflow-y-auto no-scrollbar relative flex flex-col justify-start">
{/*  Background Elements  */}
<div className="absolute inset-0 z-0  pointer-events-none opacity-20">
<div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#D32F2F]/20 rotate-45"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-tertiary/20 -rotate-12"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#D32F2F]/30 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 lg:gap-16 items-start z-10 pb-20">
{/*  Left Side: Conclusion  */}
<div className="col-span-12 xl:col-span-5 flex flex-col gap-6 opacity-0 animate-fade-in-blur" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
<div className="flex items-center gap-4 mb-2">
<div className="h-[2px] w-12 bg-[#D32F2F]"></div>
<span className="font-headline text-xs tracking-[0.4em] text-[#D32F2F] uppercase">Phase_10 // Conclusion</span>
</div>
<h1 className="font-headline text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none drop-shadow-lg">
                    THE NEW <span className="text-[#D32F2F] italic">PARADIGM</span>
                </h1>
<div className="mt-8 border-l-4 border-[#D32F2F] pl-6 py-2 space-y-6">
<p className="font-body text-base text-on-surface leading-relaxed text-justify">
                        The 2014 Sony Pictures hack marked a turning point in how destructive cyberattacks against private companies are understood, blurring lines between corporate security incidents and geopolitical conflict. It demonstrated that a determined, state-linked actor could combine espionage, sabotage, and psychological operations to inflict strategic, financial, and reputational damage on a global entertainment firm.
                    </p>
<p className="font-body text-base text-on-surface leading-relaxed text-justify opacity-80">
                        In the years since, other destructive and disruptive campaigns—such as WannaCry and NotPetya—have echoed patterns seen at Sony: rapid propagation, data destruction or encryption, and significant collateral damage beyond the initial target.
                    </p>
<p className="font-body text-base text-white/50 leading-relaxed text-justify text-sm italic mt-4">
                        These lessons are increasingly relevant in an era of AI-enabled social engineering, nation-state cyber units, and ubiquitous data collection, where attacks like Sony’s can be replicated or augmented with new technologies.
                    </p>
</div>
</div>
{/*  Right Side: 5 Takeaways  */}
<div className="col-span-12 xl:col-span-7 flex flex-col gap-4">
<h3 className="font-headline font-bold text-white/40 uppercase tracking-widest text-xs mb-2">MODERN ORGANIZATIONAL TAKEAWAYS</h3>
<div className="grid grid-cols-1 gap-4">
{/*  Takeaway 1  */}
<div className="bg-surface-container-low border border-white/5 p-6 flex gap-6 hover:border-[#D32F2F]/50 transition-colors group opacity-0 animate-fade-in-blur" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
<div className="text-[#D32F2F] font-black font-headline text-2xl group-hover:animate-pulse">01</div>
<div>
<h4 className="font-headline font-bold text-white uppercase text-lg mb-1 tracking-tight">Identity is the new perimeter</h4>
<p className="font-body text-sm text-on-surface-variant">Protecting credentials and implementing MFA are as important as patching systems.</p>
</div>
</div>
{/*  Takeaway 2  */}
<div className="bg-surface-container-low border border-white/5 p-6 flex gap-6 hover:border-[#D32F2F]/50 transition-colors group opacity-0 animate-fade-in-blur" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
<div className="text-[#D32F2F] font-black font-headline text-2xl group-hover:animate-pulse">02</div>
<div>
<h4 className="font-headline font-bold text-white uppercase text-lg mb-1 tracking-tight">Plan for wipers and ransomware</h4>
<p className="font-body text-sm text-on-surface-variant">Resilient, tested backups and recovery procedures are non-negotiable.</p>
</div>
</div>
{/*  Takeaway 3  */}
<div className="bg-surface-container-low border border-white/5 p-6 flex gap-6 hover:border-[#D32F2F]/50 transition-colors group opacity-0 animate-fade-in-blur" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
<div className="text-[#D32F2F] font-black font-headline text-2xl group-hover:animate-pulse">03</div>
<div>
<h4 className="font-headline font-bold text-white uppercase text-lg mb-1 tracking-tight">Monitor east–west traffic</h4>
<p className="font-body text-sm text-on-surface-variant">Detecting lateral movement early can prevent catastrophic damage.</p>
</div>
</div>
{/*  Takeaway 4  */}
<div className="bg-surface-container-low border border-white/5 p-6 flex gap-6 hover:border-[#D32F2F]/50 transition-colors group opacity-0 animate-fade-in-blur" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
<div className="text-[#D32F2F] font-black font-headline text-2xl group-hover:animate-pulse">04</div>
<div>
<h4 className="font-headline font-bold text-white uppercase text-lg mb-1 tracking-tight">Integrate cyber into governance</h4>
<p className="font-body text-sm text-on-surface-variant">Boards must own cyber risk and ensure cross-functional preparedness.</p>
</div>
</div>
{/*  Takeaway 5  */}
<div className="bg-[#D32F2F]/10 border border-[#D32F2F]/30 p-6 flex gap-6 hover:bg-[#D32F2F]/20 transition-colors group opacity-0 animate-fade-in-blur" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
<div className="text-[#D32F2F] font-black font-headline text-2xl group-hover:animate-pulse">05</div>
<div>
<h4 className="font-headline font-bold text-[#D32F2F] uppercase text-lg mb-1 tracking-tight">Treat information as toxic when leaked</h4>
<p className="font-body text-sm text-on-surface-variant">Legal, ethical, and reputational implications of data exposure demand careful, principled responses.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Terminal Ticker Tape (Custom Component)  */}
<div className="fixed bottom-12 left-0 right-0  bg-[#D32F2F]/5 py-3 border-y border-[#D32F2F]/10 z-20">
<div className="flex whitespace-nowrap animate-marquee gap-8">
<span className="text-[10px] font-headline text-[#D32F2F] uppercase tracking-[0.3em]">END_OF_TRANSMISSION // THIS WAS NOT JUST A HACK. IT WAS A MESSAGE. // [SYSTEM_STATUS: OFFLINE] // END_OF_TRANSMISSION // THIS WAS NOT JUST A HACK. IT WAS A MESSAGE. // [SYSTEM_STATUS: OFFLINE] // </span>
<span className="text-[10px] font-headline text-[#D32F2F] uppercase tracking-[0.3em]">END_OF_TRANSMISSION // THIS WAS NOT JUST A HACK. IT WAS A MESSAGE. // [SYSTEM_STATUS: OFFLINE] // END_OF_TRANSMISSION // THIS WAS NOT JUST A HACK. IT WAS A MESSAGE. // [SYSTEM_STATUS: OFFLINE] // </span>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-8 py-2 bg-[#0A0A0A]/80 backdrop-blur-md border-t border-[#D32F2F]/15">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-xs text-[#D32F2F]" data-icon="lock">lock</span>
<span className="font-['Inter'] text-[10px] uppercase tracking-widest text-white/30">CONFIDENTIAL // CLASSIFIED INTEL</span>
</div>
<div className="flex gap-8">
<a className="font-['Inter'] text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-opacity" href="#">TIMELINE</a>
<a className="font-['Inter'] text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-opacity" href="#">SOURCES</a>
<a className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#D32F2F]" href="#">RECOVERY</a>
</div>
<div className="flex items-center gap-4">
<span className="text-[10px] font-['Inter'] text-white/30">v4.0.2_BETA</span>
<div className="w-2 h-2 bg-[#D32F2F] rounded-full animate-pulse"></div>
</div>
</footer>
{/*  Decorative Corner Accents  */}
<div className="fixed top-24 right-6 pointer-events-none text-right z-30">
<p className="font-headline text-[10px] text-white/20 uppercase tracking-[0.5em] rotate-90 origin-right">CLASSIFIED_FILE_X09</p>
</div>

        </motion.div>
    );
}
