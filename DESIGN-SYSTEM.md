# Kentobeans Live Design System

A comprehensive, reusable design system built with Tailwind CSS v4 for consistent styling across the Kentobeans Live application. This design system provides standardized tokens, components, and patterns to replace scattered Tailwind classes with maintainable, reusable components.

## 📁 Structure

```
src/
├── styles/design-system/
│   ├── index.ts          # Main export file
│   ├── tokens.ts         # Design tokens (colors, spacing, typography)
│   └── patterns.ts       # Common utility patterns
├── components/ui/
│   ├── index.ts          # UI components export
│   ├── Card.tsx          # Card component variants
│   ├── Button.tsx        # Button component variants
│   ├── Badge.tsx         # Badge and status components
│   ├── Typography.tsx    # Text, heading, and label components
│   └── Layout.tsx        # Grid, flex, and layout components
└── app/globals.css       # Updated with design tokens and utility classes
```

## 🎨 Design Tokens

### Brand Colors
- **Kento Dark Blue**: `kento-dark-blue` (`#0e1336`)
- **Kento Light Blue**: `kento-light-blue` (`#4376bb`)
- **Kento Purple**: `kento-purple` (`#523877`)
- **Kento Orange**: `kento-orange` (`#f57e20`)
- **Kento Green**: `kento-green` (`#5c9240`)

### Semantic Colors
- **Success**: `success` (maps to kento-green)
- **Warning**: `warning` (maps to kento-orange)
- **Error**: `error` (`#ef4444`)
- **Info**: `info` (maps to kento-light-blue)

### Surface Colors
- **Primary**: `surface-primary` (`#1a1a24`) - Main dark background
- **Secondary**: `surface-secondary` (`#ffffff`) - Light background
- **Tertiary**: `surface-tertiary` (`#f8fafc`) - Alternative light
- **Quaternary**: `surface-quaternary` (`#f1f5f9`) - Subtle light

### Text Colors
- **Primary**: `text-primary` (`#ffffff`)
- **Secondary**: `text-secondary` (`#64748b`)
- **Muted**: `text-muted` (`#64748b`)
- **Inverse**: `text-inverse` (kento-dark-blue)

### Border Colors
- **Primary**: `border-primary` (`#334155`)
- **Secondary**: `border-secondary` (`#64748b`)
- **Light**: `border-light` (`#e2e8f0`)

## 🧩 Components

### Card Component

The most commonly used component, providing consistent styling for containers.

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

// Basic usage
<Card variant="dark" size="md">
  <CardTitle level="h3">Title</CardTitle>
  <CardContent>Content here</CardContent>
</Card>

// Variants
<Card variant="default" />     // Default dark theme
<Card variant="dark" />        // Same as default
<Card variant="light" />       // Light theme
<Card variant="elevated" />    // With shadow

// Sizes
<Card size="sm" />   // 12px padding
<Card size="md" />   // 20px padding (default)
<Card size="lg" />   // 24px padding
```

### Button Component

Standardized button styling with multiple variants and states.

```tsx
import { Button, IconButton } from '@/components/ui';

// Variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="tertiary">Tertiary Action</Button>
<Button variant="ghost">Ghost Action</Button>
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>

// Icon-only buttons
<IconButton size="md" variant="ghost">
  <PlayIcon />
</IconButton>
```

### Badge Component

For displaying status, counts, and labels.

```tsx
import { Badge, StatusBadge, CountBadge } from '@/components/ui';

// Basic badges
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>

// Status badges (for queue status)
<StatusBadge status="open" />     // Green with icon
<StatusBadge status="closed" />   // Red with icon
<StatusBadge status="shuffle" />  // Yellow with icon
<StatusBadge status="entrant" />  // Purple with icon

// Count badges
<CountBadge count={5} variant="success" />
<CountBadge count={0} showZero />      // Optional zero display
```

### Typography Components

Consistent text styling across the application.

```tsx
import { Heading, Text, Label, Code } from '@/components/ui';

// Headings with automatic sizing
<Heading level={1}>Main Title</Heading>
<Heading level={2} variant="gradient">Gradient Title</Heading>
<Heading level={3} variant="accent">Accent Title</Heading>

// Text with semantic meaning
<Text size="lg" weight="bold" color="primary">Important text</Text>
<Text size="sm" color="muted">Muted description</Text>

// Labels for form fields and stats
<Label>Now Playing</Label>
<Label uppercase={false}>Custom label</Label>

// Code and monospace text
<Code inline>inline code</Code>
<Code inline={false}>
  Block code
  with multiple lines
</Code>
```

### Layout Components

Flexible layout utilities for organizing content.

```tsx
import { Grid, Stack, Flex, Container, Section } from '@/components/ui';

