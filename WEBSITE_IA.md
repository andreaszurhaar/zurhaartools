# Zurhaar Tools — Website IA & Visual Layout Design

> **Owner:** Website agent
> **Drafted:** May 20, 2026
> **Status:** Design only — do NOT implement yet
> **Context:** Multi-product expansion. Current line = consumer Chrome extensions (JRF, ToS Scanner). New line = Chrome Extension Kit (€99–€299, Gumroad checkout, lifetime GitHub repo access). Brand strategy = Zurhaar Tools umbrella, descriptively-named products, cross-sell as design principle, self-selecting audiences.

---

## 0. Guiding principles

1. **Two clear audience zones, not three.** Consumers ("For everyone") and developers ("For developers"). Self-select via visual cues, not aggressive segmentation.
2. **Cross-sell is gentle.** Always visible in product page footers, success page, email. Never modal, never blocking.
3. **Don't break what works.** JRF + ToS Scanner conversion flow (`/pricing` → Stripe → `/success`) stays intact end-to-end.
4. **Kit is a sibling, not a subordinate.** It deserves its own landing page (`/chrome-extension-kit`) and its own pricing presentation. It's *listed* alongside extensions but checks out via Gumroad, not Stripe.
5. **Naming.** Use "Chrome Extension Kit" in full on first reference per page; "the Kit" or "Kit" thereafter. Avoid the abbreviation "CEK" — too cryptic.

---

## 1. Homepage layout (`/`)

### Strategy

The homepage today opens with one hero + one product grid + how-it-works + GitHub CTA. The new homepage keeps that backbone but introduces **two horizontal product bands** separated by a hairline divider — "For everyone" (extensions) and "For developers" (Kit + future dev tools). The hero stays audience-agnostic ("Tools that do the boring stuff for you") because both audiences buy that promise.

### ASCII wireframe

