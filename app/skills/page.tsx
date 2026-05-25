import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SkillsBody from "@/components/skills/SkillsBody";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The stack I build with — React, Next.js, TypeScript, Node.js, PostgreSQL, AWS, Docker and more.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        index="04 / 06"
        eyebrow="Skills & Stack"
        titleLines={["The", "Toolkit"]}
        description="The technologies I reach for to take products from idea to production — and keep them fast."
      />
      <SkillsBody />
      <CTASection />
    </>
  );
}
