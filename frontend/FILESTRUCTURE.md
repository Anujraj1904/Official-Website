# 🧠 Project Structure Guide

This document explains the folder and file structure for the React frontend project.  
It follows a **modular**, **scalable**, and **maintainable** architecture — perfect for Tailwind + Framer Motion based apps.

---

## 📂 `src/` — Root Folder

This is where **all your app logic**, **components**, **hooks**, and **assets** live.

---

## 📁 `components/`

Contains all **reusable UI blocks** — from small buttons to full-page sections.

Organize components **by type** or **by landing page section**.

---

### 🔹 `components/ui/` — 🧱 Atomic-Level UI Primitives

Low-level reusable building blocks used across the entire site.

**Typical files:**
- `Button.jsx` — Custom button component with Tailwind variants (`primary`, `secondary`, `ghost`).
- `Icon.jsx` — Wrapper for Lucide or custom SVG icons.
- `Card.jsx` — Basic card layout (shadow, rounded corners).
- `Modal.jsx` — Generic modal with backdrop and close handler.
- `Badge.jsx` — Small label or tag element.
- `Input.jsx` — Generic text/email input with validation styles.
- `Heading.jsx` — Consistent typography for H1/H2/H3 variants.

**Purpose:**  
Keep all generic UI components in one place so you don’t repeat styles across sections.

---

### 🔹 `components/layout/` — 🧭 App-Wide Structure

Defines app-wide structure like header, footer, and layout wrappers.

**Typical files:**
- `Header.jsx` — Top navigation bar (logo, nav links, CTA button).
- `Footer.jsx` — Global footer (contact info, socials, copyright).
- `NavMenu.jsx` — Mobile navigation dropdown or sidebar.
- `PageContainer.jsx` — Wrapper that applies consistent padding, max-width, and backgrounds.

**Purpose:**  
Controls **layout and navigation**, not page content.

---

### 🔹 `components/hero/` — 🎯 Landing Section

Used for the hero section ("Crafting Brands and Experiences").

**Files:**
- `Hero.jsx` — Main hero block with headline, CTA, stats, and background.
- `HeroStats.jsx` — Displays key numbers (e.g., “98% satisfaction”).
- `SocialBadgeRow.jsx` — Social icons (LinkedIn, Dribbble, etc).

**Purpose:**  
Create a powerful first impression with motion effects and brand visuals.

---

### 🔹 `components/stats/` — 📊 KPI Display

**Files:**
- `StatsGroup.jsx` — Group of statistics.
- `StatItem.jsx` — Single stat with animated counter and label.

**Purpose:**  
Display business metrics flexibly (used in hero or services).

---

### 🔹 `components/featured/` & `components/works/` — 💼 Portfolio

Showcase featured projects or case studies.

**Files:**
- `FeaturedWorksGrid.jsx` — Displays multiple work cards in a grid.
- `WorkCard.jsx` — Single project card (image + title + description).
- `WorkDetailsModal.jsx` *(optional)* — Popup with project details.

**Purpose:**  
Highlight work elegantly with images and animations.

---

### 🔹 `components/services/` — ⚙️ Service Offerings

Displays available services such as Branding, Design, Code, Growth, Automate.

**Files:**
- `Services.jsx` — Renders all service categories.
- `ServiceItem.jsx` — Single service block with icon and description.
- `ServicesList.jsx` *(optional)* — Handles layout or filtering.

**Purpose:**  
Show what your company offers clearly and modularly.

---

### 🔹 `components/pricing/` — 💰 Pricing Plans

Handles pricing and subscription tiers.

**Files:**
- `PricingCards.jsx` — Grid of plans (Free, Basic, Pro, Agency).
- `PricingCard.jsx` — Single plan card.
- `PricingToggle.jsx` *(optional)* — Switch between monthly/yearly pricing.

**Purpose:**  
Communicate plans clearly and drive conversion.

---

### 🔹 `components/faq/` — ❓ Ask Us Anything

Displays FAQ section with collapsible items.

**Files:**
- `FaqAccordion.jsx` — Container for all FAQ items.
- `FaqItem.jsx` — Single Q/A component (accessible accordion).

**Purpose:**  
Answer common questions and improve UX/SEO.

---

### 🔹 `components/testimonials/` — 💬 Client Feedback

Displays testimonials or client logos.

**Files:**
- `Testimonials.jsx` — Parent component for all reviews.
- `TestimonialCard.jsx` — Single review (quote, avatar, company).
- `LogoStrip.jsx` *(optional)* — Row of client logos.

**Purpose:**  
Show credibility and trust through client feedback.

---

### 🔹 `components/articles/` — 📰 Blog & News Section

Show recent blog posts or case studies.

**Files:**
- `ArticlesPreview.jsx` — Grid/list of article previews.
- `ArticleCard.jsx` — Single article preview (image + excerpt).
- `ArticleTag.jsx` *(optional)* — Blog category or tag badge.

**Purpose:**  
Keep the site dynamic and informative.

---

### 🔹 `components/contact/` — 🚀 Call-To-Action

Used to encourage user engagement or lead capture.

**Files:**
- `ContactCta.jsx` — “Have a Cool Idea? Let’s Collaborate” block.
- `CtaButton.jsx` *(optional)* — Reusable CTA button component.

**Purpose:**  
Drive users to start a project, sign up, or contact you.

---

### 🔹 `components/images/` — 🖼️ Image Utilities

Handle optimized or static image logic.

**Files:**
- `OptimizedImage.jsx` — Lazy-loading + placeholders.
- `Logo.jsx` — Site logo component.
- *(Optional)* loaders or SVG icons.

**Purpose:**  
Centralize and optimize image handling.

---

## 📁 `pages/` — 🧩 Page Containers

Each file here is a full page view that assembles components from `/components`.

**Files:**
- `Home.jsx` — The landing page combining all sections.
- `About.jsx`, `Contact.jsx` *(optional)* — Additional pages if needed.

**Purpose:**  
Defines page-level structure and imports reusable sections.

---

## 📁 `hooks/` — ⚙️ Custom React Hooks

Reusable logic and browser behavior handlers.

**Examples:**
- `useScrollToTop.js` — Scrolls to top on route change.
- `useIntersection.js` — Detects when an element enters viewport.
- `useForm.js` — Manages input states and validation.
- `useTheme.js` — Toggles dark/light modes.

**Purpose:**  
Encapsulate reusable stateful logic separate from UI.

---

## 📁 `utils/` — 🧮 Helper Functions & Config

Helper and configuration utilities.

**Examples:**
- `formatPrice.js` — Format numbers as currency.
- `scrollToSection.js` — Smooth scrolling utility.
- `constants.js` — Define static values (colors, breakpoints).
- `analytics.js` — Analytics tracking setup.
- `api.js` — Centralized API configuration.

**Purpose:**  
Keep non-UI helper logic modular and maintainable.

---

## 📁 `styles/` — 🎨 Global Styles & Tokens

Tailwind base and any additional global CSS or tokens.

**Files:**
- `globals.css` — Imports Tailwind base, components, utilities.
- `typography.css` — Custom text styles (optional).
- `animations.css` — CSS keyframes and transitions.
- `tokens.js` — Exports design constants (colors, fonts, spacing).

**Purpose:**  
Centralize design tokens and global styling configuration.

---