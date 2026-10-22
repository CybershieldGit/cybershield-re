# Design System & Theme Documentation: Neurex AI & SaaS Design System

Based on the official Neurex Style Guide: [https://neurex.webflow.io/reference/style-guide](https://neurex.webflow.io/reference/style-guide)

---

## 1. Design System Overview & Philosophy

The **Neurex Design System** is a cutting-edge, high-contrast, modern AI & SaaS visual framework. It combines:
1. **Ultra-Dark Obsidian & Midnight Blue Depths**: Deep, rich dark canvases (`#000416`, `#000917`, `#0e111f`) paired with stark crisp light canvases (`#f7f7f8`, `#ffffff`).
2. **Signature Cyber Cyan / Teal Primary Accent**: `#1CA3BB` (Primary 01), used for high-impact buttons, highlights, and conversion triggers.
3. **Multi-Stop Midnight-to-Ice Gradients (`Gradient 01` & `Gradient 02`)**: Sophisticated 14-stop gradient ramps traversing from deepest pitch-navy through royal cobalt to icy sky blues and crisp whites.
4. **Geist & Interdisplay Precision Typography**: Razor-sharp geometric letterforms with tight tracking (`-1.92px` on Hero display, `-0.32px` on sub-headings) and strict optical hierarchy.
5. **Interactive Rolling Hover Buttons (`btn-text-wrap`)**: Dual-layer animated text that scrolls vertically on hover with micro-scale feedback (`transform: scale(0.95)`).
6. **Curvature Language**: Smooth oversized card corners (24px, 30px, 32px, 36px, 40px) contrasting with 100px / 9999px fully pill-shaped buttons.

---

## 2. Color Palette System (Neurex Palette)

The system is calibrated around strong contrast, luminous midnight gradients, and high-visibility neon accents.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PRIMARY COLOR 01        PRIMARY COLOR 02       SECONDARY COLOR 01          │
│  #1CA3BB (Cyber Cyan)    #000416 (Deep Pitch)   #4a4d5a (Muted Slate)       │
├─────────────────────────────────────────────────────────────────────────────┤
│  BG COLOR                STROKE COLOR           WHITE ACCENTS               │
│  #f7f7f8 (Clean Grey)    #ebebeb (Subtle Line)  #ffffff / #e8e8e8           │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Official Color Tokens

| Token Name | Webflow Variable | Hex / Value | Description & Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Color 01** | `--_color---used--primary-color-1` | `#1CA3BB` | Signature CyberShield high-impact cyber cyan/teal accent for primary CTA buttons, highlight cards, active states. |
| **Primary Color 02** | `--_color---used--primary-color-2` | `#000416` | Pitch black / deepest midnight navy for primary typography on light backgrounds, dark buttons, dark card surfaces. |
| **Primary Color 03** | `--_color---used--primary-color-3` | `#0e111f` | Deep obsidian secondary background tone for cards, hero containers, and dark section insets. |
| **Secondary Color 01** | `--_color---used--secondary-color-1` | `#4a4d5a` | Slate grey for secondary body copy, paragraph text, social icons, subtitles. |
| **Secondary Color 02** | `--_color---rest--secondary-color-2` | `#797a7c` | Muted slate for captions, disabled states, subtle metadata. |
| **BG Color** | `--_color---used--bg-colour` | `#f7f7f8` | Neutral light canvas background for page sections, tab bars, light cards. |
| **Stroke / Border 01** | `--_color---used--border-color-1` | `#ebebeb` | Hairline border for light cards, button outlines, subtle separators. |
| **Stroke / Border 02** | `--_color---rest--border-color-2` | `#e9e9e9` | Secondary separator and divider line color. |
| **White** | `--_color---used--white` | `#ffffff` | Pure white for cards, elevated surfaces, button backgrounds, text on dark. |
| **White 200** | `--_color---used--white-200` | `#f7f7f8` | Off-white subtle card fills. |
| **White 300** | `--_color---used--white-300` | `#e8e8e8` | Slightly deeper warm-neutral light surface. |

### Signature Neurex Gradient Ramps

#### Gradient 01 (`gradient-01-my`)
Used in hero backdrops, CTA hero footers, and large immersive cards:
```css
background-image: linear-gradient(
  #000917 0%,
  #000d20 10%,
  #02122a 20%,
  #011742 30%,
  #01247b 40%,
  #153896 50%,
  #3055ba 60%,
  #4468c9 70%,
  #5879d0 80%,
  #6c89d9 84%,
  #86a1ea 88%,
  #b4c6f7 92%,
  #e7eeff 98%,
  #ffffff 100%
);
```

#### Gradient 02 (`gradient-02`)
Used for state cards, pricing highlights, newsletter sections, and interactive hover backgrounds:
```css
background-image: linear-gradient(
  #000917 0%,
  #000d20 12%,
  #02122a 23%,
  #011742 34%,
  #01247b 44%,
  #153896 55%,
  #3055ba 65%,
  #4468c9 76%,
  #5879d0 88%,
  #6c89d9 100%,
  #86a1ea 100%,
  #b4c6f7 100%,
  #e7eeff 100%,
  #ffffff 100%
);
```

---

## 3. Typography Scale & Hierarchy

Neurex utilizes **Geist** (and **Inter / Interdisplay**) with tight tracking on headings for a modern, architectural, high-tech AI aesthetic.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HEADING 01 (64px / 72px)  letter-spacing: -1.92px  weight: 500             │
│  HEADING 02 (56px / 64px)  letter-spacing: -1.92px  weight: 500             │
│  SUB-HEADING 01 (28px / 36px) letter-spacing: -0.32px weight: 500           │
│  SUB-HEADING 02 (24px / 32px) letter-spacing: -0.16px weight: 500           │
│  BODY 01 (18px / 28px) regular (400) / medium (500)                         │
│  BODY 02 (16px / 24px) regular (400) / medium (500)                         │
│  TAG / CAPTION (14px / 20px) uppercase medium                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Typography Specification Table

| Typography Class | Font Size | Line Height | Font Weight | Letter Spacing | Target Semantic Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`heading-01`** | `64px` (`4rem`) | `72px` (`4.5rem`) | `500` (Medium) | `-1.92px` (`-0.03em`) | Hero headlines, primary section hero statements |
| **`heading-02`** | `56px` (`3.5rem`) | `64px` (`4.0rem`) | `500` (Medium) | `-1.92px` (`-0.03em`) | Main section headings, feature titles |
| **`heading-03`** | `44px` (`2.75rem`)| `52px` (`3.25rem`)| `500` (Medium) | `-0.64px` | Major subsection titles, large stat numbers |
| **`heading-04`** | `36px` (`2.25rem`)| `44px` (`2.75rem`)| `500` (Medium) | `-0.64px` | Content block titles, card titles |
| **`sub-heading-01`** | `28px` (`1.75rem`)| `36px` (`2.25rem`)| `500` (Medium) | `-0.32px` | High-level card titles, showcase subheads |
| **`sub-heading-02`** | `24px` (`1.5rem`)| `32px` (`2.0rem`)| `500` (Medium) | `-0.16px` | Interactive item headers, feature cards |
| **`sub-heading-03`** | `20px` (`1.25rem`)| `28px` (`1.75rem`)| `500` (Medium) | `-0.40px` | Pricing tier titles, small module headers |
| **`body-medium-01`** | `18px` (`1.125rem`)| `28px` (`1.75rem`)| `500` (Medium) | `normal` | Lead paragraphs, emphasized button labels |
| **`body-regular-01`**| `18px` (`1.125rem`)| `28px` (`1.75rem`)| `400` (Regular) | `normal` | Main section description paragraphs, hero subtext |
| **`body-medium-02`** | `16px` (`1.0rem`)| `24px` (`1.5rem`)| `500` (Medium) | `normal` | Standard UI buttons, nav links, social links |
| **`body-regular-02`**| `16px` (`1.0rem`)| `24px` (`1.5rem`)| `400` (Regular) | `normal` | Standard body copy, list items, footer links |
| **`caption-1`** | `12px` (`0.75rem`)| `20px` (`1.25rem`)| `500` (Medium) | `normal` | Small helper badges, metadata pills |
| **`tag`** | `14px` (`0.875rem`)| `20px` (`1.25rem`)| `500` (Medium) | `uppercase` | Section category pill tags, status indicators |

---

## 4. Spacing, Container & Layout Grid

### Global Container Bounds
- **Container Class**: `.container-01`
- **Max Width**: `1240px` (`w-full max-w-[1240px] mx-auto`)
- **Responsive Padding**:
  - Desktop (>991px): `padding-left: 40px; padding-right: 40px;`
  - Tablet (768px - 991px): `padding-left: 32px; padding-right: 32px;`
  - Mobile Landscape: `padding-left: 24px; padding-right: 24px;`
  - Mobile Portrait: `padding-left: 16px; padding-right: 16px;`

### Gap & Spacing Tokens
- `--_perimeter---gap-8`: `8px`
- `--_perimeter---gap-10`: `10px`
- `--_perimeter---gap-12`: `12px`
- `--_perimeter---gap-16`: `16px`
- `--_perimeter---gap-20`: `20px`
- `--_perimeter---gap-24`: `24px`
- `--_perimeter---gap-28`: `28px`
- `--_perimeter---gap-32`: `32px`
- `--_perimeter---gap-40`: `40px`
- `--_perimeter---gap-48`: `48px`
- `--_perimeter---gap-56`: `56px`
- `--_perimeter---gap-60`: `60px`
- `--_perimeter---gap-64`: `64px`
- `--_perimeter---gap-80`: `80px`
- `--_perimeter---gap-100`: `100px`
- `--_perimeter---gap-120`: `120px`

### Section Padding Rhythms
- **Hero Sections**: Top padding `20px - 40px`, bottom `60px - 100px`.
- **Standard Content Sections**: `padding-top: 80px - 100px; padding-bottom: 80px - 100px;`
- **Feature Margins**: `margin-bottom: 64px` (title margin 1), `margin-bottom: 40px` (title margin 2).

---

## 5. Border Radius Hierarchy

Neurex features bold, rounded organic geometry for cards and full pill geometry for buttons:

| Radius Token | CSS Value | Neurex Style Guide Usage |
| :--- | :--- | :--- |
| **`button-radius`** | `100px` (`9999px`) | All Neurex buttons (`.btn-01-link`, `.btn-link-3`, nav buttons) |
| **`border-radius-4`** | `4px` | Micro status chips |
| **`border-radius-6`** | `6px` | Code blocks, small tags |
| **`border-radius-8`** | `8px` | Profile avatars (`blog-card-profile-img`), compact chips |
| **`border-radius-10`**| `10px` | Small thumbnails (`testi-card-03-img`) |
| **`border-radius-12`**| `12px` | Icon square containers (`features-card-icon-box`) |
| **`border-radius-16`**| `16px` | Compact cards, dropdown menu lists (`nav-dropdown-list`) |
| **`card-radius-24`** | `24px` | Intermediate image containers (`blog-card-02-img`, `blog-card-06-img`) |
| **`border-radius-30`**| `30px` | Standard feature images, blog media (`service-card-02-img-box`) |
| **`card-radius-32`** | `32px` | Color boxes, medium state cards |
| **`border-radius-36`**| `36px` | Large service card media frames, hero image containers |
| **`card-radius-40`** | `40px` | Macro feature cards, CTA hero wrappers |

---

## 6. Buttons & Interactive Component Archetypes

Neurex specifies three primary button variants plus specialized rolling hover mechanics:

### 1. The Rolling Text Button (`btn-text-wrap`)
Every Neurex button uses the signature vertical slide text animation on hover:
```html
<div class="btn-wrap">
  <a href="/pricing" class="btn-01-link">
    <div class="btn-text-wrap">
      <div class="btn-text _01">
        <div class="body-medium-01">Get Started</div>
      </div>
      <div class="btn-text _02">
        <div class="body-medium-01">Get Started</div>
      </div>
    </div>
  </a>
</div>
```
- **CSS Behavior**:
  - `.btn-wrap:hover`: `transform: scale(0.95); transition: all 0.2s ease;`
  - `.btn-text._01`: translates upwards (`translateY(-100%)`) on hover.
  - `.btn-text._02`: positioned absolute below (`top: 100%`), slides up into view (`translateY(-100%)`).

### 2. Button Variants

#### Variant A: Primary Teal Button (`variant: btn-02`)
- **Background**: `var(--_color---used--primary-color-1)` (`#1CA3BB`)
- **Text Color**: `#ffffff`
- **Border Radius**: `100px`
- **Padding**: `10px 24px` (or `12px 28px`)
- **Hover**: Scales gently (`scale(0.95)`), rolling text slide.

#### Variant B: Soft Neutral Button (`variant: base`)
- **Background**: `#eee` / `#f7f7f8`
- **Text Color**: `#000416`
- **Border Radius**: `100px`
- **Padding**: `10px 24px`

#### Variant C: White Bordered Button (`variant: border`)
- **Background**: `#ffffff`
- **Border**: `1px solid var(--_color---used--border-color-1)` (`#ebebeb`)
- **Text Color**: `#000416`
- **Border Radius**: `100px`
- **Padding**: `10px 24px`

#### Variant D: Glass Frosted Button (`variant: glass / dark`)
- **Background**: `rgba(241, 241, 241, 0.1)` (`#f1f1f11a`)
- **Backdrop Filter**: `blur(4px)`
- **Border**: `1px solid rgba(255, 255, 255, 0.15)`
- **Text Color**: `#ffffff`
- **Border Radius**: `100px`
- **Padding**: `12px 28px`

---

## 7. Navigation & Header Component

- **Navbar Container**: Centered in `.container-01`, padding top `20px`.
- **Background**: Clean transparent or subtle frosted white/dark backdrop.
- **Brand Logo**: Dual-mode logo switching:
  - White version on dark backdrops
  - Dark version (`#000416`) on light backdrops
- **Navigation Links**:
  - `body-regular-02` (16px, 400 weight).
  - Rolling text animation inside `.btn-text-wrap`.
  - Dropdown menu styling with `border-radius: 16px`, `border: 1px solid #ebebeb`, `background: #ffffff`.
- **Nav Right**: "Login" text button + Primary CTA button (`Contact us` or `Get started`).

---

## 8. Footer & Social Link Component

Neurex features an iconic structured footer with dual-action arrow social links:
- **Social Link Component (`.social-link`)**:
  - Left: Brand icon + label (`Facebook`, `LinkedIn`, `Twitter / X`, `Instagram`, `Discord`, `YouTube`).
  - Right: Slanted arrow link icon (`M16.1716 10.9989L10.8076 5.63491...`).
  - Hover: `transform: scale(0.95); color: #000416; transition: all 0.2s ease;`
- **Footer Columns**: `Overview`, `Company`, `Resources`, `Utilities` grid with clean 16px regular links.
- **Footer CTA Banner**: Uses `Gradient 01` (`gradient-01-my`) with large `heading-01` text in white and a primary cyan button (`#1CA3BB`).

---

## 9. Complete `:root` CSS Implementation Tokens

```css
:root {
  /* ==========================================================================
     NEUREX OFFICIAL COLOR TOKENS
     ========================================================================== */
  --primary-01: #1CA3BB;            /* CyberShield Signature Cyan / Teal */
  --primary-02: #000416;            /* Deepest Midnight Pitch Navy */
  --primary-03: #0e111f;            /* Obsidian Navy */
  --secondary-01: #4a4d5a;          /* Slate Grey Body */
  --secondary-02: #797a7c;          /* Muted Caption Slate */
  --bg-color: #f7f7f8;              /* Soft Light Canvas */
  --stroke-color: #ebebeb;          /* Hairline Border */
  --stroke-color-2: #e9e9e9;        /* Secondary Border */
  --white: #ffffff;
  --white-200: #f7f7f8;
  --white-300: #e8e8e8;

  /* ==========================================================================
     NEUREX OFFICIAL GRADIENTS
     ========================================================================== */
  --gradient-01: linear-gradient(#000917, #000d20 10%, #02122a 20%, #011742 30%, #01247b 40%, #153896 50%, #3055ba 60%, #4468c9 70%, #5879d0 80%, #6c89d9 84%, #86a1ea 88%, #b4c6f7 92%, #e7eeff 98%, #ffffff);
  --gradient-02: linear-gradient(#000917, #000d20 12%, #02122a 23%, #011742 34%, #01247b 44%, #153896 55%, #3055ba 65%, #4468c9 76%, #5879d0 88%, #6c89d9 100%, #86a1ea 100%, #b4c6f7 100%, #e7eeff 100%, #ffffff);

  /* ==========================================================================
     TYPOGRAPHY TOKENS
     ========================================================================== */
  --font-family: 'Geist', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  --fs-heading-01: 64px;
  --lh-heading-01: 72px;
  --ls-heading-01: -1.92px;

  --fs-heading-02: 56px;
  --lh-heading-02: 64px;
  --ls-heading-02: -1.92px;

  --fs-heading-03: 44px;
  --lh-heading-03: 52px;
  --ls-heading-03: -0.64px;

  --fs-heading-04: 36px;
  --lh-heading-04: 44px;
  --ls-heading-04: -0.64px;

  --fs-sub-heading-01: 28px;
  --lh-sub-heading-01: 36px;
  --ls-sub-heading-01: -0.32px;

  --fs-sub-heading-02: 24px;
  --lh-sub-heading-02: 32px;
  --ls-sub-heading-02: -0.16px;

  --fs-sub-heading-03: 20px;
  --lh-sub-heading-03: 28px;
  --ls-sub-heading-03: -0.40px;

  --fs-body-01: 18px;
  --lh-body-01: 28px;

  --fs-body-02: 16px;
  --lh-body-02: 24px;

  --fs-caption-1: 12px;
  --lh-caption-1: 20px;

  --fs-caption-2: 14px;
  --lh-caption-2: 20px;

  /* ==========================================================================
     BORDER RADIUS TOKENS
     ========================================================================== */
  --radius-button: 100px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 30px;
  --radius-3xl: 36px;
  --radius-4xl: 40px;

  /* ==========================================================================
     LAYOUT & CONTAINER
     ========================================================================== */
  --container-max-width: 1240px;
  --container-padding: 40px;
}
```

---

## 10. Rules for Updating CyberShield Components to Neurex

When converting or authoring CyberShield pages & components:

1. **Replace Earthy Palettes with Neurex Precision**:
   - Swap warm sand/sage for `#f7f7f8` (canvas), `#ffffff` (cards), and `#000416` (contrast sections).
   - Use `#1CA3BB` (Cyber Teal/Cyan) as the primary highlight / CTA button background.
   - Use `#4a4d5a` for paragraph body copy.
2. **Apply Neurex Gradient 01 & 02**:
   - For dark hero sections and bottom CTA banners, apply `--gradient-01`.
   - For state cards and interactive cards, apply `--gradient-02`.
3. **Use the Rolling Text Animation on Interactive Buttons**:
   - Wrap buttons in `.btn-wrap` and `.btn-text-wrap` with dual `.btn-text` lines for the signature Neurex roll effect.
   - On hover, scale by `0.95`.
4. **Anchor all layout widths to 1240px**:
   - Enforce `max-w-[1240px] px-5 sm:px-8 lg:px-10 mx-auto`.
5. **Headings must follow Neurex typography**:
   - `heading-01` (64px, -1.92px tracking, 500 weight)
   - `heading-02` (56px, -1.92px tracking, 500 weight)
   - `body-regular-01` (18px, 28px line height, `#4a4d5a`)
