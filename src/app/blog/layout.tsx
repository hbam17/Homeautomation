import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Home Blog – Guides, Reviews & Tips",
  description:
    "Expert smart home guides, product reviews, and tips for Minneapolis–St. Paul homeowners. Find the right system for your home and budget.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
