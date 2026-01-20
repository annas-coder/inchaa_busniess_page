"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export function FinalDownloadCTA() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden text-white shadow-2xl">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 pt-12 pb-12 md:px-16 md:pt-16 md:pb-16 min-h-[400px]">
                        <div className="space-y-6 z-10">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Start Building <br /> Smarter with <span className="text-blue-200">Inchaa</span>
                            </h2>
                            <p className="text-blue-100 text-lg max-w-md">
                                Get the app today and manage your construction projects from anywhere, anytime.
                            </p>

                            <div className="flex gap-4 pt-4">
                                {/* Apple Store Button Placeholder */}
                                <button className="h-14 px-6 bg-black rounded-lg flex items-center gap-3 border border-white/10 hover:bg-gray-900 transition-colors">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl"></div>
                                    <div className="text-left flex flex-col leading-none">
                                        <span className="text-[10px] uppercase">Download on the</span>
                                        <span className="text-lg font-bold">App Store</span>
                                    </div>
                                </button>

                                {/* Play Store Button Placeholder */}
                                <button className="h-14 px-6 bg-black rounded-lg flex items-center gap-3 border border-white/10 hover:bg-gray-900 transition-colors">
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                                    </div>
                                    <div className="text-left flex flex-col leading-none">
                                        <span className="text-[10px] uppercase">Get it on</span>
                                        <span className="text-lg font-bold">Google Play</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[300px] flex items-end justify-center md:items-end md:justify-end">
                            {/* Hand holding phone mockup */}
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative w-[300px] md:w-[350px] aspect-[9/18] translate-y-[20%]"
                            >
                                {/* Phone */}
                                <div className="absolute inset-0 bg-black rounded-[40px] border-[8px] border-black overflow-hidden z-20 shadow-2xl">
                                    <div className="w-full h-full bg-white flex flex-col">
                                        <div className="h-16 bg-blue-600 w-full" />
                                        <div className="p-4 space-y-3">
                                            <div className="h-32 bg-gray-100 rounded-xl" />
                                            <div className="h-32 bg-gray-100 rounded-xl" />
                                        </div>
                                    </div>
                                </div>
                                {/* Hand Shape Placeholder - A somewhat complex shape to CSS, using a simple rounded rect rotated for now or omission if too complex. Sticking to phone floating for cleanliness unless requested specifically */}
                            </motion.div>
                        </div>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
                </div>
            </div>
        </section>
    );
}
