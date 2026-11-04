/* =====================================================================
   A little gift for Auryn  ·  plain HTML + CSS + JS, no build step
   ---------------------------------------------------------------------
   ✏️  Everything you might want to edit lives in CONFIG (and the
       Spotify link right below). The rest of the file is the engine.

   🛡️  Photosensitivity rules followed everywhere in this file:
       - nothing flashes or blinks; every change is a slow fade/slide
         (>= 400ms, soft easing), never more than one change per second
       - no full-screen white flashes, no moving high-contrast stripes
       - particles are few, pastel and slow
       - "Calm mode" (and prefers-reduced-motion) turns off motion and
         particles completely
   ===================================================================== */

/* 🎵 Paste any Spotify link here (track / album / playlist).
      Open Spotify → Share → Copy link to song. It never autoplays. */
const SPOTIFY_TRACK_URL = 'https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q';

const CONFIG = {
  names: {
    to: 'Auryn',
    nickname: 'Ryn',
    from: 'Samuel',
  },

  /* Folder with the photos. Each photo can get:
       pos  → which part stays visible (CSS object-position), e.g. '50% 20%' keeps the top
       crop → [top, right, bottom, left] in % of the original photo to cut away
              (used for phone screenshots: status bar, gallery strip, collage borders…)
     Tweak these if a face gets cut off. */
  photoDir: 'photos/',
  photos: {
    '01': { file: '01-gown-grey.jpg',      pos: '55% 12%' },
    '02': { file: '02-smile.jpg',          pos: '50% 50%', crop: [9, 0, 20.5, 0] },
    '03': { file: '03-gloomy.jpg',         pos: '50% 30%', crop: [15.6, 15, 52.1, 15] },
    '04': { file: '04-with-baby.jpg',      pos: '40% 55%', crop: [7.2, 0, 10.9, 0] },
    '05': { file: '05-forest.jpg',         pos: '55% 40%', crop: [34, 0, 18.5, 0] },
    '06': { file: '06-medals.jpg',         pos: '50% 40%', crop: [7.2, 0, 10.9, 0] },
    '07': { file: '07-photobooth-1.jpg',   pos: '60% 45%', crop: [49.8, 52.3, 5, 2.8] },
    '08': { file: '08-photobooth-2.jpg',   pos: '50% 40%', crop: [7.4, 50.7, 64, 5] },
    '09': { file: '09-gown-blue.jpg',      pos: '50% 25%' },
    '10': { file: '10-airport.jpg',        pos: '50% 38%' },
    '11': { file: '11-baking.jpg',         pos: '50% 30%' },
    '12': { file: '12-pies.jpg',           pos: '42% 52%' },
    '13': { file: '13-studying.jpg',       pos: '62% 32%' },
    '14': { file: '14-car-mirror.jpg',     pos: '40% 50%', crop: [22.5, 27, 42.5, 20] },
    '15': { file: '15-photoism-strip.jpg', pos: '50% 50%', crop: [74.7, 8.4, 2.8, 8.4] },
  },

  /* a. The letter (shown exactly as written) */
  letter: {
    greeting: 'Hi Ryn,',
    paragraphs: [
      "I made this because I know you're feeling really sad right now. Please don't be sad, Ryn, because when you're sad, I feel sad too.",
      "You know what? You're one of the people I care about and love the most, even though I rarely text you because I'm afraid of bothering you. I've always looked up to you, so when I heard you say that you're useless and a burden, it made me so, so sad.",
      "I think you're amazing, Ryn. You're so smart. Just think about it: you're one of the people who got a scholarship from TSM, and ever since elementary school you've been joining math competitions and always ranking at the top. I swear you're so cool, so please don't ever think you're useless, okay?",
      "Also, believe that you are strong. I know how much you hate your epilepsy and how it makes the people around you overprotective, but the truth is, you've endured all of it and made it through until now. That proves your mind and body are way stronger than you think.",
      "And please don't be sad, because your smile is cute, Ryn, hehe. I know you rarely smile, but that's exactly why your smile is so precious to me. So please keep smiling.",
      "Never listen to the voices in your head telling you that you're a burden, because to me, and to everyone who truly knows you, you are a gift and an extraordinarily precious person. If you're tired or just need a place to talk without any fear of being judged, you know exactly where to find me.",
      "Keep your chin up, Ryn. Sending you a big hug. You are never alone in this.",
    ],
    signature: '— Samuel',
  },

  /* b. Scratch-off polaroids */
  polaroids: [
    { photo: '01', caption: "Look at you. You're so, so beautiful, Ryn." },
    { photo: '06', caption: "Champion since forever. Proof that you're brilliant." },
    { photo: '09', caption: 'Elegant, graceful, unforgettable.' },
    { photo: '11', caption: "Chef Auryn! You're so talented in the kitchen." },
    { photo: '12', caption: "These pies look like they're from a real bakery. So proud of you!" },
  ],

  /* c. Booster pack photocards (in the order they come out of the pack) */
  pack: {
    title: 'THE AURYN COLLECTION',
    edition: 'Limited Edition · 1 of 1',
    cards: [
      { photo: '02', word: 'This smile? Rare, precious, and my favorite.',                       rarity: '✦ Ultra Rare' },
      { photo: '03', word: "Even on your gloomy days, you're still adorable. Bad days end, you don't.", rarity: '✦ Cozy Holo' },
      { photo: '04', word: 'Your heart is so kind. Little ones feel safe with you.',             rarity: '✦ Golden Heart' },
      { photo: '05', word: 'Main character energy. Always.',                                      rarity: '✦ Main Character' },
      { photo: '07', word: 'You make every moment so much more fun.',                             rarity: '✦ Sunshine Foil' },
      { photo: '08', word: 'Your friends are lucky to have you. So am I.',                        rarity: '✦ Bestie Edition' },
      { photo: '10', word: 'Wherever you go, people are waiting for you to come home.',           rarity: '✦ Homecoming' },
      { photo: '13', word: "Even when you're tired, you never give up. That's strength.",         rarity: '✦ Super Rare' },
      { photo: '14', word: 'Candid and still cute. Unfair, honestly.',                            rarity: '✦ Candid Rare' },
      { photo: '15', word: 'Even Jaehyun is lucky to be in a photo with you. 😆',                rarity: '✦ One of a Kind' },
    ],
    secret: {
      rarity: '✦ SECRET RARE ✦',
      title: 'You.',
      text: "There's only one of you in the whole world, and that's exactly why you matter.",
    },
  },

  /* e. Open when… */
  openWhen: [
    { label: 'Open when you feel useless',        text: 'You literally have medals, a scholarship, and a whole brain full of math. Useless? Not in this universe.' },
    { label: "Open when you're tired",            text: "Rest is not giving up. Take a break, drink some water, and come back whenever you're ready. I'll still be here." },
    { label: 'Open when you forgot how to smile', text: "Look at photo #02 again. That's the smile I'm talking about. 🙂", photo: '02' },
  ],

  /* f. Jar of reasons */
  reasons: [
    "You're one of the smartest people I know.",
    "You got a scholarship from TSM. That's huge!",
    "You've been a math champion since elementary school.",
    'You bake pies that look like they came from a real bakery.',
    'Little kids feel safe in your arms.',
    'You look like a princess in a gown.',
    'Your rare smile is my favorite thing.',
    "You're stronger than anything you've been through.",
    'You make your friends laugh in every photobooth.',
    "You keep going even when you're tired.",
    "You're a gift, not a burden. Always.",
  ],
  reasonsDone: "That's every note in the jar… but honestly, I could fill a thousand more jars. 💗",

  /* g. Memory map (Leaflet + OpenStreetMap). Adjust lat/lng if a pin is off. */
  map: {
    center: [-1.615, 103.625],
    zoom: 12,
    pins: [
      { name: 'Bandara Sultan Thaha', lat: -1.6380, lng: 103.6444, photo: '10',
        caption: 'Wherever you go, people are waiting for you to come home.' },
      /* ⚠️ approximate spot in Jambi city, move it to the real address */
      { name: 'Rumah Asuhan Izzati Jannah', lat: -1.6050, lng: 103.5960, photo: '04',
        caption: 'Your heart is so kind. Little ones feel safe with you.' },
    ],
  },

  /* 4. Closing */
  hug: {
    big: 'Keep your chin up, Ryn. You are never alone in this. 💗',
    small: 'Come back to this page anytime you need it.',
  },
};

