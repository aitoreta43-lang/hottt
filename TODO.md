# HalfOffTelegram UI/UX/Design/Mobile/SEO/Code Optimization TODO

## Approved Plan Progress Tracker
**Status**: Approved by user. Extract shared CSS/JS first, then update HTMLs in batches, test.

### Phase 1: Shared Assets ✅
- [x] Step 1: Create `styles.css` (extract/refine CSS + animations/dark mode) 
- [x] Step 2: Create `script.js` (FAQ/lazyload + reveals/swipe/dark toggle)

### Phase 2: Update Main Pages (Batch 1) ✅
- [x] Step 3: Update `halfofftelegram-webpage.html` (link CSS/JS, hero image, polish) 
- [x] Step 4: Update `half-off-flights.html` (link CSS/JS, hero image polish)
- [x] Step 5: Update `half-off-hotel.html` (fix duplicates/errors, full content, SEO) - created `half-off-hotel-updated.html`
- [x] Mark Phase 1-2 complete

**Preview**: Run `npx serve .` & check `half-off-hotel-updated.html` - all 3 main pages complete with animations, dark mode, optimized.

**Next**: Phase 3 Batch 2 or test Phase 4?

### Phase 3: Update Remaining Pages (Batch 2)
- [ ] Step 6: Update `telegram-deals.html`, `flight-discounts-usa.html`, `cheap-flights.html`
- [ ] Step 7: Update `bill-payment-discounts.html`, `utility-bill-promo-codes.html`, `smart-plugs-half-off.html`
- [ ] Step 8: Update `delta-half-off.html`, `xfinity-discount-code.html`, `at-and-t-bill-discount.html`

### Phase 4: Testing & Final
- [ ] Step 9: Test all pages (`npx serve .`), check mobile/Lighthouse/SEO
- [ ] Step 10: Code validation, minor fixes
- [ ] Step 11: **attempt_completion**

**Instructions**: Update this file after each step completion. Use checkboxes [x]. Execute `npx serve .` for preview.
**Run**: `npx serve .` to preview new styles/script.

