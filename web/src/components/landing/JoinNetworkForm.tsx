"use client";

import { useState } from "react";

export default function JoinNetworkForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", building: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(field: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/join-network", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 text-center py-8">
        <span className="material-symbols-outlined text-[48px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
          mark_email_read
        </span>
        <p className="text-white font-semibold text-xl">You&apos;re in!</p>
        <p className="text-white/60 text-sm leading-relaxed">
          Check your inbox — Maddy sent you a welcome to the Playground.
        </p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm bg-white text-[color:var(--color-on-surface)] placeholder:text-[color:var(--color-secondary)] outline-none focus:ring-2 focus:ring-[#014BAA] disabled:opacity-60";
  const labelClass = "text-xs font-semibold text-white/60 uppercase tracking-wider";
  const disabled = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className={labelClass}>Full name <span className="text-[#4d9fff]">*</span></label>
        <input
          type="text"
          placeholder="Jane Smith"
          value={form.name}
          onChange={set("name")}
          required
          disabled={disabled}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass}>Email <span className="text-[#4d9fff]">*</span></label>
        <input
          type="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={set("email")}
          required
          disabled={disabled}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass}>Company / project</label>
        <input
          type="text"
          placeholder="Acme Inc."
          value={form.company}
          onChange={set("company")}
          disabled={disabled}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass}>Role</label>
        <input
          type="text"
          placeholder="Founder, Engineer…"
          value={form.role}
          onChange={set("role")}
          disabled={disabled}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass}>What are you building with AI?</label>
        <textarea
          placeholder="Tell us a bit about what you're working on…"
          value={form.building}
          onChange={set("building")}
          disabled={disabled}
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={disabled}
        className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: "#014BAA" }}
      >
        {disabled ? (
          <>
            <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
            Joining…
          </>
        ) : (
          <>
            Join the network
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </>
        )}
      </button>
    </form>
  );
}
