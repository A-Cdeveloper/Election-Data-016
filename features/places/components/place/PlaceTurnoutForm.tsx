"use client";

import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PlaceTurnoutFormProps = {
  placeNumber: number;
  maxVoters: number;
};

const PlaceTurnoutForm = ({
  placeNumber,
  maxVoters,
}: PlaceTurnoutFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: server action za BM {placeNumber}
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-end gap-2"
    >
      <Input
        id={`turnout-${placeNumber}`}
        name="votedCount"
        type="number"
        inputMode="numeric"
        min={0}
        max={maxVoters}
        placeholder="0"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="max-w-32 flex-1"
        aria-label="Broj trenutno izašlih"
        aria-required="true"
      />
      <Button type="submit" className="shrink-0">
        Ažuriraj
      </Button>
    </form>
  );
};

export default PlaceTurnoutForm;
