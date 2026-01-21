"use client";

import React, { useEffect } from "react";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";
import { useAppContext } from "../providers/AppContext";

export const TikTokEmbed = () => {
    const { isNightShift } = useAppContext();

    useEffect(() => {
        // Load TikTok embed script
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup
            const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    return (
        <section
            id="tiktok"
            className={isNightShift ? "bg-zinc-800 py-16 px-4" : "bg-white py-16 px-4"}
        >
            <div className="container mx-auto max-w-5xl">
                <SectionTitle isDark={isNightShift}>TikTok</SectionTitle>
                <div className="mt-8 flex justify-center">
                    <Card isDark={isNightShift} className="w-full max-w-md overflow-hidden">
                        <blockquote
                            className="tiktok-embed"
                            cite="https://www.tiktok.com/@beton_benny"
                            data-unique-id="beton_benny"
                            data-embed-type="creator"
                            style={{ maxWidth: "100%", minWidth: "288px" }}
                        >
                            <section>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.tiktok.com/@beton_benny?refer=creator_embed"
                                    className="text-neonOrange font-bold hover:underline"
                                >
                                    @beton_benny
                                </a>
                            </section>
                        </blockquote>
                    </Card>
                </div>
            </div>
        </section>
    );
};
