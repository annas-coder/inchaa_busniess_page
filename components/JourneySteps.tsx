"use client";

import { motion } from "framer-motion";
import { FileText, Users, Calculator, CheckSquare } from "lucide-react";

const steps = [
    {
        icon: FileText,
        title: "Post Your Request",
        description: "Clarify project details with detailed documents."
    },
    {
        icon: Users,
        title: "Get Multiple Quotes",
        description: "Receive competitive quotes from verified contractors."
    },
    {
        icon: Calculator,
        title: "Compare & Choose",
        description: "Select the best fit based on price and reviews."
    },
    {
        icon: CheckSquare,
        title: "Manage & Track",
        description: "Track progress and handle payments securely."
    }
]

export function JourneySteps() {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[#1D2030] text-center font-poppins text-[34px] font-bold leading-[130%] pb-[16px]">Your Project Journey <span className="bg-clip-text text-transparent bg-[linear-gradient(106deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] font-poppins text-[34px] font-bold leading-[130%]">Made Simple</span></h2>
                    <p className="text-[#76797B] text-center font-poppins text-base font-normal leading-6">Streamlined steps to get your project from idea to done.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gray-200 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isLast = idx === steps.length - 1;

                            return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className={`flex flex-col items-center text-center group relative
                                ${!isLast ? "after:content-[''] after:block after:h-[2px] after:w-[223px] after:bg-[#C6D4FF] after:mt-4 after:top-[18px] after:right-[-123px] after:absolute" : ""}`}
                            >
                                <div className="flex w-[64px] h-[64px] justify-center items-center rounded-[16px] border-4 border-[#F8F9FB] bg-[#3C49DD] shadow-[0_8px_24px_0_rgba(100,100,150,0.12)] mb-[16px]">
                                <Icon className="w-[24px] h-[24px] text-[#FFFFFF]" />
                                </div>
                                <h3 className="text-[#323232] text-right font-poppins text-lg font-bold leading-[130%] pb-[12px]">
                                {step.title}
                                </h3>
                                <p className="text-[#76797B] text-center font-poppins text-sm font-normal leading-6">
                                {step.description}
                                </p>
                            </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
