import { ROUTES } from "@/lib/routes";
import BreadcrumbBasic from "../breadcrumb-basic";
import NavigationBasic from "../navigation-basic/navigation-basic";
import styles from "./header.module.scss";

const Header = () => {

    const breadcrumbData = [
        { order: 1, current: false, url: ROUTES.HOME, label: "Home" },
        { order: 2, current: true, url: ROUTES.NEW_ENTRY, label: "New Entry" }
    ];
    return (
        <header className={styles.header}>
            <NavigationBasic className={styles.mainNavigation} breadcrumbData={breadcrumbData} />
            <BreadcrumbBasic className={styles.breadcrumbBasic} breadcrumbData={breadcrumbData} />
        </header>
    );
};

export default Header;
