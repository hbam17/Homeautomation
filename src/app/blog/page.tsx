"use client";

import { useState } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import BlogCard from "@/components/blog/BlogCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <Breadcrumb items={[{ label: "Blog" }]} />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-navy to-navy-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <Badge>Smart Home Blog</Badge>
          <h1 className="font-display text-4xl md:text-[42px] text-white mt-4 mb-3">
            Guides, Reviews &amp; Resources
          </h1>
          <p className="font-body text-lg text-white/65 max-w-[560px]">
            Expert smart home advice tailored for Minneapolis&ndash;St. Paul
            homeowners.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-10">
            <CategoryFilter
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} {...post} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="font-body text-gray-500 text-center py-12">
              No posts found in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
