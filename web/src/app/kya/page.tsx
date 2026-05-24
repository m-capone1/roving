"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

type AgentType = "Autonomous" | "Semi-autonomous" | "Supervised";
type Purpose = "Research" | "Travel" | "Marketing" | "DevOps" | "Finance" | "Legal" | "Other";
type Accountability = "Human-in-the-loop" | "Fully automated" | "Hybrid";
type Framework = "OpenAI Assistants" | "LangChain" | "CrewAI" | "AutoGen" | "LlamaIndex" | "Custom";
type ModelProvider = "OpenAI" | "Anthropic" | "Google" | "Mistral" | "Meta" | "Other";
type Hosting = "Cloud" | "Local" | "Hybrid";
type CloudProvider = "AWS" | "GCP" | "Azure" | "Other" | "N/A";
type SpendCategory = "Software / APIs" | "Cloud Infrastructure" | "Travel" | "Advertising" | "Data" | "Communication" | "Finance & Payments";
type Tool = "Pinecone" | "Weaviate" | "SerpAPI" | "Brave Search" | "Stripe" | "PayPal" | "AWS SDK" | "Google Cloud" | "Slack" | "Gmail" | "Twilio" | "GitHub" | "Linear" | "OpenAI API" | "Anthropic API";
type AccessLevel = "Read only" | "Read-write" | "Full access";
type Retention = "30 days" | "1 year" | "None";

interface FormState {
  // Step 1
  name: string;
  description: string;
  agentType: AgentType | "";
  purpose: Purpose | "";
  // Step 2
  owner: string;
  email: string;
  accountability: Accountability | "";
  liabilityAccepted: boolean;
  // Step 3
  frameworks: Framework[];
  modelProviders: ModelProvider[];
  hosting: Hosting | "";
  cloudProvider: CloudProvider | "";
  // Step 4
  spendCategories: SpendCategory[];
  maxTransaction: number;
  alwaysOn: boolean;
  regions: string[];
  approvalThreshold: number;
  // Step 5
  tools: Tool[];
  accessLevel: AccessLevel | "";
  retention: Retention | "";
  // Step 6 (terms)
  termsAccepted: boolean;
}

const INITIAL: FormState = {
  name: "", description: "", agentType: "", purpose: "",
  owner: "Maddy Capone", email: "maddy@roving.ai", accountability: "", liabilityAccepted: false,
  frameworks: [], modelProviders: [], hosting: "", cloudProvider: "",
  spendCategories: [], maxTransaction: 500, alwaysOn: false, regions: [],
  approvalThreshold: 200,
  tools: [], accessLevel: "", retention: "",
  termsAccepted: false,
};

const STEPS = [
  { number: 1, label: "Agent Info",          icon: "smart_toy" },
  { number: 2, label: "Ownership",           icon: "person_pin" },
  { number: 3, label: "Technical Details",   icon: "code" },
  { number: 4, label: "Capabilities",        icon: "bolt" },
  { number: 5, label: "Access & Permissions",icon: "key" },
  { number: 6, label: "Review & Submit",     icon: "fact_check" },
];

// ─── Small reusable components ────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[13px] font-semibold text-[color:var(--color-on-surface)] mb-1.5">{children}</p>;
}

function Hint({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-[color:var(--color-secondary)] mt-1">{children}</p>;
}

function TextInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-3 py-2.5 rounded-lg border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] text-sm text-[color:var(--color-on-surface)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 focus:border-[color:var(--color-primary)] transition-all"
    />
  );
}

function Textarea({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      className="w-full px-3 py-2.5 rounded-lg border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] text-sm text-[color:var(--color-on-surface)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 focus:border-[color:var(--color-primary)] transition-all resize-none"
    />
  );
}

