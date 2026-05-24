export type AgentType = "Autonomous" | "Semi-autonomous" | "Supervised";
export type Purpose = "Research" | "Travel" | "Marketing" | "DevOps" | "Finance" | "Legal" | "Other";
export type Accountability = "Human-in-the-loop" | "Fully automated" | "Hybrid";
export type Framework = "OpenAI Assistants" | "LangChain" | "CrewAI" | "AutoGen" | "LlamaIndex" | "Custom";
export type ModelProvider = "OpenAI" | "Anthropic" | "Google" | "Mistral" | "Meta" | "Other";
export type Hosting = "Cloud" | "Local" | "Hybrid";
export type CloudProvider = "AWS" | "GCP" | "Azure" | "Other" | "N/A";
export type SpendCategory = "Software / APIs" | "Cloud Infrastructure" | "Travel" | "Advertising" | "Data" | "Communication" | "Finance & Payments";
export type Tool = "Pinecone" | "Weaviate" | "SerpAPI" | "Brave Search" | "Stripe" | "PayPal" | "AWS SDK" | "Google Cloud" | "Slack" | "Gmail" | "Twilio" | "GitHub" | "Linear" | "OpenAI API" | "Anthropic API";
export type AccessLevel = "Read only" | "Read-write" | "Full access";
export type Retention = "30 days" | "1 year" | "None";

export interface FormState {
  name: string;
  description: string;
  agentType: AgentType | "";
  purpose: Purpose | "";
  owner: string;
  email: string;
  accountability: Accountability | "";
  liabilityAccepted: boolean;
  frameworks: Framework[];
  modelProviders: ModelProvider[];
  hosting: Hosting | "";
  cloudProvider: CloudProvider | "";
  spendCategories: SpendCategory[];
  maxTransaction: number;
  alwaysOn: boolean;
  regions: string[];
  approvalThreshold: number;
  tools: Tool[];
  accessLevel: AccessLevel | "";
  retention: Retention | "";
  termsAccepted: boolean;
}

export const INITIAL: FormState = {
  name: "", description: "", agentType: "", purpose: "",
  owner: "Maddy Capone", email: "maddy@roving.ai", accountability: "", liabilityAccepted: false,
  frameworks: [], modelProviders: [], hosting: "", cloudProvider: "",
  spendCategories: [], maxTransaction: 500, alwaysOn: false, regions: [],
  approvalThreshold: 200,
  tools: [], accessLevel: "", retention: "",
  termsAccepted: false,
};

export const STEPS = [
  { number: 1, label: "Agent Info",           icon: "smart_toy" },
  { number: 2, label: "Ownership",            icon: "person_pin" },
  { number: 3, label: "Technical Details",    icon: "code" },
  { number: 4, label: "Capabilities",         icon: "bolt" },
  { number: 5, label: "Access & Permissions", icon: "key" },
  { number: 6, label: "Review & Submit",      icon: "fact_check" },
] as const;

export const STEP_TITLES = [
  "Tell us about your agent",
  "Who owns this agent?",
  "Technical configuration",
  "Capabilities & spending",
  "Access & permissions",
  "Review & confirm",
] as const;
