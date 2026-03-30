/**
 * Design System Tokens
 *
 * Centralized design tokens for consistent styling across the application.
 * These tokens are used in Tailwind configuration and components.
 */

export const designTokens = {
  // Color System
  colors: {
    // Brand Colors
    brand: {
      'dark-blue': '#0e1336',
      'light-blue': '#4376bb',
      purple: '#523877',
      orange: '#f57e20',
      green: '#5c9240'
    },
    // Semantic Colors
    semantic: {
      success: '#5c9240',
      warning: '#f57e20',
      error: '#ef4444',
      info: '#4376bb'
    },
    // Surface Colors
    surface: {
      primary: '#1a1a24',
      secondary: '#ffffff',
      tertiary: '#f8fafc',
      quaternary: '#f1f5f9'
    },
    // Border Colors
    border: {
      primary: '#334155', // slate-800
      secondary: '#64748b', // slate-500
      light: '#e2e8f0' // slate-200
    },
    // Text Colors
    text: {
      primary: '#ffffff',
      secondary: '#64748b',
      tertiary: '#94a3b8',
      inverse: '#0e1336',
      muted: '#64748b'
    }
  },

  // Spacing Scale (8px base grid)
  spacing: {
    0: '0px',
    0.5: '2px',
    1: '4px',
    1.5: '6px',
    2: '8px',
    2.5: '10px',
    3: '12px',
    3.5: '14px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    28: '112px',
    32: '128px',
    36: '144px',
    40: '160px',
    44: '176px',
    48: '192px',
    52: '208px',
    56: '224px',
    60: '240px',
    64: '256px',
    72: '288px',
    80: '320px',
    96: '384px'
  },

  // Typography Scale
  typography: {
    fontFamily: {
      sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
      mono: ['var(--font-geist-mono)', 'monospace']
    },
    fontSize: {
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '4xl': ['36px', { lineHeight: '40px' }],
      '5xl': ['48px', { lineHeight: '1' }],
      '6xl': ['60px', { lineHeight: '1' }],
      '7xl': ['72px', { lineHeight: '1' }],
      '8xl': ['96px', { lineHeight: '1' }],
      '9xl': ['128px', { lineHeight: '1' }]
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },

  // Border Radius
  borderRadius: {
    none: '0px',
    sm: '2px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px'
  },

  // Box Shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000',
    // Custom shadows for dark theme
    'dark-sm': '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    'dark-md':
      '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
    'dark-lg':
      '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)'
  },

  // Transitions and Animations
  transitionDuration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms'
  },

  transitionTimingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
  },

  // Animation keyframes
  animation: {
    'spin-slow': 'spin 3s linear infinite',
    'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  },

  // Component Sizes
  componentSizes: {
    // Button sizes
    button: {
      sm: { padding: '6px 12px', fontSize: '14px', lineHeight: '20px' },
      md: { padding: '8px 16px', fontSize: '16px', lineHeight: '24px' },
      lg: { padding: '12px 24px', fontSize: '18px', lineHeight: '28px' },
      xl: { padding: '16px 32px', fontSize: '20px', lineHeight: '28px' }
    },
    // Icon sizes
    icon: {
      xs: '12px',
      sm: '16px',
      md: '20px',
      lg: '24px',
      xl: '32px',
      '2xl': '48px'
    },
    // Avatar/Image sizes
    avatar: {
      xs: '24px',
      sm: '32px',
      md: '48px',
      lg: '64px',
      xl: '96px',
      '2xl': '128px'
    }
  },

  // Breakpoints (for reference, handled by Tailwind)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
} as const;

export type DesignTokens = typeof designTokens;
