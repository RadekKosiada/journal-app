import Header from "@/components/header";
import RegisterForm from "@/components/register/register";
import { PAGE_LABELS } from "@/lib/pageLabels";


export default function LoginPage() {
    return (
        <>
            <Header pageLabel={PAGE_LABELS.REGISTER_PAGE} />
            <RegisterForm />
        </>
    )
}