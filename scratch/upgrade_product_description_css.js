const fs = require('fs');

const cssPath = 'assets/myraveda-luxury.css';
let css = fs.readFileSync(cssPath, 'utf8');

const targetStart = '/* Product Description Text Styling */';
const targetEnd = '/* 9. STICKY ADD TO CART BAR */';

const sIdx = css.indexOf(targetStart);
const eIdx = css.indexOf(targetEnd);

if (sIdx === -1 || eIdx === -1) {
  throw new Error('Target range not found!');
}

const luxuryDescriptionCSS = `/* ==========================================================================
   8. HAUTE LUXE PRODUCT DESCRIPTION — ARTISAN BOTANICAL SHOWCASE
   ========================================================================== */

/* Main Description Card Container */
.product-details .text-block--text_aEtTtq,
.product-details .product-description,
.product-details .rte:not(h1):not(h2):not(h3) {
  position: relative !important;
  margin: 18px 0 !important;
  padding: 22px 26px !important;
  background: #FAF8F5 !important; /* Royal Warm Ivory Card */
  border: 1.5px solid rgba(201, 158, 62, 0.3) !important; /* 24K Gold Hairline */
  border-radius: 16px !important;
  box-shadow: 0 6px 22px rgba(14, 40, 31, 0.04) !important;
  box-sizing: border-box !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.product-details .text-block--text_aEtTtq:hover,
.product-details .product-description:hover {
  border-color: rgba(201, 158, 62, 0.6) !important;
  box-shadow: 0 10px 30px rgba(201, 158, 62, 0.14) !important;
}

/* Regal Badge Header for Product Description */
.product-details .text-block--text_aEtTtq::before,
.product-details .product-description::before {
  content: '✦  BOTANICAL ESSENCE & DETAILS';
  display: block !important;
  font-family: 'Cinzel', 'Marcellus', serif !important;
  font-size: 0.76rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.16em !important;
  text-transform: uppercase !important;
  color: #8C651E !important; /* Warm Royal Gold */
  margin-bottom: 14px !important;
  padding-bottom: 10px !important;
  border-bottom: 1px solid rgba(201, 158, 62, 0.22) !important;
}

/* Body text & paragraph styling */
.product-details .text-block--text_aEtTtq p,
.product-details .product-description p,
.product-details .text-block--text_aEtTtq div,
.product-details .product-description div {
  font-family: 'Plus Jakarta Sans', -apple-system, sans-serif !important;
  font-size: 0.94rem !important;
  line-height: 1.75 !important;
  color: #2D3E36 !important; /* Deep Botanical Charcoal-Green */
  letter-spacing: 0.01em !important;
  margin-bottom: 12px !important;
}

.product-details .text-block--text_aEtTtq p:last-child,
.product-details .product-description p:last-child {
  margin-bottom: 0 !important;
}

/* Bold and emphasis */
.product-details .text-block--text_aEtTtq strong,
.product-details .product-description strong,
.product-details .text-block--text_aEtTtq b,
.product-details .product-description b {
  font-weight: 700 !important;
  color: #0E281F !important; /* Royal Forest Emerald */
}

.product-details .text-block--text_aEtTtq em,
.product-details .product-description em,
.product-details .text-block--text_aEtTtq i,
.product-details .product-description i {
  font-style: italic !important;
  color: #8C651E !important; /* Royal Warm Amber */
}

/* Subheadings inside description (e.g. Benefits, Key Ritual, Ingredients) */
.product-details .text-block--text_aEtTtq h1,
.product-details .text-block--text_aEtTtq h2,
.product-details .text-block--text_aEtTtq h3,
.product-details .text-block--text_aEtTtq h4,
.product-details .text-block--text_aEtTtq h5,
.product-details .text-block--text_aEtTtq h6,
.product-details .product-description h1,
.product-details .product-description h2,
.product-details .product-description h3,
.product-details .product-description h4,
.product-details .product-description h5,
.product-details .product-description h6 {
  font-family: 'Marcellus', 'Cinzel', serif !important;
  font-weight: 600 !important;
  color: #0E281F !important;
  letter-spacing: 0.03em !important;
  margin-top: 16px !important;
  margin-bottom: 8px !important;
  line-height: 1.35 !important;
}

.product-details .text-block--text_aEtTtq h2,
.product-details .product-description h2 {
  font-size: 1.22rem !important;
}

.product-details .text-block--text_aEtTtq h3,
.product-details .product-description h3 {
  font-size: 1.1rem !important;
}

.product-details .text-block--text_aEtTtq h4,
.product-details .product-description h4 {
  font-size: 1.0rem !important;
}

/* Lists with bespoke Royal Gold Star bullets */
.product-details .text-block--text_aEtTtq ul,
.product-details .product-description ul {
  list-style: none !important;
  padding-left: 0 !important;
  margin: 12px 0 !important;
}

.product-details .text-block--text_aEtTtq ul li,
.product-details .product-description ul li {
  position: relative !important;
  padding-left: 22px !important;
  margin-bottom: 8px !important;
  line-height: 1.65 !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.93rem !important;
  color: #2D3E36 !important;
}

.product-details .text-block--text_aEtTtq ul li::before,
.product-details .product-description ul li::before {
  content: '✦' !important;
  position: absolute !important;
  left: 0 !important;
  top: 1px !important;
  color: #C99E3E !important; /* 24K Gold */
  font-size: 0.78rem !important;
}

.product-details .text-block--text_aEtTtq ol,
.product-details .product-description ol {
  padding-left: 20px !important;
  margin: 12px 0 !important;
}

.product-details .text-block--text_aEtTtq ol li,
.product-details .product-description ol li {
  margin-bottom: 8px !important;
  padding-left: 4px !important;
  line-height: 1.65 !important;
  color: #2D3E36 !important;
}

/* Tables inside description */
.product-details .text-block--text_aEtTtq table,
.product-details .product-description table {
  width: 100% !important;
  border-collapse: collapse !important;
  margin: 16px 0 !important;
  border: 1px solid rgba(201, 158, 62, 0.3) !important;
  border-radius: 8px !important;
  overflow: hidden !important;
}

.product-details .text-block--text_aEtTtq th,
.product-details .product-description th {
  background: #0E281F !important;
  color: #FAF8F5 !important;
  font-family: 'Cinzel', serif !important;
  font-size: 0.8rem !important;
  letter-spacing: 0.08em !important;
  padding: 10px 14px !important;
  text-align: left !important;
}

.product-details .text-block--text_aEtTtq td,
.product-details .product-description td {
  padding: 10px 14px !important;
  border-bottom: 1px solid rgba(201, 158, 62, 0.15) !important;
  font-size: 0.88rem !important;
  color: #2D3E36 !important;
}

`;

css = css.slice(0, sIdx) + luxuryDescriptionCSS + css.slice(eIdx);

const finalOpen = (css.match(/\{/g) || []).length;
const finalClose = (css.match(/\}/g) || []).length;
console.log('Final braces:', finalOpen, finalClose, 'Balance:', finalOpen - finalClose);

if (finalOpen === finalClose) {
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Successfully upgraded product description styles in assets/myraveda-luxury.css!');
} else {
  throw new Error('Braces mismatch!');
}
