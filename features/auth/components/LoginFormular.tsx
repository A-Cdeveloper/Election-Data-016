"use client";
import CustomInput from "@/components/custom/CustomInput";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect } from "react";
import { loginAction } from "../actions/login";

import { LoginActionResponseType } from "../types";
import { redirect } from "next/navigation";

const initialState: LoginActionResponseType = {
  success: false,
  error: [],
  message: "",
};

const LoginFormular = () => {
  const [state, formAction] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.success) {
      redirect("/homepage");
    }
  }, [state.success]);

  return (
    <form action={formAction} className="flex flex-col gap-4 w-xs">
      <CustomInput
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        defaultValue={state.email ?? ""}
      />
      <CustomInput
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <Button
        type="submit"
        variant="default"
        className="w-full rounded-none font-nunito-sans font-semibold text-base h-10 uppercase cursor-pointer"
      >
        Login
      </Button>
      {state?.error && (
        <span className="whitespace-pre-wrap text-sm text-red-500">
          {state.error.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </span>
      )}
    </form>
  );
};

export default LoginFormular;
