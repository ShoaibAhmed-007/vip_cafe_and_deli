"use client";

import { Phone } from "lucide-react";

export default function MobileCallButton() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
            <a
                href="tel:+19168795059"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-neon-orange to-neon-red text-white font-bold py-4 text-base w-full shadow-2xl shadow-neon-orange/30"
            >
                <Phone size={20} />
                Call Now – (916) 879-5059
            </a>
        </div>
    );
}
