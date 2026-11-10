# AURA — The Cinematic Player

An original premium cinematic **Video.js v10** React skin and public demo website, prepared for the Video.js Skins Design Challenge.

## Design statement
AURA treats playback as part of the story. An editorial charcoal palette, warm ivory typography, a champagne-gold progress line, and restrained glass controls bring a feeling of cinema to modern portfolios, documentary sites, and creator platforms. The design prioritises intuitive interaction, accessible focus, responsive layout, and reduced-motion support.

## Requirements
- Node.js LTS and npm
- Network access for installing dependencies and loading the sample video

## Start

```bash
npm install
npm run dev
```

Open the local address printed by Vite.

## Production

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to Netlify or Vercel as a static site. For Netlify, deploy with build command `npm run build`, publish directory `dist`. For Vercel, Vite framework preset, build command `npm run build`, output directory `dist`.

## Video
The sample MP4 and poster used in the demonstration are from public Video.js documentation's Mux-hosted sample, **not** a user-owned Mux asset. They do not qualify for the challenge's bonus point. Replace with an appropriately licensed video / your Mux playback asset before submitting if necessary.

## Accessibility and QA checklist (must be manually verified after installing)
- Play/pause works with pointer, touch and keyboard.
- Timeline seeking via mouse, touch and arrow keys works.
- Current time and duration display correctly.
- Mute/unmute and volume slider work.
- Fullscreen enters and exits, including on mobile when supported.
- Tab order matches visual order; focus ring is visible.
- Check contrast over very bright and dark video.
- At 320px width, timeline and buttons remain operable.
- Reduce motion in OS settings: controls should not animate.
- Check no console errors, no broken network requests, error dialog displays on failed media.
- Review the Video.js v10 documentation for any API changes.

## Caveat on verification
The package registry was unreachable while these files were authored, so installation, compilation, playback and deployment **have not been executed** here. This is a source package, not yet a verified competition entry. Run the QA checklist before submitting.

## Credits / license
Concept and custom code: Nicolette Lange. Apache License 2.0 (see LICENSE). Third-party dependencies remain under their respective licenses.
