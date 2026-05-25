"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import ThemeTransition, { type ThemeFx } from "@/components/providers/ThemeTransition";

type Theme = "light" | "dark";

type ThemeCtx = {
  theme: Theme;
  /** `origin` (toggle button centre) drives the reveal/lightning; omit for an instant swap. */
  toggle: (origin?: { x: number; y: number }) => void;
  setTheme: (t: Theme) => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeCtx | null>(null);

/** Outgoing-theme base background — the curtain colour for the transition. */
const BG: Record<Theme, string> = { light: "#ece7dd", dark: "#14110c" };

/** Inline script — runs before paint so the right theme shows with no flash. */
export const themeNoFlashScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.style.colorScheme='light';}}catch(e){}})();`;

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", t === "dark");
  root.style.colorScheme = t;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [fx, setFx] = useState<ThemeFx | null>(null);

  // On mount, adopt whatever the no-flash script already applied.
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setThemeState(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem("theme", t);
    } catch {
      /* storage unavailable — non-fatal */
    }
    applyTheme(t);
  }, []);

  // DOM-based so it's correct even before React state has hydrated.
  const toggle = useCallback(
    (origin?: { x: number; y: number }) => {
      const isDark = document.documentElement.classList.contains("dark");
      const next: Theme = isDark ? "light" : "dark";

      // No animation: reduced-motion, or no click origin (e.g. keyboard).
      if (!origin || prefersReducedMotion()) {
        setTheme(next);
        return;
      }

      // Freeze the colour transition so the curtain swap underneath is crisp.
      document.documentElement.classList.add("theme-anim");
      setFx({ id: Date.now(), x: origin.x, y: origin.y, to: next, fromColor: BG[isDark ? "dark" : "light"] });
    },
    [setTheme],
  );

  // With the curtain covering the screen, swap the real theme one frame later.
  useEffect(() => {
    if (!fx) return;
    const raf = requestAnimationFrame(() => setTheme(fx.to));
    return () => cancelAnimationFrame(raf);
  }, [fx, setTheme]);

  const endFx = useCallback(() => {
    setFx(null);
    document.documentElement.classList.remove("theme-anim");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme, mounted }}>
      {children}
      <ThemeTransition fx={fx} onDone={endFx} />
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