/* =====================================================================
   Small helpers
   ===================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle(arr, rand = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function storageGet(key) { try { return window.localStorage.getItem(key); } catch (e) { return null; } }
function storageSet(key, val) { try { window.localStorage.setItem(key, val); } catch (e) { /* private mode etc. */ } }

function photoHTML(id, alt, { lazy = true } = {}) {
  const p = CONFIG.photos[id];
  if (!p) return '';
  const pos = p.pos || '50% 35%';
  const crop = Array.isArray(p.crop) ? ` data-crop="${p.crop.join(',')}" data-pos="${pos}"` : '';
  return `<div class="ph${crop ? ' ph--crop' : ''}" data-photo="${id}"${crop}>
      <img src="${esc(CONFIG.photoDir + p.file)}" alt="${esc(alt || '')}" loading="${lazy ? 'lazy' : 'eager'}" decoding="async"
           style="object-position:${pos}" onload="window.layoutCrop && layoutCrop(this.parentNode)" onerror="this.parentNode.classList.add('ph--missing')">
      <span class="ph__missing" aria-hidden="true">${flowerSVG('rose', 'pink')}<span>photo ${id}</span></span>
    </div>`;
}

/* CSS-only cropping of screenshots: the img is scaled so that only the crop
   rectangle covers the box (like object-fit: cover), then shifted by `pos`. */
const cropObserver = 'ResizeObserver' in window ? new ResizeObserver((entries) => entries.forEach((e) => layoutCrop(e.target))) : null;
function layoutCrop(ph) {
  if (!ph || !ph.dataset || !ph.dataset.crop) return;
  const img = ph.querySelector('img');
  if (!img || !img.naturalWidth) return;
  if (cropObserver && !ph.dataset.watched) { ph.dataset.watched = '1'; cropObserver.observe(ph); }
  const bw = ph.clientWidth, bh = ph.clientHeight;
  if (!bw || !bh) return;
  const [t, r, b, l] = ph.dataset.crop.split(',').map(Number);
  const nw = img.naturalWidth, nh = img.naturalHeight;
  const cx = (l / 100) * nw, cy = (t / 100) * nh;
  const cw = nw * (1 - (l + r) / 100), ch = nh * (1 - (t + b) / 100);
  const s = Math.max(bw / cw, bh / ch);
  const [px, py] = (ph.dataset.pos || '50% 50%').split(' ').map((v) => parseFloat(v) / 100);
  img.style.width = `${nw * s}px`;
  img.style.height = `${nh * s}px`;
  img.style.left = `${-cx * s + (bw - cw * s) * px}px`;
  img.style.top = `${-cy * s + (bh - ch * s) * py}px`;
}
window.layoutCrop = layoutCrop;

/* =====================================================================
   Calm mode (+ prefers-reduced-motion)
   ===================================================================== */
const Calm = {
  on: false,
  init() {
    const stored = storageGet('ryn-calm-mode');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.set(stored === null ? reduce : stored === '1', false);
    $('#calmToggle').addEventListener('click', () => this.set(!this.on, true));
  },
  set(value, save) {
    this.on = value;
    document.documentElement.classList.toggle('calm', value);
    const btn = $('#calmToggle');
    btn.setAttribute('aria-pressed', String(value));
    btn.querySelector('.calm-toggle__state').textContent = value ? ': on' : '';
    if (value) FX.clearAll();
    if (save) storageSet('ryn-calm-mode', value ? '1' : '0');
  },
};

/* =====================================================================
   Hand-drawn flowers (SVG). Everything is original vector art.
   ===================================================================== */
const PALETTES = {
  red:       ['#7E1424', '#B8323F', '#E36F79'],
  pink:      ['#C2566E', '#E8A5A5', '#FBD9DD'],
  white:     ['#D9BBAE', '#F6E9E1', '#FFFDF9'],
  peony:     ['#D06A88', '#F2AFC0', '#FDE6ED'],
  carnation: ['#C24766', '#EE91A8', '#FFDCE5'],
  peach:     ['#D98670', '#F4C1AE', '#FFE9DF'],
  wax:       ['#7E1424', '#A92A38', '#C9505C'],
};

function buildDefs() {
  const defs = $('#flowerDefs');
  let html = '';
  for (const [name, [c0, c1, c2]] of Object.entries(PALETTES)) {
    html += `<radialGradient id="g-${name}" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="48">
        <stop offset="0" stop-color="${c0}"/><stop offset=".5" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient>`;
  }
  html += `<linearGradient id="g-leaf" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#5F8460"/><stop offset="1" stop-color="#B3CDA7"/></linearGradient>
    <linearGradient id="g-leaf2" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#7C9A78"/><stop offset="1" stop-color="#CFDFC4"/></linearGradient>
    <radialGradient id="g-sun" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#FFE7A8"/><stop offset=".7" stop-color="#F7C873"/><stop offset="1" stop-color="#EFB25F"/></radialGradient>`;
  defs.innerHTML = html;
}

const petalPath = (w, h) =>
  `M0 0C${-w} ${-h * 0.18} ${-w * 1.05} ${-h * 0.95} 0 ${-h}C${w * 1.05} ${-h * 0.95} ${w} ${-h * 0.18} 0 0Z`;

function ring(n, w, h, offset, fill, extra = '') {
  let s = '';
  for (let i = 0; i < n; i++) {
    s += `<path d="${petalPath(w, h)}" transform="rotate(${offset + (360 / n) * i})" fill="${fill}" ${extra}/>`;
  }
  return s;
}

function ruffle(r1, r2, spread, teeth) {
  // a fan-shaped petal with a jagged (carnation) edge
  const pts = ['0,0'];
  for (let i = 0; i <= teeth; i++) {
    const a = (-spread + (2 * spread * i) / teeth - 90) * (Math.PI / 180);
    const r = i % 2 ? r2 : r1;
    pts.push(`${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`);
  }
  return `M${pts.join('L')}Z`;
}

