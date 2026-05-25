"use client";

import { socials } from "@/lib/content";
import MaskText from "@/components/ui/MaskText";
import Magnetic from "@/components/ui/Magnetic";
import TextScramble from "@/components/ui/TextScramble";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink-2 py-24 text-bone md:py-36">
      <div className="container-x">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-vermillion" />
          <TextScramble
            text="/ 05 — CONTACT"
            className="font-mono text-[11px] uppercase tracking-mono text-bone/50"
          />
        </div>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          {/* left: statement */}
          <div className="min-w-0">
            <h2 className="font-display text-[clamp(1.5rem,6.5vw,5.5rem)] font-extrabold uppercase leading-[0.85] tracking-tight break-words">
              <MaskText lines={["Let's build"]} />
              <MaskText lines={["something"]} className="text-vermillion" delay={0.08} />
              <MaskText lines={["great."]} delay={0.16} />
            </h2>

            <p className="mt-8 max-w-md text-pretty leading-relaxed text-bone/60">
              Whether it&apos;s a product to build, a team to strengthen or just an idea
              to pressure-test — my inbox is open.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {socials.map((s) => (
                <Magnetic key={s.label} strength={0.4}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    data-cursor=""
                    className="link-underline font-mono text-[11px] uppercase tracking-mono text-bone/70"
                  >
                    {s.label}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* right: form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
