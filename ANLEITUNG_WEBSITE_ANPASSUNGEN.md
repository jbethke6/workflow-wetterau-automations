# Yami-AI Website - Anleitung für Anpassungen

## 1. TEXTE ÄNDERN

### Hero Section (Startseite oben)
**Datei:** `src/components/HeroSection.tsx`
- Zeile 31-36: Hauptüberschrift
- Zeile 38-41: Untertext
- Zeile 49: Button-Text "Kostenlose Analyse"

### Services Section
**Datei:** `src/components/ServicesSection.tsx`
- Zeile 14-88: Alle 5 Services mit Titel, Beschreibung, Vorteilen
- Einfach den Text zwischen den Anführungszeichen ändern

### Über mich Section
**Datei:** `src/components/AboutSection.tsx`
- Zeile 38-64: Alle Texte über dich
- Zeile 67-81: Kernkompetenzen

### Kontakt Section
**Datei:** `src/components/ContactSection.tsx`
- Zeile 235: E-Mail-Adresse (aktuell: justin@yami-ai.com)
- Zeile 66-72: Überschrift und Beschreibung

---

## 2. BILDER AUSTAUSCHEN

### Dein Profilbild ändern
1. Neues Bild in `src/assets/` hochladen
2. In `src/components/AboutSection.tsx` Zeile 3 ändern:
```typescript
import justinProfile from '@/assets/DEIN_NEUES_BILD.jpg';
```

### Service-Bilder ändern
**Datei:** `src/components/ServicesSection.tsx`
- Zeile 16, 33, 50, 67, 84: Bild-Pfade für die 5 Services
- Format: `src="/public/images/DEIN_BILD.jpg"`
- Bilder einfach in den `public/images/` Ordner hochladen

### Hero-Bild ändern (großes Bild oben)
1. Neues Bild in `src/assets/` hochladen
2. In `src/components/HeroSection.tsx` Zeile 7 ändern:
```typescript
import heroImage from '@/assets/DEIN_NEUES_BILD.jpg';
```

---

## 3. BLOG-BEITRÄGE HINZUFÜGEN

**Datei:** `src/pages/Blog.tsx`

1. Gehe zu Zeile 15-41 (das `blogPosts` Array)
2. Füge einen neuen Eintrag hinzu:

```typescript
{
  id: '4',
  title: 'Dein Artikeltitel hier',
  excerpt: 'Kurze Zusammenfassung (max 160 Zeichen für SEO)',
  content: 'Vollständiger Artikeltext hier. Kann mehrere Absätze haben.',
  date: '2025-01-20',
  readTime: '5 Min',
  category: 'E-Commerce Optimierung',
  image: '/lovable-uploads/DEIN_BILD.png'
}
```

**SEO-Tipps für Blog:**
- Titel: Klare Keywords, unter 60 Zeichen
- Excerpt: Zusammenfassung, unter 160 Zeichen
- Content: Strukturiert mit Absätzen
- Bilder: Beschreibende Dateinamen

---

## 4. N8N WORKFLOWS VERBINDEN

### A) Google Calendar Workflow (Terminbuchung)

**Webhook-URL einrichten:**
1. In n8n: Workflow "Google Calendar Terminbuchungssystem" öffnen
2. Webhook-Node: URL kopieren (z.B. `https://dein-n8n.com/webhook/book-appointment`)
3. In deiner Website: **Später implementieren wir die Integration**

**Benötigte Secrets in n8n:**
- `GOOGLE_CALENDAR_ID`: Deine Google Calendar ID
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Service Account E-Mail
- `GOOGLE_PRIVATE_KEY`: Private Key für Authentifizierung
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`: Für E-Mail-Versand

**Google Calendar API Setup:**
1. Google Cloud Console öffnen
2. Projekt erstellen
3. Calendar API aktivieren
4. Service Account erstellen
5. JSON-Key herunterladen
6. Calendar mit Service Account teilen

---

### B) Chatbot Workflow (24/7 KI-Chatbot)

**Webhook-URL einrichten:**
1. In n8n: Workflow "24/7 KI-Chatbot" öffnen
2. Webhook-Node: URL kopieren (z.B. `https://dein-n8n.com/webhook/chat-message`)
3. In `src/components/ChatbotAssistant.tsx` Zeile 37 ändern:
```typescript
wsRef.current = new WebSocket('wss://dein-n8n.com/webhook/chat-message');
```

