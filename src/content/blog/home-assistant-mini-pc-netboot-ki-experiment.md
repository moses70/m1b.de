---
title: "AI Experiment: Preparing a Mini-PC for Home Assistant via AI & Netboot.xyz"
description: "Instead of following the same old routine: How an idea for Home Assistant turned into a fully automated netboot server thanks to AI coding agents."
pubDate: 2026-11-03
author: "Reinhard Moosauer"
tags: ["Home Assistant", "AI", "PXE Netboot", "Linux", "Automation"]
featured: true
---

Sometimes you have to leave the beaten path and simply experiment. The actual task sounded classic: **Set up a new Linux Mini-PC for Home Assistant.**

Instead of flashing a USB drive like usual, a question came up: *What would the coolest approach look like if you asked AI for the best solution?*

## From Idea to Automation

A simple question evolved into a chain of ideas:

1. **First Idea**: Don't do it the usual way—ask the AI what the most elegant approach is.
2. **Second Idea**: *Network Boot (PXE)* would be way cooler! No more hunting for USB sticks; instead, boot the Mini-PC directly over the local network via `netboot.xyz`.
3. **Third Idea**: Why configure the netboot server manually? Simply activate an **AI coding agent** to handle the entire setup, services, and configuration automatically!

> **The AI Chat in Detail**:  
> If you want to read the exact conversation: [Check out the Gemini chat log here](https://share.gemini.google/P1m248xirzgE).

---

## The Result: A Working Netboot Server

Within a very short time, the entire system was up and running. The `netboot.xyz` server runs locally and is accessible via its web interface:

- **Webapp Version**: 0.7.6
- **Menus Version**: 3.0.3
- **TFTP**: Dnsmasq version 2.92rel2
- **Webserver**: nginx version 1.30.6

![netboot.xyz Web Interface Dashboard](https://netboot.xyz/img/netbootxyz-logo.png)

Through the dashboard, all Linux distributions, live systems, and installers can now be provisioned directly over the network via PXE—perfect for flashing and setting up the Mini-PC later.

---

## Waiting for the Mail Carrier 📦

The server is running and the infrastructure is ready—now only one crucial detail is missing: **The mail carrier needs to ring the doorbell and deliver the new Mini-PC!** 😉

## Next Idea...

Since the entire preparation was done with AI, what is the next logical step? **Exactly: Publish all of it directly on a brand-new, custom blog!**

And so we come full circle—this post is published directly on the new **Astro** platform of **m1b.de**, automatically built and deployed via GitHub Actions.
---
