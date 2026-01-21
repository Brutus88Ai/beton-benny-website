"use client";

import React, { useEffect, useState } from "react";
import { AppProvider, useAppContext } from "../providers/AppContext";
import { Toast } from "../ui/Toast";
import { Footer } from "../Footer";
import { LegalModal } from "../features/LegalModal";
import { Navbar } from "../Navbar"; // We'll create this next
import { cn } from "@/lib/utils";

// Initialize Firebase (we need to create this lib file first, but we can import it)
// import "@/lib/firebase"; 

// Inner component to consume context
const LayoutContent = ({ children }: { children: React.ReactNode }) => {
    const { isNightShift, toastMsg, showToast } = useAppContext();
    const [showLegal, setShowLegal] = useState(false);

    return (
        <div
            className={cn(
                "min-h-screen font-sans transition-colors duration-500 overflow-x-hidden flex flex-col cursor-crosshair",
                isNightShift ? "bg-[#1a1a1a] text-white" : "bg-[#f4f4f5] text-black"
            )}
        >
            <Toast message={toastMsg} onClose={() => showToast("")} />
            <LegalModal isOpen={showLegal} onClose={() => setShowLegal(false)} />

            <Navbar onOpenLegal={() => setShowLegal(true)} />

            <main className="flex-1 pt-20">
                {children}
            </main>

            <Footer onOpenLegal={() => setShowLegal(true)} />
        </div>
    );
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppProvider>
            <LayoutContent>{children}</LayoutContent>
        </AppProvider>
    );
}
