# Next.js Scalable Theming (Light, Dark & System Mode)

This repository contains the source code for the tutorial: "The Best Way to Handle Themes in Next.js". It demonstrates a implementation of a theme system that supports light, dark, and system preferences with zero layout shift and a single source of truth.

## Features

- **Single Source of Truth:** All colors are managed via CSS variables, no hardcoded hex codes in components.
- **System Mode Support:** Automatically detects and follows the user's OS preference.
- **TypeScript Powered:** Fully type-safe theme switching.

## Installation

1. **Clone the repo**

```bash
https://github.com/gjermundmyrvang/nextjs-theming.git
```

2. **Install dependencies**

```bash
npm install
```

2. **Run the development server**

```bash
npm run dev
```

## Key Concept: The CSS Variable Strategy

Instead of using Tailwind classes like dark:bg-slate-900, we map Tailwind to CSS variables defined in globals.css:

```css
/* globals.css */

:root {
  --background: #fafafa;
  --foreground: #0f172a;
  --card: #ffffff;
}

.dark {
  --background: #020617;
  --foreground: #f8fafc;
  --card: #0f172a;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
}
```

## Watch the Tutorial

Want to learn how to build this from scratch? Check out the full breakdown on YouTube: [YouTube Video](https://youtu.be/of9gelzj2dQ)
