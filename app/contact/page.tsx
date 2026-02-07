"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyBottomBar } from "@/components/layout/StickyBottomBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="min-h-screen relative font-sans selection:bg-ocean/20 pb-20 md:pb-0">
            <Navbar />

            {/* Background Image */}
            <div className="fixed inset-0 z-[-1]">
                <Image
                    src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2070&auto=format&fit=crop"
                    alt="Mandarmani Beach Sunset"
                    fill
                    className="object-cover blur-[8px] brightness-[0.85]"
                    priority
                />
            </div>

            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 drop-shadow-lg">Get in Touch</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md">
                        We are here to help you plan your perfect getaway. Reach out to us directly for bookings and inquiries.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info Card */}
                    <div className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50 space-y-10">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate mb-2">Call Us</h3>
                                <p className="text-slate/60 mb-2">Speak directly to our reception desk.</p>
                                <a href="tel:+918346967247" className="text-2xl font-display font-bold text-emerald-600 hover:underline">
                                    +91 83469 67247
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-ocean/10 text-ocean rounded-full flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate mb-2">Email Us</h3>
                                <a href="mailto:bookings@mandarmanihaven.com" className="text-lg text-ocean hover:underline">
                                    bookings@mandarmanihaven.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-slate-100 text-slate rounded-full flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate mb-2">Location</h3>
                                <address className="text-slate/60 not-italic leading-relaxed">
                                    Mandarmani Haven Resilience,<br />
                                    Beach Road, Mandarmani,<br />
                                    West Bengal, India
                                </address>
                            </div>
                        </div>

                        <div className="pt-10 border-t border-slate-100">
                            <p className="text-slate/50 text-sm mb-4 text-center">Instant Response via WhatsApp</p>
                            <WhatsAppButton className="w-full justify-center bg-emerald-500 hover:bg-emerald-600" />
                        </div>
                    </div>

                    {/* Map Integration */}
                    <div className="h-[600px] bg-slate-200 rounded-3xl overflow-hidden shadow-xl relative border-4 border-white/30">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.3523126867!2d87.68367469600883!3d21.66699318182955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0330544c9b1b9d%3A0x6b00662d59648588!2sMandarmani%20Beach!5e0!3m2!1sen!2sin!4v1707321234567!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center text-xs text-slate/70">
                            Interact with the map to find directions
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <StickyBottomBar />
        </main>
    );
}
