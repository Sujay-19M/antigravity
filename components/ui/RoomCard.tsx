"use client";

import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Wifi, Wind } from "lucide-react";
import { motion } from "framer-motion";

interface RoomCardProps {
    name: string;
    price: string;
    description: string;
    image: string; // URL for placeholder or actual image
    amenities?: string[];
}

export const RoomCard = ({ name, price, description, image, amenities = ["Sea View", "Free WiFi", "AC"] }: RoomCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300"
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate uppercase tracking-wider">
                    Best Seller
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold text-slate mb-2">{name}</h3>
                <p className="text-slate/70 text-sm mb-4 line-clamp-2">{description}</p>

                <div className="flex gap-4 mb-6">
                    {amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-1 text-xs text-slate/60 bg-slate-50 px-2 py-1 rounded-md">
                            {amenity === "AC" && <Wind className="w-3 h-3" />}
                            {amenity === "Sea View" && <Wind className="w-3 h-3" />} {/* Placeholder icon */}
                            {amenity === "Free WiFi" && <Wifi className="w-3 h-3" />}
                            <span>{amenity}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="text-xs text-slate/50 line-through">₹{parseInt(price.replace(',', '')) * 1.2}</span>
                            <div className="text-xl font-bold text-ocean">₹{price}<span className="text-xs font-normal text-slate/60">/night</span></div>
                        </div>
                        <div className="text-xs text-amber font-bold bg-amber/10 px-2 py-1 rounded">
                            Save 10% on WhatsApp
                        </div>
                    </div>

                    <WhatsAppButton roomName={name} className="w-full" />
                </div>
            </div>
        </motion.div>
    );
};
