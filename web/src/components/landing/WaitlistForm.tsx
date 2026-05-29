"use client";

import { useState } from "react";

type UserType = "individual" | "business";
type Status = "idle" | "loading" | "success" | "error" | "duplicate";
type MultiField = "reasons" | "wantedFeatures" | "priorities" | "businessWorkflows" | "businessBlockers";

interface FormData {
  userType: UserType | null;
  name: string;
  email: string;
  country: string;
  companyName: string;
  companySize: string;
  reasons: string[];
  aiAgentUsage: string;
  wantedFeatures: string[];
  priorities: string[];
  businessWorkflows: string[];
  businessBlockers: string[];
  earlyAccessInterest: string;
  marketingConsent: boolean;
}

const INITIAL: FormData = {
  userType: null,
  name: "", email: "", country: "",
  companyName: "", companySize: "",
  reasons: [], aiAgentUsage: "", wantedFeatures: [], priorities: [],
  businessWorkflows: [], businessBlockers: [], earlyAccessInterest: "",
  marketingConsent: true,
};

const INDIVIDUAL_REASONS = [
  "Save money", "Move money", "Virtual cards", "Multi-currency wallet",
  "Manage subscriptions", "AI-powered finance", "Use AI agents", "Explore the future",
];
const INDIVIDUAL_AI_USAGE = [
  "Yes, daily", "Sometimes", "Not yet, but planning to", "Just curious",
];
const INDIVIDUAL_FEATURES = [
  "Pay bills", "Buy tools and subscriptions", "Move money globally",
  "Track spending", "Save automatically", "Give AI tools spending access",
  "Trade crypto or stablecoins eventually", "Manage everything from one place",
];
const INDIVIDUAL_PRIORITIES = [
  "Security", "Low fees", "Speed", "Privacy",
  "Simplicity", "Better control", "AI automation", "Global access",
];

const BUSINESS_REASONS = [
  "Business banking", "Team spending", "Virtual cards", "Multi-currency wallets",
  "Vendor payments", "Subscription management", "AI agent payments",
  "API access", "Better approvals", "Compliance and audit trails",
];
const BUSINESS_AI_USAGE = [
  "Already using agents", "Testing internally", "Planning to use agents soon", "Not yet, but interested",
];
const BUSINESS_WORKFLOWS = [
  "Pay vendors", "Buy software", "Manage subscriptions", "Buy compute",
  "Team cards", "Travel spend", "Move funds globally",
  "Save or manage treasury", "Agent-led payments", "Developer API integration",
];
const BUSINESS_BLOCKERS = [
  "Shared cards", "Manual approvals", "Poor visibility", "High fees",
  "Compliance concerns", "Fraud risk", "No audit trail", "Slow payments",
  "Hard to control agent spend", "Too many disconnected tools",
];
const BUSINESS_EARLY_ACCESS = [
  "Yes, early access only", "Yes, design partner conversation",
  "Yes, partnership conversation", "Not right now",
];
const COMPANY_SIZES = ["1–10", "11–50", "51–200", "201–1000", "1000+"];

const INPUT_CLASS =
  "px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#014BAA]/50 focus:border-[#014BAA] transition-all w-full";

function cardClass(selected: boolean) {
  return `px-4 py-3 rounded-xl border text-sm text-left transition-all ${
    selected
      ? "border-[#014BAA] bg-[#014BAA1A] text-white"
      : "border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
  }`;
}

