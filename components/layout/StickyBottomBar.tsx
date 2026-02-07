"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const StickyBottomBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 100px
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const phoneNumber = "918346967247";
    const message = "Hi! I want to claim the 10% discount on my booking.";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex bg-white border-t border-slate-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-safe"
                >
                    {/* Call Button (30%) */}
                    <a
                        href={`tel:+${phoneNumber}`}
                        className="flex-3 flex flex-col items-center justify-center p-3 text-slate hover:bg-slate-50 border-r border-slate-100 w-[30%]"
                    >
                        <Phone className="w-5 h-5 mb-1" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
                    </a>

                    {/* WhatsApp Button (70%) */}
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-7 flex items-center justify-center gap-2 p-3 bg-whatsapp text-white w-[70%]"
                    >
                        <MessageCircle className="w-5 h-5 fill-current" />
                        <div className="flex flex-col leading-none">
                            <span className="text-sm font-bold">WhatsApp & Save 10%</span>
                            <span className="text-[10px] opacity-90">Instant Reply</span>
                        </div>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
