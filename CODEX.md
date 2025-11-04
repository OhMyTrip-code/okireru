# CODEX - オキレル Codebase Documentation

## 📋 Project Overview

**オキレル** (Okireru) is a Next.js-based landing page for a mobile wake-up assistance service. The application promotes a "Morning Habit Personal Method" that helps users establish morning routines through QR code wake-up verification and financial commitment.

**Core Concept:**
- Users commit ¥3,000/month subscription
- Set wake-up times with QR code verification (scan a barcode within 5 minutes of alarm)
- Earn ¥100/day successful wake-ups as Amazon gift card cashback
- Perfect attendance = ¥3,000 refund = effectively free

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 16.0.1 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.4.5
- **Styling**: Tailwind CSS 3.4.4
- **Testing**: Vitest 1.5.3
- **Font**: Noto Sans JP (Google Fonts)

### Project Structure
```
/Users/keito/起きれる/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata & fonts
│   ├── page.tsx           # Home page component
│   ├── globals.css        # Global styles
│   ├── robots.txt         # SEO robots file
│   └── sitemap.ts         # Dynamic sitemap generation
├── components/             # React components
│   ├── Header.tsx         # Site header/navigation
│   ├── Hero.tsx           # Hero section with CTA
│   ├── Features.tsx       # Main features showcase
│   ├── HowItWorks.tsx     # 5-step process explanation
│   ├── Pricing.tsx        # Pricing information
│   ├── CTA.tsx            # Call-to-action section
│   ├── Footer.tsx         # Site footer
│   └── ui/                # Reusable UI components
│       ├── Button.tsx     # Button component
│       └── Container.tsx # Layout container wrapper
├── lib/                   # Library/utility functions
│   └── form.ts            # Form submission handler
├── utils/                 # Utility functions
│   ├── validators.ts      # Email validation
│   └── validators.test.ts # Validation tests
├── public/                # Static assets
│   ├── *.png             # Logo files (multiple sizes)
│   └── hero-mock.png     # Hero section mockup image
└── Configuration files
    ├── next.config.ts     # Next.js configuration
    ├── tailwind.config.ts # Tailwind CSS configuration
    ├── tsconfig.json      # TypeScript configuration
    └── vitest.config.ts   # Vitest configuration
```

## 📄 File Reference