function flowerSVG(type, color = 'pink') {
  const g = `url(#g-${color})`;
  const [c0, , c2] = PALETTES[color] || PALETTES.pink;
  const edge = `stroke="${c0}" stroke-opacity=".28" stroke-width=".8"`;
  let body = '';
  if (type === 'rose') {
    body =
      ring(5, 23, 46, 0, g, edge) +
      ring(5, 17, 35, 36, g, edge + ' fill-opacity=".95"') +
      ring(4, 12, 23, 15, g, edge) +
      `<circle r="10" fill="${g}"/>
       <path d="M-1-2C5-8 10 0 4 5C-3 10-11 3-7-4C-3-11 9-11 11-2C13 6 6 12-1 12" fill="none" stroke="${c0}" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round"/>
       <path d="M-18-6C-14-18 0-22 8-18" fill="none" stroke="${c2}" stroke-opacity=".55" stroke-width="1.4" stroke-linecap="round"/>`;
  } else if (type === 'peony') {
    body =
      ring(8, 24, 45, 10, g, edge + ' fill-opacity=".92"') +
      ring(7, 20, 34, 30, g, edge + ' fill-opacity=".92"') +
      ring(6, 15, 24, 5, g, edge) +
      ring(5, 8, 13, 20, c2, `stroke="${c0}" stroke-opacity=".25" stroke-width=".6"`) +
      `<g fill="#F3D58D" opacity=".85"><circle cx="-2" cy="-1" r="1.6"/><circle cx="3" cy="2" r="1.4"/><circle cx="1" cy="-4" r="1.2"/><circle cx="-4" cy="3" r="1.2"/></g>`;
  } else if (type === 'carnation') {
    for (let i = 0; i < 10; i++) body += `<path d="${ruffle(45, 39, 24, 9)}" transform="rotate(${i * 36})" fill="${g}" ${edge} fill-opacity=".9"/>`;
    for (let i = 0; i < 8; i++) body += `<path d="${ruffle(32, 27, 26, 7)}" transform="rotate(${i * 45 + 20})" fill="${g}" ${edge} fill-opacity=".92"/>`;
    for (let i = 0; i < 6; i++) body += `<path d="${ruffle(18, 14, 30, 5)}" transform="rotate(${i * 60 + 10})" fill="${c2}" ${edge}/>`;
  } else if (type === 'daisy') {
    body = ring(12, 7, 40, 0, '#FFFDF8', 'stroke="#D9C2B4" stroke-opacity=".5" stroke-width=".7"') +
      `<circle r="11" fill="url(#g-sun)"/>`;
  } else if (type === 'bud') {
    body = `<path d="M0 30C-16 18-18-8 0-30C18-8 16 18 0 30Z" fill="${g}" ${edge}/>
      <path d="M0 30C-8 20-14 6-10-6C-4 4-2 16 0 30Z" fill="url(#g-leaf)"/>
      <path d="M0 30C8 20 14 6 10-6C4 4 2 16 0 30Z" fill="url(#g-leaf)"/>`;
  }
  return `<svg viewBox="-50 -50 100 100" class="flower-svg" aria-hidden="true">${body}</svg>`;
}

function leafSVG(variant = 1) {
  const fill = variant === 2 ? 'url(#g-leaf2)' : 'url(#g-leaf)';
  return `<svg viewBox="-50 -50 100 100" class="flower-svg" aria-hidden="true">
    <path d="M0 46C-20 26-18-18 0-46C18-18 20 26 0 46Z" fill="${fill}" stroke="#4E6E4E" stroke-opacity=".25" stroke-width=".8"/>
    <path d="M0 44C-1 14 0-20 0-42" fill="none" stroke="#E9F2E2" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/></svg>`;
}

function babysBreathSVG() {
  const r = mulberry32(3);
  let dots = '';
  for (let i = 0; i < 14; i++) {
    const a = r() * Math.PI * 2, d = 8 + r() * 34;
    const x = Math.cos(a) * d, y = Math.sin(a) * d;
    dots += `<path d="M0 0L${x.toFixed(1)} ${y.toFixed(1)}" stroke="#9BB491" stroke-width=".8" opacity=".6"/>
             <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(3 + r() * 2.5).toFixed(1)}" fill="#FFFDF8" stroke="#E8D6CC" stroke-width=".6"/>`;
  }
  return `<svg viewBox="-50 -50 100 100" class="flower-svg" aria-hidden="true">${dots}</svg>`;
}

function sealSVG() {
  // wax seal with an embossed little flower
  let blob = '';
  const r = mulberry32(11), pts = 18;
  for (let i = 0; i < pts; i++) {
    const a = (i / pts) * Math.PI * 2, rad = 44 + r() * 5;
    blob += `${i ? 'L' : 'M'}${(Math.cos(a) * rad).toFixed(1)} ${(Math.sin(a) * rad).toFixed(1)}`;
  }
  return `<svg viewBox="-50 -50 100 100" aria-hidden="true">
    <path d="${blob}Z" fill="url(#g-wax)"/>
    <circle r="31" fill="none" stroke="#7E1424" stroke-opacity=".45" stroke-width="2.5"/>
    <g fill="#D9626E" fill-opacity=".75">${ring(5, 8, 17, 0, '#D9626E')}</g>
    <circle r="4.5" fill="#F2A3A8" fill-opacity=".8"/></svg>`;
}

function sunSVG() {
  let rays = '';
  for (let i = 0; i < 12; i++) rays += `<path d="M0-30L4-40L0-46L-4-40Z" fill="#F4C46E" opacity=".8" transform="rotate(${i * 30})"/>`;
  return `<svg viewBox="-50 -50 100 100" aria-hidden="true">${rays}<circle r="24" fill="url(#g-sun)"/>
    <path d="M-9 4Q0 12 9 4" fill="none" stroke="#B9783A" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="-8" cy="-5" r="2.4" fill="#B9783A"/><circle cx="8" cy="-5" r="2.4" fill="#B9783A"/>
    <circle cx="-14" cy="4" r="3.5" fill="#F29C9C" opacity=".55"/><circle cx="14" cy="4" r="3.5" fill="#F29C9C" opacity=".55"/></svg>`;
}

/* =====================================================================
   1. Intro bouquet
   ===================================================================== */
function buildBouquet() {
  const box = $('#bouquet');
  const W = box.clientWidth, H = box.clientHeight;
  const rand = mulberry32(2024);
  const base = clamp(Math.min(W, H * 1.15) * 0.3, 96, 230);
  const gap = base * 0.66;
  const flowers = [], leaves = [], fillers = [];
  const kinds = [
    ['rose', 'red', 0.22], ['rose', 'pink', 0.2], ['rose', 'white', 0.13], ['peony', 'peony', 0.18],
    ['carnation', 'carnation', 0.14], ['rose', 'peach', 0.08], ['peony', 'white', 0.05],
  ];
  const pick = () => {
    let t = rand();
    for (const k of kinds) { if ((t -= k[2]) <= 0) return k; }
    return kinds[0];
  };

  let row = 0;
  for (let y = base * 0.05; y < H; y += gap * 0.84, row++) {
    for (let x = -base * 0.15 + (row % 2) * gap * 0.5; x < W + base * 0.2; x += gap) {
      const nx = x / W - 0.5;
      const maxY = H - base * 0.42 - Math.abs(nx) * H * 0.22 + Math.sin(x / 70) * base * 0.08;
      const fx = x + (rand() - 0.5) * gap * 0.4;
      const fy = y + (rand() - 0.5) * gap * 0.35;
      if (fy > maxY) continue;
      const [type, color] = pick();
      flowers.push({ type, color, x: fx, y: fy, s: base * (0.72 + rand() * 0.5), r: rand() * 360 });
      if (fy > maxY - gap * 1.1) {
        // greenery peeking out along the lower edge of the bouquet
        for (let k = 0; k < 2; k++) {
          const ang = 180 + (fx - W / 2) / W * 70 + (rand() - 0.5) * 80;
          leaves.push({ x: fx + (rand() - 0.5) * gap * 0.7, y: fy + gap * (0.35 + rand() * 0.3), s: base * (0.6 + rand() * 0.3), r: ang, v: rand() < 0.5 ? 1 : 2 });
        }
      }
      if (rand() < 0.55) {
        const ang = Math.atan2(fy - H * 0.2, fx - W / 2) * 180 / Math.PI + 90 + (rand() - 0.5) * 70;
        leaves.push({ x: fx + (rand() - 0.5) * gap * 0.6, y: fy + (rand() - 0.3) * gap * 0.5, s: base * (0.55 + rand() * 0.35), r: ang, v: rand() < 0.5 ? 1 : 2 });
      }
      if (rand() < 0.22) fillers.push({ x: fx + (rand() - 0.5) * gap, y: fy + (rand() - 0.5) * gap * 0.6, s: base * 0.55, r: rand() * 360, bud: rand() < 0.45, color: rand() < 0.5 ? 'pink' : 'red' });
    }
  }

  // The hero rose: the one closest to the lower-left; it glides in from the corner.
  let hero = flowers[0];
  for (const f of flowers) {
    if (f.y > H * 0.35 && (hero.y < H * 0.35 || f.x < hero.x)) hero = f;
  }
  hero.type = 'rose'; hero.color = 'red'; hero.s = base * 1.3; hero.hero = true;
  if (hero.x < base * 0.6) hero.x = base * 0.6;

  const maxD = Math.hypot(W, H);
  const delayFor = (o) => 1.3 + (Math.hypot(o.x - hero.x, o.y - hero.y) / maxD) * 2.6;

  flowers.sort((a, b) => a.y - b.y);
  let html = '';
  const place = (o, inner, cls, d) =>
    `<div class="${cls}" style="--x:${o.x.toFixed(0)}px;--y:${o.y.toFixed(0)}px;--s:${o.s.toFixed(0)}px;--r:${o.r.toFixed(0)}deg;--d:${d.toFixed(2)}s">${inner}</div>`;
  for (const l of leaves) html += place(l, leafSVG(l.v), 'bq leaf', delayFor(l) - 0.25);
  for (const f of fillers) html += place(f, f.bud ? flowerSVG('bud', f.color) : babysBreathSVG(), 'bq filler', delayFor(f) + 0.2);
  for (const f of flowers) if (!f.hero) html += place(f, flowerSVG(f.type, f.color), 'bq flower', delayFor(f));
  html += place(hero, flowerSVG('rose', 'red'), 'bq flower hero', 0);
  box.innerHTML = html;
}

