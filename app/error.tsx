"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full p-8">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-16 w-16 text-destructive" />
          </div>
          <CardTitle className="text-5xl">Greška</CardTitle>
          <CardDescription className="text-lg">
            {error.message || "Došlo je do greške"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 justify-center">
            <Link href="/homepage">
              <Button variant="default">Vrati se na homepage</Button>
            </Link>
            <Button variant="secondary" onClick={reset}>
              Pokušaj ponovno
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
