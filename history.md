# Step-by-Step Documentation (history.md)

This document records all steps taken to create and configure the new IT blog **m1b.de** based on **Astro** and **GitHub Actions**.

---

## 1. Repository & Branch Setup

- **Repository**: `https://github.com/moses70/m1b.de`
- **Target Branch**: `dev`
- **PAT**: Authentication & push to the development branch `dev`.
- **Action**: Cloned repository and set up the working directory on the `dev` development branch.

---

## 2. Cleanup of Legacy Jekyll Structure

- Removed the legacy Jekyll files in `docs/` (`Gemfile`, `Gemfile.lock`, `_config.yml`, old HTML files) from the repository.
- Created the custom domain mapping `m1b.de` in `public/CNAME` so that it is automatically copied to `dist/CNAME` on every Astro build.

---

## 3. Astro Framework & Dependency Setup

- **Project Type**: Astro v4 (Static Site Generator)
- **Installed Integrations & Packages**:
  - `astro`: Static generator & SSG core.
  - `@astrojs/tailwind` & `tailwindcss`: Utility-first styling for a modern IT design.
  - `@astrojs/mdx`: Support for Markdown & MDX content.
  - `@astrojs/sitemap`: Automatic generation of `sitemap-index.xml`.
  - `@astrojs/rss`: RSS feed generator at `/rss.xml`.

---

## 4. Design & Component Architecture

Implemented a modern, professional IT design with a dark color scheme (Slate, Indigo, Cyan), JetBrains Mono for code elements, and clean typography:

1. **`src/styles/global.css`**: Global CSS variables, dark background gradient, custom code block styling (Shiki Pro theme), and scrollbar.
2. **`tailwind.config.mjs`**: Customized color palettes and font families (`Inter`, `JetBrains Mono`).
3. **Components (`src/components/`)**:
   - `Header.astro`: Navigation with active link highlighting, brand logo, and mobile dropdown control.
   - `Hero.astro`: Concise hero section with call-to-actions and topic badge.
   - `BlogCard.astro`: Card component for displaying posts including tags, reading time calculation, and publication date.
   - `TableOfContents.astro`: Dynamic table of contents for articles.
   - `TagBadge.astro`: Interactive tag pills with URL slugification.
   - `FormattedDate.astro`: English date formatting.
   - `Footer.astro`: Detailed footer with brand info, links, GitHub reference, and copyright.
4. **Layouts (`src/layouts/`)**:
   - `BaseLayout.astro`: Standard HTML shell with OpenGraph, meta tags, and canonical URLs.
   - `BlogPostLayout.astro`: Dedicated article layout with metadata, author info, and sidebar table of contents navigation.

---

## 5. Content Structuring & Articles (Content Collections)

- Schema definition in `src/content/config.ts` with Zod validation (Title, Description, Date, Author, Tags, Featured flag).
- **Published Posts**:
  1. `willkommen-auf-m1b.md`: Welcome post, history of Moosauer IT Consulting, and topic preview.
  2. `roboter-programmierung-csharp.md`: Technical article on C#/.NET robot control and sensor integration (inspired by previous projects).
  3. `github-actions-astro-cicd.md`: Tutorial article on setting up automated CI/CD pipelines for Astro.
  4. `home-assistant-mini-pc-netboot-ki-experiment.md`: AI experiment on preparing a Home Assistant Mini-PC via an AI coding agent and `netboot.xyz` PXE server.

---

## 6. Automated GitHub Actions Deployment Workflow

Created at `.github/workflows/deploy.yml`:

```yaml
name: Deploy Astro Site to GitHub Pages

on:
  push:
    branches: [ "dev" ]
  workflow_dispatch:

permissions:
  contents: write
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site with Astro
        run: npm run build

      - name: Deploy to gh-pages branch
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: m1b.de

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy to GitHub Pages (Native)
        id: deployment
        uses: actions/deploy-pages@v4
        continue-on-error: true
```

---

## 7. Validation, Build Test & Push

- **Build Test (`npm run build`)**:
  - Generates 24 static HTML pages and routes in `./dist`.
  - `dist/CNAME` is preserved (`m1b.de`).
  - RSS feed (`dist/rss.xml`) and sitemap (`dist/sitemap-index.xml`) were generated successfully.
  - 0 errors / 0 warnings during build.
- **Git Push**:
  - All source code, components, layouts, articles, CI/CD workflow, and configurations were pushed to the remote `dev` branch at `https://github.com/moses70/m1b.de`.
