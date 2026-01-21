import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
    children: React.ReactNode;
    isDark?: boolean;
    className?: string;
}

export const SectionTitle = ({
    children,
    isDark = false,
    className,
}: SectionTitleProps) => {
    return (
        <h2
            className={cn(
                "text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter transform -rotate-1 text-center font-stencil drop-shadow-md",
                isDark ? "text-neonOrange" : "text-concreteDark",
                className
            )}
        >
            {children}
        </h2>
    );
};
