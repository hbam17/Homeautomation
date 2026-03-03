"use client";

import { BLOG_CATEGORIES } from "@/lib/constants";

type CategoryFilterProps = {
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-3 flex-wrap">
      {BLOG_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`font-body text-[13px] font-medium px-4 py-2 rounded-full border transition-all ${
            active === cat
              ? "bg-blue text-white border-blue"
              : "bg-transparent text-gray-600 border-gray-300 hover:border-gray-400"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
