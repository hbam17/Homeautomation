import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Clock, ArrowRight } from "@/components/ui/Icons";
import { BLOG_POSTS } from "@/lib/constants";

const GRADIENT_COLORS = [
  "to-blue",
  "to-teal",
  "to-cyan",
];

export default function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <Badge>Smart Home Blog</Badge>
            <h2 className="font-display text-[34px] text-gray-900 mt-4">
              Latest Guides &amp; Resources
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-body text-sm font-semibold text-blue flex items-center gap-1"
          >
            View all articles <ArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden h-full cursor-pointer">
                <div
                  className={`h-[180px] bg-gradient-to-br from-navy ${GRADIENT_COLORS[i]} flex items-center justify-center p-6`}
                >
                  <div className="font-display text-[22px] text-white text-center leading-snug">
                    {post.title.split(":")[0]}
                  </div>
                </div>
                <div className="p-6">
                  <Badge color="teal">{post.category}</Badge>
                  <h3 className="font-display text-lg text-gray-900 mt-3 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 font-body text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock /> {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
