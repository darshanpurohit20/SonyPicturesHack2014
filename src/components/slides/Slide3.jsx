import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  }),
};

const logVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.8, duration: 0.2 } },
};

export default function Slide3() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 1.02, x: -50 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full min-h-screen"
    >
      {/* Background layers */}
      <div className="grain-overlay" />
      <div className="system-scan-line animate-scan" />
      <div className="cyber-grid" />

      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#D32F2F]/20">
        <div className="text-xl font-black tracking-[-0.02em] text-[#D32F2F] font-headline uppercase">SONY_HACK.INTEL</div>
        </header>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full z-40 hidden lg:flex flex-col bg-[#0A0A0A]/95 backdrop-blur-sm border-r border-[#D32F2F]/20 w-64 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="p-8 pt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-surface-container-high flex items-center justify-center border border-[#D32F2F]/30">
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
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-24 pb-16 min-h-screen px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 border-l-4 border-[#D32F2F] pl-6 py-2"
          >
            <span className="text-[#D32F2F] font-headline text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Background Analysis</span>
            <h1 className="font-headline text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              UNDERSTANDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">THE ARSENAL</span>
            </h1>
          </motion.div>

          {/* Triple Threat Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 backdrop-blur-sm bg-black/40">

            {/* DATA BREACH */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="group relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#D32F2F]/5 transition-colors"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-5xl text-[#D32F2F]">lock_open</span>
              </div>
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="font-headline font-black text-6xl text-white">01</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-4 tracking-tight uppercase">DATA BREACH</h3>
              <div className="h-px w-12 bg-[#D32F2F] mb-4" />
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Tens of gigabytes of sensitive data including internal emails, personal HR records, unreleased films, and executive salary details were stolen and publicly leaked.
              </p>
              <div className="bg-[#D32F2F]/10 p-3 font-mono text-[10px] text-[#D32F2F] border-l-2 border-[#D32F2F]">
                STATUS: COMPROMISED // SIZE: 100GB+
              </div>
            </motion.div>

            {/* WIPER MALWARE */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="group relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#D32F2F]/5 transition-colors"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-5xl text-[#D32F2F]">database_off</span>
              </div>
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="font-headline font-black text-6xl text-white">02</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-4 tracking-tight uppercase">WIPER MALWARE</h3>
              <div className="h-px w-12 bg-[#D32F2F] mb-4" />
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                The "Destover" wiper malware was deployed across the network, erasing master boot records and rendering over 3,000 computers completely inoperable within hours.
              </p>
              <div className="bg-[#D32F2F]/10 p-3 font-mono text-[10px] text-[#D32F2F] border-l-2 border-[#D32F2F]">
                VARIANT: BKDR_DESTOVER // IMPACT: FATAL
              </div>
            </motion.div>

            {/* EXTORTION */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="group relative p-8 md:p-12 hover:bg-[#D32F2F]/5 transition-colors"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-5xl text-[#D32F2F]">mail</span>
              </div>
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="font-headline font-black text-6xl text-white">03</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-4 tracking-tight uppercase">EXTORTION</h3>
              <div className="h-px w-12 bg-[#D32F2F] mb-4" />
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                A psychological operations campaign featuring coercive threats was launched against Sony executives, demanding the cancellation of "The Interview" — a political satire film about North Korea.
              </p>
              <div className="bg-[#D32F2F]/10 p-3 font-mono text-[10px] text-[#D32F2F] border-l-2 border-[#D32F2F]">
                MOTIVE: POLITICAL // INTENT: CENSORSHIP
              </div>
            </motion.div>
          </div>

          {/* Live Forensics Tape */}
          <motion.div
            variants={logVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-[#0A0A0A]/80 backdrop-blur-md p-6 border-l border-[#D32F2F]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
                <span className="text-[10px] font-headline font-bold text-white uppercase tracking-widest">Live Forensics Tape</span>
              </div>
              <div className="font-mono text-[11px] text-white/40 space-y-2">
                <div className="flex justify-between"><span>[2014-11-24 08:15:22]</span><span className="text-[#D32F2F]">BREACH_DETECTED</span></div>
                <div className="flex justify-between"><span>[2014-11-24 08:16:05]</span><span>AUTH_OVERRIDE_ADMIN_ROOT</span></div>
                <div className="flex justify-between"><span>[2014-11-24 08:18:44]</span><span className="text-[#D32F2F]">WIPER_ROUTINE_INIT</span></div>
                <div className="flex justify-between"><span>[2014-11-24 08:22:12]</span><span>EXFIL_THREAD_01_ACTIVE</span></div>
                <div className="flex justify-between"><span>[2014-11-24 09:04:33]</span><span className="text-[#D32F2F]">3000_NODES_OFFLINE</span></div>
              </div>
            </div>

            <div className="bg-[#0A0A0A]/80 backdrop-blur-md p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-sm text-[#D32F2F]">analytics</span>
                <span className="text-[10px] font-headline font-bold text-white uppercase tracking-widest">Attack Scale</span>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Systems Destroyed', value: '3,262', pct: '85%' },
                  { label: 'Data Exfiltrated', value: '100 GB+', pct: '100%' },
                  { label: 'Financial Damage', value: '$35M+', pct: '70%' },
                ].map(({ label, value, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between text-[10px] font-mono mb-1">
                      <span className="text-white/50 uppercase">{label}</span>
                      <span className="text-[#D32F2F]">{value}</span>
                    </div>
                    <div className="w-full h-px bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: pct }}
                        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                        className="h-px bg-[#D32F2F]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

    </motion.div>
  );
}