```
┌────────────────────────────────────────────────────────────────────────┐
│  ZurhaarTools                              Products   Developers   About│  ← nav (see §2)
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   SMART TOOLS & EXTENSIONS                                             │
│   ┌──────────────────────────────────────────────────────┐             │
│   │ Tools that do the BORING STUFF for you               │             │  ← hero unchanged
│   │                                                       │             │
│   │ Browser extensions for everyday tasks, plus           │  ← copy tweaked to hint at
│   │ developer tools to build your own.                    │     two audiences (one line)
│   │                                                       │             │
│   │  [Browse Products]   [About Me]                      │             │
│   └──────────────────────────────────────────────────────┘             │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  FOR EVERYONE                                            View all →    │  ← section label
│  Browser extensions that save you time on everyday tasks.              │  ← one-line context
│                                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                 │
│  │ [Extension]  │  │ [Extension]  │  │ [Extension]  │                 │
│  │ JRF          │  │ ToS Scanner  │  │ Review Summ. │                 │
│  │ €1.99+       │  │ €1.99+       │  │ Coming Soon  │                 │
│  └──────────────┘  └──────────────┘  └──────────────┘                 │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  FOR DEVELOPERS                                          View all →    │  ← section label
│  Tools to build and ship your own Chrome extensions.                   │
│                                                                        │
│  ┌──────────────┐  ┌──────────────┐                                   │
│  │ [Kit]        │  │ [Kit]        │                                   │  ← future slot
│  │ Chrome Ext.  │  │ Coming Soon  │                                   │
│  │ Kit  €99+    │  │              │                                   │
│  └──────────────┘  └──────────────┘                                   │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  HOW IT WORKS                                                          │  ← unchanged
│  1. Pick a tool   2. Get it instantly   3. Save time                   │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  NEW TOOLS EVERY MONTH                                                 │  ← unchanged
│  [Follow on GitHub]                                                    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Visual treatment

- **Section labels** ("FOR EVERYONE", "FOR DEVELOPERS"): `text-sm font-medium tracking-wide uppercase text-primary-light mb-2`. Same treatment as the existing "Smart Tools & Extensions" eyebrow in the hero.
- **Section dividers**: `border-t border-border` between bands. Subtle, not visually loud.
- **Card grid**: keep current 3-column grid. "For developers" can render a 3-col grid even with only 1–2 cards (let them sit left-aligned with empty space) — preserves rhythm.
- **No tabs, no audience switcher.** Two stacked sections, each with its own grid. Lower cognitive load than a tab toggle, and both audiences see both bands when scrolling.

### Hero copy change

Subhead, one new sentence:

> Browser extensions, scripts, and digital tools — built to automate what you shouldn't waste time on. New tools added regularly.
> **Browser extensions for everyday tasks, plus developer tools to build your own.**

(Keeps the original line; appends one audience-bridging sentence.)

---

## 2. Navigation

### Current nav

```
ZurhaarTools         Products    About
```

### Proposed nav

```
ZurhaarTools         Products    Developers    About
```

### Rationale for "Developers" as a top-level item (vs. "Kits" under "Products")

- **"Kits" under "Products" loses discoverability.** Developers browsing extensions won't think to click a dropdown to find the Kit.
- **"Developers" is an audience label, not a product category.** It scales when more dev tools land (CLI tools, prompt packs for devs, etc.). "Kits" would have to be renamed.
- **Mobile-friendly.** Three text links fit a single row. A dropdown menu adds JS complexity for one item today.
- **Trade-off:** "Developers" as a nav item subtly signals to non-devs "this isn't for me, scroll past." That's *desired* — self-selection.

### What "Developers" links to

`/developers` — a lightweight landing page listing all developer-oriented products. Today: just the Kit. Future: anything dev-focused. This avoids cluttering `/products` (which stays consumer-facing) and gives the Kit a meaningful parent page.

Note: `/products` should also continue to show the Kit (under a "For developers" sub-grid) so the catalog is complete. `/developers` is the dev-audience filtered view.

### Mobile

Current nav is text links only — no hamburger. Adding "Developers" makes four nav items (Products, Developers, About + logo). Still fits without a hamburger at the current 16px font / max-w-6xl. Verify on viewports ≤375px during implementation. If cramped, drop to a hamburger.

---

## 3. Product page template

Currently there's no per-product landing page — JRF and ToS Scanner both deep-link to `/pricing#<product>`. The Kit needs its own landing page (`/chrome-extension-kit`), and JRF / ToS Scanner should eventually get the same treatment for SEO + cross-sell. Define one shared template now.

### Template structure

```
┌────────────────────────────────────────────────────────────────────────┐
│  HERO                                                                  │
│  ┌────────────────────────────┬─────────────────────────────────┐     │
│  │ [Category badge]            │                                  │     │
│  │ Product Name                │  [Product screenshot or         │     │
│  │ One-sentence value prop     │   illustration]                 │     │
│  │ [Primary CTA]  [Secondary]  │                                  │     │
│  └────────────────────────────┴─────────────────────────────────┘     │
├────────────────────────────────────────────────────────────────────────┤
│  WHAT IT DOES                                                          │
│  3 feature cards or 3-step bullets                                     │
├────────────────────────────────────────────────────────────────────────┤
│  PRICING                                                               │
│  Inline cards (matches /pricing tier cards, max 3-up)                  │
│  OR  "See pricing →" link to /pricing#<product>                        │
├────────────────────────────────────────────────────────────────────────┤
│  FAQ                                                                   │
│  3–5 product-specific questions                                        │
├────────────────────────────────────────────────────────────────────────┤
│  OTHER ZURHAAR TOOLS                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                 │
│  │ [other prod] │  │ [other prod] │  │ [other prod] │                 │
│  └──────────────┘  └──────────────┘  └──────────────┘                 │
│  "Built by the same person. One support email, one quality bar."       │
└────────────────────────────────────────────────────────────────────────┘
```

