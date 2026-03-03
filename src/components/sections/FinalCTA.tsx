import Button from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/Icons";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue to-blue-light text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-display text-3xl md:text-[38px] text-white mb-4">
          Ready to Make Your Home Smarter?
        </h2>
        <p className="font-body text-lg text-white/80 mb-8 max-w-[520px] mx-auto">
          Get free, no-obligation quotes from certified smart home installers in
          the Minneapolis&ndash;St. Paul area.
        </p>
        <Button
          href="/get-a-quote"
          variant="secondary"
          size="lg"
          className="bg-white !text-blue border-none hover:bg-gray-50"
        >
          Get Your Free Quote <ArrowRight />
        </Button>
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {["No obligation", "Free estimates", "Vetted installers"].map(
            (item) => (
              <span
                key={item}
                className="font-body text-sm text-white/70 flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" /> {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
