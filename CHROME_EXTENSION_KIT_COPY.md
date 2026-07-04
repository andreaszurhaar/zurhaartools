# Chrome Extension Kit — Landing Page + Gumroad Copy

> **Owner:** Website agent
> **Drafted:** May 20, 2026
> **For:** `src/pages/chrome-extension-kit.astro` (new) and the Gumroad listing
> **Pre-launch state:** CTAs are waitlist signup, not Buy. Comments below mark every spot that changes when buying opens.

---

## Pre-launch vs. post-launch

This is the state at launch day:

| Section | Pre-launch (today) | Post-launch (after kit is built + ToS Scanner approved) |
|---|---|---|
| Hero CTA | Email-capture form: "Notify me when it launches" | "Buy on Gumroad →" linking to product page |
| Tier comparison CTAs | "Notify me" on every tier | "Buy Starter / Pro / Studio" → Gumroad links |
| Final CTA | Email-capture form repeat | Buy buttons + "Lifetime updates included" reassurance line |
| FAQ "When can I buy?" | "Joining the waitlist is the only way to know." | Remove this question — replace with "What payment methods do you accept?" |

The page structure stays the same. Only the CTA components swap.

---

## Section 1 — Hero

**Layout:** Category badge (`Kit` in purple) → headline → subheadline → primary CTA → social proof one-liner under CTA.

```
[ Kit ]   ← purple category badge

Ship a paid Chrome extension this month.

The exact stack behind Job Red Flag Detector and ToS Scanner —
template repo, working backend, written-down lessons. Lifetime
access to the GitHub repo.

[ Notify me when it launches ]    ← pre-launch CTA (waitlist form)
[ Buy on Gumroad → ]              ← POST-LAUNCH: replaces the form

Built on Cloudflare Workers + Stripe + Anthropic API. MV3.
```

### Notes

- Headline is 8 words. Headline focuses on the buyer's outcome ("ship a paid Chrome extension"), not the kit's features.
- Subheadline is two sentences. The first names the proof; the second states the deliverable.
- "Lifetime access" appears in the hero deliberately — it's the brand identity, not a fine-print detail.
- Pre-launch waitlist form: single email input + "Notify me" button. No name field, no extra fields.

---

## Section 2 — Social proof bar

A single horizontal band under the hero. Subdued styling (`text-text-muted` background), not a hero element.

```
Built from the same code that runs two live Zurhaar Tools products.

  Job Red Flag Detector      ToS Scanner
  Live on Chrome + Edge      Live on Chrome + Edge
  Approved May 11             Approved May (TBD — post-approval)
```

### Notes

- Two mini-cards, side by side. Each is just product name + 2 lines of fact.
- Only facts from `STATUS.md`. JRF: "Live on Chrome + Edge" (`STATUS.md` Active table — Approved, v1.2.6 published May 11). ToS Scanner: currently "In review (submitted May 18)" — at kit launch this will read "Live on Chrome + Edge" too; until then the second card reads "In Chrome + Edge review" with no approval date.
- No revenue numbers, no install counts, no testimonials. Andreas hasn't shared those, and inventing them would break the rules.
- No screenshots of the kit itself — the screenshots live in §3.

---

## Section 3 — What's inside

**Layout:** Two-column grid on desktop, single column on mobile. Each item is a one-line bold header + one sentence of detail. Use a checkmark icon (already in the design system) at the start of each header.

```
What's inside

Code that ships to production
✓ Working sample Chrome extension (MV3 manifest with side panel + popup + content scripts wired up)
✓ Cloudflare Worker backend — Stripe webhooks, license keys, credit metering, refund + chargeback handlers
✓ Astro storefront — pricing page with tabs, success page that fetches the license key, recover flow
✓ D1 schema + migrations — licenses, credit transactions, status state machine (active / suspended / revoked / deleted)
✓ Resend email templates — purchase confirmation + license recovery
✓ Playwright tests in 3 layers — shared state machine, content extraction with fixtures, real-API smoke

Lessons from shipping two real extensions
✓ EU-compliant privacy + terms templates (most kits skip this — get rejected from Chrome Web Store for it)
✓ The Promise.race gotcha — chrome.scripting.executeScript hangs forever when permissions are revoked
✓ The activeTab-vs-host-permissions matrix — the #1 reason extensions get rejected
✓ The 7-state side panel pattern — welcome, initial, loading, results, no-credits, error, no-content
✓ The 4-strategy content extractor that works on any site (selectors → markers → keyword scoring → fallback)
✓ Shadow-DOM extraction (for LinkedIn-style sites) and MutationObserver for SPAs

What it doesn't include
× The actual prompts behind Job Red Flag Detector and ToS Scanner (those are the products — kit ships a neutral example prompt that demonstrates the same JSON-output convention)
× A hosted Worker — you run your own Cloudflare account, that's the point
× Auto-deploying CI/CD (optional chapter in the docs — left out so the kit works without it)
```

