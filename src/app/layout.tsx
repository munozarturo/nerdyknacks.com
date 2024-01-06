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
                className={`w-screen min-h-screen ${inter.className} bg-sc-400 flex flex-col custom-scrollbar`}
            >
                <Navbar />
                <main className="w-full flex flex-col flex-grow items-center">
                    {children}
                    <div className="w-full h-fit mt-auto">
                        <Footer />
                    </div>
                </main>
            </body>
        </html>
    );
}
