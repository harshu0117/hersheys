# Harsh (Hanamanthagouda Policepatil) — Portfolio

A fast, zero-bloat, monochromatic portfolio and technical blog built with semantic HTML5, modern CSS variables, and vanilla JavaScript. 

Optimized for **GitHub Pages** with high contrast, responsive typography, a command palette (`Ctrl+K` / `⌘+K`), resume downloads, and a separate folder for blogs.

---

## ⚡ Features

- **Strict Monochromatic Minimalist Design:** Clean typographic hierarchy, zero flashy distractions or neon gradients, high-contrast legibility.
- **Black & White Modes:** True pitch-black Dark Mode and clean paper-white Light Mode with smooth transition, auto-detection of `prefers-color-scheme`, manual toggle, and `localStorage` persistence.
- **Keyboard Shortcuts:**
  - <kbd>T</kbd>: Instant toggle between Dark and Light mode
  - <kbd>Ctrl</kbd>+<kbd>K</kbd> or <kbd>⌘</kbd>+<kbd>K</kbd>: Fast Command Palette to jump to sections, download resumes, open papers, or trigger actions
  - <kbd>ESC</kbd>: Close command palette
- **Direct Resume Downloads:**
  - [`Research_CV.pdf`](./Research_CV.pdf) — Academic Curriculum Vitae
  - [`Industry_CV.pdf`](./Industry_CV.pdf) — Industrial & Systems Resume
- **Organized Sections:**
  - **Hero / About:** Casual, direct intro ("Hi, I'm Harsh."), focus on AI, Machine Learning, Quantitative Finance, and Data & Human Analytics.
  - **Education:** IIT Gandhinagar Dual B.Tech. (CPI: 8.0/10.0), coursework, and student leadership.
  - **Experience:** Research Intern at Indian Institute of Science (IISc), Bengaluru (Materials Research Centre under Prof. Abhishek Kumar Singh) working on Multimodal Foundation Models, DAPT, and LLaMA-3 QLoRA fine-tuning.
  - **Research & Publications:**
    - *Real-Time Win Probability Estimation in Twenty20 Cricket: A State-Space Approach* (SSRN / Submitted to JQAS)
    - *The Crowding Toll on Rented Cognition* (Submitted to AFA)
    - *Adopt, Wait, or Learn? Computational Capital and AI Investment* (IFC'26 / SSRN)
  - **Projects (with category filtering):**
    - `eBPF Real-Time Network Bandwidth Tracker` (Linux Kernel Probing, BCC, C, Python, SQLite WAL, FastAPI)
    - `Scientific Machine Learning (SciML)` (Fourier Neural Operators for Navier-Stokes & PINNs for Burgers' Equation)
    - `Materials Screening QLoRA & DAPT Continual Pre-Training`
  - **Separate Blog Folder (`blog/`):**
    - Clean subfolder architecture (`blog/index.html`)
    - "Coming Soon" minimalist landing card
  - **Technical Skills:** Categorized into Languages, ML & Scientific Computing, Systems & Tools.
  - **Leadership:** Class Representative (MSE '27), IIT Gandhinagar.
  - **Contact:** One-click email copy with feedback toast, telephone, LinkedIn, GitHub, SSRN links.

---

## 📁 Repository Structure (GitHub Pages Ready)

```text
portfolio/
├── .nojekyll             # Prevents Jekyll processing on GitHub Pages
├── index.html            # Main portfolio homepage
├── style.css             # Monochromatic styling & dark/light theme tokens
├── app.js                # Core JS (theme toggle, cmd palette, filters, toast)
├── Research_CV.pdf       # Uploaded Academic / Research Curriculum Vitae
├── Industry_CV.pdf       # Uploaded Industrial / Systems Resume
├── blog/
│   └── index.html        # Separate blog folder (Coming Soon landing page)
├── resume_acad.tex       # Source LaTeX (Academic)
├── resume_industry.tex   # Source LaTeX (Industry)
└── README.md             # Documentation
```

---

## 🚀 How to Host on GitHub Pages

1. **Initialize Git & Push:**
   ```bash
   git init
   git add .
   git commit -m "feat: minimalist portfolio for Harsh"
   git branch -M main
   git remote add origin https://github.com/harshu0117/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your GitHub repository: `https://github.com/harshu0117/portfolio`
   - Navigate to **Settings** &rarr; **Pages** (on the left sidebar)
   - Under **Build and deployment**:
     - **Source:** `Deploy from a branch`
     - **Branch:** `main` / `/ (root)`
   - Click **Save**!

3. **Your Site is Live:**
   - Your portfolio will be accessible at:
     `https://harshu0117.github.io/portfolio/`
   - All relative links (`./blog/index.html`, `./Research_CV.pdf`, `./Industry_CV.pdf`) will work out of the box with zero broken paths.

---

## 💻 Local Preview

Run a quick local web server:
```powershell
python -m http.server 3000
```
Then open `http://localhost:3000` in your browser.
