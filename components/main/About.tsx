"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import { HiOutlineCheckCircle } from "react-icons/hi";

const features = [
    "Conversion-Focused Design",
    "Mobile-First Development",
    "SEO Optimized",
    "Lightning Fast Performance",
    "24/7 Support",
    "Scalable Architecture"
];

const About = () => {
    return (
        <section
            id="about"
            className="py-20 relative"
        >
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.5)}
                                className="relative"
                            >
                                <div className="relative z-10">
                                    {/* Main Image/Visual */}
                                    <div className="relative rounded-2xl overflow-hidden border border-[#7042f861] bg-gradient-to-b from-[#0c0c1d] to-transparent p-8">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />
                                        <Image
                                            src="/mainIconsdark.svg"
                                            alt="NebulaStack Team"
                                            width={500}
                                            height={400}
                                            className="relative z-10"
                                        />
                                    </div>

                                    {/* Floating Stats Card */}
                                    <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/25">
                                        <div className="text-3xl font-bold text-white">5+</div>
                                        <div className="text-white/80 text-sm">Years Experience</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    {/* Right Content */}
                    <div className="space-y-6">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromTop}
                                >
                                    <span className="Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9] inline-flex items-center mb-4">
                                        <span className="Welcome-text text-[14px]">About NebulaStack</span>
                                    </span>
                                </motion.div>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.h2
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromRight(0.3)}
                                    className="text-4xl md:text-5xl font-bold text-white"
                                >
                                    We Turn
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                        {" "}Visitors{" "}
                                    </span>
                                    Into
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                        {" "}Revenue
                                    </span>
                                </motion.h2>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.p
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromRight(0.5)}
                                    className="text-gray-400 text-lg leading-relaxed"
                                >
                                    NebulaStack is a premium web development agency specializing in
                                    high-converting websites and web applications. We combine stunning
                                    design with strategic conversion optimization to create digital
                                    experiences that don&apos;t just look good — they generate leads and
                                    drive sales.
                                </motion.p>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.p
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromRight(0.6)}
                                    className="text-gray-400 text-lg leading-relaxed"
                                >
                                    Our team of designers, developers, and strategists work together
                                    to understand your business goals and create tailored solutions
                                    that deliver measurable results.
                                </motion.p>
                            )}
                        </InView>

                        {/* Features Grid */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromBottom}
                                    className="grid grid-cols-2 gap-4 pt-4"
                                >
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <HiOutlineCheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </InView>

                        {/* CTA */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromBottom}
                                    className="pt-6"
                                >
                                    <a
                                        href="#services"
                                        className="inline-flex items-center gap-2 py-4 px-8 button-primary text-white cursor-pointer rounded-full font-semibold border border-[#7042f88b] hover:scale-105 transition-all"
                                    >
                                        Explore Our Services
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;