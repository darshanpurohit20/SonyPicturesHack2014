import React from 'react';
import { motion } from 'framer-motion';

export default function Slide4() {
    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.98, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -50 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        
            className="relative w-full min-h-screen"
        >
            
{/*  Cyber-Noir Background Layer  */}
<div className="fixed inset-0 z-0 pointer-events-none ">
{/*  Scrolling Forensic Logs  */}
<div className="absolute right-10 top-0 h-[200%] w-48 opacity-[0.03] font-mono text-[10px] whitespace-nowrap leading-none animate-data-scroll">
<div className="flex flex-col gap-1">
<p>TRACE_ID: 992-X-11</p><p>GET /api/v1/auth/internal</p><p>STATUS: 403 Forbidden</p>
<p>LATENCY: 12ms</p><p>IP: 10.0.82.19</p><p>UA: Mozilla/5.0 (Proxy)</p>
<p>EXFIL_START: 12:00:01</p><p>BLOCK_SIZE: 4096KB</p><p>CRC: 0x8F2A</p>
{/*  Duplicated for seamless loop  */}
<p>TRACE_ID: 992-X-11</p><p>GET /api/v1/auth/internal</p><p>STATUS: 403 Forbidden</p>
<p>LATENCY: 12ms</p><p>IP: 10.0.82.19</p><p>UA: Mozilla/5.0 (Proxy)</p>
<p>EXFIL_START: 12:00:01</p><p>BLOCK_SIZE: 4096KB</p><p>CRC: 0x8F2A</p>
<p>TRACE_ID: 992-X-11</p><p>GET /api/v1/auth/internal</p><p>STATUS: 403 Forbidden</p>
<p>LATENCY: 12ms</p><p>IP: 10.0.82.19</p><p>UA: Mozilla/5.0 (Proxy)</p>
<p>EXFIL_START: 12:00:01</p><p>BLOCK_SIZE: 4096KB</p><p>CRC: 0x8F2A</p>
</div>
</div>
{/*  Moving Scanline  */}
<div className="absolute inset-0 scanlines opacity-40 animate-scanline"></div>
{/*  Glow and Particles  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(211,47,47,0.08)_0%,_transparent_70%)]"></div>
</div>
{/*  Top Navigation  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#050505] border-b border-[#D32F2F]/20">
<div className="text-xl font-black tracking-[-0.02em] text-[#D32F2F] font-headline uppercase group cursor-pointer">
<span className="inline-block group-hover:animate-pulse">SONY_HACK.INTEL</span>
</div>
<div className="hidden md:flex items-center space-x-1 font-headline tracking-tighter uppercase font-bold">
<a className="text-white/40 hover:text-[#D32F2F] hover:bg-white/5 transition-all px-4 py-1" href="#">INTEL</a>
<a className="text-white/40 hover:text-[#D32F2F] hover:bg-white/5 transition-all px-4 py-1" href="#">BREACH</a>
<a className="text-[#D32F2F] bg-[#D32F2F]/10 border-b-2 border-[#D32F2F] px-4 py-1" href="#">EXFIL</a>
<a className="text-white/40 hover:text-[#D32F2F] hover:bg-white/5 transition-all px-4 py-1" href="#">IMPACT</a>
</div>
<div className="flex items-center gap-2">
<div className="text-[#D32F2F] font-headline text-xs font-bold tracking-[0.2em] bg-[#D32F2F]/10 px-4 py-2 border border-[#D32F2F]/20">
            SCENE 01 // THE BREACH
        </div>
</div>
</nav>
{/*  Side Navigation  */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-[#050505] border-r border-[#D32F2F]/20 w-64 pt-24">
<div className="px-6 mb-12">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center border border-[#D32F2F]/30 group ">
<span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform" data-icon="skull">skull</span>
</div>
<div>
<div className="text-lg font-bold text-white font-headline leading-tight tracking-tight">OPERATIONS</div>
<div className="text-[10px] text-primary tracking-widest uppercase flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-primary animate-pulse"></span> LIVE_TRACING_ON
                </div>
</div>
</div>
</div>
<nav className="flex-1">
<a className="flex items-center gap-4 text-white/30 hover:text-white px-6 py-4 font-headline text-[11px] font-bold tracking-[0.15em] border-l-2 border-transparent hover:border-primary/50 transition-all uppercase" href="#">
<span className="material-symbols-outlined text-sm opacity-50" data-icon="skull">skull</span> THREAT_ACTOR
        </a>
<a className="flex items-center gap-4 text-white/30 hover:text-white px-6 py-4 font-headline text-[11px] font-bold tracking-[0.15em] border-l-2 border-transparent hover:border-primary/50 transition-all uppercase" href="#">
<span className="material-symbols-outlined text-sm opacity-50" data-icon="hook">anchor</span> PHISHING
        </a>
<a className="flex items-center gap-4 text-white/30 hover:text-white px-6 py-4 font-headline text-[11px] font-bold tracking-[0.15em] border-l-2 border-transparent hover:border-primary/50 transition-all uppercase" href="#">
<span className="material-symbols-outlined text-sm opacity-50" data-icon="network_check">network_check</span> NETWORK
        </a>
<a className="flex items-center gap-4 text-white/30 hover:text-white px-6 py-4 font-headline text-[11px] font-bold tracking-[0.15em] border-l-2 border-transparent hover:border-primary/50 transition-all uppercase" href="#">
<span className="material-symbols-outlined text-sm opacity-50" data-icon="dns">dns</span> SERVER
        </a>
<a className="flex items-center gap-4 bg-[#D32F2F] text-white font-black px-6 py-4 font-headline text-[11px] tracking-[0.15em] transition-all uppercase" href="#">
<span className="material-symbols-outlined text-sm" data-icon="public">public</span> GLOBAL
        </a>
</nav>

</aside>
{/*  Main Content Canvas  */}
<main className="pl-64 pt-10 xl:pt-20 pb-16 h-screen relative z-10  bg-transparent">
<div className="relative h-full px-16 flex flex-col justify-center">
{/*  Header Section  */}
<div className="mb-14 animate-reveal">
<div className="text-primary font-headline tracking-[0.6em] mb-4 uppercase flex items-center gap-4 text-[10px] font-black">
<span className="h-[2px] w-12 bg-primary"></span>
                Intelligence Sequence 04
            </div>
<h1 className="text-[7rem] font-black font-headline tracking-tighter uppercase leading-[0.75] mb-6">
                CHRONOLOGY OF A<br/>
<span className="text-primary italic relative inline-block">
                    CATASTROPHE
                    <span className="absolute -inset-1 bg-primary/10 blur-xl"></span>
</span>
</h1>
<div className="flex items-center gap-10 mt-10">
<div className="flex flex-col">
<span className="text-[9px] text-white/40 tracking-[0.3em] font-headline uppercase font-bold mb-1">Status</span>
<span className="text-xs font-black text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        RECONSTRUCTING_HISTORY
                    </span>
</div>
<div className="w-[1px] h-10 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-[9px] text-white/40 tracking-[0.3em] font-headline uppercase font-bold mb-1">Threat Level</span>
<span className="text-xs font-black text-primary animate-pulse">CRITICAL_OMEGA</span>
</div>
</div>
</div>
{/*  Cinematic Timeline Component  */}
<div className="relative w-full overflow-x-auto no-scrollbar pb-6 xl:pb-12">
{/*  Central Data Line  */}
<div className="absolute top-[148px] left-0 w-[2000px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
<div className="flex gap-0 min-w-[1700px] py-12 items-start relative">
{/*  Event 01: September (Phishing)  */}
<div className="w-80 group flex flex-col gap-8 animate-reveal reveal-delay-1">
<div className="h-32 flex items-end pr-8">
<div className="p-6 bg-[#0A0A0A] border-l-[3px] border-white/20 w-full relative transition-all duration-500 group-hover:border-primary group-hover:bg-[#120606]">
<div className="text-[9px] font-headline text-white/40 mb-2 tracking-[0.2em] uppercase font-bold">Log_001 // Recon</div>
<div className="text-lg font-headline font-black text-white uppercase group-hover:text-primary transition-colors tracking-tight">Initial Infiltration</div>
<p className="text-[11px] text-white/60 leading-relaxed mt-3 font-medium font-body italic">Shadow network established via legacy VPN gateway. Silent data collection begins.</p>
</div>
</div>
<div className="relative flex justify-center py-4">
<div className="w-8 h-8 bg-[#050505] border-[3px] border-white/30 flex items-center justify-center rotate-45 group-hover:bg-primary group-hover:border-white transition-all duration-500 shadow-lg">
<div className="w-2 h-2 bg-white/50 -rotate-45"></div>
</div>
</div>
<div className="text-center">
<div className="text-6xl font-black font-headline tracking-tighter text-white/10 group-hover:text-white transition-all duration-500">SEPT</div>
<div className="text-[10px] font-mono text-white/30 mt-2 uppercase tracking-widest font-bold">Vector: Phishing</div>
</div>
</div>
{/*  Event 02: November 24 (Access)  */}
<div className="w-80 group flex flex-col-reverse gap-8 animate-reveal reveal-delay-2">
<div className="h-32 pr-8">
<div className="p-6 bg-[#0A0A0A] border-l-[3px] border-primary w-full relative group-hover:bg-[#1a0a0a] transition-all">
<div className="absolute top-4 right-4 animate-pulse">
<span className="material-symbols-outlined text-primary text-sm" data-icon="warning">report</span>
</div>
<div className="text-[9px] font-headline text-primary mb-2 tracking-[0.2em] uppercase font-bold">Log_002 // Access</div>
<div className="text-lg font-headline font-black text-white uppercase tracking-tight">The First Domino</div>
<p className="text-[11px] text-white/60 leading-relaxed mt-3 font-medium font-body italic">System administrators observe unexplained traffic spikes in Culver City servers.</p>
</div>
</div>
<div className="relative flex justify-center py-4">
<div className="w-8 h-8 bg-primary/20 border-[3px] border-primary flex items-center justify-center rotate-45 group-hover:scale-125 transition-transform duration-500">
<div className="w-2 h-2 bg-primary"></div>
</div>
</div>
<div className="text-center">
<div className="text-6xl font-black font-headline tracking-tighter text-white/10 group-hover:text-primary transition-all">NOV 24</div>
<div className="text-[10px] font-mono text-white/30 mt-2 uppercase tracking-widest font-bold">Node: Internal_Gateway</div>
</div>
</div>
{/*  Event 03: December 17 (Data Theft)  */}
<div className="w-80 group flex flex-col gap-8 animate-reveal reveal-delay-3">
<div className="h-32 flex items-end pr-8">
<div className="p-6 bg-[#0A0A0A] border-l-[3px] border-white/20 w-full transition-all duration-500 group-hover:border-primary">
<div className="text-[9px] font-headline text-white/40 mb-2 tracking-[0.2em] uppercase font-bold">Log_003 // Payload</div>
<div className="text-lg font-headline font-black text-white uppercase tracking-tight">Lateral Migration</div>
<p className="text-[11px] text-white/60 leading-relaxed mt-3 font-medium font-body italic">Malware spreads to core accounting and production databases globally.</p>
</div>
</div>
<div className="relative flex justify-center py-4">
<div className="w-8 h-8 bg-[#050505] border-[3px] border-white/30 flex items-center justify-center rotate-45 transition-all">
<div className="w-2 h-2 bg-white/50 -rotate-45"></div>
</div>
</div>
<div className="text-center">
<div className="text-6xl font-black font-headline tracking-tighter text-white/10 group-hover:text-white transition-all">DEC 17</div>
<div className="text-[10px] font-mono text-white/30 mt-2 uppercase tracking-widest font-bold">Attack: SQL_Injection</div>
</div>
</div>
{/*  Event 04: December 19 (Attack / Exfil)  */}
<div className="w-80 group flex flex-col-reverse gap-8 animate-reveal reveal-delay-4">
<div className="h-32 pr-8">
<div className="p-6 bg-primary border-l-[3px] border-white w-full shadow-[0_0_40px_rgba(211,47,47,0.4)] relative">
<div className="absolute -top-3 -right-3 w-10 h-10 bg-white flex items-center justify-center rotate-12 shadow-xl">
<span className="material-symbols-outlined text-primary font-black text-xl" data-icon="upload">upload_file</span>
</div>
<div className="text-[9px] font-headline text-white/80 mb-2 tracking-[0.2em] uppercase font-bold">Log_004 // Breach</div>
<div className="text-xl font-headline font-black text-white uppercase italic tracking-tight">CRITICAL EXFIL</div>
<p className="text-[11px] text-white/90 leading-relaxed mt-3 font-bold font-body">100TB of proprietary data transferred to off-shore 'GOP' servers.</p>
</div>
</div>
<div className="relative flex justify-center py-4">
<div className="w-12 h-12 bg-primary border-4 border-white flex items-center justify-center rotate-45 shadow-[0_0_30px_#D32F2F]">
<span className="material-symbols-outlined text-white -rotate-45 font-black text-xl animate-bounce" data-icon="keyboard_double_arrow_up">keyboard_double_arrow_up</span>
</div>
</div>
<div className="text-center">
<div className="text-6xl font-black font-headline tracking-tighter text-primary animate-pulse">DEC 19</div>
<div className="text-[10px] font-headline text-primary mt-2 uppercase tracking-widest font-black">DATA LOSS DETECTED</div>
</div>
</div>
{/*  Event 05: January (Leaks / Fallout)  */}
<div className="w-80 group flex flex-col gap-8 animate-reveal reveal-delay-5">
<div className="h-32 flex items-end pr-8">
<div className="p-6 bg-[#0A0A0A] border-l-[3px] border-white/10 w-full opacity-60 group-hover:opacity-100 transition-opacity">
<div className="text-[9px] font-headline text-white/40 mb-2 tracking-[0.2em] uppercase font-bold">Log_005 // Fallout</div>
<div className="text-lg font-headline font-black text-white uppercase tracking-tight">The Void</div>
<p className="text-[11px] text-white/60 leading-relaxed mt-3 font-medium font-body italic">Global server shutdown. Forensic teams arrive. Damage assessment: Terminal.</p>
</div>
</div>
<div className="relative flex justify-center py-4">
<div className="w-8 h-8 bg-surface-container border-[3px] border-white/20 flex items-center justify-center rotate-45">
<div className="w-2 h-2 bg-background"></div>
</div>
</div>
<div className="text-center">
<div className="text-6xl font-black font-headline tracking-tighter text-white/10 group-hover:text-white transition-all">JAN</div>
<div className="text-[10px] font-mono text-white/30 mt-2 uppercase tracking-widest font-bold">Phase: Recovery_Failed</div>
</div>
</div>
</div>
</div>
{/*  Tactical Metadata Ticker  */}
<div className="mt-auto border-t border-white/10 py-8 flex items-center justify-between animate-reveal reveal-delay-5">
<div className="flex gap-16">
<div className="flex flex-col">
<div className="text-[9px] font-headline text-primary tracking-[0.4em] uppercase mb-2 font-black">Packet Stream</div>
<div className="font-mono text-[10px] text-white/40 bg-white/5 px-2 py-1 border border-white/5">
                        0x44 0xEE 0x01 <span className="text-primary">[ENCRYPTED]</span> -&gt; 192.168.1.104
                    </div>
</div>
<div className="flex flex-col">
<div className="text-[9px] font-headline text-primary tracking-[0.4em] uppercase mb-2 font-black">System Integrity</div>
<div className="font-mono text-[10px] text-white/40 flex gap-2">
<span className="text-red-500">HASH_MATCH: FAILURE</span> // OFFSET_CORRECTION: REQ
                    </div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex flex-col items-end">
<span className="text-[10px] font-headline text-white/40 uppercase tracking-[0.2em] font-bold">Playback Node</span>
<span className="text-xs font-mono font-bold text-white/80">ALPHA-09-EXFIL</span>
</div>
<div className="flex gap-1.5 h-6 items-center">
<div className="w-1.5 h-5 bg-primary"></div>
<div className="w-1.5 h-5 bg-primary"></div>
<div className="w-1.5 h-3 bg-primary/20"></div>
<div className="w-1.5 h-3 bg-primary/20"></div>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-8 py-3 bg-[#050505]/95 backdrop-blur-xl border-t border-[#D32F2F]/20">
<div className="flex items-center gap-4">
<div className="text-[#D32F2F] font-headline text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            CONFIDENTIAL // CLASSIFIED INTEL
        </div>
</div>
<div className="flex gap-12 font-headline text-[10px] font-black uppercase tracking-[0.2em]">
<a className="text-[#D32F2F] relative group" href="#">
            TIMELINE
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary"></span>
</a>
<a className="text-white/30 hover:text-white transition-colors" href="#">SOURCES</a>
<a className="text-white/30 hover:text-white transition-colors" href="#">RECOVERY</a>
</div>
<div className="text-white/20 text-[9px] font-mono uppercase font-bold">
        SYS_ID: <span className="text-white/40">88-X092-B</span>
</div>
</footer>
{/*  Background Noise / Overlay  */}
<div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        </motion.div>
    );
}
