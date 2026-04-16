import React from 'react';
import { motion } from 'framer-motion';

export default function Slide2() {
    return (
        <motion.div

            initial={{ opacity: 0, filter: 'blur(10px)', skewX: '20deg', scale: 1.1 }}
            animate={{ opacity: 1, filter: 'blur(0px)', skewX: '0deg', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', x: -100, scale: 0.9 }}
            transition={{ duration: 0.2, type: 'spring', bounce: 0.5 }}
        
            className="relative w-full min-h-screen"
        >
            
    {/*  Terminal Background Content  */}
    <div className="terminal-bg-text">
        0x401000: 55 89 E5 83 EC 18 C7 45 FC 00 00 00 00 EB 0F
        0x401010: 8B 45 FC 83 C0 01 89 45 FC 83 7D FC 09 7E EF
        INJECTING PAYLOAD: /usr/bin/wiper_v2.so
        ENCRYPTING VOLUME /dev/sda1...
        [CRITICAL] UNAUTHORIZED ACCESS DETECTED
        [SYSTEM] WIPING BOOT SECTOR
        00101011 00110011 11001101 10101010
        TRACE: 127.0.0.1 -&gt; 10.0.2.15 -&gt; 203.0.113.4
    </div>
    {/*  Decryption Sequence Overlay  */}
    <div className="login-overlay fixed inset-0 z-[200] bg-black flex items-center justify-center font-mono">
        <div className="w-80 space-y-4">
            <div className="text-[#D32F2F] text-xs font-black tracking-widest mb-1">INTEL_BOOT_SEQUENCE</div>
            <div className="h-1 bg-surface-container-highest w-full ">
                <div className="h-full bg-[#D32F2F] animate-[typeIn_1.5s_ease-in-out_forwards]"></div>
            </div>
            <div className="text-[10px] text-white/40 space-y-1">
                <p className="animate-pulse">DECRYPTING_ACCESS_NODE...</p>
                <p className="delay-700 animate-pulse">BYPASSING_FIREWALL_02...</p>
                <p className="delay-1000 animate-pulse">ESTABLISHING_ENCRYPTED_TUNNEL...</p>
            </div>
        </div>
    </div>
    <div className="scanline-overlay"></div>
    <div
        className="fixed inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] z-[100]">
    </div>
    {/*  TopAppBar  */}
    <header
        className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#050505] border-b border-[#D32F2F]/15 backdrop-blur-sm">
        <div className="flex items-center gap-8">
            <span
                className="text-xl font-black tracking-[-0.02em] text-[#D32F2F] font-headline uppercase flicker-animation">SONY_HACK.INTEL</span>
            <nav className="hidden md:flex gap-6">
                <a className="text-[#D32F2F] border-b-2 border-[#D32F2F] pb-1 font-headline tracking-tighter uppercase font-bold transition-all duration-300"
                    href="#">INTEL</a>
                <a className="text-white/60 font-headline tracking-tighter uppercase font-bold hover:text-[#D32F2F] hover:tracking-widest transition-all duration-300"
                    href="#">BREACH</a>
                <a className="text-white/60 font-headline tracking-tighter uppercase font-bold hover:text-[#D32F2F] hover:tracking-widest transition-all duration-300"
                    href="#">EXFIL</a>
                <a className="text-white/60 font-headline tracking-tighter uppercase font-bold hover:text-[#D32F2F] hover:tracking-widest transition-all duration-300"
                    href="#">IMPACT</a>
            </nav>
        </div>
    </header>
    {/*  SideNavBar  */}
    <aside
        className="fixed left-0 top-0 h-full z-40 w-64 bg-[#050505] border-r border-[#D32F2F]/15 flex flex-col pt-10 xl:pt-20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="px-6 py-8 border-b border-[#D32F2F]/10">
            <div className="flex items-center gap-3 mb-2">
                <div
                    className="w-10 h-10 bg-surface-container-highest flex items-center justify-center border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-xl">security</span>
                </div>
                <div>
                    <h3 className="text-white text-sm font-bold font-headline tracking-tight">OPERATIONS</h3>
                    <p className="text-primary text-[10px] font-mono tracking-tighter animate-pulse">LIVE_TRACING_ON</p>
                </div>
            </div>
        </div>
        <nav className="flex-1 flex flex-col py-4 font-['Space_Grotesk'] text-xs font-medium">
            <a className="flex items-center gap-4 text-white/40 hover:text-white hover:bg-white/5 px-6 py-3 transition-all group"
                href="#">
                <span className="material-symbols-outlined group-hover:text-primary transition-colors"
                    data-icon="skull">skull</span>
                <span className="group-hover:translate-x-1 transition-transform">THREAT_ACTOR</span>
            </a>
            <a className="flex items-center gap-4 text-white/40 hover:text-white hover:bg-white/5 px-6 py-3 transition-all group"
                href="#">
                <span className="material-symbols-outlined group-hover:text-primary transition-colors"
                    data-icon="hook">anchor</span>
                <span className="group-hover:translate-x-1 transition-transform">PHISHING</span>
            </a>
            <a className="flex items-center gap-4 text-white/40 hover:text-white hover:bg-white/5 px-6 py-3 transition-all group"
                href="#">
                <span className="material-symbols-outlined group-hover:text-primary transition-colors"
                    data-icon="network_check">network_check</span>
                <span className="group-hover:translate-x-1 transition-transform">NETWORK</span>
            </a>
            <a className="flex items-center gap-4 text-white/40 hover:text-white hover:bg-white/5 px-6 py-3 transition-all group"
                href="#">
                <span className="material-symbols-outlined group-hover:text-primary transition-colors"
                    data-icon="dns">dns</span>
                <span className="group-hover:translate-x-1 transition-transform">SERVER</span>
            </a>
            <a className="flex items-center gap-4 text-white/40 hover:text-white hover:bg-white/5 px-6 py-3 transition-all group"
                href="#">
                <span className="material-symbols-outlined group-hover:text-primary transition-colors"
                    data-icon="public">public</span>
                <span className="group-hover:translate-x-1 transition-transform">GLOBAL</span>
            </a>
        </nav>
        
    </aside>
    {/*  Main Content Canvas  */}
    <main className="ml-64 pt-16 pb-6 xl:pb-12 px-12 min-h-screen">
        {/*  Hero Section  */}
        <section className="mt-12 mb-8 xl:mb-16 relative h-[614px]  group border border-white/5">
            <img className="w-full h-full object-cover filter grayscale contrast-125 brightness-50 transition-transform duration-[4000ms]"
                data-alt="Sony Pictures studio gates at night"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVeZkAnrFYih6esJfhfClULmqDOR5esGhzrFpl05fkOP1Mvm6tARQylhD-9T1GJZQo7_pceWSEGBWLbM5bpqh-REsB7C8T6JVCxAgswJIFocM6eIxKpvhiPTCqlkJQ5e207YAwWpHfpdaAE3fgRW6ZxtM4SfZMj47YEl34MI1OKpi7Lflj_BxT1NHRpiaUJg390xexCIIJKJu7P3muwEJT_ft6uXqMHbPRkBh8vxxYW6bfsvf38HUefT1kidQ65tQrKcjBQwxGV_I" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/60"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-12 ">
                <div className="max-w-4xl parallax-hero">
                    <div
                        className="inline-block bg-[#D32F2F] text-white px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase mb-4 animate-bounce-short">
                        INTRODUCTION</div>
                    <h1
                        className="font-headline text-7xl font-black text-white leading-none tracking-tighter uppercase mb-6">
                        <span className="block">THE BREACH</span>
                        <span className="block">THAT <span className="text-[#D32F2F] flicker-animation">CHANGED</span></span>
                        <span className="block">EVERYTHING</span>
                    </h1>
                    <p
                        className="font-headline text-2xl font-light text-on-surface-variant max-w-2xl italic border-l-2 border-[#D32F2F] pl-6 py-1">
                        "From Corporate Incident to International Crisis"
                    </p>
                </div>
            </div>
            {/*  Live Ticker Overlay  */}
            <div className="absolute top-8 right-8 flex flex-col gap-1 items-end opacity-80 font-mono text-[10px]">
                <span className="bg-black/80 text-[#D32F2F] px-2 py-1 border border-[#D32F2F]/30">TIMESTAMP: <span
                        id="current-time">2014-11-24_08:15:22_UTC</span></span>
                <span className="bg-black/80 text-white px-2 py-1 border border-white/10">SIGNAL_STRENGTH: ████████░░</span>
                <span className="bg-black/80 text-green-500 px-2 py-1 border border-green-500/30">NODE:
                    KALI_REMOTE_01</span>
            </div>
        </section>
        {/*  Intelligence Bento Grid  */}
        <div className="grid grid-cols-12 gap-8">
            {/*  Left Narrative Column  */}
            <div className="col-span-12 lg:col-span-7 space-y-12">
                <div
                    className="bg-surface-container-low p-10 border-l-4 border-primary-container relative  group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-8xl"
                            style={{ fontVariationSettings: '\'FILL\' 1' }}>warning</span>
                    </div>
                    <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-white mb-8 typewriter">
                        Executive Summary</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6 group/item">
                            <div
                                className="flex-shrink-0 w-12 h-12 bg-surface-container-highest flex items-center justify-center border border-white/10 group-hover/item:border-primary-container transition-colors relative">
                                <span className="text-primary font-headline font-black text-xl">01</span>
                                <div
                                    className="absolute inset-0 bg-primary/10 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                </div>
                            </div>
                            <div>
                                <h3
                                    className="text-white font-bold uppercase text-sm mb-2 tracking-widest group-hover/item:text-primary transition-colors">
                                    State-Sponsored Aggression</h3>
                                <p className="text-on-surface-variant leading-relaxed text-sm">
                                    The first destructive state-sponsored attack on a U.S. corporation, marking a
                                    paradigm shift in how nation-states interact with private industry.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 group/item">
                            <div
                                className="flex-shrink-0 w-12 h-12 bg-surface-container-highest flex items-center justify-center border border-white/10 group-hover/item:border-primary-container transition-colors relative">
                                <span className="text-primary font-headline font-black text-xl">02</span>
                                <div
                                    className="absolute inset-0 bg-primary/10 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                </div>
                            </div>
                            <div>
                                <h3
                                    className="text-white font-bold uppercase text-sm mb-2 tracking-widest group-hover/item:text-primary transition-colors">
                                    Wiper Malware Deployment</h3>
                                <p className="text-on-surface-variant leading-relaxed text-sm">
                                    Combined massive data theft with specialized "wiper" malware designed to render
                                    corporate infrastructure completely unusable, erasing server footprints.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 group/item">
                            <div
                                className="flex-shrink-0 w-12 h-12 bg-surface-container-highest flex items-center justify-center border border-white/10 group-hover/item:border-primary-container transition-colors relative">
                                <span className="text-primary font-headline font-black text-xl">03</span>
                                <div
                                    className="absolute inset-0 bg-primary/10 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                </div>
                            </div>
                            <div>
                                <h3
                                    className="text-white font-bold uppercase text-sm mb-2 tracking-widest group-hover/item:text-primary transition-colors">
                                    Geopolitical Collision</h3>
                                <p className="text-on-surface-variant leading-relaxed text-sm">
                                    A high-stakes collision between Hollywood creative interests and a nation-state's
                                    perceived sovereignty, resulting in diplomatic turmoil.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Right Intelligence Module  */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
                {/*  Data Visualizer  */}
                <div
                    className="bg-surface-container-high p-8 flex flex-col justify-between min-h-[300px] border border-white/5 relative">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/30"></div>
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] text-white/40 font-mono">FILE_FRAGMENT_A7.SYS</span>
                            <span className="material-symbols-outlined text-primary text-sm animate-pulse">terminal</span>
                        </div>
                        <h4 className="font-headline text-xl font-bold text-white uppercase mb-4 tracking-tighter">Forensic
                            Signature</h4>
                        <div className="space-y-1 font-mono text-[10px] text-primary/70">
                            <p className="animate-[typeIn_2s_steps(40)_infinite]  whitespace-nowrap">&gt;
                                DECRYPTING_LOADER_STUB...</p>
                            <p>&gt; OFFSET 0x00401000 - SECTOR_SIZE: 512</p>
                            <p className="text-[#D32F2F] font-bold">&gt; ALERT: WIPER_SIGNATURE_DETECTED</p>
                            <p className="text-white/20">&gt; 00101101 11011001 00111001 10101010</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5">
                        <div className="flex items-end justify-between">
                            <div className="flex gap-1">
                                <div className="w-1 h-6 bg-primary animate-[h-pulse_1s_infinite]"></div>
                                <div className="w-1 h-10 bg-primary/60 animate-[h-pulse_1.2s_infinite]"></div>
                                <div className="w-1 h-4 bg-primary animate-[h-pulse_0.8s_infinite]"></div>
                                <div className="w-1 h-12 bg-primary animate-[h-pulse_1.5s_infinite]"></div>
                                <div className="w-1 h-8 bg-primary/40 animate-[h-pulse_1.1s_infinite]"></div>
                            </div>
                            <span className="text-[10px] font-mono text-white/30 uppercase">Infiltration: <span
                                    className="text-primary">88.4%</span></span>
                        </div>
                    </div>
                </div>
                {/*  Secondary Data Module  */}
                <div className="bg-surface-container-lowest p-8 border border-outline-variant/20 relative">
                    <div className="absolute -right-1 -top-1 w-4 h-4 border-t border-r border-primary/40"></div>
                    <div className="absolute -left-1 -bottom-1 w-4 h-4 border-b border-l border-primary/40"></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-1 border border-primary bg-primary/20"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Key Vectors</span>
                    </div>
                    <ul className="space-y-4 font-mono">
                        <li className="flex justify-between items-center text-xs group">
                            <span className="text-white/40">ATTACKER:</span>
                            <span className="text-white group-hover:text-primary transition-colors">GOP
                                (GUARDIANS_OF_PEACE)</span>
                        </li>
                        <li className="flex justify-between items-center text-xs group">
                            <span className="text-white/40">TARGET:</span>
                            <span className="text-white group-hover:text-primary transition-colors">SONY PICTURES
                                ENT.</span>
                        </li>
                        <li className="flex justify-between items-center text-xs group">
                            <span className="text-white/40">DURATION:</span>
                            <span className="text-white group-hover:text-primary transition-colors">24 DAYS LATENCY</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
    {/*  Footer  */}
    <footer
        className="fixed bottom-0 w-full z-50 flex justify-between items-center px-8 py-2 bg-[#050505]/90 backdrop-blur-md border-t border-[#D32F2F]/15">
        <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-primary-container animate-ping"></span>
            <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#D32F2F] font-black">CONFIDENTIAL //
                CLASSIFIED INTEL</span>
        </div>
        <nav className="flex gap-8">
            <a className="font-['Inter'] text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-all hover:tracking-widest"
                href="#">TIMELINE</a>
            <a className="font-['Inter'] text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-all hover:tracking-widest"
                href="#">SOURCES</a>
            <a className="font-['Inter'] text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-all hover:tracking-widest"
                href="#">RECOVERY</a>
        </nav>
        <div className="text-[10px] font-mono text-white/20">
            SEC_LEVEL: 05 // NODE_ID: 1044-X
        </div>
    </footer>
    

        </motion.div>
    );
}