/* =====================================================================
   1 + 2. Intro flow: bloom → envelope → board
   ===================================================================== */
const Intro = {
  stage: 'bloom',
  init() {
    buildBouquet();
    $('#envSeal').innerHTML = sealSVG();
    const intro = $('#intro');
    requestAnimationFrame(() => intro.classList.add('is-blooming'));

    intro.addEventListener('click', (e) => {
      if (this.stage === 'bloom') this.toEnvelope();
      else if (this.stage === 'env' && e.target.closest('#envelope')) this.openEnvelope();
    });
    document.addEventListener('keydown', (e) => {
      if (this.stage === 'bloom' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); this.toEnvelope(true); }
    });
  },
  toEnvelope(viaKeyboard = false) {
    this.stage = 'env';
    const intro = $('#intro');
    intro.classList.add('stage-env');
    $('#envelopeWrap').setAttribute('aria-hidden', 'false');
    const env = $('#envelope');
    env.tabIndex = 0;
    if (viaKeyboard) setTimeout(() => env.focus({ preventScroll: true }), 900);
  },
  async openEnvelope() {
    if (this.stage !== 'env') return;
    this.stage = 'opening';
    const intro = $('#intro');
    intro.classList.add('env-open');
    await wait(Calm.on ? 700 : 2300);
    Board.show();
    intro.classList.add('is-leaving');
    await wait(1300);
    intro.hidden = true;
    this.stage = 'done';
  },
};

/* =====================================================================
   Falling hearts / petals (slow, few, pastel)
   ===================================================================== */
const FX = {
  heart: (c) => `<svg viewBox="0 0 32 30"><path d="M16 29C7 22 1 16 1 9.5 1 4.8 4.8 1 9.3 1c2.8 0 5.3 1.4 6.7 3.6C17.4 2.4 19.9 1 22.7 1 27.2 1 31 4.8 31 9.5 31 16 25 22 16 29Z" fill="${c}"/></svg>`,
  petal: (c) => `<svg viewBox="0 0 30 40"><path d="M15 39C3 30 0 16 6 6 9 1 13 0 15 4 17 0 21 1 24 6 30 16 27 30 15 39Z" fill="${c}"/><path d="M15 36C14 26 14 16 15 6" stroke="#fff" stroke-opacity=".35" stroke-width="1.2" fill="none"/></svg>`,
  colors: ['#F4B6C2', '#F9CFD7', '#E8A5A5', '#F7D9C9', '#E6C9EE', '#FBE3E8'],

  drift(count, { kind = 'heart', layer = $('#fx'), spread = 4, minDur = 9, maxDur = 14, size = [14, 24] } = {}) {
    if (Calm.on) return;
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'drop';
      const s = size[0] + Math.random() * (size[1] - size[0]);
      el.style.cssText = `left:${(Math.random() * 100).toFixed(1)}%;--dur:${(minDur + Math.random() * (maxDur - minDur)).toFixed(1)}s;--delay:${(Math.random() * spread).toFixed(1)}s;--size:${s.toFixed(0)}px;--spin:${((Math.random() - 0.5) * 220).toFixed(0)}deg;--sway:${(2.8 + Math.random() * 2).toFixed(1)}s`;
      const c = this.colors[Math.floor(Math.random() * this.colors.length)];
      el.innerHTML = `<div class="drop__sway">${kind === 'petal' ? this.petal(c) : this.heart(c)}</div>`;
      el.addEventListener('animationend', (e) => { if (e.target === el) el.remove(); });
      layer.appendChild(el);
    }
  },
  clearAll() { $$('.drop').forEach((d) => d.remove()); },
};

/* =====================================================================
   3. Board: drag, bring to front
   ===================================================================== */
const Board = {
  z: 10,
  init() {
    $$('.item').forEach((el) => this.makeDraggable(el));
  },
  show() {
    const board = $('#board');
    board.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => board.classList.add('is-in')));
    Polaroids.prepareAll();
    MemoryMap.watch();
  },
  front(el) { el.style.zIndex = ++this.z; },
  makeDraggable(el) {
    let drag = null, moved = false;
    el.addEventListener('pointerdown', (e) => {
      moved = false;
      this.front(el);
      if (e.button !== 0) return;
      const handle = e.target.closest('.tape');
      const interactive = e.target.closest('button, a, canvas, iframe, input, .leaflet-container');
      // Touch: only the washi tape drags (so the page can still scroll). Mouse: anywhere non-interactive.
      if (!handle && (e.pointerType !== 'mouse' || interactive)) return;
      if (handle) e.preventDefault();
      drag = {
        id: e.pointerId, x: e.clientX, y: e.clientY,
        dx: parseFloat(el.style.getPropertyValue('--dx')) || 0,
        dy: parseFloat(el.style.getPropertyValue('--dy')) || 0,
      };
    });
    el.addEventListener('pointermove', (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const mx = e.clientX - drag.x, my = e.clientY - drag.y;
      if (!moved && Math.hypot(mx, my) < 5) return;
      if (!moved) {
        moved = true;
        el.classList.add('is-dragging');
        try { el.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      }
      const maxX = window.innerWidth * 0.6;
      el.style.setProperty('--dx', `${clamp(drag.dx + mx, -maxX, maxX)}px`);
      el.style.setProperty('--dy', `${drag.dy + my}px`);
    });
    const end = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      drag = null;
      el.classList.remove('is-dragging');
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    // A drag should not count as a click on whatever is under the pointer
    el.addEventListener('click', (e) => {
      if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; }
    }, true);
  },
};

function onActivate(el, fn) {
  el.addEventListener('click', fn);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(e); }
  });
}

/* =====================================================================
   Modal (letter + open-when notes)
   ===================================================================== */
