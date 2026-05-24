"use client";

export function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[13px] font-semibold text-[color:var(--color-on-surface)] mb-1.5">{children}</p>;
}

export function Hint({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-[color:var(--color-secondary)] mt-1">{children}</p>;
}

export function TextInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-3 py-2.5 rounded-lg border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] text-sm text-[color:var(--color-on-surface)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 focus:border-[color:var(--color-primary)] transition-all"
    />
  );
}

export function Textarea({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      className="w-full px-3 py-2.5 rounded-lg border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] text-sm text-[color:var(--color-on-surface)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 focus:border-[color:var(--color-primary)] transition-all resize-none"
    />
  );
}

export function Select<T extends string>({
  value, onChange, options, placeholder,
}: {
  value: T | ""; onChange: (v: T) => void; options: T[]; placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className="w-full px-3 py-2.5 rounded-lg border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] text-sm text-[color:var(--color-on-surface)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 focus:border-[color:var(--color-primary)] transition-all appearance-none"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

export function ChipGroup<T extends string>({
  options, selected, onChange, icon,
}: {
  options: T[]; selected: T[]; onChange: (v: T[]) => void; icon?: string;
}) {
  function toggle(o: T) {
    onChange(selected.includes(o) ? selected.filter((x) => x !== o) : [...selected, o]);
  }
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = selected.includes(o);
        return (
          <button
            key={o}
            type="button"
            onClick={() => toggle(o)}
            className={[
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-medium border transition-all",
              active
                ? "bg-[color:var(--color-primary)]/10 border-[color:var(--color-primary)] text-[color:var(--color-primary)]"
                : "bg-[color:var(--color-surface-container-low)] border-[color:var(--color-outline-variant)] text-[color:var(--color-secondary)] hover:border-[color:var(--color-primary)]/40",
            ].join(" ")}
          >
            {icon && <span className="material-symbols-outlined text-[14px]">{icon}</span>}
            {active && <span className="material-symbols-outlined text-[14px]">check</span>}
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div
        onClick={() => onChange(!checked)}
        className={[
          "relative w-10 h-6 rounded-full transition-colors",
          checked ? "bg-[color:var(--color-primary)]" : "bg-[color:var(--color-outline-variant)]",
        ].join(" ")}
      >
        <div className={[
          "absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform",
          checked ? "translate-x-5" : "translate-x-1",
        ].join(" ")} />
      </div>
      <span className="text-sm text-[color:var(--color-on-surface)]">{label}</span>
    </label>
  );
}
