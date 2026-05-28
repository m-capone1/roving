"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    building: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <div className="w-16 h-16 bg-[color:var(--color-tertiary-container)] rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-[color:var(--color-on-tertiary-container)] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
        </div>
        <h3 className="text-2xl font-bold text-[color:var(--color-on-surface)]" style={{ fontFamily: "var(--font-display)" }}>
          You&apos;re on the list!
        </h3>
        <p className="text-[color:var(--color-secondary)] max-w-sm">
          We&apos;ll be in touch soon with your early access invite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white">Full Name:</label>
        <input
          name="name"
          type="text"
          required
          placeholder="Enter your first & last name"
          value={form.name}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-[color:var(--color-outline-variant)] bg-white text-sm text-[color:var(--color-on-surface)] placeholder:text-[color:var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/30 focus:border-[color:var(--color-primary)] transition-all"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-white">Email Address:</label>
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your Email"
          value={form.email}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-[color:var(--color-outline-variant)] bg-white text-sm text-[color:var(--color-on-surface)] placeholder:text-[color:var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/30 focus:border-[color:var(--color-primary)] transition-all"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-white">Company / Project name:</label>
        <input
          name="company"
          type="text"
          placeholder="Enter project name"
          value={form.company}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-[color:var(--color-outline-variant)] bg-white text-sm text-[color:var(--color-on-surface)] placeholder:text-[color:var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/30 focus:border-[color:var(--color-primary)] transition-all"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-white">Role:</label>
        <input
          name="role"
          type="text"
          placeholder="Enter your role"
          value={form.role}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-[color:var(--color-outline-variant)] bg-white text-sm text-[color:var(--color-on-surface)] placeholder:text-[color:var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/30 focus:border-[color:var(--color-primary)] transition-all"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-white">What are you building with AI?</label>
        <textarea
          name="building"
          rows={3}
          placeholder="Enter your AI project"
          value={form.building}
          onChange={(e) => setForm((f) => ({ ...f, building: e.target.value }))}
          className="px-4 py-3 rounded-xl border border-[color:var(--color-outline-variant)] bg-white text-sm text-[color:var(--color-on-surface)] placeholder:text-[color:var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/30 focus:border-[color:var(--color-primary)] transition-all resize-none"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full text-white font-semibold py-4 rounded-xl transition-colors text-base"
          style={{ backgroundColor: "#014BAA" }}
        >
          Join the network
        </button>
      </div>
    </form>
  );
}
