## Plan: Tailwind CSS Migration for Kentobeans Live

Focused migration from Bootstrap 5 + CSS modules to Tailwind CSS using hybrid approach (utilities + @apply patterns) with component variants for reusable styling patterns.

**Steps**

**Phase 1: Tailwind Setup & Design System**
1. Install and configure Tailwind CSS with custom color palette matching existing brand colors
2. Create design tokens in `tailwind.config.js` (colors, spacing, typography, shadows)
3. Set up utility classes and @apply patterns for complex components in `globals.css`
4. Create component variant patterns using clsx/cn for conditional styling

**Phase 2: Core Layout & Navigation Migration**
5. Convert Bootstrap navbar to Tailwind navigation with mobile responsive menu
6. Replace Bootstrap grid system (Container/Row/Col) with Tailwind grid/flexbox patterns
7. Convert Layout component with Tailwind wrapper classes and responsive behavior
8. Update responsive breakpoints from Bootstrap to Tailwind conventions

**Phase 3: Data Table Components** (*parallel with step 7*)
9. Convert SongRequestTable from react-bootstrap Table to Tailwind styled table
10. Rebuild SongHistoryTable with Tailwind styling, filters, and responsive design
11. Create CommandTable with Tailwind two-column layout and responsive stacking
12. Build reusable table component patterns with @apply for consistent styling

**Phase 4: Interactive Components**
13. Convert RequestRulesModal from react-bootstrap Modal to Tailwind modal with backdrop/overlay
14. Rebuild LoadingSpinner with Tailwind animations and variants
15. Convert form components (DataTableFilter) from styled-components to Tailwind patterns
16. Create button variants and interactive states using Tailwind utilities

**Phase 5: Page-Specific Styling**
17. Convert all CSS modules (`.module.css`) to Tailwind utility classes or @apply patterns
18. Update responsive design for mobile-first approach with Tailwind breakpoints
19. Convert custom CSS animations and effects to Tailwind/CSS custom properties
20. Test and refine component styling for consistency and maintainability

**Relevant files**  
- `tailwind.config.js` — custom theme with Kentobeans brand colors (#0E1336, #4376BB, #523877, #F57E20, #5C9240)
- `src/app/globals.css` — @apply patterns for complex components, custom utilities
- `components/Navigation.tsx` — Bootstrap navbar → Tailwind responsive nav with mobile menu
- `components/ui/` — reusable Tailwind component library (Button, Modal, Table variants)
- `styles/commands.module.css` — convert to Tailwind utilities or @apply patterns
- `styles/songlist.module.css` — migrate table styling to Tailwind data table patterns  
- `styles/song-of-the-night/sotn.module.css` — convert SOTN page layouts to Tailwind grid/flex

**Verification**
1. Test responsive design matches original Bootstrap breakpoints and behavior
2. Verify all interactive states (hover, focus, active) work correctly with Tailwind
3. Check data table sorting, filtering, and responsive behavior with new Tailwind styling
4. Validate custom color palette displays correctly across all components
5. Test mobile navigation menu functionality and animations
6. Ensure bundle size reduction from removing Bootstrap (~200KB savings)

**Key Tailwind Patterns to Implement**

*Design Tokens Setup:*
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      kento: {
        'dark-blue': '#0E1336',
        'light-blue': '#4376BB', 
        'purple': '#523877',
        'orange': '#F57E20',
        'green': '#5C9240'
      }
    }
  }
}
```

*Component Variants with clsx:*
```tsx
const buttonVariants = cva(
  "px-4 py-2 rounded font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-kento-light-blue hover:bg-kento-dark-blue text-white",
        secondary: "bg-kento-purple hover:bg-opacity-80 text-white"
      }
    }
  }
)
```

*@apply Patterns for Complex Components:*
```css
.data-table {
  @apply w-full border-collapse;
  @apply bg-white dark:bg-kento-dark-blue;
}
.data-table th {
  @apply px-4 py-3 text-left font-semibold;
  @apply bg-kento-light-blue text-white;
}
```

**Decisions**
- **Styling strategy**: Hybrid approach using utilities for simple styling, @apply for complex reusable patterns
- **Component patterns**: Create both utility-based variants (clsx) and @apply component classes
- **Responsive approach**: Mobile-first with Tailwind breakpoints (sm:, md:, lg:, xl:)
- **Color system**: Custom Kentobeans theme extending Tailwind's color palette
- **Bundle optimization**: Remove Bootstrap entirely, use Tailwind's JIT for optimal bundle size
