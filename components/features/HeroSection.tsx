"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Countdown } from "./Countdown";
import { useAppContext } from "@/components/providers/AppContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const HeroSection = () => {
    const { isNightShift } = useAppContext();

    const handleScrollToDates = () => {
        const element = document.getElementById('termine');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            className={cn(
                "relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b-8 border-black",
                "bg-concreteDark" // Fallback
            )}
        >
            <div className="absolute inset-0 bg-concreteDark">
                <div
                    className={cn(
                        "absolute inset-0 opacity-60 bg-cover bg-center transition-all duration-700",
                        isNightShift ? "mix-blend-overlay" : "mix-blend-normal"
                    )}
                    style={{
                        backgroundImage: "url('/gallery/hero-main.png')",
                    }}
                ></div>
                {isNightShift && (
                    <div className="absolute inset-0 bg-gradient-to-t from-neonOrange/20 to-purple-900/40"></div>
                )}
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="inline-block bg-signalYellow px-4 py-1 text-black font-bold uppercase tracking-widest text-xs md:text-sm transform -rotate-2 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Der Bauleiter der Schinkenstrasse
                </div>
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    className="font-stencil text-5xl md:text-8xl lg:text-9xl text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] leading-none mb-8"
                >
                    BETON AUF
                    <br />
                    <span className="text-neonOrange">MALLORCA!</span>
                </motion.h1>

                <p className="text-white/90 text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-8">
                    Der einzige Bauleiter, der seine Hits mit KI zimmert! 🏗️
                </p>

                <div className="flex justify-center gap-4 mt-6">
                    <Button
                        variant="danger"
                        className="text-xl px-10 py-6"
                        onClick={() => {
                            const element = document.getElementById('musik');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        SONGS HÖREN
                    </Button>
                    <Button
                        variant="secondary"
                        className="text-xl px-10 py-6"
                        onClick={() => {
                            const element = document.getElementById('shop');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        MERCH SHOPPEN
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-0 w-full overflow-hidden bg-signalYellow py-2 border-t-4 border-black">
                <div className="whitespace-nowrap animate-marquee font-bold uppercase text-black flex gap-8">
                    {Array(10)
                        .fill(
                            "+++ ACHTUNG BAUSTELLE +++ ES GIBT KEIN BIER AUF HAWAII ABER BETON AUF MALLORCA +++"
                        )
                        .map((text, i) => (
                            <span key={i}>{text}</span>
                        ))}
                </div>
            </div>
            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
};
