"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Menu, X } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "Services", href: "/services/whole-home-automation" },
  { label: "Areas", href: "/smart-home-installation-edina" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy/[0.97] backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue to-cyan flex items-center justify-center text-white">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display text-lg text-white leading-tight">
                Smart Home Installers
              </div>
              <div className="font-body text-[11px] text-gray-500 tracking-widest uppercase">
                Minneapolis
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors pb-1"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/get-a-quote" size="md">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-white/10">
            <div className="flex flex-col gap-1 pt-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm font-medium text-white/60 hover:text-white py-3 px-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button href="/get-a-quote" size="md" className="w-full justify-center">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
