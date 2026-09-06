const fs = require('fs');

const cssPath = 'assets/myraveda-luxury.css';
let css = fs.readFileSync(cssPath, 'utf8');

const initialOpen = (css.match(/\{/g) || []).length;
const initialClose = (css.match(/\}/g) || []).length;
console.log('Initial braces:', initialOpen, initialClose, 'Balance:', initialOpen - initialClose);

// 1. Replace desktop grid items with full cover layout
const targetStart = '/* First Hero Image in Grid (Spans 2 columns, perfectly framed) */';
const targetEnd = '/* ==========================================================================\n   2.1 HAUTE LUXE TRUE FULL-SCREEN LIGHTBOX MODAL & INTERACTIVE ZOOM';

const sIdx = css.indexOf(targetStart);
const eIdx = css.indexOf(targetEnd);

if (sIdx === -1 || eIdx === -1) {
  throw new Error('Target range 1 not found!');
}

const desktopCoverCSS = `/* First Hero Image in Grid (Spans 2 columns, Full Edge-to-Edge Cover) */
.media-gallery--large-first-image .media-gallery__grid li:first-child,
.media-gallery .media-gallery__grid li:first-child {
  grid-column: span 2 !important;
  max-height: 480px !important;
  height: 480px !important;
  border-radius: 16px !important;
  background: #FAF8F5 !important;
  border: 1.5px solid rgba(201, 158, 62, 0.28) !important;
  box-shadow: 0 10px 30px rgba(14, 40, 31, 0.05) !important;
  display: block !important;
  overflow: hidden !important;
  position: relative !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery--large-first-image .media-gallery__grid li:first-child:hover,
.media-gallery .media-gallery__grid li:first-child:hover {
  border-color: rgba(201, 158, 62, 0.6) !important;
  box-shadow: 0 14px 38px rgba(14, 40, 31, 0.09) !important;
}

.media-gallery--large-first-image .media-gallery__grid li:first-child .product-media-constraint-wrapper,
.media-gallery--large-first-image .media-gallery__grid li:first-child .product-media,
.media-gallery .media-gallery__grid li:first-child .product-media-constraint-wrapper,
.media-gallery .media-gallery__grid li:first-child .product-media {
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}

.media-gallery--large-first-image .media-gallery__grid li:first-child img,
.media-gallery .media-gallery__grid li:first-child img {
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: cover !important;
  object-position: center !important;
  padding: 0 !important;
  margin: 0 !important;
  display: block !important;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery--large-first-image .media-gallery__grid li:first-child:hover img,
.media-gallery .media-gallery__grid li:first-child:hover img {
  transform: scale(1.04) !important;
}

/* Secondary Images in Grid (Pairs of Neat Luxury Tiles, Full Cover) */
.media-gallery .media-gallery__grid li:not(:first-child) {
  max-height: 260px !important;
  height: 260px !important;
  border-radius: 14px !important;
  background: #FAF8F5 !important;
  border: 1.5px solid rgba(201, 158, 62, 0.22) !important;
  box-shadow: 0 6px 20px rgba(14, 40, 31, 0.04) !important;
  display: block !important;
  overflow: hidden !important;
  position: relative !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery .media-gallery__grid li:not(:first-child):hover {
  border-color: #C99E3E !important;
  box-shadow: 0 8px 24px rgba(201, 158, 62, 0.22) !important;
  transform: translateY(-2px) !important;
}

.media-gallery .media-gallery__grid li:not(:first-child) .product-media-constraint-wrapper,
.media-gallery .media-gallery__grid li:not(:first-child) .product-media {
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}

.media-gallery .media-gallery__grid li:not(:first-child) img {
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: cover !important;
  object-position: center !important;
  padding: 0 !important;
  margin: 0 !important;
  display: block !important;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery .media-gallery__grid li:not(:first-child):hover img {
  transform: scale(1.05) !important;
}

`;

css = css.slice(0, sIdx) + desktopCoverCSS + css.slice(eIdx);

// 2. Update mobile slideshow image rules to cover as well
const oldMobileRule = `  .media-gallery slideshow-slide img,
  .media-gallery .product-media-container img {
    max-height: 350px !important;
    object-fit: contain !important;
    padding: 10px !important;
  }`;

const newMobileRule = `  .media-gallery slideshow-slide img,
  .media-gallery .product-media-container img {
    max-height: 380px !important;
    height: 100% !important;
    width: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
    padding: 0 !important;
  }`;

if (css.includes(oldMobileRule)) {
  css = css.replace(oldMobileRule, newMobileRule);
  console.log('Mobile slideshow cover rule updated!');
} else {
  console.warn('Old mobile rule not found via exact match');
}

const finalOpen = (css.match(/\{/g) || []).length;
const finalClose = (css.match(/\}/g) || []).length;
console.log('Final braces:', finalOpen, finalClose, 'Balance:', finalOpen - finalClose);

if (finalOpen === finalClose) {
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Successfully updated assets/myraveda-luxury.css to full cover layout!');
} else {
  throw new Error('Braces mismatch!');
}