// Grid layouts
<Grid cols={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>

// Responsive grids
<Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
  <QueueStatCard />
  <QueueStatCard />
  <QueueStatCard />
</Grid>

// Vertical stacking
<Stack spacing="lg" align="center">
  <Heading level={2}>Title</Heading>
  <Text>Description</Text>
  <Button>Action</Button>
</Stack>

// Flexible layouts
<Flex justify="between" align="center" gap="md">
  <Text>Left content</Text>
  <Button>Right action</Button>
</Flex>

// Page containers
<Container size="xl" padding>
  <Section spacing="lg">
    Your content here
  </Section>
</Container>
```

## 🎛️ Utility Classes

Pre-defined utility classes for common patterns (defined in `globals.css`):

```css
/* Card patterns */
.card-dark       /* Dark themed card */
.card-light      /* Light themed card */ 
.card-elevated   /* Card with shadow */
.card-interactive /* Clickable card with hover */

/* Text patterns */
.gradient-text   /* Gradient text effect */

/* Background patterns */
.hero-gradient   /* Hero section gradient */

/* Navigation patterns */
.nav-item        /* Navigation item styling */
.nav-item-active /* Active navigation state */

/* Interactive patterns */
.focus-ring      /* Focus ring for accessibility */

/* Animation patterns */
.loading-skeleton /* Loading skeleton animation */
```

## 📐 Design Patterns

Import pre-defined pattern classes for consistent styling:

```tsx
import { designPatterns } from '@/styles/design-system';

// Layout patterns
className={designPatterns.layout.statGrid}      // 5-column stat grid
className={designPatterns.layout.contentGrid}   // 3-column content grid
className={designPatterns.layout.darkCard}      // Dark card styling

// Component patterns
className={designPatterns.component.albumArt}   // Standard album art
className={designPatterns.component.gradientText} // Gradient text

// Animation patterns
className={designPatterns.animation.quickTransition} // 200ms transition
```

## 🔧 Migration Guide

### Before (Raw Tailwind)
```tsx
<div className="bg-[#1a1a24] p-5 rounded-xl border border-slate-800 text-center">
  <p className="text-xs text-slate-500 uppercase font-semibold">{title}</p>
  <p className="text-3xl font-black my-1 text-white">{value}</p>
  {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
</div>
```

### After (Design System)
```tsx
<Card variant="dark" size="md" className="text-center">
  <Label>{title}</Label>
  <Heading level={3} className="my-1 text-3xl font-black">
    {value}
  </Heading>
  {subtitle && <Text size="xs" color="muted">{subtitle}</Text>}
</Card>
```

## 🚀 Benefits

1. **Consistency**: Standardized styling across all components
2. **Maintainability**: Changes to design tokens update globally
3. **Developer Experience**: Type-safe components with IntelliSense
4. **Performance**: Reduced CSS bundle size through reuse
5. **Accessibility**: Built-in focus states and semantic HTML
6. **Responsive**: Mobile-first responsive design patterns
7. **Dark Mode**: Consistent dark theme throughout

## 📝 Usage Examples

### Complete Component Refactor Example

```tsx
// Before
export function QueueStatCard({ title, value, subtitle, color = 'text-white' }) {
  return (
    <div className='bg-[#1a1a24] p-5 rounded-xl border border-slate-800 text-center'>
      <p className='text-xs text-slate-500 uppercase font-semibold'>{title}</p>
      <p className={`text-3xl font-black my-1 ${color}`}>{value}</p>
      {subtitle && <p className='text-xs text-slate-500'>{subtitle}</p>}
    </div>
  );
}

// After
import { Card, Label, Heading, Text } from '@/components/ui';

export function QueueStatCard({ title, value, subtitle, color = 'text-white' }) {
  return (
    <Card variant="dark" size="md" className="text-center">
      <Label>{title}</Label>
      <Heading level={3} className={`my-1 text-3xl font-black ${color}`}>
        {value}
      </Heading>
      {subtitle && <Text size="xs" color="muted">{subtitle}</Text>}
    </Card>
  );
}
```

## 🎯 Next Steps

1. **Continue Refactoring**: Apply design system to remaining components
2. **Add Components**: Create additional components as needed (Modal, Dropdown, etc.)
3. **Extend Tokens**: Add more design tokens (animations, shadows, etc.) as requirements grow
4. **Documentation**: Add Storybook or similar for component documentation
5. **Testing**: Add visual regression testing for design system components

## 📚 Import Reference

```tsx
// Main design system import
import { Card, Button, Badge, Heading, Text, Grid } from '@/styles/design-system';

// Individual component imports
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Pattern imports
import { designPatterns } from '@/styles/design-system/patterns';

// Utility imports
import { cn } from '@/utils/utils';
```

This design system provides a solid foundation for consistent, maintainable styling throughout your application. The components are built to be composable, accessible, and aligned with your existing brand identity.