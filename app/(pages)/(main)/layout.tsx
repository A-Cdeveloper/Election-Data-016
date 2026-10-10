import AppShellFullWidth from "@/components/layout/AppShellFullWidth";

export default function MainPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShellFullWidth>{children}</AppShellFullWidth>;
}
