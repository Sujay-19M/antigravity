"use client";

import { RoomCard } from "@/components/ui/RoomCard";

const rooms = [
    {
        name: "Deluxe Sea View",
        price: "3,500",
        description: "Wake up to the sound of waves. Our Deluxe rooms offer panoramic views of the Bay of Bengal, coupled with modern amenities.",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800", // Generic hotel room
    },
    {
        name: "Premium Garden Cottage",
        price: "4,200",
        description: "Experience privacy and luxury in our standalone cottages, surrounded by lush tropical gardens just steps from the beach.",
        image: "https://images.unsplash.com/photo-1590490360182-f33db079502d?auto=format&fit=crop&q=80&w=800", // Generic cottage
    },
    {
        name: "Family Suite",
        price: "6,500",
        description: "Spacious accommodation for the whole family. Two interconnecting rooms with a private balcony and dining area.",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800", // Generic suite
    },
];

export const RoomShowcase = () => {
    return (
        <section id="rooms" className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate mb-4">Your Private Sanctuary</h2>
                    <p className="text-slate/70 max-w-2xl mx-auto">
                        Choose from our curated selection of rooms, each designed to provide the ultimate coastal retreat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room, idx) => (
                        <RoomCard key={idx} {...room} />
                    ))}
                </div>
            </div>
        </section>
    );
};
