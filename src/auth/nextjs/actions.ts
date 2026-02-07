"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { signInSchema, signUpSchema } from "./schemas";

export async function signUp(unsafeData: z.infer<typeof signUpSchema>) {
  const { success, data } = signUpSchema.safeParse(unsafeData);

  if (!success) return "Unable to sign up with provided data";
  // TODO: implement sign up logic

  redirect("/");
}

export async function signIn(unsafeData: z.infer<typeof signInSchema>) {
  const { success, data } = signInSchema.safeParse(unsafeData);

  if (!success) return "Unable to sign in with provided data";
  // TODO: implement sign in logic

  redirect("/");
}
