# for Auryn 🌷

A small handmade digital gift: a blooming bouquet, an envelope, and a scrapbook board
with a letter, scratch-off polaroids, a photocard booster pack, a song, "open when…"
notes, a jar of reasons, a memory map, and a big hug at the end.

Plain HTML + CSS + JavaScript. No framework, no build step. Open `index.html` or
deploy the folder as-is.

## Files

```
index.html        page structure
style.css         all styling
script.js         CONFIG (all text, names, captions, reasons, map pins) + logic
photos/           the 15 photos (see photos/README.md)
vendor/leaflet/   Leaflet 1.9.4 for the memory map (BSD-2 licence)
tools/compress_photos.py   resize to 1200px + strip EXIF/GPS
```

## Editing

* **Text**: everything is in `CONFIG` at the top of `script.js`.
* **Song**: change `SPOTIFY_TRACK_URL` at the top of `script.js` (any Spotify share link).
* **Photo cropping**: `CONFIG.photos[...]` has `pos` (which part stays visible) and `zoom`
  (crop away status bars on screenshots).
* **Map pins**: `CONFIG.map.pins`. The Rumah Asuhan Izzati Jannah pin is approximate; set its real lat/lng.

## Photosensitivity safety

Auryn has epilepsy, so the page is built to be safe:

* No flashes, strobes, blinking or sudden light/dark changes; nothing changes faster than once per second.
* All transitions are slow (≥ 0.4s) with soft easing; no full-screen white flashes.
* The holo effect on photocards is a low-saturation gradient that follows the cursor or phone tilt, eased slowly. It has no sparkles.
* Falling hearts and petals are few, pastel and slow.
* `prefers-reduced-motion` turns on **Calm mode** automatically. The **✨ Calm mode** button (top-left)
  switches off all motion and particles, and the choice is remembered.

## Run locally

```
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

Settings → Pages → *Build and deployment* → Source: **Deploy from a branch** → pick the branch and `/ (root)` → Save.
After about a minute the site is at `https://<username>.github.io/<repo>/`.
