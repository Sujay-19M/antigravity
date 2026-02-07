"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const legalLinks = [
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/disclaimer", label: "Disclaimer" },
];

export const LegalLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-void pt-24 pb-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Sticky Sidebar */}
                <aside className="md:col-span-1">
                    <div className="sticky top-32 space-y-4">
                        <h3 className="text-xl font-display font-bold text-white mb-6">Legal Docs</h3>
                        <nav className="flex flex-col space-y-2">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm transition-colors duration-200",
                                        pathname === link.href
                                            ? "bg-teal/10 text-teal border border-teal/20"
                                            : "text-silver/60 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="pt-8 border-t border-white/5 mt-8">
                            <Link href="/" className="text-sm text-silver/40 hover:text-cyan transition-colors">
                                ← Return to Home
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Content Area */}
                <main className="md:col-span-3 prose prose-invert prose-lg max-w-none">
                    {children}
                </main>
            </div>
        </div>
    );
};
