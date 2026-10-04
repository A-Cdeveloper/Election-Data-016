import AppShellFullWidth from "@/components/layout/AppShellFullWidth";

export default function PlacesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShellFullWidth>{children}</AppShellFullWidth>;
}