const Modal = {
  timers: [],
  lastFocus: null,
  init() {
    $$('#modal [data-close]').forEach((b) => b.addEventListener('click', () => this.close()));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#modal').hidden) this.close(); });
  },
  open(html, cls = '') {
    const m = $('#modal');
    this.lastFocus = document.activeElement;
    $('#modalContent').innerHTML = html;
    $('.modal__panel', m).className = `modal__panel ${cls}`;
    m.hidden = false;
    document.documentElement.classList.add('no-scroll');
    requestAnimationFrame(() => requestAnimationFrame(() => m.classList.add('is-open')));
    $('.modal__close', m).focus({ preventScroll: true });
    $('.modal__panel', m).scrollTop = 0;
  },
  revealSequence(selector, step = 650, first = 450) {
    const els = $$(selector, $('#modalContent'));
    if (Calm.on) { els.forEach((p) => p.classList.add('show')); return; }
    els.forEach((p, i) => this.timers.push(setTimeout(() => p.classList.add('show'), first + i * step)));
  },
  close() {
    const m = $('#modal');
    this.timers.forEach(clearTimeout); this.timers = [];
    m.classList.remove('is-open');
    document.documentElement.classList.remove('no-scroll');
    setTimeout(() => { m.hidden = true; $('#modalContent').innerHTML = ''; }, 500);
    if (this.lastFocus) this.lastFocus.focus({ preventScroll: true });
  },
};

/* a. Letter */
const Letter = {
  init() {
    const L = CONFIG.letter;
    $('.letter-preview__hi').textContent = L.greeting;
    $('.letter-preview__text').textContent = L.paragraphs.slice(0, 2).join(' ');
    $('#letterArt').innerHTML = `<span class="mini-sun">${sunSVG()}</span><span class="mini-fl">${flowerSVG('rose', 'pink')}</span><span class="mini-fl mini-fl--2">${flowerSVG('daisy')}</span>`;
    onActivate($('#letterPreview'), () => this.open());
  },
  open() {
    const L = CONFIG.letter;
    const html = `<article class="paper paper--letter">
        <div class="paper__art" aria-hidden="true"><span class="mini-sun">${sunSVG()}</span><span class="mini-fl">${flowerSVG('rose', 'pink')}</span><span class="mini-fl mini-fl--2">${flowerSVG('peony', 'peony')}</span></div>
        <h2 class="letter__hi reveal">${esc(L.greeting)}</h2>
        ${L.paragraphs.map((p) => `<p class="letter__p reveal">${esc(p)}</p>`).join('')}
        <p class="letter__sign reveal">${esc(L.signature)}</p>
      </article>`;
    Modal.open(html, 'modal__panel--letter');
    Modal.revealSequence('.reveal', 750, 500);
  },
};

/* =====================================================================
   b. Scratch-off polaroids
   ===================================================================== */
const Polaroids = {
  tapes: ['pink', 'lilac', 'mint', 'yellow', 'pink'],
  init() {
    $$('[data-polaroid]').forEach((item) => {
      const i = +item.dataset.polaroid;
      const p = CONFIG.polaroids[i];
      if (!p) { item.remove(); return; }
      item.innerHTML = `<span class="tape tape--${this.tapes[i % this.tapes.length]}" aria-hidden="true"></span>
        <figure class="polaroid">
          <div class="polaroid__photo">
            ${photoHTML(p.photo, p.caption)}
            <canvas class="scratch" tabindex="0" aria-label="Scratch to reveal a photo (or press Enter)"></canvas>
          </div>
          <figcaption class="polaroid__cap">
            <span class="polaroid__hint">✦ scratch the photo ✦</span>
            <span class="polaroid__text">${esc(p.caption)}</span>
          </figcaption>
        </figure>`;
    });
  },
  async prepareAll() {
    try {
      await Promise.race([document.fonts.load('600 30px Caveat'), wait(1500)]);
    } catch (e) { /* ignore */ }
    $$('.scratch').forEach((c) => this.setup(c));
  },
  setup(canvas) {
    if (canvas.dataset.ready) return;
    canvas.dataset.ready = '1';
    const box = canvas.parentElement;
    const w = box.offsetWidth, h = box.offsetHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.scale(dpr, dpr);

    // the purple-pink foil
    const grd = ctx.createLinearGradient(0, 0, w, h);
    grd.addColorStop(0, '#CDB6EE'); grd.addColorStop(0.5, '#E4B8E0'); grd.addColorStop(1, '#F5BCD0');
    ctx.fillStyle = grd; ctx.fillRect(0, 0, w, h);
    const r = mulberry32(w + h);
    ctx.fillStyle = 'rgba(255,255,255,.35)';
    for (let i = 0; i < 26; i++) { ctx.beginPath(); ctx.arc(r() * w, r() * h, 0.8 + r() * 1.6, 0, Math.PI * 2); ctx.fill(); }
    ctx.fillStyle = 'rgba(255,255,255,.92)';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = `600 ${Math.round(Math.min(w, 220) * 0.17)}px Caveat, cursive`;
    ctx.fillText('Scratch me', w / 2, h / 2 - 4);
    ctx.font = `${Math.round(Math.min(w, 220) * 0.09)}px Quicksand, sans-serif`;
    ctx.fillText('✦  ✦  ✦', w / 2, h / 2 + Math.min(w, 220) * 0.15);

    const brush = Math.max(16, w * 0.11);
    let last = null, strokes = 0, done = false;

    const toLocal = (e) => {
      // map the pointer into the canvas even though the polaroid is rotated
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
      const m = new DOMMatrixReadOnly(getComputedStyle(canvas.closest('.item')).transform === 'none' ? undefined : getComputedStyle(canvas.closest('.item')).transform);
      const ang = Math.atan2(m.b, m.a), sc = Math.hypot(m.a, m.b) || 1;
      const px = e.clientX - cx, py = e.clientY - cy;
      const cos = Math.cos(-ang), sin = Math.sin(-ang);
      return { x: (px * cos - py * sin) / sc + w / 2, y: (px * sin + py * cos) / sc + h / 2 };
    };
    const scratchTo = (p) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.lineWidth = brush * 2;
      ctx.beginPath();
      ctx.moveTo((last || p).x, (last || p).y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      last = p;
    };
    const progress = () => {
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let clear = 0, total = 0;
      for (let i = 3; i < data.length; i += 4 * 24) { total++; if (data[i] < 40) clear++; }
      return clear / total;
    };
    const reveal = () => {
      if (done) return;
      done = true;
      const pol = canvas.closest('.polaroid');
      pol.classList.add('is-revealed');
      canvas.setAttribute('aria-hidden', 'true');
      canvas.tabIndex = -1;
      setTimeout(() => canvas.remove(), 1400);
      FX.drift(5, { kind: 'heart', spread: 2.5 });
    };

    canvas.addEventListener('pointerdown', (e) => {
      if (done) return;
      e.preventDefault();
      canvas.setPointerCapture(e.pointerId);
      last = null;
      scratchTo(toLocal(e));
    });
    canvas.addEventListener('pointermove', (e) => {
      if (done || !canvas.hasPointerCapture(e.pointerId)) return;
      scratchTo(toLocal(e));
      if (++strokes % 14 === 0 && progress() > 0.6) reveal();
    });
    const up = () => { last = null; if (!done && progress() > 0.6) reveal(); };
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
    canvas.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); reveal(); }
    });
  },
};

/* =====================================================================
   c. Booster pack + photocards
   ===================================================================== */
const FRAMES = ['#F6C9D3', '#E3D3F3', '#CFE6DD', '#F8DFC6', '#D6E3F5', '#F3D0E6', '#E9E3C9', '#F4CFC9', '#DCD4F0', '#CDE3EA'];

function zigzag(n, top) {
  const pts = [];
  for (let i = 0; i <= n * 2; i++) {
    const x = (i / (n * 2)) * 100;
    const y = i % 2 ? (top ? 0 : 100) : (top ? 45 : 55);
    pts.push(`${x.toFixed(2)}% ${y}%`);
  }
  return top ? `polygon(${pts.join(',')}, 100% 100%, 0% 100%)` : `polygon(0% 0%, 100% 0%, ${pts.reverse().join(',')})`;
}