### Per-product behavior of pricing section

- **JRF / ToS Scanner page**: embed the 3 tier cards inline (same component as on `/pricing`). CTA = Stripe payment link.
- **Kit page**: embed the 3 tier cards inline. CTA = Gumroad link (opens new tab).

### "Other Zurhaar Tools" cross-sell rules

- Show **up to 3** other products, never the current one.
- **Mix audiences deliberately:** on a JRF page, show ToS Scanner + Kit + (next consumer product when available). On the Kit page, show JRF + ToS Scanner + (next dev product). This is where cross-audience discovery happens.
- Reuse `ProductCard.astro` component — no new component needed.
- Section header copy: "Other Zurhaar Tools" (consistent across all product pages).
- Tagline below header: "Built by the same person. One support email, one quality bar." (one-liner that justifies cross-sell without overselling).

### New files this implies

- `src/pages/chrome-extension-kit.astro` (Kit landing page)
- `src/pages/developers.astro` (dev-audience catalog page)
- Optionally `src/pages/job-red-flag-detector.astro` and `src/pages/tos-scanner.astro` (only if SEO/marketing wants them — not required for the Kit launch). **Defer these** until after Kit ships.

---

## 4. Pricing page (`/pricing`)

### Current state

Tabs: `Job Red Flag Detector` | `ToS Scanner`. Each tab shows 3 Stripe-linked tier cards + a 3-step "How it works". FAQ section is shared at the bottom.

### Two options considered

**Option A: Add Kit as a third tab.**
- Pro: minimal markup change, follows existing pattern.
- Con: visually conflates a €99–€299 dev product with €1.99–€9.99 consumer scan packs. Tab UI suggests these are comparable purchase decisions. They aren't.
- Con: ToS Scanner buyers shouldn't see a €299 Kit option in the same tab strip — it's noise.

**Option B: Split into two sections — "Browser Extensions" and "Developer Tools".** (RECOMMENDED)
- Pro: visually separates audiences. Consumer scan packs stay in their tab group; Kit gets its own section with its own pricing rhythm.
- Pro: matches the homepage "For everyone" / "For developers" split — same mental model across the site.
- Pro: scales naturally when more dev tools land.
- Con: longer page. Acceptable.

### Proposed layout (Option B)

```
┌────────────────────────────────────────────────────────────────────────┐
│  PRICING                                                               │
│  Pay per scan or once for lifetime access. No subscriptions.           │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  FOR EVERYONE — BROWSER EXTENSIONS                                     │
│  Pay-per-scan credit packs. Credits don't expire.                      │
│                                                                        │
│  [ Job Red Flag Detector ]  [ ToS Scanner ]    ← tab toggle           │
│                                                                        │
│  ┌────────────┬────────────┬────────────┐                             │
│  │ Starter    │ Standard   │ Pro        │                             │
│  │ 50 scans   │ 150 scans  │ 500 scans  │                             │
│  │ €1.99      │ €4.99 ★    │ €9.99      │                             │
│  │ [Get Start]│ [Get Start]│ [Get Start]│                             │
│  └────────────┴────────────┴────────────┘                             │
│                                                                        │
│  HOW IT WORKS (per-product, current 3 steps)                           │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  FOR DEVELOPERS — KITS                                                 │
│  One-time payment, lifetime access, private GitHub repo.               │
│                                                                        │
│  CHROME EXTENSION KIT                                                  │
│  ┌────────────┬────────────┬────────────┐                             │
│  │ Solo       │ Team       │ Studio     │                             │
│  │ €99        │ €199 ★     │ €299       │                             │
│  │ [Buy on    │ [Buy on    │ [Buy on    │                             │
│  │  Gumroad → │  Gumroad → │  Gumroad → │                             │
│  └────────────┴────────────┴────────────┘                             │
│                                                                        │
│  WHAT'S INCLUDED (4–6 bullets, Kit-specific)                           │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│  QUESTIONS (shared FAQ + Kit-specific entries)                         │
└────────────────────────────────────────────────────────────────────────┘
```

