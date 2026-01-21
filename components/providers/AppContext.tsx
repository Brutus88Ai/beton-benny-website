import React, { createContext, useContext, useState, useEffect } from "react";
import { User, onAuthStateChanged, getAuth } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";

// Mock or Real Init handled in firebase lib (to be created)
// For now, we define the Context types

interface AppContextType {
    user: User | null;
    isNightShift: boolean;
    toggleNightShift: () => void;
    showToast: (msg: string) => void;
    toastMsg: string | null;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useAppContext must be used within AppProvider");
    return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isNightShift, setIsNightShift] = useState(false);
    const [toastMsg, setToastMsg] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Helper for Toasts
    const showToast = (msg: string) => {
        setToastMsg(msg);
        // Timeout handled in Toast component or here? 
        // If in Toast component, better. But state needs reset.
        // We'll let Toast component auto-hide visually, but we reset state after delay to allow re-trigger.
        setTimeout(() => setToastMsg(null), 3000);
    };

    const toggleNightShift = () => setIsNightShift((prev) => !prev);

    // Auth Effect (Basic placeholder until firebase.ts is linked)
    useEffect(() => {
        // We will hook this up properly with lib/firebase.ts later
        // For now, we just manage state
    }, []);

    return (
        <AppContext.Provider
            value={{
                user,
                isNightShift,
                toggleNightShift,
                showToast,
                toastMsg,
                isMenuOpen,
                setIsMenuOpen,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
