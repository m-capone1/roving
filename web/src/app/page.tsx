import Image from "next/image";
import Navbar from "@/components/landing/Navbar";
import WaitlistForm from "@/components/landing/WaitlistForm";

// ─── Features ────────────────────────────────────────────────────────────────
const features = [
  {
    tag: "Agent Bank Accounts",
    title: "Open a global account for your AI agent",
    body: "Create dedicated wallets, cards and controls for agents that need to operate across borders, platforms and payments.",
    icon: "account_balance",
    color: "from-[#dde1ff] to-[#b7c4ff]",
  },
  {
    tag: "Global Payments",
    title: "Convert and move money for agent workflows",
    body: "Let your agents pay APIs, vendors and services globally while you control limits, rules and permissions.",
    icon: "sync_alt",
    color: "from-[#6ffbbe] to-[#007550]",
  },
  {
    tag: "Virtual Cards",
    title: "Give your agents controlled spending power",
    body: "Issue virtual cards for every AI agent with limits, approvals and real-time controls built in.",
    icon: "credit_card",
    color: "from-[#b7c4ff] to-[#003ec7]",
  },
  {
    tag: "Secure Payments",
    title: "Let your agents handle payments safely",
    body: "Give agents permission to move money for workflows, operations and subscriptions while you stay in control of approvals, limits and audit trails.",
    icon: "shield",
    color: "from-[#d0e1fb] to-[#505f76]",
  },
  {
    tag: "Voice & Text Commands",
    title: "Initiate payments with a simple voice or text command.",
    body: "Let Phoebe execute transactions using your existing rules, approvals and payment rails.",
    icon: "mic",
    color: "from-[#dde1ff] to-[#0052ff]",
  },
];

// ─── Use cases ───────────────────────────────────────────────────────────────
const useCases = [
  { title: "Agentic Banking", body: "Roving helps businesses give AI agents accounts, wallets and cards with built-in controls and approvals.", icon: "corporate_fare" },
  { title: "Invoice Payments", body: "Roving helps teams automate invoice discovery, validation and payment through AI-driven workflows.", icon: "receipt_long" },
  { title: "Subscription Management", body: "Roving helps agents manage recurring SaaS, API and infrastructure payments without manual operations.", icon: "autorenew" },
  { title: "Travel & Booking", body: "Roving helps travel agents securely book flights, hotels and transport within spending policies.", icon: "flight" },
  { title: "Procurement Operations", body: "Roving helps businesses automate purchasing workflows while keeping humans in control of approvals and limits.", icon: "shopping_cart" },
  { title: "Treasury & Budgeting", body: "Roving helps companies allocate, monitor and control spending across agents, teams and currencies.", icon: "account_balance_wallet" },
  { title: "AI Commerce", body: "Roving helps autonomous systems transact safely across digital services, APIs and marketplaces.", icon: "storefront" },
  { title: "Compliance & Audit", body: "Roving helps organizations track every request, approval and transaction with complete execution visibility.", icon: "fact_check" },
];

// ─── Comparison table ────────────────────────────────────────────────────────
const comparisons = [
  { roving: "Full financial workspace for agent owners", others: "Usually focused on one layer: payments, wallets or identity" },
  { roving: "Phoebe executes banking tasks by text or voice", others: "Mostly API-first flows requiring technical setup" },
  { roving: "Dedicated accounts, wallets and cards per agent", others: "Often shared balances or payment rails without full account structure" },
  { roving: "Owner-defined rules before money moves", others: "Controls often happen at payment level only" },
  { roving: "Approvals, limits, vendors and categories in one place", others: "Rules are usually fragmented across tools" },
  { roving: "Execution trace for every transaction", others: "Logs show payment status, not the full decision trail" },
  { roving: "Personal, team and enterprise modes", others: "Usually built for developers or businesses only" },
  { roving: "Multi-currency and multi-rail roadmap", others: "Often tied to cards, crypto or one payment method" },
  { roving: "Agent financial history over time", others: "Little focus on long-term agent trust records" },
  { roving: "Human control built into every workflow", others: "Often optimized for agent autonomy first" },
];

// ─── KYA checks ──────────────────────────────────────────────────────────────
const kyaChecks = [
  { label: "Agent ownership", detail: "Who owns, controls and is responsible for the agent." },
  { label: "Agent purpose", detail: "What the agent is designed to do and why it needs financial access." },
  { label: "Build environment", detail: "Whether it runs on OpenAI, LangChain, CrewAI, AutoGen, MCP tools, custom code or another stack." },
  { label: "Connected tools", detail: "What APIs, apps, wallets, accounts and services the agent can access." },
  { label: "Financial permissions", detail: "Whether it can spend, transfer, receive, convert, subscribe or request approvals." },
  { label: "Risk profile", detail: "How sensitive the agent's actions are based on spend type, limits, vendors and workflow." },
  { label: "Behaviour history", detail: "A growing record of past approvals, blocked actions, transactions and policy checks." },
];

