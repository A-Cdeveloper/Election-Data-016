import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function AppShellWithSidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-dvh flex-col bg-background">
      <Header />
      <div className="relative flex min-h-0 flex-1">
        <Sidebar />
        <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
