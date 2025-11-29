import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from 'next/link';
import { HTMLProps } from 'react';


function ButtonLink({
    className,
    variant,
    replace,
    scroll,
    prefetch,
    onNavigate,
    size,
    href,
    children,
    ...props
}: LinkProps & HTMLProps<HTMLAnchorElement> & VariantProps<typeof buttonVariants>) {
    return (
        <Link
            href={href}
            className={cn(buttonVariants({ variant, size, className }))}
            replace={replace}
            scroll={scroll}
            prefetch={prefetch}
            onNavigate={onNavigate}
            {...props}
        >
            {children}
        </Link>
    );
}

export { ButtonLink };

