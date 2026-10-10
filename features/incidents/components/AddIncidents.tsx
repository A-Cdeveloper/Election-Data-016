"use client";
import { Button } from "@/components/ui/button";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { IncidentType } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { addIncidentAction, IncidentActionResponse } from "../actions";
import { useActionState } from "react";
import { Loader2 } from "lucide-react";

type AddIncidentsProps = {
  placeNumber: string;
  types: IncidentType[];
};

const initialState: IncidentActionResponse = {
  error: undefined,
  success: undefined,
};

const AddIncidents = ({ placeNumber, types }: AddIncidentsProps) => {
  const [state, formAction, isPending] = useActionState(
    addIncidentAction,
    initialState
  );

  return (
    <div className="my-8 bg-muted p-4">
      <h2
        id="incidents-heading"
        className="text-md font-semibold uppercase tracking-wide text-muted-foreground"
      >
        Prijavi incident
      </h2>
      <form
        action={formAction}
        className="flex flex-col items-end gap-4 pb-4 mt-4"
      >
        <Input type="hidden" name="placeNumber" value={placeNumber} />

        <NativeSelect name="incidentType" defaultValue="">
          <NativeSelectOption value="">
            Izaberite tip incidenta
          </NativeSelectOption>
          {types.map((incidentType) => (
            <NativeSelectOption
              key={incidentType.code}
              value={incidentType.code}
              className="bg-background block py-3"
            >
              {incidentType.code} - {incidentType.name}
            </NativeSelectOption>
          ))}
        </NativeSelect>
        <Textarea
          placeholder="Dodatne informacije o incidentu (opciono)"
          name="description"
          className="resize-none text-sm py-4 h-[100px]"
          defaultValue={""}
          disabled={isPending}
          aria-disabled={isPending}
        />
        <Button
          type="submit"
          variant="outline"
          size="sm"
          className="min-w-[20%] shrink-0 self-end cursor-pointer py-4"
          data-place-number={placeNumber}
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Dodaj incident"
          )}
        </Button>
      </form>
      {state.error && (
        <p className="text-right text-xs text-red-500">{state.error}</p>
      )}
      {state.success && (
        <p className="text-right text-xs text-green-600">{state.success}</p>
      )}
    </div>
  );
};

export default AddIncidents;
