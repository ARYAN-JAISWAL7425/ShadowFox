import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServicesBody from "@/components/services/ServicesBody";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack development, SaaS platforms, API design, performance optimisation, MVP development and technical consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="03 / 06"
        eyebrow="Services"
        titleLines={["What I", "Do"]}
        description="From a single API to an entire product — here's how I can help you build and ship."
      />
      <ServicesBody />
      <CTASection />
    </>
  );
}
