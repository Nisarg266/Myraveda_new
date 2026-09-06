const fs = require('fs');
const path = 'c:/Users/panch/Downloads/theme_export__myravedaluxury-com-updated-copy-of-horizon__06SEP2026-0506am/assets/myraveda-luxury.css';
let css = fs.readFileSync(path, 'utf8');

// Find marker where product styling starts
const marker = '/* ==========================================================================\n   HAUTE LUXE PRODUCT PAGE — BESPOKE EXPENSIVE STYLING & ANIMATIONS';
const idx = css.indexOf(marker);

const baseCSS = idx !== -1 ? css.substring(0, idx).trimEnd() : css.trimEnd();

const newProductCSS = `

/* ==========================================================================
   HAUTE LUXE PRODUCT PAGE — BESPOKE EXPENSIVE STYLING & ANIMATIONS
   Crafted for Myra Veda Royal Heritage Aesthetic
   Colors: Deep Forest Green (#0E281F), 24K Gold (#C99E3E / #DFB76C), Rich Cream (#FAF8F5)
   ========================================================================== */

/* 1. PRODUCT INFORMATION CONTAINER & ENTRY ANIMATION */
.product-information {
  padding-top: 36px !important;
  padding-bottom: 64px !important;
  animation: mvProductFadeIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes mvProductFadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 2. MEDIA GALLERY — TWO-COLUMN STACKED LUXURY SHOWCASE */
.product-information__media,
.media-gallery {
  position: relative;
}

.media-gallery__grid {
  gap: 16px !important;
}

.product-media-container,
.media-gallery__item,
.product-information__media li[ref="media[]"] {
  border-radius: 14px !important;
  overflow: hidden !important;
  border: 1px solid rgba(201, 158, 62, 0.22) !important;
  background: #FAF8F5 !important;
  box-shadow: 0 8px 26px rgba(14, 40, 31, 0.04) !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.product-media-container:hover,
.media-gallery__item:hover,
.product-information__media li[ref="media[]"]:hover {
  border-color: rgba(201, 158, 62, 0.5) !important;
  box-shadow: 0 14px 38px rgba(14, 40, 31, 0.08) !important;
}

.product-media-container img,
.media-gallery__item img,
.product-information__media img {
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) !important;
  display: block !important;
  width: 100% !important;
}

.product-media-container:hover img,
.media-gallery__item:hover img,
.product-information__media li[ref="media[]"]:hover img {
  transform: scale(1.035);
}

/* 3. PRODUCT DETAILS — EDITORIAL ROYAL TYPOGRAPHY */
.product-details {
  position: relative;
}

/* Product Vendor / Brand Eyebrow Tag */
.product-details .product-vendor,
.product-details .vendor,
.product-details [data-testid="product-vendor"] {
  font-family: 'Cinzel', serif !important;
  font-size: 0.74rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.22em !important;
  text-transform: uppercase !important;
  color: #8C651E !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  margin-bottom: 8px !important;
}

.product-details .product-vendor::before {
  content: '✦ ';
  color: #C99E3E;
}

/* Product Title */
.product-details h1,
.product-details [data-testid="product-title"] h1,
.product-details [data-testid="product-title"],
.product-details .product-title {
  font-family: 'Marcellus', 'Playfair Display', Georgia, serif !important;
  font-size: clamp(1.85rem, 3.2vw, 2.5rem) !important;
  font-weight: 500 !important;
  color: #0E281F !important;
  letter-spacing: 0.02em !important;
  line-height: 1.25 !important;
  margin: 0 0 12px !important;
}

/* Price Block */
.product-details .price,
[data-testid="product-information"] .price {
  font-family: 'Marcellus', serif !important;
  display: flex !important;
  align-items: baseline !important;
  gap: 12px !important;
  margin-bottom: 12px !important;
}

.product-details .price .price-item--regular,
.product-details .price .price-item--sale,
.product-details .price [data-testid="price-sale"],
.product-details .price .price-item {
  font-size: clamp(1.45rem, 2.2vw, 1.85rem) !important;
  font-weight: 600 !important;
  color: #0E281F !important;
  letter-spacing: 0.02em !important;
}

.product-details .price .price-item--compare,
.product-details .price [data-testid="price-compare"] {
  font-size: 1.05rem !important;
  color: #8C9993 !important;
  text-decoration: line-through !important;
  font-weight: 400 !important;
}

/* Gold Divider */
.product-details .divider,
.product-details hr,
.product-details [data-testid="divider"] {
  height: 1px !important;
  background: linear-gradient(90deg, #C99E3E, rgba(201, 158, 62, 0.2), transparent) !important;
  border: none !important;
  margin: 18px 0 !important;
}

/* 4. VARIANT PICKER — ROYAL PILLS & ACTIVE STATES */
.variant-picker {
  margin: 16px 0 !important;
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
  margin-bottom: 10px !important;
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

/* Horizon Variant Button Label */
.variant-option__button-label {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 10px 22px !important;
  border-radius: 26px !important;
  border: 1px solid rgba(201, 158, 62, 0.32) !important;
  background-color: #FAF8F5 !important;
  color: #0E281F !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.88rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.03em !important;
  cursor: pointer !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
  position: relative !important;
}

.variant-option__button-label:hover {
  border-color: #C99E3E !important;
  background-color: #FFFFFF !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(201, 158, 62, 0.18) !important;
  color: #0E281F !important;
}

/* Selected State */
.variant-option__button-label:has(input:checked),
.variant-option__button-label:has([data-current-checked="true"]) {
  background-color: #0E281F !important;
  color: #FAF8F5 !important;
  border-color: #0E281F !important;
  box-shadow: 0 4px 14px rgba(14, 40, 31, 0.28) !important;
  transform: translateY(-1px) !important;
}

.variant-option__button-label:has(input:checked) .variant-option__button-label__text,
.variant-option__button-label:has([data-current-checked="true"]) .variant-option__button-label__text {
  color: #FAF8F5 !important;
}

.variant-option__button-label:has(input:checked) .variant-option__button-label__pill,
.variant-option__button-label:has([data-current-checked="true"]) .variant-option__button-label__pill {
  background-color: #0E281F !important;
  border-color: #0E281F !important;
}

/* 5. QUANTITY SELECTOR — ARTISAN PILL CONTROL */
.quantity-selector-wrapper {
  display: inline-flex !important;
  margin-bottom: 12px !important;
}

.quantity-selector {
  display: inline-flex !important;
  align-items: center !important;
  background: #FAF8F5 !important;
  border: 1.5px solid rgba(201, 158, 62, 0.35) !important;
  border-radius: 30px !important;
  padding: 4px 8px !important;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.02) !important;
}

.quantity-selector button,
.quantity-selector .quantity-minus,
.quantity-selector .quantity-plus {
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  background: transparent !important;
  border: none !important;
  color: #0E281F !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  transition: all 0.25s ease !important;
}

.quantity-selector button:hover {
  background: #FFFFFF !important;
  color: #C99E3E !important;
  transform: scale(1.1) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
}

.quantity-selector input {
  width: 44px !important;
  text-align: center !important;
  border: none !important;
  background: transparent !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 1rem !important;
  font-weight: 700 !important;
  color: #0E281F !important;
}

/* 6. ADD TO CART & BUY BUTTONS — HERO SHIMMER SWEEP */
.product-form-buttons {
  margin-top: 14px !important;
}

.add-to-cart-button,
button[name="add"],
.product-form-buttons button.button {
  position: relative !important;
  overflow: hidden !important;
  width: 100% !important;
  min-height: 54px !important;
  background: linear-gradient(135deg, #0E281F 0%, #163E30 100%) !important;
  color: #FAF8F5 !important;
  border: 1.5px solid #C99E3E !important;
  border-radius: 34px !important;
  padding: 16px 36px !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.95rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  box-shadow: 0 8px 24px rgba(14, 40, 31, 0.25), 0 2px 6px rgba(201, 158, 62, 0.25) !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  cursor: pointer !important;
}

/* Gold shimmer sweep across button */
.add-to-cart-button::after,
button[name="add"]::after,
.product-form-buttons button.button::after {
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

.add-to-cart-button:hover::after,
button[name="add"]:hover::after,
.product-form-buttons button.button:hover::after {
  left: 140%;
  transition: left 0.85s cubic-bezier(0.16, 1, 0.3, 1);
}

.add-to-cart-button:hover,
button[name="add"]:hover,
.product-form-buttons button.button:hover {
  transform: translateY(-2px) scale(1.01) !important;
  box-shadow: 0 12px 34px rgba(201, 158, 62, 0.38), 0 4px 14px rgba(14, 40, 31, 0.35) !important;
  border-color: #DFB76C !important;
  background: linear-gradient(135deg, #123327 0%, #1A4939 100%) !important;
}

.add-to-cart-button:active,
button[name="add"]:active,
.product-form-buttons button.button:active {
  transform: translateY(0) scale(0.99) !important;
}

/* 7. ROYAL AYURVEDIC TRUST BADGES STRIP (BELOW BUY BUTTONS) */
.mv-product-trust-strip {
  margin-top: 22px;
  margin-bottom: 24px;
}

.mv-trust-strip-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.mv-trust-strip-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #FAF8F5;
  border: 1px solid rgba(201, 158, 62, 0.28);
  border-radius: 12px;
  padding: 12px 14px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.mv-trust-strip-item:hover {
  border-color: #C99E3E;
  background: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(201, 158, 62, 0.16);
}

.mv-trust-strip-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 1px solid rgba(201, 158, 62, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(14, 40, 31, 0.04);
}

.mv-trust-strip-text {
  display: flex;
  flex-direction: column;
}

.mv-trust-strip-title {
  font-family: 'Cinzel', serif;
  font-size: 0.76rem;
  font-weight: 700;
  color: #0E281F;
  letter-spacing: 0.04em;
  line-height: 1.25;
}

.mv-trust-strip-desc {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.7rem;
  color: #6B7D75;
  line-height: 1.3;
  margin-top: 2px;
}

/* 8. INTERACTIVE LUXURY COLLAPSIBLE TABS (ACCORDION) */
.product-details .accordion {
  background: #FAF8F5 !important;
  border-radius: 14px !important;
  border: 1px solid rgba(201, 158, 62, 0.28) !important;
  padding: 4px 18px !important;
  margin-top: 20px !important;
  box-shadow: 0 4px 16px rgba(14, 40, 31, 0.03) !important;
}

.product-details .accordion details.details {
  border-bottom: 1px solid rgba(201, 158, 62, 0.2) !important;
  transition: all 0.25s ease !important;
}

.product-details .accordion details.details:last-child {
  border-bottom: none !important;
}

.product-details .accordion summary.details__header {
  padding: 16px 0 !important;
  cursor: pointer !important;
  font-family: 'Marcellus', serif !important;
  font-size: 1.02rem !important;
  font-weight: 500 !important;
  color: #0E281F !important;
  letter-spacing: 0.02em !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
}

.product-details .accordion summary.details__header:hover {
  color: #8C651E !important;
}

.product-details .accordion summary.details__header svg {
  color: #C99E3E !important;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.product-details .accordion details[open] summary.details__header svg {
  transform: rotate(180deg) !important;
}

.product-details .accordion .details-content {
  padding: 0 0 16px 0 !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.92rem !important;
  line-height: 1.75 !important;
  color: #4A5B53 !important;
}

/* 9. FLOATING STICKY ADD TO CART BAR */
.sticky-add-to-cart__bar {
  background: rgba(250, 248, 245, 0.97) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border: 1px solid rgba(201, 158, 62, 0.38) !important;
  border-radius: 40px !important;
  box-shadow: 0 14px 44px rgba(14, 40, 31, 0.18), 0 2px 10px rgba(201, 158, 62, 0.15) !important;
  padding: 8px 20px !important;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease !important;
}

.sticky-add-to-cart__image-img {
  border-radius: 50% !important;
  border: 1.5px solid #C99E3E !important;
  width: 44px !important;
  height: 44px !important;
  object-fit: cover !important;
}

.sticky-add-to-cart__title {
  font-family: 'Marcellus', serif !important;
  font-size: 0.95rem !important;
  font-weight: 600 !important;
  color: #0E281F !important;
  margin: 0 !important;
}

.sticky-add-to-cart__price {
  font-family: 'Marcellus', serif !important;
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
  padding-top: 60px !important;
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

/* Mobile Breakpoint */
@media screen and (max-width: 749px) {
  .product-information {
    padding-top: 16px !important;
    padding-bottom: 36px !important;
  }
  .product-details h1 {
    font-size: 1.6rem !important;
  }
  .mv-trust-strip-grid {
    grid-template-columns: 1fr;
  }
  .sticky-add-to-cart__bar {
    width: 95vw !important;
    max-width: 95vw !important;
    padding: 6px 14px !important;
  }
  .add-to-cart-button,
  button[name="add"],
  .product-form-buttons button.button {
    padding: 14px 24px !important;
    font-size: 0.88rem !important;
  }
}
`;

fs.writeFileSync(path, baseCSS + newProductCSS, 'utf8');
console.log('Successfully updated assets/myraveda-luxury.css with complete product luxury styling!');
