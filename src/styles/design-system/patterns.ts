/**
 * Design System Utility Classes and Patterns
 *
 * Common utility classes and patterns that can be reused across components.
 * These are abstractions of frequently used Tailwind class combinations.
 */

// Common layout patterns
export const layoutPatterns = {
  // Page layout patterns
  pageContainer: 'min-h-screen flex flex-col',
  mainContent: 'flex-1',
  contentWrapper: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',

  // Section patterns
  heroSection:
    'py-24 bg-gradient-to-br from-kento-dark-blue via-kento-purple to-kento-light-blue',
  contentSection: 'py-16',

  // Card patterns
  darkCard: 'bg-surface-primary rounded-xl border border-border-primary',
  lightCard: 'bg-surface-secondary rounded-xl border border-border-light',
  elevatedCard:
    'bg-surface-primary rounded-xl border border-border-primary shadow-dark-md',

  // Interactive patterns
  hoverCard: 'transition-colors hover:border-border-secondary',
  clickableCard:
    'transition-colors hover:border-border-secondary cursor-pointer',

  // Grid patterns
  statGrid: 'grid grid-cols-1 md:grid-cols-5 gap-4',
  contentGrid: 'grid grid-cols-1 lg:grid-cols-3 gap-6',
  featureGrid: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8',

  // Navigation patterns
  navItem:
    'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
  activeNavItem: 'bg-kento-purple text-kento-orange',
  inactiveNavItem:
    'text-text-secondary hover:bg-kento-purple hover:text-kento-orange'
} as const;

// Common component patterns
export const componentPatterns = {
  // Album art patterns
  albumArt: 'w-24 h-24 border-4 border-border-primary rounded-lg',
  albumArtSmall: 'w-12 h-12 border-2 border-border-primary rounded-md',
  albumArtLarge: 'w-32 h-32 border-4 border-border-primary rounded-xl',

  // Icon patterns
  iconSmall: 'w-4 h-4',
  iconMedium: 'w-6 h-6',
  iconLarge: 'w-8 h-8',

  // Loading patterns
  loadingSkeleton: 'animate-pulse bg-border-primary rounded',
  loadingSpinner: 'animate-spin w-4 h-4',
  loadingSpinnerLarge: 'animate-spin w-8 h-8',

  // Status patterns
  statusOpen: 'text-success',
  statusClosed: 'text-error',
  statusShuffle: 'text-warning',
  statusEntrant: 'text-kento-purple',

  // Typography patterns
  gradientText:
    'bg-gradient-to-r from-kento-light-blue via-kento-purple to-kento-orange bg-clip-text text-transparent',
  headingXLarge: 'text-4xl md:text-6xl font-bold',
  headingLarge: 'text-3xl md:text-4xl font-bold',
  headingMedium: 'text-2xl md:text-3xl font-bold',
  labelText:
    'text-xs uppercase font-semibold text-text-secondary tracking-wider'
} as const;

// Animation and transition patterns
export const animationPatterns = {
  // Transition patterns
  quickTransition: 'transition-all duration-200',
  smoothTransition: 'transition-all duration-300',
  slowTransition: 'transition-all duration-500',

  // Hover patterns
  scaleOnHover: 'transform hover:scale-105 transition-transform duration-200',
  fadeOnHover: 'hover:opacity-75 transition-opacity duration-200',
  liftOnHover: 'hover:shadow-dark-lg transition-shadow duration-200',

  // Focus patterns
  focusRing:
    'focus:outline-none focus:ring-2 focus:ring-kento-light-blue/50 focus:ring-offset-2',
  focusVisible:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kento-light-blue/50'
} as const;

// Spacing patterns
export const spacingPatterns = {
  // Common spacing combinations
  cardPadding: 'p-6',
  cardPaddingSmall: 'p-4',
  cardPaddingLarge: 'p-8',

  sectionSpacing: 'mb-8',
  itemSpacing: 'mb-4',
  tightSpacing: 'mb-2',

  // Gap patterns
  gridGapSmall: 'gap-2',
  gridGapMedium: 'gap-4',
  gridGapLarge: 'gap-6',
  gridGapXLarge: 'gap-8'
} as const;

// Responsive patterns
export const responsivePatterns = {
  // Hide/show patterns
  mobileOnly: 'block md:hidden',
  desktopOnly: 'hidden md:block',
  tabletAndUp: 'hidden md:block',
  mobileAndTablet: 'block lg:hidden',

  // Text size responsive
  responsiveTextLarge: 'text-2xl md:text-4xl',
  responsiveTextMedium: 'text-lg md:text-2xl',
  responsiveTextSmall: 'text-base md:text-lg',

  // Padding responsive
  responsivePadding: 'px-4 sm:px-6 lg:px-8',
  responsivePaddingY: 'py-8 md:py-12 lg:py-16'
} as const;

// Export all patterns grouped
export const designPatterns = {
  layout: layoutPatterns,
  component: componentPatterns,
  animation: animationPatterns,
  spacing: spacingPatterns,
  responsive: responsivePatterns
} as const;

// Type for accessing patterns
export type LayoutPattern = keyof typeof layoutPatterns;
export type ComponentPattern = keyof typeof componentPatterns;
export type AnimationPattern = keyof typeof animationPatterns;
export type SpacingPattern = keyof typeof spacingPatterns;
export type ResponsivePattern = keyof typeof responsivePatterns;
