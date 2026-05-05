# Three fixes

## 1. Responsive AnimatedLogo (no mobile overflow)

File: `src/components/site/AnimatedLogo.tsx`

- Add `max-width: 100vw; overflow: hidden;` to `.logo-stage` and reduce `min-height` on small screens (use `min-height: clamp(420px, 70vh, 600px)`).
- Shrink type ramps so they fit a 320px viewport:
  - `.text-left` font-size → `clamp(26px, 9vw, 70px)`
  - `.text-right .ai` and `.text-right .studio` font-size → `clamp(36px, 12vw, 100px)`
  - `.text-left-mask` / `.text-right-mask` height → `clamp(60px, 14vw, 140px)`, and reduce `padding-left/right` from 30px → `clamp(10px, 3vw, 30px)` so "Shaked" + "AI Studio" gap is tight on mobile.
  - `.divider` height → `clamp(50px, 12vw, 130px)`, width 6px on mobile via `clamp(5px, 1.2vw, 8px)`.
- Keep masks at `width: 50vw` (already centered around the divider) — divider stays centered. Add `max-width: 50vw` explicitly and ensure parent `.logo-stage` clips overflow so any sub-pixel rounding can't push the page horizontally.
- Verify wrapper in `HeroLiving.tsx` (`min-h-[600px]`) — drop to `min-h-[440px] md:min-h-[600px]` to match.

## 2. & 3. Styled contact links in FinalCTA

File: `src/components/site/FinalCTA.tsx`

Replace the bottom contact row (the two `<a>` tags showing the phone and email) with:

```tsx
<a
  href="https://wa.me/972528360660"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-foreground/80 hover:text-[#0066ff] transition-colors"
>
  <MessageCircle className="h-4 w-4" />
  WhatsApp
</a>
<a
  href="mailto:Shakedhajbi89@gmail.com?subject=פנייה דרך האתר"
  className="inline-flex items-center gap-2 text-foreground/80 hover:text-[#0066ff] transition-colors"
>
  <Mail className="h-4 w-4" />
  Shaked AI Studio
</a>
```

Icon color shifts with text on hover (remove the hard-coded `text-[#0066ff]` on the icon). Removes the raw phone/email strings entirely; `dir="ltr"` no longer needed since labels are Latin words.

## Out of scope
No other components touched. No changes to NavLiving logo (already black per earlier request).
