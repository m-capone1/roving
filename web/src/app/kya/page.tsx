"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormState, INITIAL, STEPS, STEP_TITLES } from "./types";
import { computeRisk } from "./risk";
import { Step1, Step2, Step3, Step4, Step5, Step6, VerifyingScreen, SuccessScreen } from "./steps";

export default function KYAPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [form, setForm] = useState<FormState>(INITIAL);
  const [phase, setPhase] = useState<"form" | "verifying" | "success">("form");
  const [animKey, setAnimKey] = useState(0);

  function setField(k: keyof FormState, v: unknown) {
    setForm((prev) => ({ ...prev, [k]: v }));
  }

  function goTo(n: number, dir: "forward" | "backward") {
    setAnimKey((k) => k + 1);
    setDirection(dir);
    setStep(n);
  }

  function handleSubmit() {
    setPhase("verifying");
    setTimeout(() => setPhase("success"), 2500);
  }

  const stepContent: Record<number, React.ReactNode> = {
    1: <Step1 f={form} set={setField} />,
    2: <Step2 f={form} set={setField} />,
    3: <Step3 f={form} set={setField} />,
    4: <Step4 f={form} set={setField} />,
    5: <Step5 f={form} set={setField} />,
    6: <Step6 f={form} set={setField} />,
  };

  const canAdvance =
    (step === 1 && !!form.name && !!form.agentType && !!form.purpose) ||
    (step === 2 && !!form.accountability && form.liabilityAccepted) ||
    (step === 3 && form.frameworks.length > 0 && !!form.hosting) ||
    (step === 4 && form.spendCategories.length > 0) ||
    (step === 5 && form.tools.length > 0 && !!form.accessLevel && !!form.retention) ||
    (step === 6 && form.termsAccepted);

  if (phase === "verifying") {
    return <div className="flex flex-1"><VerifyingScreen agentName={form.name} /></div>;
  }

  if (phase === "success") {
    return (
      <div className="flex flex-1">
        <SuccessScreen agentName={form.name} risk={computeRisk(form)} onDone={() => router.push("/dashboard")} />
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      {/* Step sidebar */}
      <aside className="w-64 shrink-0 bg-[color:var(--color-surface-container-lowest)] border-r border-[color:var(--color-outline-variant)] py-10 px-6 flex flex-col gap-1">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[color:var(--color-outline)] mb-4 px-2">
          Verification Steps
        </p>
        {STEPS.map((s) => {
          const done = s.number < step;
          const active = s.number === step;
          return (
            <div
              key={s.number}
              className={["flex items-center gap-3 px-3 py-3 rounded-lg transition-colors", active ? "bg-[color:var(--color-primary)]/8" : ""].join(" ")}
            >
              <div className={[
                "w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-colors",
                done ? "bg-[color:var(--color-tertiary)] text-white"
                  : active ? "bg-[color:var(--color-primary)] text-white"
                  : "bg-[color:var(--color-surface-container-high)] text-[color:var(--color-outline)]",
              ].join(" ")}>
                {done ? <span className="material-symbols-outlined text-[14px]">check</span> : s.number}
              </div>
              <p className={[
                "text-[13px] font-semibold",
                active ? "text-[color:var(--color-primary)]"
                  : done ? "text-[color:var(--color-on-surface)]"
                  : "text-[color:var(--color-secondary)]",
              ].join(" ")}>{s.label}</p>
            </div>
          );
        })}
        <div className="mt-auto pt-6">
          <div className="h-1.5 w-full bg-[color:var(--color-surface-container-high)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[color:var(--color-primary)] rounded-full transition-all duration-500"
              style={{ width: `${((step - 1) / 5) * 100}%` }}
            />
          </div>
          <p className="text-xs text-[color:var(--color-secondary)] mt-2">Step {step} of 6</p>
        </div>
      </aside>

      {/* Form area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto px-10 py-10">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--color-primary)] mb-1">
              Step {step} — {STEPS[step - 1].label}
            </p>
            <h2 className="text-2xl font-bold text-[color:var(--color-on-surface)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
              {STEP_TITLES[step - 1]}
            </h2>
            <div key={animKey} className={direction === "forward" ? "animate-slide-in-right" : "animate-slide-in-left"}>
              {stepContent[step]}
            </div>
          </div>
        </div>

        {/* Nav buttons */}
        <div className="shrink-0 border-t border-[color:var(--color-outline-variant)] px-10 py-5 flex justify-between items-center bg-[color:var(--color-surface-container-lowest)]">
          <button
            onClick={() => step > 1 && goTo(step - 1, "backward")}
            disabled={step === 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[color:var(--color-outline-variant)] text-sm font-semibold text-[color:var(--color-secondary)] hover:bg-[color:var(--color-surface-container)] transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back
          </button>

          {step < 6 ? (
            <button
              onClick={() => goTo(step + 1, "forward")}
              disabled={!canAdvance}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[color:var(--color-primary-container)] text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-30 disabled:pointer-events-none"
            >
              Continue
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canAdvance}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[color:var(--color-primary-container)] text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-30 disabled:pointer-events-none"
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Submit for Verification
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
