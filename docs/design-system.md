# Portfolio Design System

A comprehensive, reusable design system built with **Instrument Sans** typography and a **purple/pink gradient** theme.

---

## 🎨 Color Palette

### Brand Colors

#### Purple Shades

- `brand-purple-400`: `#A78BFA` - Light purple (primary gradient start)
- `brand-purple-500`: `#8B5CF6` - Medium purple
- `brand-purple-600`: `#7C3AED` - Dark purple
- `brand-purple-700`: `#6D28D9` - Darker purple

#### Pink Shades

- `brand-pink-400`: `#F472B6` - Light pink (primary gradient end)
- `brand-pink-500`: `#EC4899` - Medium pink
- `brand-pink-600`: `#DB2777` - Dark pink
- `brand-pink-700`: `#BE185D` - Darker pink

### Usage in Tailwind

```tsx
<div className="bg-brand-purple-500">Purple background</div>
<div className="text-brand-pink-400">Pink text</div>
```

---

## 📝 Typography

### Font Families

- **Sans**: Instrument Sans (headings, body text)
- **Mono**: Geist Mono (code, technical content)

### Typography Utility Classes

#### Headings

```tsx
<h1 className="heading-xl">Extra Large Heading</h1>
<h2 className="heading-lg">Large Heading</h2>
<h3 className="heading-md">Medium Heading</h3>
<h4 className="heading-sm">Small Heading</h4>
```

#### Body Text

```tsx
<p className="body-lg">Large body text</p>
<p className="body-base">Base body text</p>
<p className="body-sm">Small body text</p>
```

#### Labels

```tsx
<span className="label-lg">LARGE LABEL</span>
<span className="label-base">BASE LABEL</span>
```

---

## 🌈 Gradient Text

### Utility Classes

```tsx
<span className="gradient-text">Gradient Text</span>
<span className="gradient-text-secondary">Secondary Gradient</span>
<span className="gradient-text-accent">Accent Gradient</span>
```

### GradientText Component

```tsx
import { GradientText } from "@/components/ui";

<GradientText as="h1" variant="primary">
  Beautiful Gradient Heading
</GradientText>;
```

**Props:**

- `as`: HTML tag (`h1`, `h2`, `p`, `span`, etc.)
- `variant`: `'primary'` | `'secondary'` | `'accent'`
- `className`: Additional CSS classes

---

## 🔘 Button Component

### Variants

```tsx
import { Button } from '@/components/ui';

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="gradient">Gradient Button</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Example

```tsx
<Button variant="gradient" size="lg" onClick={handleClick}>
  Get Started →
</Button>
```

---

## 📦 Section Component

Consistent page section wrapper with automatic padding and max-width.

```tsx
import { Section } from "@/components/ui";

<Section background="dark">
  <h2>Section Title</h2>
  <p>Section content...</p>
</Section>;
```

**Props:**

- `background`: `'transparent'` | `'dark'` | `'gradient'`
- `fullWidth`: `boolean` (removes max-width constraint)
- `className`: Additional CSS classes
- `containerClassName`: Classes for inner container

---

## ✨ Glassmorphism

### Utility Classes

```tsx
<div className="glass">Subtle glass effect</div>
<div className="glass-strong">Strong glass effect</div>
```

### Manual Usage

```tsx
<div className="bg-white/10 backdrop-blur-sm border border-white/20">
  Custom glass effect
</div>
```

---

## 🎬 Animations

### Utility Classes

```tsx
<div className="animate-fade-in">Fades in</div>
<div className="animate-slide-up">Slides up</div>
```

---

## 📐 Spacing Scale

Based on 4px increments:

- `1` = 4px
- `2` = 8px
- `4` = 16px
- `6` = 24px
- `8` = 32px
- `12` = 48px
- `16` = 64px

---

## 🎯 Best Practices

### 1. Use Design Tokens

Always use design system colors and utilities instead of arbitrary values:

```tsx
// ✅ Good
<div className="bg-brand-purple-500 text-white">

// ❌ Bad
<div className="bg-[#8B5CF6] text-[#FFFFFF]">
```

### 2. Use Typography Classes

```tsx
// ✅ Good
<h1 className="heading-xl">Title</h1>

// ❌ Bad
<h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold">Title</h1>
```

### 3. Use Components

```tsx
// ✅ Good
<Button variant="primary">Click Me</Button>

// ❌ Bad
<button className="px-6 py-3 bg-white text-black rounded-lg...">Click Me</button>
```

### 4. Consistent Spacing

Use the spacing scale for margins and padding:

```tsx
<div className="mb-8 px-4">Content</div>
```

---

## 📚 Quick Reference

### Import Components

```tsx
import { Button, GradientText, Section } from "@/components/ui";
```

### Import Tokens (if needed)

```tsx
import { colors, typography, spacing } from "@/styles/tokens";
```

### Common Patterns

```tsx
// Hero section
<Section background="transparent" className="min-h-screen flex items-center">
  <h1 className="heading-xl">
    Title <GradientText>Gradient Part</GradientText>
  </h1>
  <p className="body-lg text-white/80">Subtitle</p>
  <Button variant="gradient" size="lg">CTA</Button>
</Section>

// Content section
<Section background="dark">
  <h2 className="heading-lg mb-6">Section Title</h2>
  <p className="body-base">Content...</p>
</Section>
```

---

## 🔧 Extending the System

### Adding New Colors

Edit `/src/app/globals.css`:

```css
@theme inline {
  --color-brand-blue-500: #3b82f6;
}
```

### Adding New Utilities

Add to the `@layer utilities` block in `globals.css`:

```css
.custom-utility {
  @apply bg-brand-purple-500 text-white;
}
```

---

**Built with ❤️ using Next.js, Tailwind CSS, and TypeScript**
