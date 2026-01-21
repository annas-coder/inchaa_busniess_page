"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside or on a link
    useEffect(() => {
        // #region agent log
        fetch('http://127.0.0.1:7250/ingest/fd628652-ee9f-404e-a801-9b510248370e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navbar.tsx:23',message:'mobileMenuOpen state changed',data:{mobileMenuOpen,scrollY:window.scrollY,bodyOverflow:document.body.style.overflow},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
        // #endregion
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            // #region agent log
            fetch('http://127.0.0.1:7250/ingest/fd628652-ee9f-404e-a801-9b510248370e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navbar.tsx:25',message:'Menu opened - checking menu element',data:{scrollY:window.scrollY,menuElement:document.querySelector('[class*="md:hidden fixed"]')?.getBoundingClientRect()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
            // #endregion
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const navbarHeight = 80; // Approximate height of fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            setMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        // #region agent log
        fetch('http://127.0.0.1:7250/ingest/fd628652-ee9f-404e-a801-9b510248370e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navbar.tsx:51',message:'toggleMobileMenu called',data:{currentState:mobileMenuOpen,scrollY:window.scrollY,windowHeight:window.innerHeight,viewportWidth:window.innerWidth},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        setMobileMenuOpen(!mobileMenuOpen);
    };

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
                    <Link 
                        href="#how-it-works" 
                        onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
                        className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors"
                    >
                        How It Works
                    </Link>
                    <Link 
                        href="#features" 
                        onClick={(e) => handleSmoothScroll(e, 'features')}
                        className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors"
                    >
                        Features
                    </Link>
                    <Link 
                        href="#why-inchaa" 
                        onClick={(e) => handleSmoothScroll(e, 'why-inchaa')}
                        className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors"
                    >
                        Why Inchaa
                    </Link>
                    <Link 
                        href="#support" 
                        onClick={(e) => handleSmoothScroll(e, 'support')}
                        className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors"
                    >
                        Support
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:gap-12">
                    <span className="hidden md:block text-sm font-medium">Join as Provider</span>
                    <button className="bg-[linear-gradient(108deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] text-white px-3 py-2 md:px-5 md:py-2.5 rounded-[16px] text-xs md:text-sm font-medium transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap cursor-pointer">
                        Get the App
                    </button>
                    <button 
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 text-gray-700 cursor-pointer z-50"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden fixed inset-0 top-[70px] bg-white transition-all duration-300 ease-in-out z-40",
                    mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                ref={(el) => {
                    if (el && mobileMenuOpen) {
                        // #region agent log
                        const rect = el.getBoundingClientRect();
                        fetch('http://127.0.0.1:7250/ingest/fd628652-ee9f-404e-a801-9b510248370e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navbar.tsx:124',message:'Menu element rendered',data:{top:rect.top,left:rect.left,width:rect.width,height:rect.height,scrollY:window.scrollY,windowHeight:window.innerHeight,computedBg:window.getComputedStyle(el).backgroundColor},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
                        // #endregion
                    }
                }}
            >
                <div className="container mx-auto px-4 py-8">
                    <nav className="flex flex-col gap-6">
                        <Link 
                            href="#how-it-works" 
                            onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
                            className="text-base font-medium text-[#76797B] hover:text-[#3C49DD] transition-colors py-2"
                        >
                            How It Works
                        </Link>
                        <Link 
                            href="#features" 
                            onClick={(e) => handleSmoothScroll(e, 'features')}
                            className="text-base font-medium text-[#76797B] hover:text-[#3C49DD] transition-colors py-2"
                        >
                            Features
                        </Link>
                        <Link 
                            href="#why-inchaa" 
                            onClick={(e) => handleSmoothScroll(e, 'why-inchaa')}
                            className="text-base font-medium text-[#76797B] hover:text-[#3C49DD] transition-colors py-2"
                        >
                            Why Inchaa
                        </Link>
                        <Link 
                            href="#support" 
                            onClick={(e) => handleSmoothScroll(e, 'support')}
                            className="text-base font-medium text-[#76797B] hover:text-[#3C49DD] transition-colors py-2"
                        >
                            Support
                        </Link>
                        <div className="pt-4 border-t border-gray-200">
                            <span className="text-sm font-medium text-[#76797B] block mb-4">Join as Provider</span>
                        </div>
                    </nav>
                </div>
            </div>
        </nav>
    );
}
