import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutBody from "@/components/about/AboutBody";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aryan Jaiswal — a full-stack developer treating engineering as a craft. Story, values and the way I work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="02 / 06"
        eyebrow="About"
        titleLines={["The", "Person"]}
        description="Engineer, designer-at-heart, and your partner in building web products that last."
      />
      <AboutBody />
      <ExperienceTimeline />
      <CTASection />
    </>
  );
}
