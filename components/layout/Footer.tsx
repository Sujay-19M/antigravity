import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Column */}
                <div className="space-y-6">
                    <Link href="/" className="text-2xl font-display font-bold text-slate tracking-tight hover:text-ocean transition-colors">
                        Mandarmani Haven
                    </Link>
                    <p className="text-slate/60 text-sm leading-relaxed max-w-xs">
                        Where luxury meets the rhythmic soul of the sea. Experience the pristine coastline of West Bengal in unmatched comfort.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate/70 hover:bg-ocean hover:text-white transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate/70 hover:bg-ocean hover:text-white transition-all duration-300">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate/70 hover:bg-ocean hover:text-white transition-all duration-300">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-slate mb-6">Explore</h3>
                    <ul className="space-y-4 text-sm text-slate/70">
                        <li><Link href="/" className="hover:text-ocean transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-ocean transition-colors">Our Story</Link></li>
                        <li><Link href="/#rooms" className="hover:text-ocean transition-colors">Rooms & Suites</Link></li>
                        <li><Link href="/#amenities" className="hover:text-ocean transition-colors">Amenities</Link></li>
                        <li><Link href="/contact" className="hover:text-ocean transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold text-slate mb-6">Visit Us</h3>
                    <ul className="space-y-4 text-sm text-slate/70">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-ocean shrink-0" />
                            <span>Mandarmani Beach Road,<br />West Bengal, India</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-ocean shrink-0" />
                            <a href="tel:+918346967247" className="hover:text-ocean transition-colors">+91 83469 67247</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-ocean shrink-0" />
                            <a href="mailto:bookings@mandarmanihaven.com" className="hover:text-ocean transition-colors">bookings@mandarmanihaven.com</a>
                        </li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div>
                    <h3 className="font-bold text-slate mb-6">Legal</h3>
                    <ul className="space-y-4 text-sm text-slate/70">
                        <li><Link href="/legal/terms" className="hover:text-ocean transition-colors">Terms of Service</Link></li>
                        <li><Link href="/legal/privacy" className="hover:text-ocean transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/legal/disclaimer" className="hover:text-ocean transition-colors">Disclaimer</Link></li>
                        <li><Link href="/legal/cancellation" className="hover:text-ocean transition-colors">Cancellation Policy</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-100 pt-8 text-center text-sm text-slate/50">
                <p>© {new Date().getFullYear()} Mandarmani Haven. All rights reserved.</p>
            </div>
        </footer>
    );
};
