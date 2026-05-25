"use client";

import { useRouter } from "next/navigation";

export default function KYALayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function handleLogoClick() {
    const confirmed = window.confirm("Are you sure you want to leave? Your progress won't be saved.");
    if (confirmed) router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[color:var(--color-background)] flex flex-col">
      <header className="h-14 bg-[color:var(--color-surface-container-lowest)] border-b border-[color:var(--color-outline-variant)] flex items-center px-4 sm:px-8 shrink-0">
        <button onClick={handleLogoClick} className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 bg-[color:var(--color-primary-container)] rounded-lg flex items-center justify-center">
            <span
              className="material-symbols-outlined text-white text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              rocket_launch
            </span>
          </div>
          <span
            className="text-[18px] font-bold text-[color:var(--color-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Roving
          </span>
        </button>
        <span className="text-[color:var(--color-outline-variant)] mx-2">|</span>
        <span className="text-sm text-[color:var(--color-secondary)] font-medium">Know Your Agent</span>
      </header>
      <div className="flex-1 flex">{children}</div>
    </div>
  );
}
