"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        quote:
            "A hidden gem in Sacramento... I love the atmosphere and homey vibe here. Expect to spend 20$ - 30$ per person. The vibe here at night is definitely the best!",
        author: "Will916eats",
        stars: 5,
    },
    {
        quote:
            "Each sandwich is made fresh to order with premium meats... VIP Cafe & Deli is my new jam!",
        author: "Melody S.",
        stars: 5,
    },
    {
        quote:
            "The Best Sandwich Ever! I had a pastrami and hot link on Dutch crunch bread... The paintings and murals created a chill, vacation-like atmosphere.",
        author: "Claudia C.",
        stars: 5,
    },
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("visible");
                });
            },
            { threshold: 0.1 }
        );

        const items = sectionRef.current?.querySelectorAll(".animate-on-scroll");
        items?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="reviews"
            className="py-20 sm:py-28 px-4 relative bg-dark-800/50"
            ref={sectionRef}
        >
            <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-neon-red/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <p className="font-accent text-neon-orange text-sm tracking-widest uppercase mb-3">
                        Testimonials
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                        What <span className="text-gradient">Locals</span> Say
                    </h2>
                    <p className="text-white/50 max-w-lg mx-auto">
                        Don&apos;t just take our word for it — hear from the Sacramento community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.author}
                            className="animate-on-scroll glass-card rounded-2xl p-6 relative group hover:neon-border transition-all duration-300"
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            <Quote
                                size={32}
                                className="text-neon-orange/20 absolute top-4 right-4"
                            />
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.stars }).map((_, j) => (
                                    <Star
                                        key={j}
                                        size={16}
                                        className="text-neon-yellow fill-neon-yellow"
                                    />
                                ))}
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-orange to-neon-red flex items-center justify-center text-white font-bold text-sm">
                                    {t.author[0]}
                                </div>
                                <span className="text-white font-semibold text-sm">{t.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
