# Kentobeans Live — Design System

This document establishes a unified design language for the Kentobeans Live Next.js application. It is the authoritative reference for colors, typography, spacing, components, and interaction patterns.

---

## 1. Design Principles

| Principle | Description |
|---|---|
| **Brand-First** | Every visual decision should reflect the Kentobeans brand. Avoid generic defaults (e.g. Tailwind gray or purple) when a brand token exists. |
| **Consistency** | The same concept should always look the same — cards, headings, buttons, and interactive states must be uniform across all pages. |
| **Accessibility** | Sufficient color contrast (WCAG AA), semantic HTML, and keyboard navigation are required, not optional. |
| **Dark-First** | The experience centers on a dark, streamer-style aesthetic. Light surfaces are used sparingly as contrast elements. |
| **Mobile-First Responsiveness** | Layouts are designed for mobile and progressively enhanced for larger screens. |

---

## 2. Color Palette

### 2.1 Brand Colors

These tokens are the canonical color vocabulary for the application. They are defined as CSS variables in `src/app/globals.css` and exposed as Tailwind utility classes via `@theme inline`.

| Token Name | CSS Variable | Hex | Tailwind Class | Primary Usage |
|---|---|---|---|---|
| Dark Blue | `--kento-dark-blue` | `#0e1336` | `kento-dark-blue` | Page/section backgrounds, navbar, footer |
| Light Blue | `--kento-light-blue` | `#4376bb` | `kento-light-blue` | Borders, secondary accents, icon backgrounds |
| Purple | `--kento-purple` | `#523877` | `kento-purple` | Hover states, decorative gradients, feature highlights |
| Orange | `--kento-orange` | `#f57e20` | `kento-orange` | Primary CTA buttons, key text accents, brand signature |
| Green | `--kento-green` | `#5c9240` | `kento-green` | Secondary CTA buttons, status indicators (open/active) |

**Usage Rules:**
- Never substitute a Tailwind default color (e.g. `purple-600`, `blue-50`) when a brand token serves the same purpose.
- The primary action color is **Orange** (`kento-orange`). All primary buttons and key call-to-action elements use it.
- The secondary action color is **Green** (`kento-green`). Use it for hover states on the primary button, "open/active" status, and secondary CTAs.
- **Dark Blue** is the primary background color for dark surfaces (nav, footer, stat cards).

### 2.2 Neutral & Surface Colors

These semantic tokens handle light/dark backgrounds and general text. They support system-level dark mode via `prefers-color-scheme`.

| Token Name | CSS Variable | Light Value | Dark Value |
|---|---|---|---|
| Background | `--background` | `#ffffff` | `#0a0a0a` |
| Foreground | `--foreground` | `#171717` | `#ededed` |

### 2.3 Extended Semantic Tokens (To Be Added)

The following tokens should be added to `globals.css` to eliminate the remaining hardcoded hex values in the codebase:

| Token Name | CSS Variable | Hex | Purpose |
|---|---|---|---|
| Card Dark | `--kento-card-dark` | `#1a1a24` | Background for dark stat cards (`QueueStatCard`, `MiniQueueStatCard`, song list cards) |
| Card Active | `--kento-card-active` | `#1a237e` | Active tab background in `CommandTabs` |

> **Current Inconsistencies to Resolve:**
> - `QueueStatCard.tsx`, `MiniQueueStatCard.tsx`, and `songlist/page.tsx` all use `bg-[#1a1a24]` — replace with `bg-kento-card-dark`.
> - `CommandTabs.tsx` uses `bg-[#1a237e]` for the active tab — replace with `bg-kento-card-active`.
> - `src/app/page.tsx` uses `bg-purple-600 hover:bg-purple-700` for the Twitch/schedule button — replace with `bg-kento-purple hover:bg-kento-purple/80`.

### 2.4 Allowed Tailwind Neutral Palette

When brand colors are not appropriate, use only the following Tailwind neutrals to maintain consistency:

| Purpose | Class |
|---|---|
| Dividers, borders | `slate-800` (dark surfaces), `slate-200` (light surfaces) |
| Muted text | `slate-400`, `slate-500` |
| Secondary text | `slate-600`, `slate-700` |
| Primary text on dark | `white` |
| Primary text on light | `slate-900` |
| Subtle backgrounds (light) | `gray-50` |
| Table row hover (light) | `gray-50/50` |

Do **not** introduce other Tailwind color families (e.g. `blue-*`, `red-*`, `yellow-*`, `green-*`) without a specific, documented reason and a new token.

---

## 3. Typography

### 3.1 Font Family

**The application font is Maven Pro**, a geometric sans-serif that is modern, bold, and distinctive — well suited to a streamer brand identity.

