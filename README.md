# Vijayalakshmi S — Multi-Layout Portfolio & Interactive Digital Resume

A developer portfolio and interactive workspace built with **React 19**, **Tailwind CSS**, and **Lucide React**. Designed to break away from traditional cookie-cutter templates with **3 switchable layout paradigms**, an **interactive workflow pipeline simulator**, a **dev CLI terminal**, and prominent **Chennai, India relocation readiness**.

---

## 🌟 What Makes This Portfolio Stand Out

### 1. 🔀 3 Dynamic Switchable Layouts (Instant Toggle)
Visitors and recruiters can switch layouts on the fly using the navbar or floating bottom pill:
* **🚀 Bento Studio (Default)**: An asymmetric developer workstation featuring an interactive live node workflow simulator, interactive developer CLI console, production metrics hub, and project cards.
* **🌌 Cyber Showcase**: High-impact widescreen visual storytelling with ambient glowing accents, progressive engineering highlights, and smooth section transitions.
* **💼 Recruiter View (Executive Dashboard)**: Split-screen recruiter evaluation interface with side-by-side tabs for key projects, career timeline, skills matrix, and instant ATS resume export.

---

### 2. ⚡ Live Interactive Workflow Engine Simulator
Demonstrates her signature specialty (the **Interactive Process Designer** built with React Flow):
* **Live Node Graph**: `[Intake Form Wizard]` ➔ `[JSON Schema Validator]` ➔ `[FastAPI Dispatcher]` ➔ `[Multi-DB PostgreSQL & Mongo]` ➔ `[Automated Scoring Engine]`.
* **Interactive Actions**: Click **"Run Simulation"** to watch live data packets animate across nodes with real-time telemetry logs.
* **State Management**: Test **Undo / Redo** state tracking and dynamic **"Add Node"** capabilities.
* **Fault Tolerance**: Toggle simulated API failure to watch automatic optimistic rollback in real-time.

---

### 3. 🖥️ Interactive Dev Console (CLI Terminal)
A built-in interactive shell where recruiters can type commands or click shortcut chips:
* `relocate` — Displays immediate relocation status to **Chennai, Tamil Nadu**.
* `skills` — Categorized breakdown of React, FastAPI, Node.js, and Multi-DB capabilities.
* `projects` — Deep dive into 4 major enterprise systems.
* `exp` — Career history at **BIZMETRIC** and **BA Product and System**.
* `resume` — Opens the interactive printable resume modal.

---

### 4. 🚆 Prominent Chennai Relocation Spotlight
* **Primary Target Location**: **Chennai, Tamil Nadu, India** (Immediate Joiner / Ready to Relocate).
* **Target Hubs**: OMR / IT Corridor, Guindy Tech Zone, Tidel Park, DLF Cybercity (Porur).
* **Work Mode**: Open to On-Site, Hybrid, and Remote roles.
* Dedicated **Chennai Relocation Beacon** and direct contact actions in all views.

---

### 5. 📄 Interactive Digital Resume & ATS Export
* **Dual Theme Toggle**: Switch between **Executive Dark Mode** and **ATS White Clean Mode**.
* **1-Click Print & Save PDF**: Print-optimized stylesheet (`@media print`) formats a clean, ATS-compliant resume directly via `window.print()`.
* **1-Click Plain-Text Copy**: Copy formatted text for job portal fields.

---

## 📂 Project Architecture

```
src/
├── assets/
│   └── image.png                            # Profile photo
├── data/
│   └── resumeData.js                        # Centralized data model & Chennai status
├── Components/
│   ├── interactive/
│   │   ├── ChennaiRelocationBadge.js        # Relocation beacon & tech park highlights
│   │   ├── WorkflowSimulator.js             # Live React Flow node simulation engine
│   │   └── DevTerminal.js                   # Interactive CLI shell with commands
│   ├── layouts/
│   │   ├── BentoStudioLayout.js             # Asymmetric Bento workstation
│   │   ├── CyberShowcaseLayout.js           # Widescreen cinematic storytelling
│   │   └── ExecutiveDashboardLayout.js      # Split-screen recruiter dashboard
│   ├── layout/
│   │   ├── Navbar.js                        # Header with layout switcher & resume button
│   │   ├── Footer.js                        # Responsive footer
│   │   └── LayoutSwitcherPill.js            # Floating bottom layout switcher
│   ├── projects/
│   │   └── ProjectDetailModal.js            # Architecture deep-dive modal
│   ├── resume/
│   │   └── ResumeModal.js                   # Dual-theme ATS printable resume
│   └── sections/
│       ├── Hero.js
│       ├── About.js
│       ├── Experience.js
│       ├── Projects.js
│       ├── Skills.js
│       ├── Education.js
│       ├── Certifications.js
│       └── Contact.js
├── App.js                                   # Main multi-layout orchestrator
├── App.test.js                              # Unit test suite
└── index.css                                # Tailwind & custom scrollbar styles
```

---

## 🚀 Running Locally

```bash
# Start development server
npm run dev
# (or npm start)

# Run test suite
npm test -- --watchAll=false

# Production build
npm run build
```

---

## 📬 Contact
* **Candidate**: Vijayalakshmi S (Full Stack Software Engineer)
* **Location**: Madurai, India ➔ **Actively Relocating to Chennai, India**
* **Email**: [viji592001@gmail.com](mailto:viji592001@gmail.com)
* **Phone**: +91 7502409119
* **LinkedIn**: [linkedin.com/in/vijayalakshmi-senthilkumar-89b0b22b1](https://www.linkedin.com/in/vijayalakshmi-senthilkumar-89b0b22b1)
