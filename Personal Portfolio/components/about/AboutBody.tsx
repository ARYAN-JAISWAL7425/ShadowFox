"use client";

import { values, site, stats } from "@/lib/content";
import Portrait from "@/components/ui/Portrait";
import Reveal from "@/components/ui/Reveal";
import SplitWords from "@/components/ui/SplitWords";
import CountUp from "@/components/ui/CountUp";

export default function AboutBody() {
  return (
    <>
      {/* portrait + story */}
      <section className="bg-bone dark:bg-night pb-24">
        <div className="container-x grid items-start gap-14 md:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <div className="md:sticky md:top-28">
              <Portrait className="mx-auto w-[min(78vw,360px)]" priority />
              <div className="mt-10 grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-4xl font-extrabold tracking-tight">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </div>
                    <p className="mt-2 text-sm text-muted dark:text-bone/55">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <h2 className="font-display text-[clamp(1.7rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-tight">
              <SplitWords
                text="I'm Aryan — a VIT Bhopal AIML student building my path into full-stack and GenAI engineering."
                highlight={["full-stack", "GenAI"]}
              />
            </h2>
            <div className="mt-8 space-y-5 text-pretty leading-relaxed text-muted dark:text-bone/55">
              <Reveal delay={0.05}>
                <p>
                  This site is my digital home. It holds the work I&apos;m proud of, the projects
                  I&apos;m building right now, and the experiments that are pushing me toward AI
                  engineering.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  I&apos;m passionate about products that blend solid software engineering with
                  applied AI — SaaS workflows, AI agents, LLM apps, RAG systems, and automation
                  that saves people time.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  I learn by shipping, writing, and sharing. Based in {site.location}, I&apos;m
                  open to internships, collaborations, and builder communities that care about
                  craft.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="bg-bone-2 dark:bg-night-2 py-24 md:py-32">
        <div className="container-x">
          <span className="eyebrow">/ What I value</span>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/12 dark:border-bone/12 bg-ink/12 dark:bg-bone/12 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.08}>
                <div className="flex h-full flex-col gap-3 bg-bone-2 dark:bg-night-2 p-8 md:p-10">
                  <span className="font-mono text-xs text-vermillion">0{i + 1}</span>
                  <h3 className="font-display text-2xl font-bold tracking-tight">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted dark:text-bone/55">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
