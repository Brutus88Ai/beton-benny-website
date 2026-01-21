"use client";

import React from "react";
import { Ticket, Construction } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { useAppContext } from "../providers/AppContext";
import { cn } from "@/lib/utils";

const TOUR_DATES = [
    {
        id: 1,
        date: "12.04.",
        city: "Oberhausen",
        location: "Turbinenhalle",
        status: "available",
    },
    {
        id: 2,
        date: "01.05.",
        city: "Mallorca",
        location: "Bierkönig",
        status: "soldout",
    },
    {
        id: 3,
        date: "15.05.",
        city: "Castrop-Rauxel",
        location: "Zeltfest",
        status: "latenight",
    },
];

export const TourDates = () => {
    const { isNightShift, showToast } = useAppContext();

    return (
        <section
            id="termine"
            className={cn(
                "py-20 px-4 border-y-8 border-black bg-concrete-pattern",
                isNightShift ? "bg-gray-800" : "bg-gray-200"
            )}
        >
            <div className="container mx-auto max-w-4xl">
                <SectionTitle isDark={isNightShift}>Der Schichtplan</SectionTitle>
                <div className="flex flex-col gap-4">
                    {TOUR_DATES.map((gig) => (
                        <div
                            key={gig.id}
                            className="group relative flex flex-col md:flex-row items-center justify-between p-6 border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                            <div className="bg-black text-signalYellow font-stencil text-xl px-4 py-2 transform -rotate-2 group-hover:rotate-0 transition-transform">
                                {gig.date}
                            </div>
                            <div className="text-center md:text-left my-4 md:my-0 flex-1 md:pl-8">
                                <h3 className="font-bold text-2xl uppercase">{gig.city}</h3>
                                <p className="text-gray-600 font-medium flex items-center justify-center md:justify-start gap-2">
                                    <Construction size={16} /> {gig.location}
                                </p>
                            </div>
                            <div className="w-full md:w-auto">
                                {gig.status === "soldout" ? (
                                    <div className="w-full bg-red-600 text-white font-bold py-3 px-6 text-center uppercase border-2 border-red-800 opacity-80 cursor-not-allowed">
                                        Baustopp (Voll)
                                    </div>
                                ) : (
                                    <Button
                                        onClick={() => showToast("Ticket in den Warenkorb gelegt!")}
                                        variant={gig.status === "latenight" ? "secondary" : "primary"}
                                        className="w-full text-sm"
                                    >
                                        <Ticket size={18} />{" "}
                                        {gig.status === "latenight"
                                            ? "Nachtschicht"
                                            : "Ticket Ziehen"}
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
