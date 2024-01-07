import { HTMLAttributes } from "react";
import React from "react";
import { cn } from "@/lib/utils";

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
    tooltipText: string;
    tooltipClassName?: string;
    clickToCopy?: boolean;
    copyText?: string;
    onCopyDisplay?: string;
    positioning?: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw";
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
    (
        {
            tooltipText,
            tooltipClassName,
            clickToCopy = false,
            copyText = "",
            onCopyDisplay = "",
            positioning = "s",
            className,
            children,
            ...props
        },
        ref
    ) => {
        const [isVisible, setIsVisible] = React.useState<boolean>(false);
        const [content, setContent] = React.useState<string>(tooltipText);

        const copyToClipboard = () => {
            navigator.clipboard.writeText(copyText);

            setIsVisible(true);
            setContent(onCopyDisplay);
            setTimeout(() => {
                setContent(tooltipText);
            }, 2000);
        };

        return (
            <span
                onClick={copyToClipboard}
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                className={cn(
                    "relative cursor-pointer flex items-center gap-2",
                    className
                )}
                {...props}
                ref={ref}
            >
                {children}
                {isVisible && (
                    <span className="absolute bottom-full mb-2 w-auto p-2 bg-primary-500 text-secondary-500 text-sm rounded-md shadow-lg z-10 -translate-x-1/2 left-1/2">
                        {content}
                    </span>
                )}
            </span>
        );
    }
);

Tooltip.displayName = "Tooltip";

export { Tooltip };
