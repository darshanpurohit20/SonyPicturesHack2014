import React from 'react';
import { motion } from 'framer-motion';

export default function Slide6() {
    return (
        <motion.div

            initial={{ opacity: 0, filter: 'blur(10px)', skewX: '20deg', scale: 1.1 }}
            animate={{ opacity: 1, filter: 'blur(0px)', skewX: '0deg', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', x: -100, scale: 0.9 }}
            transition={{ duration: 0.2, type: 'spring', bounce: 0.5 }}
        
            className="relative w-full min-h-screen bg-black"
        >
            
{/*  Moving Particle Background Container and only */}
<div className="fixed inset-0 z-0  pointer-events-none">
<div className="absolute inset-0 bg-[#111111]"></div>
<div className="particle w-1 h-1 top-[10%] left-[20%] animate-particle-move"></div>
<div className="particle w-[2px] h-[2px] top-[30%] left-[80%] animate-particle-move" style={{ animationDelay: '-5s' }}></div>
<div className="particle w-1 h-1 top-[70%] left-[40%] animate-particle-move" style={{ animationDelay: '-12s' }}></div>
<div className="particle w-[2px] h-[2px] top-[85%] left-[15%] animate-particle-move" style={{ animationDelay: '-8s' }}></div>
<div className="particle w-1 h-1 top-[50%] left-[60%] animate-particle-move" style={{ animationDelay: '-3s' }}></div>
</div>
{/*  TOP APP BAR  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#111111] border-b border-[#D32F2F]/15 font-['Space_Grotesk'] tracking-tighter uppercase font-bold">
<div className="text-xl font-black tracking-[-0.02em] text-[#D32F2F]">SONY_HACK.INTEL</div>
</header>
{/*  SIDE NAV BAR  */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-[#111111] border-r border-[#D32F2F]/15 w-64 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<div className="p-6 pt-24">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-[#D32F2F]">analytics</span>
</div>
<div>
<div className="text-lg font-bold text-white leading-none font-headline">OPERATIONS</div>
<div className="text-[10px] text-[#D32F2F] font-mono animate-pulse">LIVE_TRACING_ON</div>
</div>
</div>
<nav className="flex flex-col gap-1">
<div className="flex items-center gap-3 text-white/40 hover:text-white/80 px-4 py-3 font-['Space_Grotesk'] text-xs font-medium cursor-pointer transition-all duration-75 group">
<span className="material-symbols-outlined text-lg">skull</span>
<span>THREAT_ACTOR</span>
</div>
<div className="flex items-center gap-3 text-white/40 hover:text-white/80 px-4 py-3 font-['Space_Grotesk'] text-xs font-medium cursor-pointer transition-all duration-75">
<span className="material-symbols-outlined text-lg">anchor</span>
<span>PHISHING</span>
</div>
<div className="flex items-center gap-3 text-white/40 hover:text-white/80 px-4 py-3 font-['Space_Grotesk'] text-xs font-medium cursor-pointer transition-all duration-75">
<span className="material-symbols-outlined text-lg">network_check</span>
<span>NETWORK</span>
</div>
<div className="flex items-center gap-3 text-white/40 hover:text-white/80 px-4 py-3 font-['Space_Grotesk'] text-xs font-medium cursor-pointer transition-all duration-75">
<span className="material-symbols-outlined text-lg">dns</span>
<span>SERVER</span>
</div>
<div className="flex items-center gap-3 bg-[#D32F2F] text-white font-bold px-4 py-3 font-['Space_Grotesk'] text-xs cursor-pointer">
<span className="material-symbols-outlined text-lg">public</span>
<span>GLOBAL</span>
</div>
</nav>
</div>

</aside>
{/*  MAIN CANVAS  */}
<main className="ml-64 pt-10 xl:pt-20 pb-6 xl:pb-12 min-h-screen relative ">
{/*  Background Asset  */}
<div className="absolute inset-0 z-0 ">
<div className="absolute inset-0 bg-[#131313] opacity-80"></div>
<img className="w-full h-full object-cover mix-blend-overlay grayscale opacity-40" data-alt="Abstract digital background with glowing red binary code streaming over dark server rack shapes, grainy film texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwQUL_SGcXDnQarJqVZUeCfUftm5B4Z-24XnlMvCqdBuzUH-YbFjIKDL5_ypNVvmtCjAYGGMY_Ede8dy6XKDkusS-1XRNUF75ir1HO4BMI3ez2Sht0QS8R8fhHdkRsyEoa2rVE9Wt6mfNu5FbGK0RteawrQRAww9KFsfzSNL2nTbIWHKKV6YFNNpfzS2sHManZTTiRtF_aQWSP2JrkQ_fuWeXsAiOjMj-_17iI_1wEhV1syrU0Be263-Z95IsWa8ht_ksbS-ecWRY"/>
<div className="grain-overlay absolute inset-0"></div>
</div>
<div className="relative z-10 px-12 py-8">
{/*  Header Section  */}
<div className="mb-8 xl:mb-16">
<div className="flex items-center gap-4 mb-2">
<span className="h-px w-12 bg-[#D32F2F]"></span>
<span className="text-[#D32F2F] font-mono text-xs tracking-widest uppercase">Investigation Phase 06</span>
</div>
<h1 className="text-8xl font-black font-headline tracking-tighter text-white uppercase mb-4 leading-[0.8] animate-glitch-in">
                THE <span className="text-[#D32F2F]">FALLOUT</span>
</h1>
<div className="flex items-center gap-6">
<p className="text-on-surface-variant max-w-xl font-light text-lg border-l-2 border-[#D32F2F] pl-6 py-2 animate-reveal-up reveal-delay-1">
                    System-wide compromise has transitioned from digital breach to real-world devastation. Intelligence analysis indicates irreversible kinetic and brand damage.
                </p>
<div className="bg-error-container/20 border border-error/30 p-4 inline-flex flex-col gap-1 max-w-[240px] animate-reveal-up reveal-delay-2">
<div className="flex items-center gap-2 text-error font-bold text-xs tracking-widest uppercase animate-flicker">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>warning</span>
                        Critical Irreversible Damage
                    </div>
<div className="text-[10px] text-error/60 font-mono">ENCRYPTION_STATUS: TERMINATED</div>
</div>
</div>
</div>
{/*  Bento Grid Impact Analysis  */}
<div className="grid grid-cols-12 gap-px bg-[#D32F2F]/15 border border-[#D32F2F]/15">
{/*  Category: EMPLOYEES  */}
<div className="col-span-12 md:col-span-6 lg:col-span-3 bg-surface-container-lowest p-8 flex flex-col gap-12 group transition-all duration-300 hover:bg-[#D32F2F]/5 animate-reveal-up reveal-delay-1 relative  scanline-effect">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl text-[#D32F2F] group-hover:animate-pulse" style={{ fontVariationSettings: '\'FILL\' 1' }}>badge</span>
<div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">NODE_01</div>
</div>
<div>
<h3 className="text-2xl font-bold font-headline text-white mb-4 uppercase tracking-tighter group-hover:text-[#D32F2F]">Employees</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-sm text-[#D32F2F] mt-1">close</span>
<p className="text-xs text-on-surface-variant uppercase tracking-wide leading-relaxed">Personal financial records and SSNs exfiltrated and published.</p>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-sm text-[#D32F2F] mt-1">close</span>
<p className="text-xs text-on-surface-variant uppercase tracking-wide leading-relaxed">Internal toxic culture memos leaked, sparking mass resignations.</p>
</div>
</div>
</div>
</div>
{/*  Category: CORPORATE  */}
<div className="col-span-12 md:col-span-6 lg:col-span-3 bg-surface-container-lowest p-8 flex flex-col gap-12 group transition-all duration-300 hover:bg-[#D32F2F]/5 animate-reveal-up reveal-delay-2 relative  scanline-effect">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl text-[#D32F2F] group-hover:animate-pulse" style={{ fontVariationSettings: '\'FILL\' 1' }}>business_center</span>
<div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">NODE_02</div>
</div>
<div>
<h3 className="text-2xl font-bold font-headline text-white mb-4 uppercase tracking-tighter group-hover:text-[#D32F2F]">Corporate</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-sm text-[#D32F2F] mt-1">close</span>
<p className="text-xs text-on-surface-variant uppercase tracking-wide leading-relaxed">$35M initial cleanup cost estimated within first 72 hours.</p>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-sm text-[#D32F2F] mt-1">close</span>
<p className="text-xs text-on-surface-variant uppercase tracking-wide leading-relaxed">Total infrastructure collapse: 100TB of internal data deleted.</p>
</div>
</div>
</div>
</div>
{/*  Category: MOVIES  */}
<div className="col-span-12 md:col-span-6 lg:col-span-3 bg-surface-container-lowest p-8 flex flex-col gap-12 group transition-all duration-300 hover:bg-[#D32F2F]/5 animate-reveal-up reveal-delay-3 relative  scanline-effect">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl text-[#D32F2F] group-hover:animate-pulse" style={{ fontVariationSettings: '\'FILL\' 1' }}>movie</span>
<div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">NODE_03</div>
</div>
<div>
<h3 className="text-2xl font-bold font-headline text-white mb-4 uppercase tracking-tighter group-hover:text-[#D32F2F]">Movies</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-sm text-[#D32F2F] mt-1">close</span>
<p className="text-xs text-on-surface-variant uppercase tracking-wide leading-relaxed">Five major unreleased film scripts leaked to public torrents.</p>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-sm text-[#D32F2F] mt-1">close</span>
<p className="text-xs text-on-surface-variant uppercase tracking-wide leading-relaxed">Distribution partner contracts exposed, causing legal gridlock.</p>
</div>
</div>
</div>
</div>
{/*  Category: GEOPOLITICS  */}
<div className="col-span-12 md:col-span-6 lg:col-span-3 bg-surface-container-lowest p-8 flex flex-col gap-12 group transition-all duration-300 hover:bg-[#D32F2F]/5 animate-reveal-up reveal-delay-4 relative  scanline-effect">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl text-[#D32F2F] group-hover:animate-pulse" style={{ fontVariationSettings: '\'FILL\' 1' }}>language</span>
<div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">NODE_04</div>
</div>
<div>
<h3 className="text-2xl font-bold font-headline text-white mb-4 uppercase tracking-tighter group-hover:text-[#D32F2F]">Geopolitics</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-sm text-[#D32F2F] mt-1">close</span>
<p className="text-xs text-on-surface-variant uppercase tracking-wide leading-relaxed">Diplomatic crisis ignited between US and North Korean agencies.</p>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-sm text-[#D32F2F] mt-1">close</span>
<p className="text-xs text-on-surface-variant uppercase tracking-wide leading-relaxed">Sanctions escalated against identified threat-actor nations.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Visual Evidence Section  */}
<div className="mt-px grid grid-cols-12 gap-px bg-[#D32F2F]/15 border border-[#D32F2F]/15 border-t-0">
<div className="col-span-12 lg:col-span-8 p-12 bg-surface-container-lowest  relative group">
<div className="absolute top-4 right-4 z-20 flex gap-2">
<div className="bg-[#D32F2F] px-2 py-1 text-[8px] font-bold uppercase tracking-tighter">Live Capture</div>
<div className="bg-white/10 px-2 py-1 text-[8px] font-bold uppercase tracking-tighter">Cam_ID: 9942</div>
</div>
<img className="w-full h-[400px] object-cover opacity-60 filter grayscale contrast-150 transition-all duration-700 group-hover:scale-105" data-alt="Interior of a massive server room with glowing red emergency lights reflecting on metallic surfaces, heavy contrast, forensic aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW1cQPmfotthVayrwYqaQ-0YRLU9u-YFBSevhw3pI_7tih-JEnnCN7kI5hmei0d69-4-iNXZn_ddnTZk1X6uFW1lgeS4nJHGcKtK_l3eaYk6O96O4yhmRdDPvek-3k1WtjQ2OwMHh3IakLK_pEvhLP0mE1qWu3QzdSuq9psXXMequC-KyXSB_ynOFHjsbLNsv9ZiaaonbEQMD8WDmKP4V7W671EcxDnh4FPaEaxDxxHYyxoFDbu_Z6gXtROzrp6EUAC3DWONZIEhw"/>
<div className="absolute bottom-12 left-12 right-12">
<div className="bg-[#111111]/90 p-6 backdrop-blur-md border-l-4 border-[#D32F2F]">
<div className="flex justify-between items-center mb-2">
<h4 className="text-white font-bold tracking-widest uppercase text-sm font-headline">Server Room Alpha // Physical Lockdown</h4>
<span className="text-[#D32F2F] font-mono text-[10px] animate-flicker">AUTH_FAILED</span>
</div>
<p className="text-white/40 text-[10px] font-mono leading-relaxed">
                            CRITICAL: Physical access control systems compromised at Culver City HQ. All server racks initiated automated wipe protocols upon detection of foreign IP injection.
                        </p>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-12 flex flex-col justify-center animate-reveal-up reveal-delay-4">
<div className="space-y-8">
<div>
<div className="text-[10px] text-[#D32F2F] font-mono mb-2">METRIC_IMPACT_RATING</div>
<div className="text-6xl font-black text-white font-headline tracking-tighter leading-none flex items-baseline">
<span id="impact-rating-value">9.8</span>
<span className="text-xl text-white/20 ml-1">/10</span>
</div>
</div>
<div className="space-y-6">
<div className="flex flex-col gap-2">
<div className="flex justify-between text-[10px] uppercase tracking-widest text-white/60">
<span>Financial Remediation Estimate</span>
<span className="text-[#D32F2F]">$100M+</span>
</div>
<div className="h-1 bg-white/5 w-full">
<div className="h-full bg-[#D32F2F] transition-all duration-[2000ms] ease-out w-[85%]" id="stat-bar-1"></div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between text-[10px] uppercase tracking-widest text-white/60">
<span>Infrastructure Wiped</span>
<span className="text-[#D32F2F] font-bold">~ 3,200 Nodes</span>
</div>
<div className="h-1 bg-white/5 w-full">
<div className="h-full bg-[#D32F2F] transition-all duration-[2000ms] ease-out w-[60%]" id="stat-bar-2"></div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between text-[10px] uppercase tracking-widest text-white/60">
<span>Data Exfiltrated</span>
<span className="animate-flicker text-error font-bold">100 TB</span>
</div>
<div className="h-1 bg-white/5 w-full">
<div className="h-full bg-[#D32F2F] transition-all duration-[2000ms] ease-out w-[100%]" id="stat-bar-3"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  FOOTER  */}
<footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-8 py-2 bg-[#111111]/80 backdrop-blur-md border-t border-[#D32F2F]/15 font-['Inter'] text-[10px] uppercase tracking-widest">
<div className="text-white/30">CONFIDENTIAL // CLASSIFIED INTEL</div>
<div className="flex gap-8">
<a className="text-white/30 hover:text-white transition-opacity" href="#">TIMELINE</a>
<a className="text-white/30 hover:text-white transition-opacity" href="#">SOURCES</a>
<a className="text-white/30 hover:text-white transition-opacity" href="#">RECOVERY</a>
</div>
<div className="text-[#D32F2F] font-mono animate-pulse">04:22:11 // UTC-5</div>
</footer>
{/*  Terminal Overlay Decor  */}
<div className="fixed top-24 right-12 z-20 pointer-events-none opacity-30 text-white/20 font-mono text-[8px] space-y-1">
<p>sys_log: breach detected</p>
<p>ip_src: 192.168.0.104</p>
<p>packet_loss: 0%</p>
<p>exfiltration_status: COMPLETE</p>
<p>-------------------------</p>
<p>Wiping sector 0x822...</p>
<p>Wiping sector 0x823...</p>
<p>Wiping sector 0x824...</p>
</div>


        </motion.div>
    );
}
