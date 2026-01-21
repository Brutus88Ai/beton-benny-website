"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/components/providers/AppContext";

export const Countdown = () => {
    const { isNightShift } = useAppContext();
    const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const calculateTime = () => {
            const now = new Date();
            const target = new Date();
            // Calculate next Friday 16:00
            target.setDate(now.getDate() + ((5 + 7 - now.getDay()) % 7));
            target.setHours(16, 0, 0, 0);

            // If it's Friday and past 16:00, target next week
            if (now.getDay() === 5 && now.getHours() >= 16) {
                target.setDate(target.getDate() + 7);
            }

            // If today is Friday before 16:00, it's today. 
            // The formula above: (5 + 7 - 5)%7 = 0. So target is today. Correct.

            const diff = target.getTime() - now.getTime();
            return {
                d: Math.floor(diff / (1000 * 60 * 60 * 24)),
                h: Math.floor((diff / (1000 * 60 * 60)) % 24),
                m: Math.floor((diff / 1000 / 60) % 60),
                s: Math.floor((diff / 1000) % 60),
            };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTime());
        }, 1000);

        setTimeLeft(calculateTime()); // Initial call

        return () => clearInterval(timer);
    }, []);

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <div
            className={cn(
                "mt-8 mb-12 p-4 border-4 border-black inline-block transform rotate-1",
                isNightShift ? "bg-zinc-900" : "bg-concreteDark"
            )}
        >
            <div className="text-neonOrange font-stencil text-center uppercase text-sm mb-2 tracking-widest flex items-center justify-center gap-2">
                <Clock size={16} /> Countdown bis Feierabend
            </div>
            <div className="flex gap-2 md:gap-4 font-mono text-3xl md:text-5xl font-bold text-signalYellow">
                {[
                    { l: "Tage", v: timeLeft.d },
                    { l: "Std", v: timeLeft.h },
                    { l: "Min", v: timeLeft.m },
                    { l: "Sek", v: timeLeft.s },
                ].map((item, i) => (
                    <React.Fragment key={item.l}>
                        <div className="flex flex-col items-center">
                            <span className="bg-black px-2 rounded font-digit">
                                {String(item.v).padStart(2, "0")}
                            </span>
                            <span className="text-[10px] text-gray-400 uppercase mt-1">
                                {item.l}
                            </span>
                        </div>
                        {i < 3 && <span className="text-gray-500 animate-pulse">:</span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
