"use client";

import { FormState, Framework, ModelProvider, Hosting, CloudProvider, SpendCategory, Tool, AccessLevel, Retention, AgentType, Purpose, Accountability } from "./types";
import { computeRisk, RISK_CONFIG } from "./risk";
import { Label, Hint, TextInput, Textarea, Select, ChipGroup, Toggle } from "./ui";

type StepProps = { f: FormState; set: (k: keyof FormState, v: unknown) => void };

export function Step1({ f, set }: StepProps) {
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

export function Step2({ f, set }: StepProps) {
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

export function Step3({ f, set }: StepProps) {
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

export function Step4({ f, set }: StepProps) {
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
      <Toggle checked={f.alwaysOn} onChange={(v) => set("alwaysOn", v)} label="Operates 24/7 (always-on agent)" />
      <div>
        <Label>Geographic scope</Label>
        <ChipGroup options={regions} selected={f.regions} onChange={(v) => set("regions", v)} />
      </div>
    </div>
  );
}

export function Step5({ f, set }: StepProps) {
  const toolGroups = [
    { category: "Vector / Data",  tools: ["Pinecone", "Weaviate"] as Tool[] },
    { category: "Search",         tools: ["SerpAPI", "Brave Search"] as Tool[] },
    { category: "Payments",       tools: ["Stripe", "PayPal"] as Tool[] },
    { category: "Cloud",          tools: ["AWS SDK", "Google Cloud"] as Tool[] },
    { category: "Communication",  tools: ["Slack", "Gmail", "Twilio"] as Tool[] },
    { category: "Development",    tools: ["GitHub", "Linear"] as Tool[] },
    { category: "AI APIs",        tools: ["OpenAI API", "Anthropic API"] as Tool[] },
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

export function Step6({ f, set }: StepProps) {
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

export function VerifyingScreen({ agentName }: { agentName: string }) {
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

export function SuccessScreen({ agentName, risk, onDone }: { agentName: string; risk: string; onDone: () => void }) {
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
