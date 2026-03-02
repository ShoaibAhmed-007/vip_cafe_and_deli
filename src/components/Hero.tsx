"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-banner.png"
                    alt="VIP Deli & Tacos restaurant exterior at night"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 via-transparent to-dark-900/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <div className="animate-fade-in-up">
                    <p className="font-accent text-neon-orange text-lg sm:text-xl mb-4 tracking-wide">
                        Sacramento&apos;s Favorite Spot
                    </p>
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
                        <span className="text-gradient">VIP</span>{" "}
                        <span className="text-white">Deli</span>
                        <br />
                        <span className="text-white">&</span>{" "}
                        <span className="text-gradient">Tacos</span>
                    </h1>
                    <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-body leading-relaxed">
                        Premium sandwiches by day. Authentic street tacos by night.
                        Experience the vibes at Del Paso Blvd.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+19168795059"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-neon-orange to-neon-red text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl hover:shadow-neon-orange/30 transition-all duration-300 hover:scale-105 animate-glow-pulse"
                        >
                            🌮 Order Now
                        </a>
                        <a
                            href="#menu"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg hover:border-neon-orange/50 hover:text-neon-orange transition-all duration-300"
                        >
                            View Menu
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
                <ChevronDown size={32} />
            </div>

            {/* Decorative neon glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-neon-orange/10 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
