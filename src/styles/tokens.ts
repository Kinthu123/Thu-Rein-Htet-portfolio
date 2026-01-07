/**
 * Design System Tokens
 * Centralized design tokens for typography, colors, spacing, and more
 */

export const colors = {
  // Brand Colors - Purple/Pink Gradient Theme
  brand: {
    purple: {
      50: '#F5F3FF',
      100: '#EDE9FE',
      200: '#DDD6FE',
      300: '#C4B5FD',
      400: '#A78BFA',
      500: '#8B5CF6',
      600: '#7C3AED',
      700: '#6D28D9',
      800: '#5B21B6',
      900: '#4C1D95',
    },
    pink: {
      50: '#FDF2F8',
      100: '#FCE7F3',
      200: '#FBCFE8',
      300: '#F9A8D4',
      400: '#F472B6',
      500: '#EC4899',
      600: '#DB2777',
      700: '#BE185D',
      800: '#9D174D',
      900: '#831843',
    },
  },

  // Gradient Definitions
  gradients: {
    primary: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)',
    secondary: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    accent: 'linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)',
  },

  // Neutral Colors
  neutral: {
    black: '#000000',
    'black-100': '#000319',
    white: '#FFFFFF',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },

  // Semantic Colors
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
} as const;

export const typography = {
  // Font Families
  fonts: {
    sans: 'var(--font-instrument-sans), system-ui, -apple-system, sans-serif',
    mono: 'var(--font-geist-mono), "Courier New", monospace',
  },

  // Font Sizes (mobile-first, then desktop)
  sizes: {
    xs: { mobile: '0.75rem', desktop: '0.75rem' },    // 12px
    sm: { mobile: '0.875rem', desktop: '0.875rem' },  // 14px
    base: { mobile: '1rem', desktop: '1rem' },        // 16px
    lg: { mobile: '1.125rem', desktop: '1.25rem' },   // 18px -> 20px
    xl: { mobile: '1.25rem', desktop: '1.5rem' },     // 20px -> 24px
    '2xl': { mobile: '1.5rem', desktop: '2rem' },     // 24px -> 32px
    '3xl': { mobile: '1.875rem', desktop: '2.5rem' }, // 30px -> 40px
    '4xl': { mobile: '2.25rem', desktop: '3rem' },    // 36px -> 48px
    '5xl': { mobile: '3rem', desktop: '4rem' },       // 48px -> 64px
    '6xl': { mobile: '3.75rem', desktop: '5rem' },    // 60px -> 80px
    '7xl': { mobile: '4.5rem', desktop: '6rem' },     // 72px -> 96px
    '8xl': { mobile: '6rem', desktop: '8rem' },       // 96px -> 128px
  },

  // Font Weights
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Line Heights
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.3em',
  },
} as const;

export const spacing = {
  // Base spacing scale (4px base)
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  glow: '0 0 20px rgba(167, 139, 250, 0.5)',
  'glow-pink': '0 0 20px rgba(244, 114, 182, 0.5)',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Export all tokens as a single object
export const tokens = {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  transitions,
  breakpoints,
} as const;

export default tokens;
