# Dokumentation der Schritte (history.md)

Dieses Dokument erfasst alle durchgeführten Schritte zur Erstellung und Konfiguration des neuen IT-Blogs **m1b.de** basierend auf **Astro** und **GitHub Actions**.

---

## 1. Repository & Branch Setup

- **Repository**: `https://github.com/moses70/m1b.de`
- **Ziel-Branch**: `dev`
- **PAT**: Authentifizierung & Push auf den Entwicklungsbranch `dev`.
- **Aktion**: Repository geklont und Arbeitsverzeichnis auf dem Entwicklungsbranch `dev` aufgesetzt.

---

## 2. Aufräumarbeiten der Legacy-Jekyll-Struktur

- Die alten Jekyll-Dateien in `docs/` (`Gemfile`, `Gemfile.lock`, `_config.yml`, alte HTML-Dateien) wurden aus dem Repository entfernt.
- Die Custom-Domain-Zuordnung `m1b.de` wurde in `public/CNAME` angelegt, damit sie bei jedem Astro-Build automatisch nach `dist/CNAME` kopiert wird.

---

## 3. Astro Framework & Dependency Setup

- **Projekttyp**: Astro v4 (Static Site Generator)
- **Installierte Integrationen & Pakete**:
  - `astro`: Statischer Generator & SSG Core.
  - `@astrojs/tailwind` & `tailwindcss`: Utility-First Styling für modernes IT-Design.
  - `@astrojs/mdx`: Unterstützung für Markdown & MDX-Inhalte.
  - `@astrojs/sitemap`: Automatische Generierung von `sitemap-index.xml`.
  - `@astrojs/rss`: RSS-Feed-Generator unter `/rss.xml`.

---

## 4. Design & Komponenten-Architektur

Ein modernes, professionelles IT-Design mit dunklem Farbschema (Slate, Indigo, Cyan), JetBrains Mono für Code-Elemente und klarer Typografie wurde umgesetzt:

1. **`src/styles/global.css`**: Globale CSS-Variablen, dunkler Hintergrundverlauf, custom Codeblock-Styling (Shiki Pro Theme) und Scrollbar.
2. **`tailwind.config.mjs`**: Anpassung der Farbpaletten und Schriftfamilien (`Inter`, `JetBrains Mono`).
3. **Komponenten (`src/components/`)**:
   - `Header.astro`: Navigation mit aktivem Link-Highlight, Markenlogo und mobiler Dropdown-Steuerung.
   - `Hero.astro`: Prägnanter Hero-Bereich mit Call-to-Actions und Schlagwort-Badge.
   - `BlogCard.astro`: Karte zur Darstellung von Beiträgen inklusive Tags, Lesezeit-Berechnung und Erscheinungsdatum.
   - `TableOfContents.astro`: Dynamisches Inhaltsverzeichnis für Artikel.
   - `TagBadge.astro`: Interaktive Tag-Pillen mit URL-Slugifizierung.
   - `FormattedDate.astro`: Deutsche Datumsformatierung.
   - `Footer.astro`: Detaillierter Fußbereich mit Markeninfo, Links, GitHub-Verweis und Copyright.
4. **Layouts (`src/layouts/`)**:
   - `BaseLayout.astro`: Standard HTML-Grundgerüst mit OpenGraph, Meta-Tags und kanonischen URLs.
   - `BlogPostLayout.astro`: Spezielles Artikel-Layout mit Metadaten, Autoreninfo und seitlicher Inhaltsnavigation.

---

## 5. Inhaltsstrukturierung & Artikel (Content Collections)

- Schemadefinition in `src/content/config.ts` mit Zod-Validierung (Titel, Beschreibung, Datum, Autor, Tags, Featured-Flag).
- **Beiträge**:
  1. `willkommen-auf-m1b.md`: Begrüßung, Historie der Moosauer IT Beratung und Themenvorschau.
  2. `roboter-programmierung-csharp.md`: Fachartikel über C#/.NET Roboter-Steuerung und Sensor-Anbindung (Inspiration aus bisherigen Projekten).
  3. `github-actions-astro-cicd.md`: Anleitungsartikel zur Einrichtung automatisierter CI/CD-Pipelines für Astro.

---

## 6. Automatisiertes GitHub Actions Deployment Workflow

Erstellt unter `.github/workflows/deploy.yml`:

```yaml
name: Deploy Astro Site to GitHub Pages

on:
  push:
    branches: [ "dev" ]
  workflow_dispatch:

concurrency:
  group: "pages"
  cancel-in-progress: false

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
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

      - name: Upload build artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> **Hinweis zum PAT (Personal Access Token)**:
> Das Erstellen/Pushen von Dateien im Ordner `.github/workflows/` setzt bei GitHub-PATs die Berechtigung **Workflows (Read & Write)** voraus. Sobald dieser Token-Berechtigungsscope in GitHub unter Token-Settings aktiviert ist (oder die Datei direkt via GitHub Web/Git hinzugefügt wird), wird die Pipeline bei jedem Push auf `dev` automatisch ausgeführt.

---

## 7. Validierung, Build-Test & Push

- **Build-Test (`npm run build`)**:
  - Erzeugt 19 statische HTML-Seiten und Routen in `./dist`.
  - `dist/CNAME` bleibt erhalten (`m1b.de`).
  - RSS-Feed (`dist/rss.xml`) und Sitemap (`dist/sitemap-index.xml`) wurden erfolgreich generiert.
  - 0 Fehler / 0 Warnungen beim Build.
- **Git Push**:
  - Sämtliche Quellcodes, Komponenten, Layouts, Artikel und Konfigurationen wurden erfolgreich auf den Remote-Branch `dev` bei `https://github.com/moses70/m1b.de` gepusht.
