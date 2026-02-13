import Link from "next/link";
import { Home } from "@/components/ui/Icons";
import { SERVICES, AREAS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue to-cyan flex items-center justify-center text-white">
                <Home className="w-4 h-4" />
              </div>
              <span className="font-display text-base text-white">
                Smart Home Installers Minneapolis
              </span>
            </div>
            <p className="font-body text-[13px] text-white/40 leading-relaxed max-w-[280px]">
              Connecting Twin Cities homeowners with certified smart home
              installation professionals since 2026.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Services
            </h4>
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="block font-body text-[13px] text-white/50 hover:text-white/80 py-1 transition-colors"
              >
                {svc.title}
              </Link>
            ))}
          </div>

          {/* Top Areas */}
          <div>
            <h4 className="font-body text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Top Areas
            </h4>
            {AREAS.slice(0, 6).map((area) => (
              <Link
                key={area.slug}
                href={`/smart-home-installation-${area.slug}`}
                className="block font-body text-[13px] text-white/50 hover:text-white/80 py-1 transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-body text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Resources
            </h4>
            {[
              { label: "Blog", href: "/blog" },
              { label: "Get a Quote", href: "/get-a-quote" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-body text-[13px] text-white/50 hover:text-white/80 py-1 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-body text-xs text-white/30">
            &copy; 2026 Smart Home Installers Minneapolis. All rights reserved.
          </span>
          <span className="font-body text-xs text-white/30">
            Serving Minneapolis, St. Paul &amp; the entire Twin Cities metro area.
          </span>
        </div>
      </div>
    </footer>
  );
}
