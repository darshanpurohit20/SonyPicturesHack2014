# SONY_HACK.INTEL // Cinematic Presentation

![Static Badge](https://img.shields.io/badge/Status-Classified-d32f2f?style=flat-square) ![Static Badge](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel) ![Static Badge](https://img.shields.io/badge/Framework-React-61dafb?style=flat-square&logo=react)

🔴 **Zero Day Protocol Active**  
**Live Deployment:** [sony-pictures-hack2014.vercel.app](https://sony-pictures-hack2014.vercel.app/)

A "Digital Forensic Noir" scrollytelling presentation detailing the timeline, impact, and post-mortem analysis of the 2014 Sony Pictures Entertainment breach. Rather than a static set of slides, this project is built as a deeply immersive, unified React application combining cinematic transitions, interactive metadata streams, and state-of-the-art motion graphics.

---

## ⚡ Key Features

* **Cinematic Framework Transition Pipeline:** Smoothly shifts between 10 unique "scenes" via `<AnimatePresence>` utilizing staggered transform scaling and exit/entry fades.
* **Multimodal Navigation Protocol:** 
  * Linear scroll wheel traversal (with momentum debounce).
  * Direct tactical keyboard interface (`Arrow Keys` / `Spacebar`).
  * Live interactive HUD overlay with presentation tracking.
* **"Organic Brutalism" Aesthetics:** Designed strictly for a dark environment with massive crimson highlights (`#D32F2F`), 0px border radiuses, intensive linear gradients, and simulated cathode-ray CRT noise.
* **Performant React Migration:** Originally conceived as 10 isolated HTML files, the codebase was algorithmically transcribed into an interactive Single-Page Application (SPA) driven by Vite.

## 🛠 Technology Stack

* **Core Engine:** React 19 + Vite 🚀
* **Motion Graphics:** Framer Motion (`framer-motion`) 🎬
* **Global Thematic Framework:** Tailwind CSS v3 (configured with a custom deep-cyber schema) 🎨
* **Typography:** `Space Grotesk` (Headlines), `Inter` (UI), `JetBrains Mono` (Terminal outputs).

---

## 🚀 Local Deployment Instructions (For Authorized Personnel Only)

To examine the raw source code and run the forensic presentation framework locally:

### 1. Clone the environment
```bash
git clone https://github.com/darshanpurohit20/SonyPicturesHack2014.git
cd SonyPicturesHack2014
```

### 2. Install dependencies
```bash
npm install
```

### 3. Initiate local dev server
```bash
npm run dev
```
> [!NOTE]
> Ensure your environment is strictly bound to `localhost:5173`. Access the interface with chromium-based browsers for optimal CSS hardware acceleration.

---

## 📁 Repository Structure

```text
├── src/
│   ├── components/
│   │   └── slides/               # Individual scene JSX modules (Slide1...Slide10)
│   ├── App.jsx                   # Central routing & animation orchestrator
│   ├── index.css                 # Global CSS (custom @keyframes, CRT grain, Tailwind)
│   └── main.jsx                  # React bootloader
├── original_prototypes/          # Legacy HTML forensic prototypes
├── convert.py                    # Automation pipeline script used for JSX extraction
└── tailwind.config.js            # Custom design system bindings
```

---

*Initiated by Sector-7 Cyber Analytics. Confidential document. Do not distribute without clearance.*