| Role | Family | CSS Variable | Tailwind Class |
|---|---|---|---|
| Sans-serif (all body & UI text) | Maven Pro | `--font-maven-pro` | `font-sans` |
| Monospace (queue ranks, timestamps) | Geist Mono | `--font-geist-mono` | `font-mono` |

**Implementation Steps:**

1. In `src/app/layout.tsx`, replace the `Geist` import with `Maven_Pro` from `next/font/google`:
   ```tsx
   import { Maven_Pro, Geist_Mono } from 'next/font/google';
   const mavenPro = Maven_Pro({ variable: '--font-maven-pro', subsets: ['latin'] });
   const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
   ```
2. In `src/app/globals.css`, update the `@theme inline` block:
   ```css
   --font-sans: var(--font-maven-pro);
   ```
3. Remove the `body { font-family: Arial, Helvetica, sans-serif; }` rule from `globals.css` — this currently overrides the configured font and must be deleted.

> **Current Inconsistency:** The `globals.css` body rule forces `Arial, Helvetica, sans-serif` on all text, completely overriding the font variables set in `layout.tsx`. Until this is removed, no custom font will render correctly.

### 3.2 Type Scale

All headings and body text should use the following scale. Avoid arbitrary sizes.

| Role | Size Class | Weight | Usage |
|---|---|---|---|
| Display / Hero | `text-5xl` / `text-6xl` | `font-bold` | Hero headings only |
| Page Title (H1) | `text-4xl` | `font-bold` | Top-level page headings |
| Section Heading (H2) | `text-3xl` | `font-bold` | Section titles within a page |
| Card / Subsection Heading (H3) | `text-xl` | `font-semibold` | Card headings, named sections |
| Body | `text-base` | `font-normal` | Default body copy |
| Body Small | `text-sm` | `font-normal` | Descriptions, secondary copy |
| Label / Caption | `text-xs` | `font-semibold` | Uppercase stat labels, table headers |
| Monospace | `font-mono text-xs` | `font-normal` | Queue position numbers, timestamps |

> **Current Inconsistency:** The About page uses `text-4xl font-normal` for its H1, while the Home page uses `text-4xl md:text-6xl font-bold`. All H1s should use `font-bold`.

### 3.3 Text Color Conventions

| Context | Class |
|---|---|
| Headings on dark backgrounds | `text-white` |
| Headings on light backgrounds | `text-slate-900` |
| Body copy on dark | `text-slate-300` |
| Body copy on light | `text-slate-700` |
| Muted / secondary | `text-slate-500` |
| Brand accent | `text-kento-orange` |
| Link hover | `hover:text-kento-orange` |

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

Use the following Tailwind spacing values consistently. Do not introduce arbitrary values.

| Category | Values | Notes |
|---|---|---|
| **Component Padding** | `p-3`, `p-4`, `p-6` | `p-4` is the default card padding; `p-6` for more prominent cards |
| **Section Padding** | `py-12`, `py-16`, `py-24` | Page sections use large vertical rhythm |
| **Horizontal Page Padding** | `px-4 sm:px-6 lg:px-8` | Applied to all max-width containers |
| **Gaps in grids/flex** | `gap-4`, `gap-6`, `gap-8` | Prefer `gap-6` for card grids |
| **Stack spacing** | `space-y-4`, `space-y-6` | For vertical stacks of related items |
| **Inline spacing** | `gap-2`, `gap-3` | For icon + text inline pairs |

> **Current Inconsistency:** Card padding varies between `p-3`, `p-4`, `p-5`, and `p-6` with no clear rationale. Standardize: use `p-4` for compact cards (`MiniQueueStatCard`) and `p-6` for standard cards (`QueueStatCard`, feature cards).

### 4.2 Page Containers

All pages must use the same maximum width and horizontal padding pattern:

```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

> **Current Inconsistency:** Pages use a mix of `max-w-7xl`, `max-w-6xl`, and `max-w-5xl`. Unify to `max-w-7xl` everywhere.

### 4.3 Grid System

| Layout | Class |
|---|---|
| 2-column card grid | `grid grid-cols-1 md:grid-cols-2 gap-6` |
| 3-column card grid | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` |
| Stats row | `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4` |
| Main + sidebar (2/3 + 1/3) | `grid grid-cols-1 lg:grid-cols-3 gap-6` (main: `col-span-2`) |

---

## 5. Components

### 5.1 Buttons

Three button variants are defined. All buttons share base styles.

**Base (all buttons):**
```
rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
```

