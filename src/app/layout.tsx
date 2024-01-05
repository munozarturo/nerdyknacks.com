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
                className={`w-screen h-screen ${inter.className} bg-secondary flex flex-col`}
            >
                <Navbar />
                <main className="flex flex-col flex-grow items-center overflow-y-auto custom-scrollbar">
                    <div className="w-full md:w-3/5 max-w-[768px] flex flex-col px-4 md:px-0 py-4">
                        {children}
                        {[...Array(200)].map((_, i) => (
                            <p key={i}>something</p>
                        ))}
                    </div>
                    <div className="w-full h-fit mt-auto">
                        <Footer />
                    </div>
                </main>
            </body>
        </html>
    );
}
