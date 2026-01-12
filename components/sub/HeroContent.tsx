"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { BsStars, BsRocketTakeoff, BsLightningCharge } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const HeroContent = () => {
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-40 w-full z-20"
                >
                    <div className="h-full w-full md:w-3/5 flex flex-col gap-5 justify-center text-start">
                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center md:gap-4 gap-2">
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
                                    >
                                        <BsLightningCharge className="text-[#b49bff] mr-[10px] h-5 w-5" />
                                        <h1 className="Welcome-text text-[13px]">
                                            0.4s Load Times
                                        </h1>
                                    </motion.div>
                                )}
                            </InView>

                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
                                    >
                                        <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                                        <h1 className="Welcome-text text-[13px]">
                                            Custom Business Intelligence
                                        </h1>
                                    </motion.div>
                                )}
                            </InView>
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
                                    >
                                        <BsRocketTakeoff className="text-[#b49bff] mr-[10px] h-5 w-5" />
                                        <h1 className="Welcome-text text-[13px]">
                                            Automated Lead Ecosystems
                                        </h1>
                                    </motion.div>
                                )}
                            </InView>
                        </div>

                        {/* Main Headline */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="flex flex-col gap-6 mt-6 md:text-5xl lg:text-6xl text-3xl font-bold text-white max-w-[800px] w-auto h-auto z-20"
                                >
                                    <span className="leading-tight">
                                        We Build
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                                            {" "}Digital Engines,{" "}
                                        </span>
                                        Not Just
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                                            {" "}Websites.
                                        </span>
                                    </span>
                                </motion.div>
                            )}
                        </InView>

                        {/* Subheadline */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.p
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.8)}
                                    className="text-lg md:text-xl text-gray-400 my-5 max-w-[650px] z-30 leading-relaxed"
                                >
                                    Stop losing customers to slow loading speeds. We engineer
                                    high-performance websites and custom business software that
                                    loads instantly, ranks higher, and automates your leads.
                                </motion.p>
                            )}
                        </InView>

                        {/* CTA Buttons */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(1)}
                                    className="flex flex-col sm:flex-row gap-4 z-40"
                                >
                                    <a
                                        href="#contact"
                                        className="py-4 px-8 bg-gradient-to-r from-indigo-500 to-blue-600 text-center text-white cursor-pointer rounded-full font-semibold text-lg hover:scale-105 transition-all hover:shadow-lg hover:shadow-indigo-500/25"
                                    >
                                        Request Architecture Review
                                    </a>
                                    <a
                                        href="#projects"
                                        className="py-4 px-8 button-primary text-center text-white cursor-pointer rounded-full font-semibold text-lg border border-[#7042f88b] hover:scale-105 transition-all flex items-center justify-center gap-2"
                                    >
                                        <HiOutlineSparkles className="text-purple-400" />
                                        View Case Studies
                                    </a>
                                </motion.div>
                            )}
                        </InView>

                        {/* Social Proof */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(1.2)}
                                    className="flex items-center gap-4 mt-6 z-40"
                                >
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 border-2 border-[#030014] flex items-center justify-center"
                                            >
                                                <span className="text-white text-xs font-bold">
                                                    {String.fromCharCode(64 + i)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        <span className="text-white font-semibold">$12M+</span> Revenue Generated for Clients
                                        <div className="flex items-center gap-1 text-yellow-400">
                                            ★★★★★ <span className="text-gray-400">Enterprise-Grade Solutions</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>

                    {/* Hero Image/Animation */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                className="w-full md:w-2/5 h-full flex justify-center items-center z-40"
                            >
                                <div className="relative w-full h-[550px] md:w-[550px] md:h-[550px] overflow-hidden">
                                    <div className="absolute inset-0 rounded-full blur-3xl"></div>
                                    <Image
                                        src="/mainIconsdark.svg"
                                        alt="web development services"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 550px"
                                        className="relative object-contain"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;