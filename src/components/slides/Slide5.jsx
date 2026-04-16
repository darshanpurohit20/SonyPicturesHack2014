import React from 'react';
import { motion } from 'framer-motion';

export default function Slide5() {
    return (
        <motion.div

            initial={{ opacity: 0, filter: 'blur(10px)', skewX: '20deg', scale: 1.1 }}
            animate={{ opacity: 1, filter: 'blur(0px)', skewX: '0deg', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', x: -100, scale: 0.9 }}
            transition={{ duration: 0.2, type: 'spring', bounce: 0.5 }}
        
            className="relative w-full min-h-screen"
        >
            
<div className="grain-overlay fixed inset-0 z-[100]"></div>
{/*  Cinematic Particles  */}
<div className="particles-container">

</div>
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#111111] border-b border-[#D32F2F]/15">
<div className="text-xl font-black tracking-[-0.02em] text-[#D32F2F] font-headline uppercase">
            SONY_HACK.INTEL
        </div>
</header>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-[#111111] border-r border-[#D32F2F]/15 w-64 pt-10 xl:pt-20 hidden lg:flex">
<div className="px-6 py-8 border-b border-[#D32F2F]/10">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-2xl">shield_person</span>
</div>
<div>
<div className="text-lg font-bold text-white font-headline leading-tight">OPERATIONS</div>
<div className="text-[10px] text-primary font-mono tracking-widest flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                        LIVE_TRACING_ON
                    </div>
</div>
</div>
</div>
<nav className="flex-1 py-4 overflow-y-auto">
<div className="flex flex-col">
<a className="group flex items-center gap-4 text-white/40 hover:text-white/80 px-6 py-3 font-headline text-xs font-medium transition-all hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-xl" data-icon="skull">skull</span>
                    THREAT_ACTOR
                </a>
<a className="group flex items-center gap-4 text-white/40 hover:text-white/80 px-6 py-3 font-headline text-xs font-medium transition-all hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-xl" data-icon="hook">anchor</span>
                    PHISHING
                </a>
<a className="group flex items-center gap-4 bg-[#D32F2F] text-white font-bold px-6 py-3 font-headline text-xs" href="#">
<span className="material-symbols-outlined text-xl" data-icon="network_check" style={{ fontVariationSettings: '\'FILL\' 1' }}>network_check</span>
                    NETWORK
                </a>
<a className="group flex items-center gap-4 text-white/40 hover:text-white/80 px-6 py-3 font-headline text-xs font-medium transition-all hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-xl" data-icon="dns">dns</span>
                    SERVER
                </a>
<a className="group flex items-center gap-4 text-white/40 hover:text-white/80 px-6 py-3 font-headline text-xs font-medium transition-all hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-xl" data-icon="public">public</span>
                    GLOBAL
                </a>
</div>
</nav>

</aside>
{/*  Main Content Canvas  */}
<main className="lg:pl-64 pt-24 pb-24 px-6 min-h-screen relative z-10">
<div className="max-w-7xl mx-auto space-y-12">
{/*  Header Section  */}
<section className="space-y-4">
<div className="flex items-center gap-3 text-primary animate-reveal" style={{ animationDelay: '0.1s' }}>
<span className="text-[10px] font-mono tracking-[0.4em] uppercase">Phase_Analysis_005</span>
<div className="h-[1px] w-12 bg-primary/30"></div>
</div>
<h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none group cursor-default">
<span className="inline-block animate-reveal hover:animate-glitch" style={{ animationDelay: '0.2s' }}>THE KILL</span>
<span className="text-primary inline-block animate-reveal hover:animate-glitch" style={{ animationDelay: '0.3s' }}>CHAIN</span>
</h1>
<p className="max-w-2xl text-on-surface-variant font-body text-lg leading-relaxed border-l-2 border-primary/20 pl-6 animate-reveal" style={{ animationDelay: '0.4s' }}>
                    A multi-stage intrusion strategy executed with clinical precision. This forensic timeline decomposes the Sony breach into five distinct tactical vectors.
                </p>
</section>
{/*  Kill Chain Visual Flow  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-1 gap-y-8">
{/*  Step 1: PHISHING  */}
<div className="md:col-span-4 bg-surface-container-low p-8 relative border-t-2 border-primary/40 animate-reveal" style={{ animationDelay: "0.5s" }} id="step-1">
<div className="absolute -top-4 right-8 bg-surface-container-highest px-3 py-1 font-headline text-[10px] text-primary-fixed-dim border border-primary/10">01_INIT</div>
<div className="space-y-4">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="mail" style={{ fontVariationSettings: '\'FILL\' 1' }}>mail</span>
<h3 className="font-headline text-2xl font-bold uppercase tracking-tight">PHISHING</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
                            Fake Apple ID emails targeting high-level administrators. High-fidelity replicas used to harvest privileged credentials via credential-leak landing pages.
                        </p>
</div>
</div>
{/*  Connector 1  */}
<div className="hidden md:flex md:col-span-1 items-center justify-center">
<span className="material-symbols-outlined text-outline/30 text-3xl draw-connector" id="connector-1">arrow_forward_ios</span>
</div>
{/*  Step 2: ACCESS  */}
<div className="md:col-span-4 bg-surface-container-high p-8 relative border-t-2 border-primary/40 animate-reveal" style={{ animationDelay: "0.7s" }} id="step-2">
<div className="absolute -top-4 right-8 bg-surface-container-highest px-3 py-1 font-headline text-[10px] text-primary-fixed-dim border border-primary/10">02_ENTRY</div>
<div className="space-y-4">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="key">key</span>
<h3 className="font-headline text-2xl font-bold uppercase tracking-tight">ACCESS</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
                            Attackers leverage valid harvested logins to bypass edge security. Initial foothold established through compromised VPN endpoints.
                        </p>
</div>
</div>
{/*  Connector 2  */}
<div className="hidden md:flex md:col-span-3 items-center justify-end pr-8">
<div className="w-full h-[1px] bg-outline/20 relative ">
<div className="absolute inset-0 bg-primary/40 draw-connector h-full" id="connector-2"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rotate-45 opacity-0 reveal-step" id="node-2"></div>
</div>
</div>
{/*  Step 3: MOVEMENT  */}
<div className="md:col-span-7 bg-surface-container-highest p-8 relative border-t-2 border-primary/40 animate-reveal" style={{ animationDelay: "0.9s" }} id="step-3">
<div className="absolute -top-4 right-8 bg-primary-container px-3 py-1 font-headline text-[10px] text-on-primary-container">03_LATERAL</div>
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="space-y-4">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="account_tree">account_tree</span>
<h3 className="font-headline text-2xl font-bold uppercase tracking-tight">MOVEMENT</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
                                Systematic expansion across the internal topology. Custom malware payload spread via SMB network shares, infecting domain controllers and file servers.
                            </p>
</div>
<div className="h-40 bg-[#111111]/40 border border-white/5 flex items-center justify-center relative">
<img className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKwA_RZJPEKlxspJ90vtzlWd0XK_4op27mYf8mhsXqHfvYSoDHyLuOZOZeHhKZ_QIjBAGRRNGV108sbB_LgZEzyxwuwX8lsDzhiusqqqO3k8PU0gqlnYABlnZwfIjNaoVb6GYFqFyFaTZev6AANeGxCS50cj7CBsHQgdOI6mEeMUhVyS9pUAn9ltoRXgUCNpHBkTYW_T1KY2kWbQnlKxQTG90sMpcdQaM0bUQyVkHDHYWd5JUnyWLPTvlOtUjcg_t9r7htz23hnHY"/>
<div className="relative z-10 font-mono text-[10px] text-primary p-4 bg-[#111111]/60 backdrop-blur-sm border border-primary/20">
                                SCANNING_NET_RANGE: 10.0.4.0/24<br/>
                                PAYLOAD_STATUS: INJECTED<br/>
                                SHARES_MOUNTED: 142
                            </div>
</div>
</div>
</div>
{/*  Step 4: EXFILTRATION  */}
<div className="md:col-span-5 bg-surface-container-low p-8 relative border-t-2 border-primary/40 animate-reveal" style={{ animationDelay: "1.1s" }} id="step-4">
<div className="absolute -top-4 right-8 bg-surface-container-highest px-3 py-1 font-headline text-[10px] text-primary-fixed-dim border border-primary/10">04_DATA</div>
<div className="space-y-4">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="upload_file">upload_file</span>
<div className="text-right">
<div className="text-[10px] font-mono text-primary">ENCRYPTION: AES-256</div>
<div className="text-[10px] font-mono text-primary">SIZE: 100TB+</div>
</div>
</div>
<h3 className="font-headline text-2xl font-bold uppercase tracking-tight">EXFILTRATION</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
                            Massive data staging. Gigabytes of internal emails and unreleased motion pictures were compressed and funneled to offshore servers over several weeks.
                        </p>
</div>
</div>
{/*  Step 5: DESTRUCTION (Aggressive Reveal)  */}
<div className="md:col-span-12 bg-[#111111] border border-[#D32F2F]/30 p-10 relative  group animate-reveal" style={{ animationDelay: "1.3s" }} id="step-5">
<div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
<div className="absolute -top-4 right-12 bg-primary px-4 py-1 font-headline text-xs text-white font-bold">05_TERMINATE</div>
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#D32F2F] text-6xl animate-pulse-red" data-icon="bolt">bolt</span>
<h3 className="font-headline text-4xl font-black uppercase tracking-tighter">DESTRUCTION</h3>
</div>
<p className="text-on-surface text-lg leading-relaxed">
                                The final payload: <span className="bg-[#D32F2F] px-2 py-0.5 font-bold animate-flicker">DESTOVER</span>. A highly aggressive wiper malware designed to overwrite the Master Boot Record (MBR), rendering entire hardware fleets permanently inoperable.
                            </p>
<div className="flex gap-4">
<div className="px-4 py-2 bg-surface-container-highest font-mono text-[10px] text-primary border border-primary/20">WIPER_ID: 0x9928</div>
<div className="px-4 py-2 bg-surface-container-highest font-mono text-[10px] text-primary border border-primary/20">OS_TARGET: WIN_NT</div>
</div>
</div>
<div className="w-full md:w-96 aspect-video bg-surface-container flex items-center justify-center border border-white/5 relative " id="destruction-viz">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7w0DJ9PYO3k0qjYjSJbqnEH6PnDuWxe-2caDWgyhJ08A_0IAefozO_PjDb0wtcKX_j34ZcH5673gxd6aPaUKxXmhScAWrJTxppGjiTplUu19vwWWAparsL-sX3iD6qyysiluzPwWrByOlXpyGvcsZk44J7ZHZe72bGPiPnrBikEecvFCX1w73ssJPhzsBnY8-mBrrPEhbociZs4ZX87Toq1P-QD1tmRViU7mgW-oPfEgkRlkvri9_8-EF5naWeqjv925yu1dXVrY"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="relative z-10 text-center space-y-2">
<span className="material-symbols-outlined text-primary text-5xl animate-pulse" data-icon="warning">warning</span>
<div className="font-headline font-black text-xl tracking-widest text-primary">SYSTEM HALTED</div>
</div>
</div>
</div>
</div>
</div>
{/*  Forensic Context Footer  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-reveal" style={{ animationDelay: "1.5s" }} id="forensic-footer">
<div className="p-6 bg-surface-container-low border-l border-primary/20">
<h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">Target_Infrastructure</h4>
<p className="font-headline text-sm font-bold">CROSS-CONTINENT HYBRID CLOUD</p>
</div>
<div className="p-6 bg-surface-container-low border-l border-primary/20">
<h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">Weaponization_Type</h4>
<p className="font-headline text-sm font-bold">COMMERCIAL-GRADE OFFENSIVE TOOLS</p>
</div>
<div className="p-6 bg-surface-container-low border-l border-primary/20">
<h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">Recovery_Estimated</h4>
<p className="font-headline text-sm font-bold">6 - 12 MONTHS (PARTIAL)</p>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-8 py-2 bg-[#111111]/80 backdrop-blur-md border-t border-[#D32F2F]/15">
<div className="font-headline text-[10px] uppercase tracking-widest text-white/30">
            CONFIDENTIAL // CLASSIFIED INTEL
        </div>
<div className="flex gap-8">
<a className="font-headline text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-opacity" href="#">TIMELINE</a>
<a className="font-headline text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-opacity" href="#">SOURCES</a>
<a className="font-headline text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-opacity" href="#">RECOVERY</a>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full"></span>
<span className="font-headline text-[10px] uppercase tracking-widest text-[#D32F2F]">DATA_FLOW_STABLE</span>
</div>
</footer>


        </motion.div>
    );
}
