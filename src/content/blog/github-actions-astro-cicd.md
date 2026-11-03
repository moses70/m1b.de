---
title: "Automated CI/CD Pipelines for Astro with GitHub Actions"
description: "How to automatically build, validate, and deploy an Astro blog to GitHub Pages using GitHub Actions."
pubDate: 2026-11-01
author: "Reinhard Moosauer"
tags: ["DevOps", "GitHub Actions", "Astro", "CI/CD"]
featured: false
---

Automation is the key to consistent and error-free software releases. For static websites like **m1b.de**, the entire build and deployment process can be mapped seamlessly using **GitHub Actions**.

## The Workflow Architecture

Our GitHub Actions workflow executes the following steps on every push to the `dev` branch:

1. **Repository Checkout**: Source code is fetched from GitHub.
2. **Node.js Runtime Setup**: Node.js v20 including dependency caching.
3. **Installation & Build**: `npm ci` and `npm run build` generate static HTML, CSS, and JS files in the `dist/` directory.
4. **Deployment to GitHub Pages**: Uploading the artifacts and publishing them via the global CDN.

## The Workflow in Detail

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

## Benefits of This CI/CD Pipeline

- **Fully Automated**: Write content, commit, push—the live site is updated within seconds.
- **Secure**: Uses short-lived OpenID Connect (OIDC) tokens instead of long-lived API keys.
- **Performant**: Thanks to built-in caching, subsequent builds take only a few seconds.
---
