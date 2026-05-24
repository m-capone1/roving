import { FormState } from "./types";

export type RiskLevel = "Low" | "Medium" | "High";

export function computeRisk(f: FormState): RiskLevel {
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

export const RISK_CONFIG: Record<RiskLevel, { color: string; bg: string; icon: string }> = {
  Low:    { color: "text-[color:var(--color-tertiary)]", bg: "bg-[color:var(--color-tertiary-container)]/10", icon: "verified_user" },
  Medium: { color: "text-orange-600",                    bg: "bg-orange-50",                                  icon: "shield" },
  High:   { color: "text-[color:var(--color-error)]",   bg: "bg-[color:var(--color-error-container)]/10",   icon: "warning" },
};
