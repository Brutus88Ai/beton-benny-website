import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    isDark?: boolean;
}

const Screw = ({ className }: { className: string }) => (
    <div
        className={cn(
            "absolute w-2 h-2 rounded-full bg-gray-400 border border-black flex items-center justify-center",
            className
        )}
    >
        <div className="w-1.5 h-0.5 bg-black rotate-45"></div>
    </div>
);

export const Card = ({ children, className, isDark = false }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                "p-6 border-2 border-black relative backdrop-blur-md shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]",
                isDark
                    ? "bg-black/40 text-white border-neonOrange"
                    : "bg-white/80 text-black",
                className
            )}
        >
            <Screw className="top-2 left-2" />
            <Screw className="top-2 right-2" />
            <Screw className="bottom-2 left-2" />
            <Screw className="bottom-2 right-2" />
            {children}
        </motion.div>
    );
};
