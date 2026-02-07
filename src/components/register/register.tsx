
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
import { useForm } from "react-hook-form";
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
            <form {...form} onSubmit={form.handleSubmit(onSubmit)}>
                {error && <p className="text-red-500">{error}</p>}
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Register</FieldLegend>
                        <FieldDescription>
                            Enter your data to register a new account
                        </FieldDescription>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="username">Username</FieldLabel>
                                <FieldDescription>
                                    Choose a unique username for your account.
                                </FieldDescription>
                                <Input id="username" type="text" autoComplete="false" placeholder="Max Leiter" />

                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <FieldDescription>
                                    Enter your e-mail address.
                                </FieldDescription>
                                <Input id="email" type="email" autoComplete="false" placeholder="your email" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <FieldDescription>
                                    Must be at least 8 characters long.
                                </FieldDescription>
                                <Input id="password" type="password" autoComplete="false" placeholder="••••••••" />
                            </Field>
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
