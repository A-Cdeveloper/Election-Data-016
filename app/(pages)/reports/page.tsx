import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ReportsPage = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold uppercase">Izveštaji</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="min-h-64">
          <CardHeader>
            <CardTitle>Izlaznost</CardTitle>
            <CardDescription>
              Pregled izlaznosti po biračkim mestima.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 items-center justify-center">
            <span className="text-sm text-muted-foreground">
              Izveštaj uskoro
            </span>
          </CardContent>
        </Card>

        <Card className="min-h-64">
          <CardHeader>
            <CardTitle>Incidenti</CardTitle>
            <CardDescription>Pregled prijavljenih incidenata.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 items-center justify-center">
            <span className="text-sm text-muted-foreground">
              Izveštaj uskoro
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportsPage;
