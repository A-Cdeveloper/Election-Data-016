"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent } from "react";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

type PlaceOption = {
  value: number;
  label: number;
};

type CustumSelectProps = {
  options: PlaceOption[];
  className?: string;
};

const CustumSelect = ({ options, className }: CustumSelectProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete("bm");
    } else {
      params.set("bm", value);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  return (
    <NativeSelect
      className={className}
      value={searchParams.get("bm") ?? ""}
      onChange={handleChange}
    >
      <NativeSelectOption value="">Sva BM</NativeSelectOption>
      {options.map((option) => (
        <NativeSelectOption key={option.value} value={option.value}>
          BM {option.label}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
};

export default CustumSelect;
