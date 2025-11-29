"use client";

import styles from "./button.module.css";

export default function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
    return (
        <button className={styles.btn} onClick={onClick}>
            {children}
        </button>
    );
}