// ─── API features ─────────────────────────────────────────────────────────────
const apiFeatures = [
  { num: "01", title: "Agent float", body: "Pre-fund agents with the exact money they need to complete work." },
  { num: "02", title: "Spend expiration", body: "Give agents temporary budgets that expire after a task, trip or campaign." },
  { num: "03", title: "Merchant memory", body: "Remember trusted vendors so approved payments get faster over time." },
  { num: "04", title: "Failed payment recovery", body: "Let agents retry, reroute or escalate failed payments without breaking workflows." },
  { num: "05", title: "Agent receipts", body: "Every agent action creates a receipt with purpose, approval and outcome." },
  { num: "06", title: "Reusable playbooks", body: "Save payment rules once and apply them to every similar agent workflow." },
];

// ─── Footer columns ───────────────────────────────────────────────────────────
const footerCols = [
  {
    heading: "Products",
    links: ["Agent Accounts", "Virtual Cards", "Agent Wallets", "Global Payments", "Multi-Currency", "Phoebe AI", "KYA", "Approvals & Controls", "API & SDKs"],
  },
  {
    heading: "Developers",
    links: ["API Docs", "Sandbox", "Webhooks", "SDKs", "Status", "Changelog", "Guides"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Blog", "Press", "Trust Center", "Contact"],
  },
  {
    heading: "Use Cases",
    links: ["AI Startups", "Agent Builders", "Enterprises", "Developers", "Finance Teams", "Operations Teams", "Autonomous Commerce"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms", "Acceptable Use", "Cookie Policy", "Risk Disclosure", "Compliance"],
  },
  {
    heading: "Contact",
    links: ["hello@roving.money", "020 3307 6448", "71–75 Shelton Street", "Covent Garden", "London, WC2H 9JQ"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[color:var(--color-on-surface)]">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 overflow-hidden min-h-screen" style={{ background: "linear-gradient(to bottom, #ffffff 0%, #dde5ff 100%)" }}>
        <div className="max-w-[1200px] mx-auto px-6 w-full h-full min-h-screen grid md:grid-cols-2 gap-12">
          {/* Left copy — vertically centred */}
          <div className="flex flex-col justify-center gap-8 z-10 py-16 sm:py-24">
            <div className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full text-sm text-[color:var(--color-primary)] font-medium" style={{ backgroundColor: "#014BAA26" }}>
              The Neo Bank for the Agentic Economy
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] text-[color:var(--color-on-surface)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Banking at the speed of{" "}
              <em className="italic text-[color:var(--color-primary)]">compute.</em>
            </h1>

            <p className="text-lg text-[color:var(--color-secondary)] leading-relaxed max-w-lg">
              Roving gives every AI agent a real bank account, smart cards, spending rules and an identity you can trust.
            </p>

            <a
              href="#waitlist"
              className="inline-flex self-start items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base shadow-lg"
              style={{ backgroundColor: "#014BAA" }}
            >
              Get early access
            </a>
          </div>

          {/* Right illustration — bottom-flush, ~84% of section height */}
          <div className="relative hidden md:flex items-end justify-center self-stretch">
            <Image
              src="/hero.png"
              alt="Roving platform illustration"
              width={760}
              height={816}
              className="w-full max-h-[84%] object-contain object-bottom drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── PARTNERS ──────────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-[color:var(--color-outline-variant)]/40">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-16">
          <p className="text-xl font-medium text-center text-[color:var(--color-secondary)] max-w-2xl leading-snug">
            Connect your stack and supercharge your agents to do more in a controlled and secure way.
          </p>
          <Image
            src="/companies.png"
            alt="Vercel, Twilio, Stripe, OpenAI, Anthropic and more"
            width={1200}
            height={120}
            className="w-full object-contain sm:scale-125"
          />
        </div>
      </section>

      {/* ── PRODUCT SCREENSHOT ────────────────────────────────────────────── */}
      <section className="py-20 bg-[color:var(--color-surface-container-low)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="relative">
            <Image
              src="/account-screenshot-2.png"
              alt="Roving dashboard — manage your AI agents, wallets and cards"
              width={1200}
              height={800}
              className="w-full rounded-3xl shadow-2xl shadow-black/10"
            />
            {/* New logo overlay — percentage-based so it stays put at any size */}
            <div className="absolute" style={{ top: "2.6%", left: "2.8%" }}>
              <Image
                src="/logo-symbol.png"
                alt=""
                width={24}
                height={24}
                className="w-[2.4%] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── AGENT BANK ACCOUNTS ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
        <div className="rounded-3xl grid md:grid-cols-2 items-stretch overflow-hidden" style={{ backgroundColor: "#F8F3F0", minHeight: "420px" }}>
          {/* Left: copy — carries all the padding */}
          <div className="flex flex-col gap-6 p-8 pt-10 md:p-12 md:py-16">
            <span
              className="inline-flex self-start items-center px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: "#EDE8E5", color: "#003ec7" }}
            >
              Agent Bank Accounts
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--color-on-surface)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Open a global account for your AI agent
            </h2>
            <p className="text-base text-[color:var(--color-secondary)] leading-relaxed max-w-md">
              Create dedicated wallets, cards and controls for agents that need to operate across borders, platforms and payments.
            </p>
            <a
              href="#waitlist"
              className="inline-flex self-start items-center gap-2 text-sm font-semibold text-[color:var(--color-primary)] hover:gap-3 transition-all"
            >
              Get early access
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Right: hidden on mobile, overlapping layout on desktop */}
          <div className="hidden md:block relative min-h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cell-phone.png"
              alt="Roving app on mobile"
              className="absolute right-0 bottom-0 w-[70%] h-auto drop-shadow-2xl z-0"
            />
            <div className="absolute -left-4 top-[68%] -translate-y-1/2 w-[37%] rounded-2xl overflow-hidden shadow-xl z-10">
              <Image
                src="/countries.png"
                alt="Multi-currency accounts"
                width={320}
                height={420}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── GLOBAL PAYMENTS ───────────────────────────────────────────────── */}
      <section className="py-6 bg-white">
        <div className="px-2">
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: "1fr 2fr 1fr", height: "600px" }}
          >
            {/* Left tall card — cell-phone-3 */}
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{ backgroundColor: "#F8F3F0" }}
            >
              {/* Coins behind the phone */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/coin.png" alt="" className="absolute w-24 h-auto z-0" style={{ top: "8%", left: "-6%", transform: "rotate(20deg)" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/coin.png" alt="" className="absolute w-20 h-auto z-0" style={{ top: "32%", right: "-4%", transform: "rotate(-15deg)" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/coin.png" alt="" className="absolute w-28 h-auto z-0" style={{ top: "55%", left: "-8%", transform: "rotate(35deg)" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/coin.png" alt="" className="absolute w-20 h-auto z-0" style={{ bottom: "10%", right: "-5%", transform: "rotate(-30deg)" }} />
              {/* Phone on top */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/cell-phone-3.png"
                alt="Roving accounts"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-auto object-contain drop-shadow-xl z-10"
              />
            </div>

            {/* Center — two horizontal cards stacked */}
            <div className="flex flex-col gap-4">
              {/* Top horizontal card — text */}
              <div
                className="rounded-3xl p-8 flex flex-col justify-center gap-4"
                style={{ backgroundColor: "#F8F3F0", flex: "0 0 210px" }}
              >
                <span
                  className="inline-flex self-start items-center px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#EDE8E5", color: "#003ec7" }}
                >
                  Global Payments
                </span>
                <h2
                  className="text-2xl lg:text-3xl font-extrabold leading-tight text-[color:var(--color-on-surface)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Convert and move money for agent workflows
                </h2>
                <p className="text-sm text-[color:var(--color-secondary)] leading-relaxed">
                  Let your agents pay APIs, vendors and services globally while you control limits, rules and permissions.
                </p>
                <a
                  href="#waitlist"
                  className="inline-flex self-start items-center gap-2 text-sm font-semibold text-[color:var(--color-primary)] hover:gap-3 transition-all"
                >
                  Get early access
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>

              {/* Bottom horizontal card — girl-smile + coin */}
              <div
                className="rounded-3xl overflow-hidden relative flex-1"
                style={{ backgroundColor: "#F8F3F0" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/girl-smile.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right tall card — cell-phone-2 */}
            <div
              className="rounded-3xl overflow-hidden flex items-start justify-center"
              style={{ backgroundColor: "#F8F3F0" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/cell-phone-2.png"
                alt="Roving app"
                className="w-[80%] h-auto object-contain object-bottom drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VIRTUAL CARDS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="rounded-3xl grid md:grid-cols-2 items-stretch overflow-hidden" style={{ backgroundColor: "#F8F3F0", minHeight: "520px" }}>
            {/* Left: copy */}
            <div className="flex flex-col gap-6 p-8 pt-10 md:p-12 md:py-16">
              <span
                className="inline-flex self-start items-center px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "#EDE8E5", color: "#003ec7" }}
              >
                Virtual Cards
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--color-on-surface)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Give your agents controlled spending power
              </h2>
              <p className="text-base text-[color:var(--color-secondary)] leading-relaxed max-w-md">
                Issue virtual cards for every AI agent with limits, approvals and real-time controls built in.
              </p>
              <a
                href="#waitlist"
                className="inline-flex self-start items-center gap-2 text-sm font-semibold text-[color:var(--color-primary)] hover:gap-3 transition-all"
              >
                Get early access
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>

            {/* Right: phone + orbiting company logos */}
            <div className="hidden md:block relative min-h-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/semi-circle-companies.png"
                alt=""
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[75%] w-[70%] h-auto"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/cell-phone-4.png"
                alt="Roving virtual cards on mobile"
                className="absolute left-1/2 -translate-x-1/2 w-[31%] h-auto drop-shadow-2xl z-10" style={{ bottom: "3%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECURE PAYMENTS ───────────────────────────────────────────────── */}
      <section className="pt-6 pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="rounded-3xl grid md:grid-cols-2 items-stretch overflow-hidden" style={{ backgroundColor: "#F8F3F0", minHeight: "480px" }}>
            {/* Left: copy */}
            <div className="flex flex-col gap-6 p-8 pt-10 md:p-12 md:py-16">
              <span
                className="inline-flex self-start items-center px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "#EDE8E5", color: "#003ec7" }}
              >
                Secure payments
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--color-on-surface)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let your agents handle payments safely
              </h2>
              <p className="text-base text-[color:var(--color-secondary)] leading-relaxed max-w-md">
                Give agents permission to move money for workflows, operations and subscriptions while you stay in control of approvals, limits and audit trails.
              </p>
              <a
                href="#waitlist"
                className="inline-flex self-start items-center gap-2 text-sm font-semibold text-[color:var(--color-primary)] hover:gap-3 transition-all"
              >
                Get early access
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>

            {/* Right: robot illustration */}
            <div className="hidden md:flex items-center justify-center relative p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/robot-gemini-img.png"
                alt="Secure agent payments illustration"
                className="w-[85%] h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VOICE & TEXT PAYMENTS ─────────────────────────────────────────── */}
      <section className="py-6 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid gap-4" style={{ gridTemplateColumns: "2fr 1fr", height: "540px" }}>

            {/* Left 2fr card */}
            <div className="rounded-3xl overflow-hidden relative" style={{ backgroundColor: "#F8F3F0" }}>
              {/* Copy */}
              <div className="flex flex-col gap-6 p-10 pt-12 max-w-[55%]">
                <span
                  className="inline-flex self-start items-center px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#EDE8E5", color: "#003ec7" }}
                >
                  Quick payment method
                </span>
                <h2
                  className="text-3xl lg:text-4xl font-extrabold leading-tight text-[color:var(--color-on-surface)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Initiate payments with a simple voice or text command.
                </h2>
                <p className="text-sm text-[color:var(--color-secondary)] leading-relaxed">
                  Let Phoebe execute transactions using your existing rules, approvals and payment rails.
                </p>
                <a
                  href="#waitlist"
                  className="inline-flex self-start items-center gap-2 text-sm font-semibold text-[color:var(--color-primary)] hover:gap-3 transition-all"
                >
                  Get early access
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>

              {/* Floating chip */}
              <div className="absolute bottom-10 left-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-xs font-medium text-[color:var(--color-on-surface)]">
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1", color: "#003ec7" }}
                >
                  chat
                </span>
                Payments with a simple voice or text
              </div>

              {/* Girl photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/girl-phone.png"
                alt=""
                className="absolute bottom-0 right-10 h-[82%] w-auto object-contain object-bottom drop-shadow-lg"
              />
            </div>

            {/* Right 1fr card */}
            <div className="rounded-3xl overflow-hidden relative" style={{ backgroundColor: "#F8F3F0" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/phone-5.png"
                alt="Roving app"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-auto object-contain drop-shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────────────────── */}
      <section id="use-cases" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-6">

          {/* Agentic Banking — dark full-width featured card with illustration */}
          <div
            className="rounded-3xl overflow-hidden grid md:grid-cols-2 items-center"
            style={{ background: "linear-gradient(135deg, #050d1f 0%, #001a6e 60%, #003ec7 100%)", minHeight: "300px" }}
          >
            <div className="flex flex-col gap-5 p-10 py-12">
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#a8c0ff" }}>Use Cases</span>
              <h2
                className="text-2xl lg:text-3xl font-extrabold leading-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Agentic Banking
              </h2>
              <p className="text-sm text-white/60 leading-relaxed">
                Roving helps businesses give AI agents accounts, wallets and cards with built-in controls and approvals.
              </p>
              <a href="#waitlist" className="inline-flex self-start items-center gap-2 text-sm font-semibold text-white/80 hover:text-white hover:gap-3 transition-all">
                Get early access <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
            <div className="flex items-center justify-center p-8 h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gemini-1.png" alt="" className="w-full max-h-[260px] object-contain drop-shadow-2xl" />
            </div>
          </div>

          {/* 4×2 card grid */}
          <div className="grid grid-cols-2 gap-4">

            {[
              { title: "Invoice Payments",        body: "Roving helps teams automate invoice discovery, validation and payment through AI-driven workflows.", img: "/gemini-2.png" },
              { title: "Subscription Management", body: "Roving helps agents manage recurring SaaS, API and infrastructure payments without manual operations.", img: "/gemini-3.png" },
              { title: "Travel & Booking",        body: "Roving helps travel agents securely book flights, hotels and transport within spending policies.", img: "/gemini-4.png" },
              { title: "Procurement Operations",  body: "Roving helps businesses automate purchasing workflows while keeping humans in control of approvals and limits.", img: "/gemini-5.png" },
            ].map((uc) => (
              <div key={uc.title} className="rounded-3xl overflow-hidden flex flex-col" style={{ backgroundColor: "#F8F3F0" }}>
                <div className="flex items-center justify-center p-6 pt-8 h-56">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={uc.img} alt="" className="h-full w-auto object-contain drop-shadow-md" />
                </div>
                <div className="flex flex-col gap-3 p-6 pt-2">
                  <h3 className="font-bold text-[color:var(--color-on-surface)] text-lg" style={{ fontFamily: "var(--font-display)" }}>{uc.title}</h3>
                  <p className="text-sm text-[color:var(--color-secondary)] leading-relaxed">{uc.body}</p>
                  <a href="#waitlist" className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--color-primary)] mt-1 hover:gap-2 transition-all">
                    Get early access <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Treasury & Budgeting — gemini-6 + gemini-7 together */}
            <div className="rounded-3xl overflow-hidden flex flex-col" style={{ backgroundColor: "#F8F3F0" }}>
              <div className="flex items-center justify-center gap-2 p-6 pt-8 h-56">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gemini-6.png" alt="" className="h-full w-auto object-contain drop-shadow-md" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gemini-7.png" alt="" className="h-[72%] w-auto object-contain drop-shadow-md" />
              </div>
              <div className="flex flex-col gap-3 p-6 pt-2">
                <h3 className="font-bold text-[color:var(--color-on-surface)] text-lg" style={{ fontFamily: "var(--font-display)" }}>Treasury & Budgeting</h3>
                <p className="text-sm text-[color:var(--color-secondary)] leading-relaxed">Roving helps companies allocate, monitor and control spending across agents, teams and currencies.</p>
                <a href="#waitlist" className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--color-primary)] mt-1 hover:gap-2 transition-all">
                  Get early access <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* AI Commerce — gemini-8 */}
            <div className="rounded-3xl overflow-hidden flex flex-col" style={{ backgroundColor: "#F8F3F0" }}>
              <div className="flex items-center justify-center p-6 pt-8 h-56">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gemini-8.png" alt="" className="h-full w-auto object-contain drop-shadow-md" />
              </div>
              <div className="flex flex-col gap-3 p-6 pt-2">
                <h3 className="font-bold text-[color:var(--color-on-surface)] text-lg" style={{ fontFamily: "var(--font-display)" }}>AI Commerce</h3>
                <p className="text-sm text-[color:var(--color-secondary)] leading-relaxed">Roving helps autonomous systems transact safely across digital services, APIs and marketplaces.</p>
                <a href="#waitlist" className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--color-primary)] mt-1 hover:gap-2 transition-all">
                  Get early access <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Compliance & Audit — gemini-9 */}
            <div className="rounded-3xl overflow-hidden flex flex-col" style={{ backgroundColor: "#F8F3F0" }}>
              <div className="flex items-center justify-center p-6 pt-8 h-56">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gemini-9.png" alt="" className="h-full w-auto object-contain drop-shadow-md" />
              </div>
              <div className="flex flex-col gap-3 p-6 pt-2">
                <h3 className="font-bold text-[color:var(--color-on-surface)] text-lg" style={{ fontFamily: "var(--font-display)" }}>Compliance & Audit</h3>
                <p className="text-sm text-[color:var(--color-secondary)] leading-relaxed">Roving helps organizations track every request, approval and transaction with complete execution visibility.</p>
                <a href="#waitlist" className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--color-primary)] mt-1 hover:gap-2 transition-all">
                  Get early access <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── THESIS ────────────────────────────────────────────────────────── */}
      <section id="thesis" className="py-24" style={{ backgroundColor: "#0d1117" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <div className="flex flex-col gap-8">
              <h2
                className="text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The Roving Thesis
              </h2>
              <div className="flex flex-col gap-5 text-base text-white/70 leading-relaxed">
                <p>
                  We believe AI agents are becoming part of the economy, not just part of the workflow. They will buy, book, subscribe, pay and manage financial activity on behalf of people and businesses. But that future needs a safe financial layer.
                </p>
                <p>
                  Right now there is no infrastructure built for that. Organisations want to give agents financial authority without losing control, and the tools to do that simply do not exist yet.
                </p>
                <p>
                  Roving is building the identity, accounts, cards, rules, approvals and audit trails that make autonomous financial activity something organisations can actually trust and govern.
                </p>
                <p className="text-white font-medium">
                  We are building the financial operating system for the agentic economy.
                </p>
              </div>
              <a
                href="#waitlist"
                className="inline-flex self-start items-center gap-2 text-white font-semibold border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                Read the Roving Thesis
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>

            {/* Right: girl-bubbles photo */}
            <div className="rounded-3xl overflow-hidden h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/girl-bubbles.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY ROVING ────────────────────────────────────────────────────── */}
      <section className="py-12">
        <div className="px-12">
          <div className="grid md:grid-cols-[500px_1fr] gap-36 items-stretch">

            {/* Left: heading + image */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2
                  className="text-4xl font-bold text-[color:var(--color-on-surface)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Why Choose Roving?
                </h2>
                <p className="text-base text-[color:var(--color-secondary)] leading-relaxed">
                  Compare and contrast some of Roving&apos;s benefits with other payment providers. Don&apos;t just take our word for it.
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/computer-guy.jpg"
                alt=""
                className="w-full object-cover flex-1"
                style={{ height: "566px", borderRadius: "10px" }}
              />
            </div>

            {/* Right: comparison table */}
            <div className="rounded-2xl border border-[color:var(--color-outline-variant)] overflow-hidden h-full">
            {/* Table header */}
            <div className="grid grid-cols-2 gap-2">
              <div className="px-3 sm:px-6 py-4" style={{ backgroundColor: "#C9C9F3" }}>
                <span className="text-xs sm:text-sm font-semibold text-black">Roving advantages</span>
              </div>
              <div className="px-3 sm:px-6 py-4 bg-[color:var(--color-surface-container-low)]">
                <span className="text-xs sm:text-sm font-bold text-[color:var(--color-secondary)]">Others</span>
              </div>
            </div>

            {comparisons.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-2"
              >
                <div className="px-3 sm:px-6 py-4 sm:py-5 flex items-start gap-2 sm:gap-3" style={{ backgroundColor: "#E4E4F8" }}>
                  <span
                    className="material-symbols-outlined text-[color:var(--color-tertiary-container)] mt-0.5 shrink-0 text-[18px] sm:text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1", color: "#034DF6" }}
                  >
                    check_circle
                  </span>
                  <span className="text-xs sm:text-sm text-[color:var(--color-on-surface)] font-medium">{row.roving}</span>
                </div>
                <div className="px-3 sm:px-6 py-4 sm:py-5 flex items-start gap-2 sm:gap-3" style={{ backgroundColor: "#EDE8E5" }}>
                  <span
                    className="material-symbols-outlined mt-0.5 shrink-0 text-[18px] sm:text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1", color: "#A89E99" }}
                  >
                    cancel
                  </span>
                  <span className="text-xs sm:text-sm text-[color:var(--color-secondary)]">{row.others}</span>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KYA ───────────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-56 bg-white">
        <div className="px-12">
          <h2
            className="text-5xl font-extrabold text-[color:var(--color-on-surface)] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            KYA — Know Your Agent
          </h2>

          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr 1fr 25%", height: "640px" }}>

            {/* Left col: top 33% text / bottom 66% magnifying image */}
            <div className="flex flex-col gap-4 h-full">
              {/* Top ~33%: text */}
              <div className="flex flex-col gap-4 rounded-3xl p-6" style={{ flex: "0 0 calc(33% - 8px)", backgroundColor: "#F8F3F0" }}>
                <span className="text-sm font-semibold text-[color:var(--color-primary)] uppercase tracking-widest">KYA — Know Your Agent</span>
                <h2
                  className="text-2xl font-extrabold text-[color:var(--color-on-surface)] leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Give your AI agent a verified financial identity.
                </h2>
                <p className="text-sm text-[color:var(--color-secondary)] leading-relaxed">
                  Before an agent can hold funds, receive a card or move money, Roving verifies who owns it, what it does, what tools it uses and what financial actions it is allowed to take.
                </p>
              </div>

              {/* Bottom ~66%: magnifying glass */}
              <div
                className="rounded-3xl flex-1 relative overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: "#2590EA26" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mangifying.png"
                  alt=""
                  className="w-[68%] h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Middle col: check list */}
            <div className="rounded-3xl h-full relative overflow-hidden flex flex-col justify-start px-8 pt-8 pb-8" style={{ backgroundColor: "#F8F3F0" }}>
              {/* Blurry coin backgrounds */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/coin.png" alt="" className="absolute pointer-events-none select-none" style={{ width: "200px", bottom: "-8%", right: "-10%", opacity: 0.35, filter: "blur(16px)", transform: "rotate(20deg)" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/coin.png" alt="" className="absolute pointer-events-none select-none" style={{ width: "150px", top: "5%", right: "5%", opacity: 0.25, filter: "blur(14px)", transform: "rotate(-30deg)" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/coin.png" alt="" className="absolute pointer-events-none select-none" style={{ width: "120px", top: "40%", left: "-5%", opacity: 0.2, filter: "blur(12px)", transform: "rotate(10deg)" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/coin.png" alt="" className="absolute pointer-events-none select-none" style={{ width: "130px", bottom: "30%", right: "8%", opacity: 0.18, filter: "blur(15px)", transform: "rotate(-15deg)" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/coin.png" alt="" className="absolute pointer-events-none select-none" style={{ width: "100px", top: "20%", left: "20%", opacity: 0.15, filter: "blur(10px)", transform: "rotate(45deg)" }} />
              <p className="text-xl font-bold text-[color:var(--color-on-surface)] mb-5 relative z-10">What Roving KYA checks</p>
              <div className="flex flex-col relative z-10">
                {kyaChecks.map((check, i) => (
                  <div
                    key={check.label}
                    className="py-3 flex flex-col gap-0.5"
                    style={{ borderBottom: i < kyaChecks.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none" }}
                  >
                    <p className="text-sm font-semibold text-[color:var(--color-on-surface)]">{check.label}</p>
                    <p className="text-sm text-[color:var(--color-secondary)] leading-relaxed">{check.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right col: single panel — phone top, text bottom */}
            <div
              className="rounded-3xl h-full relative overflow-hidden flex flex-col justify-end p-8"
              style={{ backgroundColor: "#2590EA26" }}
            >
              {/* Sideways phone — top of container */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sideways-phone.png"
                alt="Roving app"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-auto object-contain drop-shadow-xl z-0"
              />

              {/* Text — bottom left */}
              <div className="relative z-10 flex flex-col gap-4 mb-20">
                <p className="text-2xl font-bold text-[color:var(--color-on-surface)]">Why it matters</p>
                <p className="text-base text-[color:var(--color-secondary)] leading-relaxed">
                  Roving KYA is not just identity verification. It is the trust layer that decides whether an agent is ready for financial access.
                </p>
                <a
                  href="#waitlist"
                  className="inline-flex self-start items-center gap-1 text-base font-semibold text-[color:var(--color-primary)] hover:gap-2 transition-all"
                >
                  Verify your first agent
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── API SANDBOX ───────────────────────────────────────────────────── */}
      <section id="api" className="pt-4 pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-12">
          {/* Centered heading + description */}
          <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
            <h2
              className="text-5xl font-extrabold text-[color:var(--color-on-surface)] leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              API Sandbox
            </h2>
            <p className="text-base text-[color:var(--color-secondary)] leading-relaxed">
              Build and test agent payments before going live. Roving&apos;s sandbox lets developers simulate how AI agents request payments, trigger approvals, follow spending rules and generate audit trails. Test every part of the agent finance flow without moving real money.
            </p>
          </div>

          {/* Dashboard screenshot */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/api-sandboz.png"
            alt="Roving API Sandbox dashboard"
            className="w-full rounded-3xl shadow-2xl shadow-black/20"
          />
        </div>
      </section>

      {/* ── NUMBERED FEATURES ─────────────────────────────────────────────── */}
      <section className="pb-24 pt-12 bg-white">
        <div className="px-12">
          <div className="grid grid-cols-3 gap-x-4 gap-y-16">
            {apiFeatures.map((feat, i) => (
              <div
                key={feat.num}
                className="rounded-2xl relative flex flex-col px-6 pb-6"
                style={{ backgroundColor: "#161b27", paddingTop: "calc(52% + 16px)", overflow: "visible" }}
              >
                {/* Image — overflows top of card by ~5% */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/num-${i + 1}.png`}
                  alt=""
                  className="absolute w-[72%] h-auto object-contain pointer-events-none"
                  style={{ top: 0, left: "50%", transform: "translate(-50%, -20%)" }}
                />
                <p className="text-sm text-white/70 mb-3 font-medium">{feat.num} — {feat.title}</p>
                <p className="text-lg text-white leading-relaxed">{feat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER VIDEO ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-10">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[color:var(--color-on-surface)] leading-tight text-center whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The #1 neo bank for humans and their AI agents
          </h2>
          <div className="relative rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/founder-video.png"
              alt="Roving founder video"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── WAITLIST ──────────────────────────────────────────────────────── */}
      <section id="waitlist" className="py-24" style={{ backgroundColor: "#020D1C" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div className="flex flex-col gap-10 pr-20">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Join the cool kids network
              </h2>
              <div className="flex flex-col gap-6 text-lg text-white leading-relaxed">
                <p>Get a front-row seat to the future of agentic finance.</p>
                <p>Product drops, early demos, founder notes, community updates and sharp ideas before everyone else catches up.</p>
                <p>Don&apos;t forget your popcorn 🍿</p>
              </div>
            </div>

            {/* Right: form */}
            <div className="rounded-3xl p-6 sm:p-8" style={{ backgroundColor: "#252E3A99" }}>
              <WaitlistForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: "#020D1C" }} className="text-white">
        <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8 flex flex-col gap-16">

          {/* Top border */}
          <div className="border-t border-white/10" />

          {/* 6 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

            {/* Products */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Products</p>
              {["Agent Accounts","Virtual Cards","Agent Wallets","Global Payments","Multi-Currency","Phoebe AI","KYA","Approvals & Controls","API & SDKs"].map((link) => (
                <a key={link} href="#" className="text-sm text-white/60 hover:text-white transition-colors">{link}</a>
              ))}
            </div>

            {/* Developers */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Developers</p>
              {["API Docs","Sandbox","Webhooks","SDKs","Status","Changelog","Guides"].map((link) => (
                <a key={link} href="#" className="text-sm text-white/60 hover:text-white transition-colors">{link}</a>
              ))}
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Company</p>
              {["About","Careers","Blog","Press","Trust Center","Contact"].map((link) => (
                <a key={link} href="#" className="text-sm text-white/60 hover:text-white transition-colors">{link}</a>
              ))}
            </div>

            {/* Use Cases */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Use Cases</p>
              {["AI Startups","Agent Builders","Enterprises","Developers","Finance Teams","Operations Teams","Autonomous Commerce"].map((link) => (
                <a key={link} href="#" className="text-sm text-white/60 hover:text-white transition-colors">{link}</a>
              ))}
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Legal</p>
              {["Privacy Policy","Terms","Acceptable Use","Cookie Policy","Risk Disclosure","Compliance"].map((link) => (
                <a key={link} href="#" className="text-sm text-white/60 hover:text-white transition-colors">{link}</a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Contact</p>
              <a href="mailto:hello@roving.money" className="text-sm text-[#4d9fff] hover:text-white transition-colors">hello@roving.money</a>
              <p className="text-sm text-white/60">020 3307 6448</p>
              <div className="flex flex-col gap-1 pt-2">
                <p className="text-sm font-semibold text-white">Our London Office</p>
                <p className="text-sm text-white/60">71–75 Shelton Street</p>
                <p className="text-sm text-white/60">Covent Garden</p>
                <p className="text-sm text-white/60">London, WC2H 9JQ</p>
                <p className="text-sm text-white/60">United Kingdom</p>
              </div>
            </div>

          </div>

          {/* Legal text + copyright */}
          <div className="border-t border-white/10 pt-12 flex gap-16 items-start">

            {/* Left: social icons */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/social-media.png"
              alt="Social media links"
              className="w-4 shrink-0"
            />

            {/* Right: legal copy */}
            <div className="flex flex-col gap-6">
              <p className="text-xs text-white leading-relaxed">
                Roving is a product of Calen Financial Technologies Ltd. Calen Financial Technologies is a financial technology company building AI-native financial infrastructure for businesses, developers and the emerging agentic economy. Roving is not yet a bank. We are building the banking experience for AI agents by working with licensed banking, card issuing, payment and regulated financial infrastructure partners where required. Services may vary by jurisdiction and are subject to eligibility, compliance checks and partner approval.
              </p>
              <p className="text-xs text-white">Built with love from London and San Francisco 💙</p>
              <p className="text-xs text-white">© 2026 Calen Financial Technologies Ltd. All rights reserved.</p>
            </div>

          </div>

        </div>

        {/* Big Roving wordmark */}
        <div className="overflow-hidden flex justify-center">
          <p
            className="text-white font-extrabold leading-[140%] tracking-[0.04em] select-none"
            style={{ fontFamily: "Sora, sans-serif", fontSize: "270px", fontWeight: 800 }}
          >
            Roving
          </p>
        </div>

      </footer>
    </div>
  );
}
