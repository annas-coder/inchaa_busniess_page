"use client";

import { motion } from "framer-motion";
import { Plus, HelpCircle, Mail, MessageCircle } from "lucide-react";

export function HelpSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-[#1D2030] text-center font-poppins text-[34px] font-bold leading-[130%] pb-[16px]">We're Here to Help You 
                    <span className="ps-3 bg-clip-text text-transparent bg-[linear-gradient(106deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] font-poppins text-[34px] font-bold leading-[130%]">
                      Succeed</span>
                    </h2>
            </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* FAQ List */}
                    <div className="w-full lg:col-span-2 rounded-[24px] p-[32px] border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.7)] shadow-[0_8px_32px_0_rgba(100,100,150,0.12)] backdrop-blur-[10px]">
                        <div className="space-y-4">
                            <h3 className="text-[#323232] font-poppins text-[20px] font-bold leading-[130%]">Frequently Asked Questions</h3>
                            {[
                                "How do I verify a professional's credentials?",
                                "Is there a fee for posting a project?",
                                "How does the secure payment escrow work?",
                                "Can I cancel a project after hiring?"
                            ].map((faq, idx) => (
                                <div key={idx} className="rounded-[16px] bg-white/70 shadow-[0_8px_32px_0_rgba(100,100,150,0.12)] backdrop-blur-[10px] flex justify-between items-start self-stretch px-[24px] py-[20px]">
                                    <span className="text-[#323232] font-poppins text-[16px] font-semibold leading-[130%]">{faq}</span>
                                    <Plus className="w-5 h-5 text-gray-400" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1 w-full lg:col-span-1 rounded-[24px] p-[32px] border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.7)] shadow-[0_8px_32px_0_rgba(100,100,150,0.12)] backdrop-blur-[10px]">
                                <h3 className="text-[#323232] font-poppins text-[20px] font-bold leading-[130%] pb-[16px]">Need More Help?</h3>
                                <p className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%] pb-[16px]">Our onboarding team is ready to assist you
                                with any questions.</p>

                                <div className="space-y-4">
                                    <button className="rounded-[12px] border border-white/40 bg-white/70 shadow-[0_8px_32px_0_rgba(100,100,150,0.12)] backdrop-blur-[10px] flex items-center gap-[12px] self-stretch p-[16px] w-full">
                                        <div className="flex w-[40px] h-[40px] justify-center items-center rounded-[16px] bg-[#3C49DD]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M16.666 3.3335H3.33268C2.41221 3.3335 1.66602 4.07969 1.66602 5.00016V15.0002C1.66602 15.9206 2.41221 16.6668 3.33268 16.6668H16.666C17.5865 16.6668 18.3327 15.9206 18.3327 15.0002V5.00016C18.3327 4.07969 17.5865 3.3335 16.666 3.3335Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.3327 5.8335L10.8577 10.5835C10.6004 10.7447 10.3029 10.8302 9.99935 10.8302C9.69575 10.8302 9.39829 10.7447 9.14102 10.5835L1.66602 5.8335" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                                        </div>
                                        <div className="text-left">
                                            <div className="text-[#323232] font-poppins text-[14px] font-semibold leading-[130%] pb-[4px]">Email Support</div>
                                            <div className="text-[#76797B] font-poppins text-[12px] font-normal leading-[150%]">support@inchaa.com</div>
                                        </div>
                                    </button>
                                    <button className="rounded-[12px] border border-white/40 bg-white/70 shadow-[0_8px_32px_0_rgba(100,100,150,0.12)] backdrop-blur-[10px] flex items-center gap-[12px] self-stretch p-[16px] w-full">
                                        <div className="flex w-[40px] h-[40px] justify-center items-center rounded-[16px] bg-[#3C49DD]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M6.58268 16.6669C8.17316 17.4827 10.0028 17.7037 11.7418 17.29C13.4808 16.8763 15.0148 15.8551 16.0675 14.4104C17.1201 12.9656 17.6222 11.1925 17.4832 9.41034C17.3441 7.62821 16.5732 5.95434 15.3092 4.69036C14.0452 3.42638 12.3713 2.65541 10.5892 2.51638C8.80709 2.37735 7.03391 2.87941 5.5892 3.93207C4.14449 4.98474 3.12326 6.51879 2.70953 8.2578C2.29581 9.9968 2.5168 11.8264 3.33268 13.4169L1.66602 18.3335L6.58268 16.6669Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                                        </div>
                                        <div className="text-left">
                                            <div className="text-[#323232] font-poppins text-[14px] font-semibold leading-[130%] pb-[4px]">In-App Chat</div>
                                            <div className="text-[#76797B] font-poppins text-[12px] font-normal leading-[150%]">Available 24/7</div>
                                        </div>
                                    </button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
