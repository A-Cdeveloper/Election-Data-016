import AppShellWithSidebar from "@/components/layout/AppShellWithSidebar";

export default function MainPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShellWithSidebar>{children}</AppShellWithSidebar>;
}
