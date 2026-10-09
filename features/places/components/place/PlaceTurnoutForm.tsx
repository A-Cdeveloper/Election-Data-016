"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  updatePlaceTurnoutAction,
  UpdatePlaceTurnoutActionResponse,
} from "@/features/places/actions/index";
import { useActionState } from "react";

type PlaceTurnoutFormProps = {
  placeNumber: number;
  maxVoters: number;
  currentVotedCount: number;
};

const initialState: UpdatePlaceTurnoutActionResponse = {
  error: undefined,
  success: false,
  data: undefined,
};

const PlaceTurnoutForm = ({
  placeNumber,
  currentVotedCount,
}: PlaceTurnoutFormProps) => {
  const [state, formAction] = useActionState(
    updatePlaceTurnoutAction,
    initialState
  );

  return (
    <>
      <form action={formAction} className="flex items-center justify-end gap-2">
        <Input
          id={`turnout-${placeNumber}`}
          name="votedCount"
          type="number"
          inputMode="numeric"
          min={0}
          // max={maxVoters}
          placeholder="0"
          defaultValue={currentVotedCount}
          className="max-w-24 flex-1"
          aria-label="Broj trenutno izašlih"
          aria-required="true"
        />
        <Input name="placeNumber" type="hidden" value={placeNumber} />
        <Button type="submit" className="shrink-0">
          Ažuriraj
        </Button>
      </form>
      {state?.error && (
        <div className="text-red-500 text-sm text-end mt-2">{state.error}</div>
      )}
    </>
  );
};

export default PlaceTurnoutForm;
