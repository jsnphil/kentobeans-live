/**
 * Design System Index
 *
 * Central export for all design system components, tokens, and patterns.
 * Import from this file to access all design system utilities.
 */

// Export design tokens
export { designTokens, type DesignTokens } from './tokens';

// Export patterns
export {
  designPatterns,
  layoutPatterns,
  componentPatterns,
  animationPatterns,
  spacingPatterns,
  responsivePatterns,
  type LayoutPattern,
  type ComponentPattern,
  type AnimationPattern,
  type SpacingPattern,
  type ResponsivePattern
} from './patterns';

// Re-export all UI components
export * from '../../components/ui';

// Design system utilities
export { cn } from '../../utils/utils';
