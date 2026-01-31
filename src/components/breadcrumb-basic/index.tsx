import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { BreadcrumbDataType } from "@/types/BreadcrumbDataType";
import styles from "./breadcrumb-basic.module.scss";

export function BreadcrumbBasic({ className, breadcrumbData }: { className?: string; breadcrumbData: BreadcrumbDataType }) {

    return (
        <Breadcrumb className={className}>
            <BreadcrumbList className={styles.breadcrumbList}>
                {
                    breadcrumbData instanceof Array && breadcrumbData.map((item, index) => (
                        <BreadcrumbItem key={index} className={styles.breadcrumbItem} current={item.current}>
                            {!item.current ?
                                <BreadcrumbLink href={item.url} className={styles.breadcrumbLink}>{item.label}</BreadcrumbLink>
                                :
                                <span>{item.label}</span>
                            }
                            <BreadcrumbSeparator className={styles.breadcrumbSeparator} />
                        </BreadcrumbItem>
                    ))
                }

            </BreadcrumbList >
        </Breadcrumb >
    )
}
export default BreadcrumbBasic;