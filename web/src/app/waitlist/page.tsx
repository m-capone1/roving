import Link from "next/link";
import Image from "next/image";
import WaitlistForm from "@/components/landing/WaitlistForm";

const perks = [
  { icon: "rocket_launch", label: "Early access", detail: "Be first through the door when we open accounts to the public." },
  { icon: "forum", label: "Founder notes", detail: "Raw updates directly from the team on what we're building and why." },
  { icon: "group", label: "Community", detail: "Connect with builders who are putting AI agents to work in the real world." },
  { icon: "bolt", label: "Product drops", detail: "Early demos and new features before they hit the main release." },
];

export const metadata = {
  title: "Join the Waitlist — Roving",
  description: "Get early access to Roving, the financial network for AI agents.",
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#020D1C" }}>
      {/* Minimal nav */}
      <header className="px-6 py-5 flex items-center justify-between max-w-[1200px] mx-auto w-full">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo-symbol.png" alt="Roving" width={32} height={32} className="w-8 h-8 object-contain" />
          <Image src="/roving-logo.png" alt="Roving" width={100} height={28} className="h-7 w-auto object-contain translate-y-1" />
        </Link>
        <Link
          href="/"
          className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to home
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: pitch */}
          <div className="flex flex-col gap-10 lg:sticky lg:top-20">
            <div className="flex flex-col gap-6">
              <div
                className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: "#014BAA26", color: "#7BA7F7" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7BA7F7] animate-pulse" />
                Now building
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold text-white leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get early access to Roving
              </h1>

              <p className="text-lg text-white/70 leading-relaxed">
                Be among the first to access Roving. Get product drops, early demos and founder notes as we build the financial layer for the agentic economy.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {perks.map((perk) => (
                <div key={perk.label} className="flex items-start gap-4 p-4 rounded-2xl" style={{ backgroundColor: "#ffffff08" }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#014BAA26" }}
                  >
                    <span className="material-symbols-outlined text-[18px]" style={{ color: "#7BA7F7" }}>
                      {perk.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-semibold text-white">{perk.label}</p>
                    <p className="text-sm text-white/60">{perk.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-white/30">
              We&apos;ll never share your information or spam you. Unsubscribe anytime.
            </p>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl p-6 sm:p-8" style={{ backgroundColor: "#252E3A99" }}>
            <WaitlistForm />
          </div>

        </div>
      </main>
    </div>
  );
}
