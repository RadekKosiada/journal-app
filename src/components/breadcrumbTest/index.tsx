'use client';
import { cn } from "@/lib/utils";
import { BreadcrumbDataType } from "@/types/BreadcrumbDataType";
import { ButtonLink } from "../ui/link";
import styles from "./breadcrumb.module.scss";


const BreadcrumbTest = ({ breadcrumbData }: { breadcrumbData: BreadcrumbDataType }) => {

    return (
        <nav aria-label="breadcrumbs" className={styles.breadcrumb}>

            {/* pass props urls and pages' names and iterate with each */}
            < ol className={styles.breadcrumbList} >
                {/* check if breadcrumbData is an array */}
                {breadcrumbData instanceof Array && breadcrumbData.map((item, index) => (

                    <li key={index} className={cn(item.current && styles.breadcrumbListItemCurrent, styles.breadcrumbListItem)}>
                        <ButtonLink variant="link" href={item.url}>{item.label}</ButtonLink>
                    </li>
                ))}
            </ol >
        </nav >
    )
}
export default BreadcrumbTest;