### Notes

- The "What it doesn't include" block is the opposite of marketing instinct, but it's the right call here — devs respect honesty about scope. It also pre-empts the "is this just a wrapper around your products?" question.
- "EU-compliant privacy + terms templates" needs to be visible in this section. It's the genuinely differentiating bonus per the audit, and it's an aspect most boilerplates don't ship.
- "The Promise.race gotcha" line uses the buyer's words — devs Googling this exact symptom will recognise it.
- The "live extensions" claim is bounded — only the two real ones (JRF, ToS Scanner). No future-product references.

---

## Section 4 — Tier comparison

**Layout:** 3-column pricing card grid. Middle column has the "Best value" badge (matches existing pricing.astro pattern). Lifetime access stated explicitly on every tier — not just in fine print.

```
Pricing

One-time payment. Lifetime access to the repo and every update.


┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│ Starter              │  │ Pro          ★ Best  │  │ Studio               │
│                      │  │              value   │  │                      │
│ €99                  │  │ €199                 │  │ €299                 │
│ one-time             │  │ one-time             │  │ one-time             │
│                      │  │                      │  │                      │
│ For solo developers  │  │ For shipping a real  │  │ For agencies and     │
│ building their first │  │ product to market    │  │ studios building     │
│ extension            │  │                      │  │ multiple extensions  │
│                      │  │                      │  │                      │
│ ✓ Full code (extension, backend, website)                              │
│ ✓ EU-compliant privacy + terms templates                               │
│ ✓ Sample extension + second-extension scaffold                          │
│ ✓ Playwright tests (3 layers)                                           │
│ ✓ All technical docs (architecture, setup, gotchas, deploying safely)  │
│ ✓ Lifetime access to the repo                                          │
│ ✓ Lifetime updates                                                      │
│                      │                          │                      │
│ ✓ License: 1 dev     │  ✓ License: up to 5 devs │ ✓ License: unlimited │
│ ✓ 30 days email      │  ✓ 6 months email        │ ✓ Lifetime email     │
│   support            │    support               │   support            │
│ —                    │  ✓ First-paying-customer │ ✓ Everything in Pro  │
│                      │    playbook              │                      │
│ —                    │  ✓ Featured Build slot   │ ✓ 1-hour async       │
│                      │    on the developers     │   review of your     │
│                      │    page (if you opt in)  │   first extension    │
│                      │                          │   before submission  │
│                      │                          │                      │
│ [ Notify me ]        │  [ Notify me ]           │ [ Notify me ]        │
│ POST-LAUNCH:         │  POST-LAUNCH:            │ POST-LAUNCH:         │
│ [ Buy Starter →]     │  [ Buy Pro → ]           │ [ Buy Studio → ]     │
└──────────────────────┘  └──────────────────────┘  └──────────────────────┘
```

### Notes

- The "shared rows" (full code, legal templates, sample extension, tests, docs, lifetime repo, lifetime updates) are listed once across the card group visually — design implementation can do this with a checked row spanning all 3 columns. If that's not feasible in the existing component, repeat them in each card.
- "Lifetime access to the repo" and "Lifetime updates" each get their own line — they're the brand promise, repeating both makes the no-subscription stance unmissable.
- Pro's "First-paying-customer playbook" is a deliberate hook. It's the doc that justifies the price step from €99 to €199 — most kits ignore the marketing side entirely.
- Studio's "1-hour async review" needs to be capped in Andreas's day-to-day workload — see Open Questions at the end.

---

## Section 5 — How it works

**Layout:** 4-step horizontal flow on desktop (matching the existing index.astro "How it works" 3-step pattern but with one more step). Single column on mobile. Each step is a numbered circle + 1 line.

