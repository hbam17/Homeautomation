import { Snowflake } from "@/components/ui/Icons";

const FEATURES = [
  { label: "Freeze Detection", desc: "Pipe & water sensors" },
  { label: "Snow Melting", desc: "Smart driveway systems" },
  { label: "Energy Savings", desc: "30%+ heating reduction" },
  { label: "Remote Monitoring", desc: "Perfect for snowbirds" },
];

export default function MinnesotaCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-navy to-[#1e3a5f] relative overflow-hidden">
      <div className="absolute top-[-60px] left-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.06),transparent_70%)]" />
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Snowflake className="w-5 h-5 text-cyan" />
              <span className="font-body text-[13px] font-semibold text-cyan tracking-widest uppercase">
                Minnesota-Specific Expertise
              </span>
            </div>
            <h2 className="font-display text-[32px] text-white mb-4 leading-tight">
              Smart Homes Built for -20&deg;F Winters
            </h2>
            <p className="font-body text-base text-white/65 leading-relaxed">
              Our network of installers understands the unique challenges of
              Minnesota homes — from freeze detection and pipe monitoring to
              energy-efficient climate control that handles our extreme
              temperature swings.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((item) => (
              <div
                key={item.label}
                className="px-5 py-4 rounded-xl bg-white/[0.06] border border-white/10"
              >
                <div className="font-body text-sm font-semibold text-white mb-0.5">
                  {item.label}
                </div>
                <div className="font-body text-xs text-white/50">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