**Benötigte Secrets in n8n:**
- `OPENROUTER_API_KEY`: OpenRouter API Key für KI-Modelle
- `WISSENSDATENBANK_URL`: URL zur Wissensdatenbank (JSON-Datei oder API)

**Wissensdatenbank erstellen:**
1. JSON-Datei mit FAQ erstellen:
```json
{
  "faq": [
    {
      "question": "Was kostet eure Automatisierung?",
      "answer": "Die Preise variieren je nach Umfang..."
    }
  ]
}
```
2. Auf Server hochladen oder in n8n als Variable speichern

---

### C) Integration in Website

**Schritt 1: Chatbot einbinden**
- Datei: `src/components/ChatbotAssistant.tsx`
- Zeile 37: Webhook-URL eintragen
- Zeile 50-90: Mock-Responses durch echte n8n-Integration ersetzen

**Schritt 2: Kalender einbinden**
- Neue Komponente erstellen: `src/components/CalendarBooking.tsx`
- Formular mit Name, E-Mail, Datum, Zeit
- Bei Absenden: POST-Request an n8n Webhook

**Beispiel-Code für Kalenderbuchung:**
```typescript
const handleBooking = async (bookingData) => {
  const response = await fetch('https://dein-n8n.com/webhook/book-appointment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: bookingData.name,
      email: bookingData.email,
      date: bookingData.date,
      time: bookingData.time,
      service: 'Beratungsgespräch'
    })
  });
  
  const result = await response.json();
  if (result.success) {
    alert('Termin erfolgreich gebucht!');
  }
};
```

---

## 5. DOMAIN VERBINDEN

### Domain-Einstellungen in Lovable
1. Lovable öffnen
2. Projekt-Settings → Domains
3. "Connect Domain" klicken
4. Domain eingeben: `yami-ai.com`
5. DNS-Records bei deinem Domain-Provider eintragen:
   - **A Record** (Root Domain @): `185.158.133.1`
   - **A Record** (www): `185.158.133.1`

### Bei deinem Domain-Provider (z.B. Namecheap, GoDaddy)
1. DNS-Einstellungen öffnen
2. A Records hinzufügen wie oben
3. Alte A Records löschen (falls vorhanden)
4. Warten (24-48h für DNS-Propagation)

### SSL/HTTPS
- Wird automatisch von Lovable bereitgestellt
- Nach DNS-Propagation aktiv

---

## 6. VISUAL EDITS (LOVABLE-FEATURE)

**Für schnelle Anpassungen:**
1. In Lovable: "Visual Edits" Button (unten links)
2. Element auf Seite anklicken
3. Text, Farbe, Schriftart direkt ändern
4. OHNE Kosten für Credits!

**Visual Edits ist perfekt für:**
- Texte ändern
- Farben anpassen
- Schriftgrößen ändern
- Button-Texte ändern

---

## 7. HÄUFIGE ANPASSUNGEN

### Farben ändern
**Datei:** `src/index.css`
- Zeile 10-20: Farbpalette (HSL-Werte)
- Orange: `--orange-700`, `--orange-800`
- Primärfarbe: `--primary`

### Schriftarten ändern
**Datei:** `tailwind.config.ts`
- Zeile 15-18: Schriftarten-Definitionen
- Aktuell: Montserrat (Überschriften), Open Sans (Text)

### Navigation anpassen
**Datei:** `src/components/Navigation.tsx`
- Zeile 11-17: Menüpunkte hinzufügen/entfernen

---

## 8. NEXT STEPS

✅ **ERLEDIGT:**
- Website-Design
- Über-mich-Section
- Blog-Seite
- Kalender-Button
- Chatbot-Button

⏳ **NOCH ZU TUN:**
1. n8n Workflows in n8n importieren
2. Google Calendar API einrichten
3. OpenRouter API Key besorgen
4. Webhooks in Website einbinden
5. Domain verbinden
6. Website live schalten!

---

## SUPPORT

**Lovable-Dokumentation:** https://docs.lovable.dev
**Discord-Community:** https://discord.com/channels/1119885301872070706

**Bei Fragen:**
- Lovable AI im Chat fragen
- Visual Edits für schnelle Änderungen nutzen
- Lovable-Dokumentation durchlesen

---

## JA, WIR SCHAFFEN DAS! 🚀

Deine Website ist jetzt bereit für:
1. Kleine Anpassungen (Texte, Bilder)
2. n8n Workflows (müssen noch verbunden werden)
3. Domain-Verbindung
4. Online-Gang

**Nächster Schritt:** n8n Workflows importieren und Google Calendar API einrichten. Dann können wir die Webhooks verbinden!
