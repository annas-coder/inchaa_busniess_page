"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (

        <div className="lg:h-[1024px] sm:h-full">
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

                        <h1 className="max-w-max text-[#323232] font-poppins text-[32px] md:text-[64px] font-bold leading-[110%]">
                            Build Smarter with <span className="text-blue-600">Inchaa</span>
                        </h1>

                        <p className="text-[#323232] font-poppins text-base font-normal leading-6 w-full max-w-[628px]">
                            Inchaa is a digital platform that connects customers with verified contractors, and consultants. Find trusted professionals, request quotations, and manage projects in one seamless experience.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full">
                            <button className="flex items-center justify-center gap-2 h-[44px] px-8 rounded-[16px] w-full sm:w-auto
bg-[linear-gradient(104deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] 
shadow-[0_16px_48px_0_rgba(100,100,150,0.15)]
text-white text-center font-poppins text-base font-semibold leading-[130%]">
                                Get Started Now <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="flex items-center justify-center gap-2 h-[44px] px-8 rounded-[16px] w-full sm:w-auto bg-[rgba(255,255,255,0.70)] shadow-[0_16px_48px_0_rgba(100,100,150,0.15)] text-[#323232] text-center font-poppins text-base font-semibold leading-[130%]">
                                <Play className="w-4 h-4 fill-current" /> Watch Demo
                            </button>
                        </div>

                        <div className="flex items-start flex-col gap-4 mt-6 text-sm text-gray-600">
                            <p className="text-[#76797B] flex gap-2 font-poppins text-base font-normal leading-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_1_2946)">
                                        <path d="M10 1L12.5 6.5L18.5 7.5L14.5 11.5L15.5 18L10 15L4.5 18L5.5 11.5L1.5 7.5L7.5 6.5L10 1Z" fill="#323232" stroke="#323232" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_2946">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Trusted users around UAE <span className="font-semibold text-gray-900">5M+</span></p>
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
                        <div className="relative h-[400px] md:h-full w-full max-w-[460px]">
                            <Image
                                src="/assets/banner.webp"
                                alt="Inchaa"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* <Image src="/assets/banner.webp" alt="Inchaa" className="object-contain" width={460} height={481} /> */}
                    </motion.div>

                </div>

                {/* Floating cards at bottom of hero area - Desktop only */}
                <div className=" md:flex md:absolute md:bottom-[-100px] md:left-0 w-full z-10 hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-row items-center justify-center gap-4 md:gap-[100px] p-6 md:p-12 max-w-4xl mx-auto rounded-[24px] border border-white/40 bg-white/70 shadow-[0_8px_32px_0_rgba(100,100,150,0.12)] backdrop-blur-[10px]"
                    >
                        <div className="flex flex-col items-center  gap-[12px]">
                            <div className="flex w-[64px] h-[64px] justify-center items-center rounded-[16px] bg-[#3C49DD] shadow-[0_8px_24px_0_rgba(100,100,150,0.12)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M21.3307 28V25.3333C21.3307 23.9188 20.7688 22.5623 19.7686 21.5621C18.7684 20.5619 17.4119 20 15.9974 20H7.9974C6.58291 20 5.22635 20.5619 4.22616 21.5621C3.22597 22.5623 2.66406 23.9188 2.66406 25.3333V28" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9974 14.6667C14.9429 14.6667 17.3307 12.2789 17.3307 9.33333C17.3307 6.38781 14.9429 4 11.9974 4C9.05188 4 6.66406 6.38781 6.66406 9.33333C6.66406 12.2789 9.05188 14.6667 11.9974 14.6667Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M29.3359 28V25.3333C29.3351 24.1516 28.9417 23.0037 28.2178 22.0698C27.4938 21.1358 26.4801 20.4688 25.3359 20.1733" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.3359 4.17334C22.4832 4.46707 23.5 5.13427 24.2261 6.06975C24.9523 7.00523 25.3464 8.15578 25.3464 9.34001C25.3464 10.5242 24.9523 11.6748 24.2261 12.6103C23.5 13.5457 22.4832 14.2129 21.3359 14.5067" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-[#323232] text-center font-poppins text-sm font-semibold leading-[130%]">Customers</p>
                        </div>
                        <div className="flex flex-col items-center  gap-[12px]">
                            <div className="flex w-[64px] h-[64px] justify-center items-center rounded-[16px] bg-[#3C49DD] shadow-[0_8px_24px_0_rgba(100,100,150,0.12)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M21.3307 28V25.3333C21.3307 23.9188 20.7688 22.5623 19.7686 21.5621C18.7684 20.5619 17.4119 20 15.9974 20H7.9974C6.58291 20 5.22635 20.5619 4.22616 21.5621C3.22597 22.5623 2.66406 23.9188 2.66406 25.3333V28" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.9974 14.6667C14.9429 14.6667 17.3307 12.2789 17.3307 9.33333C17.3307 6.38781 14.9429 4 11.9974 4C9.05188 4 6.66406 6.38781 6.66406 9.33333C6.66406 12.2789 9.05188 14.6667 11.9974 14.6667Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M29.3359 28V25.3333C29.3351 24.1516 28.9417 23.0037 28.2178 22.0698C27.4938 21.1358 26.4801 20.4688 25.3359 20.1733" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.3359 4.17334C22.4832 4.46707 23.5 5.13427 24.2261 6.06975C24.9523 7.00523 25.3464 8.15578 25.3464 9.34001C25.3464 10.5242 24.9523 11.6748 24.2261 12.6103C23.5 13.5457 22.4832 14.2129 21.3359 14.5067" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="text-[#323232] text-center font-poppins text-sm font-semibold leading-[130%]">Contractors</p>
                        </div>
                        <div className="flex flex-col items-center  gap-[12px]">
                            <div className="flex w-[64px] h-[64px] justify-center items-center rounded-[16px] bg-[#3C49DD] shadow-[0_8px_24px_0_rgba(100,100,150,0.12)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="33" viewBox="0 0 28 33" fill="none">
                                    <path d="M10.9003 5.04468C12.8526 4.58842 14.812 4.59312 16.7206 5.05542C17.7666 5.3086 18.5523 6.17262 18.7264 7.25171L18.7665 7.50073C18.8291 7.88511 19.1568 8.16382 19.5468 8.16382C19.9947 8.16401 20.4333 8.52374 20.4335 9.0105C20.4335 11.7394 19.708 14.2247 18.5253 16.0349C17.3439 17.8429 15.6846 19.0037 13.8202 19.0037C11.9574 19.0035 10.3003 17.8427 9.12 16.0349C7.93817 14.2247 7.21375 11.7394 7.21375 9.0105C7.21381 8.78585 7.30296 8.56972 7.46179 8.41089L7.52429 8.35522C7.67489 8.23239 7.86424 8.16383 8.06042 8.16382H8.06238C8.46515 8.16382 8.80276 7.86286 8.84753 7.46265L8.8573 7.37769C8.9767 6.31164 9.70294 5.41909 10.6981 5.10132L10.9003 5.04468ZM16.3221 6.70093C14.6746 6.30286 12.9802 6.29948 11.2841 6.69409C10.8937 6.785 10.5894 7.13096 10.5409 7.56616L10.5311 7.65112V7.6521C10.4235 8.60863 9.7835 9.38591 8.92566 9.70288C9.03074 11.8284 9.61404 13.7211 10.4862 15.0867C11.385 16.4937 12.5649 17.3091 13.8202 17.3093C15.0766 17.3093 16.2575 16.4946 17.1571 15.0886C18.0297 13.7248 18.6139 11.8344 18.7206 9.71167C17.8739 9.41431 17.2437 8.68805 17.0946 7.77222L17.0546 7.52124C16.9894 7.11708 16.689 6.79005 16.3221 6.70093Z" fill="white" stroke="white" stroke-width="0.476869" />
                                    <path d="M13.6512 0.256104C15.3961 0.133358 16.8545 0.674786 17.6962 1.82153L17.993 2.22583C18.9013 2.26107 19.7464 2.67703 20.327 3.3811C20.9338 4.11696 21.1774 5.07755 20.995 6.01392L20.3817 9.17114C20.2931 9.62845 19.8505 9.93146 19.3895 9.84009V9.84106C18.9308 9.7518 18.6302 9.30727 18.7196 8.8479L19.3329 5.69067C19.4178 5.25191 19.3044 4.80323 19.0204 4.45923H19.0194C18.7355 4.1144 18.3169 3.91626 17.87 3.91626C17.4645 3.91614 17.0777 3.74616 16.8046 3.45337L16.6952 3.32056L16.3309 2.82446V2.82349C16.0201 2.39975 15.5644 2.16629 15.0839 2.04517C14.6027 1.92394 14.1127 1.92019 13.7606 1.94556H13.7567C13.5022 1.95984 12.7196 2.02418 11.829 2.28931C10.9353 2.55536 9.95803 3.01623 9.28601 3.80884C8.62666 4.58642 8.34474 5.61514 8.47546 6.89185L8.89246 8.8313C8.99089 9.28872 8.69989 9.73763 8.24304 9.83618L8.24402 9.83716C8.1826 9.85077 8.12185 9.85669 8.06433 9.85669C7.67385 9.85669 7.32247 9.58421 7.23718 9.18677L6.8114 7.20337L6.81238 7.20239C6.80524 7.17082 6.79942 7.14171 6.79675 7.11841V7.11743C6.60676 5.3738 7.00216 3.88322 7.99402 2.71313C8.91023 1.63221 10.1795 1.02882 11.2802 0.690674C12.3785 0.353275 13.3313 0.27407 13.6512 0.256104Z" fill="white" stroke="white" stroke-width="0.476869" />
                                    <path d="M17.3617 15.3845C17.8297 15.3845 18.2083 15.7632 18.2084 16.2312V17.0164C18.2084 18.3361 19.0047 19.502 20.2396 19.988H20.2386L24.3148 21.5818L24.6605 21.7322C26.3487 22.5454 27.4203 24.2341 27.4203 26.1306V31.8679C27.4203 32.3359 27.0416 32.7156 26.5736 32.7156H1.08533C0.617355 32.7155 0.238647 32.3359 0.238647 31.8679V26.1306C0.238651 24.1077 1.45847 22.3211 3.34412 21.5818L7.42126 19.9871C8.65461 19.5015 9.4505 18.336 9.45056 17.0164V16.2312C9.45059 15.7632 9.82928 15.3845 10.2972 15.3845C10.7652 15.3845 11.1439 15.7632 11.1439 16.2312V17.0164C11.1439 19.0362 9.92471 20.8219 8.04041 21.5642H8.03943L3.9613 23.1599V23.1589C2.728 23.6426 1.93201 24.8089 1.93201 26.1306V31.0212H25.7269V26.1306C25.7269 24.8088 24.9307 23.6431 23.6967 23.1589L19.6205 21.5652C17.7348 20.8224 16.5151 19.0364 16.515 17.0164V16.2312C16.515 15.7632 16.8937 15.3845 17.3617 15.3845Z" fill="white" stroke="white" stroke-width="0.476869" />
                                    <path d="M9.1178 18.9639C9.43216 18.6717 9.92312 18.6593 10.2526 18.9492L10.4508 19.1152C12.528 20.775 15.5371 20.7217 17.5543 18.9512L17.7321 18.7939L17.8893 18.9717L18.2936 19.4268L18.3014 19.4355V19.4365L18.6823 19.9111L18.8307 20.0977L18.6451 20.2471L18.6422 20.248C17.2966 21.4257 15.6046 22.0156 13.9108 22.0156C12.206 22.0156 10.497 21.4188 9.1344 20.2217C8.78289 19.9132 8.74815 19.3779 9.05725 19.0264L9.1178 18.9639Z" fill="white" stroke="white" stroke-width="0.476869" />
                                    <path d="M9.20447 18.9553C9.65755 18.8294 10.121 19.1003 10.2435 19.5491L13.5355 31.6458C13.6584 32.0969 13.3921 32.5612 12.9408 32.6838L12.9418 32.6848C12.8659 32.7059 12.7904 32.7151 12.7181 32.7151C12.3461 32.7151 12.0034 32.4677 11.9008 32.0901L8.60974 19.9944C8.48653 19.5429 8.75266 19.0768 9.20447 18.9543V18.9553Z" fill="white" stroke="white" stroke-width="0.476869" />
                                    <path d="M17.5336 19.551C17.6559 19.0981 18.1239 18.8308 18.5726 18.9534L18.6547 18.9807C19.0554 19.1342 19.2833 19.5692 19.1693 19.9924L15.9017 32.0881C15.7992 32.4661 15.4573 32.7141 15.0844 32.7141C15.0118 32.7141 14.937 32.7058 14.8627 32.6858V32.6848C14.4114 32.5624 14.1444 32.0982 14.266 31.6467L17.5336 19.551Z" fill="white" stroke="white" stroke-width="0.476869" />
                                </svg>
                            </div>
                            <p className="text-[#323232] text-center font-poppins text-sm font-semibold leading-[130%]">Consultants</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </div>
    );
}
