"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  updatePlaceTurnoutAction,
  UpdatePlaceTurnoutActionResponse,
} from "@/features/places/actions/index";
import { Loader2 } from "lucide-react";
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
  const [state, formAction, isPending] = useActionState(
    updatePlaceTurnoutAction,
    initialState
  );

  return (
    <>
      <form
        action={formAction}
        className="flex items-center justify-end gap-2 mt-2 p-4 bg-muted w-full"
      >
        <Input
          id={`turnout-${placeNumber}`}
          name="votedCount"
          type="number"
          inputMode="numeric"
          min={0}
          // max={maxVoters}
          placeholder="0"
          defaultValue={currentVotedCount}
          className="max-w-24 flex-1 disabled:opacity-100"
          aria-label="Broj trenutno izašlih"
          aria-required="true"
        />
        <Input name="placeNumber" type="hidden" value={placeNumber} />
        <Button type="submit" className="shrink-0" disabled={isPending}>
          {isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Ažuriraj"
          )}
        </Button>
      </form>
      {state?.error && (
        <div className="text-red-500 text-xs text-end mt-2">{state.error}</div>
      )}
      {state?.success && (
        <div className="text-green-500 text-xs text-end mt-2">
          Broj izašlih je uspešno ažuriran
        </div>
      )}
    </>
  );
};

export default PlaceTurnoutForm;
