import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icons";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-1.5 font-body text-[13px] text-gray-500">
          <Link href="/" className="text-blue hover:underline">
            Home
          </Link>
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3" />
              {item.href ? (
                <Link href={item.href} className="text-blue hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
