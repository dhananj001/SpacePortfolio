"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const stats = [
    {
        number: "200+",
        label: "Projects Delivered",
        description: "Successfully launched"
    },
    {
        number: "50+",
        label: "Happy Clients",
        description: "Worldwide"
    },
    {
        number: "10x",
        label: "Average ROI",
        description: "For our clients"
    },
    {
        number: "98%",
        label: "Client Retention",
        description: "Come back for more"
    }
];

const Stats = () => {
    return (
        <section className="py-16 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#0c0c1d] via-[#0f0f2d] to-[#0c0c1d] border border-[#7042f861] overflow-hidden"
                        >
                            {/* Background Glow */}
                            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        variants={index % 2 === 0 ? slideInFromLeft(0.2 * (index + 1)) : slideInFromRight(0.2 * (index + 1))}
                                        className="text-center"
                                    >
                                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-white font-semibold text-lg mb-1">
                                            {stat.label}
                                        </div>
                                        <div className="text-gray-500 text-sm">
                                            {stat.description}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </InView>
            </div>
        </section>
    );
};

export default Stats;
