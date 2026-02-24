<![CDATA[<div align="center">

# ⚡ HackForge

**Discover, Host & Conquer Hackathons Worldwide**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

HackForge is a modern, full-featured hackathon platform where **participants** can discover and join hackathons, and **organizers** can create and manage events — all wrapped in a premium glassmorphism dark UI with cinematic animations.

[Live Demo](#) · [Report Bug](https://github.com/Zaid-Faridi/Hack_Forge/issues) · [Request Feature](https://github.com/Zaid-Faridi/Hack_Forge/issues)

</div>

---

## 📋 Table of Contents

1. [Why HackForge?](#-why-hackforge)
2. [Key Features](#-key-features)
3. [Screenshots & Pages](#-screenshots--pages)
4. [Tech Stack](#-tech-stack)
5. [Getting Started](#-getting-started)
6. [Project Structure](#-project-structure)
7. [How It Works](#-how-it-works)
8. [Design System](#-design-system)
9. [Routes Reference](#-routes-reference)
10. [Contributing](#-contributing)
11. [License](#-license)

---

## 💡 Why HackForge?

Most hackathon platforms feel outdated — plain white layouts, basic forms, and no personality. **HackForge is different.**

- 🎨 **Premium Dark UI** with frosted-glass (glassmorphism) cards and glowing accents
- 🎬 **Cinematic Animations** — page transitions, staggered reveals, parallax 3D cards
- 🔐 **Dual-Role System** — separate experiences for participants and organizers
- 🧙 **Guided Wizard** — organizers can create events through a 6-step form with live preview
- ⚡ **Blazing Fast** — powered by Next.js Turbopack for sub-second hot reloads

---

## ✨ Key Features

### 🏄 For Participants

| Feature | What It Does |
|---------|-------------|
| **Explore & Filter** | Browse hackathons by status (Upcoming, Live, Completed), mode (Online, In-Person, Hybrid), and tech domain (AI/ML, Web3, Cloud, etc.) |
| **3D Hackathon Cards** | Cards respond to your mouse with a parallax tilt effect — hover to see it in action |
| **Hackathon Detail Page** | Full event info including timeline, rules, prizes, and a "Register Now" button |
| **Personal Dashboard** | Track your hackathon journey — events joined, wins, upcoming registrations |
| **Hall of Fame** | Browse past champions and award-winning projects for inspiration |

### 🏗️ For Organizers

| Feature | What It Does |
|---------|-------------|
| **6-Step Creation Wizard** | Build your hackathon listing step-by-step: Basics → Date & Time → Details → Prizes → Media → Review |
| **Live Card Preview** | See exactly how your hackathon card will look to participants — updates in real-time as you type |
| **Organizer Dashboard** | Monitor total participants, event views, prize pools, and manage all your events |
| **Event Management** | Track Draft, Live, and Ended events with participant counts |

### 🌐 Platform-Wide

| Feature | What It Does |
|---------|-------------|
| **Glassmorphism UI** | Frosted-glass cards with blur, subtle borders, and hover glow effects |
| **Animated Hero** | Canvas-based animated scene with floating orbs, twinkling stars, and wireframe shapes |
| **Page Transitions** | Smooth fade-and-slide animations when navigating between pages |
| **Responsive Design** | Desktop-first layout that adapts to tablets and mobile screens |
| **Custom 404 Page** | Even the error page looks good — gradient "404" text with navigation buttons |
| **Authentication** | Sign in with email/password, Google, or GitHub — role-based access control |

---

## 📸 Screenshots & Pages

| Page | Description |
|------|-------------|
| **Landing Page** (`/`) | Animated hero, stats bar (2,500+ hackathons, 150K+ participants), featured events, tech domains, testimonials |
| **Explore** (`/explore`) | Search bar + filter sidebar + responsive hackathon card grid |
| **Hackathon Detail** (`/hackathon/[id]`) | About, rules, timeline, prizes, and a sticky registration sidebar |
| **Hall of Fame** (`/hall-of-fame`) | Grand champion spotlight + runner-up grid with tech stacks and prize amounts |
| **Login** (`/login`) | Dual-role auth portal — toggle between Participant and Organizer |
| **Participant Dashboard** (`/dashboard/participant`) | Stats cards, recent activity feed |
| **Organizer Dashboard** (`/dashboard/organizer`) | Stats cards, event list with status badges, "Create Hackathon" CTA |
| **Create Hackathon** (`/dashboard/organizer/create`) | 6-step wizard with side-by-side live card preview |

---

## 🛠 Tech Stack

### Core Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16 | React framework with App Router, Turbopack, and server components |
| **TypeScript** | 5.4 | Type safety across the entire codebase |
| **React** | 18+ | UI component library |

### Styling & Design
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Tailwind CSS** | 3.4 | Utility-first CSS framework — all styling is done through Tailwind classes |
| **Custom CSS** | — | Glassmorphism card styles, scrollbar customization, selection colors |

### Animation & Interactivity
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Framer Motion** | 11 | Page transitions, staggered reveals, modal animations, hover effects |
| **GSAP** | 3.12 | Scroll-triggered animations and timeline sequences |
| **HTML5 Canvas** | — | Animated hero scene (stars, floating orbs, wireframe shapes) |

### State & Data
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Zustand** | 4.5 | Lightweight global state management (4 stores) |
| **React Hook Form** | 7 | Performant form handling with validation |
| **Zod** | 3 | Schema-based form validation |

### Authentication
| Technology | Version | Purpose |
|-----------|---------|---------|
| **NextAuth.js** | v5 beta | Authentication with Credentials, Google, and GitHub providers |

### Utilities
| Technology | Purpose |
|-----------|---------|
| **Lucide React** | Beautiful, consistent SVG icons |
| **clsx + tailwind-merge** | Conditional and conflict-free class name merging |
| **class-variance-authority** | Type-safe component variants (Button, Badge, etc.) |

### Fonts (Google Fonts)
| Font | Usage |
|------|-------|
| **Inter** | Body text, UI elements |
| **Syne** | Display headings, hero text |
| **JetBrains Mono** | Prices, dates, code snippets |

---

## 🚀 Getting Started

### What You Need
- **Node.js** version 18 or higher
- **npm** version 9 or higher (comes with Node.js)
- A **GitHub account** (optional — for OAuth login)

### Step 1: Clone the Repository

```bash
git clone https://github.com/Zaid-Faridi/Hack_Forge.git
cd Hack_Forge
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages (~280 packages). You may see some deprecation warnings — these are safe to ignore.

### Step 3: Set Up Environment Variables

Create a `.env.local` file in the project root:

```env
# Required — generate a random string for this
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=any-random-string-at-least-32-chars-long

# Optional — only needed if you want Google/GitHub login
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# API endpoint (for future backend integration)
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> **💡 Tip:** For local development, you only need `NEXTAUTH_URL` and `NEXTAUTH_SECRET`. The app works fine without OAuth credentials — it will use the email/password login instead.

### Step 4: Start the Development Server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser. The app uses Turbopack for fast compilation — first page load may take a few seconds, subsequent navigations are instant.

### Available Commands

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:3000 (with hot reload) |
| `npm run build` | Create optimized production build |
| `npm start` | Run the production build |
| `npm run lint` | Check code for common issues |
| `npm run type-check` | Verify TypeScript types are correct |

---

## 📁 Project Structure

Here's how the codebase is organized. Each folder has a clear responsibility:

```
src/
├── app/                          # 📄 Pages & Routing (Next.js App Router)
│   ├── (auth)/                   #    Auth pages (login, register, verify)
│   ├── (main)/                   #    Public pages (landing, explore, detail)
│   ├── (dashboard)/              #    Protected pages (participant, organizer)
│   ├── api/                      #    API routes (auth endpoints)
│   ├── layout.tsx                #    Root layout (fonts, metadata)
│   ├── globals.css               #    Global styles + Tailwind directives
│   ├── not-found.tsx             #    Custom 404 page
│   └── loading.tsx               #    Global loading spinner
│
├── components/                   # 🧩 Reusable Components
│   ├── ui/                       #    12 atoms: Button, Card, Badge, Input, Modal, etc.
│   ├── layout/                   #    Navbar, Footer, Sidebar, Cursor, PageTransition
│   ├── auth/                     #    Login/Register forms, role toggle, OAuth buttons
│   ├── landing/                  #    Hero, stats, featured hackathons, testimonials
│   ├── explore/                  #    Search, filters, 3D cards, grid
│   └── wizard/                   #    6-step creation wizard + live preview
│
├── hooks/                        # 🪝 7 Custom Hooks
│   ├── useMouseTilt.ts           #    Mouse-position 3D tilt for cards
│   ├── useSearch.ts              #    Debounced search (300ms delay)
│   ├── useScrollReveal.ts        #    Animate elements on scroll
│   └── ...                       #    useWindowSize, useMedia, etc.
│
├── stores/                       # 🗃️ 4 Zustand Stores
│   ├── authStore.ts              #    User session, role, auth status
│   ├── filterStore.ts            #    Explorer page filter state
│   ├── wizardStore.ts            #    Multi-step form data & navigation
│   └── uiStore.ts                #    Sidebar, cursor, modal state
│
├── lib/                          # 🔧 Utilities & Configuration
│   ├── animations/               #    Framer Motion variants + GSAP helpers
│   ├── auth/                     #    NextAuth.js configuration
│   ├── validations/              #    Zod schemas for form validation
│   └── utils/                    #    cn(), constants, formatters
│
├── styles/                       # 🎨 Additional CSS
│   └── glassmorphism.css         #    .glass-card styles
│
├── types/                        # 📝 TypeScript Interfaces
│   ├── hackathon.ts              #    Hackathon data shape
│   ├── user.ts                   #    User profile shape
│   └── next-auth.d.ts            #    NextAuth type augmentation
│
└── middleware.ts                 # 🛡️ Route protection (auth checks)
```

### Why This Structure?

- **Route Groups** `(auth)`, `(main)`, `(dashboard)` — each has its own layout (centered card, navbar+footer, sidebar) without affecting URLs
- **Component Categories** — atoms in `ui/`, feature components in their own folders
- **Colocation** — each page's loading state lives next to it (`explore/loading.tsx`)
- **Separation of Concerns** — stores, hooks, utils, and types are all in dedicated folders

---

## 🎯 How It Works

### User Flows

#### 1. Discovering a Hackathon (Participant)
```
Landing Page → Click "Explore" → Filter by tech domain/mode
→ Click a hackathon card → View details, timeline, prizes
→ Click "Register Now"
```

#### 2. Creating a Hackathon (Organizer)
```
Login as Organizer → Dashboard → Click "Create Hackathon"
→ Step 1: Name, tagline, mode, domains
→ Step 2: Dates, times, location
→ Step 3: Description, rules, team size
→ Step 4: Prize pool and placement prizes
→ Step 5: Cover image, logo, website URL
→ Step 6: Review everything → Publish
```

#### 3. Authentication
```
Click "Sign In" → Toggle between Participant/Organizer role
→ Login with email/password OR Google/GitHub
→ Redirected to role-specific dashboard
```

### State Management (Zustand)

The app uses 4 lightweight Zustand stores instead of Redux:

| Store | What It Manages | Example Usage |
|-------|----------------|---------------|
| `authStore` | Who is logged in and their role | Navbar shows different buttons based on auth state |
| `filterStore` | Active filters on the Explore page | Sidebar checkboxes ↔ card grid stay in sync |
| `wizardStore` | Current step and form data in the wizard | Navigate back/forward without losing data |
| `uiStore` | Sidebar collapsed state, modal visibility | Dashboard sidebar toggle |

### Animation System

| Type | Technology | Where It's Used |
|------|-----------|----------------|
| **Page transitions** | Framer Motion | Every route change fades/slides |
| **Staggered reveals** | Framer Motion | Card grids, stat numbers, testimonials |
| **3D card tilt** | Custom `useMouseTilt` hook | Hackathon cards on the Explore page |
| **Scroll animations** | GSAP ScrollTrigger | Elements animate as you scroll past them |
| **Hero background** | HTML5 Canvas | Floating orbs, stars, and wireframe shapes |
| **Count-up numbers** | Custom `CountUp` component | Stats bar (2,500+ hackathons, etc.) |

---

## 🎨 Design System

### Color Palette

The design uses a **dark navy base** with three accent colors:

| Color | Hex | Where It's Used |
|-------|-----|----------------|
| 🌑 Background | `#0a0f1e` | Page background |
| 🔵 Surface 1 | `#141b2d` | Card backgrounds |
| 🔷 Surface 2 | `#1e2840` | Elevated surfaces, tags |
| 🔷 **Cyan** | `#00e5ff` | Primary accent — buttons, links, participant features |
| 🔴 **Magenta** | `#ff0090` | Secondary accent — organizer features, highlights |
| 🟡 **Volt Yellow** | `#faff00` | Prize amounts, special badges, alerts |
| ⚪ Ink 100 | `#f0f4ff` | Primary text |
| 🔘 Ink 200 | `#b8c4e0` | Secondary text |
| 🔘 Ink 300 | `#6b7a99` | Muted text, placeholders |
| 🔘 Ink 400 | `#3a4560` | Borders, dividers |

### Glassmorphism Effect

All card surfaces use a shared `.glass-card` class that creates the frosted-glass look:

```css
.glass-card {
  background: rgba(20, 27, 45, 0.6);      /* semi-transparent dark */
  backdrop-filter: blur(16px);              /* frosted glass blur */
  border: 1px solid rgba(255,255,255,0.06); /* subtle white border */
  border-radius: 16px;                      /* rounded corners */
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);  /* depth shadow */
}

/* On hover — cyan glow appears */
.glass-card:hover {
  border-color: rgba(0, 229, 255, 0.2);
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.08);
}
```

---

## 🗺 Routes Reference

| Route | Page | Layout | Auth Required |
|-------|------|--------|:---:|
| `/` | Landing page | Navbar + Footer | ❌ |
| `/explore` | Browse hackathons | Navbar + Footer | ❌ |
| `/hackathon/[id]` | Event details | Navbar + Footer | ❌ |
| `/hall-of-fame` | Past winners | Navbar + Footer | ❌ |
| `/login` | Sign in | Centered card | ❌ |
| `/register/participant` | Sign up (participant) | Centered card | ❌ |
| `/register/organizer` | Sign up (organizer) | Centered card | ❌ |
| `/verify` | Email verification | Centered card | ❌ |
| `/forgot-password` | Password reset | Centered card | ❌ |
| `/dashboard/participant` | Participant home | Sidebar | ✅ |
| `/dashboard/organizer` | Organizer home | Sidebar | ✅ |
| `/dashboard/organizer/create` | Create hackathon | Sidebar | ✅ |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute

1. **Fork** the repository
2. **Create** a branch: `git checkout -b feat/your-feature`
3. **Make** your changes
4. **Commit**: `git commit -m "feat: add your feature"`
5. **Push**: `git push origin feat/your-feature`
6. **Open** a Pull Request

### Code Conventions

- Use **TypeScript** for all files (`.ts` / `.tsx`)
- Use **Tailwind CSS** classes for styling — no inline styles
- Mark components as `'use client'` only when they need interactivity (event handlers, hooks, state)
- Follow the existing folder structure when adding new components
- Use **Zustand** for shared state, **useState** for local component state

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it.

---

<div align="center">

**Built with ⚡ by [Zaid Faridi](https://github.com/Zaid-Faridi)**

Next.js · TypeScript · Tailwind CSS · Framer Motion · Zustand

⭐ Star this repo if you found it useful!

</div>
]]>
