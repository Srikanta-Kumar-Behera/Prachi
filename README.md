# A Journey to Shreya's Heart ❤️

A 14-route, mobile-first romantic proposal experience built with React, Vite, React Router and Framer Motion.

## Run locally

1. Install Node.js LTS: https://nodejs.org/
2. Extract this ZIP and open the `shreya-14-page-react` folder in VS Code.
3. Open the integrated terminal and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (normally http://localhost:5173).

## Personalize

Edit `src/data.js`:
- Sender and recipient names
- Story timeline
- Love letter and proposal copy
- Reasons and future-dream cards
- Photo captions and image paths

Add photographs to `public/photos/` and update the matching paths in `src/data.js`.
Add an MP3 you own or are licensed to use as `public/music/romantic.mp3`. Music is opt-in and does not autoplay.

## Deploy and create the QR code

1. Push this project to GitHub.
2. Import the repository at https://vercel.com/.
3. Vercel settings: Framework **Vite**, Build Command `npm run build`, Output Directory `dist`.
4. Deploy, then visit `https://YOUR-DOMAIN/qr`.
5. The QR page uses the deployed origin automatically and disables download on localhost.

The included `vercel.json` rewrites direct route requests to the React app so refreshing `/proposal` or `/qr` works.

## Pages

`/`, `/welcome`, `/our-story`, `/memories`, `/love-letter`, `/feelings`, `/reasons`, `/dreams`, `/surprise`, `/special-moment`, `/proposal`, `/final-note`, `/qr`, `/about`.

All proposal choices are respectful. “I need a moment” does not block navigation or pressure the recipient.
