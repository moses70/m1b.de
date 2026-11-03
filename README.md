# m1b.de – IT & Software Architecture Blog

Static blog platform for **m1b.de** (Reinhard Moosauer – IT Consulting & Software Engineering), built with **Astro**, **Tailwind CSS**, and **GitHub Actions**.

## 🚀 Quickstart

### Prerequisites
- Node.js >= 20.x
- npm >= 10.x

### Commands

```bash
# Install dependencies
npm install

# Local development server (http://localhost:4321)
npm run dev

# Build static production output (output in ./dist)
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
.
├── .github/workflows/deploy.yml  # Automated GitHub Actions deployment workflow
├── public/
│   ├── CNAME                      # Custom domain (m1b.de)
│   └── favicon.svg                # Favicon
├── src/
│   ├── components/                # UI Components (Header, Footer, Cards, Hero, TOC, Tags)
│   ├── content/                   # Content Collections (Blog posts in Markdown/MDX)
│   │   ├── config.ts
│   │   └── blog/
│   ├── layouts/                   # Page layouts (BaseLayout, BlogPostLayout)
│   ├── pages/                     # Dynamic & static routes (Home, Blog, Tags, About, RSS)
│   ├── styles/                    # Global Tailwind CSS
│   └── utils/                     # Helpers (readingTime, slugifyTag)
├── history.md                     # Log of all steps and decisions
└── astro.config.mjs
```

## 🔄 Automated Deployment

Every push to the **`dev`** branch automatically builds and publishes the website via GitHub Actions to GitHub Pages under the domain `m1b.de`.
