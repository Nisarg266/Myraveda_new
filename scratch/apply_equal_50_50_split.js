const fs = require('fs');

// 1. Update templates/product.json to set limit_details_width: false and equal_columns: true
const pjPath = 'templates/product.json';
const pj = JSON.parse(fs.readFileSync(pjPath, 'utf8'));
pj.sections.main.settings.equal_columns = true;
pj.sections.main.settings.limit_details_width = false;
pj.sections.main.settings.gap = 48;
fs.writeFileSync(pjPath, JSON.stringify(pj, null, 2) + '\n', 'utf8');
console.log('templates/product.json: equal_columns=true, limit_details_width=false updated!');

// 2. Update assets/myraveda-luxury.css
const cssPath = 'assets/myraveda-luxury.css';
let css = fs.readFileSync(cssPath, 'utf8');

const initialOpen = (css.match(/\{/g) || []).length;
const initialClose = (css.match(/\}/g) || []).length;
console.log('Initial braces:', initialOpen, initialClose, 'Balance:', initialOpen - initialClose);

// Replace section 1 & 2 container styles to enforce 50/50 split
const targetSection1Start = '/* 1. PRODUCT INFORMATION CONTAINER & BALANCED SPLIT */';
const targetSection2Start = '/* First Hero Image in Grid (Spans 2 columns, Perfectly Framed — Never Cut Off) */';

const sIdx = css.indexOf(targetSection1Start);
const eIdx = css.indexOf(targetSection2Start);

if (sIdx === -1 || eIdx === -1) {
  throw new Error('Target range 1 not found!');
}

const equalSplitCSS = `/* 1. PRODUCT INFORMATION CONTAINER & TRUE 50/50 BALANCED SPLIT */
.product-information {
  padding-top: 20px !important;
  padding-bottom: 48px !important;
  animation: mvProductFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes mvProductFadeIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 50/50 Symmetrical Luxury Layout on Desktop */
@media screen and (min-width: 750px) {
  .product-information .product-information__grid,
  .product-information__grid.product-information--media-left,
  .product-information__grid.product-information__grid--half,
  .product-information__grid {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important; /* Perfect 50% / 50% Equal Ratio */
    column-gap: 48px !important;
    row-gap: 32px !important;
    align-items: start !important;
    width: 100% !important;
    max-width: 1280px !important;
    margin: 0 auto !important;
    box-sizing: border-box !important;
  }

  .product-information__media,
  media-gallery,
  .media-gallery {
    width: 100% !important;
    max-width: 100% !important; /* Full 50% Column Width */
    margin: 0 !important;
    box-sizing: border-box !important;
  }
}

/* 2. MEDIA GALLERY — HAUTE LUXE ARTISAN GRID SHOWCASE */
.product-information__media,
media-gallery,
.media-gallery {
  position: relative !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
}

/* Haute Luxe Grid Container */
.media-gallery .media-gallery__grid {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 14px !important;
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
  width: 100% !important;
}

`;

css = css.slice(0, sIdx) + equalSplitCSS + css.slice(eIdx);

// Also replace max-width: 500px on .product-details with max-width: 100%
const detailsTargetOld = `/* 3. PRODUCT DETAILS — STICKY SCROLL & TIGHT LUXURY CADENCE */
@media screen and (min-width: 750px) {
  .product-details {
    position: sticky !important;
    top: 24px !important;
    align-self: start !important;
    max-width: 500px !important;
  }
}`;

const detailsTargetNew = `/* 3. PRODUCT DETAILS — STICKY SCROLL & TRUE 50% EXPANDED LUXURY WIDTH */
@media screen and (min-width: 750px) {
  .product-details,
  .product-information .product-details,
  .product-information__grid .product-details {
    position: sticky !important;
    top: 24px !important;
    align-self: start !important;
    width: 100% !important;
    max-width: 100% !important; /* Expands to fill full 50% column matching media gallery */
    box-sizing: border-box !important;
    padding-left: 0 !important;
  }

  .product-details > .group-block,
  .product-information__grid--limit-details .product-details > .group-block {
    max-width: 100% !important;
    width: 100% !important;
  }
}`;

if (css.includes(detailsTargetOld)) {
  css = css.replace(detailsTargetOld, detailsTargetNew);
  console.log('product-details max-width updated to 100% for 50/50 parity!');
} else {
  console.warn('detailsTargetOld not found via exact match');
}

const finalOpen = (css.match(/\{/g) || []).length;
const finalClose = (css.match(/\}/g) || []).length;
console.log('Final braces:', finalOpen, finalClose, 'Balance:', finalOpen - finalClose);

if (finalOpen === finalClose) {
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Successfully updated assets/myraveda-luxury.css for 50/50 layout!');
} else {
  throw new Error('Braces mismatch!');
}
