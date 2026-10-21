"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { landing } from "@/content/landing";
import { siteConfig } from "@/lib/site";
import { Menu, X } from "lucide-react";

export function Header() {
  const { nav } = landing;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all">
      <div className="mx-auto flex h-20 sm:h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label={nav.logoAlt}>
          <Image
            src="/kotoriva-logo.png"
            alt={nav.logoAlt}
            width={240}
            height={78}
            className="h-12 sm:h-15 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#292A41] transition-colors hover:text-[#807EF1]"
            >
              {link.label}
            </a>
          ))}

          {/* Vertical Divider */}
          <div className="h-5 w-[1px] bg-[#E5E5EF]" />

          {/* CTA Action Button */}
          <a
            href={siteConfig.links.earlyAccessForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-gradient-to-r from-[#807EF1] to-[#88D8EE] text-white font-extrabold text-[13px] tracking-wide shadow-md shadow-[#807EF1]/25 hover:shadow-lg hover:shadow-[#807EF1]/35 hover:opacity-95 active:scale-95 transition-all duration-200"
          >
            {nav.cta}
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={siteConfig.links.earlyAccessForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-gradient-to-r from-[#807EF1] to-[#88D8EE] text-white font-bold text-xs shadow-sm"
          >
            {nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-600 hover:text-zinc-900"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-6 py-5 shadow-lg space-y-4">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#292A41] hover:text-[#807EF1] py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.links.earlyAccessForm}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full py-3 rounded-full bg-gradient-to-r from-[#807EF1] to-[#88D8EE] text-white font-bold text-sm shadow-md"
          >
            {nav.cta}に登録
          </a>
        </div>
      )}
    </header>
  );
}
