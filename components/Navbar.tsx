"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Will create basic button later or use inline
import { ArrowRight, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-transparent",
                scrolled ? "bg-white/80 backdrop-blur-md py-3 shadow-sm border-gray-100" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/assets/incha-logo.png"
                        alt="Inchaa Logo"
                        width={126}
                        height={24}
                        className="h-6 w-auto"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#" className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors">
                        How It Works
                    </Link>
                    <Link href="#" className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#" className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors">
                        Why Inchaa
                    </Link>
                    <Link href="#" className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors">
                        Support
                    </Link>
                </div>

                <div className="flex items-center gap-12">
                    <span className="hidden md:block text-sm font-medium">Join as Provider</span>
                    <button className="bg-[linear-gradient(108deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] text-white px-5 py-2.5 rounded-[16px] text-sm font-medium transition-all shadow-lg shadow-blue-600/20">
                        Get the App
                    </button>
                    <button className="md:hidden p-2">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