```
How it works

1   Buy on Gumroad
    Choose a tier and pay once. Gumroad handles checkout, EU VAT, the lot.

2   Enter your GitHub username at checkout
    One required custom field — your GitHub handle, that's it.

3   Get a repo invite in your email
    Within seconds. Pull access, lifetime.

4   Ship your extension
    Read the quickstart, deploy the worker, build your first extension.

The full mechanics: Gumroad sends a webhook to our backend → backend invites
your GitHub user as a collaborator → you accept the invite and clone.
If you typo your username, you can fix it from a self-service redemption page.
```

### Notes

- The visual fits the existing 3-step design language; 4 steps still fits at `max-w-6xl`.
- The italic paragraph at the bottom is for the technically-curious buyer. It's the same flow the backend agent documented in `GUMROAD_GITHUB_FLOW.md` §2, distilled to one sentence.
- "Pull access, lifetime" makes the GitHub permission level explicit. Saves an FAQ question.

---

## Section 6 — FAQ

**Layout:** Single-column accordion (reuse the existing pricing.astro FAQ component).

```
Questions

How long does it take to ship a real extension with this?
If you've never built a Chrome extension before, expect a weekend to get the
sample running on your own Cloudflare account, then 2–4 weeks to design,
build, test, and submit your own extension. The kit removes the
"what do I even need to set up" question — you're left with just the
extension-specific work.

Do I keep updates after I buy?
Yes. Lifetime access to the repo means you can pull every kit update Andreas
ships, forever. No subscription, no renewal.

What if I don't have a GitHub account?
You'll need one — it's free. The kit lives in a private GitHub repo, and
you get access by being invited as a collaborator. If you enter the wrong
username at checkout, there's a recovery page that lets you fix it.

What's the refund policy?
14 days, no questions asked. After that, it's non-refundable — same as
buying a book. If you refund, you're removed from the repo automatically.

What tech do I need to know?
JavaScript (you'll be writing some). Familiarity with HTML/CSS for the side
panel and the website. The setup docs assume you can use a terminal, a text
editor, and follow a step-by-step guide. You do not need to know Cloudflare,
Stripe, or Manifest V3 in advance — the docs cover all three from scratch.

Does the kit include hosting costs?
No, but they're effectively zero for a starting business. Cloudflare Workers
and D1 are free up to 100k requests / 5M reads a day. Resend is free for the
first 100 emails a day. Stripe charges per transaction (1.5% + €0.25 in the
EU), not monthly. The only fixed cost is your domain (~€10/year).

Can I sell the extensions I build with this?
Yes. The kit license allows commercial use on every tier — what you build with
the kit is yours to sell. The only thing the license forbids is redistributing
the kit code itself.

Is the kit a subscription?
No. One-time payment, lifetime repo access, lifetime updates. If you pay for
something, you have it forever.

What's the sample extension that comes with the kit?
It's called Pageword Counter Pro — a purpose-built teaching example that
counts words on a page and shows reading time. It uses the same content
extractor, same backend, same state machine, same tests as Job Red Flag
Detector and ToS Scanner. It's a working extension you can actually load
into Chrome and run, not a stub.

Are the prompts from Job Red Flag Detector and ToS Scanner included?
No — those are the products. The kit ships a neutral example prompt that
demonstrates the same JSON-output convention without copying the
competitive vocab. You write your own prompts for your own products.

Where does checkout happen?
On Gumroad. After purchase, you'll get a confirmation email from Gumroad
and a separate email from us with the GitHub invite link.

When can I buy?                                             ← pre-launch only — REMOVE post-launch
Joining the waitlist is the only way to know. We'll email you the day it
opens. No spam, no marketing list — one email per launch.
```

### Notes

- 12 questions in pre-launch, 11 post-launch (the "When can I buy?" disappears).
- Covered every must-include from the brief: ship time, updates, no GitHub, refund, tech requirements, hosting costs, commercial use, sample extension. Added 3 more (subscription clarification, prompt clarification, checkout location) because the audit + Gumroad flow surfaced them as recurring questions.
- Refund question echoes the locked decision exactly (14 days no questions, then non-refundable).
- "What tech do I need to know" deliberately understates the prerequisites — buyers self-select better when expectations are clear.

---

