# Portfolio assets

- `mohamed-cutout.webp`: edited from the user's original `public/assets/cover.jpg` using the built-in image generation tool during the approved prototype. Black-and-white editorial portrait, white cut-paper outline, transparent background. The approved generated PNG was converted to WebP without cropping or stretching (1183 x 1330).
- `paper-flight.webp`: original aircraft/cloud/red-sun paper collage generated with the built-in image generation tool during prototyping. Transparent WebP, 1536 x 1024.
- `flywt-home.webp`: the user's real Fly WT home screenshot, 1896 x 786. Content and aspect ratio preserved; no invented interface elements.
- `flywt-preview.webp`: a 960 x 398 derivative for the inline views. The larger image loads when the screenshot dialog is first opened.
- `fonts/`: locally hosted Latin subsets of Anton (400), IBM Plex Mono (400/500), and Caveat (500/600), obtained from Google Fonts. Font license files are stored alongside them.

The assets are copied from the approved standalone prototype and optimized for the actual Angular app. No new generation was performed during this implementation.

Image direction from the prototype: preserve the portrait's recognizable appearance while making a grayscale paper-sticker cutout; create an original vintage paper-cut aircraft and cloud collage with a red circle and transparent surroundings. No text, logo, or product-interface fabrication.

Visual reference: https://www.idadu.dev/ . The reference informed the paper collage, dimensional layers, large typography, and scroll storytelling. Its assets and source code were not copied.

Animation dependency: GSAP 3.13.0 / ScrollTrigger, installed from npm. See https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/ and https://gsap.com/docs/v3/Plugins/ScrollTrigger/ .