function computeTags(d: FormData): string[] {
  const tags = new Set<string>();
  if (d.userType === "business") tags.add("business_banking");
  if (d.aiAgentUsage === "Yes, daily" || d.aiAgentUsage === "Already using agents") tags.add("ai_agent_user");
  if (d.reasons.includes("API access")) tags.add("developer_api");
  if (d.wantedFeatures.includes("Trade crypto or stablecoins eventually")) tags.add("crypto_stablecoin_interest");
  if (d.reasons.includes("Compliance and audit trails") || d.priorities.includes("Security")) tags.add("compliance_need");
  if (["Yes, early access only", "Yes, design partner conversation", "Yes, partnership conversation"].includes(d.earlyAccessInterest)) {
    tags.add("early_access");
  }
  if (d.earlyAccessInterest === "Yes, design partner conversation") tags.add("design_partner");
  return [...tags];
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-white/80">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [validationError, setValidationError] = useState("");
  const [data, setData] = useState<FormData>(INITIAL);

  const userType = data.userType;
  const totalSteps = userType === "business" ? 8 : 7;
  const progress = step / totalSteps;
  const isLastStep = step === totalSteps;

  function toggleMulti(field: MultiField, value: string) {
    setData((d) => {
      const arr = d[field];
      return { ...d, [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value] };
    });
  }

  function validateStep(): string {
    switch (step) {
      case 1:
        if (!data.userType) return "Please select how you want to use Roving.";
        break;
      case 2: {
        if (!data.name.trim()) return "Please enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Please enter a valid email address.";
        if (!data.country.trim()) return "Please enter your country.";
        if (userType === "business") {
          if (!data.companyName.trim()) return "Please enter your company name.";
          if (!data.companySize) return "Please select your company size.";
        }
        break;
      }
      case 3:
        if (data.reasons.length === 0) return "Please select at least one option.";
        break;
      case 4:
        if (!data.aiAgentUsage) return "Please select an option.";
        break;
      case 5:
        if (userType === "individual" && data.wantedFeatures.length === 0) return "Please select at least one option.";
        if (userType === "business" && data.businessWorkflows.length === 0) return "Please select at least one option.";
        break;
      case 6:
        if (userType === "individual" && data.priorities.length === 0) return "Please select at least one option.";
        if (userType === "business" && data.businessBlockers.length === 0) return "Please select at least one option.";
        break;
      case 7:
        if (userType === "business" && !data.earlyAccessInterest) return "Please select an option.";
        break;
    }
    return "";
  }

  function handleNext() {
    const err = validateStep();
    if (err) { setValidationError(err); return; }
    setValidationError("");
    setStep((s) => s + 1);
  }

  function handleBack() {
    setValidationError("");
    setStep((s) => s - 1);
  }

  async function handleSubmit() {
    const err = validateStep();
    if (err) { setValidationError(err); return; }
    setValidationError("");
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, tags: computeTags(data) }),
      });
      const json = await res.json();
      if (res.status === 409) { setStatus("duplicate"); return; }
      if (!res.ok) { setStatus("error"); setErrorMsg(json.error ?? "Something went wrong."); return; }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (status === "success") {
    const isB = data.userType === "business";
    const ctaLink = "flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-sm text-white/80 hover:text-white hover:border-white/30 transition-all";
    const ctaPrimary = "flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all";
    return (
      <div className="flex flex-col gap-8 py-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-white leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            {isB ? "You're early. That matters." : "You're on the list 🎉"}
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">
            {isB
              ? "We can't wait to help your team save time, reduce manual finance work and build agentic systems with better control."
              : "We just met you, but we already love you and we're rooting for you. You'll get early access updates, product drops, community invites and our best thoughts on AI agents, money and the future of banking."}
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <a href="/#thesis" className={ctaPrimary} style={{ backgroundColor: "#014BAA" }}>
            Read the Roving Thesis
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
          {isB && (
            /* TODO: replace # with Calendly or booking link */
            <a href="#" className={ctaLink}>
              Book a founder call
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          )}
          <a href="https://www.linkedin.com/company/rovinghq" target="_blank" rel="noopener noreferrer" className={ctaLink}>
            Follow us on LinkedIn
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
          <a href="https://x.com/rovinghq" target="_blank" rel="noopener noreferrer" className={ctaLink}>
            Follow us on X
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-white/40 leading-relaxed">
            {isB ? "Have an idea or want to tell us what your team needs?" : "Got an idea, question or wild feature request?"}
            <br />
            Email us:{" "}
            <a
              href={`mailto:${isB ? "business@roving.money" : "hello@roving.money"}`}
              className="text-white/60 hover:text-white transition-colors underline underline-offset-2"
            >
              {isB ? "business@roving.money" : "hello@roving.money"}
            </a>
          </p>
        </div>
      </div>
    );
  }

  function renderStep() {
    // Step 1 — User type
    if (step === 1) {
      return (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            How do you want to use Roving?
          </h2>
          <div className="flex flex-col gap-3 mt-1">
            {([
              { value: "individual" as UserType, label: "Individual", desc: "For personal banking, wallets, cards, AI tools and future agent access." },
              { value: "business" as UserType, label: "Business", desc: "For company banking, team spend, agent payments, approvals and financial operations." },
            ]).map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setData((d) => ({ ...d, userType: opt.value }))}
                className={`flex flex-col gap-1 px-5 py-4 rounded-xl border text-left transition-all ${
                  data.userType === opt.value
                    ? "border-[#014BAA] bg-[#014BAA1A]"
                    : "border-white/10 bg-white/5 hover:border-white/30"
                }`}
              >
                <span className="font-semibold text-sm text-white">{opt.label}</span>
                <span className="text-sm text-white/60">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Step 2 — Basic details
    if (step === 2) {
      const isB = userType === "business";
      return (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Tell us about yourself
          </h2>
          <div className="flex flex-col gap-4 mt-1">
            <Field label="Full name" required>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                placeholder="Enter your first & last name"
                className={INPUT_CLASS}
              />
            </Field>
            <Field label={isB ? "Work email" : "Email address"} required>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                placeholder="Enter your email"
                className={INPUT_CLASS}
              />
            </Field>
            {isB && (
              <Field label="Company name" required>
                <input
                  type="text"
                  value={data.companyName}
                  onChange={(e) => setData((d) => ({ ...d, companyName: e.target.value }))}
                  placeholder="e.g. Acme Corp"
                  className={INPUT_CLASS}
                />
              </Field>
            )}
            <Field label="Country" required>
              <input
                type="text"
                value={data.country}
                onChange={(e) => setData((d) => ({ ...d, country: e.target.value }))}
                placeholder="e.g. United Kingdom"
                className={INPUT_CLASS}
              />
            </Field>
            {isB && (
              <Field label="Company size" required>
                <div className="flex flex-wrap gap-2">
                  {COMPANY_SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setData((d) => ({ ...d, companySize: size }))}
                      className={cardClass(data.companySize === size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </Field>
            )}
          </div>
        </div>
      );
    }

    // Step 3 — Reasons
    if (step === 3) {
      const options = userType === "business" ? BUSINESS_REASONS : INDIVIDUAL_REASONS;
      return (
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
              {userType === "business" ? "Why is your business interested in Roving?" : "Why are you joining Roving?"}
            </h2>
            <p className="text-sm text-white/50 mt-1">Select all that apply.</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {options.map((opt) => (
              <button key={opt} type="button" onClick={() => toggleMulti("reasons", opt)} className={cardClass(data.reasons.includes(opt))}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Step 4 — AI agent usage
    if (step === 4) {
      const options = userType === "business" ? BUSINESS_AI_USAGE : INDIVIDUAL_AI_USAGE;
      return (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            {userType === "business" ? "Are you using or exploring AI agents?" : "Are you currently using AI agents?"}
          </h2>
          <div className="flex flex-col gap-2 mt-1">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setData((d) => ({ ...d, aiAgentUsage: opt }))}
                className={cardClass(data.aiAgentUsage === opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Step 5 — Features / Workflows
    if (step === 5) {
      const isB = userType === "business";
      const options = isB ? BUSINESS_WORKFLOWS : INDIVIDUAL_FEATURES;
      const field: MultiField = isB ? "businessWorkflows" : "wantedFeatures";
      const selected = isB ? data.businessWorkflows : data.wantedFeatures;
      return (
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
              {isB ? "What financial workflows matter most?" : "What would you want Roving to help you do?"}
            </h2>
            <p className="text-sm text-white/50 mt-1">Select all that apply.</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {options.map((opt) => (
              <button key={opt} type="button" onClick={() => toggleMulti(field, opt)} className={cardClass(selected.includes(opt))}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Step 6 — Priorities / Blockers
    if (step === 6) {
      const isB = userType === "business";
      const options = isB ? BUSINESS_BLOCKERS : INDIVIDUAL_PRIORITIES;
      const field: MultiField = isB ? "businessBlockers" : "priorities";
      const selected = isB ? data.businessBlockers : data.priorities;
      return (
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
              {isB ? "What is your biggest blocker today?" : "What matters most to you?"}
            </h2>
            <p className="text-sm text-white/50 mt-1">Select all that apply.</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {options.map((opt) => (
              <button key={opt} type="button" onClick={() => toggleMulti(field, opt)} className={cardClass(selected.includes(opt))}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Step 7 — Business: Early access interest
    if (step === 7 && userType === "business") {
      return (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Would you like to be considered for early access or a design partner conversation?
          </h2>
          <div className="flex flex-col gap-2 mt-1">
            {BUSINESS_EARLY_ACCESS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setData((d) => ({ ...d, earlyAccessInterest: opt }))}
                className={cardClass(data.earlyAccessInterest === opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Last step — Consent
    return (
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
          Almost there!
        </h2>
        <button
          type="button"
          onClick={() => setData((d) => ({ ...d, marketingConsent: !d.marketingConsent }))}
          className="flex items-start gap-3 text-left"
        >
          <div
            className={`mt-0.5 w-5 h-5 rounded shrink-0 flex items-center justify-center border transition-all ${
              data.marketingConsent ? "border-[#014BAA] bg-[#014BAA]" : "border-white/20 bg-white/5"
            }`}
          >
            {data.marketingConsent && (
              <span className="material-symbols-outlined text-white text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                check
              </span>
            )}
          </div>
          <span className="text-sm text-white/70 leading-relaxed">
            I&apos;d like to receive early access updates, product news and community invites from Roving.
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Progress bar */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40">Step {step} of {totalSteps}</span>
          <span className="text-xs text-white/40">{Math.round(progress * 100)}%</span>
        </div>
        <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress * 100}%`, backgroundColor: "#014BAA" }}
          />
        </div>
      </div>

      {/* Step content */}
      {renderStep()}

      {/* Validation error */}
      {validationError && (
        <p className="text-sm text-red-400 bg-red-400/10 px-4 py-3 rounded-xl">{validationError}</p>
      )}

      {/* API errors */}
      {status === "duplicate" && (
        <p className="text-sm text-amber-400 bg-amber-400/10 px-4 py-3 rounded-xl">
          This email is already on the waitlist — we&apos;ve got you!
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 bg-red-400/10 px-4 py-3 rounded-xl">{errorMsg}</p>
      )}

      {/* Navigation */}
      <div className={`flex items-center ${step > 1 ? "justify-between" : "justify-end"}`}>
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back
          </button>
        )}
        <button
          type="button"
          onClick={isLastStep ? handleSubmit : handleNext}
          disabled={status === "loading"}
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60 hover:opacity-90"
          style={{ backgroundColor: "#014BAA" }}
        >
          {status === "loading" ? (
            <>
              <span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
              Submitting...
            </>
          ) : isLastStep ? (
            "Join the waitlist"
          ) : (
            <>
              Continue
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
