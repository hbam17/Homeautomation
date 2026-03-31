import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import BlogSidebar from "@/components/blog/BlogSidebar";
import MDXComponents from "@/components/blog/MDXComponents";
import JsonLd from "@/components/seo/JsonLd";
import FinalCTA from "@/components/sections/FinalCTA";
import { getServiceBySlug, getAllServicePages, extractFAQsFromContent } from "@/lib/content";
import { generateServiceSchema, generateFAQSchema } from "@/lib/schema";
import { SERVICES } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const pages = getAllServicePages();
  return pages.map((p) => ({ slug: p.frontmatter.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceBySlug(slug);
  if (!page) return { title: "Service Not Found" };
  return {
    title: page.frontmatter.title,
    description: page.frontmatter.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getServiceBySlug(slug);
  if (!page) notFound();

  const { frontmatter, content } = page;
  const service = SERVICES.find((s) => s.slug === slug);
  const faqs = extractFAQsFromContent(content);

  const schemas = [
    generateServiceSchema(frontmatter.title, frontmatter.description),
    ...(faqs.length > 0 ? [generateFAQSchema(faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Breadcrumb
        items={[
          { label: "Services", href: "/services/whole-home-automation" },
          { label: frontmatter.title },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
            <div>
              <Badge>{service?.title || frontmatter.title}</Badge>
              <h1 className="font-display text-3xl md:text-[42px] text-gray-900 mt-4 mb-6 leading-tight">
                {frontmatter.title}
              </h1>

              <div className="prose">
                <MDXRemote source={content} components={MDXComponents} />
              </div>
            </div>

            <BlogSidebar
              ctaTitle={`Get a Free ${service?.title || "Smart Home"} Quote`}
              ctaDescription="Connect with certified installers in the Twin Cities. No obligation."
            />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