### Tier names for the Kit

Assumed tiers (verify with Andreas before implementation):
- **Solo** — €99 — 1 developer, personal projects
- **Team** — €199 — up to 5 developers, commercial use
- **Studio** — €299 — unlimited devs, white-label rights

Andreas to confirm exact tier names, prices, and entitlements. If undecided, ship with one tier and add others later.

### CTA copy

- Extensions: existing "Get Started" (unchanged)
- Kit: "Buy on Gumroad →" — explicit about the external checkout. Matches reader expectations and reduces post-click confusion.

### FAQ additions (Kit-specific)

Append to existing FAQ block:
- "Is the Kit a subscription?" → No. One-time payment, lifetime access to the repo.
- "What's in the Kit?" → Brief list + link to the Kit landing page for full detail.
- "Where does checkout happen?" → On Gumroad. After purchase you get a GitHub invite by email.
- "Can I use the Kit commercially?" → Depends on tier; see what's included.

---

## 5. Success page (`/success`)

### Current state

Loads license key from `/api/license`, shows it with copy button, lists 3 next-step instructions (install extension from Chrome/Edge, paste key, scan).

### Constraint

Success page is **Stripe-only**. Gumroad runs its own success page for the Kit — we don't control that flow. So `/success` only ever displays for extension purchases, not Kit purchases. Cross-sell happens here for *extension buyers*, pointing them toward (a) the other extension and (b) the Kit if they're also developers.

### Proposed addition

Add a "More from Zurhaar Tools" block **below** the existing "Next steps" section. Don't modify anything above — license key display stays the hero.

### ASCII wireframe

```
┌──────────────────────────────────────────────────┐
│  [ ✓ ]                                            │
│  Thanks for your purchase!                        │
│                                                   │
│  Your license key for <Product> is below.         │
│  ┌─────────────────────────────────────┐         │
│  │ License key                          │         │
│  │ XXXX-XXXX-XXXX-XXXX        [Copy]   │         │
│  │ 150 scans available                  │         │
│  └─────────────────────────────────────┘         │
│                                                   │
│  Next steps                                       │  ← unchanged
│  1. Install the extension from Chrome / Edge      │
│  2. Open the extension and paste your key         │
│  3. Start scanning                                │
│                                                   │
│  Lost your license key?                           │  ← unchanged
│                                                   │
├──────────────────────────────────────────────────┤  ← new: hairline divider
│                                                   │
│  MORE FROM ZURHAAR TOOLS                          │  ← new block
│                                                   │
│  ┌──────────────┐  ┌──────────────┐              │
│  │ [Extension]  │  │ [Kit]        │              │  ← 2-up grid
│  │ <other ext>  │  │ Chrome Ext.  │              │
│  │ €1.99+       │  │ Kit €99+     │              │
│  │ [View →]     │  │ [View →]     │              │
│  └──────────────┘  └──────────────┘              │
│                                                   │
│  One support email, one quality bar.              │
│                                                   │
└──────────────────────────────────────────────────┘
```

### Cross-sell selection rules

- Determine current product from `data.product` (already returned by `/api/license`).
- If current product = `job-red-flag-detector` → show ToS Scanner + Kit.
- If current product = `tos-scanner` → show JRF + Kit.
- Always include the Kit in the cross-sell on the success page (post-purchase = highest intent moment for developer self-identification).
- Layout: 2-up grid (not 3-up) so each card has more weight and the page doesn't feel like a catalog.

### Visual tone

Cross-sell block is **subdued** — `text-text-muted` heading, no gradient buttons. The point is "by the way, this exists" — not "buy more now". The license key is still the page's hero.

---

## 6. Email receipts

### Current state

