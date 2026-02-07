import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mandarmani Havens | Coastal Luxury Resort",
  description: "Experience the rhythmic soul of the sea at Mandarmani Havens. Book direct via WhatsApp for the best rates and instant confirmation. Your perfect coastal escape awaits.",
  keywords: ["Mandarmani Hotel", "Sea View Resort", "Weekend Getaway Kolkata", "Beach Resort West Bengal", "Luxury Stay Mandarmani"],
  openGraph: {
    title: "Mandarmani Havens | Coastal Luxury Resort",
    description: "Book direct via WhatsApp for exclusive deals. Experience the pristine coastline in luxury.",
    url: "https://mandarmanihavens.com",
    siteName: "Mandarmani Havens",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandarmani Havens | Coastal Luxury Resort",
    description: "Book direct via WhatsApp for exclusive deals. Experience the pristine coastline in luxury.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-sand text-slate`}
      >
        {children}
      </body>
    </html>
  );
}
