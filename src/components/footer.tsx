import React, { HTMLAttributes } from "react";

import Image from "next/image";

const Footer = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ ...props }, ref) => {
        return <nav className="w-full h-16 shadow-lg"></nav>;
    }
);
Footer.displayName = "Footer";

export default Footer;
