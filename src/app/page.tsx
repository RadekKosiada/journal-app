import Header from "@/components/header";
import { ButtonLink } from "@/components/ui/link";

export default function Home() {
    return (
        <>
            <Header />
            <h1>this is Home Page</h1>
            <ButtonLink variant="link" href="/new-entry">Go to New Entry Page</ButtonLink>
        </>

    );
}

{/* <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>

                        <NavigationMenuLink>Link</NavigationMenuLink>

                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu> */}
