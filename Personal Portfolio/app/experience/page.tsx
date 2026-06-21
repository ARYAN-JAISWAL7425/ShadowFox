import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import ExperienceExtras from "@/components/experience/ExperienceExtras";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "The journey so far — learning milestones, projects, and GenAI experiments.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        index="05 / 06"
        eyebrow="Experience"
        titleLines={["The", "Track Record"]}
        description="Milestones, experiments, and the work that shaped the journey."
      />
      <ExperienceTimeline />
      <ExperienceExtras />
      <CTASection />
    </>
  );
}
