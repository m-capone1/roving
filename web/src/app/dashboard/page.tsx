"use client";

import { useState } from "react";

const agents = [
  {
    id: "research",
    name: "Research Agent",
    category: "Market Data",
    icon: "psychology",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    balance: 2420.5,
    budget: 5000,
    budgetUsed: 48,
    status: "Active",
    lastTx: "2 min ago",
    card: "4532 •••• •••• 7821",
  },
  {
    id: "travel",
    name: "Travel Agent",
    category: "Itineraries",
    icon: "flight",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    balance: 5120.0,
    budget: 8000,
    budgetUsed: 64,
    status: "Active",
    lastTx: "14 min ago",
    card: "4532 •••• •••• 3409",
  },
  {
    id: "marketing",
    name: "Marketing Agent",
    category: "Advertising",
    icon: "campaign",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    balance: 622.1,
    budget: 3000,
    budgetUsed: 79,
    status: "Paused",
    lastTx: "1 hr ago",
    card: "4532 •••• •••• 9015",
  },
  {
    id: "devops",
    name: "DevOps Agent",
    category: "Infrastructure",
    icon: "cloud_queue",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    balance: 9140.0,
    budget: 10000,
    budgetUsed: 36,
    status: "Active",
    lastTx: "just now",
    card: "4532 •••• •••• 6672",
  },
];

const transactions = [
  {
    id: 1,
    merchant: "OpenAI API",
    icon: "api",
    iconBg: "bg-on-surface",
    category: "Software",
    amount: -24.5,
    time: "2 min ago",
    status: "Approved",
  },
  {
    id: 2,
    merchant: "Amazon Web Services",
    icon: "cloud",
    iconBg: "bg-orange-500",
    category: "Cloud Services",
    amount: -128.99,
    time: "15 min ago",
    status: "Approved",
  },
  {
    id: 3,
    merchant: "British Airways",
    icon: "flight",
    iconBg: "bg-teal-600",
    category: "Travel",
    amount: -350.0,
    time: "1 hr ago",
    status: "Approved",
  },
  {
    id: 4,
    merchant: "SerpAPI",
    icon: "manage_search",
    iconBg: "bg-indigo-500",
    category: "Data",
    amount: -29.0,
    time: "2 hr ago",
    status: "Approved",
  },
  {
    id: 5,
    merchant: "Meta Ads",
    icon: "campaign",
    iconBg: "bg-blue-700",
    category: "Advertising",
    amount: -500.0,
    time: "3 hr ago",
    status: "Pending",
  },
];

const spendCategories = [
  { label: "Software", icon: "terminal", color: "bg-indigo-500", amount: 32432.1, pct: 37 },
  { label: "Advertising", icon: "campaign", color: "bg-teal-500", amount: 22120.0, pct: 26 },
  { label: "Cloud Services", icon: "cloud_queue", color: "bg-orange-500", amount: 16320.5, pct: 19 },
];

