"use client";

import { useEffect, useRef } from "react";
import { Car, Moon, Baby, Leaf, Beef } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: Car,
        title: "Free Parking",
        desc: "Spacious parking lot right at our door. No meters, no stress.",
        color: "text-neon-blue",
    },
    {
        icon: Moon,
        title: "Late Night Vibes",
        desc: "Open late for tacos, hangouts, and good times. Best vibes in Sacramento.",
        color: "text-neon-orange",
    },
    {
        icon: Baby,
        title: "Kid-Friendly",
        desc: "Kids love our Mac & Cheese! Family-friendly atmosphere all day.",
        color: "text-neon-yellow",
    },
    {
        icon: Leaf,
        title: "Vegetarian Options",
        desc: "Plenty of veggie choices including the Veggie Avocado.",
        color: "text-green-400",
    },
    {
        icon: Beef,
        title: "Premium Meats",
        desc: "Only the finest cuts. Generous portions, made fresh to order.",
        color: "text-neon-red",
    },
];

export default function WhyChooseUs() {
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
        <section className="py-20 sm:py-28 px-4 relative overflow-hidden" ref={sectionRef}>
            {/* Background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <p className="font-accent text-neon-orange text-sm tracking-widest uppercase mb-3">
                        Why VIP?
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                        More Than Just <span className="text-gradient">Food</span>
                    </h2>
                    <p className="text-white/50 max-w-lg mx-auto">
                        We&apos;re building a community. A vibe. A place you actually want to be.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {features.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <div
                                key={f.title}
                                className="animate-on-scroll glass-card rounded-2xl p-6 text-center hover:scale-[1.03] transition-all duration-300 group"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div
                                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-dark-700 ${f.color} mb-4 group-hover:scale-110 transition-transform`}
                                >
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-lg font-heading font-bold text-white mb-2">{f.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Image gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        { src: "/images/food-closeup.png", alt: "Fresh sandwiches and tacos at VIP Deli" },
                        { src: "/images/indoor-mural.png", alt: "Colorful murals inside VIP Deli" },
                        { src: "/images/outdoor-patio.png", alt: "Outdoor patio seating at VIP Deli" },
                    ].map((img, i) => (
                        <div
                            key={img.src}
                            className="animate-on-scroll relative h-64 sm:h-80 rounded-2xl overflow-hidden group"
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
