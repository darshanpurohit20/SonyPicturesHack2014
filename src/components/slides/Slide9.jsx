import React from 'react';
import { motion } from 'framer-motion';

export default function Slide9() {
    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.98, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -50 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}

            className="relative w-full min-h-screen bg-black"
        >

            <div className="grain-overlay"></div>
            <div className="scanlines"></div>
            <div className="scanline-sweep"></div>
            <canvas id="particles-canvas"></canvas>
            {/*  TopAppBar  */}
            <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#111111]/90 backdrop-blur-sm border-b border-[#D32F2F]/20">
                <div className="text-xl font-black tracking-[-0.02em] text-[#D32F2F] font-headline uppercase">SONY_HACK.INTEL</div>
            </header>
            {/*  SideNavBar  */}
            <aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-[#111111] w-64 border-r border-[#D32F2F]/15 hidden md:flex">
                <div className="pt-24 px-6 pb-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#D32F2F]">shield_person</span>
                        </div>
                        <div>
                            <div className="text-white font-bold text-lg font-headline uppercase">OPERATIONS</div>
                            <div className="text-[#D32F2F] text-[10px] tracking-widest font-bold">LIVE_TRACING_ON</div>
                        </div>
                    </div>
                    <nav className="space-y-1">
                        <a className="flex items-center gap-4 text-white/40 hover:text-white/80 px-4 py-3 font-headline text-xs font-medium hover:bg-white/5 group transition-all" href="#">
                            <span className="material-symbols-outlined" data-icon="skull">skull</span>
                            <span>THREAT_ACTOR</span>
                        </a>
                        <a className="flex items-center gap-4 text-white/40 hover:text-white/80 px-4 py-3 font-headline text-xs font-medium hover:bg-white/5 group transition-all" href="#">
                            <span className="material-symbols-outlined" data-icon="hook">anchor</span>
                            <span>PHISHING</span>
                        </a>
                        <a className="flex items-center gap-4 text-white/40 hover:text-white/80 px-4 py-3 font-headline text-xs font-medium hover:bg-white/5 group transition-all" href="#">
                            <span className="material-symbols-outlined" data-icon="network_check">network_check</span>
                            <span>NETWORK</span>
                        </a>
                        <a className="flex items-center gap-4 text-white/40 hover:text-white/80 px-4 py-3 font-headline text-xs font-medium hover:bg-white/5 group transition-all" href="#">
                            <span className="material-symbols-outlined" data-icon="dns">dns</span>
                            <span>SERVER</span>
                        </a>
                        <a className="bg-[#D32F2F] text-white font-bold px-4 py-3 flex items-center gap-4 font-headline text-xs shadow-[0_0_20px_rgba(211,47,47,0.3)]" href="#">
                            <span className="material-symbols-outlined" data-icon="public">public</span>
                            <span>GLOBAL</span>
                        </a>
                    </nav>
                </div>

            </aside>
            {/*  Main Content Canvas  */}
            <main className="md:ml-64 pt-10 xl:pt-20 pb-24 min-h-screen relative flex flex-col">
                {/*  Hero Section  */}
                <section className="flex-grow flex flex-col items-center justify-center p-8 md:p-12 relative ">
                    {/*  Tactical Metadata Ticker  */}
                    <div className="absolute top-0 left-0 w-full bg-surface-container-low/50 py-1 px-8  whitespace-nowrap border-b border-white/5">
                        <div className="inline-block text-[10px] text-[#D32F2F] font-mono tracking-tighter opacity-50 uppercase">
                            PKT_RECV: 192.168.1.104 // AUTH_FAILURE // SYS_LOCKDOWN_INITIATED // ENCRYPTION_KEY_EXPIRED // TOTAL_EXFIL: 100TB // PKT_RECV: 192.168.1.104 // AUTH_FAILURE // SYS_LOCKDOWN_INITIATED
                        </div>
                    </div>
                    {/*  Main Visual Container  */}
                    <div className="w-full max-w-6xl aspect-video relative group border border-white/10 bg-[#111111]/80  shadow-2xl reveal-delay-1 opacity-0 animate-fade-in-blur">
                        {/*  Cinematic CSS Visual Elements (Replaces broken image)  */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#2a0808_0%,_#000000_100%)] opacity-80 animate-pulse-slow"></div>
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
                        <div className="absolute inset-0 bg-[#D32F2F]/10 mix-blend-overlay animate-flicker"></div>
                        {/*  Content Overlay  */}
                        <div className="absolute bottom-12 left-12 right-12 z-10">
                            <h1 className="font-headline text-6xl md:text-[8vw] xl:text-[7vw] font-black tracking-[-0.05em] uppercase text-white leading-none mb-4 drop-shadow-lg">
                                A FINAL <span className="text-primary-container relative glitch-text-container inline-block">MESSAGE</span>
                            </h1>
                            <div className="flex items-center gap-4 opacity-0 animate-fade-in-blur reveal-delay-2">
                                <span className="w-12 h-[2px] bg-primary-container"></span>
                                <p className="font-headline text-lg tracking-[0.2em] text-white font-medium uppercase">End of Transmission</p>
                            </div>
                        </div>
                        {/*  Asymmetric Data Points  */}
                        <div className="absolute top-12 right-12 text-right opacity-0 animate-fade-in-blur reveal-delay-2">
                            <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Impact Analysis</div>
                            <div className="text-primary font-headline font-bold text-2xl tracking-tighter">CAT_09_EXTREME</div>
                        </div>
                    </div>
                </section>
                {/*  Bento Grid: Narrative Analysis  */}
                <section className="px-8 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto w-full">
                    {/*  Key Insight 01  */}
                    <div className="md:col-span-7 bg-surface-container-high/40 backdrop-blur-md p-8 flex flex-col justify-between relative group hover:bg-surface-container-highest/60 transition-all border border-white/5 opacity-0 animate-fade-in-blur reveal-delay-2">
                        <div className="flex justify-between items-start mb-12">
                            <div className="text-[10px] font-headline font-bold text-primary tracking-widest uppercase">Analysis // 01</div>
                            <span className="material-symbols-outlined text-white/20 animate-pulse" data-icon="security_update_warning">security_update_warning</span>
                        </div>
                        <div>
                            <h3 className="font-headline text-3xl font-bold text-white mb-6 uppercase tracking-tight">The Censorship Mechanism</h3>
                            <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                                Sony wasn't just a hack. It was a message about <span className="text-white font-bold">censorship and power</span>. By targeting creative expression, the threat actors demonstrated how digital warfare can silence cultural narratives.
                            </p>
                        </div>
                    </div>
                    {/*  Key Insight 02  */}
                    <div className="md:col-span-5 bg-surface-container/40 backdrop-blur-md p-8 border-l-4 border-primary-container opacity-0 animate-fade-in-blur reveal-delay-3 border border-y-white/5 border-r-white/5">
                        <div className="text-[10px] font-headline font-bold text-primary tracking-widest uppercase mb-4">Intelligence // 02</div>
                        <h3 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-tight">Blurred Boundaries</h3>
                        <p className="text-on-surface-variant text-base leading-relaxed">
                            The incident highlighted the <span className="text-white font-semibold">blurring lines</span> between corporate security and national security. A private entity became the battlefield for a sovereign conflict.
                        </p>
                        <div className="mt-8 flex gap-2">
                            <span className="px-3 py-1 bg-surface-container-lowest/80 text-[10px] font-headline font-bold text-white/40 uppercase border border-white/5">National</span>
                            <span className="px-3 py-1 bg-surface-container-lowest/80 text-[10px] font-headline font-bold text-white/40 uppercase border border-white/5">Corporate</span>
                            <span className="px-3 py-1 bg-surface-container-lowest/80 text-[10px] font-headline font-bold text-white/40 uppercase border border-white/5">Sovereign</span>
                        </div>
                    </div>
                    {/*  Section 8: Conclusion and Key Takeaways  */}
                    <div className="md:col-span-12 bg-surface-container-high/30 backdrop-blur-md p-8 md:p-12 border border-white/5 opacity-0 animate-fade-in-blur reveal-delay-2">
                        <div className="text-[10px] font-headline font-bold text-primary tracking-widest uppercase mb-6">Intelligence // 08 Conclusion and Key Takeaways</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div>
                                <p className="text-on-surface-variant text-base leading-relaxed mb-6">
                                    The 2014 Sony Pictures hack marked a <span className="text-white font-bold">turning point</span> in how destructive cyberattacks against private companies are understood, blurring lines between corporate security incidents and geopolitical conflict. It demonstrated that a determined, state-linked actor could combine espionage, sabotage, and psychological operations to inflict strategic, financial, and reputational damage on a global entertainment firm.
                                </p>
                                <p className="text-on-surface-variant text-base leading-relaxed">
                                    In the years since, other destructive campaigns such as <span className="text-white font-semibold">WannaCry</span> and <span className="text-white font-semibold">NotPetya</span> have echoed patterns seen at Sony: rapid propagation, data destruction, and significant collateral damage beyond the initial target. The Sony case remains a foundational example in discussions of cyber norms, corporate preparedness, and the ethics of responding to coercive threats.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-headline text-xl font-bold text-white mb-6 uppercase tracking-tight">Five Critical Takeaways</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="vpn_key">vpn_key</span>
                                        <div>
                                            <span className="text-white font-bold text-sm uppercase tracking-wide">Identity is the new perimeter</span>
                                            <p className="text-white/50 text-xs mt-1">Protecting credentials and implementing MFA are as important as patching systems.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="cloud_upload">cloud_upload</span>
                                        <div>
                                            <span className="text-white font-bold text-sm uppercase tracking-wide">Plan for wipers and ransomware</span>
                                            <p className="text-white/50 text-xs mt-1">Resilient, tested backups and recovery procedures are non-negotiable.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="network_check">network_check</span>
                                        <div>
                                            <span className="text-white font-bold text-sm uppercase tracking-wide">Monitor east–west traffic</span>
                                            <p className="text-white/50 text-xs mt-1">Detecting lateral movement early can prevent catastrophic damage.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="account_balance">account_balance</span>
                                        <div>
                                            <span className="text-white font-bold text-sm uppercase tracking-wide">Integrate cyber into governance</span>
                                            <p className="text-white/50 text-xs mt-1">Boards must own cyber risk and ensure cross-functional preparedness.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="warning">warning</span>
                                        <div>
                                            <span className="text-white font-bold text-sm uppercase tracking-wide">Treat information as toxic when leaked</span>
                                            <p className="text-white/50 text-xs mt-1">Legal, ethical, and reputational implications demand careful, principled responses.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-on-surface-variant text-sm leading-relaxed text-center max-w-4xl mx-auto">
                                These lessons are increasingly relevant in an era of <span className="text-white font-semibold">AI-enabled social engineering</span>, nation-state cyber units, and ubiquitous data collection where attacks like Sony's can be replicated or augmented with new technologies.
                            </p>
                        </div>
                    </div>
                    {/*  Section 9: Final Statement  */}
                    <div className="md:col-span-12 py-24 flex flex-col items-center text-center">
                        <div className="mb-12 opacity-20 animate-pulse">
                            <span className="material-symbols-outlined text-8xl" data-icon="keyboard_command_key">keyboard_command_key</span>
                        </div>
                        <blockquote className="font-headline text-4xl md:text-5xl xl:text-6xl font-black text-white italic max-w-5xl tracking-tight uppercase leading-none animate-reveal-quote">
                            “This wasn’t just a hack. It was a <span className="text-[#D32F2F] animate-pulse-glow relative glitch-text inline-block">MESSAGE</span>.”
                        </blockquote>
                        <div className="mt-8 xl:mt-16 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#D32F2F]/60 to-transparent shadow-[0_0_15px_rgba(211,47,47,0.4)] opacity-0 animate-fade-in-blur reveal-delay-2"></div>
                        {/*  Connection Lost Indicator  */}
                        <div className="mt-8 flex flex-col items-center gap-2 opacity-0 animate-fade-in-blur reveal-delay-3">
                            <div className="flex items-center gap-2 text-[#D32F2F] font-mono text-sm tracking-[0.3em] font-bold">
                                <span className="w-2 h-2 bg-[#D32F2F] rounded-full animate-ping"></span>
                                CONNECTION LOST
                            </div>
                            <div className="text-[10px] text-white/20 font-mono">REMOTE_HOST_DISCONNECTED // SIG_KILL_SENT</div>
                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    );
}
