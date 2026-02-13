import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { MapPin, ChevronRight } from "@/components/ui/Icons";
import { AREAS } from "@/lib/constants";

export default function AreasGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <Badge color="teal">Service Areas</Badge>
          <h2 className="font-display text-[34px] text-gray-900 mt-4 mb-3">
            Serving the Entire Twin Cities Metro
          </h2>
          <p className="font-body text-base text-gray-500">
            Our installer network covers Minneapolis, St. Paul, and all
            surrounding suburbs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/smart-home-installation-${area.slug}`}
              className="flex items-center justify-between px-5 py-4 rounded-[10px] border border-gray-200 transition-all hover:border-teal hover:bg-teal/[0.04] group"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400 group-hover:text-teal" />
                <span className="font-body text-sm font-medium text-gray-800">
                  {area.name}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
