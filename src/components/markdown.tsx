import React, { HTMLAttributes } from "react";

import Markdown from "react-markdown";
import { cn } from "@/lib/utils";

interface MDProps extends HTMLAttributes<HTMLDivElement> {
    children: string;
}

const MD = React.forwardRef<HTMLDivElement, MDProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div className={cn("", className)} ref={ref} {...props}>
                <Markdown children={children} />
            </div>
        );
    }
);

export { MD };
