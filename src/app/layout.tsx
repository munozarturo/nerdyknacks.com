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
            <body
                className={`w-screen h-screen ${inter.className} bg-primary flex flex-col`}
            >
                <Navbar />
                <main className="flex-grow overflow-y-auto">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
