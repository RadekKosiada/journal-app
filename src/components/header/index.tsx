import { PAGE_LABELS } from "@/lib/pageLabels";
import { ROUTES } from "@/lib/routes";
import BreadcrumbBasic from "../breadcrumb-basic";
import NavigationBasic from "../navigation-basic/navigation-basic";

const Header = ({ pageLabel }: { pageLabel: string }) => {

    const breadcrumbData = [
        {
            current: pageLabel === PAGE_LABELS.HOME,
            url: ROUTES.HOME,
            label: PAGE_LABELS.HOME
        },
        {
            current: pageLabel === PAGE_LABELS.NEW_ENTRY,
            url: ROUTES.NEW_ENTRY,
            label: PAGE_LABELS.NEW_ENTRY
        },
        {
            current: pageLabel === PAGE_LABELS.LOGIN_PAGE,
            url: ROUTES.LOGIN_PAGE,
            label: PAGE_LABELS.LOGIN_PAGE
        },
        {
            current: pageLabel === PAGE_LABELS.REGISTER_PAGE,
            url: ROUTES.REGISTER_PAGE,
            label: PAGE_LABELS.REGISTER_PAGE
        }
    ];

    return (
        <header className={"mb-8"}>
            <NavigationBasic breadcrumbData={breadcrumbData} />
            <BreadcrumbBasic breadcrumbData={breadcrumbData} />
        </header>
    );
};

export default Header;
