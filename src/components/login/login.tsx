"use client";

import { signIn } from "@/auth/nextjs/actions";
import { signInSchema } from "@/auth/nextjs/schemas";
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

export function LoginForm() {
    const [error, setError] = useState<string>();
    const form = useForm<z.infer<typeof signInSchema>>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(data: z.infer<typeof signInSchema>) {
        const error = await signIn(data);
        setError(error);
    };

    return (
        <div className="w-full max-w-md">
            <form {...form} onSubmit={form.handleSubmit(onSubmit)}>
                {error && <p className="text-red-500">{error}</p>}
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Login</FieldLegend>
                        <FieldDescription>
                            Enter your data to login to your account
                        </FieldDescription>
                        <FieldGroup>

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
                        <Button type="submit">Login</Button>
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
};

export default LoginForm;
