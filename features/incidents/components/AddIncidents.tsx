"use client";
import { Button } from "@/components/ui/button";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { IncidentType } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { addIncidentAction, IncidentActionResponse } from "../actions";
import { useActionState } from "react";

type AddIncidentsProps = {
  placeNumber: string;
  types: IncidentType[];
};

const initialState: IncidentActionResponse = {
  error: undefined,
  success: undefined,
};

const AddIncidents = ({ placeNumber, types }: AddIncidentsProps) => {
  const [state, formAction] = useActionState(addIncidentAction, initialState);

  return (
    <div>
      <h2
        id="incidents-heading"
        className="text-md font-semibold uppercase tracking-wide text-muted-foreground"
      >
        Prijavi incident
      </h2>
      <form
        action={formAction}
        className="flex flex-col items-end gap-4 pb-8 mt-4"
      >
        <Input type="hidden" name="placeNumber" value={placeNumber} />
        <NativeSelect defaultValue={types[0]?.code} name="incidentType">
          {types.map((incidentType) => (
            <option key={incidentType.code} value={incidentType.code}>
              {incidentType.code} - {incidentType.name}
            </option>
          ))}
        </NativeSelect>
        <Textarea
          placeholder="Dodatne informacije o incidentu"
          name="description"
          className="resize-none text-sm"
          defaultValue={""}
        />
        <Button
          type="submit"
          variant="outline"
          size="sm"
          className="min-w-[22%] shrink-0 self-end cursor-pointer"
          data-place-number={placeNumber}
        >
          Dodaj incident
        </Button>
      </form>
      {state.error && (
        <p className="mt-2 text-right text-sm text-red-500">{state.error}</p>
      )}
      {state.success && (
        <p className="mt-2 text-right text-sm text-green-600">
          {state.success}
        </p>
      )}
    </div>
  );
};

export default AddIncidents;
