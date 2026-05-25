import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import WorkGrid from "@/components/work/WorkGrid";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected full-stack projects — SaaS platforms, dashboards, MVPs and web experiences built with Next.js, TypeScript and Node.js.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        index="01 / 06"
        eyebrow="Selected Work"
        titleLines={["Selected", "Work"]}
        description="A selection of products I've designed and engineered end-to-end — from fintech platforms to 0→1 startup MVPs."
      />
      <WorkGrid />
      <CTASection />
    </>
  );
}
