import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
    title: "Beton Benny | Der KI-Bauleiter von Mallorca",
    description: "Beton Benny - Der einzige Bauleiter, der seine Hits mit KI zimmert! Party-Vibes, Ballermann-Chaos und Schlager-Hits aus der Schinkenstraße.",
    keywords: ["Beton Benny", "Schlager", "Ballermann", "Party", "KI Musik", "Mallorca", "Schinkenstraße"],
    authors: [{ name: "Beton Benny" }],
    openGraph: {
        title: "Beton Benny | Beton auf Mallorca!",
        description: "Der KI-Bauleiter mit den härtesten Schlager-Beats! 🏗️🍺",
        url: "https://beton-benny.vercel.app",
        siteName: "Beton Benny",
        images: [
            {
                url: "/gallery/hero-main.png",
                width: 1200,
                height: 630,
                alt: "Beton Benny - Der Bauleiter"
            }
        ],
        locale: "de_DE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Beton Benny | Beton auf Mallorca!",
        description: "Der KI-Bauleiter mit den härtesten Schlager-Beats!",
        images: ["/gallery/hero-main.png"],
    },
    icons: {
        icon: "/favicon.ico",
    }
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
