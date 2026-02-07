"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
    roomName?: string;
    className?: string;
    variant?: "primary" | "minimal";
}

export const WhatsAppButton = ({ roomName, className, variant = "primary" }: WhatsAppButtonProps) => {
    const phoneNumber = "918346967247";
    const defaultMessage = "Hi! I saw your website and I'm interested in booking a stay.";
    const roomMessage = `Hi! I saw your website and I'm interested in the ${roomName}. I would like to claim the 10% instant discount. Is it available for [Date]?`;

    const message = roomName ? roomMessage : defaultMessage;
    const deepLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    if (variant === "minimal") {
        return (
            <a
                href={deepLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("flex items-center gap-2 text-whatsapp font-bold hover:underline", className)}
            >
                <MessageCircle className="w-5 h-5" />
                Chat to Book
            </a>
        );
    }

    return (
        <motion.a
            href={deepLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-whatsapp text-white font-bold rounded-full shadow-lg overflow-hidden group",
                className
            )}
        >
            <MessageCircle className="w-6 h-6 fill-current" />
            <div className="flex flex-col items-start leading-none">
                <span className="text-sm opacity-90">Chat to Book</span>
                <span className="text-xs font-normal text-white/90 animate-pulse-slow">Get 10% Instant Off</span>
            </div>

            {/* Sparkle/Flash Effect */}
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-shimmer" />
        </motion.a>
    );
};
