"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-dark-900/95 backdrop-blur-md shadow-lg shadow-neon-orange/5"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-2 group">
                        <span className="text-2xl sm:text-3xl font-heading font-bold text-gradient">
                            VIP
                        </span>
                        <span className="text-sm sm:text-base font-accent text-white/70 group-hover:text-white transition-colors">
                            Deli & Tacos
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-neon-orange transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-neon-orange after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="tel:+19168795059"
                            className="flex items-center gap-2 bg-gradient-to-r from-neon-orange to-neon-red text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:shadow-lg hover:shadow-neon-orange/30 transition-all duration-300 hover:scale-105"
                        >
                            <Phone size={16} />
                            Call to Order
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-white/80 hover:text-neon-orange transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    } bg-dark-900/98 backdrop-blur-lg`}
            >
                <div className="px-4 pb-6 pt-2 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-base font-medium text-white/70 hover:text-neon-orange transition-colors py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="tel:+19168795059"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-neon-orange to-neon-red text-white font-semibold px-5 py-3 rounded-full text-sm mt-2"
                    >
                        <Phone size={16} />
                        Call to Order
                    </a>
                </div>
            </div>
        </nav>
    );
}
