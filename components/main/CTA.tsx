"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import { HiOutlineSparkles, HiOutlineArrowRight } from "react-icons/hi";

const CTA = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="relative p-12 md:p-20 rounded-3xl overflow-hidden"
                        >
                            {/* Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-[#0f0f2d] to-cyan-900/50 border border-[#7042f861] rounded-3xl pointer-events-none" />

                            {/* Glow Effects */}
                            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

                            {/* Grid Pattern */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22%20fill%3D%22none%22%20stroke%3D%22%237042f815%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')] opacity-50 pointer-events-none" />

                            {/* Content */}
                            <div className="relative z-10 text-center">
                                <motion.div
                                    variants={slideInFromTop}
                                    className="inline-flex items-center gap-2 mb-6"
                                >
                                    <span className="Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9] inline-flex items-center">
                                        <HiOutlineSparkles className="text-purple-400 mr-2" />
                                        <span className="Welcome-text text-[14px]">Limited Spots Available</span>
                                    </span>
                                </motion.div>

                                <motion.h2
                                    variants={slideInFromLeft(0.3)}
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                                >
                                    Ready to Build Your
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                                        {" "}Lead Generation Machine?
                                    </span>
                                </motion.h2>

                                <motion.p
                                    variants={slideInFromRight(0.5)}
                                    className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10"
                                >
                                    Join 200+ businesses that have transformed their digital presence with NebulaStack.
                                    Get a free consultation and discover how we can 10x your online conversions.
                                </motion.p>

                                <motion.div
                                    variants={slideInFromTop}
                                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                >
                                    <a
                                        href="#contact"
                                        className="group py-4 px-10 bg-gradient-to-r from-indigo-500 to-blue-600 text-white cursor-pointer rounded-full font-semibold text-lg hover:scale-105 transition-all hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2"
                                    >
                                        Get Your Free Strategy Call
                                        <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <div className="text-gray-400 text-sm">
                                        ✓ No obligation &nbsp;·&nbsp; ✓ 30-min call &nbsp;·&nbsp; ✓ Custom roadmap
                                    </div>
                                </motion.div>

                                {/* Trust Indicators */}
                                <motion.div
                                    variants={slideInFromTop}
                                    className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500"
                                >
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Response within 24 hours</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>100% Satisfaction Guarantee</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Transparent Pricing</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </InView>
            </div>
        </section>
    );
};

export default CTA;
