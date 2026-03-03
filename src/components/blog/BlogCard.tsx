import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Clock } from "@/components/ui/Icons";

const GRADIENT_COLORS = [
  "to-blue",
  "to-teal",
  "to-cyan",
  "to-green",
  "to-[#7C3AED]",
  "to-amber",
];

type BlogCardProps = {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  index?: number;
};

export default function BlogCard({
  title,
  slug,
  category,
  date,
  readTime,
  excerpt,
  index = 0,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="overflow-hidden h-full cursor-pointer">
        <div
          className={`h-[160px] bg-gradient-to-br from-navy ${GRADIENT_COLORS[index % 6]} flex items-center justify-center p-5`}
        >
          <div className="font-display text-xl text-white text-center leading-snug">
            {title.length > 50 ? title.substring(0, 50) + "..." : title}
          </div>
        </div>
        <div className="p-6">
          <Badge color="teal">{category}</Badge>
          <h3 className="font-display text-[17px] text-gray-900 mt-2.5 mb-2 leading-snug">
            {title}
          </h3>
          <p className="font-body text-[13px] text-gray-500 leading-relaxed mb-3">
            {excerpt}
          </p>
          <div className="flex items-center gap-3 font-body text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Clock /> {readTime}
            </span>
            <span>{date}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
