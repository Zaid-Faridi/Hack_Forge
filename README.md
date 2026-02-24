<![CDATA[<div align="center">

# ⚡ HackForge

### Discover, Host & Conquer Hackathons Worldwide

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **HackForge** is a premium, full-featured hackathon discovery and hosting platform built with cutting‑edge web technologies. Whether you're a participant looking for your next challenge or an organizer ready to launch a world‑class event — HackForge has you covered.

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Routes & Pages](#-routes--pages)
- [Architecture](#-architecture)
- [Design System](#-design-system)
- [Authentication](#-authentication)
- [State Management](#-state-management)
- [Animations](#-animations)
- [Components](#-components)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### For Participants
- 🔍 **Discover Hackathons** — Browse, search, and filter events by status, mode, tech domain, and more
- 🎯 **3D Interactive Cards** — Mouse‑tilt parallax hackathon cards with depth effects
- 📊 **Personal Dashboard** — Track your hackathon journey, wins, and upcoming events
- 🏆 **Hall of Fame** — Explore award‑winning projects and past champions

### For Organizers
- 🧙 **Multi‑Step Wizard** — Create hackathons with a guided 6‑step form (Basics → Date & Time → Details → Prizes → Media → Review)
- 📈 **Organizer Dashboard** — Monitor participants, event views, and prize pools
- 👁️ **Live Card Preview** — See how your hackathon listing will look as you build it
- 🎨 **Rich Media Support** — Upload cover images, logos, and connect to your website

### Platform‑Wide
- 🌙 **Dark Mode by Default** — Premium dark theme with cyan, magenta, and volt accents
- 🪟 **Glassmorphism UI** — Frosted-glass cards with blur, borders, and glow effects
- 🎬 **Cinematic Animations** — Framer Motion page transitions, staggered reveals, and GSAP scroll triggers
- 🔐 **Dual‑Role Auth** — Participant and Organizer login flows with NextAuth.js v5
- 📱 **Fully Responsive** — Desktop‑first design that adapts gracefully to tablets and phones
- ⚡ **Turbopack** — Lightning‑fast dev server with Next.js Turbopack

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5.4](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) + Custom Glassmorphism |
| **Animation** | [Framer Motion 11](https://www.framer.com/motion/) + [GSAP 3.12](https://greensock.com/) |
| **3D / Canvas** | HTML5 Canvas (animated hero scene with particles & wireframes) |
| **Authentication** | [NextAuth.js v5 (beta)](https://authjs.dev/) with Credentials, Google, GitHub |
| **State** | [Zustand 4.5](https://zustand-demo.pmnd.rs/) |
| **Forms** | [React Hook Form 7](https://react-hook-form.com/) + [Zod 3](https://zod.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | Inter, Syne, JetBrains Mono (Google Fonts) |
| **Utilities** | clsx, tailwind-merge, class-variance-authority |

---

## 📁 Project Structure

```
hackathon-finder/
├── public/                         # Static assets
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (auth)/                 # Auth route group
│   │   │   ├── login/              # Login page
│   │   │   ├── register/           # Registration pages
│   │   │   │   ├── participant/    # Participant registration
│   │   │   │   └── organizer/      # Organizer registration
│   │   │   ├── verify/             # Email verification
│   │   │   ├── forgot-password/    # Password recovery
│   │   │   └── layout.tsx          # Auth layout (centered card + bg)
│   │   ├── (main)/                 # Public route group
│   │   │   ├── explore/            # Hackathon explorer with filters
│   │   │   ├── hall-of-fame/       # Winners showcase
│   │   │   ├── hackathon/[id]/     # Hackathon detail page
│   │   │   ├── page.tsx            # Landing page
│   │   │   └── layout.tsx          # Main layout (Navbar + Footer)
│   │   ├── (dashboard)/            # Protected dashboard group
│   │   │   └── dashboard/
│   │   │       ├── participant/    # Participant dashboard
│   │   │       ├── organizer/      # Organizer dashboard
│   │   │       │   └── create/     # Create hackathon wizard
│   │   │       └── layout.tsx      # Dashboard layout (Sidebar)
│   │   ├── api/auth/               # Auth API routes
│   │   ├── layout.tsx              # Root layout (fonts + metadata)
│   │   ├── globals.css             # Global styles + Tailwind
│   │   ├── loading.tsx             # Global loading spinner
│   │   └── not-found.tsx           # Custom 404 page
│   ├── components/
│   │   ├── auth/                   # Auth components
│   │   │   ├── DualLoginPortal.tsx  # Main auth portal
│   │   │   ├── LoginForm.tsx        # Login form
│   │   │   ├── RegisterForm.tsx     # Registration form
│   │   │   ├── RoleToggle.tsx       # Participant/Organizer toggle
│   │   │   ├── SocialAuthButtons.tsx# OAuth buttons
│   │   │   └── AuthBackground.tsx   # Animated auth background
│   │   ├── explore/                # Explorer page components
│   │   │   ├── SearchBar.tsx        # Glowing search input
│   │   │   ├── FilterSidebar.tsx    # Collapsible filter panel
│   │   │   ├── FilterGroup.tsx      # Individual filter group
│   │   │   ├── HackathonCard3D.tsx  # 3D tilt hackathon card
│   │   │   ├── HackathonGrid.tsx    # Responsive card grid
│   │   │   ├── ActiveFilters.tsx    # Active filter tags
│   │   │   └── EmptyState.tsx       # No-results component
│   │   ├── landing/                # Landing page sections
│   │   │   ├── HeroScene.tsx        # Canvas animated hero
│   │   │   ├── HeroSection.tsx      # Hero with CTA
│   │   │   ├── SplitCTA.tsx         # Participate/Host CTA
│   │   │   ├── StatsBar.tsx         # Animated statistics
│   │   │   ├── FeaturedHackathons.tsx# Trending events
│   │   │   ├── TechDomains.tsx      # Domain categories
│   │   │   └── Testimonials.tsx     # Scrolling testimonials
│   │   ├── layout/                 # Layout components
│   │   │   ├── Navbar.tsx           # Floating glassmorphism nav
│   │   │   ├── Footer.tsx           # Site footer
│   │   │   ├── DashboardSidebar.tsx # Dashboard sidebar
│   │   │   ├── PageTransition.tsx   # Route transition wrapper
│   │   │   └── CustomCursor.tsx     # Custom cursor effect
│   │   ├── ui/                     # Reusable UI atoms
│   │   │   ├── Button.tsx           # CVA button component
│   │   │   ├── Input.tsx            # Styled input
│   │   │   ├── Card.tsx             # Glass card wrapper
│   │   │   ├── Badge.tsx            # Status badge
│   │   │   ├── Tag.tsx              # Removable tag
│   │   │   ├── Skeleton.tsx         # Loading skeleton
│   │   │   ├── Modal.tsx            # Overlay modal
│   │   │   ├── GradientText.tsx     # Animated gradient text
│   │   │   ├── GlowDivider.tsx      # Glowing line divider
│   │   │   ├── MagneticButton.tsx   # Magnetic hover button
│   │   │   ├── CountUp.tsx          # Number counter animation
│   │   │   └── NoiseBg.tsx          # Noise texture background
│   │   └── wizard/                 # Hackathon creation wizard
│   │       ├── WizardShell.tsx      # Wizard orchestrator
│   │       ├── WizardProgress.tsx   # Step progress indicator
│   │       ├── steps/
│   │       │   ├── Step1_Basics.tsx
│   │       │   ├── Step2_DateTime.tsx
│   │       │   ├── Step3_Details.tsx
│   │       │   ├── Step4_Prizes.tsx
│   │       │   ├── Step5_Media.tsx
│   │       │   └── Step6_Review.tsx
│   │       └── preview/
│   │           └── LiveCardPreview.tsx
│   ├── hooks/                      # Custom React hooks
│   │   ├── useMouseTilt.ts          # Mouse-position tilt
│   │   ├── useMagneticHover.ts      # Magnetic element effect
│   │   ├── useScrollReveal.ts       # Scroll-triggered reveal
│   │   ├── useGSAPTimeline.ts       # GSAP timeline hook
│   │   ├── useSearch.ts             # Debounced search
│   │   ├── useWindowSize.ts         # Window dimensions
│   │   └── useMedia.ts             # Media query hook
│   ├── lib/
│   │   ├── animations/             # Animation configs
│   │   │   ├── variants.ts          # Framer Motion variants
│   │   │   ├── spring-configs.ts    # Spring presets
│   │   │   └── gsap.ts             # GSAP utility functions
│   │   ├── auth/                   # Auth configuration
│   │   │   └── auth.config.ts       # NextAuth.js config
│   │   ├── three/                  # Three.js shaders
│   │   │   └── shaders/
│   │   │       ├── noise.glsl.ts
│   │   │       └── glow.glsl.ts
│   │   ├── validations/            # Zod schemas
│   │   │   └── auth.ts
│   │   └── utils/                  # Utility functions
│   │       ├── cn.ts                # Class name merger
│   │       ├── constants.ts         # App constants
│   │       └── format.ts           # Formatters
│   ├── stores/                     # Zustand stores
│   │   ├── authStore.ts             # Auth state
│   │   ├── filterStore.ts           # Explorer filters
│   │   ├── wizardStore.ts           # Wizard form state
│   │   └── uiStore.ts              # UI state (sidebar, cursor)
│   ├── styles/
│   │   └── glassmorphism.css        # Glassmorphism styles
│   ├── middleware.ts               # Route protection
│   └── types/
│       └── next-auth.d.ts          # NextAuth type augmentation
├── .env.local                      # Environment variables
├── next.config.mjs                 # Next.js configuration
├── tailwind.config.ts              # Tailwind theme
├── tsconfig.json                   # TypeScript config
├── postcss.config.js               # PostCSS config
└── package.json                    # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.0
- **npm** ≥ 9.0 (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hackforge.git
cd hackforge

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your values (see below)

# Start the development server
npm run dev
```

The app will be available at **http://localhost:3000**.

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# API
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> **Note:** For development, you can use placeholder values. OAuth login will fall back to the credentials provider.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

---

## 🗺 Routes & Pages

| Route | Description | Auth Required |
|-------|-------------|:---:|
| `/` | Landing page with hero, stats, featured hackathons | ❌ |
| `/explore` | Browse & filter hackathons | ❌ |
| `/hackathon/[id]` | Hackathon detail page | ❌ |
| `/hall-of-fame` | Winners showcase | ❌ |
| `/login` | Authentication portal | ❌ |
| `/register/participant` | Participant registration | ❌ |
| `/register/organizer` | Organizer registration | ❌ |
| `/verify` | Email verification | ❌ |
| `/forgot-password` | Password reset | ❌ |
| `/dashboard/participant` | Participant dashboard | ✅ |
| `/dashboard/organizer` | Organizer dashboard | ✅ |
| `/dashboard/organizer/create` | Create hackathon wizard | ✅ |

---

## 🏗 Architecture

HackForge follows the **Next.js App Router** conventions with clear separation of concerns:

```
┌─────────────────────────────────────────────┐
│              Route Groups                    │
│  (auth)  │  (main)  │  (dashboard)          │
│  ↓          ↓           ↓                    │
│  AuthLayout MainLayout  DashboardLayout      │
│  (centered) (Nav+Footer)(Sidebar+Content)    │
└─────────────────────────────────────────────┘
          ↓              ↓                ↓
   ┌──────────┐  ┌──────────────┐  ┌──────────┐
   │ Auth     │  │ Landing      │  │ Dashboard│
   │ Components│ │ Explorer     │  │ Wizard   │
   │          │  │ Detail       │  │          │
   └──────────┘  └──────────────┘  └──────────┘
          ↓              ↓                ↓
   ┌──────────────────────────────────────────┐
   │          Shared UI Components            │
   │  Button · Card · Badge · Input · Modal   │
   └──────────────────────────────────────────┘
          ↓              ↓                ↓
   ┌──────────────────────────────────────────┐
   │    Stores (Zustand) · Hooks · Utils      │
   └──────────────────────────────────────────┘
```

### Key Patterns

- **Route Groups** — `(auth)`, `(main)`, `(dashboard)` provide separate layouts without affecting URL structure
- **Compound Components** — Complex UI like `DualLoginPortal` composes smaller atoms (RoleToggle, LoginForm, etc.)
- **Zustand Stores** — Lightweight global state for auth, filters, wizard form, and UI controls
- **CVA (Class Variance Authority)** — Type‑safe component variants for `Button`, `Badge`, etc.

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#0a0f1e` | Page background |
| `surface1` | `#141b2d` | Card backgrounds |
| `surface2` | `#1e2840` | Elevated surfaces |
| `cyan` | `#00e5ff` | Primary accent, CTAs, links |
| `magenta` | `#ff0090` | Organizer accent, secondary CTAs |
| `volt` | `#faff00` | Highlights, prize amounts, badges |
| `ink-100` | `#f0f4ff` | Primary text |
| `ink-200` | `#b8c4e0` | Secondary text |
| `ink-300` | `#6b7a99` | Muted text |
| `ink-400` | `#3a4560` | Borders, dividers |

### Typography

| Class | Font | Usage |
|-------|------|-------|
| `font-sans` | Inter | Body text, UI elements |
| `font-display` | Syne | Headings, hero text |
| `font-mono` | JetBrains Mono | Prices, code, dates |

### Glassmorphism

All card surfaces use a shared `.glass-card` class:
```css
.glass-card {
  background: rgba(20, 27, 45, 0.6);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
```

---

## 🔐 Authentication

HackForge uses **NextAuth.js v5** with a dual‑role system:

### Providers
- **Credentials** — Email + password login
- **Google OAuth** — Social login
- **GitHub OAuth** — Social login (developer-focused)

### Roles
| Role | Access |
|------|--------|
| `PARTICIPANT` | Browse, register for hackathons, personal dashboard |
| `ORGANIZER` | All participant features + create/manage hackathons |

### Flow
1. User selects role via `RoleToggle` component
2. Login/Register form adapts based on role
3. JWT callback injects `role` and `orgId` into token
4. Session callback exposes role info to client
5. Middleware protects `/dashboard/*` routes

---

## 🗃 State Management

HackForge uses **Zustand** for lightweight, type‑safe global state:

| Store | Purpose | Key State |
|-------|---------|-----------|
| `authStore` | Authentication state | `user`, `role`, `isAuthenticated` |
| `filterStore` | Explorer page filters | `status`, `mode`, `domains`, `query` |
| `wizardStore` | Hackathon creation wizard | `step`, `formData`, `next()`, `back()` |
| `uiStore` | Global UI controls | `sidebarOpen`, `cursorVariant`, `modalId` |

---

## 🎬 Animations

### Framer Motion
- **Page Transitions** — Fade + slide via `PageTransition` wrapper
- **Staggered Reveals** — Card grids animate in sequence using `staggerContainer` variant
- **Micro‑interactions** — Button hover scales, menu slides, modal fades

### GSAP
- **Scroll‑triggered** animations via `ScrollTrigger` plugin
- **Timeline sequences** via `useGSAPTimeline` hook
- **Magnetic hover** effects via `useMagneticHover` hook

### Canvas Hero Scene
- Twinkling star field (200 particles)
- Floating cyan and magenta gradient orbs
- Animated wireframe geometric shapes
- Smooth breathing motion with `requestAnimationFrame`

---

## 🧩 Components

### UI Atoms (12 components)

| Component | Description |
|-----------|-------------|
| `Button` | CVA button with `cyan`, `magenta`, `volt`, `ghost` variants |
| `Input` | Styled text input with label and error state |
| `Card` | Glass‑card wrapper with hover glow |
| `Badge` | Status badge with color variants |
| `Tag` | Removable filter tag |
| `Skeleton` | Shimmer loading placeholder |
| `Modal` | Overlay modal with backdrop |
| `GradientText` | Animated gradient text (cyan → magenta) |
| `GlowDivider` | Subtle glowing line separator |
| `MagneticButton` | Button that magnetically follows cursor |
| `CountUp` | Animated number counter |
| `NoiseBg` | SVG noise texture overlay |

### Custom Hooks (7 hooks)

| Hook | Description |
|------|-------------|
| `useMouseTilt` | Returns `rotateX`/`rotateY` based on mouse position |
| `useMagneticHover` | Creates magnetic pull effect on elements |
| `useScrollReveal` | Triggers animation when element enters viewport |
| `useGSAPTimeline` | Manages GSAP timeline lifecycle |
| `useSearch` | Debounced search query with 300ms delay |
| `useWindowSize` | Reactive `width` / `height` tracking |
| `useMedia` | CSS media query match listener |

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feat/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feat/amazing-feature`
5. **Open** a Pull Request

### Code Style
- TypeScript strict mode enabled
- Tailwind CSS for all styling (no inline styles)
- Framer Motion for animations
- Components should be client components only when interactivity is needed

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript & Tailwind CSS**

[Report Bug](https://github.com/your-username/hackforge/issues) · [Request Feature](https://github.com/your-username/hackforge/issues) · [Discussions](https://github.com/your-username/hackforge/discussions)

</div>
]]>
