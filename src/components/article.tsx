import React, { HTMLAttributes } from "react";

import { MD } from "./md";
import { cn } from "@/lib/utils";

type LinkedElement = {
    icon: string;
    href: string;
    text: string;
};

type Article = {
    timestamp?: number;
    readTime?: number;
    title?: string;
    subTitle?: string;
    tags?: string[];
    technologies?: string[];
    links?: LinkedElement[];
};

interface ActircleProps extends HTMLAttributes<HTMLDivElement> {
    article: Article;
}

const Article = React.forwardRef<HTMLDivElement, ActircleProps>(
    ({ className, article, children, ...props }, ref) => {
        return (
            <div className={cn("", className)} ref={ref} {...props}>
                <div>
                    <h3>
                        {article.readTime}, {article.timestamp},{" "}
                        {article.links?.toString()}
                    </h3>
                    <h1>{article.title}</h1>
                    <h2>{article.subTitle}</h2>
                    <h3>{article.tags?.toString()}</h3>
                    <p>{article.technologies?.toString()}</p>
                </div>
                <MD>{children}</MD>
            </div>
        );
    }
);

export { Article };
