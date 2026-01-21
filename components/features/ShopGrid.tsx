"use client";

import React from "react";
import { ShoppingBag, HardHat, Construction, Beer } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { useAppContext } from "../providers/AppContext";
import { cn } from "@/lib/utils";

const PRODUCTS = [
    {
        id: 1,
        name: "Sauf-Bauleitung",
        price: "24,99 €",
        type: "T-Shirt",
        icon: <HardHat />,
    },
    {
        id: 2,
        name: 'Zollstock "Prost"',
        price: "9,99 €",
        type: "Werkzeug",
        icon: <Construction />,
    },
    {
        id: 3,
        name: "Trink-Helm V2",
        price: "19,99 €",
        type: "Accessoire",
        icon: <Beer />,
    },
];

export const ShopGrid = () => {
    const { isNightShift, showToast } = useAppContext();

    return (
        <section
            id="shop"
            className={cn(
                "py-20 px-4",
                isNightShift ? "bg-zinc-900" : "bg-gray-100"
            )}
        >
            <div className="container mx-auto max-w-6xl">
                <SectionTitle isDark={isNightShift}>Der Materialwagen</SectionTitle>
                <div className="grid md:grid-cols-3 gap-8">
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-[#D7C49E] p-4 pt-12 shadow-xl border-b-8 border-r-8 border-[#8B4513]"
                        >
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_20px)] pointer-events-none"></div>
                            <div className="bg-white p-6 border-2 border-black relative z-10 h-full flex flex-col items-center text-center transition-transform group-hover:-translate-y-2">
                                <div className="bg-gray-100 rounded-full p-6 mb-4 border-2 border-dashed border-gray-300">
                                    {React.cloneElement(product.icon as React.ReactElement, {
                                        size: 48,
                                        className: "text-concreteDark",
                                    })}
                                </div>
                                <h4 className="font-stencil text-xl mb-2">{product.name}</h4>
                                <span className="inline-block bg-signalYellow px-2 py-1 text-xs font-bold border border-black transform -rotate-2 mb-4 text-black">
                                    {product.type}
                                </span>
                                <div className="mt-auto w-full">
                                    <div className="text-3xl font-black text-[#C41E3A] mb-3 font-marker">
                                        {product.price}
                                    </div>
                                    <Button
                                        onClick={() => showToast("Artikel in die Schubkarre gelegt")}
                                        variant="primary"
                                        className="w-full text-sm py-3"
                                    >
                                        <ShoppingBag size={16} /> In die Schubkarre
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