function packArtHTML() {
  return `<div class="pack-art__crimp pack-art__crimp--top"></div>
    <div class="pack-art__band"><span class="pack-art__tear"></span></div>
    <div class="pack-art__body">
      <p class="pack-art__brand">THE ${esc(CONFIG.names.to.toUpperCase())}<br>COLLECTION</p>
      <div class="pack-art__emblem">${flowerSVG('rose', 'pink')}</div>
      <p class="pack-art__ed">${esc(CONFIG.pack.edition)}</p>
      <p class="pack-art__count">${CONFIG.pack.cards.length + 1} photocards inside</p>
    </div>
    <div class="pack-art__crimp pack-art__crimp--bottom"></div>`;
}

function applyCrimps(root = document) {
  $$('.pack-art__crimp--top', root).forEach((c) => (c.style.clipPath = zigzag(14, true)));
  $$('.pack-art__crimp--bottom', root).forEach((c) => (c.style.clipPath = zigzag(14, false)));
}

function cardHTML(i) {
  const cards = CONFIG.pack.cards;
  const total = cards.length + 1;
  const no = `No. ${String(i + 1).padStart(2, '0')} / ${total}`;
  const back = `<div class="tcard__face tcard__back"><div class="tcard__back-oval"><span>for ${esc(CONFIG.names.nickname)}</span></div></div>`;
  if (i >= cards.length) {
    const s = CONFIG.pack.secret;
    return `<div class="tcard tcard--secret" data-i="${i}"><div class="tcard__tilt"><div class="tcard__inner">
        <div class="tcard__face tcard__front">
          <div class="tcard__top"><span>${esc(CONFIG.names.nickname)}</span><span>${no}</span></div>
          <div class="tcard__secret">
            <p class="tcard__secret-rarity">${esc(s.rarity)}</p>
            <div class="tcard__secret-art">${flowerSVG('peony', 'peony')}</div>
            <p class="tcard__secret-title">${esc(s.title)}</p>
            <p class="tcard__secret-text">${esc(s.text)}</p>
          </div>
          <div class="tcard__holo"></div><div class="tcard__glare"></div>
        </div>${back}</div></div></div>`;
  }
  const c = cards[i];
  return `<div class="tcard" data-i="${i}" style="--frame:${FRAMES[i % FRAMES.length]}"><div class="tcard__tilt"><div class="tcard__inner">
      <div class="tcard__face tcard__front">
        <div class="tcard__top"><span>${esc(CONFIG.names.nickname)}</span><span>${no}</span></div>
        <div class="tcard__photo">${photoHTML(c.photo, c.word, { lazy: false })}</div>
        <p class="tcard__word${c.word.length > 55 ? ' tcard__word--long' : ''}">${esc(c.word)}</p>
        <p class="tcard__rarity">${esc(c.rarity)}</p>
        <div class="tcard__holo"></div><div class="tcard__glare"></div>
      </div>${back}</div></div></div>`;
}

/* Soft holo: follows the cursor / phone tilt, smoothed, no sparkles */
const Holo = {
  card: null, tx: 50, ty: 50, x: 50, y: 50, raf: 0, gyro: false,
  attach(card) {
    this.card = card; this.tx = this.ty = 50;
    if (!this.raf) this.loop();
  },
  detach() { this.card = null; cancelAnimationFrame(this.raf); this.raf = 0; },
  point(e) {
    if (!this.card || this.gyroActive) return;
    const r = this.card.getBoundingClientRect();
    this.tx = clamp(((e.clientX - r.left) / r.width) * 100, 0, 100);
    this.ty = clamp(((e.clientY - r.top) / r.height) * 100, 0, 100);
  },
  orient(e) {
    if (!this.card || e.gamma == null) return;
    this.gyroActive = true;
    this.tx = clamp(50 + e.gamma * 2.2, 0, 100);
    this.ty = clamp(50 + (e.beta - 40) * 2.2, 0, 100);
  },
  requestGyro() {
    if (this.gyro) return;
    this.gyro = true;
    const add = () => window.addEventListener('deviceorientation', (e) => this.orient(e));
    try {
      if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then((s) => { if (s === 'granted') add(); }).catch(() => {});
      } else add();
    } catch (e) { /* ignore */ }
  },
  loop() {
    this.raf = requestAnimationFrame(() => this.loop());
    if (!this.card) return;
    const tx = Calm.on ? 50 : this.tx, ty = Calm.on ? 50 : this.ty;
    // slow easing → no sudden brightness jumps
    this.x += (tx - this.x) * 0.06;
    this.y += (ty - this.y) * 0.06;
    const s = this.card.style;
    s.setProperty('--mx', `${this.x.toFixed(1)}%`);
    s.setProperty('--my', `${this.y.toFixed(1)}%`);
    s.setProperty('--rx', `${((50 - this.y) / 50 * 7).toFixed(2)}deg`);
    s.setProperty('--ry', `${((this.x - 50) / 50 * 9).toFixed(2)}deg`);
  },
};

