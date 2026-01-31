import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { BreadcrumbDataType } from "@/types/BreadcrumbDataType";

const NavigationBasic = ({ breadcrumbData }: { breadcrumbData: BreadcrumbDataType }) => {
    return (
        <NavigationMenu>
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