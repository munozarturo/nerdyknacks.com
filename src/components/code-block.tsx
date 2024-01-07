import { HTMLAttributes } from "react";
import { Icons } from "./icons";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Tooltip } from "./tooltip";
import { cn } from "@/lib/utils";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
    code: string;
    language: string;
}

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
    ({ className, code, language, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "bg-secondary-500 rounded-md border-2 flex flex-col my-2 mx-4",
                    className
                )}
                ref={ref}
                {...props}
            >
                <div className="flex flex-row items-center justify-between gap-2 bg-primary-500 text-secondary-500 p-2 font-bold font-sans">
                    <div className="flex flex-row gap-2">
                        <Icons.code fill="#1e1e1e" width={24} height={24} />
                        {language}
                    </div>
                    <Tooltip
                        tooltipText="click to copy"
                        copyText={code}
                        clickToCopy
                        onCopyDisplay="copied"
                    >
                        <Icons.copy fill="#1e1e1e" width={24} height={24} />
                    </Tooltip>
                </div>
                <SyntaxHighlighter
                    language={language}
                    wrapLines={true}
                    wrapLongLines={true}
                    PreTag="div"
                    children={code}
                    style={monokaiSublime}
                ></SyntaxHighlighter>
            </div>
        );
    }
);

CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
