import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import StarRating from "@/components/ui/StarRating";
import { MapPin } from "@/components/ui/Icons";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <Badge color="green">Testimonials</Badge>
          <h2 className="font-display text-[34px] text-gray-900 mt-4">
            What Minneapolis Homeowners Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} hover={false} className="p-8">
              <StarRating count={t.rating} />
              <p className="font-body text-[15px] text-gray-700 leading-relaxed mt-4 mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="font-body text-sm font-semibold text-gray-900">
                {t.name}
              </div>
              <div className="font-body text-[13px] text-gray-500 flex items-center gap-1 mt-0.5">
                <MapPin /> {t.location}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
