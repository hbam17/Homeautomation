import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { BLOG_POSTS } from "@/lib/constants";

type BlogSidebarProps = {
  tableOfContents?: { label: string; id: string }[];
  relatedSlugs?: string[];
  ctaTitle?: string;
  ctaDescription?: string;
};

export default function BlogSidebar({
  tableOfContents,
  relatedSlugs,
  ctaTitle = "Get Your Free Quote",
  ctaDescription = "Compare prices from certified local installers.",
}: BlogSidebarProps) {
  const relatedPosts = relatedSlugs
    ? BLOG_POSTS.filter((p) => relatedSlugs.includes(p.slug))
    : BLOG_POSTS.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* CTA Card */}
      <div className="sticky top-24 space-y-6">
        <div className="bg-gradient-to-br from-navy to-navy-light p-7 rounded-card">
          <h3 className="font-display text-xl text-white mb-3">{ctaTitle}</h3>
          <p className="font-body text-[13px] text-white/60 mb-5">
            {ctaDescription}
          </p>
          <Button href="/get-a-quote" className="w-full justify-center">
            Request Quotes <ArrowRight />
          </Button>
          <div className="mt-5 flex flex-col gap-2.5">
            {[
              "Free, no-obligation quotes",
              "Certified local installers",
              "Response within 24 hours",
            ].map((item) => (
              <span
                key={item}
                className="font-body text-[13px] text-white/60 flex items-center gap-2"
              >
                <span className="text-cyan">
                  <Check className="w-4 h-4" />
                </span>{" "}
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Table of Contents */}
        {tableOfContents && tableOfContents.length > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h4 className="font-body text-[13px] font-semibold text-gray-900 uppercase tracking-widest mb-3">
              In this article
            </h4>
            {tableOfContents.map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                className="block font-body text-[13px] text-blue py-1.5 border-b border-gray-200 last:border-0 hover:underline"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Related Posts */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h4 className="font-body text-[13px] font-semibold text-gray-900 uppercase tracking-widest mb-3">
            Related articles
          </h4>
          {relatedPosts.map((post, i) => (
            <Link
              key={i}
              href={`/blog/${post.slug}`}
              className="block py-2.5 border-b border-gray-200 last:border-0"
            >
              <div className="font-body text-[13px] font-medium text-blue leading-snug hover:underline">
                {post.title}
              </div>
              <div className="font-body text-[11px] text-gray-500 mt-1">
                {post.readTime} read
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
