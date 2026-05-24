const labels: Record<string, { icon: string; label: string }> = {
  agents: { icon: "person", label: "Agents" },
  wallets: { icon: "account_balance_wallet", label: "Wallets" },
  cards: { icon: "credit_card", label: "Cards" },
  transactions: { icon: "swap_horiz", label: "Transactions" },
  approvals: { icon: "fact_check", label: "Approvals" },
  budgets: { icon: "account_balance", label: "Budgets" },
  expenses: { icon: "receipt_long", label: "Expenses" },
  settings: { icon: "settings", label: "Settings" },
};

export default async function ComingSoonPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug[0] ?? "";
  const page = labels[key] ?? { icon: "construction", label: key.charAt(0).toUpperCase() + key.slice(1) };

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center px-6">
      <div className="w-16 h-16 rounded-2xl bg-[color:var(--color-primary-container)]/10 flex items-center justify-center mb-6">
        <span
          className="material-symbols-outlined text-[color:var(--color-primary)] text-4xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {page.icon}
        </span>
      </div>
      <h2
        className="text-[24px] font-bold text-[color:var(--color-on-surface)] mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {page.label}
      </h2>
      <p className="text-sm text-[color:var(--color-secondary)] max-w-xs">
        This section is under active development. Check back soon.
      </p>
      <div className="mt-8 flex items-center gap-2 px-4 py-2 rounded-lg bg-[color:var(--color-surface-container-low)] border border-[color:var(--color-outline-variant)]">
        <span className="material-symbols-outlined text-[color:var(--color-tertiary)] text-[18px]">
          rocket_launch
        </span>
        <span className="text-[13px] font-medium text-[color:var(--color-secondary)]">
          Roving is in early access
        </span>
      </div>
    </div>
  );
}
