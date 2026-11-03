---
title: "Automatisierte CI/CD-Pipelines für Astro mit GitHub Actions"
description: "Wie Sie einen Astro-Blog mit GitHub Actions automatisch bauen, validieren und auf GitHub Pages bereitstellen."
pubDate: 2026-11-01
author: "Reinhard Moosauer"
tags: ["DevOps", "GitHub Actions", "Astro", "CI/CD"]
featured: false
---

Automatisierung ist der Schlüssel zu konsistenten und fehlerfreien Software-Releases. Für statische Webseiten wie **m1b.de** lässt sich der gesamte Build- und Deployment-Prozess nahtlos über **GitHub Actions** abbilden.

## Die Workflow-Architektur

Unser GitHub Actions Workflow führt bei jedem Push auf den `dev`-Branch folgende Schritte aus:

1. **Checkout des Repositories**: Quellcode wird aus GitHub abgerufen.
2. **Setup der Node.js-Laufzeitumgebung**: Node.js v20 inklusive Dependency-Caching.
3. **Installation & Build**: `npm ci` und `npm run build` erzeugen statische HTML-, CSS- und JS-Dateien im `dist/`-Verzeichnis.
4. **Deployment auf GitHub Pages**: Hochladen der Artefakte und Freigabe über das globale CDN.

## Der Workflow im Detail

```yaml
name: Deploy Astro Site to GitHub Pages

on:
  push:
    branches: [ "dev" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build Astro Site
        run: npm run build
      - name: Upload artifact
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

## Vorteile dieser CI/CD-Pipeline

- **Vollautomatisch**: Inhalte schreiben, committen, pushen – die Live-Seite wird binnen Sekunden aktualisiert.
- **Sicher**: Nutzung kurzlebiger OpenID Connect (OIDC) Tokens statt dauerhafter API-Schlüssel.
- **Performant**: Durch integriertes Caching dauern Folgebilds nur wenige Sekunden.
---
