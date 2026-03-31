import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import BlogSidebar from "@/components/blog/BlogSidebar";
import MDXComponents from "@/components/blog/MDXComponents";
import JsonLd from "@/components/seo/JsonLd";
import FinalCTA from "@/components/sections/FinalCTA";
import { Clock } from "@/components/ui/Icons";
import { getBlogPostBySlug, getAllBlogPosts, extractFAQsFromContent } from "@/lib/content";
import { generateArticleSchema, generateFAQSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.frontmatter.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;
  const faqs = extractFAQsFromContent(content);

  const schemas = [
    generateArticleSchema({
      title: frontmatter.title,
      description: frontmatter.description,
      slug: frontmatter.slug,
      date: frontmatter.date as string,
      updatedDate: frontmatter.updatedDate as string | undefined,
      author: frontmatter.author as string | undefined,
    }),
    ...(faqs.length > 0 ? [generateFAQSchema(faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: frontmatter.title },
        ]}
      />

      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
            <article>
              <Badge>{frontmatter.category as string}</Badge>
              <h1 className="font-display text-3xl md:text-[38px] text-gray-900 mt-4 mb-4 leading-tight">
                {frontmatter.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mb-8 font-body text-[13px] text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock /> {frontmatter.readTime as string} read
                </span>
                <span>Updated {frontmatter.date as string}</span>
                {typeof frontmatter.author === "string" && (
                  <span>By {frontmatter.author}</span>
                )}
              </div>

              <div className="prose">
                <MDXRemote source={content} components={MDXComponents} />
              </div>
            </article>

            <BlogSidebar />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
