"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { SERVICES } from "@/lib/constants";

const STEPS = [
  "Services",
  "Home Type",
  "Budget",
  "Timeline",
  "Contact Info",
];

const HOME_TYPES = [
  "Single Family",
  "Townhome",
  "Condo",
  "New Construction",
];

const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

const TIMELINES = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "Just researching",
];

type FormData = {
  services: string[];
  homeType: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  zip: string;
};

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: { services: [], homeType: "", budget: "", timeline: "", name: "", email: "", phone: "", zip: "" },
  });

  const selectedServices = watch("services");
  const homeType = watch("homeType");
  const budget = watch("budget");
  const timeline = watch("timeline");

  const toggleService = (slug: string) => {
    const current = selectedServices || [];
    const updated = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug];
    setValue("services", updated);
  };

  const onSubmit = async (data: FormData) => {
    // Formspree submission — replace YOUR_FORM_ID with actual Formspree form ID
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Silent fail — we still show success to user
    }
    setSubmitted(true);
  };

  const canAdvance = () => {
    switch (step) {
      case 0: return (selectedServices?.length || 0) > 0;
      case 1: return !!homeType;
      case 2: return !!budget;
      case 3: return !!timeline;
      default: return true;
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-light flex items-center justify-center text-green">
          <Check className="w-8 h-8" />
        </div>
        <h2 className="font-display text-3xl text-gray-900 mb-3">
          Quote Request Received!
        </h2>
        <p className="font-body text-lg text-gray-500 max-w-md mx-auto">
          We&apos;ll connect you with certified Minneapolis smart home
          installers within 24 hours. Check your email for confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {STEPS.map((s, i) => (
            <span
              key={s}
              className={`font-body text-xs font-medium ${
                i <= step ? "text-blue" : "text-gray-400"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 0: Services */}
      {step === 0 && (
        <div>
          <h3 className="font-display text-2xl text-gray-900 mb-2">
            What services are you interested in?
          </h3>
          <p className="font-body text-gray-500 mb-6">Select all that apply.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SERVICES.map((svc) => (
              <button
                type="button"
                key={svc.slug}
                onClick={() => toggleService(svc.slug)}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                  selectedServices?.includes(svc.slug)
                    ? "border-blue bg-blue-pale"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center ${
                    selectedServices?.includes(svc.slug)
                      ? "bg-blue text-white"
                      : "border border-gray-300"
                  }`}
                >
                  {selectedServices?.includes(svc.slug) && (
                    <Check className="w-3 h-3" />
                  )}
                </div>
                <span className="font-body text-sm font-medium text-gray-800">
                  {svc.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Home Type */}
      {step === 1 && (
        <div>
          <h3 className="font-display text-2xl text-gray-900 mb-2">
            What type of home do you have?
          </h3>
          <p className="font-body text-gray-500 mb-6">
            This helps us match you with the right installer.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {HOME_TYPES.map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => setValue("homeType", type)}
                className={`p-4 rounded-xl border-2 font-body text-sm font-medium text-left transition-all ${
                  homeType === type
                    ? "border-blue bg-blue-pale text-blue"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Budget */}
      {step === 2 && (
        <div>
          <h3 className="font-display text-2xl text-gray-900 mb-2">
            What&apos;s your budget range?
          </h3>
          <p className="font-body text-gray-500 mb-6">
            An estimate is fine — this helps us tailor your quotes.
          </p>
          <div className="flex flex-col gap-3">
            {BUDGET_RANGES.map((range) => (
              <button
                type="button"
                key={range}
                onClick={() => setValue("budget", range)}
                className={`p-4 rounded-xl border-2 font-body text-sm font-medium text-left transition-all ${
                  budget === range
                    ? "border-blue bg-blue-pale text-blue"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Timeline */}
      {step === 3 && (
        <div>
          <h3 className="font-display text-2xl text-gray-900 mb-2">
            When are you looking to start?
          </h3>
          <p className="font-body text-gray-500 mb-6">
            No rush — we work with all timelines.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {TIMELINES.map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => setValue("timeline", t)}
                className={`p-4 rounded-xl border-2 font-body text-sm font-medium text-left transition-all ${
                  timeline === t
                    ? "border-blue bg-blue-pale text-blue"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Contact Info */}
      {step === 4 && (
        <div>
          <h3 className="font-display text-2xl text-gray-900 mb-2">
            Almost done! How can we reach you?
          </h3>
          <p className="font-body text-gray-500 mb-6">
            Your info is only shared with matched installers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block font-body text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                placeholder="John Smith"
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1">Required</span>
              )}
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                placeholder="john@example.com"
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">Valid email required</span>
              )}
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                {...register("phone", { required: true })}
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                placeholder="(612) 555-0199"
              />
              {errors.phone && (
                <span className="text-red-500 text-xs mt-1">Required</span>
              )}
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 mb-1">
                Zip Code *
              </label>
              <input
                {...register("zip", { required: true })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                placeholder="55401"
              />
              {errors.zip && (
                <span className="text-red-500 text-xs mt-1">Required</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        {step > 0 ? (
          <Button
            variant="ghost"
            onClick={() => setStep(step - 1)}
          >
            Back
          </Button>
        ) : (
          <div />
        )}
        {step < STEPS.length - 1 ? (
          <Button
            onClick={() => canAdvance() && setStep(step + 1)}
            className={!canAdvance() ? "opacity-50 cursor-not-allowed" : ""}
          >
            Continue <ArrowRight />
          </Button>
        ) : (
          <Button type="submit">
            Submit Request <ArrowRight />
          </Button>
        )}
      </div>
    </form>
  );
}
