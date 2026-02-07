"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline";
    children: React.ReactNode;
}

export const Button = ({
    variant = "primary",
    children,
    className,
    ...props
}: ButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.3; // Magnetic pull factor
        const y = (clientY - (top + height / 2)) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const variants = {
        primary: "bg-cyan text-void shadow-[0_0_15px_rgba(102,252,241,0.5)] hover:shadow-[0_0_25px_rgba(102,252,241,0.8)]",
        secondary: "bg-teal text-void hover:bg-opacity-80",
        outline: "border border-cyan text-cyan hover:bg-cyan/10",
    };

    return (
        <motion.button
            ref={ref}
            className={cn(
                "relative px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-colors duration-300",
                variants[variant],
                className
            )}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            {variant === "primary" && (
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] hover:animate-shimmer" />
            )}
        </motion.button>
    );
};
