import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { BreadcrumbDataType } from "@/types/BreadcrumbDataType";


export function BreadcrumbBasic({ breadcrumbData }: { breadcrumbData: BreadcrumbDataType }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbData instanceof Array && breadcrumbData.map((item, index) => (
                    <BreadcrumbItem key={index}>
                        <BreadcrumbLink href={item.url}>{item.label}</BreadcrumbLink>
                        <BreadcrumbSeparator />
                    </BreadcrumbItem>
                ))}

            </BreadcrumbList>
        </Breadcrumb>
    )
}
export default BreadcrumbBasic;