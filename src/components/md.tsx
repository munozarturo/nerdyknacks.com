import React, { HTMLAttributes } from "react";

import { CodeBlock } from "./code-block";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";

interface MDProps extends HTMLAttributes<HTMLDivElement> {}

const MD = React.forwardRef<HTMLDivElement, MDProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div className={cn("", className)} ref={ref} {...props}>
                <Markdown
                    className="flex flex-col gap-2"
                    components={{
                        h1: (props: HTMLAttributes<HTMLHeadingElement>) => {
                            return (
                                <h1 className="text-5xl font-bold">
                                    {props.children}
                                </h1>
                            );
                        },
                        h2: (props: HTMLAttributes<HTMLHeadingElement>) => {
                            return (
                                <h2 className="text-2xl font-regular">
                                    {props.children}
                                </h2>
                            );
                        },
                        h3: (props: HTMLAttributes<HTMLHeadingElement>) => {
                            return (
                                <h3 className="text-lg font-regular">
                                    {props.children}
                                </h3>
                            );
                        },
                        p: (props: HTMLAttributes<HTMLParagraphElement>) => {
                            return (
                                <p className="text-lg font-regular">
                                    {props.children}
                                </p>
                            );
                        },
                        code: (props: HTMLAttributes<HTMLPreElement>) => {
                            const { children, className, ...rest } = props;
                            const match = /language-(\w+)/.exec(
                                className || ""
                            );

                            const code = String(children).replace(/\n$/, "");

                            return (
                                <CodeBlock
                                    language={match?.[1] || ""}
                                    code={code}
                                />
                            );
                        },
                    }}
                >
                    {String(children)}
                </Markdown>
            </div>
        );
    }
);

export { MD };
