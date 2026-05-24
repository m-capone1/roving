import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full bg-[color:var(--color-background)]">
      <Sidebar />
      <main className="ml-[280px] h-screen flex flex-col overflow-hidden w-full">
        <Topbar />
        <div className="flex-1 overflow-y-auto scrollbar-hide">{children}</div>
      </main>
    </div>
  );
}
