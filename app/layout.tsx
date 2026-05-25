import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { site, siteUrl } from "@/lib/content";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { ThemeProvider, themeNoFlashScript } from "@/components/providers/ThemeProvider";
import Cursor from "@/components/cursor/Cursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/intro/Intro";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.intro,
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    site.name,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.intro,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.intro,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ECE7DD",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body className="grain antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeNoFlashScript }} />
        <ThemeProvider>
          <Intro />
          <SmoothScroll>
            <Cursor />
            <ScrollProgress />
            <Nav />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
