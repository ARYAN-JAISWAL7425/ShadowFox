/* ============================================================
   SINGLE SOURCE OF CONTENT
   Edit everything about the site from this one file.
   Replace the placeholder copy / links with your real details.
   ============================================================ */

export const site = {
  name: "Aryan Jaiswal",
  firstName: "Aryan",
  lastName: "Jaiswal",
  role: "Full-Stack Web Developer",
  // Used for SEO / metadata base. Change to your real domain on deploy.
  url: "https://aryanjaiswal.dev",
  email: "aryanofficial7425@gmail.com",
  location: "Mumbai, India",
  availability: "Available for select projects — 2026",
  tagline:
    "I design and build fast, considered web products — from first idea to production deploy.",
  intro:
    "Full-stack developer focused on React, Next.js and TypeScript. I help startups and teams turn ambitious ideas into polished, performant products that ship.",
};

/**
 * Canonical site URL used for SEO / Open Graph / sitemap / robots.
 * On Vercel this auto-resolves to the real production domain; set
 * NEXT_PUBLIC_SITE_URL to override; otherwise falls back to site.url.
 * (VERCEL_* env vars are server-only, so on the client this is site.url —
 * which is fine, since absolute URLs are only needed server-side.)
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : site.url);

export const socials = [
  {
    label: "GitHub",
    handle: "@ARYAN-JAISWAL7425",
    href: "https://github.com/ARYAN-JAISWAL7425",
  },
  {
    label: "LinkedIn",
    handle: "in/aryan-jaiswal",
    href: "https://www.linkedin.com/in/aryan-jaiswal-a87b5335a",
  },
  {
    label: "Email",
    handle: "aryanofficial7425@gmail.com",
    href: "mailto:aryanofficial7425@gmail.com",
  },
];

export const nav = [
  { label: "Work", href: "/work", index: "01" },
  { label: "About", href: "/about", index: "02" },
  { label: "Services", href: "/services", index: "03" },
  { label: "Skills", href: "/skills", index: "04" },
  { label: "Experience", href: "/experience", index: "05" },
  { label: "Contact", href: "/contact", index: "06" },
];

export const stats = [
  { value: 6, suffix: "+", label: "Years building for the web" },
  { value: 48, suffix: "+", label: "Products shipped to production" },
  { value: 35, suffix: "+", label: "Clients & teams partnered with" },
  { value: 4.9, suffix: "/5", label: "Average client rating", decimals: 1 },
];

export const capabilities = [
  {
    no: "01",
    title: "Product Engineering",
    body: "End-to-end web apps in React, Next.js & TypeScript — architected to scale and built to last.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    no: "02",
    title: "Backend & APIs",
    body: "Robust services, auth, and data layers with Node.js, PostgreSQL and clean, typed API contracts.",
    tags: ["Node.js", "PostgreSQL", "REST / GraphQL"],
  },
  {
    no: "03",
    title: "Interface & Motion",
    body: "Distinctive, accessible interfaces with considered motion design that elevates the experience.",
    tags: ["UI/UX", "Framer Motion", "Design Systems"],
  },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  role: string;
  stack: string[];
  gradient: string; // tailwind classes for thumbnail backdrop
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "fintrail",
    index: "01",
    title: "Fintrail",
    category: "Fintech · SaaS Platform",
    year: "2025",
    blurb:
      "A real-time spend analytics platform giving finance teams a live, beautiful view of every transaction.",
    role: "Lead Full-Stack Engineer",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "tRPC", "Stripe"],
    gradient: "from-[#F23A1D] via-[#FF8A6E] to-[#1b1a17]",
    href: "#",
  },
  {
    slug: "orbit-hr",
    index: "02",
    title: "Orbit HR",
    category: "B2B · Dashboard",
    year: "2024",
    blurb:
      "People-ops dashboard unifying onboarding, payroll and reviews into one calm, fast workspace.",
    role: "Full-Stack Developer",
    stack: ["React", "Node.js", "GraphQL", "Redis", "AWS"],
    gradient: "from-[#2b2a25] via-[#6F6A60] to-[#0e0e0c]",
    href: "#",
  },
  {
    slug: "caretake",
    index: "03",
    title: "Caretake",
    category: "Healthtech · MVP",
    year: "2024",
    blurb:
      "A 0→1 patient-care MVP taken from Figma to launched product in eight focused weeks.",
    role: "Founding Engineer (Contract)",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "Vercel"],
    gradient: "from-[#F23A1D] via-[#7a2417] to-[#0e0e0c]",
    href: "#",
  },
  {
    slug: "meridian",
    index: "04",
    title: "Meridian",
    category: "Marketing · Web Experience",
    year: "2023",
    blurb:
      "An award-worthy product site with WebGL hero, smooth scroll and a headless CMS for the team.",
    role: "Frontend Lead",
    stack: ["Next.js", "Three.js", "GSAP", "Sanity"],
    gradient: "from-[#3a3933] via-[#8A8478] to-[#131210]",
    href: "#",
  },
];

export const services = [
  {
    no: "01",
    title: "Full-Stack Development",
    body: "Complete web products built end-to-end — frontend, backend, database and deployment.",
  },
  {
    no: "02",
    title: "SaaS Development",
    body: "Multi-tenant platforms with auth, billing, dashboards and the architecture to scale.",
  },
  {
    no: "03",
    title: "Web Application Development",
    body: "Complex, interactive applications with real-time data and refined, accessible interfaces.",
  },
  {
    no: "04",
    title: "API Development",
    body: "Typed, documented and secure REST & GraphQL APIs that your team will love to build on.",
  },
  {
    no: "05",
    title: "Database Design",
    body: "Schema design, modelling and optimisation across PostgreSQL, MongoDB and Redis.",
  },
  {
    no: "06",
    title: "Performance Optimization",
    body: "Audits and engineering work that make existing products measurably faster and lighter.",
  },
  {
    no: "07",
    title: "Startup MVP Development",
    body: "Idea to launched MVP, fast — pragmatic engineering that gets you to market and learning.",
  },
  {
    no: "08",
    title: "Technical Consulting",
    body: "Architecture reviews, stack decisions and hands-on guidance for product and engineering teams.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "tRPC"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "AWS", "Vercel", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2023 — Now",
    role: "Senior Full-Stack Developer",
    company: "Independent / Freelance",
    summary:
      "Partnering with startups and product teams to design and ship SaaS platforms, dashboards and MVPs end-to-end.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    period: "2021 — 2023",
    role: "Full-Stack Engineer",
    company: "Northbeam Studio",
    summary:
      "Built and scaled client web applications, led frontend architecture and mentored junior engineers.",
    tags: ["React", "Node.js", "GraphQL"],
  },
  {
    period: "2019 — 2021",
    role: "Frontend Developer",
    company: "Pixelhaus",
    summary:
      "Crafted marketing sites and interactive web experiences with a strong focus on motion and performance.",
    tags: ["JavaScript", "GSAP", "CMS"],
  },
];

export const certifications = [
  { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2024" },
  { title: "Professional Scrum Developer", issuer: "Scrum.org", year: "2023" },
  { title: "Meta Front-End Developer", issuer: "Meta / Coursera", year: "2022" },
];

export const achievements = [
  "Shipped 48+ production web products across fintech, healthtech and B2B SaaS.",
  "Cut average page load times by 60% on a flagship client platform.",
  "Mentored 8 junior developers into confident, shipping engineers.",
  "Open-source contributor — components, dev tooling and docs.",
];

export const values = [
  {
    title: "Ship with intent",
    body: "Every decision serves the product and the people using it — no busywork, no bloat.",
  },
  {
    title: "Craft is the detail",
    body: "Performance, accessibility and motion aren't extras; they're what separates good from great.",
  },
  {
    title: "Clarity over cleverness",
    body: "Readable code, honest communication and architecture the next developer will thank you for.",
  },
  {
    title: "Partner, not vendor",
    body: "I care about your outcomes — I'll push back, propose, and own the result with you.",
  },
];
