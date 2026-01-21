# Beton Benny - Domain Setup Guide

## Ziel: beton-benny-schlager.de -> Vercel

### Schritt 1: Vercel Deployment

1. Öffne ein Terminal im Projekt-Ordner
2. Führe aus: `npx vercel --prod`
3. Bei der ersten Ausführung:
   - Wähle "Set up and deploy" -> [Y]
   - Scope: Dein Account
   - Link to existing project? -> [N] (Neues Projekt)
   - Projektname: `beton-benny` (oder Enter für Standard)
   - Directory: `.` (Enter)
   - Detected Framework: Next.js -> Bestätigen
4. Nach dem Deployment erhältst du eine URL wie: `beton-benny.vercel.app`

### Schritt 2: Custom Domain in Vercel

1. Gehe zu https://vercel.com/dashboard
2. Klicke auf dein Projekt "beton-benny"
3. Gehe zu **Settings** -> **Domains**
4. Klicke "Add" und gib ein: `beton-benny-schlager.de`
5. Vercel zeigt dir die benötigten DNS-Einträge:
   - **Type**: `A` oder `CNAME`
   - **Value**: `76.76.21.21` (für A-Record) ODER `cname.vercel-dns.com` (für CNAME)

### Schritt 3: Hostinger DNS konfigurieren

1. Logge dich bei Hostinger ein
2. Gehe zu **Domains** -> **beton-benny-schlager.de** -> **DNS Zone**
3. Lösche ggf. bestehende A-Records für `@` und `www`
4. Erstelle neue Einträge:

| Typ   | Name | Ziel                   | TTL  |
|-------|------|------------------------|------|
| A     | @    | 76.76.21.21            | 3600 |
| CNAME | www  | cname.vercel-dns.com   | 3600 |

5. Speichern und warten (DNS-Propagation: 5 Min - 48h, meist ~15 Min)

### Schritt 4: SSL Zertifikat

- Vercel stellt automatisch ein kostenloses SSL-Zertifikat bereit
- Nach DNS-Propagation sollte `https://beton-benny-schlager.de` funktionieren

## Fertig! 🎉
