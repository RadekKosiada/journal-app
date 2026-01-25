import { ROUTES } from "@/lib/routes";
import BreadcrumbTest from "../breadcrumbTest";
import styles from "./header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <BreadcrumbTest breadcrumbData={[
                { order: 1, current: false, url: ROUTES.HOME, label: "Home" },
                { order: 2, current: true, url: ROUTES.NEW_ENTRY, label: "New Entry" }
            ]} />
        </header>
    );
};

export default Header;