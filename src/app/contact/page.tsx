import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { Phone, Mail, MapPin, ArrowRight } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us – Smart Home Installers Minneapolis",
  description:
    "Get in touch with Smart Home Installers Minneapolis. Questions about smart home installation in the Twin Cities? We're here to help.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contact" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Badge>Contact Us</Badge>
              <h1 className="font-display text-4xl md:text-[42px] text-gray-900 mt-4 mb-6 leading-tight">
                Get in Touch
              </h1>
              <p className="font-body text-[17px] text-gray-600 leading-relaxed mb-8">
                Have questions about smart home installation in the Twin Cities?
                Want to learn more about our installer network? We&apos;d love
                to hear from you.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center text-blue">
                    <Phone />
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold text-gray-900">
                      Phone
                    </div>
                    <div className="font-body text-[15px] text-gray-500">
                      {SITE_CONFIG.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center text-blue">
                    <Mail />
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold text-gray-900">
                      Email
                    </div>
                    <div className="font-body text-[15px] text-gray-500">
                      {SITE_CONFIG.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center text-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold text-gray-900">
                      Service Area
                    </div>
                    <div className="font-body text-[15px] text-gray-500">
                      Minneapolis&ndash;St. Paul Metro, Minnesota
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-pale rounded-card p-6 border border-blue/10">
                <h2 className="font-display text-xl text-gray-900 mb-2">
                  Looking for a quote instead?
                </h2>
                <p className="font-body text-sm text-gray-600 mb-4">
                  Use our quick quote form to get matched with certified
                  installers in the Twin Cities.
                </p>
                <Button href="/get-a-quote">
                  Get Free Quote <ArrowRight />
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-card p-8 border border-gray-200">
              <h2 className="font-display text-2xl text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="font-body text-sm text-gray-500 mb-6">
                Or explore our <Link href="/services/whole-home-automation" className="text-blue hover:underline">services</Link>,
                read our <Link href="/blog" className="text-blue hover:underline">smart home blog</Link>,
                or <Link href="/smart-home-installation-edina" className="text-blue hover:underline">find installers in your area</Link>.
              </p>
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <Button type="submit" className="w-full justify-center">
                  Send Message <ArrowRight />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
