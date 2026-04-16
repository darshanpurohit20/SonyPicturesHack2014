# Design System: Cinematic Cybercrime Intelligence

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Forensic Noir"**

This design system is not a standard corporate template; it is a high-stakes narrative vehicle. It sits at the intersection of a high-end investigative documentary and an elite cybersecurity briefing. The goal is to move beyond the "hacker aesthetic" clichés and instead lean into **Organic Brutalism**. 

We achieve this through:
*   **Intentional Asymmetry:** Breaking the grid to mimic the erratic nature of a cyber attack.
*   **Aggressive Contrast:** Using stark whites and crimson against a void of deep charcoal to create a sense of urgency.
*   **Cinematic Depth:** Avoiding flat UI in favor of "layered intelligence," where information feels like it's being decrypted in real-time.

---

## 2. Colors
The palette is engineered for low-light environments (presentation halls) to maximize the "theatrical" impact of the crimson highlights.

*   **Background (`#131313`) & Surface (`#0A0A0A`):** The absolute void. These are the foundations of the experience.
*   **Primary Crimson (`#D32F2F`):** This is your "Threat Actor." Use it sparingly for critical failures, attack vectors, and high-impact data points.
*   **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. Boundaries must be defined by shifting from `surface-container-low` to `surface-container-high`. If a container needs to stand out, do not outline it—change its floor depth.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of stacked server blades. Use `surface-container-lowest` for background canvas and `surface-container-highest` for active intelligence modules.
*   **Signature Textures:** Apply a 2% "Digital Noise" or grain overlay to all surfaces. For primary CTAs, use a subtle linear gradient from `primary` (`#ffb3ac`) to `primary_container` (`#d32f2f`) at a 135-degree angle to simulate the glow of a terminal.

---

## 3. Typography
The typography strategy is "Authoritative Editorial." We use **Space Grotesk** for its technical, slightly "glitchy" geometric nature and **Inter** for its neutral, forensic legibility.

*   **Display & Headlines (Space Grotesk):** Use `display-lg` for single-word impacts (e.g., "BREACH," "EXFILTRATION"). These should be set with -2% letter spacing to feel tight and pressurized.
*   **Body & Titles (Inter):** Use `body-lg` for the "Narrative" and `body-sm` for technical metadata. 
*   **Hierarchy as Narrative:** The contrast between a massive `display-lg` headline and a tiny `label-sm` technical timestamp creates a sense of "Big Picture vs. Micro Detail" essential for a documentary feel.

---

## 4. Elevation & Depth
In a world of digital shadows, depth is communicated through light and opacity, not drop shadows.

*   **The Layering Principle:** Stack `surface-container` tiers. A `surface-container-highest` card should sit atop a `surface-dim` background. This creates a "natural lift" without artificial styling.
*   **Ambient Shadows:** For floating elements (like a red skull alert), use an extra-diffused shadow: `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5)`. The shadow should feel like it's absorbing light, not casting a grey smudge.
*   **The "Ghost Border":** If a separation is required, use `outline_variant` at **15% opacity**. This creates a suggestion of a boundary, like a faint wireframe in a terminal.
*   **Glassmorphism:** Use `backdrop-blur: 12px` combined with a semi-transparent `surface_container_high` (80% opacity) for overlays. This allows the "network node diagrams" behind the UI to peek through, maintaining the feeling of a complex, interconnected system.

---

## 5. Components

### Buttons
*   **Primary (Aggressive):** Rectangular (`0px` radius), `primary_container` background, white text. No hover transition—snap to `primary` instantly to mimic terminal responsiveness.
*   **Secondary (Tactical):** Ghost buttons with the "Ghost Border" (15% white). On hover, fill with 5% white opacity.
*   **Tertiary:** Monospaced text with a `_` (underscore) suffix to mimic a command line.

### Cards & Intelligence Modules
*   **Rule:** Forbid divider lines. Use vertical white space or a shift from `surface-container-low` to `surface-container-highest`.
*   **Glitch State:** Interactive cards should have a subtle 1px horizontal displacement effect on hover (the "Glitch").

### Terminal Inputs
*   **Styling:** No bottom line, no border. Use a `surface_container_lowest` background. The cursor should be a solid `primary` block that blinks.

### Forensic Chips
*   **Style:** Small, `0px` radius, using `secondary_container` for background. These are for tagging data types (e.g., "IP ADDR," "ENCRYPTED").

### Tactical Metadata (Custom Component)
*   Small, scrolling ticker-tape components at the top or bottom of a module showing "Live" packet logs or timestamps in `label-sm` typography.

---

## 6. Do's and Don'ts

### Do:
*   **Use 0px Corner Radii:** This is a brutalist, technical system. Roundness suggests consumer-grade safety; sharp edges suggest professional-grade risk.
*   **Embrace the Void:** Use massive amounts of negative space between sections to focus the eye on a single crimson data point.
*   **Animate with Intent:** Elements shouldn't "slide"—they should "flicker" or "decrypt" into existence.

### Don't:
*   **No Rounded Corners:** Never use `border-radius`. It breaks the "terminal/forensic" immersion.
*   **No Standard Blue:** If you need a secondary color, use the `tertiary` (Teal/Cyan) sparingly for "System Stable" states. Never use "Corporate Blue."
*   **No Center Alignment for Body Text:** Keep body text left-aligned to maintain the "Documentary Script" or "Evidence File" feel.
*   **No 1px Dividers:** Use tonal shifts. Dividers are the mark of an amateur layout; let the colors do the work.