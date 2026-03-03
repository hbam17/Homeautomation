import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { ChevronRight, getServiceIcon } from "@/components/ui/Icons";
import { SERVICES } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <Badge>Our Services</Badge>
          <h2 className="font-display text-3xl md:text-[38px] text-gray-900 mt-4 mb-3 tracking-tight">
            Complete Smart Home Solutions
          </h2>
          <p className="font-body text-[17px] text-gray-500 max-w-[560px] mx-auto">
            From single-device installs to whole-home automation, we connect
            you with the right installer for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => {
            const Icon = getServiceIcon(svc.icon);
            return (
              <Link key={svc.slug} href={`/services/${svc.slug}`}>
                <Card className="p-8 h-full cursor-pointer group hover:border-blue">
                  <div className="w-12 h-12 rounded-xl mb-5 bg-gradient-to-br from-blue-pale to-blue/10 flex items-center justify-center text-blue">
                    <Icon />
                  </div>
                  <h3 className="font-display text-xl text-gray-900 mb-2">
                    {svc.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                  <span className="font-body text-[13px] font-semibold text-blue flex items-center gap-1">
                    Learn more <ChevronRight />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
