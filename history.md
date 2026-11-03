# Dokumentation der Schritte (history.md)

Dieses Dokument erfasst alle durchgeführten Schritte zur Erstellung und Konfiguration des neuen IT-Blogs **m1b.de** basierend auf **Astro** und **GitHub Actions**.

---

## 1. Repository & Branch Setup

- **Repository**: `https://github.com/moses70/m1b.de`
- **Ziel-Branch**: `dev`
- **Personal Access Token (PAT)**: Authentifizierung für GitHub Git-Operationen.
- **Aktion**: Repository geklont und Arbeitsverzeichnis auf dem Entwicklungsbranch `dev` aufgesetzt.

---

## 2. Aufräumarbeiten der Legacy-Jekyll-Struktur

- Altes Jekyll-Projekt in `docs/` sowie unbenutzte Artefakte (`Gemfile`, `Gemfile.lock`, `_config.yml`) wurden entfernt.
- Die Domain-Zuordnung `m1b.de` aus der alten `CNAME`-Datei wurde nach `public/CNAME` übertragen.

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

- **Trigger**: Bei jedem Commit / Push auf den Branch `dev` oder manueller Auslösung (`workflow_dispatch`).
- **Build-Phase**:
  - Checkout des Repositories
  - Node.js v20 Einrichtung mit Dependency Caching
  - `npm ci` zur sauberen Paketinstallation
  - `npm run build` (erzeugt statischen Output in `./dist`)
  - Upload des Build-Artefakts (`actions/upload-pages-artifact@v3`)
- **Deploy-Phase**:
  - Automatisches Bereitstellen auf GitHub Pages via `actions/deploy-pages@v4` mit OIDC-Rechten.

---

## 7. Validierung & Lokaler Build-Test

- Ausführung von `npm run build`:
  - Erzeugt 19 statische Seiten und Routen.
  - `dist/CNAME` bleibt erhalten (`m1b.de`).
  - RSS-Feed (`dist/rss.xml`) und Sitemap (`dist/sitemap-index.xml`) wurden erfolgreich generiert.
  - 0 Fehler / 0 Warnungen beim Build.