### `/app/layout.tsx`
Root layout component with:
- **Font Loading**: Noto Sans JP with weights 400, 500, 700
- **Metadata**: Base URL, icons, theme color (#F97316)
- **Schema.org JSON-LD**: 
  - `WebSite` structured data
  - `MobileApplication` structured data (iOS, ¥3,000, PreOrder)
- **Accessibility**: Skip link to main content
- **Base Styling**: Slate color scheme background

### `/app/page.tsx`
Home page with SEO metadata:
- **Title**: "オキレル | 朝習慣パーソナルメソッド"
- **Description**: Wake-up assistance service with QR wake-up and financial commitment
- **Keywords**: オキレル, 早起き, 朝活, モーニングルーティン, 習慣化, QR起床, アラームアプリ
- **Open Graph**: Optimized for social sharing
- **Twitter Card**: Large image card
- **Page Sections**: Header → Hero → Features → HowItWorks → Pricing → CTA → Footer

### `/components/Hero.tsx`
Hero section featuring:
- **Tagline**: "朝習慣パーソナルメソッド" (Morning Habit Personal Method)
- **Headline**: "ただ起きるんじゃない、習慣にしよう。" (Don't just wake up, make it a habit)
- **Value Proposition**: QR wake-up + financial commitment explanation
- **Target Audience**: 3 highlighted personas
- **Stats Display**: Morning 6:00 / Stop Snooze / Return ¥1400+
- **CTA Buttons**: "今すぐ事前登録" (Pre-register now) and "使い方を見る" (View usage)
- **Hero Image**: App mockup with gradient overlay

### `/components/Features.tsx`
Three core features:
1. **起こす** (Wake Up): Alarm + 1-minute notifications, forces getting out of bed
2. **証明する** (Prove): Scan registered barcode within 5 minutes to stop alarm
3. **続ける** (Continue): ¥100/day cashback via Amazon gift card (¥3,000/month perfect = free)

Each feature includes:
- Custom SVG icon
- Title and description
- Card-based layout with brand color accents

### `/components/HowItWorks.tsx`
5-step process explanation:
1. **アプリ登録**: App Store registration, ¥3,000/month commitment
2. **バーコード登録**: Register existing product barcode (shampoo, kettle, etc.)
3. **起床時刻をセット**: Set desired wake-up time
4. **QR起床で証明**: Scan barcode within 5 minutes of alarm
5. **月末キャッシュバック**: Success days × ¥100 as Amazon gift card

Visual:
- Numbered badges (1-5)
- Border-left timeline on mobile, grid layout on desktop
- Step cards with descriptions

### `/components/Pricing.tsx`
Pricing section with:
- **Monthly Price**: ¥3,000 (tax included)
- **Benefits**:
  - Monthly commitment maximizes awareness of oversleeping risk
  - ¥100/day success = Amazon gift card cashback
  - Perfect attendance = effectively free
- **Dark Theme**: Slate-900 background
- **"Why it works"** explanation: Financial risk forces action, cashback incentivizes continuation

### `/components/ui/Button.tsx`
Reusable button component:
- **Variants**: `primary` (brand background) | `secondary` (outlined)
- **Function**: `buttonClasses()` - utility for consistent button styling
- **Props**: Standard HTML button props + `variant` prop
- **Accessibility**: Focus-visible states, disabled states

### `/components/ui/Container.tsx`
Layout wrapper component for consistent page width and spacing.

### `/lib/form.ts`
Form submission handler:
- **Function**: `submitLead(email: string)`
- **Behavior**: 800ms delay (simulated API call)
- **Validation**: Throws error if email is empty
- **Returns**: `{ ok: true }` on success

### `/utils/validators.ts`
Email validation utility:
- **Function**: `validateEmail(email: string)`
- **Regex**: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- **Behavior**: Trims whitespace before validation

## 🎨 Styling

### Tailwind Configuration (`tailwind.config.ts`)
**Brand Colors:**
- `brand`: #F97316 (Orange-500)
- `brand.light`: #FDBA74 (Orange-300)
- `brand.dark`: #EA580C (Orange-600)

**Custom Extensions:**
- Font family: `var(--font-sans)` (Noto Sans JP)
- Box shadow: `highlight` with brand color
- Background image: `hero-gradient` radial gradient

**Content Paths:**
Scans `app/`, `components/`, `lib/`, and `utils/` directories for class usage.

### Design System
- **Color Scheme**: Slate grays (50-900) with brand orange accents
- **Typography**: Noto Sans JP, weight hierarchy (400/500/700)
- **Spacing**: Consistent padding/margins (p-4, p-6, p-8, py-20, py-24)
- **Border Radius**: Rounded corners (rounded-xl, rounded-2xl, rounded-3xl, rounded-full)
- **Shadows**: Subtle elevation (shadow-sm, shadow-lg)
- **Transitions**: 200ms duration on interactive elements

### Responsive Breakpoints
- `sm`: 640px+ (small screens)
- `md`: 768px+ (tablets)
- `lg`: 1024px+ (desktops)

## 🔧 Configuration

### Next.js (`next.config.ts`)
- `typedRoutes: true` - Enables TypeScript route types

### TypeScript (`tsconfig.json`)
- Path alias: `@/*` → project root
- ES Module support
- Strict type checking

### Vitest (`vitest.config.ts`)
- Test runner configuration for unit tests

## 📱 SEO & Metadata

### SEO Implementation
1. **Metadata API**: Next.js 13+ App Router metadata
2. **Structured Data**: JSON-LD schema.org markup
3. **Open Graph**: Social media preview optimization
4. **Twitter Cards**: Large image card format
5. **Canonical URLs**: Base URL declaration
6. **Robots**: Index/follow directives
7. **Sitemap**: Dynamic sitemap generation

### Base URL
- Production: `https://okireru.app`

## 🧪 Testing

### Test Setup
- **Framework**: Vitest
- **Test Files**: `*.test.ts` pattern
- **Location**: `/utils/validators.test.ts`

### Available Scripts
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checking
npm run format       # Prettier formatting
npm run typecheck    # TypeScript type checking
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
```

## 🔐 Form Handling

### Email Collection
- **Implementation**: Client-side form submission
- **Validation**: Email format validation via `/utils/validators.ts`
- **Submission**: `/lib/form.ts` - simulated API call with 800ms delay
- **Error Handling**: Throws error for empty email

## 📦 Dependencies

### Production
- `clsx`: 2.1.0 - Conditional class names
- `next`: 16.0.1 - React framework
- `react`: 19.2.0 - UI library
- `react-dom`: 19.2.0 - React DOM rendering

### Development
- TypeScript tooling (`typescript`, `@types/*`)
- ESLint with Next.js config
- Prettier for formatting
- Tailwind CSS + PostCSS
- Vitest for testing

## 🎯 Key Features

1. **Accessibility**
   - Skip link to main content
   - ARIA labels on interactive elements
   - Semantic HTML structure

2. **Performance**
   - Next.js Image optimization
   - Font display swap
   - Priority image loading (hero)

3. **SEO Optimization**
   - Comprehensive metadata
   - Structured data
   - Canonical URLs
   - Sitemap generation

4. **Responsive Design**
   - Mobile-first approach
   - Breakpoint-based layouts
   - Flexible grid systems

## 🚀 Development Workflow

1. **Local Development**
   ```bash
   npm run dev
   ```
   Starts development server at `http://localhost:3000`

2. **Type Checking**
   ```bash
   npm run typecheck
   ```
   Validates TypeScript without emitting files

3. **Linting & Formatting**
   ```bash
   npm run lint      # Check code quality
   npm run format    # Auto-format code
   ```

4. **Testing**
   ```bash
   npm run test      # Run test suite
   ```

5. **Build & Deploy**
   ```bash
   npm run build     # Production build
   npm run start     # Preview production build
   ```

## 📝 Notes

- **Language**: Japanese (ja) - All UI text in Japanese
- **Target Market**: Japanese users (App Store, ¥ pricing)
- **Application Type**: iOS mobile app (pre-order status)
- **Brand Color**: Orange (#F97316) - represents energy, morning, action
- **Typography**: Noto Sans JP for Japanese character support

## 🔄 Future Considerations

- Form submission integration with actual backend API
- Analytics integration (Google Analytics, etc.)
- A/B testing setup for CTAs
- Multi-language support (if expanding)
- Progressive Web App features
- App Store deep linking

---

**Last Updated**: Generated from codebase analysis
**Version**: 1.0.0 (from package.json)



