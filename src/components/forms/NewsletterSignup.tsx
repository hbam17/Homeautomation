"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/ui/Icons";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Placeholder — integrate with Formspree or email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="font-body text-sm text-green font-medium">
        Thanks! You&apos;re subscribed to our smart home newsletter.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
        className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
      />
      <button
        type="submit"
        className="px-4 py-2.5 bg-blue text-white rounded-lg font-body text-sm font-semibold hover:bg-blue-light transition-colors flex items-center gap-1"
      >
        Subscribe <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
