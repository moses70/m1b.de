# m1b.de – IT & Software Architecture Blog

Statische Blog-Plattform für **m1b.de** (Reinhard Moosauer – IT Beratung & Software Engineering), entwickelt mit **Astro**, **Tailwind CSS** und **GitHub Actions**.

## 🚀 Quickstart

### Voraussetzungen
- Node.js >= 20.x
- npm >= 10.x

### Befehle

```bash
# Abhängigkeiten installieren
npm install

# Lokaler Entwicklungs-Server (http://localhost:4321)
npm run dev

# Statischen Produktions-Build erstellen (Output in ./dist)
npm run build

# Vorschau des Produktions-Builds lokal anzeigen
npm run preview
```

## 📁 Projektstruktur

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
├── history.md                     # Protokoll aller Schritte und Entscheidungen
└── astro.config.mjs
```

## 🔄 Automated Deployment

Jeder Push auf den Branch **`dev`** baut und veröffentlicht die Webseite automatisch über GitHub Actions auf GitHub Pages mit der Domain `m1b.de`.