const Pack = {
  opened: false, idx: 0, busy: false,
  init() {
    const mini = $('#miniPack');
    const art = $('.pack-art', mini);
    art.innerHTML = packArtHTML();
    applyCrimps(mini);
    onActivate(mini, () => this.open());
    $('#packClose').addEventListener('click', () => this.close());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#packOverlay').hidden) this.close(); });
    const stage = $('#packStage');
    stage.addEventListener('pointermove', (e) => Holo.point(e));
  },
  open() {
    const ov = $('#packOverlay');
    ov.hidden = false;
    document.documentElement.classList.add('no-scroll');
    requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add('is-open')));
    Holo.requestGyro();
    if (this.opened) this.renderBinder(); else this.renderSealed();
  },
  close() {
    const ov = $('#packOverlay');
    ov.classList.remove('is-open');
    document.documentElement.classList.remove('no-scroll');
    Holo.detach();
    setTimeout(() => { ov.hidden = true; $('#packStage').innerHTML = ''; }, 600);
    if (!this.opened) this.idx = 0;
  },
  renderSealed() {
    const stage = $('#packStage');
    stage.innerHTML = `<div class="sealed">
        <div class="big-pack" id="bigPack">
          <div class="big-pack__strip" id="tearStrip" role="button" tabindex="0" aria-label="Tear the pack open">
            <div class="pack-art__crimp pack-art__crimp--top"></div>
            <div class="pack-art__band"><span class="pack-art__tear"></span><span class="tear-hint">✂ swipe here →</span></div>
          </div>
          <div class="big-pack__rest pack-art">${packArtHTML()}</div>
        </div>
        <p class="stage-hint">swipe across the top of the pack (or just tap it) ✦</p>
      </div>`;
    applyCrimps(stage);
    const strip = $('#tearStrip');
    let sx = null, dx = 0;
    strip.addEventListener('pointerdown', (e) => {
      sx = e.clientX; dx = 0;
      strip.setPointerCapture(e.pointerId);
      strip.classList.add('is-pulling');
    });
    strip.addEventListener('pointermove', (e) => {
      if (sx === null) return;
      dx = e.clientX - sx;
      const w = strip.offsetWidth;
      strip.style.transform = `translateX(${(dx * 0.12).toFixed(1)}px) rotate(${clamp((dx / w) * 7, -7, 7).toFixed(2)}deg)`;
    });
    const release = () => {
      if (sx === null) return;
      sx = null;
      strip.classList.remove('is-pulling');
      if (Math.abs(dx) < 6 || Math.abs(dx) > strip.offsetWidth * 0.3) this.tear();
      else strip.style.transform = '';
    };
    strip.addEventListener('pointerup', release);
    strip.addEventListener('pointercancel', release);
    strip.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.tear(); } });
  },
  async tear() {
    const stage = $('#packStage');
    const pack = $('#bigPack');
    if (!pack || pack.classList.contains('is-torn')) return;
    $('#tearStrip').style.transform = '';
    pack.classList.add('is-torn');
    $('.stage-hint', stage).classList.add('is-hidden');
    await wait(Calm.on ? 500 : 1700);
    this.renderReveal();
  },
  renderReveal() {
    const stage = $('#packStage');
    stage.innerHTML = `<div class="reveal-stage">
        <p class="reveal-stage__count" id="revealCount"></p>
        <div class="reveal-stage__slot" id="revealSlot"></div>
        <div class="reveal-stage__actions">
          <button type="button" class="pill-btn" id="flipBtn">↻ flip card</button>
          <button type="button" class="pill-btn pill-btn--main" id="nextBtn">next card →</button>
        </div>
        <p class="stage-hint" id="revealHint">tap the card for the next one</p>
      </div>`;
    this.idx = 0;
    this.showCard(0);
    $('#flipBtn').addEventListener('click', () => { const c = $('#revealSlot .tcard:not(.is-leaving)'); if (c) c.classList.toggle('is-flipped'); });
    $('#nextBtn').addEventListener('click', () => this.next());
    $('#revealSlot').addEventListener('click', (e) => { if (e.target.closest('.tcard')) this.next(); });
  },
  showCard(i) {
    const slot = $('#revealSlot');
    const total = CONFIG.pack.cards.length + 1;
    slot.insertAdjacentHTML('beforeend', cardHTML(i));
    const card = slot.lastElementChild;
    card.classList.add('is-entering');
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove('is-entering')));
    Holo.attach(card);
    $('#revealCount').textContent = `${i + 1} / ${total}`;
    const last = i === total - 1;
    $('#nextBtn').textContent = last ? 'put them in your binder ✦' : 'next card →';
    $('#revealHint').textContent = last ? 'the rarest card of all ♡' : 'tap the card for the next one';
    if (last) FX.drift(8, { kind: 'heart', spread: 3, layer: $('#packOverlay') });
  },
  async next() {
    if (this.busy) return;
    this.busy = true;
    const total = CONFIG.pack.cards.length + 1;
    const cur = $('#revealSlot .tcard:not(.is-leaving)');
    if (this.idx >= total - 1) {
      this.opened = true;
      $('#miniPackHint').textContent = 'open your binder ✦';
      $('#miniPack').classList.add('is-opened');
      this.busy = false;
      this.renderBinder(true);
      return;
    }
    if (cur) {
      cur.classList.add('is-leaving');
      setTimeout(() => cur.remove(), 900);
    }
    await wait(Calm.on ? 150 : 350);
    this.idx++;
    this.showCard(this.idx);
    await wait(Calm.on ? 250 : 450);
    this.busy = false;
  },
  renderBinder(fresh = false) {
    Holo.detach();
    const stage = $('#packStage');
    const total = CONFIG.pack.cards.length + 1;
    let cards = '';
    for (let i = 0; i < total; i++) {
      cards += `<button type="button" class="binder__slot" data-i="${i}" style="--i:${i}" aria-label="Look at card ${i + 1}">${cardHTML(i)}</button>`;
    }
    stage.innerHTML = `<div class="binder ${fresh ? 'is-fresh' : ''}">
        <p class="binder__title">your binder · The ${esc(CONFIG.names.to)} Collection</p>
        <p class="binder__sub">complete set ✦ ${total}/${total} · tap a card to look closer</p>
        <div class="binder__grid">${cards}</div>
        <button type="button" class="pill-btn binder__again" id="reopenPack">↺ open the pack again</button>
      </div>
      <div class="zoom" id="zoom" hidden>
        <div class="zoom__slot" id="zoomSlot"></div>
        <div class="reveal-stage__actions">
          <button type="button" class="pill-btn" id="zoomFlip">↻ flip card</button>
          <button type="button" class="pill-btn pill-btn--main" id="zoomBack">back to binder</button>
        </div>
      </div>`;
    $$('.binder__slot', stage).forEach((b) => b.addEventListener('click', () => this.zoom(+b.dataset.i)));
    $('#reopenPack').addEventListener('click', () => { this.opened = false; this.renderSealed(); });
    $('#zoomBack').addEventListener('click', () => this.unzoom());
    $('#zoomFlip').addEventListener('click', () => { const c = $('#zoomSlot .tcard'); if (c) c.classList.toggle('is-flipped'); });
    $('#zoomSlot').addEventListener('click', (e) => { const c = e.target.closest('.tcard'); if (c) c.classList.toggle('is-flipped'); });
  },
  zoom(i) {
    const z = $('#zoom');
    $('#zoomSlot').innerHTML = cardHTML(i);
    z.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => z.classList.add('is-open')));
    Holo.attach($('#zoomSlot .tcard'));
    $('#zoomBack').focus({ preventScroll: true });
  },
  unzoom() {
    const z = $('#zoom');
    z.classList.remove('is-open');
    Holo.detach();
    setTimeout(() => { z.hidden = true; $('#zoomSlot').innerHTML = ''; }, 500);
  },
};

/* =====================================================================
   d. Music card
   ===================================================================== */
