"use server"

import { redirect } from "next/navigation";
import { signUpSchema } from "./schemas"
import { z } from "zod";

export async function signUp(unsafeData: z.infer<typeof signUpSchema>) {
    const { success, data } = signUpSchema.safeParse(unsafeData);

    if (!success) return "Unable to sign up with provided data";
    // TODO: implement sign up logic

    redirect("/");
    
};