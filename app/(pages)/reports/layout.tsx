import AppShellFullWidth from "@/components/layout/AppShellFullWidth";

export default function ReportsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShellFullWidth>{children}</AppShellFullWidth>;
}
