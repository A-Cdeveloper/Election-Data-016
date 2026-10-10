import AppShellWithSidebar from "@/components/layout/AppShellWithSidebar";

export default function PlacesMapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShellWithSidebar>{children}</AppShellWithSidebar>;
}
