import React, { HTMLAttributes } from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

const Footer = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "w-full min-h-16 flex flex-row items-center justify-center md:justify-end px-16 md:px-28 bg-secondary-500",
                    className
                )}
                {...props}
                ref={ref}
            >
                <div className="w-fit h-full flex flex-row items-center justify-center">
                    <Image
                        src="/brand/logo/logo_wide_full_light.svg"
                        height={48}
                        width={189}
                        alt="nerdyknacks.com logo"
                        priority
                    />
                </div>
            </div>
        );
    }
);
Footer.displayName = "Footer";

export default Footer;
