"use client";
import Button from "@/components/ui/button";
import { useState } from 'react';

export default function ClientNewEntry() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>This is where you can add a new entry</h1>
            <p>{count} likes</p>
            <Button onClick={() => setCount(count + 1)}>Click me</Button>

        </>
    );
}