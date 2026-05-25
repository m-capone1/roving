export default function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="h-16 bg-[color:var(--color-surface)] border-b border-[color:var(--color-outline-variant)] flex items-center justify-between px-4 sm:px-6 shrink-0 gap-3">
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg hover:bg-[color:var(--color-surface-container)] transition-colors shrink-0"
        aria-label="Open menu"
      >
        <span className="material-symbols-outlined text-[color:var(--color-secondary)]">menu</span>
      </button>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[color:var(--color-outline)] text-[20px] group-focus-within:text-[color:var(--color-primary)] transition-colors">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-[color:var(--color-surface-container-low)] border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition-all"
            placeholder="Search anything..."
            type="text"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
            <span className="text-[10px] font-bold text-[color:var(--color-outline)] bg-[color:var(--color-surface-variant)] px-1.5 py-0.5 rounded border border-[color:var(--color-outline-variant)]">
              ⌘K
            </span>
          </div>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden md:flex items-center gap-2 bg-[color:var(--color-surface-container-low)] px-3 py-1.5 rounded-lg border border-[color:var(--color-outline-variant)] text-[color:var(--color-secondary)]">
          <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          <span className="text-[13px]">May 1 – May 31, 2025</span>
          <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
        </div>
        <button className="hidden sm:flex items-center gap-2 bg-[color:var(--color-surface)] border border-[color:var(--color-outline-variant)] px-4 py-2 rounded-lg text-[13px] font-semibold hover:bg-[color:var(--color-surface-container)] transition-colors">
          <span className="material-symbols-outlined text-[20px]">ios_share</span>
          Export
        </button>
        <div className="relative p-2 rounded-full hover:bg-[color:var(--color-surface-container)] transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[color:var(--color-secondary)]">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-[color:var(--color-error)] rounded-full ring-2 ring-[color:var(--color-surface)]" />
        </div>
        <div className="w-8 h-8 rounded-full bg-[color:var(--color-primary-fixed)] flex items-center justify-center text-[color:var(--color-on-primary-fixed)] text-xs font-bold">
          MC
        </div>
      </div>
    </header>
  );
}
