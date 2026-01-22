"use client";

import React, { useState } from "react";
import { Construction, Beer, Music, Hammer, SkipBack, Play, SkipForward, ExternalLink } from "lucide-react";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";
import { useAppContext } from "../providers/AppContext";
import { cn } from "@/lib/utils";
import { Guestbook } from "./Guestbook";
import { motion } from "framer-motion";

const SOUNDS = [
    { id: 1, label: "ACHTUNG!", icon: <Construction size={20} />, file: "/sounds/achtung.mp3" },
    { id: 2, label: "BIER HER!", icon: <Beer size={20} />, file: "/sounds/bier.mp3" },
    { id: 3, label: "DÖPP DÖPP", icon: <Music size={20} />, file: "/sounds/doepp.mp3" },
    { id: 4, label: "PRRRRT!", icon: <Hammer size={20} />, file: "/sounds/prrrt.mp3" },
];

export const Soundboard = () => {
    const { isNightShift } = useAppContext();
    const [activeSound, setActiveSound] = useState<number | null>(null);

    const playSound = (id: number) => {
        const sound = SOUNDS.find((s) => s.id === id);
        if (!sound) return;

        setActiveSound(id);
        const audio = new Audio(sound.file);
        audio.play().catch((err) => console.warn("Audio play failed (user interaction needed?)", err));

        // Reset active state after short delay
        setTimeout(() => setActiveSound(null), 500);
    };

    return (
        <section
            id="musik"
            className={cn(
                "py-20 px-4",
                isNightShift ? "bg-zinc-900" : "bg-gray-100"
            )}
        >
            <div className="container mx-auto max-w-5xl">
                <SectionTitle isDark={isNightShift}>Aktuelle Bauprojekte</SectionTitle>
                <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
                    {/* SPOTIFY PLAYER CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Card
                            isDark={isNightShift}
                            className="flex flex-col items-center text-center p-0 overflow-hidden h-full"
                        >
                            <div className="bg-black text-white w-full py-2 font-bold uppercase text-xs flex justify-between px-4">
                                <span>Spotify Premium (Beton Edition)</span>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                            </div>
                            <div className="w-full relative bg-[#121212] p-4 flex flex-col gap-4 flex-grow">
                                <div className="flex gap-4 items-center text-left">
                                    <img
                                        src="/images/album-cover.jpg"
                                        className="w-20 h-20 shadow-lg border border-gray-700 object-cover"
                                        alt="Sauf-Bauleitung Album"
                                    />
                                    <div>
                                        <div className="text-white font-bold text-lg">
                                            Sauf-Bauleitung
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            Beton Benny • 2026
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-700 h-1 rounded-full mt-2 relative overflow-hidden">
                                    <div className="absolute left-0 top-0 h-full bg-[#1DB954] w-1/3 animate-pulse"></div>
                                </div>
                                <div className="flex justify-between items-center text-white px-4">
                                    <SkipBack size={20} className="hover:text-[#1DB954]" />
                                    <div className="bg-white text-black rounded-full p-3 hover:scale-105 transition-transform cursor-pointer">
                                        <Play size={24} fill="black" />
                                    </div>
                                    <SkipForward size={20} className="hover:text-[#1DB954]" />
                                </div>
                                <div className="mt-auto flex flex-col gap-2">
                                    <a
                                        href="https://distrokid.com/hyperfollow/betonbenny/sauf-bauleitung"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#1DB954] text-xs font-bold text-center border border-[#1DB954] rounded-full py-1 px-4 self-center uppercase cursor-pointer hover:bg-[#1DB954] hover:text-black transition-colors flex items-center gap-2"
                                    >
                                        Auf Spotify anhören
                                    </a>
                                    <a
                                        href="https://distrokid.com/hyperfollow/betonbenny/sauf-bauleitung"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-neonOrange text-black text-xs font-bold text-center border-2 border-black rounded-full py-2 px-4 self-center uppercase cursor-pointer hover:bg-signalYellow transition-colors flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                    >
                                        <ExternalLink size={14} /> ALLE STREAMING-DIENSTE
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* SOUNDBOARD CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <Card isDark={isNightShift} className="relative h-full">
                            <div className="absolute -top-4 -right-4 bg-neonOrange text-black font-bold px-4 py-2 transform rotate-3 shadow-md border-2 border-black z-10 w-fit">
                                SOUNDBOARD
                            </div>
                            <div className="grid grid-cols-2 gap-4 h-full content-center p-4">
                                {SOUNDS.map((sound) => (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        key={sound.id}
                                        onClick={() => playSound(sound.id)}
                                        className={cn(
                                            "h-24 font-bold uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-75 flex flex-col items-center justify-center gap-2",
                                            activeSound === sound.id
                                                ? "translate-y-1 shadow-none bg-neonOrange text-black"
                                                : "bg-signalYellow hover:bg-[#ffe033] text-black"
                                        )}
                                    >
                                        {sound.icon}
                                        {sound.label}
                                    </motion.button>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </div>
                <Guestbook />
            </div>
        </section>
    );
};
