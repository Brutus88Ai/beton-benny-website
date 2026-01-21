import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
    title: "Beton Benny | Der Bauleiter der Schinkenstrasse",
    description: "Die offizielle Website von Beton Benny. Hier wird gespuckt! Termine, Musik und feinstes Baumaterial.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de" style={{ scrollBehavior: "smooth" }}>
            <head>
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className="antialiased">
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