| Variant | Class (Rest) | Class (Hover) | Focus Ring | Usage |
|---|---|---|---|---|
| **Primary** | `bg-kento-orange text-white px-6 py-3` | `hover:bg-kento-green` | `focus:ring-kento-orange` | Main CTA, one per section max |
| **Secondary** | `border-2 border-white text-white px-6 py-3` | `hover:bg-white hover:text-kento-dark-blue` | `focus:ring-white` | Paired with Primary in hero sections |
| **Ghost / Outline** | `border border-slate-700 text-slate-300 px-4 py-2` | `hover:bg-slate-800 hover:text-white` | `focus:ring-slate-500` | Low-emphasis actions, tab-like controls |

> **Current Inconsistency:** The Twitch button on the Home page uses `bg-purple-600 hover:bg-purple-700` — replace with `bg-kento-purple hover:bg-kento-purple/80`.

### 5.2 Cards

**Dark Stat Card (QueueStatCard / MiniQueueStatCard):**
```
bg-kento-card-dark border border-slate-800 rounded-xl text-center
```
- Standard padding: `p-6` for `QueueStatCard`, `p-4` for `MiniQueueStatCard`
- Title: `text-xs text-slate-500 uppercase font-semibold tracking-wider`
- Value: `text-3xl font-black` (QueueStatCard), `text-xl font-bold` (Mini)
- Subtitle: `text-xs text-slate-500 mt-1`

**Light Feature Card (Home page):**
```
bg-gray-50 rounded-xl p-6 text-center border border-slate-100
```
- Heading: `text-xl font-semibold text-slate-900`
- Body: `text-sm text-slate-600 mt-2`
- Icon container: `w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4`
  - Icon background uses a brand color: `bg-kento-light-blue`, `bg-kento-purple`, or `bg-kento-green`

### 5.3 Navigation

- Background: `bg-kento-dark-blue border-b-2 border-kento-light-blue`
- Height: `h-16`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Logo: 32×32 image with `ml-2`
- Nav links (rest): `text-white font-medium transition-colors duration-200`
- Nav links (hover / active): `text-kento-orange`
- Mobile menu trigger: visible at `md:hidden`
- Mobile menu background: `bg-kento-dark-blue`
- Mobile menu item hover: `hover:bg-kento-purple`

### 5.4 Tabs (CommandTabs)

- **Mobile:** native `<select>` dropdown, `w-full p-3 bg-white border border-slate-200 rounded-lg`
- **Desktop:** inline button group
  - Container: `border border-slate-200 rounded-lg overflow-hidden shadow-sm`
  - Active tab: `bg-kento-card-active text-white` (replace hardcoded `#1a237e`)
  - Inactive tab: `bg-white text-slate-900 hover:bg-gray-50`
  - Tab padding: `px-8 py-2 font-medium text-sm transition-colors duration-200`

### 5.5 Table

Used in the Commands page and About equipment section.

- Header row: `text-xs text-slate-500 uppercase tracking-wider border-b border-slate-200 font-semibold`
- Header cell padding: `py-3 px-4`
- Body row hover: `hover:bg-gray-50/50 transition-colors duration-150`
- Body row divider: `divide-y divide-slate-100`
- Cell padding: `py-4 px-4`

> **Current Inconsistency:** Table cells use `px-2`, which is too tight. Standardize to `px-4`.

### 5.6 Song Queue Entry (SongQueueEntry)

- Container: `flex items-center gap-4 p-4 hover:bg-slate-800/30 transition-colors duration-150`
- Rank: `text-slate-600 font-mono text-xs w-8 text-right`
- Icons: `Star` = `text-kento-orange`, `Shuffle` = `text-kento-light-blue` (replace hardcoded `yellow-400` and `green-500`)
- Song title: `font-semibold text-sm text-white`
- Metadata: `text-xs text-slate-500`
- Duration: `text-xs text-slate-400 ml-auto`

### 5.7 Footer

```
bg-kento-dark-blue text-white py-8 mt-auto
```
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Copyright text: `text-sm text-slate-400`

---

## 6. Gradients

| Name | Class | Usage |
|---|---|---|
| Hero Gradient | `bg-gradient-to-br from-kento-dark-blue via-kento-purple to-kento-light-blue` | Hero sections |
| Now Playing Gradient | `bg-gradient-to-br from-kento-purple to-kento-dark-blue` | Album art placeholder (replace `from-purple-900 to-black`) |

---

## 7. Iconography

All icons use **Lucide React** (`lucide-react`). Do not introduce any other icon library.

| Icon | Usage | Color |
|---|---|---|
| `Star` | Bumped song indicator | `text-kento-orange` |
| `Shuffle` | Raffle winner indicator | `text-kento-light-blue` |
| `Ticket` | Queue entrant indicator | `text-slate-400` |
| `Play` | Now Playing placeholder | `text-white` |
| `Menu` / `X` | Mobile nav toggle | `text-white` |
| `ChevronDown` | Dropdown indicators | `text-slate-400` |

