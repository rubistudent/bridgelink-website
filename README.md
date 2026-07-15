# Bridgelink — React + Tailwind build

This folder is already a complete, runnable project — you don't need to scaffold
anything with `npm create vite`. Just install and run.

## 1. Open a terminal INSIDE this folder

In VS Code: right-click the `react-tailwind` folder in the Explorer → **"Open in Integrated Terminal"**
(or `cd` to wherever you unzipped it, e.g. `cd ~/Downloads/bridgelink-react-tailwind/react-tailwind`).

You'll know you're in the right place if `ls` (or `dir` on Windows) shows a `package.json` file.

## 2. Install dependencies

```bash
npm install
```

## 3. Run it

```bash
npm run dev
```

Open the local URL it prints (usually `http://localhost:5173`) — that's your site.

## Common mistake

If you see `npm ERR! enoent Could not read package.json`, you're one folder too high —
`cd react-tailwind` (the inner folder, the one that directly contains `package.json`,
`src/`, and `public/`) and try again.

## How the code is organized (read this before editing)

- `src/data.js` — every piece of text and every image path lives here, in plain JS arrays/objects. This is the file you edit when you just want to change *words* or *swap a photo* — no JSX required.
- `src/components/BridgeDivider.jsx` — the signature visual: an SVG bridge arch used as a section divider. One component, reused 4 times with a different `fill` color passed in as a prop.
- `src/components/Navbar.jsx`, `Hero.jsx`, `About.jsx`, `Services.jsx`, `Catalogue.jsx`, `Process.jsx`, `Contact.jsx`, `Footer.jsx` — one component per section of the page.
- `src/App.jsx` — stacks all the section components in order. This is intentionally short — it should read like a table of contents for the page.

## Concepts this codebase teaches

1. **Props** — `BridgeDivider` takes a `fill` prop so one component can look different in four places.
2. **Mapping data to UI** — `Services.jsx` and `Catalogue.jsx` both loop over an array from `data.js` with `.map()` instead of hand-writing six almost-identical blocks of JSX.
3. **Tailwind's utility classes** — no custom CSS files per component; layout, color, spacing and typography are all classes on the element itself.
4. **`useState` + `useEffect`** — the mobile nav toggle (`useState`) and the scroll-triggered header background (`useEffect` + a scroll listener).
5. **Tailwind theme extension** — brand colors (`indigo`, `teal`, `coral`, `cream`) and fonts are registered once in `tailwind.config.js` so you write `bg-indigo` instead of `bg-[#241F6B]` everywhere.
