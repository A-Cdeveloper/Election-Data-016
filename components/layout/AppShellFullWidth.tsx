import Header from "@/components/layout/Header";

export default function AppShellFullWidth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-dvh flex-col bg-background">
      <Header />
      <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
