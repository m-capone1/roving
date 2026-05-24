export default function KYALayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] flex flex-col">
      <header className="h-14 bg-[color:var(--color-surface-container-lowest)] border-b border-[color:var(--color-outline-variant)] flex items-center px-8 shrink-0">
        <div className="flex items-center gap-2.5">
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
          <span className="text-[color:var(--color-outline-variant)] mx-2">|</span>
          <span className="text-sm text-[color:var(--color-secondary)] font-medium">Know Your Agent</span>
        </div>
      </header>
      <div className="flex-1 flex">{children}</div>
    </div>
  );
}
