"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function NotFound() {
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full p-8">
        <CardHeader className="text-center">
          <CardTitle className="text-5xl mb-0">404</CardTitle>
          <CardDescription className="text-xl">
            Stranica nije pronađena
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 justify-center">
            <Link href="/homepage">
              <Button variant="default">Vrati se na homepage</Button>
            </Link>
            <Button variant="secondary" onClick={handleRefresh}>
              Refresh
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
