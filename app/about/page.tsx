"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyBottomBar } from "@/components/layout/StickyBottomBar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen relative font-sans selection:bg-ocean/20 pb-20 md:pb-0">
            <Navbar />

            {/* Fixed Background Image */}
            <div className="fixed inset-0 z-[-1]">
                <Image
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b271?q=80&w=2070&auto=format&fit=crop"
                    alt="Calm Coastal Texture"
                    fill
                    className="object-cover blur-[6px] brightness-[0.4]"
                    priority
                />
            </div>

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2088&auto=format&fit=crop"
                        alt="Mandarmani Coast"
                        fill
                        className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/90 font-medium max-w-2xl mx-auto"
                    >
                        Where luxury meets the rhythmic soul of the sea.
                    </motion.p>
                </div>
            </section>

            {/* Content Section - Transparent Background for Image Visibility */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-display font-bold text-white drop-shadow-md">A Sanctuary by the Sea</h2>
                        <p className="text-lg text-white/90 leading-relaxed font-medium drop-shadow-sm">
                            Mandarmani Haven began with a simple idea: to create a retreat where time slows down. Nestled along the pristine coastline of West Bengal, we offer more than just a stay we offer an experience.
                        </p>
                        <p className="text-lg text-white/90 leading-relaxed font-medium drop-shadow-sm">
                            Away from the city&apos;s chaos, our property is designed to blend seamlessly with the coastal landscape. Every room offers a view of the horizon, ensuring you wake up to the sun kissing the waves.
                        </p>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                        <Image
                            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                            alt="Hotel Interior"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Values */}
                <div className="mt-32 max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
                    {[
                        { title: "Serenity", desc: "A peaceful atmosphere designed for relaxation and rejuvenation." },
                        { title: "Hospitality", desc: "Warm, personalized service that makes you feel at home." },
                        { title: "Nature", desc: "Eco-conscious practices that respect our beautiful coastal environment." }
                    ].map((value, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-black/20 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center shadow-lg hover:bg-black/30 transition-colors"
                        >
                            <h3 className="text-2xl font-display font-bold text-ocean mb-4 drop-shadow-sm">{value.title}</h3>
                            <p className="text-white/80 font-medium">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
            <StickyBottomBar />
        </main>
    );
}
