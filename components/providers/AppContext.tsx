import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "firebase/auth";
import { auth } from "@/lib/firebase";

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

    const showToast = (msg: string) => {
        setToastMsg(msg);
        setTimeout(() => setToastMsg(null), 3000);
    };

    const toggleNightShift = () => setIsNightShift((prev) => !prev);

    // Safe Auth Listener - only if Firebase is available
    useEffect(() => {
        if (!auth) {
            console.warn("⚠️ Firebase Auth not available - running in demo mode");
            return;
        }

        const { onAuthStateChanged } = require("firebase/auth");
        const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
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
