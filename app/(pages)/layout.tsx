import { getCurrentUser } from "@/features/auth/utils/auth";
import { redirect } from "next/navigation";

export default async function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/");
  }
  return <>{children}</>;
}
