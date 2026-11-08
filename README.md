# Leiam Gaudin — Engineering Portfolio

Personal project portfolio website for **Leiam Gaudin**, Mechanical Design & Dimensional Engineer. Built with **Astro**, **Tailwind CSS v4**, and deployed on **Cloudflare Pages** at [leiamgaudin.com](https://leiamgaudin.com).

## 🚀 Features

- **Apple-Style Minimalist UI**: Dark theme glassmorphism, fluid typography, and clean cards with smooth transitions.
- **Accessible Contact Bar**: Prominent email (`leiamgaudin@gmail.com`), phone (`317-556-0084`), LinkedIn, and one-click Resume PDF access directly in the hero and footer.
- **Interactive Project Modal & Slides**: Full interactive inspection modal with slides, high-res CAD renders, dynamic equations, and results for each project:
  - 1-lb Combat BattleBot (Purdue Railside Robotics)
  - Center of Mass (COM) Blade Optimizer (MATLAB)
  - Parametric Cycloidal Speed Reducer (Siemens NX)
  - Automated Cruise Control (ACC) Modeling (MATLAB)
  - Purdue Assignment Automation Dashboard (Python)
  - CAD & Rapid Prototyping Platform
- **Industry Experience & Skills**: Complete career history (Tesla, American Water, Estes Design, Purdue Electric Racing SAE) and detailed GD&T / manufacturing technical competencies.
- **Fast & Lightweight**: Zero runtime JS bloat, 100% static compilation on Cloudflare edge network.

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

## 📦 Build for Production

```bash
npm run build
```

Build outputs are generated in `./dist/`.

## 🌐 Cloudflare Pages Configuration

- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node version**: `20+` or `22+`
- **Custom Domain**: `leiamgaudin.com`
