
import Header from "@/components/header";
import { PAGE_LABELS } from "@/lib/pageLabels";

export default function Home() {
    return (
        <>
            <Header pageLabel={PAGE_LABELS.HOME} />
            <h1>this is Home Page&#39;s Headline</h1>

        </>
    );
};
