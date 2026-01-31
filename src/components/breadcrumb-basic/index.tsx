import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { BreadcrumbDataType } from "@/types/BreadcrumbDataType";
import styles from "./breadcrumb-basic.module.scss";

export function BreadcrumbBasic({ breadcrumbData }: { breadcrumbData: BreadcrumbDataType }) {
    return (
        <Breadcrumb className={styles.breadcrumb}>
            <BreadcrumbList className={styles.breadcrumbList}>
                {
                    breadcrumbData instanceof Array && breadcrumbData.map((item, index) => (
                        <BreadcrumbItem key={index} className={styles.breadcrumbItem}>
                            <BreadcrumbLink href={item.url} className={styles.breadcrumbLink}>{item.label}</BreadcrumbLink>
                            <BreadcrumbSeparator className={styles.breadcrumbSeparator} />
                        </BreadcrumbItem>
                    ))
                }

            </BreadcrumbList >
        </Breadcrumb >
    )
}
export default BreadcrumbBasic;