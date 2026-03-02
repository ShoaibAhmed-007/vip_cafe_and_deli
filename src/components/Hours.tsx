"use client";

import { useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const hours = [
    { day: "Monday", lunch: "Closed", night: "Closed" },
    { day: "Tuesday", lunch: "Closed", night: "Closed" },
    { day: "Wednesday", lunch: "11:00 AM – 3:00 PM", night: "8:00 PM – 12:30 AM" },
    { day: "Thursday", lunch: "11:00 AM – 5:00 PM", night: "8:00 PM – 1:00 AM" },
    { day: "Friday", lunch: "11:00 AM – 5:00 PM", night: "8:00 PM – 1:00 AM" },
    { day: "Saturday", lunch: "11:00 AM – 5:00 PM", night: "8:00 PM – 1:00 AM" },
    { day: "Sunday", lunch: "10:00 AM – 5:00 PM", night: "8:00 PM – 12:00 AM" },
];

export default function Hours() {
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
            id="contact"
            className="py-20 sm:py-28 px-4 relative"
            ref={sectionRef}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <p className="font-accent text-neon-orange text-sm tracking-widest uppercase mb-3">
                        Visit Us
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                        Hours & <span className="text-gradient">Location</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: Hours + Contact */}
                    <div className="animate-on-scroll">
                        {/* Hours table */}
                        <div className="glass-card rounded-2xl p-6 mb-6">
                            <div className="flex items-center gap-3 mb-5">
                                <Clock size={24} className="text-neon-orange" />
                                <h3 className="text-xl font-heading font-bold text-white">Operating Hours</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left py-2 pr-4 text-white/50 font-semibold">Day</th>
                                            <th className="text-left py-2 pr-4 text-neon-orange font-semibold">
                                                ☀️ Lunch
                                            </th>
                                            <th className="text-left py-2 text-neon-blue font-semibold">
                                                🌙 Late Night
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {hours.map((h) => (
                                            <tr key={h.day} className="border-b border-white/5">
                                                <td className="py-2.5 pr-4 text-white font-medium">{h.day}</td>
                                                <td
                                                    className={`py-2.5 pr-4 ${h.lunch === "Closed" ? "text-red-400/70" : "text-white/70"
                                                        }`}
                                                >
                                                    {h.lunch}
                                                </td>
                                                <td
                                                    className={`py-2.5 ${h.night === "Closed" ? "text-red-400/70" : "text-white/70"
                                                        }`}
                                                >
                                                    {h.night}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Contact info */}
                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="text-xl font-heading font-bold text-white mb-5">Get In Touch</h3>
                            <div className="space-y-4">
                                <a
                                    href="https://maps.google.com/?q=1328+Del+Paso+Blvd+Sacramento+CA+95815"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 text-white/70 hover:text-neon-orange transition-colors group"
                                >
                                    <MapPin size={20} className="mt-0.5 shrink-0 text-neon-orange" />
                                    <span>1328 Del Paso Blvd, Sacramento, CA 95815</span>
                                </a>
                                <a
                                    href="tel:+19168795059"
                                    className="flex items-center gap-3 text-white/70 hover:text-neon-orange transition-colors"
                                >
                                    <Phone size={20} className="shrink-0 text-neon-orange" />
                                    <span>(916) 879-5059</span>
                                </a>
                                <a
                                    href="tel:+16502074474"
                                    className="flex items-center gap-3 text-white/70 hover:text-neon-orange transition-colors"
                                >
                                    <Phone size={20} className="shrink-0 text-neon-orange" />
                                    <span>(650) 207-4474</span>
                                </a>
                                <a
                                    href="mailto:Vipdeliandtacos25@gmail.com"
                                    className="flex items-center gap-3 text-white/70 hover:text-neon-orange transition-colors"
                                >
                                    <Mail size={20} className="shrink-0 text-neon-orange" />
                                    <span>Vipdeliandtacos25@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Google Maps */}
                    <div className="animate-on-scroll rounded-2xl overflow-hidden neon-border h-[400px] lg:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.5!2d-121.4581!3d38.6058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ada0f9e5b9c93%3A0x4e99c786d8a3b9e6!2s1328%20Del%20Paso%20Blvd%2C%20Sacramento%2C%20CA%2095815!5e0!3m2!1sen!2sus!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "400px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="VIP Deli & Tacos location"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
