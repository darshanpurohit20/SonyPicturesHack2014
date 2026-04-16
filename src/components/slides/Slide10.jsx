import React from 'react';
import { motion } from 'framer-motion';

export default function Slide10() {
    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.98, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -50 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        
            className="relative w-full min-h-screen bg-black"
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
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#111111] dark:bg-[#111111] border-b border-[#D32F2F]/15">
<span className="text-xl font-black tracking-[-0.02em] text-[#D32F2F] font-headline uppercase">SONY_HACK.INTEL</span>
</header>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-[#111111] dark:bg-[#111111] w-64 border-r border-[#D32F2F]/15 pt-10 xl:pt-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
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
<h1 className="font-headline text-7xl md:text-[8vw] xl:text-[7vw] font-black tracking-tighter uppercase leading-none" data-text="THANK YOU">
                    THANK <span className="text-[#D32F2F] italic">YOU</span>
                </h1>
<div className="mt-8 flex flex-wrap gap-8 items-center border-l-4 border-[#D32F2F] pl-8 py-4">
<p className="font-body text-xl text-on-surface max-w-xl leading-relaxed">
                        Thank you for your time. The briefing has concluded. We are now open for critical discourse on intelligence findings.
                    </p>
</div>
</div>
{/*  Right Side: Thank You Message  */}
<div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
<div className="bg-[#111111] border border-[#D32F2F]/20 p-8 relative">
<div className="absolute -top-2 -left-2 w-full h-full border border-[#D32F2F]/10"></div>
<div className="relative z-10 text-center">
<span className="material-symbols-outlined text-4xl text-[#D32F2F] mb-4 block" data-icon="check_circle">check_circle</span>
<p className="text-sm font-body text-white/70 leading-relaxed">
                            Briefing complete. All intelligence files have been processed and transmitted.
                        </p>
<div className="mt-6 pt-6 border-t border-white/10">
<span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">END_OF_TRANSMISSION</span>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  Decorative Corner Accents  */}
<div className="fixed top-24 right-6 pointer-events-none text-right z-30">
<p className="font-headline text-[10px] text-white/20 uppercase tracking-[0.5em] rotate-90 origin-right">CLASSIFIED_FILE_X09</p>
</div>

        </motion.div>
    );
}