function spotifyEmbedURL(url) {
  const m = String(url).match(/open\.spotify\.com\/(?:intl-[a-z-]+\/)?(track|album|playlist|episode|show)\/([A-Za-z0-9]+)/);
  return m ? `https://open.spotify.com/embed/${m[1]}/${m[2]}?utm_source=generator&theme=0` : null;
}
function initMusic() {
  const box = $('#musicEmbed');
  const src = spotifyEmbedURL(SPOTIFY_TRACK_URL);
  $('.music__disc span').innerHTML = flowerSVG('rose', 'red');
  if (!src) { box.innerHTML = '<p class="music__empty">add a Spotify link in script.js ♪</p>'; return; }
  box.innerHTML = `<iframe title="A song for ${esc(CONFIG.names.nickname)}" src="${src}" width="100%" height="152" frameborder="0"
      allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

/* =====================================================================
   e. Open when…
   ===================================================================== */
function initOpenWhen() {
  const list = $('#openWhenList');
  const colors = ['#F7D7DC', '#E7DCF5', '#FBEBD0'];
  list.innerHTML = CONFIG.openWhen.map((o, i) => `
    <button type="button" class="mini-env" data-i="${i}" style="--env:${colors[i % colors.length]}; --tilt:${[-2, 1.5, -1][i % 3]}deg">
      <span class="mini-env__flap"></span>
      <span class="mini-env__label">${esc(o.label)}…</span>
      <span class="mini-env__heart" aria-hidden="true">♥</span>
    </button>`).join('');
  $$('.mini-env', list).forEach((b) => b.addEventListener('click', () => {
    const o = CONFIG.openWhen[+b.dataset.i];
    b.classList.add('is-opened');
    Modal.open(`<article class="paper paper--note">
        <p class="note__label reveal">${esc(o.label)}</p>
        ${o.photo ? `<div class="note__photo reveal">${photoHTML(o.photo, 'Photo 02', { lazy: false })}<span class="note__photo-no">#${esc(o.photo)}</span></div>` : ''}
        <p class="note__text reveal">${esc(o.text)}</p>
        <p class="note__sign reveal">${esc(CONFIG.letter.signature)}</p>
      </article>`, 'modal__panel--note');
    Modal.revealSequence('.reveal', 600, 350);
  }));
}

/* =====================================================================
   f. Jar of reasons
   ===================================================================== */
const Jar = {
  queue: [], taken: 0,
  init() {
    const n = CONFIG.reasons.length;
    const r = mulberry32(9);
    const colors = ['#FBE3E8', '#F9EBD6', '#E8E0F6', '#DDEFE6', '#FFF6E2', '#F6D6D6'];
    let scrolls = '';
    for (let i = 0; i < n; i++) {
      const x = -26 + (i % 4) * 17 + (r() - 0.5) * 6;
      const y = 40 - Math.floor(i / 4) * 15 + (r() - 0.5) * 5;
      const rot = (r() - 0.5) * 70;
      const c = colors[i % colors.length];
      scrolls += `<g class="jar__scroll" data-n="${i}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(0)})">
          <rect x="-11" y="-4.5" width="22" height="9" rx="4.5" fill="${c}" stroke="#C9A99A" stroke-width=".7"/>
          <ellipse cx="11" cy="0" rx="2.2" ry="4.5" fill="#fff" stroke="#C9A99A" stroke-width=".6"/>
          <path d="M-3-4.5V4.5" stroke="#E8A5A5" stroke-width="1.6"/></g>`;
    }
    $('#jarBtn').innerHTML = `<svg viewBox="-60 -80 120 160" aria-hidden="true">
        <ellipse cx="0" cy="72" rx="44" ry="6" fill="#B8323F" opacity=".08"/>
        <path d="M-36-38C-46-30-48-16-48 0V52C-48 64-40 70-30 70H30C40 70 48 64 48 52V0C48-16 46-30 36-38Z" fill="#FFFFFF" fill-opacity=".35" stroke="#C7A9A9" stroke-width="1.6"/>
        <g class="jar__scrolls">${scrolls}</g>
        <path d="M-38-6C-38-20-34-28-28-32" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none" opacity=".75"/>
        <path d="M-40 10V40" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".55"/>
        <rect x="-34" y="-50" width="68" height="14" rx="5" fill="#E8C8A8" stroke="#C49A78" stroke-width="1.2"/>
        <rect x="-38" y="-62" width="76" height="14" rx="6" fill="#D8A97F" stroke="#B9875D" stroke-width="1.2"/>
        <path d="M-34-55H34" stroke="#C4936A" stroke-dasharray="3 3" stroke-width="1"/>
        <path d="M-6-44C-22-54-26-40-10-40M6-44C22-54 26-40 10-40" fill="#E8A5A5" stroke="#C2566E" stroke-width="1.2"/>
        <path d="M-6-41L-12-26M6-41L12-26" stroke="#E8A5A5" stroke-width="3" stroke-linecap="round"/>
        <circle cx="0" cy="-43" r="4" fill="#C2566E"/>
      </svg>`;
    this.refill();
    $('#jarBtn').addEventListener('click', () => this.take());
  },
  refill() {
    this.queue = shuffle(CONFIG.reasons.map((_, i) => i));
    this.taken = 0;
    $$('.jar__scroll').forEach((s) => s.classList.remove('is-gone'));
    this.updateLeft();
  },
  updateLeft() {
    const left = this.queue.length;
    $('#jarLeft').textContent = left ? `tap the jar · ${left} little notes inside` : 'tap the jar to fill it up again';
  },
  take() {
    const note = $('#jarNote');
    if (!this.queue.length) {
      this.refill();
      note.innerHTML = '';
      return;
    }
    const idx = this.queue.shift();
    const scrollEls = $$('.jar__scroll:not(.is-gone)');
    if (scrollEls.length) scrollEls[scrollEls.length - 1].classList.add('is-gone');
    this.taken++;
    const done = !this.queue.length;
    note.innerHTML = `<p class="slip"><span class="slip__no">${this.taken}/${CONFIG.reasons.length}</span>${esc(CONFIG.reasons[idx])}</p>
      ${done ? `<p class="slip slip--done">${esc(CONFIG.reasonsDone)}</p>` : ''}`;
    if (done) FX.drift(6, { kind: 'heart', spread: 2.5 });
    this.updateLeft();
  },
};

/* =====================================================================
   g. Memory map
   ===================================================================== */
const MemoryMap = {
  started: false,
  watch() {
    const el = $('#memoryMap');
    if (!('IntersectionObserver' in window)) { this.start(); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); this.start(); }
    }, { rootMargin: '200px' });
    io.observe(el);
  },
  start() {
    if (this.started) return;
    this.started = true;
    const el = $('#memoryMap');
    if (!window.L) { el.innerHTML = '<p class="mapcard__fallback">the map could not load right now 🗺️</p>'; return; }
    const M = CONFIG.map;
    const map = L.map(el, {
      center: M.center, zoom: M.zoom, scrollWheelZoom: false,
      dragging: !L.Browser.mobile, // one finger keeps scrolling the page on phones
      zoomControl: true, attributionControl: true,
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    const bounds = [];
    M.pins.forEach((p) => {
      const ph = CONFIG.photos[p.photo];
      const img = ph ? photoHTML(p.photo, '', { lazy: false }) : '';
      const icon = L.divIcon({ className: 'pin', html: `<div class="pin__photo">${img}</div><div class="pin__tip"></div>`, iconSize: [54, 66], iconAnchor: [27, 66], popupAnchor: [0, -62] });
      L.marker([p.lat, p.lng], { icon, title: p.name }).addTo(map)
        .bindPopup(`<div class="pin-pop">${ph ? photoHTML(p.photo, p.name, { lazy: false }) : ''}<p class="pin-pop__name">${esc(p.name)}</p><p class="pin-pop__cap">${esc(p.caption)}</p></div>`, { maxWidth: 220, minWidth: 180 });
      bounds.push([p.lat, p.lng]);
    });
    if (bounds.length > 1) map.fitBounds(bounds, { padding: [50, 60], maxZoom: 13 });
    setTimeout(() => map.invalidateSize(), 400);
  },
};

/* =====================================================================
   4. Big hug
   ===================================================================== */
const Hug = {
  timer: 0,
  init() {
    $('#hugBig').textContent = CONFIG.hug.big;
    $('#hugSmall').textContent = CONFIG.hug.small;
    $('#hugFlowers').innerHTML = `<span>${flowerSVG('peony', 'peony')}</span><span class="big">${flowerSVG('rose', 'red')}</span><span>${flowerSVG('rose', 'pink')}</span>`;
    $('#hugBtn').addEventListener('click', () => this.open());
    $('#hugBack').addEventListener('click', () => this.close());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#hug').hidden) this.close(); });
  },
  open() {
    const h = $('#hug');
    h.hidden = false;
    document.documentElement.classList.add('no-scroll');
    requestAnimationFrame(() => requestAnimationFrame(() => h.classList.add('is-open')));
    const layer = $('#hugPetals');
    FX.drift(16, { kind: 'petal', layer, spread: 6, minDur: 10, maxDur: 15, size: [16, 28] });
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (layer.childElementCount < 34) FX.drift(1, { kind: 'petal', layer, spread: 0.5, minDur: 10, maxDur: 15, size: [16, 28] });
    }, 900);
    setTimeout(() => $('#hugBack').focus({ preventScroll: true }), 1200);
  },
  close() {
    const h = $('#hug');
    clearInterval(this.timer);
    h.classList.remove('is-open');
    document.documentElement.classList.remove('no-scroll');
    setTimeout(() => { h.hidden = true; $('#hugPetals').innerHTML = ''; }, 1000);
    $('#hugBtn').focus({ preventScroll: true });
  },
};

/* =====================================================================
   Boot
   ===================================================================== */
function bindNames() {
  const map = { toName: CONFIG.names.to, nickname: CONFIG.names.nickname, fromName: CONFIG.names.from, toNameUpper: CONFIG.names.to.toUpperCase() };
  $$('[data-bind]').forEach((el) => { el.textContent = map[el.dataset.bind] ?? ''; });
  document.title = `for ${CONFIG.names.to} 🌷`;
}

document.addEventListener('DOMContentLoaded', () => {
  buildDefs();
  bindNames();
  Calm.init();
  Modal.init();
  Letter.init();
  Polaroids.init();
  Pack.init();
  initMusic();
  initOpenWhen();
  Jar.init();
  Hug.init();
  Board.init();
  Intro.init();
});
