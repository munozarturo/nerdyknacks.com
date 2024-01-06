"use client";

import React, { HTMLAttributes } from "react";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useScroll } from "@/hooks/use-scroll";

interface NavigationLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    href: string;
    pathname: string;
    activeOnSubpath?: boolean;
}

const NavigationLink = React.forwardRef<HTMLAnchorElement, NavigationLinkProps>(
    (
        {
            className,
            pathname,
            href,
            activeOnSubpath = false,
            children,
            ...props
        },
        ref
    ) => {
        const isActive = (): boolean => {
            if (activeOnSubpath) {
                return pathname.startsWith(href);
            }
            return pathname === href;
        };

        return (
            <Link
                className={cn(
                    isActive()
                        ? "text-lg font-bold rounded-md py-1 px-2 text-secondary bg-primary"
                        : "text-lg font-bold rounded-md py-1 px-2 text-primary bg-secondary hover:bg-primary hover:text-secondary",
                    className
                )}
                href={href}
                ref={ref}
                {...props}
            >
                {children}
            </Link>
        );
    }
);

NavigationLink.displayName = "NavigationLink";

const Navbar = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const pathname = usePathname();
        const scroll = useScroll();

        const [hideNavbar, setHideNavbar] = React.useState<boolean>(false);

        React.useEffect(() => {
            if (scroll.y > 300 && scroll.lastY - scroll.y < 0) {
                setHideNavbar(true);
            } else {
                setHideNavbar(false);
            }
        }, [scroll.y, scroll.lastY]);

        return (
            <nav
                className={cn(
                    "sticky top-0 w-full min-h-16 flex flex-row items-center px-28 shadow-lg bg-secondary transform duration-300 ease-in-out",
                    hideNavbar ? "-translate-y-full" : "",
                    className
                )}
                {...props}
                ref={ref}
            >
                <div className="w-fit h-full flex flex-row items-center justify-center">
                    <Link href="/home">
                        <Image
                            src="/brand/logo/logo_wide_light.svg"
                            height={40}
                            width={114}
                            alt="nerdyknacks.com logo"
                            priority
                        />
                    </Link>
                </div>
                <div className="w-full h-full flex flex-row justify-end items-center">
                    <ul className="w-fit h-full flex flex-row justify-center items-center gap-3">
                        <li className="w-fit h-fit">
                            <NavigationLink href="/home" pathname={pathname}>
                                home
                            </NavigationLink>
                        </li>
                        <li className="w-fit h-fit">
                            <NavigationLink
                                href="/blog"
                                pathname={pathname}
                                activeOnSubpath
                            >
                                blog
                            </NavigationLink>
                        </li>
                        <li className="w-fit h-fit">
                            <NavigationLink
                                href="/projects"
                                pathname={pathname}
                                activeOnSubpath
                            >
                                projects
                            </NavigationLink>
                        </li>
                        <li className="w-fit h-fit">
                            <NavigationLink href="/about" pathname={pathname}>
                                about
                            </NavigationLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
);
Navbar.displayName = "Navbar";

export default Navbar;