Backend (`zurhaartools-api/src/index.js`) sends a Resend email with license key, credits, how-to-use, support contact. Email template is product-aware (uses dynamic product name).

### Proposed change

Add a **one-line cross-sell footer** above the existing support contact line. Plain text/HTML, no images, no buttons (keeps deliverability + email-client compatibility high).

### Copy template

```
─────────────────────────────────────────────
Other Zurhaar Tools you might like:
  • <Other extension name> — <one-line value prop> · zurhaartools.com/pricing#<slug>
  • Chrome Extension Kit — build your own extensions, lifetime repo access · zurhaartools.com/chrome-extension-kit

Questions? Reply to this email or write to andreas@zurhaartools.com.
─────────────────────────────────────────────
```

### Per-product cross-sell selection

| If purchased | Promote |
|---|---|
| Job Red Flag Detector | ToS Scanner + Chrome Extension Kit |
| ToS Scanner | Job Red Flag Detector + Chrome Extension Kit |
| Chrome Extension Kit | (No email — Gumroad handles its own receipt) |

### Rules

- Always include the Kit in extension-purchase emails (same logic as success page).
- Always promote the *other* consumer extension first, Kit second.
- Never include more than 2 cross-sell items — keeps the email short.
- Plain text variant must match HTML variant (Resend best practice).

---

## 7. Concrete files to change

### New files

| Path | Purpose | Notes |
|---|---|---|
| `src/pages/chrome-extension-kit.astro` | Kit landing page | Uses product page template from §3. Embedded pricing cards link to Gumroad. |
| `src/pages/developers.astro` | Developer-audience catalog | Lists Kit (and future dev tools). Mirrors `/products` but filtered. |
| `src/components/CrossSell.astro` | Reusable "Other Zurhaar Tools" block | Props: `currentProduct: string`, `variant: 'page' \| 'success'`. Renders 2 or 3 `ProductCard`s, excludes `currentProduct`. Used on every product page + success page. |

### Modified files

| Path | Change |
|---|---|
| `src/layouts/Layout.astro` | Add `<a href="/developers">Developers</a>` to nav between Products and About. One line change. |
| `src/pages/index.astro` | (a) Add one sentence to hero subhead. (b) Replace single "Latest Products" grid with two labeled bands: "For everyone" (JRF, ToS Scanner, Review Summarizer) and "For developers" (Chrome Extension Kit). Section labels styled like the existing eyebrow text. |
| `src/pages/products.astro` | (a) Add `kit` as a filter tab. (b) Add a "Chrome Extension Kit" `ProductCard` to the grid with `category="kit"` and `href="/chrome-extension-kit"`. |
| `src/pages/pricing.astro` | Major restructure. Wrap existing JRF+ToS tab block in a new "For everyone — Browser extensions" section. Add new "For developers — Kits" section below containing 3 Kit tier cards (links to Gumroad). Extend shared FAQ with 4 Kit-specific entries. Keep tab JS for the extension tab toggle; Kit has no tabs (one product per section for now). |
| `src/pages/success.astro` | Add `<CrossSell currentProduct={data.product} variant="success" />` below the "Lost your license key?" link. Cross-sell mounts after the license fetch resolves (or unconditionally after the static section — content is static so no fetch needed). |
| `src/components/ProductCard.astro` | Add `'kit'` to the `category` union. Add `kit: { label: 'Kit', color: 'bg-purple-500/15 text-purple-400 border border-purple-500/20' }` to `categoryLabels`. Verify purple is in scope; if not, use amber or a new accent. Andreas to confirm color. |
| `zurhaartools-api/src/index.js` (out of scope for website agent — flag for backend) | Email template: add cross-sell footer with product-aware copy per §6. |

### Files NOT changed

