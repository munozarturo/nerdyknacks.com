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
                className={`w-screen min-h-screen ${inter.className} bg-secondary flex flex-col custom-scrollbar`}
            >
                <Navbar />
                <main className="w-full flex flex-col flex-grow items-center">
                    <div className="w-full md:w-3/5 max-w-[768px] flex flex-col px-4 md:px-0 py-4">
                        {children}
                    </div>
                    <div className="w-full h-fit mt-auto">
                        <Footer />
                    </div>
                </main>
            </body>
        </html>
    );
}
