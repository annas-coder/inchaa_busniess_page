"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "Inchaa made finding a reliable electrician so easy! Got multiple quotes within hours and the work was completed professionally. Highly recommend!",
        author: "أحمد الحمادي",
        role: "Homeowner, Abu Dhabi",
        stars: 5,
    },
    {
        quote: "As a builder managing multiple projects, Inchaa has been a game-changer. I can quickly find verified contractors and track all my service requests in one place.",
        author: "فاطمة المنصوري",
        role: "Builder, Dubai",
        stars: 5,
    },
    {
        quote: "The transparency in pricing and the ability to compare quotes has saved me significant money on maintenance work. Great platform!",
        author: "خالد الكعبي",
        role: "Property Manager, Al Ain",
        stars: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-[48px]">
                    <h2 className="text-[#1D2030] text-center font-poppins text-[34px] font-bold leading-[130%] pb-[16px]">What Our Users Say</h2>
                    <p className="text-[#76797B] text-center font-poppins text-base font-normal leading-6">
                    Hear from customers and service providers who trust Inchaa for their needs
                    </p>
                </div>

                <div className="flex items-center justify-center mb-[48px]">
                    <button className="flex flex-col items-center justify-center px-6 py-3 rounded-full bg-[#3C49DD] shadow-md text-white text-center font-poppins text-[14px] font-semibold leading-[130%]">Customers & Builders</button>
                    <button className="flex flex-col items-center justify-center px-6 py-3 text-[#76797B] text-center font-poppins text-[14px] font-normal leading-[150%]">Service Providers</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
                        >
                            <div className="mb-[24px]">
                               <Image src="/assets/double-quote.png" alt="Quote" width={32} height={48} className="pb-[16px]" />
                                <p className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">"{item.quote}"</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex w-[48px] h-[48px] justify-center items-center shrink-0 rounded-full bg-[rgba(60,73,221,0.1)] text-[#3743D8] font-poppins text-[16px] font-semibold leading-[130%] text-center" >
                                أح
                                </div>
                                <div>
                                    <div className="text-[#323232] font-poppins text-[16px] font-semibold leading-[130%]">{item.author}</div>
                                    <div className="text-[#76797B] font-poppins text-[14px] font-normal leading-[150%]">{item.role}</div>
                                </div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(item.stars)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
