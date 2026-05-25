"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type ThemeFx = {
  id: number;
  x: number;
  y: number;
  to: "light" | "dark";
  /** The OUTGOING theme's base background colour — the curtain that drains away. */
  fromColor: string;
};

/**
 * Theme-toggle transition.
 *
 * On toggle we cover the screen with a disc of the *outgoing* theme colour and
 * implode it toward the toggle button, revealing the already-swapped (real)
 * page beneath — so there is no content "pop". A single vermillion lightning
 * strike (bolts + bloom + ring) fires from the button to sell the drama.
 *
 * Reduced-motion users never reach here — the provider does a clean swap instead.
 */
export default function ThemeTransition({
  fx,
  onDone,
}: {
  fx: ThemeFx | null;
  onDone: () => void;
}) {
  return (
    <AnimatePresence>{fx && <Burst key={fx.id} fx={fx} onDone={onDone} />}</AnimatePresence>
  );
}

/** Jagged lightning polyline radiating from (sx,sy) along `angleDeg` for `len`px. */
function makeBolt(
  sx: number,
  sy: number,
  angleDeg: number,
  len: number,
  segs: number,
  jitter: number,
) {
  const rad = (angleDeg * Math.PI) / 180;
  const px = Math.cos(rad);
  const py = Math.sin(rad);
  const nx = Math.cos(rad + Math.PI / 2);
  const ny = Math.sin(rad + Math.PI / 2);
  const pts: Array<[number, number]> = [[sx, sy]];
  for (let i = 1; i <= segs; i++) {
    const t = i / segs;
    // taper the zigzag toward the tip so it reads as a point of impact
    const off = (Math.random() - 0.5) * jitter * (1 - t * 0.7);
    pts.push([sx + px * len * t + nx * off, sy + py * len * t + ny * off]);
  }
  return "M" + pts.map((p) => `${p[0].toFixed(0)},${p[1].toFixed(0)}`).join(" L");
}

function Burst({ fx, onDone }: { fx: ThemeFx; onDone: () => void }) {
  const { x, y, fromColor } = fx;

  const { D, radius, bolts, vw, vh } = useMemo(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    // radius that reaches the farthest corner from the toggle → full cover at scale 1
    const radius = Math.hypot(Math.max(x, vw - x), Math.max(y, vh - y));
    const diag = Math.hypot(vw, vh);
    // bolts fan out across the canvas, biased away from the (top-right) button
    const bolts = [
      makeBolt(x, y, 132, diag * 0.95, 7, 70),
      makeBolt(x, y, 100, diag * 0.78, 6, 60),
      makeBolt(x, y, 168, diag * 0.62, 6, 55),
      makeBolt(x, y, 150, diag * 0.34, 4, 34), // short branch
    ];
    return { D: radius * 2, radius, bolts, vw, vh };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fx.id]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[120] overflow-hidden"
      aria-hidden
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.12 } }}
    >
      {/* Outgoing-theme curtain imploding toward the toggle, revealing the new page */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: D,
          height: D,
          left: x - radius,
          top: y - radius,
          backgroundColor: fromColor,
          willChange: "transform",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
        transition={{ duration: 0.72, ease: [0.7, 0, 0.25, 1] }}
        onAnimationComplete={onDone}
      />

      {/* Vermillion flash bloom from the strike point — single pulse, photosensitivity-safe */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${x}px ${y}px, rgba(242,58,29,0.5), rgba(255,138,110,0.16) 38%, rgba(242,58,29,0) 62%)`,
          willChange: "opacity",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.95, 0] }}
        transition={{ duration: 0.5, ease: "easeOut", times: [0, 0.16, 1] }}
      />

      {/* Lightning bolts */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${vw} ${vh}`}
        fill="none"
        style={{ filter: "drop-shadow(0 0 7px rgba(242,58,29,0.65))" }}
      >
        {bolts.map((d, i) => {
          const delay = i * 0.045;
          return (
            <g key={i}>
              {/* soft outer glow */}
              <motion.path
                d={d}
                stroke="#f23a1d"
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.55 }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.55, 0.4, 0] }}
                transition={{
                  pathLength: { duration: 0.16, ease: "easeOut", delay },
                  opacity: { duration: 0.5, times: [0, 0.12, 0.4, 1], delay },
                }}
              />
              {/* hot core */}
              <motion.path
                d={d}
                stroke="#fff1ec"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0.9, 0] }}
                transition={{
                  pathLength: { duration: 0.14, ease: "easeOut", delay },
                  opacity: { duration: 0.45, times: [0, 0.1, 0.4, 1], delay },
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Shock ring pulsing out from the toggle */}
      <motion.div
        className="absolute rounded-full border-2"
        style={{
          left: x,
          top: y,
          width: 60,
          height: 60,
          marginLeft: -30,
          marginTop: -30,
          borderColor: "#f23a1d",
          willChange: "transform, opacity",
        }}
        initial={{ scale: 0.15, opacity: 0.8 }}
        animate={{ scale: (radius * 1.5) / 30, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.div>
  );
}
