import Button from "@/components/ui/Button";
import { Snowflake, ArrowRight } from "@/components/ui/Icons";
import { TRUST_SIGNALS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-[#1a365d] py-20 md:py-24">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12),transparent_70%)]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-[720px]">
          <div className="flex items-center gap-2 mb-6">
            <Snowflake className="w-5 h-5 text-cyan" />
            <span className="font-body text-sm font-medium text-cyan tracking-wide">
              Built for Minnesota homes &amp; winters
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-[52px] text-white leading-[1.12] mb-6 tracking-tight">
            Find Trusted Smart Home Installers in{" "}
            <span className="text-cyan">Minneapolis</span>
          </h1>

          <p className="font-body text-lg md:text-[19px] text-white/70 leading-relaxed mb-10 max-w-[560px]">
            Connect with certified local professionals for home automation,
            security, lighting, theater, and energy management. Free quotes
            from vetted Twin Cities installers.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button href="/get-a-quote" size="lg">
              Get Your Free Quote <ArrowRight />
            </Button>
            <Button
              href="/services/whole-home-automation"
              variant="secondary"
              size="lg"
            >
              Explore Services
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-8">
            {TRUST_SIGNALS.map((item) => (
              <div key={item.label}>
                <div className="font-display text-[28px] text-white">
                  {item.num}
                </div>
                <div className="font-body text-[13px] text-white/50">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