## Section 7 — Final CTA + waitlist

**Layout:** Centered block, top border (`border-t border-border` like the existing CTA section on index.astro).

```
                  Be first when it launches

   Drop your email below. We'll send one message the day the kit goes live.
                       That's the whole list.

          [ your@email.com ]   [ Notify me ]

           ← pre-launch waitlist form (single email input)

   POST-LAUNCH:
                       Ready to ship your extension?

       [ Buy Starter — €99 ]  [ Buy Pro — €199 ]  [ Buy Studio — €299 ]

                 Lifetime access. 14-day refund. Pay once.
```

### Notes

- Pre-launch: single email field + button. Submit goes to the same `/api/kit/waitlist` endpoint backend will build (out of scope for this doc — flagged as a question below).
- "That's the whole list" is the trust-builder line. It's short, it's honest, it pre-empts the "are you going to spam me?" question.
- Post-launch reassurance line ("Lifetime access. 14-day refund. Pay once.") repeats the three brand promises at the moment of purchase intent.

---

## Section 8 — Cross-sell footer

**Layout:** Two-column on desktop (one is the Kit's own cross-sell, one is the existing site footer). Single column on mobile. Reuse `CrossSell.astro` (the new component planned in `WEBSITE_IA.md` §7).

```
Other Zurhaar Tools

┌──────────────────────────┐  ┌──────────────────────────┐
│ [ Extension ]            │  │ [ Extension ]            │
│ Job Red Flag Detector    │  │ ToS Scanner              │
│ From €1.99               │  │ From €1.99               │
│                          │  │                          │
│ Spots warning signs in   │  │ Scans Terms of Service   │
│ job postings — vague     │  │ and Privacy Policies,    │
│ salary, toxic culture    │  │ highlights dangers in    │
│ signals, unrealistic     │  │ plain language.          │
│ requirements.            │  │                          │
│                          │  │                          │
│ [ View → ]               │  │ [ View → ]               │
└──────────────────────────┘  └──────────────────────────┘

Built by the same person. One support email, one quality bar.
```

### Notes

- Per `WEBSITE_IA.md` §3 cross-sell rules: show up to 3 other products, never the current one, mix audiences deliberately. On the Kit page we show both consumer extensions (which is the audience-mixing call — Kit buyers may also want the consumer products, and consumer-product users who land here may want the Kit).
- ProductCard component handles the existing card layout — no new component needed beyond the CrossSell wrapper from the IA doc.
- Tagline matches the IA doc exactly: "Built by the same person. One support email, one quality bar."

---

## Section 9 — Gumroad listing version

> This is the standalone version formatted for Gumroad's listing structure: short summary at the top, longer description, what's included list, then FAQ at the bottom. No layout markup — Gumroad renders its own.

### Short summary (1–2 lines, shown above the buy button)

```
Ship a paid Chrome extension this month — the exact stack behind two live
Zurhaar Tools products. Template repo, working backend, lifetime GitHub
access.
```

### Detailed description

```
Chrome Extension Kit

This is the exact stack I used to ship Job Red Flag Detector and ToS Scanner —
two live Chrome extensions on the Chrome Web Store and Edge Add-ons store. I
packaged the template repo, the backend code, the website storefront, and
the lessons I learned along the way into one kit, so you don't have to learn
them the hard way.

What you actually get

You get a private GitHub repo with:

- A working sample Chrome extension (MV3 manifest with side panel + popup +
  content scripts wired up) that you can load into Chrome and run today
- A complete Cloudflare Worker backend — Stripe webhooks, license keys,
  credit metering, refund + chargeback handlers, GDPR anonymization
- An Astro storefront for your product website — pricing page, success page
  that fetches the license key after purchase, license recovery flow
- D1 schema + migrations — licenses, credit transactions, status state machine
- Resend email templates for purchase confirmation and license recovery
- Playwright tests in 3 layers (shared state machine, content extraction
  with fixtures, real-API smoke tests)
- EU-compliant privacy policy + terms of service templates (most kits skip
  these — and most kits' buyers get rejected from the Chrome Web Store for it)
- 20+ written guides covering every part of the stack, the production-tested
  gotchas, the EU compliance side (GDPR, KOR, withdrawal waivers), and a
  marketing playbook for your first-paying-customer launch

Lessons from shipping two real extensions

- The chrome.scripting.executeScript hang when permissions are revoked, and
  the Promise.race wrapper that fixes it
- The activeTab-vs-host-permissions matrix and why most extensions get
  rejected for getting it wrong
- The 7-state side panel pattern that handles every error path cleanly
- The 4-strategy content extractor that works on any website
- Shadow-DOM extraction for LinkedIn-style sites, and MutationObserver for SPAs
- The full Chrome Web Store + Edge Add-ons submission walkthrough

What you don't get

- The actual prompts from Job Red Flag Detector and ToS Scanner — those are
  the products. The kit ships a neutral example prompt that demonstrates the
  same JSON-output convention, so you can write your own.
- A hosted backend. You'll run your own Cloudflare account — that's the
  point of the kit.
- A subscription. One-time payment, lifetime repo access, lifetime updates.

How it works

1. Buy a tier on Gumroad.
2. Enter your GitHub username at checkout (one required field).
3. Get a repo invite by email within seconds.
4. Read the quickstart and ship your first extension.

Tiers

Starter — €99 — Solo developer, 30 days email support.
Pro — €199 — Up to 5 developers, 6 months support, marketing playbook
included, Featured Build slot on the developers page.
Studio — €299 — Unlimited developers, lifetime support, 1-hour async review
of your first extension before you submit it to the Chrome Web Store.

Refund

14 days no questions asked. After that, non-refundable. If you refund, you're
removed from the repo.

About the seller

Andreas Zurhaar — Zurhaar Tools, Eenmanszaak, KVK 42045392, Maastricht,
Netherlands. Email andreas@zurhaartools.com for questions.
```

### What's included (bulleted, formatted for Gumroad's "What you get" field)

```
- Private GitHub repo, lifetime pull access
- Working Chrome extension (Manifest V3, side panel architecture)
- Full Cloudflare Worker backend (license keys, credit metering, refunds, GDPR)
- Complete Astro storefront (pricing, success page, recover flow)
- D1 schema + migrations
- Resend email templates
- Playwright test suite (3 layers)
- EU-compliant privacy + terms templates
- 20+ written guides (quickstart, setup, gotchas, store submission, EU compliance)
- Lifetime updates as the kit improves
- Marketing playbook (Pro and Studio tiers)
- Email support (window depends on tier)
```

### FAQ (Gumroad listing version — shorter than the website)

```
How long does it take to ship a real extension?
A weekend to get the sample running, then 2–4 weeks for your own extension
design + build + submission.

Do I keep updates?
Yes — lifetime updates included.

What if I don't have a GitHub account?
You'll need one (free). If you typo your username at checkout, there's a
self-service recovery page.

Refund policy?
14 days no questions asked. After that, non-refundable.

Can I sell the extensions I build with this?
Yes. Commercial use is permitted on every tier.

Is it a subscription?
No. One-time payment.

What tech do I need?
JavaScript. The docs cover Cloudflare, Stripe, and Manifest V3 from scratch.

Does it include the prompts from Job Red Flag Detector or ToS Scanner?
No — those are the products. The kit ships a neutral example prompt.

Where can I ask questions before buying?
Email andreas@zurhaartools.com.
```

---

## Voice + style audit

Quick scan against the brief's voice rules:

| Rule | Compliance check |
|---|---|
| No AI fluff ("leverage", "harness", "supercharge", "unlock") | None of these words used. |
| Match existing site tone (practical, direct) | Subhead lifted from existing index.astro voice — "browser extensions, scripts, and digital tools" rhythm. |
| Never mention AI in customer-facing copy | Not mentioned. Backend is described as "Anthropic API" in the hero (factually accurate, brand-name reference to the service, not a sales pitch on "AI"). Andreas can downgrade this to "Claude API" or remove if even the service name crosses the line — see Open Questions. |
| Specific over vague | "MV3 manifest with side panel + popup + content scripts wired up", "Promise.race gotcha", "7-state side panel" — all specific. |
| Buyer's words ("ship a paid extension", "Stripe + license keys", "Cloudflare Workers") | All present in hero, what's-inside, and FAQ. |
| Headlines under 10 words | Hero is 8. Section headers are 1–4 words. |
| Body paragraphs under 4 sentences | Every FAQ answer is 1–3 sentences. Hero subhead is 2. |
