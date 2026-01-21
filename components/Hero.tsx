"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[url('/assets/hero-banner-overlay.png')] bg-cover bg-center">
            {/* Background decoration */}
            <div className="relative top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl opacity-60 mix-blend-multiply filter" />
                <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-100/50 blur-3xl opacity-60 mix-blend-multiply filter" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/40 bg-white/70 shadow-[0_8px_32px_0_rgba(100,100,150,0.12)] backdrop-blur-[10px] max-w-max">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                            <span className="text-center text-[#76797B] font-poppins text-sm font-normal leading-[1.5]">Building the Future of Construction</span>
                        </div>

                        <h1 className="max-w-max text-[#323232] font-poppins text-[64px] font-bold leading-[110%]">
                            Build Smarter with <span className="text-blue-600">Inchaa</span>
                        </h1>

                        <p className="text-[#323232] font-poppins text-base font-normal leading-6 w-[628px]">
                            Inchaa is a digital platform that connects customers with verified contractors, and consultants. Find trusted professionals, request quotations, and manage projects in one seamless experience.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <button className="flex items-center justify-center gap-2 h-[44px] px-8 rounded-[16px] 
bg-[linear-gradient(104deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] 
shadow-[0_16px_48px_0_rgba(100,100,150,0.15)]
text-white text-center font-poppins text-base font-semibold leading-[130%]">
                                Get Started Now <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="flex items-center justify-center gap-2 h-[44px] px-8 rounded-[16px] bg-[rgba(255,255,255,0.70)] shadow-[0_16px_48px_0_rgba(100,100,150,0.15)] text-[#323232] text-center font-poppins text-base font-semibold leading-[130%]">
                                <Play className="w-4 h-4 fill-current" /> Watch Demo
                            </button>
                        </div>

                        <div className="flex items-start flex-col gap-4 mt-6 text-sm text-gray-600">
                            <p className="text-[#76797B] font-poppins text-base font-normal leading-6">Trusted users around UAE <span className="font-semibold text-gray-900">5M+</span></p>
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                                        {/* Placeholder avatars */}
                                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                                    +2k
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image/Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center"
                    >
                        <Image src="/assets/banner-image.png" alt="Inchaa" width={460} height={481} />
                    </motion.div>

                </div>

                {/* Floating cards at bottom of hero area */}
                <div className="absolute bottom-[-100px] left-0 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex items-center justify-center gap-[100px] p-12 max-w-4xl mx-auto rounded-[24px] border border-white/40 bg-white/70 shadow-[0_8px_32px_0_rgba(100,100,150,0.12)] backdrop-blur-[10px]"
                    >
                        <div className="flex flex-col items-center  gap-[12px]">
                            <div className="flex w-[64px] h-[64px] justify-center items-center rounded-[16px] bg-[#3C49DD] shadow-[0_8px_24px_0_rgba(100,100,150,0.12)]">
                                <Image src="/assets/user-icon.png" alt="Builders" className="object-contain" width={32} height={32} />
                            </div>
                            <p className="text-[#323232] text-center font-poppins text-sm font-semibold leading-[130%]">Customers</p>
                        </div>
                        <div className="flex flex-col items-center  gap-[12px]">
                            <div className="flex w-[64px] h-[64px] justify-center items-center rounded-[16px] bg-[#3C49DD] shadow-[0_8px_24px_0_rgba(100,100,150,0.12)]">
                                <Image src="/assets/user-icon.png" alt="Builders" className="object-contain" width={32} height={32} />
                            </div>
                            <p className="text-[#323232] text-center font-poppins text-sm font-semibold leading-[130%]">Contractors</p>
                        </div>
                        <div className="flex flex-col items-center  gap-[12px]">
                            <div className="flex w-[64px] h-[64px] justify-center items-center rounded-[16px] bg-[#3C49DD] shadow-[0_8px_24px_0_rgba(100,100,150,0.12)]">
                                <Image src="/assets/user-icon.png" alt="Builders" className="object-contain" width={32} height={32} />
                            </div>
                            <p className="text-[#323232] text-center font-poppins text-sm font-semibold leading-[130%]">Contractors</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
