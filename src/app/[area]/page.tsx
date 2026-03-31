import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";
import BlogSidebar from "@/components/blog/BlogSidebar";
import MDXComponents from "@/components/blog/MDXComponents";
import JsonLd from "@/components/seo/JsonLd";
import FinalCTA from "@/components/sections/FinalCTA";
import { MapPin, ArrowRight, getServiceIcon } from "@/components/ui/Icons";
import { AREAS, SERVICES } from "@/lib/constants";
import { getAreaBySlug, extractFAQsFromContent } from "@/lib/content";
import { generateServiceSchema, generateFAQSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ area: string }>;
};

export async function generateStaticParams() {
  return AREAS.map((a) => ({ area: `smart-home-installation-${a.slug}` }));
}

function getAreaFromParam(param: string) {
  const slug = param.replace("smart-home-installation-", "");
  return AREAS.find((a) => a.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaParam } = await params;
  const area = getAreaFromParam(areaParam);
  if (!area) return { title: "Area Not Found" };

  const slug = areaParam.replace("smart-home-installation-", "");
  const mdx = getAreaBySlug(slug);

  return {
    title: mdx?.frontmatter.title || `Smart Home Installation in ${area.name}, MN`,
    description:
      mdx?.frontmatter.description ||
      `Find certified smart home installers in ${area.name}, Minnesota. Free quotes for home automation, security, lighting, theater, and networking.`,
  };
}

export default async function AreaPage({ params }: Props) {
  const { area: areaParam } = await params;
  const area = getAreaFromParam(areaParam);
  if (!area) notFound();

  const slug = areaParam.replace("smart-home-installation-", "");
  const mdx = getAreaBySlug(slug);
  const neighborhoods = (mdx?.frontmatter.neighborhoods as string[]) || [];

  const schemas = [
    generateServiceSchema(
      `Smart Home Installation in ${area.name}, MN`,
      `Professional smart home installation services in ${area.name}, Minnesota. Home automation, security, lighting, and theater.`,
      area.name
    ),
    ...(mdx ? (() => {
      const faqs = extractFAQsFromContent(mdx.content);
      return faqs.length > 0 ? [generateFAQSchema(faqs)] : [];
    })() : []),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Breadcrumb
        items={[
          { label: "Service Areas" },
          { label: area.name },
        ]}
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-navy to-navy-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-cyan" />
            <span className="font-body text-[13px] font-semibold text-cyan tracking-widest uppercase">
              Service Area
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-[42px] text-white mb-4 leading-tight">
            Smart Home Installation in {area.name}, MN
          </h1>
          <p className="font-body text-lg text-white/70 max-w-[600px] leading-relaxed">
            Premium smart home automation, security, and entertainment solutions
            for {area.name} homeowners. Certified local installers who know your
            neighborhood.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
            <div>
              {/* MDX content if available */}
              {mdx ? (
                <div className="prose mb-10">
                  <MDXRemote source={mdx.content} components={MDXComponents} />
                </div>
              ) : (
                <>
                  <p className="font-body text-[17px] text-gray-600 leading-[1.75] mb-6">
                    {area.name} is one of the Twin Cities&apos; premier communities
                    for smart home technology. Whether you&apos;re upgrading an
                    existing home or building new, our network of certified
                    installers has the experience to deliver the perfect smart home
                    system for your lifestyle and budget.
                  </p>
                  <p className="font-body text-[17px] text-gray-600 leading-[1.75] mb-8">
                    Our {area.name} installers specialize in Control4, Savant, and
                    Crestron systems, as well as standalone solutions for lighting,
                    security, climate control, and entertainment. Every project
                    starts with a free consultation to understand your needs and
                    design the right system.
                  </p>
                </>
              )}

              {/* Neighborhoods */}
              {neighborhoods.length > 0 && (
                <div className="mb-10">
                  <h2 className="font-display text-2xl text-gray-900 mb-4">
                    {area.name} Neighborhoods We Serve
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {neighborhoods.map((n) => (
                      <span
                        key={n}
                        className="font-body text-[13px] font-medium text-gray-700 bg-gray-100 px-3.5 py-1.5 rounded-full"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Services Grid */}
              <h2 className="font-display text-2xl text-gray-900 mb-5">
                Popular Smart Home Services in {area.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {SERVICES.slice(0, 6).map((svc) => {
                  const Icon = getServiceIcon(svc.icon);
                  return (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="flex gap-3.5 items-start p-5 rounded-xl border border-gray-200 hover:border-blue transition-colors"
                    >
                      <div className="text-blue flex-shrink-0 mt-0.5">
                        <Icon />
                      </div>
                      <div>
                        <div className="font-body text-sm font-semibold text-gray-900 mb-1">
                          {svc.title}
                        </div>
                        <div className="font-body text-[13px] text-gray-500">
                          {svc.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-pale to-blue-200 border border-blue/20 rounded-card p-8 mb-10">
                <h3 className="font-display text-[22px] text-gray-900 mb-2">
                  Ready to upgrade your {area.name} home?
                </h3>
                <p className="font-body text-[15px] text-gray-600 mb-4">
                  Get free quotes from certified installers who know{" "}
                  {area.name} homes inside and out.
                </p>
                <Button href="/get-a-quote">
                  Get Free Quote <ArrowRight />
                </Button>
              </div>
            </div>

            <BlogSidebar
              ctaTitle={`Get ${area.name} Smart Home Quotes`}
              ctaDescription={`Free quotes from installers who know ${area.name} homes.`}
            />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
