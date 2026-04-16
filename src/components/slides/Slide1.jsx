import React from 'react';
import { motion } from 'framer-motion';

export default function Slide1() {
    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.98, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -50 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        
            className="relative w-full min-h-screen"
        >
            
{/*  Red Flash Overlay Trigger  */}
<div className="fixed inset-0 z-[60] pointer-events-none red-flash"></div>
{/*  Grain Overlay  */}
<div className="fixed inset-0 z-[100] grain-overlay"></div>
{/*  Digital Void Background  */}
<div className="fixed inset-0 z-0 tech-grid"></div>
<div className="fixed inset-0 z-0 opacity-10 flex  pointer-events-none">
<div className="code-scroller font-mono text-[9px] text-[#D32F2F] leading-tight space-y-1 w-full px-4">
<p>0x45 0x78 0x65 0x63 0x75 0x74 0x69 0x6e 0x67 0x20 0x53 0x63 0x72 0x69 0x70 0x74...</p>
<p>&gt; CONNECTING TO SONY-HQ-GW01... SUCCESS</p>
<p>&gt; BYPASSING FIREWALL... [####################] 100%</p>
<p>&gt; EXPLOITING CVE-2014-4113...</p>
<p>&gt; INJECTING SHELLCODE... OFFSET 0x00401000</p>
<p>&gt; ROOT ACCESS GRANTED</p>
<p>&gt; INITIALIZING DATA EXFILTRATION PORT 8080</p>
<p>0x53 0x79 0x73 0x74 0x65 0x6d 0x20 0x42 0x72 0x65 0x61 0x63 0x68 0x21</p>
<p>&gt; DELETING SYSTEM LOGS...</p>
<p>&gt; ENCRYPTING LOCAL STORAGE...</p>
<p>0x45 0x78 0x65 0x63 0x75 0x74 0x69 0x6e 0x67 0x20 0x53 0x63 0x72 0x69 0x70 0x74...</p>
<p>&gt; CONNECTING TO SONY-HQ-GW01... SUCCESS</p>
<p>&gt; BYPASSING FIREWALL... [####################] 100%</p>
<p>&gt; EXPLOITING CVE-2014-4113...</p>
<p>&gt; INJECTING SHELLCODE... OFFSET 0x00401000</p>
<p>&gt; ROOT ACCESS GRANTED</p>
<p>&gt; INITIALIZING DATA EXFILTRATION PORT 8080</p>
<p>0x53 0x79 0x73 0x74 0x65 0x6d 0x20 0x42 0x72 0x65 0x61 0x63 0x68 0x21</p>
<p>&gt; DELETING SYSTEM LOGS...</p>
<p>&gt; ENCRYPTING LOCAL STORAGE...</p>
</div>
</div>
<div className="scanline"></div>
<div className="particles">
<div className="particle" style={{ width: '2px', height: '2px', left: '15%', animationDuration: '20s', opacity: '0.4' }}></div>
<div className="particle" style={{ width: '1px', height: '1px', left: '35%', animationDuration: '35s', opacity: '0.3' }}></div>
<div className="particle" style={{ width: '3px', height: '3px', left: '60%', animationDuration: '25s', opacity: '0.2' }}></div>
<div className="particle" style={{ width: '2px', height: '2px', left: '85%', animationDuration: '30s', opacity: '0.5' }}></div>
<div className="particle" style={{ width: '1px', height: '1px', left: '90%', animationDuration: '40s', opacity: '0.3' }}></div>
</div>
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md border-b border-[#D32F2F]/10">
<div className="text-xl font-black tracking-[-0.02em] text-[#D32F2F] font-['Space_Grotesk'] uppercase">
            SONY_HACK.INTEL
        </div>
</header>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-black border-r border-[#D32F2F]/10 w-64 pt-24">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-surface-container-highest/20 flex items-center justify-center border border-[#D32F2F]/20">
<span className="material-symbols-outlined text-[#D32F2F]" data-icon="security">security</span>
</div>
<div>
<div className="text-lg font-bold text-white font-headline">OPERATIONS</div>
<div className="text-[10px] text-[#D32F2F] tracking-[0.2em] font-mono">LIVE_TRACING_ON</div>
</div>
</div>
</div>
<nav className="flex flex-col flex-grow">
<a className="flex items-center gap-4 bg-[#D32F2F] text-white font-bold px-4 py-3 font-['Space_Grotesk'] text-xs uppercase" href="#">
<span className="material-symbols-outlined" data-icon="skull" data-weight="fill" style={{ fontVariationSettings: '\'FILL\' 1' }}>skull</span>
                THREAT_ACTOR
            </a>
<a className="flex items-center gap-4 text-white/30 hover:text-white/80 hover:bg-white/5 px-4 py-3 font-['Space_Grotesk'] text-xs uppercase transition-all" href="#">
<span className="material-symbols-outlined" data-icon="hook">anchor</span>
                PHISHING
            </a>
<a className="flex items-center gap-4 text-white/30 hover:text-white/80 hover:bg-white/5 px-4 py-3 font-['Space_Grotesk'] text-xs uppercase transition-all" href="#">
<span className="material-symbols-outlined" data-icon="network_check">network_check</span>
                NETWORK
            </a>
<a className="flex items-center gap-4 text-white/30 hover:text-white/80 hover:bg-white/5 px-4 py-3 font-['Space_Grotesk'] text-xs uppercase transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dns">dns</span>
                SERVER
            </a>
<a className="flex items-center gap-4 text-white/30 hover:text-white/80 hover:bg-white/5 px-4 py-3 font-['Space_Grotesk'] text-xs uppercase transition-all" href="#">
<span className="material-symbols-outlined" data-icon="public">public</span>
                GLOBAL
            </a>
</nav>

</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 pt-10 xl:pt-20 pb-6 xl:pb-12 min-h-screen relative flex items-center justify-center bg-black ">
{/*  Tactical Metadata Ticker  */}
<div className="absolute top-20 right-0 left-64  py-1 bg-white/[0.02] border-b border-white/5">
<div className="flex whitespace-nowrap gap-12 text-[10px] text-[#D32F2F]/40 font-mono uppercase tracking-[0.3em] animate-marquee">
<span>Packet Log: 192.168.1.104 &gt;&gt; EXFILTRATION DETECTED</span>
<span>Timestamp: 2014-11-24 08:15:22 EST</span>
<span>System Status: CRITICAL FAILURE</span>
<span>Node: SONY-PICTURES-ENT-HQ</span>
<span>Auth: UNKNOWN_ENTITY_GOP</span>
</div>
</div>
<div className="max-w-6xl w-full px-12 flex flex-col items-center text-center z-10">
{/*  High-Impact Visual: Hacker Skull  */}
<div className="relative mb-8 xl:mb-16 skull-breach mt-8 xl:mt-16 xl:mt-24">
<div className="absolute inset-0 bg-[#D32F2F] blur-[120px] opacity-20"></div>
<div className="relative p-12 border border-[#D32F2F]/40 bg-black/40 backdrop-blur-3xl pulse-glow-red">
<span className="material-symbols-outlined text-[12vh] xl:text-[180px] text-[#D32F2F] leading-none select-none" data-icon="skull" data-weight="fill" style={{ fontVariationSettings: '\'FILL\' 1' }}>skull</span>
{/*  Glitch Decorative Elements  */}
<div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-[#D32F2F]"></div>
<div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-[#D32F2F]"></div>
</div>
</div>
{/*  Cinematic Hook Text  */}
<div className="space-y-8 max-w-5xl">
<div className="reveal-step-1">
<h1 className="font-headline font-black text-6xl md:text-[8vw] xl:text-[7vw] tracking-tight leading-[0.85] text-white uppercase italic">
                        A normal <span className="text-[#D32F2F] drop-shadow-[0_0_15px_rgba(211,47,47,0.5)]">Monday morning</span> at Sony… 
                    </h1>
<div className="h-1 w-64 bg-[#D32F2F]/60 mx-auto mt-8 blur-[1px]"></div>
</div>
<div className="reveal-step-2">
<h2 className="font-headline font-black text-4xl md:text-5xl xl:text-7xl tracking-tighter text-white/80 uppercase">
                        suddenly every screen <br/>
<span className="bg-white text-black px-8 py-4 mt-8 inline-block font-black shadow-[15px_15px_0_rgba(211,47,47,0.7)] transform -rotate-1">TURNS BLACK.</span>
</h2>
</div>
</div>
{/*  Tactical CTA  */}
<div className="mt-10 xl:mt-20 flex gap-6 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
<button className="btn-glow px-12 py-3 xl:py-5 bg-[#D32F2F] text-white font-headline font-black text-sm uppercase tracking-[0.2em] hover:bg-red-700 transition-all active:scale-95 border border-white/20">
                    INITIATE FORENSICS _
                </button>
<button className="btn-glow px-12 py-3 xl:py-5 border border-white/20 text-white/60 font-headline font-bold text-sm uppercase tracking-[0.2em] hover:bg-white/5 hover:text-white transition-all bg-black/40 backdrop-blur-md">
                    VIEW TIMELINE
                </button>
</div>
</div>
{/*  Ambient UI Elements  */}
<div className="absolute bottom-24 left-12 opacity-40 font-mono text-[11px] text-[#D32F2F] space-y-2 hidden lg:block border-l-2 border-[#D32F2F]/40 pl-6">
<p className="animate-pulse">&gt; GATHERING VOLATILE DATA...</p>
<p>&gt; MEMORY DUMP IN PROGRESS [88%]</p>
<p>&gt; TRACING ORIGIN: [REDACTED]</p>
</div>
<div className="absolute top-48 right-12 opacity-40 font-mono text-[11px] text-white/60 space-y-2 text-right hidden lg:block border-r-2 border-white/20 pr-6">
<p>THREAT LEVEL: <span className="text-[#D32F2F] font-bold">OMEGA</span></p>
<p>VULNERABILITY: CVE-2014-4113</p>
<p>ACTOR: Guardians of Peace</p>
</div>
</main>
{/*  Footer  */}
<footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-8 py-3 bg-black/90 backdrop-blur-xl border-t border-white/5">
<div className="font-['Inter'] text-[10px] uppercase tracking-[0.4em] text-white/20">
            CONFIDENTIAL // ZERO DAY PROTOCOL ACTIVE
        </div>
<div className="flex gap-8">
<a className="font-['Inter'] text-[10px] uppercase tracking-widest text-white/20 hover:text-[#D32F2F] transition-colors" href="#">TIMELINE</a>
<a className="font-['Inter'] text-[10px] uppercase tracking-widest text-white/20 hover:text-[#D32F2F] transition-colors" href="#">SOURCES</a>
<a className="font-['Inter'] text-[10px] uppercase tracking-widest text-white/20 hover:text-[#D32F2F] transition-colors" href="#">RECOVERY</a>
</div>
<div className="font-mono text-[10px] text-[#D32F2F]/60">
            SECURE_NODE_09 // 127.0.0.1
        </div>
</footer>


        </motion.div>
    );
}
