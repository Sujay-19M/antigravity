"use client";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background (Video Placeholder or Image) */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90"
                    poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1920"
                >
                    {/* Placeholder video - in prod use actual asset */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 px-6 max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 md:p-12 rounded-3xl text-center backdrop-blur-md bg-white/20 border-white/30 shadow-2xl"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-md leading-tight">
                        Your Sea-View <br /> Escape Starts Here.
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 mb-8 font-medium drop-shadow leading-relaxed max-w-xl mx-auto">
                        Experience the breezy charm of Mandarmani. Book direct via WhatsApp for the best rates and instant confirmation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <WhatsAppButton className="text-lg px-10 py-4 shadow-xl" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white/80 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
