import LikeButton from "@/ui/button/like-button";
import ClientNewEntry from "./ClientNewEntry";

export default function NewEntry() {
    return (
        <>
            <ClientNewEntry />;
            <LikeButton likes={10} />
        </>
    )


}