function Select<T extends string>({
  value, onChange, options, placeholder,
}: {
  value: T | ""; onChange: (v: T) => void; options: T[]; placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className="w-full px-3 py-2.5 rounded-lg border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] text-sm text-[color:var(--color-on-surface)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 focus:border-[color:var(--color-primary)] transition-all appearance-none"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function ChipGroup<T extends string>({
  options, selected, onChange, icon,
}: {
  options: T[]; selected: T[]; onChange: (v: T[]) => void; icon?: string;
}) {
  function toggle(o: T) {
    onChange(selected.includes(o) ? selected.filter((x) => x !== o) : [...selected, o]);
  }
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = selected.includes(o);
        return (
          <button
            key={o}
            type="button"
            onClick={() => toggle(o)}
            className={[
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-medium border transition-all",
              active
                ? "bg-[color:var(--color-primary)]/10 border-[color:var(--color-primary)] text-[color:var(--color-primary)]"
                : "bg-[color:var(--color-surface-container-low)] border-[color:var(--color-outline-variant)] text-[color:var(--color-secondary)] hover:border-[color:var(--color-primary)]/40",
            ].join(" ")}
          >
            {icon && <span className="material-symbols-outlined text-[14px]">{icon}</span>}
            {active && <span className="material-symbols-outlined text-[14px]">check</span>}
            {o}
          </button>
        );
      })}
    </div>
  );
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div
        onClick={() => onChange(!checked)}
        className={[
          "relative w-10 h-6 rounded-full transition-colors",
          checked ? "bg-[color:var(--color-primary)]" : "bg-[color:var(--color-outline-variant)]",
        ].join(" ")}
      >
        <div className={[
          "absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform",
          checked ? "translate-x-5" : "translate-x-1",
        ].join(" ")} />
      </div>
      <span className="text-sm text-[color:var(--color-on-surface)]">{label}</span>
    </label>
  );
}

// ─── Risk computation ─────────────────────────────────────────────────────────

function computeRisk(f: FormState): "Low" | "Medium" | "High" {
  let score = 0;
  if (f.agentType === "Autonomous") score += 3;
  if (f.agentType === "Semi-autonomous") score += 1;
  if (f.tools.includes("Stripe") || f.tools.includes("PayPal")) score += 2;
  if (f.accessLevel === "Full access") score += 2;
  if (f.accessLevel === "Read-write") score += 1;
  if (f.alwaysOn) score += 1;
  if (f.maxTransaction > 1000) score += 2;
  if (f.maxTransaction > 500) score += 1;
  if (f.spendCategories.includes("Finance & Payments")) score += 2;
  if (f.accountability === "Fully automated") score += 2;
  if (f.regions.length > 2) score += 1;
  if (score >= 8) return "High";
  if (score >= 4) return "Medium";
  return "Low";
}

const RISK_CONFIG = {
  Low:    { color: "text-[color:var(--color-tertiary)]",  bg: "bg-[color:var(--color-tertiary-container)]/10", icon: "verified_user" },
  Medium: { color: "text-orange-600",                      bg: "bg-orange-50",                                  icon: "shield" },
  High:   { color: "text-[color:var(--color-error)]",     bg: "bg-[color:var(--color-error-container)]/10",   icon: "warning" },
};

// ─── Step components ──────────────────────────────────────────────────────────

function Step1({ f, set }: { f: FormState; set: (k: keyof FormState, v: unknown) => void }) {
  return (
    <div className="space-y-5">
      <div>
        <Label>Agent name</Label>
        <TextInput value={f.name} onChange={(v) => set("name", v)} placeholder="e.g. Research Agent" />
      </div>
      <div>
        <Label>Description</Label>
        <Textarea value={f.description} onChange={(v) => set("description", v)} placeholder="What does this agent do?" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Agent type</Label>
          <Select
            value={f.agentType}
            onChange={(v) => set("agentType", v)}
            options={["Autonomous", "Semi-autonomous", "Supervised"] as AgentType[]}
            placeholder="Select type"
          />
          <Hint>How much human oversight does this agent require?</Hint>
        </div>
        <div>
          <Label>Primary purpose</Label>
          <Select
            value={f.purpose}
            onChange={(v) => set("purpose", v)}
            options={["Research", "Travel", "Marketing", "DevOps", "Finance", "Legal", "Other"] as Purpose[]}
            placeholder="Select purpose"
          />
        </div>
      </div>
    </div>
  );
}

