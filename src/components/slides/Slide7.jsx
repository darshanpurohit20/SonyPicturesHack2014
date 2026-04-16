import React from 'react';
import { motion } from 'framer-motion';

export default function Slide7() {
    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.98, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -50 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        
            className="relative w-full min-h-screen"
        >
            
<div className="fixed inset-0 digital-noise z-[9999]"></div>
{/*  TopAppBar Shell  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0A0A0A] dark:bg-[#0A0A0A] border-b border-[#D32F2F]/15">
<div className="text-xl font-black tracking-[-0.02em] text-[#D32F2F] font-headline uppercase">
            SONY_HACK.INTEL
        </div>
</header>
{/*  SideNavBar Shell  */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-[#0A0A0A] dark:bg-[#0A0A0A] w-64 border-r border-[#D32F2F]/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pt-10 xl:pt-20">
<div className="px-6 py-4 mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-sm">security</span>
</div>
<div>
<div className="text-lg font-bold text-white font-headline">OPERATIONS</div>
<div className="text-[10px] text-primary/80 font-mono tracking-widest">LIVE_TRACING_ON</div>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<div className="bg-[#D32F2F] text-white font-bold px-4 py-3 flex items-center gap-3 font-headline text-xs">
<span className="material-symbols-outlined text-base">skull</span>
<span>THREAT_ACTOR</span>
</div>
<div className="text-white/40 hover:text-white/80 hover:bg-white/5 px-4 py-3 flex items-center gap-3 font-headline text-xs transition-colors">
<span className="material-symbols-outlined text-base">anchor</span>
<span>PHISHING</span>
</div>
<div className="text-white/40 hover:text-white/80 hover:bg-white/5 px-4 py-3 flex items-center gap-3 font-headline text-xs transition-colors">
<span className="material-symbols-outlined text-base">network_check</span>
<span>NETWORK</span>
</div>
<div className="text-white/40 hover:text-white/80 hover:bg-white/5 px-4 py-3 flex items-center gap-3 font-headline text-xs transition-colors">
<span className="material-symbols-outlined text-base">dns</span>
<span>SERVER</span>
</div>
<div className="text-white/40 hover:text-white/80 hover:bg-white/5 px-4 py-3 flex items-center gap-3 font-headline text-xs transition-colors">
<span className="material-symbols-outlined text-base">public</span>
<span>GLOBAL</span>
</div>
</nav>

</aside>
{/*  Main Content Canvas  */}
<main className="pl-64 pt-10 xl:pt-20 pb-16 min-h-screen">
<div className="max-w-7xl mx-auto px-12 py-12">
{/*  Hero Title Section  */}
<div className="mb-8 xl:mb-16">
<div className="inline-block bg-secondary-container px-3 py-1 mb-4">
<span className="text-[10px] font-mono font-bold text-on-secondary-container tracking-[0.2em] uppercase">Phase 04 // Counter-Intelligence</span>
</div>
<h1 className="font-headline text-8xl font-extrabold tracking-tighter text-on-surface uppercase leading-[0.85]">
                    STRIKING <br/> <span className="text-primary">BACK</span>
</h1>
</div>
{/*  Bento Grid Intelligence Layout  */}
<div className="grid grid-cols-12 gap-6">
{/*  Main Investigation Module  */}
<div className="col-span-12 lg:col-span-7 bg-surface-container-low p-8 relative  group">
<div className="absolute top-0 right-0 w-32 h-32 opacity-10">
<span className="material-symbols-outlined text-[120px] text-primary translate-x-12 -translate-y-12">policy</span>
</div>
<div className="flex items-start justify-between mb-12">
<div>
<span className="text-[10px] font-mono text-primary uppercase tracking-widest block mb-1">Status: active_response</span>
<h2 className="font-headline text-3xl font-bold text-white uppercase tracking-tight">Forensic Investigation</h2>
</div>
<span className="material-symbols-outlined text-primary">search_insights</span>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-none w-px bg-primary h-auto"></div>
<div>
<p className="text-xl text-on-surface leading-relaxed font-light italic">
                                    "FBI &amp; Mandiant lead a massive forensic investigation into the digital ruins."
                                </p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="bg-surface-container-high p-4 border-l-2 border-primary">
<span className="text-[10px] font-mono text-white/40 uppercase block">Agency_Primary</span>
<span className="font-headline text-white font-bold text-lg">FEDERAL BUREAU</span>
</div>
<div className="bg-surface-container-high p-4 border-l-2 border-tertiary">
<span className="text-[10px] font-mono text-white/40 uppercase block">Private_Sector</span>
<span className="font-headline text-white font-bold text-lg">MANDIANT.SEC</span>
</div>
</div>
</div>
</div>
{/*  Classified Visual Module  */}
<div className="col-span-12 lg:col-span-5 bg-surface-container-highest flex items-center justify-center p-0 relative min-h-[400px]">
<img className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40" data-alt="Close-up of a weathered manila folder stamped CLASSIFIED with digital red glowing fingerprint scans superimposed on the texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXzCgqghh8IY59afygXQvWqW3BjG53ON6Cg4wPMGctW8H9_5xwAnPPF3ZkCD4XqvZG83zHhkI-e4HdMOPLPDE9dDD4U3iE7D8ohIEs3Fk0HLoQyFHyP50wgArO8TMx92BVpHtmu5A9bzjpDWRuxZ0B1MlwhILwybZSdXAo5Zv3UEP3sVYWIY1kSr6j9meW5t3yHmC0Mw_hF2sc_w4-CEwmQpvm5m_fS6qvEDI7N-qUCfQnl5YSNBAjPTjZCz2gSkgfsNUBHo8t7Zc"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
<div className="relative z-10 text-center px-12">
<div className="inline-block border border-primary/40 px-4 py-1 mb-4 backdrop-blur-md">
<span className="text-[10px] font-headline text-primary tracking-[0.3em] font-bold">EVIDENCE_LOG_409</span>
</div>
<p className="text-white font-headline text-lg tracking-tight uppercase font-medium">U.S. DOJ charges state-linked hackers with multiple counts of espionage</p>
</div>
</div>
{/*  Operational Impact Ticker  */}
<div className="col-span-12 md:col-span-6 bg-surface-container-high p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary text-xl" data-weight="fill">description</span>
<span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">Analog Fallback Protocol</span>
</div>
<h3 className="font-headline text-2xl font-bold text-white mb-4 uppercase">FAX AND PAPER OPS</h3>
<p className="text-on-surface/80 text-sm leading-relaxed mb-6">
                            For weeks, one of the world's most advanced media conglomerates was forced to operate like a 1970s accounting firm. Payroll, communications, and logistical planning moved to fax machines and handwritten ledgers.
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="flex-1 h-[1px] bg-white/10"></div>
<span className="text-[10px] font-mono text-primary">RECOVERY_TIME: 21_DAYS</span>
</div>
</div>
{/*  DOJ Alert Card  */}
<div className="col-span-12 md:col-span-6 bg-primary-container p-8 relative ">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div className="relative z-10">
<span className="material-symbols-outlined text-white text-5xl mb-6">gavel</span>
<h3 className="font-headline text-3xl font-black text-white leading-tight uppercase mb-4 italic">CRIMINAL INDICTMENTS</h3>
<p className="text-white/90 font-medium mb-8">Official charges filed against state-linked actors for massive exfiltration of corporate data and destructive malware deployment.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-white/20 px-3 py-1 text-[10px] font-headline font-bold text-white uppercase">Conspiracy</span>
<span className="bg-white/20 px-3 py-1 text-[10px] font-headline font-bold text-white uppercase">Wire Fraud</span>
<span className="bg-white/20 px-3 py-1 text-[10px] font-headline font-bold text-white uppercase">Computer Fraud</span>
</div>
</div>
</div>
</div>
{/*  Footer Meta Text  */}
<div className="mt-10 xl:mt-20 flex justify-between items-end border-t border-white/5 pt-8">
<div className="max-w-md">
<span className="text-[10px] font-mono text-primary uppercase block mb-2 tracking-[0.2em]">Forensic Conclusion</span>
<p className="text-xs text-white/40 leading-relaxed uppercase">The response marked a turning point in international cyber policy, blending traditional law enforcement with elite cyber forensics to attribute the attack to state entities.</p>
</div>
<div className="font-headline font-black text-4xl text-white/10 tracking-tighter uppercase select-none">
                    INVESTIGATION_07
                </div>
</div>
</div>
</main>
{/*  Footer Shell  */}
<footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-8 py-2 bg-[#0A0A0A]/80 backdrop-blur-md border-t border-[#D32F2F]/15 font-['Inter'] text-[10px] uppercase tracking-widest">
<div className="text-white/30 italic">CONFIDENTIAL // CLASSIFIED INTEL</div>
<div className="flex gap-8">
<a className="text-white/30 hover:text-white transition-opacity" href="#">TIMELINE</a>
<a className="text-white/30 hover:text-white transition-opacity" href="#">SOURCES</a>
<a className="text-[#D32F2F]" href="#">RECOVERY</a>
</div>
<div className="text-primary font-mono">NODE_7_SECURED</div>
</footer>

        </motion.div>
    );
}
