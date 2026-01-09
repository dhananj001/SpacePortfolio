"use client";

import {
    Backend_skill,
    DevTools,
    Frontend_skill,
    libraries,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

const processSteps = [
    {
        number: "01",
        title: "Discovery",
        description: "We dive deep into your business, goals, and target audience to create a strategic foundation."
    },
    {
        number: "02",
        title: "Strategy & Design",
        description: "Crafting wireframes and designs focused on user experience and conversion optimization."
    },
    {
        number: "03",
        title: "Development",
        description: "Building your site with clean code, best practices, and cutting-edge technologies."
    },
    {
        number: "04",
        title: "Launch & Optimize",
        description: "Going live with thorough testing, then continuous monitoring and improvement."
    }
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-20 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                {/* Section Header */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-center mb-16"
                        >
                            <span className="Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9] inline-flex items-center mb-4">
                                <span className="Welcome-text text-[14px]">Our Process & Tech Stack</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                                How We
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                                    {" "}Deliver Excellence
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                A proven process combined with industry-leading technologies
                                to deliver exceptional results every time.
                            </p>
                        </motion.div>
                    )}
                </InView>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {processSteps.map((step, index) => (
                        <InView key={index} triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.2 * (index + 1))}
                                    className="relative p-6 rounded-2xl bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861] hover:border-purple-500/50 transition-all"
                                >
                                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500/30 to-cyan-500/30 mb-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-sm">{step.description}</p>

                                    {/* Connector Line */}
                                    {index < 3 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-600" />
                                    )}
                                </motion.div>
                            )}
                        </InView>
                    ))}
                </div>

                {/* Tech Stack */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-center mb-10"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">Technologies We Master</h3>
                            <p className="text-gray-400">Building with the best tools in the industry</p>
                        </motion.div>
                    )}
                </InView>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Frontend */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.5)}
                                className="rounded-2xl text-white p-6 border border-[#7042f88b] bg-gradient-to-b from-[#0c0c1d] to-transparent"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 text-xl font-bold">
                                    Frontend Technologies
                                </span>
                                <div className="flex flex-row justify-around flex-wrap my-6 gap-5 items-center">
                                    {Frontend_skill.map((image, index) => (
                                        <SkillDataProvider
                                            key={index}
                                            src={image.Image}
                                            width={image.width}
                                            height={image.height}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    {/* Backend */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.5)}
                                className="rounded-2xl text-white p-6 border border-[#7042f88b] bg-gradient-to-b from-[#0c0c1d] to-transparent"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 text-xl font-bold">
                                    Backend & Databases
                                </span>
                                <div className="flex flex-row justify-around flex-wrap my-6 gap-5 items-center">
                                    {Backend_skill.map((image, index) => (
                                        <SkillDataProvider
                                            key={index}
                                            src={image.Image}
                                            width={image.width}
                                            height={image.height}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    {/* Dev Tools */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.5)}
                                className="rounded-2xl text-white p-6 border border-[#7042f88b] bg-gradient-to-b from-[#0c0c1d] to-transparent"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 text-xl font-bold">
                                    Dev Tools & Deployment
                                </span>
                                <div className="flex flex-row justify-around flex-wrap my-6 gap-5 items-center">
                                    {DevTools.map((image, index) => (
                                        <SkillDataProvider
                                            key={index}
                                            src={image.Image}
                                            width={image.width}
                                            height={image.height}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    {/* Libraries */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.5)}
                                className="rounded-2xl text-white p-6 border border-[#7042f88b] bg-gradient-to-b from-[#0c0c1d] to-transparent"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 text-xl font-bold">
                                    Libraries & Frameworks
                                </span>
                                <div className="flex flex-row justify-around flex-wrap my-6 gap-5 items-center">
                                    {libraries.map((image, index) => (
                                        <SkillDataProvider
                                            key={index}
                                            src={image.Image}
                                            width={image.width}
                                            height={image.height}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </div>
            </div>

            {/* Background Video */}
            <div className="hidden md:block w-full h-full absolute top-24 -z-10">
                <div className="w-full h-full opacity-20 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
