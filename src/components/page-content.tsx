import { HTMLAttributes } from "react";
import React from "react";
import { cn } from "@/lib/utils";

const PageContent = React.forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    return (
        <div
            className={cn(
                "w-full md:w-5/6 max-w-[768px] flex flex-col px-4 md:px-0 py-2 text-primary-500",
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </div>
    );
});

PageContent.displayName = "PageContent";

export { PageContent };
