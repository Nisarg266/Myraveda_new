const fs = require('fs');

// 1. Update templates/product.json to set zoom: false
const pjPath = 'templates/product.json';
const pj = JSON.parse(fs.readFileSync(pjPath, 'utf8'));
pj.sections.main.blocks['media-gallery'].settings.zoom = false;
fs.writeFileSync(pjPath, JSON.stringify(pj, null, 2), 'utf8');
console.log('templates/product.json: zoom set to false successfully!');

// 2. Clean up assets/myraveda-luxury.css
const cssPath = 'assets/myraveda-luxury.css';
let css = fs.readFileSync(cssPath, 'utf8');

const marker = '/* ==========================================================================\n   HAUTE LUXE PRODUCT PAGE — BESPOKE EXPENSIVE STYLING & ANIMATIONS';
const idx = css.indexOf(marker);
if (idx === -1) {
  console.log('Marker not found!');
  process.exit(1);
}

const baseCSS = css.substring(0, idx).trimEnd();

const cleanLuxuryGridCSS = `

/* ==========================================================================
   HAUTE LUXE PRODUCT PAGE — BESPOKE EXPENSIVE STYLING & ANIMATIONS
   Crafted for Myra Veda Royal Heritage Aesthetic
   ========================================================================== */

/* 1. PRODUCT INFORMATION CONTAINER & BALANCED SPLIT */
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

/* 2. MEDIA GALLERY — HAUTE LUXE ARTISAN GRID SHOWCASE */
.product-information__media,
media-gallery,
.media-gallery {
  position: relative !important;
  max-width: 560px !important;
  width: 100% !important;
  margin: 0 auto !important;
}

/* Haute Luxe Grid Container */
.media-gallery .media-gallery__grid {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 14px !important;
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* First Hero Image in Grid (Spans 2 columns, perfectly framed) */
.media-gallery--large-first-image .media-gallery__grid li:first-child,
.media-gallery .media-gallery__grid li:first-child {
  grid-column: span 2 !important;
  max-height: 480px !important;
  height: 480px !important;
  border-radius: 16px !important;
  background: #FAF8F5 !important;
  border: 1.5px solid rgba(201, 158, 62, 0.28) !important;
  box-shadow: 0 10px 30px rgba(14, 40, 31, 0.05) !important;
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
  box-shadow: 0 14px 38px rgba(14, 40, 31, 0.09) !important;
}

.media-gallery--large-first-image .media-gallery__grid li:first-child img,
.media-gallery .media-gallery__grid li:first-child img {
  max-height: 440px !important;
  max-width: 100% !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  padding: 16px !important;
  margin: 0 auto !important;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery--large-first-image .media-gallery__grid li:first-child:hover img,
.media-gallery .media-gallery__grid li:first-child:hover img {
  transform: scale(1.03) !important;
}

/* Secondary Images in Grid (Pairs of Neat Luxury Tiles) */
.media-gallery .media-gallery__grid li:not(:first-child) {
  max-height: 260px !important;
  height: 260px !important;
  border-radius: 14px !important;
  background: #FAF8F5 !important;
  border: 1.5px solid rgba(201, 158, 62, 0.22) !important;
  box-shadow: 0 6px 20px rgba(14, 40, 31, 0.04) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: hidden !important;
  position: relative !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery .media-gallery__grid li:not(:first-child):hover {
  border-color: #C99E3E !important;
  box-shadow: 0 8px 24px rgba(201, 158, 62, 0.22) !important;
  transform: translateY(-2px) !important;
}

.media-gallery .media-gallery__grid li:not(:first-child) img {
  max-height: 230px !important;
  max-width: 100% !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  padding: 12px !important;
  margin: 0 auto !important;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery .media-gallery__grid li:not(:first-child):hover img {
  transform: scale(1.05) !important;
}

/* Mobile Slideshow Carousel Fallback (< 750px) */
@media screen and (max-width: 749px) {
  .product-information {
    padding-top: 16px !important;
    padding-bottom: 36px !important;
  }
  .media-gallery slideshow-slides {
    border-radius: 14px !important;
    overflow: hidden !important;
    border: 1px solid rgba(201, 158, 62, 0.25) !important;
    background: #FAF8F5 !important;
    max-height: 380px !important;
  }
  .media-gallery slideshow-slide,
  .media-gallery .product-media-container {
    max-height: 380px !important;
    height: 380px !important;
  }
  .media-gallery slideshow-slide img,
  .media-gallery .product-media-container img {
    max-height: 350px !important;
    object-fit: contain !important;
    padding: 10px !important;
  }
  .media-gallery slideshow-controls {
    margin-top: 10px !important;
  }
  .mv-trust-strip-grid {
    grid-template-columns: 1fr !important;
  }
  .sticky-add-to-cart__bar {
    width: 95vw !important;
    max-width: 95vw !important;
    padding: 6px 14px !important;
  }
}

/* 3. PRODUCT DETAILS — STICKY SCROLL & TIGHT LUXURY CADENCE */
@media screen and (min-width: 750px) {
  .product-details {
    position: sticky !important;
    top: 24px !important;
    align-self: start !important;
    max-width: 500px !important;
  }
}

.product-details {
  position: relative !important;
}

/* Product Title */
.product-details h1,
.product-details [data-testid="product-title"] h1,
.product-details [data-testid="product-title"],
.product-details .product-title {
  font-family: 'Marcellus', 'Playfair Display', Georgia, serif !important;
  font-size: clamp(1.75rem, 2.8vw, 2.3rem) !important;
  font-weight: 500 !important;
  color: #0E281F !important;
  letter-spacing: 0.02em !important;
  line-height: 1.25 !important;
  margin: 0 0 6px !important;
}

/* Prominent Haute Luxe Price Block (Large, Bold & Regal) */
.product-details product-price,
.product-details product-price *,
.product-details .price,
.product-details .price-item,
.product-details .price-item__group,
.product-details [ref="priceContainer"],
.product-details [ref="priceContainer"] span,
product-price.text-block .price-item {
  font-family: 'Marcellus', 'Plus Jakarta Sans', Georgia, serif !important;
  font-size: clamp(1.85rem, 2.6vw, 2.35rem) !important;
  font-weight: 700 !important;
  color: #0E281F !important;
  letter-spacing: 0.02em !important;
  line-height: 1.2 !important;
  display: inline-block !important;
}

.product-details .price-item--compare,
.product-details .compare-at-price,
.product-details [data-testid="price-compare"] {
  font-size: 1.15rem !important;
  color: #8C9993 !important;
  text-decoration: line-through !important;
  font-weight: 400 !important;
  margin-left: 10px !important;
}

/* Compact Gold Hairline Divider — Eliminated Waste Spacing */
.product-details .divider {
  margin: 6px 0 !important;
  padding: 0 !important;
  border: none !important;
}

.product-details .divider__line {
  border-bottom: 1px solid rgba(201, 158, 62, 0.3) !important;
  border-right: none !important;
  border-top: none !important;
  border-left: none !important;
  margin: 0 !important;
}

/* Collapse empty variant picker wrapper to remove dead space */
.product-details variant-picker:empty,
.product-details .variant-picker:empty,
.product-details :has(> variant-picker:empty),
.product-details variant-picker:not(:has(fieldset)) {
  display: none !important;
  margin: 0 !important;
  padding: 0 !important;
  height: 0 !important;
  min-height: 0 !important;
}

/* 4. VARIANT PICKER — ROYAL PILLS */
.variant-picker {
  margin: 8px 0 !important;
}

.variant-option legend,
.variant-option > label,
.variant-picker label.form__label {
  font-family: 'Cinzel', serif !important;
  font-size: 0.74rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  color: #0E281F !important;
  margin-bottom: 8px !important;
  display: block !important;
}

.variant-option legend::before,
.variant-option > label::before {
  content: '✦ ';
  color: #C99E3E;
}

.variant-option--buttons {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 10px !important;
}

.variant-option__button-label {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 9px 20px !important;
  border-radius: 26px !important;
  border: 1px solid rgba(201, 158, 62, 0.35) !important;
  background-color: #FAF8F5 !important;
  color: #0E281F !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.88rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.03em !important;
  cursor: pointer !important;
  transition: all 0.25s ease !important;
  position: relative !important;
}

.variant-option__button-label:hover {
  border-color: #C99E3E !important;
  background-color: #FFFFFF !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(201, 158, 62, 0.18) !important;
}

.variant-option__button-label:has(input:checked) {
  background-color: #0E281F !important;
  color: #FAF8F5 !important;
  border-color: #0E281F !important;
  box-shadow: 0 4px 14px rgba(14, 40, 31, 0.28) !important;
}

.variant-option__button-label:has(input:checked) .variant-option__button-label__text {
  color: #FAF8F5 !important;
}

.variant-option__button-label:has(input:checked) .variant-option__button-label__pill {
  background-color: #0E281F !important;
  border-color: #0E281F !important;
}

/* 5. QUANTITY SELECTOR — UNIFIED SLEEK ARTISAN CAPSULE */
.product-form-buttons .quantity-selector-wrapper,
.quantity-selector-wrapper {
  display: block !important;
  margin: 4px 0 6px 0 !important;
  width: auto !important;
}

.product-form-buttons .quantity-selector,
.quantity-selector,
quantity-selector-component.quantity-selector {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 136px !important;
  min-width: 136px !important;
  max-width: 136px !important;
  height: 46px !important;
  min-height: 46px !important;
  max-height: 46px !important;
  background: #FAF8F5 !important;
  border: 1.5px solid rgba(201, 158, 62, 0.35) !important;
  border-radius: 28px !important;
  padding: 0 4px !important;
  box-sizing: border-box !important;
  flex: 0 0 136px !important;
  overflow: hidden !important;
}

/* Neutralize any inherited button or full-width styles */
.product-form-buttons .quantity-selector button,
.product-form-buttons .quantity-selector button.button,
.product-form-buttons .quantity-selector .button-unstyled,
.quantity-selector :is(.quantity-minus, .quantity-plus),
.quantity-selector button,
.quantity-selector button.button {
  all: unset !important;
  box-sizing: border-box !important;
  width: 36px !important;
  min-width: 36px !important;
  max-width: 36px !important;
  height: 36px !important;
  min-height: 36px !important;
  max-height: 36px !important;
  border-radius: 50% !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  color: #0E281F !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  padding: 0 !important;
  margin: 0 !important;
  transition: all 0.2s ease !important;
  flex: 0 0 36px !important;
}

.quantity-selector button::before,
.quantity-selector button::after {
  display: none !important;
  content: none !important;
}

.quantity-selector button:hover {
  background: #FFFFFF !important;
  color: #C99E3E !important;
  transform: scale(1.08) !important;
  box-shadow: 0 2px 8px rgba(201, 158, 62, 0.2) !important;
}

.quantity-selector button svg,
.quantity-selector button .svg-wrapper {
  width: 14px !important;
  height: 14px !important;
  display: block !important;
}

.quantity-selector input,
.quantity-selector input[type="number"],
.quantity-selector .quantity-input {
  all: unset !important;
  box-sizing: border-box !important;
  width: 44px !important;
  min-width: 44px !important;
  max-width: 44px !important;
  height: 36px !important;
  text-align: center !important;
  border: none !important;
  background: transparent !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  color: #0E281F !important;
  padding: 0 !important;
  margin: 0 !important;
  box-shadow: none !important;
  -moz-appearance: textfield !important;
}

.quantity-selector input::-webkit-outer-spin-button,
.quantity-selector input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

/* 6. BUY BUTTONS — ADD TO CART & BUY IT NOW */
.product-form-buttons {
  margin-top: 6px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 10px !important;
  width: 100% !important;
}

.product-form-buttons > *:not(.quantity-selector-wrapper) {
  width: 100% !important;
}

/* Add to Cart button (Royal Emerald & 24K Gold) */
.product-form-buttons .add-to-cart-button,
.product-form-buttons button[name="add"],
button.add-to-cart-button {
  position: relative !important;
  overflow: hidden !important;
  width: 100% !important;
  min-height: 52px !important;
  height: 52px !important;
  background: #0E281F !important;
  color: #FAF8F5 !important;
  border: 1.5px solid #C99E3E !important;
  border-radius: 30px !important;
  padding: 12px 28px !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.92rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  box-shadow: 0 6px 20px rgba(14, 40, 31, 0.22), 0 2px 6px rgba(201, 158, 62, 0.2) !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  cursor: pointer !important;
}

.product-form-buttons .add-to-cart-button::after,
.product-form-buttons button[name="add"]::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -70%;
  width: 50%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(201, 158, 62, 0.35), rgba(255, 255, 255, 0.25), transparent);
  transform: rotate(25deg);
  transition: none;
}

.product-form-buttons .add-to-cart-button:hover::after,
.product-form-buttons button[name="add"]:hover::after {
  left: 140%;
  transition: left 0.85s cubic-bezier(0.16, 1, 0.3, 1);
}

.product-form-buttons .add-to-cart-button:hover,
.product-form-buttons button[name="add"]:hover {
  background: #143C2E !important;
  border-color: #DFB76C !important;
  box-shadow: 0 10px 30px rgba(201, 158, 62, 0.38), 0 4px 14px rgba(14, 40, 31, 0.3) !important;
  transform: translateY(-2px) !important;
}

.product-form-buttons .add-to-cart-button:active,
.product-form-buttons button[name="add"]:active {
  transform: translateY(0) scale(0.99) !important;
}

/* Buy it now button (Accelerated Checkout) */
.shopify-payment-button,
.accelerated-checkout {
  margin-top: 2px !important;
  width: 100% !important;
}

.shopify-payment-button__button,
.shopify-payment-button__button--unbranded,
[data-testid="Checkout-button"] {
  width: 100% !important;
  min-height: 52px !important;
  height: 52px !important;
  border-radius: 30px !important;
  background: #FAF8F5 !important;
  color: #0E281F !important;
  border: 1.5px solid #0E281F !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.92rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04) !important;
  transition: all 0.25s ease !important;
  cursor: pointer !important;
}

.shopify-payment-button__button:hover,
.shopify-payment-button__button--unbranded:hover,
[data-testid="Checkout-button"]:hover {
  background: #0E281F !important;
  color: #FAF8F5 !important;
  border-color: #0E281F !important;
  box-shadow: 0 8px 24px rgba(14, 40, 31, 0.25) !important;
  transform: translateY(-2px) !important;
}

/* 7. ROYAL AYURVEDIC TRUST BADGES STRIP (BELOW BUY BUTTONS) */
.mv-product-trust-strip {
  margin: 18px 0 14px 0 !important;
}

.mv-trust-strip-grid {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 10px !important;
}

.mv-trust-strip-item {
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  background: #FAF8F5 !important;
  border: 1px solid rgba(201, 158, 62, 0.25) !important;
  border-radius: 12px !important;
  padding: 10px 12px !important;
  transition: all 0.25s ease !important;
}

.mv-trust-strip-item:hover {
  border-color: #C99E3E !important;
  background: #FFFFFF !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(201, 158, 62, 0.15) !important;
}

.mv-trust-strip-icon-wrap {
  width: 32px !important;
  height: 32px !important;
  border-radius: 50% !important;
  background: #FFFFFF !important;
  border: 1px solid rgba(201, 158, 62, 0.3) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
}

.mv-trust-strip-title {
  font-family: 'Cinzel', serif !important;
  font-size: 0.72rem !important;
  font-weight: 700 !important;
  color: #0E281F !important;
  letter-spacing: 0.03em !important;
  display: block !important;
  line-height: 1.2 !important;
}

.mv-trust-strip-desc {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.68rem !important;
  color: #6B7D75 !important;
  display: block !important;
  line-height: 1.25 !important;
  margin-top: 2px !important;
}

/* Product Description Text Styling */
.product-details [data-testid="text"],
.product-details .product-description {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.92rem !important;
  line-height: 1.65 !important;
  color: #3A4B43 !important;
  margin: 14px 0 !important;
}

/* 8. INTERACTIVE LUXURY COLLAPSIBLE TABS (ACCORDION) */
.product-details .accordion {
  background: #FAF8F5 !important;
  border-radius: 14px !important;
  border: 1px solid rgba(201, 158, 62, 0.28) !important;
  padding: 4px 18px !important;
  margin-top: 14px !important;
  box-shadow: 0 4px 16px rgba(14, 40, 31, 0.03) !important;
}

.product-details .accordion details.details {
  border-bottom: 1px solid rgba(201, 158, 62, 0.2) !important;
  transition: all 0.25s ease !important;
}

.product-details .accordion details.details:last-child {
  border-bottom: none !important;
}

.product-details .accordion summary {
  font-family: 'Marcellus', 'Cinzel', serif !important;
  font-size: 0.96rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.04em !important;
  color: #0E281F !important;
  padding: 14px 0 !important;
  cursor: pointer !important;
  transition: color 0.2s ease !important;
}

.product-details .accordion summary:hover {
  color: #8C651E !important;
}

.product-details .accordion details[open] summary {
  color: #8C651E !important;
}

.product-details .accordion .details-content {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.88rem !important;
  line-height: 1.65 !important;
  color: #4A5B53 !important;
  padding-bottom: 14px !important;
}

/* 9. STICKY ADD TO CART BAR */
.sticky-add-to-cart__bar {
  background: #FAF8F5 !important;
  border: 1.5px solid #C99E3E !important;
  box-shadow: 0 12px 36px rgba(14, 40, 31, 0.18) !important;
}

.sticky-add-to-cart__image-img {
  border-radius: 8px !important;
  border: 1px solid rgba(201, 158, 62, 0.3) !important;
  background: #FFFFFF !important;
}

.sticky-add-to-cart__title {
  font-family: 'Marcellus', serif !important;
  font-size: 0.95rem !important;
  font-weight: 500 !important;
  color: #0E281F !important;
}

.sticky-add-to-cart__price {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  color: #8C651E !important;
}

.sticky-add-to-cart__button {
  border-radius: 28px !important;
  background: #0E281F !important;
  color: #FAF8F5 !important;
  border: 1px solid #C99E3E !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.82rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.08em !important;
  padding: 10px 24px !important;
  box-shadow: 0 4px 14px rgba(14, 40, 31, 0.25) !important;
  transition: all 0.25s ease !important;
}

.sticky-add-to-cart__button:hover {
  background: #163E30 !important;
  border-color: #DFB76C !important;
  box-shadow: 0 6px 20px rgba(201, 158, 62, 0.35) !important;
  transform: translateY(-1px) !important;
}

/* 10. PRODUCT RECOMMENDATIONS SECTION */
.product-recommendations {
  padding-top: 56px !important;
  padding-bottom: 64px !important;
  border-top: 1px solid rgba(201, 158, 62, 0.2) !important;
}

.product-recommendations h3,
.product-recommendations .section-header {
  text-align: center !important;
  font-family: 'Marcellus', serif !important;
  font-size: clamp(1.6rem, 2.8vw, 2.2rem) !important;
  font-weight: 500 !important;
  color: #0E281F !important;
  margin-bottom: 32px !important;
  letter-spacing: 0.02em !important;
}
`;

fs.writeFileSync(cssPath, baseCSS + cleanLuxuryGridCSS, 'utf8');
console.log('Successfully cleaned up CSS and applied clean luxury grid!');
