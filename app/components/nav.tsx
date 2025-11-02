"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
        const ref = useRef<HTMLElement>(null);
        const [isIntersecting, setIntersecting] = useState(true);

        useEffect(() => {
                if (!ref.current) return;
                const observer = new IntersectionObserver(([entry]) =>
                        setIntersecting(entry.isIntersecting),
                );

                observer.observe(ref.current);
                return () => observer.disconnect();
        }, []);

        const links = [
                { href: "/projects", label: "Projects" },
                { href: "/rise-of-man", label: "Rise of Man" },
                { href: "/ai", label: "AI" },
                { href: "/contact", label: "Contact" },
        ];

        return (
                <header ref={ref}>
                        <div
                                className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur duration-200 ${
                                        isIntersecting
                                                ? "bg-zinc-900/0 border-transparent"
                                                : "bg-zinc-950/80 border-zinc-800"
                                }`}
                        >
                                <div className="container mx-auto flex flex-row-reverse items-center justify-between px-4 py-4 sm:px-6">
                                        <nav aria-label="Primary">
                                                <ul className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                                                        {links.map((link) => (
                                                                <li key={link.href}>
                                                                        <Link
                                                                                href={link.href}
                                                                                className="transition-colors duration-200 hover:text-white"
                                                                        >
                                                                                {link.label}
                                                                        </Link>
                                                                </li>
                                                        ))}
                                                </ul>
                                        </nav>

                                        <Link
                                                href="/"
                                                className="text-zinc-300 transition-colors duration-200 hover:text-white"
                                                aria-label="Back to home"
                                        >
                                                <ArrowLeft className="h-6 w-6" aria-hidden="true" />
                                        </Link>
                                </div>
                        </div>
                </header>
        );
};
