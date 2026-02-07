"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
            scrolled ? "bg-slate-900/90 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-display font-bold text-white tracking-tight hover:text-emerald-400 transition-colors z-50 shadow-black/20 drop-shadow-sm">
                    Mandarmani Haven
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center font-sans text-sm font-medium tracking-wide text-white/90">
                    {[
                        { name: "Our Rooms", href: "/#rooms" },
                        { name: "Amenities", href: "/#amenities" },
                        { name: "About", href: "/about" },
                        { name: "Contact", href: "/contact" },
                    ].map((link) => (
                        <Link key={link.name} href={link.href} className="relative group px-1 py-2 transition-colors hover:text-emerald-400">
                            {link.name}
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}
                    <a href="tel:+918346967247" className="flex items-center gap-2 hover:text-emerald-400 transition-colors px-3 py-2 border border-white/20 rounded-full hover:bg-white/10">
                        <Phone className="w-4 h-4" />
                        <span>+91 83469 67247</span>
                    </a>
                </div>

                <div className="hidden md:block">
                    {/* Explicit Green Variant request */}
                    <WhatsAppButton variant="primary" className="text-sm px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white border-none" />
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute inset-0 top-0 h-screen bg-slate-900 flex flex-col items-center justify-center gap-8 md:hidden text-center p-6"
                        >
                            {[
                                { name: "Our Rooms", href: "/#rooms" },
                                { name: "Amenities", href: "/#amenities" },
                                { name: "About", href: "/about" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-display text-white hover:text-emerald-400"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
                                <WhatsAppButton className="w-full justify-center bg-emerald-500" />
                                <a href="tel:+918346967247" className="w-full py-4 text-white font-bold border border-white/20 rounded-full hover:bg-white/10 transition-colors flex justify-center items-center gap-2">
                                    <Phone className="w-4 h-4" /> Call Reception
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};
