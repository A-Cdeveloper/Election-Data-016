import Header from "@/components/layout/Header";

export default function AppShellFullWidth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-dvh flex-col bg-background">
      <Header />
      <main className="min-h-0 flex-1 overflow-y-auto">
        <div className="w-full mx-auto max-w-7xl p-8 px-2">{children}</div>
      </main>
    </div>
  );
}
