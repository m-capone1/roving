"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Products", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Developers", href: "#api" },
  { label: "Company", href: "#thesis" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement banner */}
      <div className="bg-[#001034] text-white text-xs font-medium py-2.5 px-4 text-center">
        Welcome to the age of agentic banking.{" "}
        <a href="#waitlist" className="underline underline-offset-2 hover:opacity-80 transition-opacity font-semibold">
          Give your AI agent a verified financial identity before it moves money.
        </a>
      </div>

      {/* Main navbar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-[color:var(--color-outline-variant)]/50">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src="/logo-symbol.png" alt="Roving" width={32} height={32} className="w-8 h-8 object-contain" />
          <Image src="/roving-logo.png" alt="Roving" width={100} height={28} className="h-7 w-auto object-contain translate-y-1" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[color:var(--color-secondary)] hover:text-[color:var(--color-on-surface)] rounded-lg hover:bg-[color:var(--color-surface-container-low)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden sm:block text-sm font-medium text-[color:var(--color-secondary)] hover:text-[color:var(--color-on-surface)] transition-colors"
          >
            Sign in
          </Link>
          <a
            href="#waitlist"
            className="bg-[color:var(--color-primary)] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[color:var(--color-primary-container)] transition-colors"
          >
            Get early access
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[color:var(--color-surface-container)] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[color:var(--color-secondary)]">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-[color:var(--color-outline-variant)]/50 bg-white px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-3 text-sm font-medium text-[color:var(--color-secondary)] hover:text-[color:var(--color-on-surface)] rounded-lg hover:bg-[color:var(--color-surface-container-low)] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      </div>
    </header>
  );
}
