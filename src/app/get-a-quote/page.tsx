import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuoteForm from "@/components/forms/QuoteForm";
import { Check } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Get a Free Smart Home Installation Quote – Minneapolis",
  description:
    "Request free, no-obligation quotes from certified smart home installers in Minneapolis–St. Paul. Compare prices and find the right pro for your project.",
};

export default function GetAQuotePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Get a Quote" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-[42px] text-gray-900 mb-3 leading-tight">
                Get Your Free Smart Home Quote
              </h1>
              <p className="font-body text-[17px] text-gray-500 mb-10 max-w-lg">
                Tell us about your project and we&apos;ll connect you with
                certified Minneapolis installers within 24 hours.
              </p>
              <p className="font-body text-sm text-gray-400 mb-8">
                Not sure what you need? Browse our <Link href="/services/whole-home-automation" className="text-blue hover:underline">services</Link>,
                read our <Link href="/blog/smart-home-installation-cost-minneapolis" className="text-blue hover:underline">cost guide</Link>,
                or <Link href="/contact" className="text-blue hover:underline">contact us</Link> with questions.
              </p>
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 bg-gradient-to-br from-navy to-navy-light rounded-card p-8">
                <h3 className="font-display text-xl text-white mb-4">
                  Why Get Quotes Through Us?
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Free & No Obligation", desc: "Get up to 3 quotes at no cost. Choose the one that fits, or walk away." },
                    { title: "Vetted Installers", desc: "Every installer in our network is licensed, insured, and certified." },
                    { title: "Local Expertise", desc: "All our installers are based in the Twin Cities and understand MN homes." },
                    { title: "Fast Response", desc: "Receive your first quote within 24 hours of submitting your request." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="text-cyan flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4" />
                      </span>
                      <div>
                        <div className="font-body text-sm font-semibold text-white">
                          {item.title}
                        </div>
                        <div className="font-body text-[13px] text-white/50">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
