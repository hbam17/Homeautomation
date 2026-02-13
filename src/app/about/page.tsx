import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import { Check, MapPin } from "@/components/ui/Icons";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us – Connecting Minneapolis Homeowners with Smart Home Pros",
  description:
    "Learn how Smart Home Installers Minneapolis connects Twin Cities homeowners with certified, vetted smart home installation professionals. Free quotes, no obligation.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "About" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[720px]">
            <Badge>About Us</Badge>
            <h1 className="font-display text-4xl md:text-[42px] text-gray-900 mt-4 mb-6 leading-tight">
              Connecting Minneapolis Homeowners with Certified Smart Home Installers
            </h1>

            <div className="font-body text-[17px] text-gray-600 leading-[1.75] space-y-6">
              <p>
                Smart Home Installers Minneapolis was founded with a simple mission: make it easy for Twin Cities homeowners to find trustworthy, certified smart home installation professionals. We know that choosing the right installer can be overwhelming — there are dozens of companies, hundreds of product options, and no easy way to compare.
              </p>
              <p>
                That&apos;s where we come in. We&apos;ve built a network of over 50 vetted installers across the Minneapolis&ndash;St. Paul metro area, covering everything from basic smart thermostat installs to full-scale Savant and Control4 whole-home automation systems.
              </p>

              <h2 className="font-display text-2xl text-gray-900 mt-10 mb-4">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Tell us about your project", desc: "Fill out our quick quote form with your smart home needs, home type, budget, and timeline." },
                  { step: "2", title: "We match you with installers", desc: "Within 24 hours, we connect you with 2-3 certified installers who specialize in your specific project type." },
                  { step: "3", title: "Compare quotes & choose", desc: "Review proposals, compare pricing, and choose the installer that's right for you. No obligation, no pressure." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue text-white font-display text-lg flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-body text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="font-body text-[15px] text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl text-gray-900 mt-10 mb-4">
                Why Minneapolis Homeowners Trust Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Every installer is licensed and insured",
                  "We verify certifications (Control4, Savant, Lutron, etc.)",
                  "All quotes are free with no obligation",
                  "We specialize in Minnesota's unique climate needs",
                  "500+ successful projects completed",
                  "4.9 average customer rating",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-green mt-0.5 flex-shrink-0">
                      <Check />
                    </span>
                    <span className="font-body text-[15px] text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl text-gray-900 mt-10 mb-4">
                Our Service Area
              </h2>
              <p>
                We serve the entire Twin Cities metropolitan area, including Minneapolis, St. Paul, and all surrounding suburbs from Maple Grove and Plymouth in the west to Woodbury in the east, and from Eagan and Burnsville in the south to the northern suburbs.
              </p>
              <div className="flex items-center gap-2 text-teal">
                <MapPin className="w-5 h-5" />
                <span className="font-body text-sm font-semibold">
                  Minneapolis&ndash;St. Paul Metro Area, Minnesota
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
