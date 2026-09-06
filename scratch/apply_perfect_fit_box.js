const fs = require('fs');

// 1. Update templates/product.json
const pjPath = 'templates/product.json';
const pj = JSON.parse(fs.readFileSync(pjPath, 'utf8'));
pj.sections.main.blocks['media-gallery'].settings.media_fit = 'contain';
pj.sections.main.blocks['media-gallery'].settings.aspect_ratio = 'adapt';
fs.writeFileSync(pjPath, JSON.stringify(pj, null, 2) + '\n', 'utf8');
console.log('templates/product.json: media_fit set to contain, aspect_ratio set to adapt!');

// 2. Update assets/myraveda-luxury.css
const cssPath = 'assets/myraveda-luxury.css';
let css = fs.readFileSync(cssPath, 'utf8');

const targetStart = '/* First Hero Image in Grid (Spans 2 columns, Full Edge-to-Edge Cover) */';
const targetEnd = '/* ==========================================================================\n   2.1 HAUTE LUXE TRUE FULL-SCREEN LIGHTBOX MODAL & INTERACTIVE ZOOM';

const sIdx = css.indexOf(targetStart);
const eIdx = css.indexOf(targetEnd);

if (sIdx === -1 || eIdx === -1) {
  throw new Error('Target range not found!');
}

const perfectFitCSS = `/* First Hero Image in Grid (Spans 2 columns, Perfectly Framed — Never Cut Off) */
.media-gallery--large-first-image .media-gallery__grid li:first-child,
.media-gallery .media-gallery__grid li:first-child {
  grid-column: span 2 !important;
  max-height: 520px !important;
  height: 520px !important;
  border-radius: 16px !important;
  background: #FFFFFF !important; /* Pure White Canvas matches image background seamlessly */
  border: 1.5px solid rgba(201, 158, 62, 0.28) !important;
  box-shadow: 0 8px 24px rgba(14, 40, 31, 0.05) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: hidden !important;
  position: relative !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery--large-first-image .media-gallery__grid li:first-child:hover,
.media-gallery .media-gallery__grid li:first-child:hover {
  border-color: rgba(201, 158, 62, 0.6) !important;
  box-shadow: 0 12px 32px rgba(201, 158, 62, 0.12) !important;
}

.media-gallery--large-first-image .media-gallery__grid li:first-child .product-media-constraint-wrapper,
.media-gallery--large-first-image .media-gallery__grid li:first-child .product-media,
.media-gallery .media-gallery__grid li:first-child .product-media-constraint-wrapper,
.media-gallery .media-gallery__grid li:first-child .product-media {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.media-gallery--large-first-image .media-gallery__grid li:first-child img,
.media-gallery .media-gallery__grid li:first-child img {
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain !important; /* Ensures golden cap, logo & base are 100% visible — NEVER cut off! */
  object-position: center !important;
  padding: 12px !important;
  margin: 0 auto !important;
  display: block !important;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery--large-first-image .media-gallery__grid li:first-child:hover img,
.media-gallery .media-gallery__grid li:first-child:hover img {
  transform: scale(1.03) !important;
}

/* Secondary Images in Grid (Pairs of Symmetrical Tiles — Never Cut Off) */
.media-gallery .media-gallery__grid li:not(:first-child) {
  max-height: 270px !important;
  height: 270px !important;
  border-radius: 14px !important;
  background: #FFFFFF !important; /* Pure White Canvas */
  border: 1.5px solid rgba(201, 158, 62, 0.22) !important;
  box-shadow: 0 6px 18px rgba(14, 40, 31, 0.04) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: hidden !important;
  position: relative !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery .media-gallery__grid li:not(:first-child):hover {
  border-color: #C99E3E !important;
  box-shadow: 0 8px 24px rgba(201, 158, 62, 0.2) !important;
  transform: translateY(-2px) !important;
}

.media-gallery .media-gallery__grid li:not(:first-child) .product-media-constraint-wrapper,
.media-gallery .media-gallery__grid li:not(:first-child) .product-media {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.media-gallery .media-gallery__grid li:not(:first-child) img {
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain !important; /* Complete bottle, bowl & infographics text 100% preserved */
  object-position: center !important;
  padding: 8px !important;
  margin: 0 auto !important;
  display: block !important;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery .media-gallery__grid li:not(:first-child):hover img {
  transform: scale(1.04) !important;
}

`;

css = css.slice(0, sIdx) + perfectFitCSS + css.slice(eIdx);

// Also update mobile slideshow to contain with white canvas
const oldMobile = `  .media-gallery slideshow-slide img,
  .media-gallery .product-media-container img {
    max-height: 380px !important;
    height: 100% !important;
    width: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
    padding: 0 !important;
  }`;

const newMobile = `  .media-gallery slideshow-slide img,
  .media-gallery .product-media-container img {
    max-height: 380px !important;
    height: 100% !important;
    width: 100% !important;
    object-fit: contain !important;
    object-position: center !important;
    padding: 8px !important;
  }`;

if (css.includes(oldMobile)) {
  css = css.replace(oldMobile, newMobile);
  console.log('Mobile rule updated to contain!');
}

const finalOpen = (css.match(/\{/g) || []).length;
const finalClose = (css.match(/\}/g) || []).length;
console.log('Final braces:', finalOpen, finalClose, 'Balance:', finalOpen - finalClose);

if (finalOpen === finalClose) {
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Successfully updated assets/myraveda-luxury.css!');
} else {
  throw new Error('Braces mismatch!');
}
