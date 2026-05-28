/* ============================================================
   SINGLE SOURCE OF CONTENT
   Edit everything about the site from this one file.
   Replace the placeholder copy / links with your real details.
   ============================================================ */

export const site = {
  name: "Aryan Jaiswal",
  firstName: "Aryan",
  lastName: "Jaiswal",
  role: "GenAI & Full-Stack Developer",
  // Used for SEO / metadata base. Change to your real domain on deploy.
  url: "https://aryanjaiswal.dev",
  email: "aryanofficial7425@gmail.com",
  location: "Bhopal, India",
  availability: "VIT Bhopal B.Tech AIML student — open to internships and collaborations (2026)",
  tagline:
    "My digital home: a living log of my story, my builds, and my path into full-stack + AI engineering.",
  intro:
    "B.Tech AIML student at VIT Bhopal learning full-stack and GenAI engineering. I build small products, prototype AI systems, and document the journey end to end.",
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
  { label: "Focus", href: "/services", index: "03" },
  { label: "Skills", href: "/skills", index: "04" },
  { label: "Experience", href: "/experience", index: "05" },
  { label: "Contact", href: "/contact", index: "06" },
];

export const stats = [
  { value: 15, suffix: "+", label: "Projects built" },
  { value: 2, suffix: "+", label: "Years learning full-stack" },
  { value: 6, suffix: "+", label: "AI prototypes shipped" },
  { value: 3, suffix: "+", label: "Hackathons joined" },
];

export const capabilities = [
  {
    no: "01",
    title: "Full-Stack Foundations",
    body: "Building modern web apps from UI to API — shipping clean, fast experiences with solid architecture.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    no: "02",
    title: "GenAI Engineering Path",
    body: "Exploring AI agents, LLM apps, and RAG systems with an emphasis on practical product use cases.",
    tags: ["LLM Apps", "AI Agents", "RAG"],
  },
  {
    no: "03",
    title: "Product Craft",
    body: "Design, storytelling, and shipping discipline — so the work feels intentional and memorable.",
    tags: ["UI/UX", "Motion", "Product Story"],
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
    title: "Full-Stack Builds",
    body: "React, Next.js, APIs, databases, and deployment — the full loop from idea to shipped app.",
  },
  {
    no: "02",
    title: "SaaS Thinking",
    body: "Exploring SaaS patterns: auth, billing, dashboards, and the foundations for scalable products.",
  },
  {
    no: "03",
    title: "GenAI Experiments",
    body: "AI agents, LLM apps, and workflow automation prototypes with real product intent.",
  },
  {
    no: "04",
    title: "RAG & Retrieval",
    body: "Chunking, embeddings, vector search, and retrieval patterns for useful AI experiences.",
  },
  {
    no: "05",
    title: "Automation & Agents",
    body: "Building small systems that remove friction — scripts, bots, and reliable workflows.",
  },
  {
    no: "06",
    title: "Modern Web Craft",
    body: "Motion, performance, and accessibility — the details that make experiences feel premium.",
  },
  {
    no: "07",
    title: "Product Mindset",
    body: "Turning messy ideas into clear scopes, usable flows, and steady iterations.",
  },
  {
    no: "08",
    title: "Open Source + Learning",
    body: "Sharing what I learn, documenting in public, and contributing where I can.",
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
    title: "AI & GenAI",
    items: ["Python", "LLM APIs", "RAG", "Vector Databases", "AI Agents"],
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
    period: "2024 — Now",
    role: "B.Tech AIML Student",
    company: "VIT Bhopal University",
    summary:
      "Building a foundation in AI/ML while shipping full-stack projects and documenting the learning path in public.",
    tags: ["AIML", "Full-Stack", "Projects"],
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack Learning Sprint",
    company: "Self-directed",
    summary:
      "Focused on React, Next.js, APIs, and databases — building small products to learn by shipping.",
    tags: ["React", "Next.js", "APIs"],
  },
  {
    period: "2022 — 2023",
    role: "Programming Foundations",
    company: "Curiosity-driven",
    summary:
      "Learned core programming concepts and built early web experiments and automation scripts.",
    tags: ["JavaScript", "HTML/CSS", "Automation"],
  },
];

export const certifications = [
  { title: "B.Tech AIML (In progress)", issuer: "VIT Bhopal University", year: "Present" },
  { title: "Full-Stack + GenAI Learning Path", issuer: "Self-directed", year: "Ongoing" },
  { title: "Hackathons & Builder Events", issuer: "Community", year: "Ongoing" },
];

export const achievements = [
  "Built 15+ projects across full-stack and early-stage AI experiments.",
  "Prototyped 6 GenAI ideas spanning agents, chat workflows, and RAG apps.",
  "Active in hackathons and builder communities — learning by shipping.",
  "Documenting the journey publicly to stay consistent and accountable.",
];

export const values = [
  {
    title: "Build in public",
    body: "Learning sticks when it's shared — progress, mistakes, and insights included.",
  },
  {
    title: "Story over hype",
    body: "I care about authentic progress more than inflated claims or empty buzzwords.",
  },
  {
    title: "Craft the fundamentals",
    body: "Strong basics in architecture, performance, and UX create the freedom to experiment.",
  },
  {
    title: "Stay curious",
    body: "I follow the most interesting problems — SaaS, automation, agents, and applied AI.",
  },
];
