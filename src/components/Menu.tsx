"use client";

import { useState, useRef, useEffect } from "react";
import { Flame, Snowflake, Salad } from "lucide-react";

const categories = [
    { id: "hot", label: "Hot Sandwiches", icon: Flame },
    { id: "cold", label: "Cold Sandwiches", icon: Snowflake },
    { id: "salads", label: "Salads & Tacos", icon: Salad },
];

const hotSandwiches = [
    { name: "Pastrami", desc: "Hot Pastrami, Swiss Cheese, Chipotle Mayo, Toasted Ciabatta", price: "$12.99" },
    { name: "Chicken Melt", desc: "Chicken, Caramelized Onions, Pepper Jack Cheese, Chipotle Mayo, Choice of Bread", price: "$10.99" },
    { name: "Turkey Melt", desc: "Turkey, Caramelized Onions, Pepper Jack Cheese, Chipotle Mayo, Choice of Bread", price: "$10.99" },
    { name: "Tuna Melt", desc: "Tuna, Cheddar Cheese, Mayo, Choice of Bread", price: "$10.99" },
    { name: "Reuben", desc: "Hot Pastrami, Sauerkraut, Swiss Cheese, Thousand Island, Toasted Rye", price: "$12.99" },
    { name: "Tri Tip", desc: "Tri-Tip, Caramelized Onions, Pepper Jack Cheese, Mayo, Mustard, on Hoagie Roll", price: "$12.99" },
    { name: "Bagel", desc: "Plain Bagel, Cream Cheese", price: "$7.99" },
];

const coldSandwiches = [
    { name: "Club", desc: "Ham, Turkey, Bacon on Triple Decker, Toasted, Sliced Sourdough", price: "$10.99" },
    { name: "BLT", desc: "Bacon, Lettuce, Tomato, on Toasted, Sliced Sourdough", price: "$10.99" },
    { name: "Ham & Cheese", desc: "Ham and Cheese, Lettuce, Tomato, Choice of Bread", price: "$10.99" },
    { name: "Chicken Salad", desc: "Chicken Salad, Lettuce, Mayo, on Sliced Sourdough", price: "$10.99" },
    { name: "Tuna Salad", desc: "Tuna Salad, Lettuce, Mayo, on French Bread", price: "$10.99" },
    { name: "Turkey", desc: "Turkey, Cheddar Cheese, Lettuce, Tomato, Choice of Bread", price: "$10.99" },
];

const saladsTacos = [
    { name: "Chicken Caesar Salad", desc: "Chicken, Romaine Lettuce, Parmesan Cheese, Croutons, Caesar Dressing", price: "$9.99" },
    { name: "BLT Salad", desc: "Bacon, Iceberg Lettuce, Tomato, Cheddar Cheese, Ranch Dressing", price: "$9.99" },
    { name: "Tacos", desc: "Asada (Steak), Alpastor (Pork), Pollo (Chicken)", price: "$2.99" },
];

const menuData: Record<string, typeof hotSandwiches> = {
    hot: hotSandwiches,
    cold: coldSandwiches,
    salads: saladsTacos,
};

const customizations = [
    { label: "Meat", options: "Turkey, Ham, Pastrami, Bacon, Tri Tip" },
    { label: "Cheese", options: "Cheddar, Swiss, Pepper Jack, American" },
    { label: "Bread", options: "Sourdough, Ciabatta, Dutch Crunch, Hoagie Roll, White, Wheat" },
    { label: "Drinks", options: "Canned Soda, Bottled Soda, Bottled Water, Energy Drink, Gatorade" },
];

export default function MenuSection() {
    const [activeTab, setActiveTab] = useState("hot");
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = sectionRef.current?.querySelectorAll(".animate-on-scroll");
        items?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [activeTab]);

    return (
        <section id="menu" className="py-20 sm:py-28 px-4 relative" ref={sectionRef}>
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-12">
                    <p className="font-accent text-neon-orange text-sm tracking-widest uppercase mb-3">
                        Our Menu
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                        What&apos;s <span className="text-gradient">Cookin&apos;</span>
                    </h2>
                    <p className="text-white/50 max-w-lg mx-auto">
                        Fresh ingredients, premium meats, made to order. Every single time.
                    </p>
                </div>

                {/* Category tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === cat.id
                                        ? "bg-gradient-to-r from-neon-orange to-neon-red text-white shadow-lg shadow-neon-orange/20"
                                        : "bg-dark-700 text-white/60 hover:text-white hover:bg-dark-600"
                                    }`}
                            >
                                <Icon size={18} />
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Combo notice */}
                <div className="text-center mb-8">
                    <span className="inline-block bg-neon-yellow/10 border border-neon-yellow/20 text-neon-yellow text-sm font-semibold px-4 py-2 rounded-full">
                        🍟 Make any sandwich a combo for just <strong>$3.99</strong> extra!
                    </span>
                </div>

                {/* Menu items grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {menuData[activeTab]?.map((item, i) => (
                        <div
                            key={item.name}
                            className="animate-on-scroll glass-card rounded-2xl p-5 hover:neon-border transition-all duration-300 group"
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-heading font-bold text-white group-hover:text-neon-orange transition-colors">
                                    {item.name}
                                </h3>
                                <span className="text-neon-orange font-bold text-lg whitespace-nowrap ml-4">
                                    {item.price}
                                </span>
                            </div>
                            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Customization options */}
                <div className="mt-14">
                    <h3 className="text-center text-xl font-heading font-bold text-white/80 mb-6">
                        Customize Your Order
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {customizations.map((c) => (
                            <div key={c.label} className="glass-card rounded-xl p-4 text-center">
                                <p className="text-neon-orange font-bold font-heading text-sm mb-2 uppercase tracking-wider">
                                    {c.label}
                                </p>
                                <p className="text-white/50 text-sm leading-relaxed">{c.options}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
