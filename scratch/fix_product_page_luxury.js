const fs = require('fs');
const path = 'c:/Users/panch/Downloads/theme_export__myravedaluxury-com-updated-copy-of-horizon__06SEP2026-0506am/assets/myraveda-luxury.css';
let css = fs.readFileSync(path, 'utf8');

const marker = '/* ==========================================================================\n   HAUTE LUXE PRODUCT PAGE — BESPOKE EXPENSIVE STYLING & ANIMATIONS';
const idx = css.indexOf(marker);

const baseCSS = idx !== -1 ? css.substring(0, idx).trimEnd() : css.trimEnd();

const newProductCSS = `

/* ==========================================================================
   HAUTE LUXE PRODUCT PAGE — BESPOKE EXPENSIVE STYLING & ANIMATIONS
   Crafted for Myra Veda Royal Heritage Aesthetic
   ========================================================================== */

/* 1. PRODUCT INFORMATION CONTAINER */
.product-information {
  padding-top: 28px !important;
  padding-bottom: 56px !important;
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

/* 2. MEDIA GALLERY — COMPACT CAROUSEL & ARTISAN SHOWCASE */
.product-information__media,
.media-gallery {
  position: relative;
  max-width: 540px !important;
  margin: 0 auto !important;
}

.media-gallery .product-media-container,
.media-gallery .media-gallery__item,
.product-information__media li[ref="media[]"] {
  border-radius: 16px !important;
  overflow: hidden !important;
  border: 1px solid rgba(201, 158, 62, 0.25) !important;
  background: #FAF8F5 !important;
  box-shadow: 0 8px 24px rgba(14, 40, 31, 0.04) !important;
  max-height: 520px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: border-color 0.4s ease, box-shadow 0.4s ease !important;
}

.media-gallery .product-media-container:hover {
  border-color: rgba(201, 158, 62, 0.5) !important;
  box-shadow: 0 12px 32px rgba(14, 40, 31, 0.08) !important;
}

.media-gallery .product-media-container img,
.media-gallery .media-gallery__item img,
.product-information__media img {
  max-height: 490px !important;
  width: 100% !important;
  height: auto !important;
  object-fit: contain !important;
  padding: 10px !important;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.media-gallery .product-media-container:hover img {
  transform: scale(1.03);
}

/* Gallery Thumbnails Below */
.media-gallery .dialog-thumbnails-list,
.media-gallery .media-gallery__thumbnails,
.media-gallery [ref="thumbnails"] {
  display: flex !important;
  justify-content: center !important;
  gap: 12px !important;
  margin-top: 14px !important;
}

.media-gallery button.dialog-thumbnails-list__thumbnail,
.media-gallery .media-gallery__thumbnails-item,
.product-media-gallery__thumbnail-button {
  width: 68px !important;
  height: 68px !important;
  border-radius: 10px !important;
  border: 1.5px solid rgba(201, 158, 62, 0.25) !important;
  overflow: hidden !important;
  background: #FAF8F5 !important;
  padding: 3px !important;
  transition: all 0.25s ease !important;
  cursor: pointer !important;
}

.media-gallery button.dialog-thumbnails-list__thumbnail:hover,
.product-media-gallery__thumbnail-button:hover {
  border-color: #C99E3E !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(201, 158, 62, 0.25) !important;
}

.media-gallery button.dialog-thumbnails-list__thumbnail[aria-selected="true"],
.product-media-gallery__thumbnail-button[aria-current="true"],
.product-media-gallery__thumbnail-button.is-active {
  border-color: #C99E3E !important;
  box-shadow: 0 0 0 2px #C99E3E !important;
  transform: scale(1.05);
}

/* 3. PRODUCT DETAILS — ROYAL TYPOGRAPHY & PRICE */
.product-details {
  position: relative;
  max-width: 520px !important;
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
  margin: 0 0 10px !important;
}

/* Price Block */
.product-details .price,
[data-testid="product-information"] .price {
  font-family: 'Marcellus', serif !important;
  display: flex !important;
  align-items: baseline !important;
  gap: 12px !important;
  margin: 6px 0 14px 0 !important;
}

.product-details .price .price-item--regular,
.product-details .price .price-item--sale,
.product-details .price [data-testid="price-sale"],
.product-details .price .price-item {
  font-size: clamp(1.5rem, 2vw, 1.8rem) !important;
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
.product-details hr,
.product-details .divider,
.product-details [data-testid="divider"] {
  height: 1px !important;
  background: linear-gradient(90deg, rgba(201, 158, 62, 0.4), rgba(201, 158, 62, 0.1), transparent) !important;
  border: none !important;
  margin: 14px 0 18px !important;
}

/* 4. VARIANT PICKER — ROYAL PILLS */
.variant-picker {
  margin: 14px 0 !important;
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

/* 5. QUANTITY SELECTOR — UNIFIED SLEEK ARTISAN PILL */
.quantity-selector-wrapper {
  display: block !important;
  margin: 14px 0 !important;
  width: auto !important;
}

.quantity-selector {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 136px !important;
  max-width: 136px !important;
  height: 46px !important;
  min-height: 46px !important;
  background: #FAF8F5 !important;
  border: 1.5px solid rgba(201, 158, 62, 0.35) !important;
  border-radius: 28px !important;
  padding: 0 4px !important;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.02) !important;
  box-sizing: border-box !important;
}

/* Reset any full-width button styles that bled into quantity minus/plus */
.quantity-selector :is(.quantity-minus, .quantity-plus),
.quantity-selector button,
.quantity-selector button.button {
  width: 36px !important;
  min-width: 36px !important;
  max-width: 36px !important;
  height: 36px !important;
  min-height: 36px !important;
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
  overflow: visible !important;
}

.quantity-selector button::after {
  display: none !important;
}

.quantity-selector button:hover {
  background: #FFFFFF !important;
  color: #C99E3E !important;
  transform: scale(1.1) !important;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08) !important;
}

.quantity-selector input,
.quantity-selector .quantity-input {
  width: 44px !important;
  text-align: center !important;
  border: none !important;
  background: transparent !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 1rem !important;
  font-weight: 700 !important;
  color: #0E281F !important;
  padding: 0 !important;
  margin: 0 !important;
  box-shadow: none !important;
}

/* 6. BUY BUTTONS — ADD TO CART & BUY IT NOW */
.product-form-buttons {
  margin-top: 14px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 10px !important;
}

/* Add to Cart button (Strictly scoped!) */
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
  padding: 14px 28px !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-size: 0.95rem !important;
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
.shopify-payment-button__button--unbranded {
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
.shopify-payment-button__button--unbranded:hover {
  background: #0E281F !important;
  color: #FAF8F5 !important;
  border-color: #0E281F !important;
  box-shadow: 0 8px 24px rgba(14, 40, 31, 0.25) !important;
  transform: translateY(-2px) !important;
}

/* 7. ROYAL AYURVEDIC TRUST BADGES STRIP (BELOW BUY BUTTONS) */
.mv-product-trust-strip {
  margin: 20px 0 !important;
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

/* 8. INTERACTIVE LUXURY COLLAPSIBLE TABS (ACCORDION) */
.product-details .accordion {
  background: #FAF8F5 !important;
  border-radius: 14px !important;
  border: 1px solid rgba(201, 158, 62, 0.28) !important;
  padding: 4px 18px !important;
  margin-top: 18px !important;
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
  padding: 15px 0 !important;
  cursor: pointer !important;
  font-family: 'Marcellus', serif !important;
  font-size: 1rem !important;
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

/* Mobile Breakpoints */
@media screen and (max-width: 749px) {
  .product-information {
    padding-top: 16px !important;
    padding-bottom: 36px !important;
  }
  .product-details h1 {
    font-size: 1.55rem !important;
  }
  .media-gallery .product-media-container,
  .media-gallery .media-gallery__item,
  .product-information__media li[ref="media[]"] {
    max-height: 380px !important;
  }
  .media-gallery .product-media-container img {
    max-height: 360px !important;
  }
  .mv-trust-strip-grid {
    grid-template-columns: 1fr;
  }
  .sticky-add-to-cart__bar {
    width: 95vw !important;
    max-width: 95vw !important;
    padding: 6px 14px !important;
  }
}
`;

fs.writeFileSync(path, baseCSS + newProductCSS, 'utf8');
console.log('Successfully fixed product page luxury CSS!');
