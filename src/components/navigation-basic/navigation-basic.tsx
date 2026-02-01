import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { BreadcrumbDataType } from "@/types/BreadcrumbDataType";

const NavigationBasic = ({ className, breadcrumbData }: { className?: string; breadcrumbData: BreadcrumbDataType }) => {
    return (
        <NavigationMenu className={className}>
            <NavigationMenuList>
                {breadcrumbData instanceof Array && breadcrumbData.map((item, index) => (
                    <NavigationMenuItem key={index}>
                        <NavigationMenuLink href={item.url}>{item.label}</NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavigationBasic;