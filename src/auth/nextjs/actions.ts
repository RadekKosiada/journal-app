"use server";

import { db } from "@/db";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { redirect } from "next/navigation";
import { z } from "zod";
import { generateSalt, hashPassword } from "../core/passwordHasher";
import { usersTable } from "./../../db/schema/user_data";
import { signInSchema, signUpSchema } from "./schemas";

export async function signUp(unsafeData: z.infer<typeof signUpSchema>) {
  const { success, data } = signUpSchema.safeParse(unsafeData);

  if (!success) return "Unable to sign up with provided data";
  // TODO: implement sign up logic

  const existingUser = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, data.email),
  });

  if (existingUser !== null) {
    return "User with this email already exists";
  }

  const hashedPassword = await hashPassword(data.password, generateSalt());

  redirect("/");
}

export async function signIn(unsafeData: z.infer<typeof signInSchema>) {
  const { success, data } = signInSchema.safeParse(unsafeData);

  if (!success) return "Unable to sign in with provided data";
  // TODO: implement sign in logic

  redirect("/");
}
