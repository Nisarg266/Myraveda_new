const fs = require('fs');

const cssPath = 'assets/myraveda-luxury.css';
let css = fs.readFileSync(cssPath, 'utf8');

const initialOpen = (css.match(/\{/g) || []).length;
const initialClose = (css.match(/\}/g) || []).length;
console.log('Initial braces:', initialOpen, initialClose, 'Balance:', initialOpen - initialClose);

const marker = '/* Mobile Slideshow Carousel Fallback (< 750px) */';
const idx = css.indexOf(marker);

if (idx === -1) {
  throw new Error('Marker not found!');
}

const fullscreenZoomCSS = `/* ==========================================================================
   2.1 HAUTE LUXE TRUE FULL-SCREEN LIGHTBOX MODAL & INTERACTIVE ZOOM
   ========================================================================== */

/* Grid zoom trigger button (Covers image with zoom-in cursor & luxury hover badge) */
.product-media-container__zoom-button {
  display: block !important;
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: 2 !important;
  cursor: zoom-in !important;
  background: transparent !important;
  border: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.media-gallery .media-gallery__grid li {
  position: relative !important;
  cursor: zoom-in !important;
}

/* Elegant gold hover badge in top right corner of grid tiles */
.media-gallery .media-gallery__grid li::after {
  content: '⤢';
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(250, 248, 245, 0.92);
  border: 1.5px solid rgba(201, 158, 62, 0.5);
  color: #0E281F;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.85);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
  z-index: 3;
  box-shadow: 0 4px 12px rgba(14, 40, 31, 0.12);
}

.media-gallery .media-gallery__grid li:hover::after {
  opacity: 1;
  transform: scale(1);
  border-color: #C99E3E;
  color: #C99E3E;
}

/* TRUE FULL-SCREEN LIGHTBOX DIALOG CONTAINER */
zoom-dialog dialog,
.dialog-zoomed-gallery__dialog,
dialog.dialog-zoomed-gallery__dialog {
  position: fixed !important;
  inset: 0 !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  max-width: 100vw !important;
  min-width: 100vw !important;
  height: 100vh !important;
  max-height: 100vh !important;
  min-height: 100vh !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  border-radius: 0 !important;
  background: #FAF8F5 !important; /* Royal Luxury Warm Ivory Full Screen */
  box-shadow: none !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  z-index: 99999 !important;
  box-sizing: border-box !important;
  transition: opacity 0.3s ease !important;
}

zoom-dialog dialog::backdrop,
.dialog-zoomed-gallery__dialog::backdrop {
  background: rgba(14, 40, 31, 0.85) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
}

/* Bespoke Royal Emerald & Gold Close Button */
.dialog-zoomed-gallery__close-button,
button.dialog-zoomed-gallery__close-button {
  position: fixed !important;
  top: 24px !important;
  right: 28px !important;
  width: 46px !important;
  height: 46px !important;
  min-width: 46px !important;
  min-height: 46px !important;
  border-radius: 50% !important;
  background: #0E281F !important;
  color: #FAF8F5 !important;
  border: 1.5px solid #C99E3E !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  z-index: 100005 !important;
  box-shadow: 0 4px 18px rgba(14, 40, 31, 0.35) !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
  mix-blend-mode: normal !important;
}

.dialog-zoomed-gallery__close-button:hover {
  background: #C99E3E !important;
  color: #0E281F !important;
  transform: scale(1.1) rotate(90deg) !important;
  box-shadow: 0 6px 24px rgba(201, 158, 62, 0.5) !important;
}

.dialog-zoomed-gallery__close-button svg {
  width: 16px !important;
  height: 16px !important;
  stroke: currentColor !important;
  stroke-width: 2.2 !important;
  display: block !important;
}

/* Full Screen Image Presentation (Centered, High-Res, Perfectly Framed) */
.dialog-zoomed-gallery {
  width: 100vw !important;
  min-height: 100vh !important;
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
  cursor: zoom-out !important;
}

@media screen and (min-width: 750px) {
  .dialog-zoomed-gallery {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  .dialog-zoomed-gallery li,
  .dialog-zoomed-gallery .product-media-container {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100vw !important;
    min-height: 100vh !important;
    height: 100vh !important;
    padding: 40px 140px 40px 60px !important; /* Space for fixed right thumbnail rail & top-right close */
    box-sizing: border-box !important;
    scroll-snap-align: start !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
}

.dialog-zoomed-gallery .product-media__drag-zoom-wrapper,
.dialog-zoomed-gallery .product-media {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  max-width: min(82vw, 920px) !important;
  max-height: 86vh !important;
  height: 100% !important;
  margin: auto !important;
}

.dialog-zoomed-gallery img,
.dialog-zoomed-gallery .product-media__image {
  max-height: 84vh !important;
  max-width: min(80vw, 880px) !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  margin: auto !important;
  border-radius: 14px !important;
  box-shadow: 0 16px 48px rgba(14, 40, 31, 0.08) !important;
  transition: transform 0.3s ease !important;
}

/* Full Screen Docked Thumbnail Navigation Rail */
.dialog-thumbnails-list-container {
  pointer-events: none !important;
  z-index: 100001 !important;
}

@media screen and (min-width: 750px) {
  .dialog-thumbnails-list {
    position: fixed !important;
    flex-direction: column !important;
    top: 50% !important;
    right: 32px !important;
    transform: translateY(-50%) !important;
    gap: 12px !important;
    padding: 12px !important;
    max-height: calc(100vh - 160px) !important;
    overflow-y: auto !important;
    background: rgba(250, 248, 245, 0.85) !important;
    backdrop-filter: blur(8px) !important;
    -webkit-backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(201, 158, 62, 0.3) !important;
    border-radius: 20px !important;
    box-shadow: 0 8px 30px rgba(14, 40, 31, 0.1) !important;
    pointer-events: auto !important;
  }
}

@media screen and (max-width: 749px) {
  .dialog-thumbnails-list-container {
    position: fixed !important;
    bottom: 14px !important;
    left: 0 !important;
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }

  .dialog-thumbnails-list {
    display: inline-flex !important;
    flex-direction: row !important;
    gap: 8px !important;
    padding: 8px 14px !important;
    background: rgba(250, 248, 245, 0.9) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(201, 158, 62, 0.3) !important;
    border-radius: 24px !important;
    box-shadow: 0 6px 20px rgba(14, 40, 31, 0.12) !important;
    pointer-events: auto !important;
    max-width: 90vw !important;
    overflow-x: auto !important;
  }
}

.dialog-thumbnails-list__thumbnail {
  width: 52px !important;
  height: 52px !important;
  min-width: 52px !important;
  min-height: 52px !important;
  border-radius: 10px !important;
  border: 1.5px solid rgba(201, 158, 62, 0.35) !important;
  background: #FAF8F5 !important;
  padding: 3px !important;
  cursor: pointer !important;
  overflow: hidden !important;
  transition: all 0.2s ease !important;
  pointer-events: auto !important;
}

.dialog-thumbnails-list__thumbnail:hover,
.dialog-thumbnails-list__thumbnail[aria-selected="true"] {
  border-color: #C99E3E !important;
  box-shadow: 0 0 0 2.5px #C99E3E, 0 4px 12px rgba(201, 158, 62, 0.25) !important;
  transform: scale(1.08) !important;
}

.dialog-thumbnails-list__thumbnail img {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
  border-radius: 7px !important;
}

`;

css = css.slice(0, idx) + fullscreenZoomCSS + css.slice(idx);

const finalOpen = (css.match(/\{/g) || []).length;
const finalClose = (css.match(/\}/g) || []).length;
console.log('Final braces:', finalOpen, finalClose, 'Balance:', finalOpen - finalClose);

if (finalOpen === finalClose) {
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Successfully applied full screen zoom lightbox to assets/myraveda-luxury.css!');
} else {
  throw new Error('Braces mismatch!');
}
