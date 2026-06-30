# Weather Dashboard (Project 4)

A simple React app that fetches live weather from Open-Meteo (no API key needed).

## What it covers
- Components, props, lists/keys, conditional UI
- useState, useEffect, useContext + a custom hook (`useFetch`)
- fetch with loading & error states
- Ready to deploy on Vercel/Netlify

## Run it locally
```
npm install
npm run dev
```
Open the URL it prints (usually http://localhost:5173).

## Deploy

### Option A: Vercel
1. Install the CLI: `npm i -g vercel`
2. From this folder, run: `vercel`
3. Follow the prompts (defaults are fine — Vite is auto-detected).
4. It'll give you a live URL when done.

### Option B: Netlify
1. Run `npm run build` (creates a `dist/` folder).
2. Go to https://app.netlify.com/drop and drag the `dist/` folder in.
3. It gives you a live URL instantly.

Either way — copy the live URL into your workbook for Day 14.
