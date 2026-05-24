"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mainNav = [
  { label: "Overview", href: "/dashboard", icon: "grid_view" },
  { label: "Agents", href: "/dashboard/agents", icon: "person" },
  { label: "Wallets", href: "/dashboard/wallets", icon: "account_balance_wallet" },
  { label: "Cards", href: "/dashboard/cards", icon: "credit_card" },
  { label: "Transactions", href: "/dashboard/transactions", icon: "swap_horiz" },
];

const mgmtNav = [
  { label: "Approvals", href: "/dashboard/approvals", icon: "fact_check", badge: 3 },
  { label: "Budgets", href: "/dashboard/budgets", icon: "account_balance" },
  { label: "Expenses", href: "/dashboard/expenses", icon: "receipt_long" },
  { label: "Settings", href: "/dashboard/settings", icon: "settings" },
];

function NavLink({
  href,
  icon,
  label,
  badge,
  active,
}: {
  href: string;
  icon: string;
  label: string;
  badge?: number;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
        active
          ? "bg-[color:var(--color-primary-container)]/10 text-[color:var(--color-primary)] font-semibold border-l-4 border-[color:var(--color-primary)] rounded-l-none"
          : "text-[color:var(--color-secondary)] hover:bg-[color:var(--color-surface-container)] font-medium",
      ].join(" ")}
    >
      <span
        className="material-symbols-outlined text-[20px]"
        style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
      >
        {icon}
      </span>
      <span className="text-[13px]">{label}</span>
      {badge != null && (
        <span className="ml-auto bg-[color:var(--color-primary)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] bg-[color:var(--color-surface-container-lowest)] border-r border-[color:var(--color-outline-variant)] flex flex-col p-4 z-50">
      {/* Brand */}
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="w-10 h-10 bg-[color:var(--color-primary-container)] rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
            rocket_launch
          </span>
        </div>
        <div>
          <h1
            className="text-[20px] font-bold text-[color:var(--color-primary)] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Roving
          </h1>
          <p className="text-[11px] text-[color:var(--color-secondary)]">Personal Workspace</p>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex-1 space-y-0.5 overflow-y-auto scrollbar-hide px-2">
        {mainNav.map((item) => (
          <NavLink key={item.href} {...item} active={pathname === item.href} />
        ))}

        <div className="pt-4 pb-2">
          <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-[color:var(--color-outline)]">
            Management
          </p>
        </div>

        {mgmtNav.map((item) => (
          <NavLink key={item.href} {...item} active={pathname === item.href} />
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto border-t border-[color:var(--color-outline-variant)] pt-4 px-2 space-y-4">
        <div className="bg-[color:var(--color-primary-container)] p-4 rounded-xl relative overflow-hidden group cursor-pointer transition-transform active:scale-95">
          <div className="relative z-10">
            <p className="text-white font-bold text-[13px]">Book a Demo</p>
            <p className="text-white/70 text-xs mt-1">Get more out of your agents.</p>
          </div>
          <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-6xl text-white/10 rotate-12 group-hover:rotate-45 transition-transform">
            rocket
          </span>
        </div>

        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-[color:var(--color-primary-fixed)] flex items-center justify-center text-[color:var(--color-on-primary-fixed)] text-sm font-bold shrink-0">
            MC
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-[color:var(--color-on-surface)] truncate">Maddy Capone</p>
            <p className="text-[10px] text-[color:var(--color-secondary)] truncate">Personal Account</p>
          </div>
          <span className="material-symbols-outlined text-[color:var(--color-secondary)]">unfold_more</span>
        </div>
      </div>
    </aside>
  );
}
