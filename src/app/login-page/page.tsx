import Header from "@/components/header";
import LoginForm from "@/components/login/login";
import { PAGE_LABELS } from "@/lib/pageLabels";


export default function LoginPage() {
    return (
        <>
            <Header pageLabel={PAGE_LABELS.LOGIN_PAGE} />
            <LoginForm />
        </>
    )
}