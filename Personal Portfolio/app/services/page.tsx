import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServicesBody from "@/components/services/ServicesBody";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Focus",
  description:
    "Focus areas: full-stack builds, GenAI experiments, RAG systems, automation, and modern web craft.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="03 / 06"
        eyebrow="Focus"
        titleLines={["What I", "Explore"]}
        description="The themes I'm leaning into right now — and the systems I keep building."
      />
      <ServicesBody />
      <CTASection />
    </>
  );
}
