
"use client";

import { signUp } from "@/auth/nextjs/actions";
import { signUpSchema } from "@/auth/nextjs/schemas";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
;

export function RegisterForm() {
    const [error, setError] = useState<string>();
    const form = useForm<z.infer<typeof signUpSchema>>({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(data: z.infer<typeof signUpSchema>) {
        const error = await signUp(data);
        setError(error);
    }

    return (
        <div className="w-full max-w-md">
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {error && <p className="text-red-500">{error}</p>}
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Register</FieldLegend>
                        <FieldDescription>
                            Enter your data to register a new account
                        </FieldDescription>
                        <FieldGroup>
                            <Controller
                                name="username"
                                control={form.control}
                                render={({ field }) => (
                                    <Field>
                                        <FieldLabel htmlFor="username">Username</FieldLabel>
                                        <FieldDescription>
                                            Choose a unique username for your account.
                                        </FieldDescription>
                                        <Input {...field} id="username" type="text" autoComplete="false" placeholder="Max Leiter" />
                                    </Field>
                                )}
                            />
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                    <Field>
                                        <FieldLabel htmlFor="email">Email</FieldLabel>
                                        <FieldDescription>
                                            Enter your e-mail address.
                                        </FieldDescription>
                                        <Input {...field} id="email" type="email" autoComplete="false" placeholder="your email" />
                                    </Field>
                                )}
                            />
                            <Controller
                                name="password"
                                control={form.control}
                                render={({ field }) => (
                                    <Field>
                                        <FieldLabel htmlFor="password">Password</FieldLabel>
                                        <FieldDescription>
                                            Must be at least 8 characters long.
                                        </FieldDescription>
                                        <Input {...field} id="password" type="password" autoComplete="false" placeholder="••••••••" />
                                    </Field>
                                )}
                            />

                        </FieldGroup>
                    </FieldSet>
                    <Field orientation="horizontal">
                        <Button type="submit">Register</Button>
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
};

export default RegisterForm;
