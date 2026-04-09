# Accessibility Issues

WCAG AA targets: **4.5:1** normal text · **3:1** large/bold text and icons

---

## Critical — Color Contrast Failures

### 1. `text-text-secondary` (#64748b) on `bg-background` (#cccccc) — 2.7:1 ❌
Fails AA for normal text. Affects:
- "Requested by" text in `SongQueueEntry` (non-hover state)
- Duration text in `SongQueueEntry` (non-hover state)
- Row text in `SongHistory` (inherits from parent `text-text-secondary`)

**Fix:** Darken `--text-secondary` token, or use a darker token (`text-slate-700` / `#374151` = 5.4:1) on grey backgrounds specifically.

---

### 2. `text-kento-purple` (#523877) on `bg-surface-primary` (#0e1336) — 2.1:1 ❌
Username highlight in `CurrentSong` — content text, not decorative.

**Fix:** Lighten purple for text use, e.g. a `--kento-purple-light` token like `#9b7bc4` (7.2:1 on dark blue).

---

### 3. `text-kento-green` (#5c9240) on `bg-background` (#cccccc) — 2.2:1 ❌
Bumped star icon in `SongQueueEntry` used without an adjacent visible label.

**Fix:** Add a visible "Bumped" text label next to the icon on grey rows, or darken to `#3d6128` (4.6:1).

---

## Moderate — Contrast Near-Misses

### 4. Rank number `text-slate-600` (#475569) on `bg-background` (#cccccc) — 4.2:1 ❌
Just under the 4.5:1 threshold. Located in `SongQueueEntry` bumped row rank span.

**Fix:** Change to `text-slate-700` (#374151) → 5.4:1 ✓

---

### 5. `text-text-muted` (#64748b) on `bg-kento-dark-blue` (#0e1336) — 4.1:1 ❌
Legend footer labels ("Bumped", "Shuffle Winner", "Shuffle Entrant") in `SongQueue`. Small-caps + uppercase text still requires 4.5:1 unless it's bold AND ≥18.67px.

**Fix:** Darken to `text-slate-400` (#94a3b8) → 6.8:1 ✓, or use `text-text-tertiary`.

---

### 6. White (#ffffff) on hover `bg-kento-light-blue` (#4376bb) — 4.3:1 ❌  
All queue entry text on hover, just below AA. Affects song titles and secondary text during hover.

**Fix:** Darken `--kento-light-blue` to ~`#3a67a8` → brings white text to 4.8:1 ✓

---

## Hover-State Icon Contrast

### 7. `text-kento-green` (#5c9240) on hover `bg-kento-light-blue` (#4376bb) — 1.2:1 ❌
Bumped star icon becomes nearly invisible on queue row hover.

**Fix:** Override icon color on hover, e.g. `group-hover:text-white` on the icon.

---

### 8. `text-kento-orange` (#f57e20) on hover `bg-kento-light-blue` (#4376bb) — 1.7:1 ❌
Shuffle winner icon disappears on queue row hover.

**Fix:** Same as #7 — `group-hover:text-white` on the icon.

---

## Non-Contrast Issues

### 9. Modal close button missing `aria-label`
In `Modal.tsx`, the X button contains only a Lucide `<X>` icon with no text alternative.

```tsx
// Current
<button onClick={onClose}>
  <X size={20} />
</button>

// Fix
<button onClick={onClose} aria-label='Close dialog'>
  <X size={20} />
</button>
```

---

### 10. External links do not announce new-tab behavior
`target='_blank'` links in `SongQueueEntry` and `SongHistory` open YouTube in a new tab, but screen readers receive no warning. Security attributes (`rel='noopener noreferrer'`) are correct.

```tsx
// Fix — add visually hidden text or aria-label
<a
  href={`https://youtu.be/${song.id}`}
  target='_blank'
  rel='noopener noreferrer'
  aria-label={`${song.title} (opens in new tab)`}
>
```

---

### 11. No visible focus ring on song title links
Keyboard users tabbing through queue entries and history rows have no visible focus indicator unless the browser default ring is intact. Tailwind's `preflight` does not remove focus rings by default, but any global `outline: none` reset would break this.

**Fix:** Add explicit focus styles:
```tsx
className='... focus-visible:outline focus-visible:outline-2 focus-visible:outline-kento-light-blue focus-visible:rounded'
```

---

## Status

| # | Issue | Location | Status |
|---|-------|----------|--------|
| 1 | Secondary text on grey bg (2.7:1) | `SongQueueEntry`, `SongHistory` | Open |
| 2 | Purple username on dark bg (2.1:1) | `CurrentSong` | Open |
| 3 | Green icon on grey bg (2.2:1) | `SongQueueEntry` (bumped) | Open |
| 4 | Rank number near-miss (4.2:1) | `SongQueueEntry` (bumped) | Open |
| 5 | Legend labels on dark bg (4.1:1) | `SongQueue` footer | Open |
| 6 | White on hover blue (4.3:1) | `SongQueueEntry` hover | Open |
| 7 | Green icon on hover blue (1.2:1) | `SongQueueEntry` hover | Open |
| 8 | Orange icon on hover blue (1.7:1) | `SongQueueEntry` hover | Open |
| 9 | Modal close button no aria-label | `Modal.tsx` | Open |
| 10 | External links no new-tab announcement | `SongQueueEntry`, `SongHistory` | Open |
| 11 | No visible focus ring on links | `SongQueueEntry`, `SongHistory` | Open |
