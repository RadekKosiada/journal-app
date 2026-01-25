import Breadcrumb from "../breadcrumb";
import styles from "./header.module.scss";
import { ROUTES } from "@/lib/routes";

const Header = () => {
    return (
        <header className={styles.header}>
            <Breadcrumb breadcrumbData={[
                { order: 1, current: false, url: ROUTES.HOME, label: "Home" },
                { order: 2, current: true, url: ROUTES.NEW_ENTRY, label: "New Entry" }
            ]} />
        </header>
    );
};

export default Header;