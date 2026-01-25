import { ROUTES } from "@/lib/routes";
import BreadcrumbBasic from "../breadrumb";
import styles from "./header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <BreadcrumbBasic breadcrumbData={[
                { order: 1, current: false, url: ROUTES.HOME, label: "Home" },
                { order: 2, current: true, url: ROUTES.NEW_ENTRY, label: "New Entry" }
            ]} />
        </header>
    );
};

export default Header;