"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Bell, FileText, LayoutTemplate, MessageSquare, CreditCard } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Verified Professionals",
        description: "Access a vetted network of pros you can trust."
    },
    {
        icon: Bell,
        title: "Real-time Notifications",
        description: "Stay updated with instant text & app notifications."
    },
    {
        icon: FileText,
        title: "Secure Payment Escrow",
        description: "Payments are held secure until milestones are met."
    },
    {
        icon: LayoutTemplate,
        title: "Easy Comparisons",
        description: "Compare quotes side-by-side to make the best choice."
    },
    {
        icon: MessageSquare,
        title: "Direct Chat",
        description: "Chat directly with pros to clarify details."
    },
    {
        icon: CreditCard,
        title: "Project Management",
        description: "Tools to organize timelines, tasks, and budgets."
    }
];

export function AllInOneGrid() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[#1D2030] text-center font-poppins text-[34px] font-bold leading-[130%] pb-[16px]">Everything You Need, 
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(106deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] font-poppins text-[34px] font-bold leading-[130%]">
                        All in One Place</span></h2>
                    <p className="text-[#76797B] text-center font-poppins text-base font-normal leading-6">
                        Powerful tools designed to streamline your construction journey from start to finish.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-[#FFFFFFB2] rounded-2xl border border-transparent  transition-all duration-300 grouprounded-[24px] border border-[rgba(255,255,255,0.4)] shadow-[0_8px_32px_0_rgba(100,100,150,0.12)] backdrop-blur-[10px]"
                            >
                                <div className="flex w-[48px] h-[48px] justify-center items-center rounded-[12px] bg-[rgba(60,73,221,0.1)] mb-[16px]">
                                    <Icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-[#323232] font-poppins text-[18px] font-semibold leading-[130%] pb-[12px]">{feature.title}</h3>
                                <p className="text-[#76797B] font-poppins text-[14px] font-normal leading-[150%]">{feature.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
