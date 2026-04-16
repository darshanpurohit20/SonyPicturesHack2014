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
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 ml-64 mt-8 xl:mt-16 p-12 overflow-y-auto no-scrollbar relative flex flex-col justify-center">
{/*  Background Elements  */}
<div className="absolute inset-0 z-0  pointer-events-none opacity-20">
<div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#D32F2F]/20 rotate-45"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-tertiary/20 -rotate-12"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#D32F2F]/30 to-transparent"></div>
</div>
<div className="max-w-5xl mx-auto w-full grid grid-cols-12 gap-12 items-end z-10">
{/*  Left Side: Title & Primary CTA  */}
<div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
<div className="flex items-center gap-4 mb-4">
<div className="h-[2px] w-12 bg-[#D32F2F]"></div>
<span className="font-headline text-xs tracking-[0.4em] text-[#D32F2F] uppercase">System Exit Protocol</span>
</div>
<h1 className="font-headline text-7xl md:text-[8vw] xl:text-[7vw] font-black tracking-tighter uppercase leading-none glitch-effect" data-text="ANY QUESTIONS?">
                    ANY <span className="text-[#D32F2F] italic">QUESTIONS</span>?
                </h1>
<div className="mt-8 flex flex-wrap gap-8 items-center border-l-4 border-[#D32F2F] pl-8 py-4">
<p className="font-body text-xl text-on-surface max-w-xl leading-relaxed">
                        Thank you for your time. The briefing has concluded. We are now open for critical discourse on intelligence findings.
                    </p>
</div>
</div>
{/*  Right Side: Secondary Info/Bento Style  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
{/*  Discussion Topics Module  */}
<div className="bg-surface-container-high border border-outline-variant p-6 space-y-4 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
<div className="flex justify-between items-center border-b border-outline-variant pb-2">
<span className="text-[10px] font-headline font-bold text-[#D32F2F] uppercase tracking-widest">TOPICS_FOR_DISCUSSION</span>
<span className="material-symbols-outlined text-xs text-white/40" data-icon="forum">forum</span>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 group reveal-item delay-1">
<span className="text-[#D32F2F] font-headline text-sm font-bold mt-1">01</span>
<span className="text-sm font-body text-white/80 group-hover:text-[#D32F2F] transition-colors cursor-default">Attribution &amp; Geopolitical Alignment</span>
</li>
<li className="flex items-start gap-3 group reveal-item delay-2">
<span className="text-[#D32F2F] font-headline text-sm font-bold mt-1">02</span>
<span className="text-sm font-body text-white/80 group-hover:text-[#D32F2F] transition-colors cursor-default">Evolution of Wiper-Class Payloads</span>
</li>
<li className="flex items-start gap-3 group reveal-item delay-3">
<span className="text-[#D32F2F] font-headline text-sm font-bold mt-1">03</span>
<span className="text-sm font-body text-white/80 group-hover:text-[#D32F2F] transition-colors cursor-default">Corporate Duty of Care &amp; Liability</span>
</li>
</ul>
</div>
{/*  Forensic Logo Module  */}
<div className="bg-surface-container-lowest p-8 flex flex-col items-center justify-center border border-outline-variant/30 text-center relative ">
<div className="absolute inset-0 opacity-10 flex items-center justify-center">
<span className="material-symbols-outlined text-[120px]" data-icon="gpp_maybe">gpp_maybe</span>
</div>
<div className="relative z-10">
<span className="material-symbols-outlined text-5xl text-[#D32F2F] mb-4 pulse-glow" data-icon="emergency_home">emergency_home</span>
<h3 className="font-headline font-black text-xl uppercase tracking-tighter text-white">ZERO_DAY_PROTOCOL</h3>
<p className="text-[10px] font-label text-white/30 uppercase mt-2 tracking-widest">EST. 2014 // CASE_ID: GOP_DESTRUCTION</p>
</div>
</div>
</div>
</div>
{/*  Terminal Ticker Tape (Custom Component)  */}
<div className="absolute bottom-16 left-0 right-0  bg-[#D32F2F]/5 py-3 border-y border-[#D32F2F]/10">
<div className="flex whitespace-nowrap animate-marquee gap-8">
<span className="text-[10px] font-headline text-[#D32F2F] uppercase tracking-[0.3em]">END_OF_TRANSMISSION // STANDBY FOR USER_INPUT // SECURE_CHANNEL_TERMINATING // [SYSTEM_STATUS: IDLE] // END_OF_TRANSMISSION // STANDBY FOR USER_INPUT // SECURE_CHANNEL_TERMINATING // [SYSTEM_STATUS: IDLE] // </span>
<span className="text-[10px] font-headline text-[#D32F2F] uppercase tracking-[0.3em]">END_OF_TRANSMISSION // STANDBY FOR USER_INPUT // SECURE_CHANNEL_TERMINATING // [SYSTEM_STATUS: IDLE] // END_OF_TRANSMISSION // STANDBY FOR USER_INPUT // SECURE_CHANNEL_TERMINATING // [SYSTEM_STATUS: IDLE] // </span>
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
