"use client";

import Header from "@/components/header";
import { PAGE_LABELS } from "@/lib/pageLabels";

export default function ClientNewEntry() {
    return (
        <>
            <Header pageLabel={PAGE_LABELS.NEW_ENTRY} />
            <h1>This is where you can add a new entry</h1>
        </>
    );
}