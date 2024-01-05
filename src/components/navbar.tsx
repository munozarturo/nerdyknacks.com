"use client";

import React, { HTMLAttributes } from "react";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavigationLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    href: string;
    activeOnSubpath?: boolean;
}

const NavigationLink = React.forwardRef<HTMLAnchorElement, NavigationLinkProps>(
    ({ className, href, activeOnSubpath = false, children, ...props }, ref) => {
        const pathname = usePathname();

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
                        ? "text-lg font-bold rounded-md px-2 text-secondary bg-primary"
                        : "text-lg font-bold rounded-md px-2 text-primary bg-secondary hover:bg-primary hover:text-secondary",
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
        return (
            <nav
                className={cn(
                    "w-full min-h-16 flex flex-row items-center px-28 shadow-lg bg-secondary",
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
                        />
                    </Link>
                </div>
                <ul className="w-full h-full flex flex-row justify-end">
                    <li className="w-fit h-full flex flex-row items-center gap-3">
                        <NavigationLink href="/home">home</NavigationLink>
                        <NavigationLink href="/blog" activeOnSubpath>
                            blog
                        </NavigationLink>
                        <NavigationLink href="/projects" activeOnSubpath>
                            projects
                        </NavigationLink>
                        <NavigationLink href="/about">about</NavigationLink>
                    </li>
                </ul>
            </nav>
        );
    }
);
Navbar.displayName = "Navbar";

export default Navbar;