- `success.astro` license-fetch logic stays as-is (no breaking change to Stripe-driven flow).
- `pricing.astro` Stripe payment links stay as-is for JRF/ToS Scanner.
- `Layout.astro` footer unchanged.
- `privacy.astro`, `terms.astro` — review separately when Kit launches (Gumroad as new sub-processor may need disclosure; that's a separate compliance review, not part of this IA).

---

## 8. Open questions for Andreas

1. **Kit tier names + prices.** Currently assumed Solo €99 / Team €199 / Studio €299. Confirm or override.
2. **Kit category color in `ProductCard`.** Suggest purple (`purple-500/15 purple-400`) for visual differentiation from extensions (orange). Acceptable? Or use a brand-aligned accent?
3. **Per-product landing pages for JRF / ToS Scanner.** Build these now (for cross-sell symmetry) or defer until after Kit launch? Recommend defer — Kit launch is the priority.
4. **`/developers` page scope.** Just a filtered product grid (mirroring `/products`) or richer (mini-bio, dev-focused testimonial, FAQ)? Recommend start lean (filtered grid), enrich after first Kit sales.
5. **Gumroad order tracking.** Out of scope here, but: how will Kit sales hit the bookkeeping? Manual entry, Gumroad webhook to backend, or quarterly export? Flag for finance + backend agents.
6. **Notify-me list for unreleased Kit tiers.** STATUS.md backlog already has "Notify me" email capture for coming-soon products. Hook this into Kit landing page if/when implemented.

---

## 9. Tradeoffs flagged

- **"Developers" as top-level nav** adds visual weight to a single product (the Kit) today. Justified by future dev tools, but if Kit underperforms, this nav slot becomes dead weight. Reversible — collapse back to "Products" later.
- **Two-section pricing page is longer** than tabs-only. Users scroll more. Mitigated by clear section labels and the audience-separation benefit. If conversion drops post-launch, A/B against a 3-tab variant.
- **Kit has no `/success` page** because Gumroad checkout happens off-site. Cross-sell from Kit buyers back to extensions only happens via the Kit landing page footer + email outreach Andreas does manually. Acceptable for v1.
- **`/products` page now shows mixed audiences** (extensions + Kit in one grid). Filter tabs help, but the "All" tab is heterogeneous. Acceptable — `/developers` exists for users who want to filter, and `/products` filters work too.
- **`ProductCard` category color expansion** (adding `kit`) means a new Tailwind color must be available. Verify `purple-500` is JIT-compiled or add to `global.css` `@theme` block.

---

## 10. What's already in the codebase that supports this

- `pricing.astro` already uses tab JS with hash routing — reusable pattern for any future tabbed sections.
- `ProductCard.astro` already has a category enum + color map — clean extension point for `kit`.
- `success.astro` already returns `data.product` from `/api/license` — cross-sell selection logic has a data hook.
- Email template is already product-aware (per STATUS.md "Make email template product-aware — uses dynamic product name") — cross-sell footer can plug into the same product-name resolver.
- Design tokens in `global.css` (`@theme` block) — any new accent color goes there for consistency.

## 11. What's in the codebase that conflicts

- **`/pricing` "Can I use one license key across products?" FAQ** says "Each product has its own license key and credit balance. Buy scan packs for each product separately." This stays true for extensions but is silent on the Kit. Update FAQ wording when Kit ships: "Each *extension* has its own license key. The Chrome Extension Kit uses GitHub repo access instead — no license key needed."
- **Layout.astro nav** has only 2 items today (Products, About). Adding a 3rd is trivial but on mobile (<375px) verify it doesn't wrap. Currently no hamburger menu exists — if cramped, this design becomes the trigger to add one.
- **`ProductCard` `comingSoon` state** renders a non-link "Coming Soon" badge. The Kit isn't coming soon — it'll launch with active links. No conflict, just noting the component handles both states cleanly.
- **No 4xx handling on `/chrome-extension-kit`** since it doesn't exist yet — once created, no further routing changes needed (Astro file-based routing).

---

**End of design doc. Awaiting confirmation on §8 open questions before implementation phase.**
