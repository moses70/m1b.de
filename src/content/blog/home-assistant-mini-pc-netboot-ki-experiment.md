---
title: "KI-Experiment: Mini-PC für Home Assistant per KI & Netboot.xyz vorbereiten"
description: "Statt starr nach Schema F zu arbeiten: Wie eine Idee für Home Assistant dank KI-Coding-Agenten zum vollautomatisierten Netboot-Server wurde."
pubDate: 2026-11-03
author: "Reinhard Moosauer"
tags: ["Home Assistant", "KI", "PXE Netboot", "Linux", "Automation"]
featured: true
---

Manchmal muss man die gewohnten Pfade verlassen und einfach experimentieren. Die eigentliche Arbeitsaufgabe klang klassisch: **Ein neuer Linux-Mini-PC soll für Home Assistant eingerichtet werden.**

Anstatt wie sonst einfach einen USB-Stick zu flashen, entstand die Frage: *Wie sieht eigentlich der coolste Weg aus, wenn man die KI nach der besten Lösung fragt?*

## Von der Idee zur Automatisierung

Aus einer einfachen Frage entwickelte sich eine kleine Kette von Ideen:

1. **Erste Idee**: Nicht wie immer machen, sondern die KI fragen, was der eleganteste Weg ist.
2. **Zweite Idee**: *Netzwerk-Boot (PXE)* wäre noch viel cooler! Kein Suchen nach USB-Sticks mehr, sondern direktes Booten des Mini-PCs über das lokale Netzwerk via `netboot.xyz`.
3. **Dritte Idee**: Warum den Netboot-Server manuell konfigurieren? Wir aktivieren einfach einen **KI-Coding-Agenten**, der das komplette Setup, die Services und die Konfiguration automatisch durchführt!

> **Der KI-Chat im Detail**:  
> Wer den genauen Verlauf nachlesen möchte: [Hier geht es zum Gemini-Chatverlauf](https://share.gemini.google/P1m248xirzgE).

---

## Das Ergebnis: Ein funktionierender Netboot-Server

Innerhalb kürzester Zeit stand das komplette System bereit. Der `netboot.xyz`-Server läuft lokal und ist über das Web-Interface erreichbar:

- **Webapp Version**: 0.7.6
- **Menus Version**: 3.0.3
- **TFTP**: Dnsmasq version 2.92rel2
- **Webserver**: nginx version 1.30.6

![netboot.xyz Webinterface Dashboard](https://netboot.xyz/img/netbootxyz-logo.png)

Über das Dashboard lassen sich nun sämtliche Linux-Distributionen, Live-Systeme und Installer direkt per PXE im Netzwerk bereitstellen – perfekt für das spätere Flashen und Einrichten des Mini-PCs.

---

## Warten auf den Postboten 📦

Der Server steht, die Infrastruktur ist bereit – jetzt fehlt nur noch ein entscheidendes Detail: **Der Postbote muss klingeln und den neuen Mini-PC liefern!** 😉

## Nächste Idee...

Wenn schon die Vorbereitung komplett per KI gelaufen ist, was ist dann der nächste logische Schritt? **Genau: Das alles direkt in einem neuen, eigenen Blog veröffentlichen!**

Und so schließt sich der Kreis – dieser Beitrag erscheint direkt auf der neuen **Astro**-Plattform von **m1b.de**, automatisch gebaut und deployed via GitHub Actions.
---
