import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutBody from "@/components/about/AboutBody";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aryan Jaiswal — VIT Bhopal AIML student documenting the journey into full-stack and GenAI engineering.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="02 / 06"
        eyebrow="About"
        titleLines={["The", "Person"]}
        description="Student, builder, and storyteller focused on the path into full-stack and AI engineering."
      />
      <AboutBody />
      <ExperienceTimeline />
      <CTASection />
    </>
  );
}
