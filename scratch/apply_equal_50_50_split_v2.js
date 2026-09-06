const fs = require('fs');
const cssPath = 'assets/myraveda-luxury.css';
let css = fs.readFileSync(cssPath, 'utf8');

const initialOpen = (css.match(/\{/g) || []).length;
const initialClose = (css.match(/\}/g) || []).length;
console.log('Initial braces:', initialOpen, initialClose, 'Balance:', initialOpen - initialClose);

// Target 1: Section 1 Desktop grid
const s1Target = `/* 50/50 Symmetrical Luxury Layout on Desktop */
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
}`;

const s1Replacement = `/* 50/50 Symmetrical Luxury Layout on Desktop */
@media screen and (min-width: 750px) {
  .product-information .product-information__grid,
  .product-information__grid.product-information--media-left,
  .product-information__grid.product-information__grid--half,
  .product-information__grid {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important; /* Absolute 50% / 50% True Equal Ratio */
    column-gap: 48px !important;
    row-gap: 32px !important;
    align-items: start !important;
    width: 100% !important;
    max-width: 1280px !important;
    margin: 0 auto !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    box-sizing: border-box !important;
  }

  /* Left Column: Media Gallery (Strict 50% Column Track) */
  .product-information .product-information__media,
  .product-information__grid .product-information__media,
  .product-information__grid--half.product-information--media-left .product-information__media,
  .product-information__grid.product-information--media-left .product-information__media,
  .product-information__media,
  media-gallery,
  .media-gallery {
    grid-column: 1 / 2 !important; /* Explicitly binds media to Left 50% Track */
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    margin: 0 !important;
    box-sizing: border-box !important;
  }
}`;

if (!css.includes(s1Target)) {
  console.error('s1Target NOT FOUND!');
  process.exit(1);
}

css = css.replace(s1Target, s1Replacement);
console.log('s1 replaced successfully!');

// Target 2: Section 3 Product Details
const s2Target = `/* 3. PRODUCT DETAILS — STICKY SCROLL & TRUE 50% EXPANDED LUXURY WIDTH */
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

const s2Replacement = `/* 3. PRODUCT DETAILS — STICKY SCROLL & TRUE 50% EXPANDED LUXURY WIDTH */
@media screen and (min-width: 750px) {
  /* Right Column: Product Details (Strict 50% Column Track, Fully Expanded) */
  .product-information .product-details,
  .product-information__grid .product-details,
  .product-information__grid--half.product-information--media-left .product-details,
  .product-information__grid.product-information--media-left .product-details,
  .product-details {
    grid-column: 2 / 3 !important; /* Explicitly binds details to Right 50% Track */
    position: sticky !important;
    top: 24px !important;
    align-self: start !important;
    width: 100% !important;
    max-width: 100% !important; /* Expands to fill full 50% column matching media gallery */
    min-width: 0 !important;
    box-sizing: border-box !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    justify-content: flex-start !important;
  }

  .product-details > .group-block,
  .product-details .group-block-content,
  .product-information__grid--limit-details .product-details > .group-block {
    max-width: 100% !important;
    width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
  }

  /* Full Width for all child elements in Right 50% Column */
  .product-details [data-testid="group-block"],
  .product-details .product-form-buttons,
  .product-details .mv-product-trust-strip,
  .product-details .text-block--text_aEtTtq,
  .product-details .product-description {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
}`;

if (!css.includes(s2Target)) {
  console.error('s2Target NOT FOUND!');
  process.exit(1);
}

css = css.replace(s2Target, s2Replacement);
console.log('s2 replaced successfully!');

const finalOpen = (css.match(/\{/g) || []).length;
const finalClose = (css.match(/\}/g) || []).length;
console.log('Final braces:', finalOpen, finalClose, 'Balance:', finalOpen - finalClose);

if (finalOpen === finalClose) {
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Successfully written to assets/myraveda-luxury.css!');
} else {
  console.error('Braces mismatch!');
  process.exit(1);
}