Icon sizing: `size={16}` for inline/table icons, `size={20}` for standalone actions, `size={24}` for prominent UI icons.

---

## 8. Animations & Transitions

### 8.1 Standard Transitions

All interactive elements must include a transition. Use `transition-colors duration-200` as the default.

| Transition Class | Usage |
|---|---|
| `transition-colors duration-200` | Buttons, nav links, tab switches |
| `transition-opacity duration-200` | Logo/image hover states |
| `transition-all duration-200` | Mobile menu open/close |

### 8.2 Custom Animations

The following custom animation is used in the Song List page but is **not yet defined**. It must be added to `globals.css`:

```css
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@theme inline {
  --animate-spin-slow: spin-slow 8s linear infinite;
}
```

This will enable the `animate-spin-slow` Tailwind class used on the spinning album art in `songlist/page.tsx`.

---

## 9. Border Radius

Standardize on two values:

| Value | Class | Usage |
|---|---|---|
| Medium | `rounded-lg` | Cards, buttons, dropdowns, table containers |
| Large | `rounded-xl` | Stat cards, prominent feature cards |
| Full | `rounded-full` | Avatar images, pill badges |

---

## 10. Known Issues & Migration Checklist

The following items represent the gap between the current state and this design system. Each should be addressed in a dedicated implementation pass.

### Critical (Breaks Functionality / Renders Incorrectly)
- [ ] **Fix font rendering**: Remove `font-family: Arial, Helvetica, sans-serif` from `globals.css` body rule
- [ ] **Add Maven Pro font**: Replace `Geist` with `Maven_Pro` in `layout.tsx` and update `@theme inline` in `globals.css`
- [ ] **Define `animate-spin-slow`**: Add the `@keyframes spin-slow` and `@theme inline` entry to `globals.css`

### High Priority (Brand Consistency)
- [ ] **Add `--kento-card-dark` token**: Define `#1a1a24` as a CSS variable in `globals.css`
- [ ] **Add `--kento-card-active` token**: Define `#1a237e` as a CSS variable in `globals.css`
- [ ] **Replace `bg-[#1a1a24]`**: Update `QueueStatCard.tsx`, `MiniQueueStatCard.tsx`, and `songlist/page.tsx`
- [ ] **Replace `bg-[#1a237e]`**: Update active tab in `CommandTabs.tsx`
- [ ] **Replace `bg-purple-600`**: Update Twitch/schedule button in `page.tsx` to `bg-kento-purple`
- [ ] **Replace `text-green-500` and `text-yellow-400`** in `SongQueueEntry.tsx` with `text-kento-green` and `text-kento-orange`
- [ ] **Replace `from-purple-900 to-black`** in `songlist/page.tsx` with `from-kento-purple to-kento-dark-blue`

### Medium Priority (Spacing & Layout)
- [ ] **Standardize page container width**: Change all non-nav containers to `max-w-7xl`
- [ ] **Standardize card padding**: `QueueStatCard` → `p-6`, `MiniQueueStatCard` → `p-4`
- [ ] **Standardize table cell padding**: Change `px-2` to `px-4` in `CommandTabs.tsx`

### Low Priority (Polish)
- [ ] **Standardize heading weights**: All H1 tags use `font-bold` (fix About page `font-normal`)
- [ ] **Implement `QueueLegend`**: The component exists but returns `null`
- [ ] **Add `focus:ring` styles** to all interactive elements for keyboard accessibility
- [ ] **Review `Layout.tsx`**: This wrapper component is redundant with the root layout — consider removing it

---

## 11. File Structure Reference

```
src/
├── app/
│   ├── globals.css          ← Design tokens (CSS variables + @theme inline)
│   ├── layout.tsx           ← Font import, root HTML structure
│   ├── page.tsx             ← Home page
│   ├── about/page.tsx       ← About page
│   ├── commands/page.tsx    ← Commands page
│   └── songlist/page.tsx    ← Song list / queue page
└── components/
    ├── Navigation.tsx        ← Navbar
    ├── Layout.tsx            ← Redundant wrapper (see §10)
    ├── CommandTabs.tsx       ← Command category tabs + tables
    ├── QueueStatCard.tsx     ← Large stat card
    ├── MiniQueueStatCard.tsx ← Small stat card
    ├── SongQueueEntry.tsx    ← Song queue list item
    └── QueueLegend.tsx       ← Legend (not yet implemented)
```

---

*Design System Version 1.0 — April 2026*
