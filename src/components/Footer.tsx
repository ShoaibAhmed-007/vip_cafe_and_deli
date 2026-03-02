import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="bg-dark-800 border-t border-white/5 pt-14 pb-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-3xl font-heading font-bold text-gradient">VIP</span>
                            <span className="text-sm font-accent text-white/70">Deli & Tacos</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Sacramento&apos;s favorite spot for premium sandwiches by day and authentic street
                            tacos by night. Come for the food, stay for the vibes.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-lg font-heading font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-white/50 text-sm hover:text-neon-orange transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-heading font-bold text-white mb-4">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2 text-white/50 text-sm">
                                <MapPin size={16} className="mt-0.5 shrink-0 text-neon-orange" />
                                <span>1328 Del Paso Blvd, Sacramento, CA 95815</span>
                            </div>
                            <a
                                href="tel:+19168795059"
                                className="flex items-center gap-2 text-white/50 text-sm hover:text-neon-orange transition-colors"
                            >
                                <Phone size={16} className="shrink-0 text-neon-orange" />
                                (916) 879-5059
                            </a>
                            <a
                                href="mailto:Vipdeliandtacos25@gmail.com"
                                className="flex items-center gap-2 text-white/50 text-sm hover:text-neon-orange transition-colors"
                            >
                                <Mail size={16} className="shrink-0 text-neon-orange" />
                                Vipdeliandtacos25@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-6 text-center">
                    <p className="text-white/30 text-sm">
                        © {new Date().getFullYear()} VIP Deli & Tacos. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
