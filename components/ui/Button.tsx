import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", children, ...props }, ref) => {
        const baseStyle =
            "font-bold text-lg px-8 py-4 uppercase tracking-wider transform transition-all duration-100 active:scale-95 border-2 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-sans";

        const variants = {
            primary:
                "bg-neonOrange text-black hover:bg-[#ff7a45] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-black",
            danger:
                "bg-[#C41E3A] text-white hover:bg-[#d62545] rounded-full shadow-[0px_8px_0px_0px_#8a1529] border-none active:translate-y-2 active:shadow-none",
            secondary:
                "bg-signalYellow text-black hover:bg-[#ffe033] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-black",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyle, variants[variant], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
