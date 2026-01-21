import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";

interface ToastProps {
    message: string | null;
    onClose: () => void;
}

export const Toast = ({ message, onClose }: ToastProps) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    if (!message) return null;

    return (
        <div className="fixed top-20 right-4 z-[100] bg-black text-signalYellow border-2 border-signalYellow p-4 shadow-lg flex items-center gap-3 animate-bounce">
            <CheckCircle size={24} />
            <span className="font-bold uppercase font-stencil tracking-wider">
                {message}
            </span>
        </div>
    );
};
