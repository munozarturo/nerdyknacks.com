import "./globals.css";

import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`w-screen ${inter.className} bg-primary`}>
                <Navbar className="bg-secondary" />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}
