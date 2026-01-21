import React from "react";
import { Instagram, Youtube, Video, FileText, AlertTriangle } from "lucide-react";
import { Button } from "./ui/Button";

// TikTok icon component (not in lucide-react)
const TikTokIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
);

const SOCIAL_LINKS = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@beton_benny", label: "TikTok" },
];

interface FooterProps {
    onOpenLegal: () => void;
}

export const Footer = ({ onOpenLegal }: FooterProps) => {
    return (
        <footer className="bg-concreteDark text-white py-12 border-t-8 border-neonOrange">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    {SOCIAL_LINKS.map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.label}
                            className="p-3 bg-white/10 rounded-full hover:bg-neonOrange hover:text-black transition-colors"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>
                <p className="font-stencil text-2xl tracking-widest mb-4">
                    BETON BENNY
                </p>
                <div className="flex justify-center flex-wrap gap-4 md:gap-6 text-xs font-bold uppercase text-gray-500">
                    <button
                        onClick={onOpenLegal}
                        className="hover:text-white flex items-center gap-1"
                    >
                        <FileText size={14} /> Kleingedrucktes
                    </button>
                    <span className="hidden md:inline">|</span>
                    <button
                        onClick={onOpenLegal}
                        className="hover:text-white flex items-center gap-1"
                    >
                        <AlertTriangle size={14} /> Bauvorschriften
                    </button>
                </div>
            </div>
        </footer>
    );
};
