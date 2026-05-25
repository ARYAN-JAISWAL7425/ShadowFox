"use client";

import Link from "next/link";
import { projects } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

export default function WorkGrid() {
  return (
    <section className="bg-bone dark:bg-night pb-28">
      <div className="container-x grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08} className={cn(i % 2 === 1 && "md:mt-20")}>
            <Link href={p.href ?? "#"} data-cursor="view" className="group block">
              <TiltCard className="overflow-hidden rounded-2xl border border-ink/12 dark:border-bone/12">
                <div
                  className={cn(
                    "relative flex aspect-[4/3] flex-col justify-between bg-gradient-to-br p-7",
                    p.gradient
                  )}
                >
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-mono text-bone/85">
                    <span>{p.index}</span>
                    <span>{p.year}</span>
                  </div>
                  <div style={{ transform: "translateZ(40px)" }}>
                    <h3 className="font-display text-4xl font-extrabold tracking-tight text-bone md:text-5xl">
                      {p.title}
                    </h3>
                  </div>
                  <span className="absolute right-6 top-1/2 text-2xl text-bone opacity-0 transition-all duration-500 group-hover:right-5 group-hover:opacity-100">
                    ↗
                  </span>
                </div>
              </TiltCard>

              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-mono text-muted dark:text-bone/55">
                    {p.category}
                  </p>
                  <p className="mt-2 max-w-md text-pretty text-ink/80 dark:text-bone/80">{p.blurb}</p>
                </div>
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-mono text-ink/60 dark:text-bone/65">
                  {p.role}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-ink/15 dark:border-bone/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink/70 dark:text-bone/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
