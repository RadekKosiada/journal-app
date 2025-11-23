import Tiptap from "@/components/ui/rich-text-editor";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>this is Home Page</h1>
            <Link href="/new-entry">Go to New Entry Page</Link>
            <Tiptap />
        </>

    );
}