function Step2({ f, set }: { f: FormState; set: (k: keyof FormState, v: unknown) => void }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Owner name</Label>
          <TextInput value={f.owner} onChange={(v) => set("owner", v)} />
        </div>
        <div>
          <Label>Contact email</Label>
          <TextInput value={f.email} onChange={(v) => set("email", v)} />
        </div>
      </div>
      <div>
        <Label>Accountability model</Label>
        <Select
          value={f.accountability}
          onChange={(v) => set("accountability", v)}
          options={["Human-in-the-loop", "Fully automated", "Hybrid"] as Accountability[]}
          placeholder="Select model"
        />
        <Hint>Defines how decisions and errors are attributed and handled.</Hint>
      </div>
      <div className="p-4 rounded-xl bg-[color:var(--color-surface-container-low)] border border-[color:var(--color-outline-variant)]">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={f.liabilityAccepted}
            onChange={(e) => set("liabilityAccepted", e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-[color:var(--color-outline-variant)] accent-[color:var(--color-primary)]"
          />
          <span className="text-sm text-[color:var(--color-on-surface-variant)]">
            I confirm that I am the authorized owner of this agent and accept full liability for its actions and transactions within Roving.
          </span>
        </label>
      </div>
    </div>
  );
}

function Step3({ f, set }: { f: FormState; set: (k: keyof FormState, v: unknown) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <Label>Framework</Label>
        <Hint>Select all that apply.</Hint>
        <div className="mt-2">
          <ChipGroup
            options={["OpenAI Assistants", "LangChain", "CrewAI", "AutoGen", "LlamaIndex", "Custom"] as Framework[]}
            selected={f.frameworks}
            onChange={(v) => set("frameworks", v)}
          />
        </div>
      </div>
      <div>
        <Label>Model provider</Label>
        <div className="mt-2">
          <ChipGroup
            options={["OpenAI", "Anthropic", "Google", "Mistral", "Meta", "Other"] as ModelProvider[]}
            selected={f.modelProviders}
            onChange={(v) => set("modelProviders", v)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Hosting environment</Label>
          <Select
            value={f.hosting}
            onChange={(v) => set("hosting", v)}
            options={["Cloud", "Local", "Hybrid"] as Hosting[]}
            placeholder="Select hosting"
          />
        </div>
        <div>
          <Label>Cloud provider</Label>
          <Select
            value={f.cloudProvider}
            onChange={(v) => set("cloudProvider", v)}
            options={["AWS", "GCP", "Azure", "Other", "N/A"] as CloudProvider[]}
            placeholder="Select provider"
          />
        </div>
      </div>
    </div>
  );
}

function Step4({ f, set }: { f: FormState; set: (k: keyof FormState, v: unknown) => void }) {
  const regions = ["United States", "United Kingdom", "European Union", "Canada", "Australia", "Global"];
  return (
    <div className="space-y-6">
      <div>
        <Label>Spend categories</Label>
        <Hint>What types of purchases will this agent make?</Hint>
        <div className="mt-2">
          <ChipGroup
            options={["Software / APIs", "Cloud Infrastructure", "Travel", "Advertising", "Data", "Communication", "Finance & Payments"] as SpendCategory[]}
            selected={f.spendCategories}
            onChange={(v) => set("spendCategories", v)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Max single transaction</Label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[color:var(--color-secondary)]">$</span>
            <input
              type="number"
              value={f.maxTransaction}
              onChange={(e) => set("maxTransaction", Number(e.target.value))}
              min={0}
              className="flex-1 px-3 py-2.5 rounded-lg border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 focus:border-[color:var(--color-primary)] transition-all"
            />
          </div>
        </div>
        <div>
          <Label>Human approval above</Label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[color:var(--color-secondary)]">$</span>
            <input
              type="number"
              value={f.approvalThreshold}
              onChange={(e) => set("approvalThreshold", Number(e.target.value))}
              min={0}
              className="flex-1 px-3 py-2.5 rounded-lg border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 focus:border-[color:var(--color-primary)] transition-all"
            />
          </div>
        </div>
      </div>
      <div>
        <Toggle checked={f.alwaysOn} onChange={(v) => set("alwaysOn", v)} label="Operates 24/7 (always-on agent)" />
      </div>
      <div>
        <Label>Geographic scope</Label>
        <ChipGroup
          options={regions}
          selected={f.regions}
          onChange={(v) => set("regions", v)}
        />
      </div>
    </div>
  );
}

function Step5({ f, set }: { f: FormState; set: (k: keyof FormState, v: unknown) => void }) {
  const toolGroups = [
    { category: "Vector / Data", tools: ["Pinecone", "Weaviate"] as Tool[] },
    { category: "Search", tools: ["SerpAPI", "Brave Search"] as Tool[] },
    { category: "Payments", tools: ["Stripe", "PayPal"] as Tool[] },
    { category: "Cloud", tools: ["AWS SDK", "Google Cloud"] as Tool[] },
    { category: "Communication", tools: ["Slack", "Gmail", "Twilio"] as Tool[] },
    { category: "Development", tools: ["GitHub", "Linear"] as Tool[] },
    { category: "AI APIs", tools: ["OpenAI API", "Anthropic API"] as Tool[] },
  ];
  return (
    <div className="space-y-6">
      <div>
        <Label>Connected tools & integrations</Label>
        <Hint>Select every external service this agent can call.</Hint>
        <div className="mt-3 space-y-3">
          {toolGroups.map((g) => (
            <div key={g.category}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--color-outline)] mb-2">{g.category}</p>
              <ChipGroup options={g.tools} selected={f.tools} onChange={(v) => set("tools", v)} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>API access level</Label>
          <Select
            value={f.accessLevel}
            onChange={(v) => set("accessLevel", v)}
            options={["Read only", "Read-write", "Full access"] as AccessLevel[]}
            placeholder="Select level"
          />
        </div>
        <div>
          <Label>Data retention</Label>
          <Select
            value={f.retention}
            onChange={(v) => set("retention", v)}
            options={["30 days", "1 year", "None"] as Retention[]}
            placeholder="Select retention"
          />
        </div>
      </div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start py-2.5 border-b border-[color:var(--color-outline-variant)] last:border-0">
      <span className="text-xs text-[color:var(--color-secondary)] w-36 shrink-0">{label}</span>
      <span className="text-sm text-[color:var(--color-on-surface)] text-right">{value || "—"}</span>
    </div>
  );
}

function Step6({ f, set }: { f: FormState; set: (k: keyof FormState, v: unknown) => void }) {
  const risk = computeRisk(f);
  const rc = RISK_CONFIG[risk];
  return (
    <div className="space-y-5">
      <div className={`flex items-center gap-3 p-4 rounded-xl ${rc.bg} border border-current/10`}>
        <span className={`material-symbols-outlined text-2xl ${rc.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>
          {rc.icon}
        </span>
        <div>
          <p className={`text-sm font-bold ${rc.color}`}>Risk Rating: {risk}</p>
          <p className="text-xs text-[color:var(--color-secondary)]">
            {risk === "Low" && "This agent has a low-risk profile. Standard controls apply."}
            {risk === "Medium" && "Moderate risk detected. Enhanced monitoring will be enabled."}
            {risk === "High" && "High-risk profile. Manual review may be required after submission."}
          </p>
        </div>
      </div>

      <div className="bg-[color:var(--color-surface-container-lowest)] rounded-xl border border-[color:var(--color-outline-variant)] p-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[color:var(--color-outline)] mb-3">Agent Details</p>
        <ReviewRow label="Name" value={f.name} />
        <ReviewRow label="Type" value={f.agentType} />
        <ReviewRow label="Purpose" value={f.purpose} />
        <ReviewRow label="Owner" value={f.owner} />
        <ReviewRow label="Accountability" value={f.accountability} />
        <ReviewRow label="Framework" value={f.frameworks.join(", ")} />
        <ReviewRow label="Model providers" value={f.modelProviders.join(", ")} />
        <ReviewRow label="Hosting" value={f.hosting} />
        <ReviewRow label="Spend categories" value={f.spendCategories.join(", ")} />
        <ReviewRow label="Max transaction" value={f.maxTransaction ? `$${f.maxTransaction}` : ""} />
        <ReviewRow label="Approval above" value={f.approvalThreshold ? `$${f.approvalThreshold}` : ""} />
        <ReviewRow label="Always-on" value={f.alwaysOn ? "Yes" : "No"} />
        <ReviewRow label="Connected tools" value={f.tools.join(", ")} />
        <ReviewRow label="Access level" value={f.accessLevel} />
        <ReviewRow label="Data retention" value={f.retention} />
      </div>

      <div className="p-4 rounded-xl bg-[color:var(--color-surface-container-low)] border border-[color:var(--color-outline-variant)]">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={f.termsAccepted}
            onChange={(e) => set("termsAccepted", e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded accent-[color:var(--color-primary)]"
          />
          <span className="text-sm text-[color:var(--color-on-surface-variant)]">
            I confirm that the information provided is accurate and I accept Roving&apos;s{" "}
            <span className="text-[color:var(--color-primary)] underline cursor-pointer">Agent Terms of Service</span>{" "}
            and{" "}
            <span className="text-[color:var(--color-primary)] underline cursor-pointer">KYA Policy</span>.
          </span>
        </label>
      </div>
    </div>
  );
}

// ─── Verifying screen ─────────────────────────────────────────────────────────

function VerifyingScreen({ agentName }: { agentName: string }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-6 text-center px-8">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full animate-spin" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="4" />
          <circle cx="40" cy="40" r="34" fill="none" stroke="#0052ff" strokeWidth="4"
            strokeDasharray="60 154" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-[color:var(--color-primary)] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            smart_toy
          </span>
        </div>
      </div>
      <div>
        <p className="text-xl font-bold text-[color:var(--color-on-surface)]" style={{ fontFamily: "var(--font-display)" }}>
          Verifying {agentName || "your agent"}…
        </p>
        <p className="text-sm text-[color:var(--color-secondary)] mt-1">Checking identity, capabilities, and risk profile</p>
      </div>
      <div className="flex flex-col gap-2 text-sm text-[color:var(--color-secondary)]">
        {["Identity verified", "Ownership confirmed", "Risk assessment complete"].map((s, i) => (
          <div key={s} className="flex items-center gap-2" style={{ animationDelay: `${i * 0.4}s` }}>
            <span className="material-symbols-outlined text-[color:var(--color-tertiary)] text-[18px]">check_circle</span>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

function SuccessScreen({ agentName, risk, onDone }: { agentName: string; risk: string; onDone: () => void }) {
  const rc = RISK_CONFIG[risk as keyof typeof RISK_CONFIG];
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-6 text-center px-8">
      <div className="w-20 h-20 rounded-full bg-[color:var(--color-tertiary-container)]/10 flex items-center justify-center">
        <span className="material-symbols-outlined text-[color:var(--color-tertiary)] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          verified
        </span>
      </div>
      <div>
        <p className="text-2xl font-bold text-[color:var(--color-on-surface)]" style={{ fontFamily: "var(--font-display)" }}>
          {agentName || "Agent"} is verified
        </p>
        <p className="text-sm text-[color:var(--color-secondary)] mt-1">KYA verification complete</p>
      </div>
      <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${rc.bg}`}>
        <span className={`material-symbols-outlined text-[18px] ${rc.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{rc.icon}</span>
        <span className={`text-sm font-semibold ${rc.color}`}>Risk rating: {risk}</span>
      </div>
      <button
        onClick={onDone}
        className="px-6 py-3 bg-[color:var(--color-primary-container)] text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        Go to dashboard
      </button>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function KYAPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [form, setForm] = useState<FormState>(INITIAL);
  const [phase, setPhase] = useState<"form" | "verifying" | "success">("form");
  const animKey = useRef(0);

  function setField(k: keyof FormState, v: unknown) {
    setForm((prev) => ({ ...prev, [k]: v }));
  }

  function goTo(n: number, dir: "forward" | "backward") {
    animKey.current += 1;
    setDirection(dir);
    setStep(n);
  }

  function handleNext() {
    if (step < 6) goTo(step + 1, "forward");
  }

  function handleBack() {
    if (step > 1) goTo(step - 1, "backward");
  }

  function handleSubmit() {
    setPhase("verifying");
    const risk = computeRisk(form);
    setTimeout(() => {
      setPhase("success");
      setTimeout(() => {
        void risk;
      }, 0);
    }, 2500);
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
    return (
      <div className="flex flex-1">
        <VerifyingScreen agentName={form.name} />
      </div>
    );
  }

  if (phase === "success") {
    return (
      <div className="flex flex-1">
        <SuccessScreen
          agentName={form.name}
          risk={computeRisk(form)}
          onDone={() => router.push("/dashboard")}
        />
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
              className={[
                "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors",
                active ? "bg-[color:var(--color-primary)]/8" : "",
              ].join(" ")}
            >
              <div className={[
                "w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-colors",
                done
                  ? "bg-[color:var(--color-tertiary)] text-white"
                  : active
                  ? "bg-[color:var(--color-primary)] text-white"
                  : "bg-[color:var(--color-surface-container-high)] text-[color:var(--color-outline)]",
              ].join(" ")}>
                {done
                  ? <span className="material-symbols-outlined text-[14px]">check</span>
                  : s.number}
              </div>
              <div>
                <p className={[
                  "text-[13px] font-semibold",
                  active
                    ? "text-[color:var(--color-primary)]"
                    : done
                    ? "text-[color:var(--color-on-surface)]"
                    : "text-[color:var(--color-secondary)]",
                ].join(" ")}>{s.label}</p>
              </div>
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
            <h2
              className="text-2xl font-bold text-[color:var(--color-on-surface)] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {[
                "Tell us about your agent",
                "Who owns this agent?",
                "Technical configuration",
                "Capabilities & spending",
                "Access & permissions",
                "Review & confirm",
              ][step - 1]}
            </h2>

            <div
              key={animKey.current}
              className={direction === "forward" ? "animate-slide-in-right" : "animate-slide-in-left"}
            >
              {stepContent[step]}
            </div>
          </div>
        </div>

        {/* Nav buttons */}
        <div className="shrink-0 border-t border-[color:var(--color-outline-variant)] px-10 py-5 flex justify-between items-center bg-[color:var(--color-surface-container-lowest)]">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[color:var(--color-outline-variant)] text-sm font-semibold text-[color:var(--color-secondary)] hover:bg-[color:var(--color-surface-container)] transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back
          </button>

          {step < 6 ? (
            <button
              onClick={handleNext}
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
