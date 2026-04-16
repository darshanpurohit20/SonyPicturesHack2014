import React from 'react';
import { motion } from 'framer-motion';

export default function Slide3() {
    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.98, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        
            className="relative w-full min-h-screen"
        >
            
<div className="grain-overlay"></div>
<div className="system-scan-line animate-scan"></div>
<div className="cyber-grid animate-pulse-grid"></div>
<div className="terminal-background animate-terminal-scroll" id="terminal-text"></div>
<div className="particle-bg" id="particle-container"></div>
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#D32F2F]/20">
<div className="text-xl font-black tracking-[-0.02em] text-[#D32F2F] font-headline uppercase">SONY_HACK.INTEL</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-headline tracking-tighter uppercase font-bold text-white/60 hover:text-[#D32F2F] hover:bg-white/5 transition-colors duration-75 text-sm" href="#">INTEL</a>
<a className="font-headline tracking-tighter uppercase font-bold text-white/60 hover:text-[#D32F2F] hover:bg-white/5 transition-colors duration-75 text-sm" href="#">BREACH</a>
<a className="font-headline tracking-tighter uppercase font-bold text-[#D32F2F] border-b-2 border-[#D32F2F] pb-1 text-sm" href="#">EXFIL</a>
<a className="font-headline tracking-tighter uppercase font-bold text-white/60 hover:text-[#D32F2F] hover:bg-white/5 transition-colors duration-75 text-sm" href="#">IMPACT</a>
</nav>
<div className="font-headline tracking-tighter uppercase font-bold text-[#D32F2F] text-xs px-3 py-1 border border-[#D32F2F]/30 bg-[#D32F2F]/5">
            SCENE 03 // THE TRIPLE THREAT
        </div>
</header>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-[#0A0A0A]/95 backdrop-blur-sm border-r border-[#D32F2F]/20 w-64 hidden lg:flex shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
<div className="p-8 pt-24">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-surface-container-high flex items-center justify-center border border-outline-variant/30">
<span className="material-symbols-outlined text-[#D32F2F]">shield_person</span>
</div>
<div>
<div className="text-lg font-bold text-white font-headline">OPERATIONS</div>
<div className="text-[10px] text-[#D32F2F] font-mono tracking-widest animate-pulse">LIVE_TRACING_ON</div>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 font-headline text-xs font-medium text-white/40 hover:text-white/80 px-4 py-3 hover:bg-white/5 transition-all" href="#">
<span className="material-symbols-outlined text-sm">skull</span> THREAT_ACTOR
                </a>
<a className="flex items-center gap-3 font-headline text-xs font-medium text-white/40 hover:text-white/80 px-4 py-3 hover:bg-white/5 transition-all" href="#">
<span className="material-symbols-outlined text-sm">anchor</span> PHISHING
                </a>
<a className="flex items-center gap-3 font-headline text-xs font-medium bg-[#D32F2F] text-white font-bold px-4 py-3" href="#">
<span className="material-symbols-outlined text-sm">network_check</span> NETWORK
                </a>
<a className="flex items-center gap-3 font-headline text-xs font-medium text-white/40 hover:text-white/80 px-4 py-3 hover:bg-white/5 transition-all" href="#">
<span className="material-symbols-outlined text-sm">dns</span> SERVER
                </a>
<a className="flex items-center gap-3 font-headline text-xs font-medium text-white/40 hover:text-white/80 px-4 py-3 hover:bg-white/5 transition-all" href="#">
<span className="material-symbols-outlined text-sm">public</span> GLOBAL
                </a>
</nav>
</div>
<div className="mt-auto p-8">
<button className="w-full bg-[#D32F2F] text-white font-headline text-[10px] font-black uppercase py-4 tracking-tighter transition-all hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(211,47,47,0.3)]">
                DOWNLOAD EVIDENCE
            </button>
</div>
</aside>
{/*  Main Content  */}
<main className="lg:pl-64 pt-24 pb-16 min-h-screen px-6 md:px-12 relative z-10">
<div className="max-w-6xl mx-auto">
{/*  Header Section  */}
<div className="mb-12 border-l-4 border-[#D32F2F] pl-6 py-2 animate-reveal">
<span className="text-[#D32F2F] font-headline text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Background Analysis</span>
<h1 className="font-headline text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                    UNDERSTANDING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">THE ARSENAL</span>
</h1>
</div>
{/*  The Triple Threat Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/15  backdrop-blur-sm bg-black/40">
{/*  DATA BREACH  */}
<div className="stagger-reveal group relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-outline-variant/15 hover:bg-[#D32F2F]/5 transition-colors" style={{ animation: 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards', animationDelay: '0.2s' }}>
<div className="mb-10 transform group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-5xl text-[#D32F2F]" style={{ fontVariationSettings: '\'FILL\' 0' }}>lock_open</span>
</div>
<h3 className="font-headline text-2xl font-bold text-white mb-4 tracking-tight uppercase">DATA BREACH</h3>
<div className="space-y-4">
<div className="h-px w-12 bg-[#D32F2F]"></div>
<p className="text-on-surface-variant text-sm leading-relaxed">
                            Tens of gigabytes of sensitive data including internal emails, personal HR records, and unreleased films were exfiltrated.
                        </p>
<div className="bg-[#D32F2F]/10 p-4 font-mono text-[10px] text-[#D32F2F] border-l-2 border-[#D32F2F]">
                            STATUS: COMPROMISED // SIZE: 100GB+
                        </div>
</div>
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
<span className="font-headline font-black text-6xl">01</span>
</div>
</div>
{/*  WIPER MALWARE  */}
<div className="stagger-reveal group relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-outline-variant/15 hover:bg-[#D32F2F]/5 transition-colors" style={{ animation: 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards', animationDelay: '0.4s' }}>
<div className="mb-10 transform group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-5xl text-[#D32F2F]" style={{ fontVariationSettings: '\'FILL\' 0' }}>database_off</span>
</div>
<h3 className="font-headline text-2xl font-bold text-white mb-4 tracking-tight uppercase">WIPER MALWARE</h3>
<div className="space-y-4">
<div className="h-px w-12 bg-[#D32F2F]"></div>
<p className="text-on-surface-variant text-sm leading-relaxed">
                            The "Destover" malware variant was deployed, systematically erasing master boot records and rendering thousands of PCs unbootable.
                        </p>
<div className="bg-[#D32F2F]/10 p-4 font-mono text-[10px] text-[#D32F2F] border-l-2 border-[#D32F2F]">
                            VARIANT: BKDR_DESTOVER // IMPACT: FATAL
                        </div>
</div>
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
<span className="font-headline font-black text-6xl">02</span>
</div>
</div>
{/*  EXTORTION  */}
<div className="stagger-reveal group relative p-8 md:p-12 hover:bg-[#D32F2F]/5 transition-colors" style={{ animation: 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards', animationDelay: '0.6s' }}>
<div className="mb-10 transform group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-5xl text-[#D32F2F]" style={{ fontVariationSettings: '\'FILL\' 0' }}>mail</span>
</div>
<h3 className="font-headline text-2xl font-bold text-white mb-4 tracking-tight uppercase">EXTORTION</h3>
<div className="space-y-4">
<div className="h-px w-12 bg-[#D32F2F]"></div>
<p className="text-on-surface-variant text-sm leading-relaxed">
                            A psychological operations campaign featuring coercive threats aimed at Sony executives to halt the release of "The Interview".
                        </p>
<div className="bg-[#D32F2F]/10 p-4 font-mono text-[10px] text-[#D32F2F] border-l-2 border-[#D32F2F]">
                            MOTIVE: POLITICAL // INTENT: CENSORSHIP
                        </div>
</div>
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
<span className="font-headline font-black text-6xl">03</span>
</div>
</div>
</div>
{/*  Technical Logs / Ticker Tape  */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 animate-reveal" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
<div className="bg-[#0A0A0A]/80 backdrop-blur-md p-6 border-l border-[#D32F2F]">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse"></div>
<span className="text-[10px] font-headline font-bold text-white uppercase tracking-widest">Live Forensics Tape</span>
</div>
<div className="font-mono text-[11px] text-on-surface-variant space-y-1">
<div className="flex justify-between"><span>[2014-11-24 08:15:22]</span> <span className="text-primary">BREACH_DETECTED</span></div>
<div className="flex justify-between"><span>[2014-11-24 08:16:05]</span> <span>AUTH_OVERRIDE_ADMIN_ROOT</span></div>
<div className="flex justify-between"><span>[2014-11-24 08:18:44]</span> <span className="text-primary">WIPER_ROUTINE_INIT</span></div>
<div className="flex justify-between"><span>[2014-11-24 08:22:12]</span> <span>EXFIL_THREAD_01_ACTIVE</span></div>
</div>
</div>
<div className="relative h-full min-h-[160px]  bg-[#0A0A0A]/80 backdrop-blur-md">
<img alt="Cybersecurity node graph" className="w-full h-full object-cover opacity-20 grayscale contrast-150" data-alt="Abstract cinematic visualization of digital network data flowing through server nodes with high contrast red and dark grey lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT6ilT0ko0q5reJ1yNtRM25dK6mxrNYGERmj4xbzi-M0rYHY30KHRmiIblx1dLlL6sTj3U33MPNCagJZJqswaRBWAUeOIedqx40_sOnNJOgRZ6J_3NamiLdnygdcnJ2G4DxsoQGvynCJ4l0L3XtzLG0RztOdRA60F0bt9aXV4iS4yU4K8rocDYpRS8aLblw36WGWIF6Z8Oi3UuchnLlBc1OPOxP9k9uVNeTp2MH4ompX_ub4KZ-FEbJkb4q0U8dqjcsjCuesVkCyE"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] font-headline font-bold text-white bg-[#D32F2F] px-2 py-1">CLASSIFIED EVIDENCE</span>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-8 py-2 bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-[#D32F2F]/20">
<div className="font-headline font-bold text-[10px] tracking-widest text-[#D32F2F] animate-pulse">
            CONFIDENTIAL // CLASSIFIED INTEL
        </div>
<div className="flex gap-8">
<a className="font-label text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-opacity" href="#">TIMELINE</a>
<a className="font-label text-[10px] uppercase tracking-widest text-[#D32F2F]" href="#">SOURCES</a>
<a className="font-label text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-opacity" href="#">RECOVERY</a>
</div>
</footer>


        </motion.div>
    );
}
