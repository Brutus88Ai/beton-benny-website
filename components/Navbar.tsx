import React from "react";
import { HardHat, LogIn, LogOut, Menu, X, Download } from "lucide-react";
import { useAppContext } from "../providers/AppContext";
import { cn } from "@/lib/utils";

interface NavbarProps {
    onOpenLegal: () => void;
}

export const Navbar = ({ onOpenLegal }: NavbarProps) => {
    const {
        isNightShift,
        toggleNightShift,
        user,
        isMenuOpen,
        setIsMenuOpen,
    } = useAppContext();

    const handleScroll = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { id: "musik", label: "Musik" },
        { id: "termine", label: "Schichtplan" },
        { id: "shop", label: "Material" },
        { id: "kontakt", label: "Bauantrag" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b-4 border-signalYellow",
                isNightShift ? "bg-black/90" : "bg-white/95"
            )}
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* LOGO */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <div className="relative">
                        <HardHat
                            className="text-neonOrange absolute -top-3 -left-2 transform -rotate-12 drop-shadow-sm"
                            size={24}
                        />
                        <span
                            className={cn(
                                "font-stencil text-2xl tracking-widest",
                                isNightShift ? "text-white" : "text-concreteDark"
                            )}
                        >
                            BETON<span className="text-neonOrange">BENNY</span>
                        </span>
                    </div>
                </div>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-6 font-bold uppercase text-sm tracking-wider">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={cn(
                                "hover:text-neonOrange transition-colors",
                                isNightShift ? "text-gray-300" : "text-gray-800"
                            )}
                        >
                            {item.label}
                        </button>
                    ))}

                    {/* NIGHT SHIFT TOGGLE */}
                    <button
                        onClick={toggleNightShift}
                        className={cn(
                            "flex items-center gap-2 px-3 py-1 rounded-full border-2 font-bold text-xs",
                            isNightShift
                                ? "border-neonOrange text-neonOrange bg-black"
                                : "border-black bg-black text-white"
                        )}
                    >
                        {isNightShift ? "NACHT" : "TAG"}
                        <div
                            className={cn(
                                "w-3 h-3 rounded-full",
                                isNightShift ? "bg-neonOrange animate-pulse" : "bg-gray-500"
                            )}
                        ></div>
                    </button>

                    {/* AUTH */}
                    {user && !user.isAnonymous ? (
                        <div className="flex items-center gap-3 pl-3 border-l-2 border-gray-300">
                            <div className="text-right leading-none">
                                <div className="text-[9px] text-gray-500">ANGEMELDET</div>
                                <div
                                    className={cn(
                                        "font-bold text-xs truncate max-w-[100px]",
                                        isNightShift ? "text-white" : "text-black"
                                    )}
                                >
                                    {user.displayName?.split(" ")[0] || "Polier"}
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    /* Logout Logic handled in AppContext or here via Context fn */
                                }}
                                className="bg-black text-white p-2 rounded hover:bg-[#C41E3A] transition-colors"
                            >
                                <LogOut size={14} />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                /* Login Logic */
                            }}
                            className="flex items-center gap-2 bg-neonOrange text-black px-3 py-2 font-bold border-2 border-black hover:bg-white hover:text-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none text-xs"
                        >
                            <LogIn size={14} /> LOGIN
                        </button>
                    )}
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X size={32} color={isNightShift ? "#FFF" : "#000"} />
                    ) : (
                        <Menu size={32} color={isNightShift ? "#FFF" : "#000"} />
                    )}
                </button>
            </div>

            {/* MOBILE MENU */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-concreteDark text-white p-6 flex flex-col gap-6 text-center font-stencil text-xl border-b-4 border-neonOrange">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className="py-2 border-b border-gray-700 hover:text-neonOrange"
                        >
                            {item.label}
                        </button>
                    ))}
                    <div className="py-4 border-t border-gray-600 w-full">
                        {user && !user.isAnonymous ? (
                            <button className="bg-[#C41E3A] text-white py-2 font-sans font-bold uppercase w-full">
                                Logout
                            </button>
                        ) : (
                            <button className="bg-signalYellow text-black py-3 font-sans font-bold uppercase w-full flex justify-center items-center gap-2">
                                <LogIn size={20} /> Einstempeln
                            </button>
                        )}
                    </div>
                    <button className="bg-white/10 text-white py-2 font-sans text-sm font-bold uppercase w-full flex justify-center items-center gap-2">
                        <Download size={16} /> App Installieren
                    </button>
                    <button
                        onClick={() => {
                            toggleNightShift();
                            setIsMenuOpen(false);
                        }}
                        className="mt-4 bg-neonOrange text-black py-3 font-sans font-bold uppercase"
                    >
                        Lichtschalter ({isNightShift ? "An" : "Aus"})
                    </button>
                </div>
            )}
        </nav>
    );
};