const pendingApprovals = [
  {
    id: 1,
    agent: "Travel Agent",
    agentIcon: "flight",
    agentIconBg: "bg-teal-100",
    agentIconColor: "text-teal-600",
    merchant: "Airbnb",
    amount: 2400.0,
    risk: "High",
    riskColor: "text-red-500",
  },
  {
    id: 2,
    agent: "Marketing Agent",
    agentIcon: "campaign",
    agentIconBg: "bg-orange-100",
    agentIconColor: "text-orange-600",
    merchant: "Google Ads",
    amount: 750.0,
    risk: "Medium",
    riskColor: "text-orange-500",
  },
  {
    id: 3,
    agent: "Research Agent",
    agentIcon: "psychology",
    agentIconBg: "bg-indigo-100",
    agentIconColor: "text-indigo-600",
    merchant: "Pinecone",
    amount: 120.0,
    risk: "Low",
    riskColor: "text-green-600",
  },
];

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(Math.abs(n));
}

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export default function DashboardPage() {
  const [approvals, setApprovals] = useState(pendingApprovals);
  const [shownApproval, setShownApproval] = useState(0);

  const totalBalance = agents.reduce((s, a) => s + a.balance, 0);
  const activeCount = agents.filter((a) => a.status === "Active").length;

  function handleApproval(id: number) {
    setApprovals((prev) => {
      const next = prev.filter((a) => a.id !== id);
      setShownApproval((i) => Math.min(i, next.length - 1));
      return next;
    });
  }

  const currentApproval = approvals[shownApproval];

  return (
    <div className="p-6 space-y-6">
      {/* Greeting */}
      <div>
        <h2
          className="text-[30px] font-bold text-[color:var(--color-on-surface)] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {greeting()}, Maddy 👋
        </h2>
        <p className="text-sm text-[color:var(--color-secondary)] mt-1">
          Here&apos;s what&apos;s happening in your agent wallets today.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-5 gap-4">
        {[
          {
            label: "Total Balance",
            value: fmt(totalBalance),
            icon: "account_balance_wallet",
            iconColor: "text-[color:var(--color-primary)]",
            badge: "+18.6%",
            badgeColor: "text-[color:var(--color-tertiary)]",
          },
          {
            label: "Monthly Spend",
            value: "$86,432.21",
            icon: "bar_chart",
            iconColor: "text-[color:var(--color-primary)]",
            badge: "+12.4%",
            badgeColor: "text-[color:var(--color-tertiary)]",
          },
          {
            label: "Active Agents",
            value: String(activeCount),
            icon: "group",
            iconColor: "text-[color:var(--color-tertiary)]",
            badge: "+1 new",
            badgeColor: "text-[color:var(--color-tertiary)]",
          },
          {
            label: "Pending Approvals",
            value: String(approvals.length),
            icon: "pending_actions",
            iconColor: "text-[color:var(--color-error)]",
            badge: null,
            badgeColor: "",
          },
          {
            label: "Total Transactions",
            value: "1,248",
            icon: "receipt_long",
            iconColor: "text-[color:var(--color-primary)]",
            badge: "+20.7%",
            badgeColor: "text-[color:var(--color-tertiary)]",
          },
        ].map((s) => (
          <div key={s.label} className="bg-white p-4 rounded-xl border border-[color:var(--color-outline-variant)] card-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 rounded bg-[color:var(--color-primary-container)]/10 flex items-center justify-center">
                <span className={`material-symbols-outlined text-[20px] ${s.iconColor}`}>{s.icon}</span>
              </div>
              {s.badge && (
                <span className={`text-[10px] font-bold flex items-center gap-0.5 ${s.badgeColor}`}>
                  <span className="material-symbols-outlined text-[12px]">trending_up</span>
                  {s.badge}
                </span>
              )}
            </div>
            <p className="text-[11px] text-[color:var(--color-secondary)] uppercase tracking-wider">{s.label}</p>
            <p className="text-[20px] font-bold text-[color:var(--color-on-surface)] mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left column */}
        <div className="col-span-8 space-y-6">
          {/* Agents table */}
          <section className="bg-white rounded-xl border border-[color:var(--color-outline-variant)] card-shadow overflow-hidden">
            <div className="p-5 border-b border-[color:var(--color-outline-variant)] flex justify-between items-center bg-[color:var(--color-surface-container-low)]/50">
              <h3 className="text-[20px] font-semibold text-[color:var(--color-on-surface)]">Your Agents</h3>
              <a href="#" className="text-[color:var(--color-primary)] text-[13px] hover:underline flex items-center gap-1">
                View all agents <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[color:var(--color-surface-container-low)]">
                  <tr>
                    {["Agent", "Wallet Balance", "Monthly Budget", "Status", ""].map((h) => (
                      <th key={h} className="px-5 py-3 text-[11px] text-[color:var(--color-outline)] uppercase tracking-wider font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[color:var(--color-outline-variant)]">
                  {agents.map((agent) => (
                    <tr key={agent.id} className="hover:bg-[color:var(--color-surface-container-low)]/50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${agent.iconBg} flex items-center justify-center`}>
                            <span className={`material-symbols-outlined ${agent.iconColor}`}>{agent.icon}</span>
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-[color:var(--color-on-surface)]">{agent.name}</p>
                            <p className="text-xs text-[color:var(--color-secondary)]">{agent.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-[13px] font-semibold text-[color:var(--color-on-surface)]">
                        {fmt(agent.balance)}
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-[13px] text-[color:var(--color-on-surface)]">{fmt(agent.budget)}</p>
                        <div className="w-full bg-[color:var(--color-outline-variant)] h-1 rounded-full mt-1.5 overflow-hidden">
                          <div
                            className="bg-[color:var(--color-tertiary)] h-full"
                            style={{ width: `${agent.budgetUsed}%` }}
                          />
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={[
                            "px-2 py-0.5 rounded-full text-[10px] font-bold",
                            agent.status === "Active"
                              ? "bg-[color:var(--color-tertiary-container)]/10 text-[color:var(--color-tertiary)]"
                              : "bg-[color:var(--color-outline-variant)] text-[color:var(--color-outline)]",
                          ].join(" ")}
                        >
                          {agent.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button className="p-1 hover:bg-[color:var(--color-surface-container)] rounded-md transition-colors">
                          <span className="material-symbols-outlined text-[color:var(--color-secondary)]">more_horiz</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Transactions table */}
          <section className="bg-white rounded-xl border border-[color:var(--color-outline-variant)] card-shadow overflow-hidden">
            <div className="p-5 border-b border-[color:var(--color-outline-variant)] flex justify-between items-center bg-[color:var(--color-surface-container-low)]/50">
              <h3 className="text-[20px] font-semibold text-[color:var(--color-on-surface)]">Recent Transactions</h3>
              <a href="#" className="text-[color:var(--color-primary)] text-[13px] hover:underline flex items-center gap-1">
                View all <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[color:var(--color-surface-container-low)]">
                  <tr>
                    {["Merchant", "Category", "Amount", "Time", "Status"].map((h) => (
                      <th key={h} className="px-5 py-3 text-[11px] text-[color:var(--color-outline)] uppercase tracking-wider font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[color:var(--color-outline-variant)]">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-[color:var(--color-surface-container-low)]/50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded ${tx.iconBg} flex items-center justify-center`}>
                            <span className="material-symbols-outlined text-white text-[16px]">{tx.icon}</span>
                          </div>
                          <span className="text-[13px] font-semibold text-[color:var(--color-on-surface)]">{tx.merchant}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-[color:var(--color-secondary)]">{tx.category}</td>
                      <td className="px-5 py-4 text-[13px] font-semibold text-[color:var(--color-on-surface)]">
                        −{fmt(tx.amount)}
                      </td>
                      <td className="px-5 py-4 text-xs text-[color:var(--color-secondary)]">{tx.time}</td>
                      <td className="px-5 py-4">
                        <span
                          className={[
                            "px-2 py-0.5 rounded-full text-[10px] font-bold",
                            tx.status === "Approved"
                              ? "bg-[color:var(--color-tertiary-container)]/10 text-[color:var(--color-tertiary)]"
                              : "bg-[color:var(--color-error-container)]/10 text-[color:var(--color-error)]",
                          ].join(" ")}
                        >
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="col-span-4 space-y-6">
          {/* Balance donut */}
          <section className="bg-white p-5 rounded-xl border border-[color:var(--color-outline-variant)] card-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[13px] font-semibold text-[color:var(--color-on-surface)]">Total Balance</h3>
              <span className="material-symbols-outlined text-[color:var(--color-outline)]">visibility</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#0052ff"
                    strokeDasharray="73, 100"
                    strokeWidth="3"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[color:var(--color-primary)]">73%</span>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[color:var(--color-primary)]" />
                    USD
                  </span>
                  <span className="font-semibold text-[color:var(--color-on-surface)]">$13,102.60</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[color:var(--color-secondary)]" />
                    GBP
                  </span>
                  <span className="font-semibold text-[color:var(--color-on-surface)]">$3,450.00</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[color:var(--color-outline-variant)]" />
                    EUR
                  </span>
                  <span className="font-semibold text-[color:var(--color-on-surface)]">$650.00</span>
                </div>
              </div>
            </div>
          </section>

          {/* Virtual card stack */}
          <section className="bg-white p-5 rounded-xl border border-[color:var(--color-outline-variant)] card-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[13px] font-semibold text-[color:var(--color-on-surface)]">Virtual Cards</h3>
              <a href="#" className="text-[color:var(--color-primary)] text-[11px] font-bold hover:underline">
                View all cards
              </a>
            </div>
            <div className="relative h-48 group">
              <div className="absolute inset-x-4 top-4 h-full bg-orange-400 rounded-xl shadow-lg opacity-60 scale-90 translate-y-4" />
              <div className="absolute inset-x-2 top-2 h-full bg-[color:var(--color-tertiary)] rounded-xl shadow-lg opacity-80 scale-95 translate-y-2" />
              <div className="absolute inset-0 h-full bg-[color:var(--color-primary-container)] rounded-xl shadow-xl p-5 flex flex-col justify-between text-white transition-transform group-hover:-translate-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      rocket_launch
                    </span>
                    <span className="font-bold tracking-widest text-xs">ROVING</span>
                  </div>
                  <span className="material-symbols-outlined">contactless</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center w-full font-mono text-lg tracking-widest">
                    <span>••••</span>
                    <span>••••</span>
                    <span>••••</span>
                    <span>4242</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] opacity-70 uppercase tracking-wider">Research Agent</p>
                      <p className="font-bold text-sm">Maddy Capone</p>
                    </div>
                    <p className="font-black italic text-lg tracking-tighter">VISA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-[10px] text-[color:var(--color-secondary)] font-bold uppercase tracking-widest">
              <span>Active Cards</span>
              <span className="text-[color:var(--color-primary)] text-sm">{agents.length}</span>
            </div>
          </section>

          {/* Pending approval */}
          <section className="bg-white p-5 rounded-xl border border-[color:var(--color-outline-variant)] card-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[13px] font-semibold text-[color:var(--color-on-surface)]">Pending Approvals</h3>
              {approvals.length > 0 && (
                <span className="bg-[color:var(--color-error-container)]/10 text-[color:var(--color-error)] px-2 py-0.5 rounded text-[10px] font-bold">
                  {approvals.length} new
                </span>
              )}
            </div>
            {approvals.length === 0 ? (
              <div className="text-center py-6">
                <span className="material-symbols-outlined text-[color:var(--color-tertiary)] text-4xl">
                  check_circle
                </span>
                <p className="text-sm text-[color:var(--color-secondary)] mt-2">All clear</p>
              </div>
            ) : currentApproval ? (
              <div className="bg-[color:var(--color-surface-container-low)] p-4 rounded-lg space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${currentApproval.agentIconBg} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined ${currentApproval.agentIconColor}`}>
                      {currentApproval.agentIcon}
                    </span>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[color:var(--color-on-surface)]">{currentApproval.agent}</p>
                    <p className="text-xs text-[color:var(--color-secondary)]">{currentApproval.merchant}</p>
                  </div>
                  {approvals.length > 1 && (
                    <button
                      onClick={() => setShownApproval((i) => (i + 1) % approvals.length)}
                      className="ml-auto p-1 hover:bg-[color:var(--color-surface-container)] rounded transition-colors"
                    >
                      <span className="material-symbols-outlined text-[color:var(--color-secondary)] text-[18px]">navigate_next</span>
                    </button>
                  )}
                </div>
                <div className="flex justify-between items-center py-2 border-y border-[color:var(--color-outline-variant)]">
                  <div>
                    <p className="text-[10px] text-[color:var(--color-secondary)] uppercase">Amount</p>
                    <p className="font-bold text-[color:var(--color-on-surface)]">{fmt(currentApproval.amount)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[color:var(--color-secondary)] uppercase">Risk</p>
                    <p className={`font-bold ${currentApproval.riskColor}`}>{currentApproval.risk}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleApproval(currentApproval.id)}
                    className="py-2 rounded-lg border border-[color:var(--color-outline-variant)] text-[13px] font-semibold hover:bg-[color:var(--color-surface-container)] transition-colors"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleApproval(currentApproval.id)}
                    className="py-2 rounded-lg bg-[color:var(--color-primary-container)] text-white text-[13px] font-semibold hover:opacity-90 transition-opacity"
                  >
                    Approve
                  </button>
                </div>
                {approvals.length > 1 && (
                  <p className="text-[10px] text-center text-[color:var(--color-secondary)]">
                    {shownApproval + 1} of {approvals.length}
                  </p>
                )}
              </div>
            ) : null}
          </section>

          {/* Spend by category */}
          <section className="bg-white p-5 rounded-xl border border-[color:var(--color-outline-variant)] card-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[13px] font-semibold text-[color:var(--color-on-surface)]">Spend by Category</h3>
              <div className="flex items-center gap-1 text-[color:var(--color-secondary)] text-xs cursor-pointer hover:text-[color:var(--color-primary)]">
                This Month
                <span className="material-symbols-outlined text-[14px]">expand_more</span>
              </div>
            </div>
            <div className="space-y-4">
              {spendCategories.map((cat) => (
                <div key={cat.label} className="space-y-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center gap-2">
                      <span className={`material-symbols-outlined text-[16px] ${cat.color.replace("bg-", "text-")}`}>
                        {cat.icon}
                      </span>
                      {cat.label}
                    </span>
                    <span className="font-semibold text-[color:var(--color-on-surface)]">{fmt(cat.amount)}</span>
                  </div>
                  <div className="h-1.5 w-full bg-[color:var(--color-surface-container-high)] rounded-full overflow-hidden">
                    <div className={`${cat.color} h-full`} style={{ width: `${cat.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
