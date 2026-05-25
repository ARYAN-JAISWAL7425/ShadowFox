import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import ExperienceExtras from "@/components/experience/ExperienceExtras";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Six years building for the web — roles, client work, certifications and achievements.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        index="05 / 06"
        eyebrow="Experience"
        titleLines={["The", "Track Record"]}
        description="Where I've worked, what I've shipped, and the milestones along the way."
      />
      <ExperienceTimeline />
      <ExperienceExtras />
      <CTASection />
    </>
  );
}
