import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SkillsBody from "@/components/skills/SkillsBody";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The toolkit behind my full-stack and GenAI journey — web, backend, data, and AI building blocks.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        index="04 / 06"
        eyebrow="Skills & Stack"
        titleLines={["The", "Toolkit"]}
        description="The technologies I use to learn, build, and ship across full-stack and AI."
      />
      <SkillsBody />
      <CTASection />
    </>
  );
}
