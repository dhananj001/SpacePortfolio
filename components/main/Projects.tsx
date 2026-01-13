"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import { HiOutlineExternalLink, HiOutlineArrowRight } from "react-icons/hi";

const projects = [
    {
        title: "Tipsybbe - Modern Hospitality Platform",
        category: "Full-Stack Web Application",
        description: "A modern Next.js restaurant & bar website featuring a sophisticated table reservation system, dynamic menu showcase, and customer testimonials. Built with pixel-perfect design, seamless UX, and integrated booking engine that streamlines the dining experience.",
        images: [
            "/tipsybbe_homepage.png",
            "/tipsybbe_insidepage.png",
            "/tipsybbe_menusection.png",
            "/tipsybbe_tablereservationform.png",
            "/tipsybbe_testimonials.png"
        ],
        results: ["+340% Conversion", "Real-time Bookings", "Mobile-First Design"],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PostgreSQL", "React Hook Form"],
        link: "#"
    }
];

const Projects = () => {
    const project = projects[0];

    return (
        <section
            className="py-20 relative"
            id="projects"
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
                                <span className="Welcome-text text-[14px]">Proof, Not Promises</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                                See The Numbers
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                                    {" "}Before You Decide
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                We don&apos;t hide behind vague claims. Every metric here is verified.
                                These businesses took the leap — and the ROI speaks for itself.
                            </p>
                        </motion.div>
                    )}
                </InView>

                {/* Featured Project */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.2)}
                            className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861] hover:border-purple-500/50 transition-all duration-300 mb-12"
                        >
                            {/* Desktop Video Layout */}
                            <div className="hidden lg:block">
                                <div className="relative flex justify-center py-12">
                                    {/* MacBook Mockup */}
                                    <div className="relative z-30">
                                        {/* MacBook Body */}
                                        <div className="relative w-[600px] h-[380px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl">
                                            {/* Screen */}
                                            <div className="relative w-full h-full bg-black rounded-xl overflow-hidden border border-gray-700">
                                                <video
                                                    className="w-full h-full object-cover rounded-xl"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    preload="metadata"
                                                    poster={project.images[0]}
                                                    style={{
                                                        imageRendering: 'optimizeQuality',
                                                        transform: 'translateZ(0)',
                                                        backfaceVisibility: 'hidden',
                                                        WebkitFontSmoothing: 'antialiased',
                                                        MozOsxFontSmoothing: 'grayscale',
                                                        WebkitTransform: 'translateZ(0)',
                                                        WebkitBackfaceVisibility: 'hidden',
                                                        WebkitPerspective: '1000px',
                                                        willChange: 'transform',
                                                        contain: 'layout style paint'
                                                    }}
                                                >
                                                    <source src="/tipsybbe_desktopviewvideo.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                                {/* Screen Reflection */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl pointer-events-none" />
                                            </div>

                                            {/* MacBook Base */}
                                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg border-x border-b border-gray-600"></div>

                                            {/* Keyboard Area */}
                                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-4 bg-gray-800 rounded-b-lg border border-gray-600"></div>
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute -top-6 -left-6 w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
                                        <div className="absolute -bottom-8 -right-8 w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-bounce"></div>
                                        <div className="absolute top-4 -right-12 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Video Layout */}
                            <div className="lg:hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                                    {/* Video Section */}
                                    <div className="relative flex justify-center">
                                        {/* iPhone Frame */}
                                        <div className="relative z-30">
                                            {/* iPhone Body */}
                                            <div className="relative w-64 h-[500px] bg-black rounded-[2.5rem] p-2 shadow-2xl border-4 border-gray-800">
                                                {/* Screen */}
                                                <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden">
                                                    <video
                                                        className="w-full h-full object-cover rounded-[2rem]"
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        preload="metadata"
                                                        poster={project.images[0]}
                                                        style={{
                                                            imageRendering: 'optimizeQuality',
                                                            transform: 'translateZ(0)',
                                                            backfaceVisibility: 'hidden',
                                                            WebkitFontSmoothing: 'antialiased',
                                                            MozOsxFontSmoothing: 'grayscale',
                                                            WebkitTransform: 'translateZ(0)',
                                                            WebkitBackfaceVisibility: 'hidden',
                                                            WebkitPerspective: '1000px',
                                                            willChange: 'transform',
                                                            contain: 'layout style paint'
                                                        }}
                                                    >
                                                        <source src="/tipsybbe_mobileviewrecording.mp4" type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                    {/* Screen Reflection */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[2rem] pointer-events-none" />
                                                </div>

                                                {/* Home Indicator */}
                                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
                                            </div>

                                            {/* Side Buttons */}
                                            <div className="absolute -right-1 top-20 w-1 h-12 bg-gray-700 rounded-r"></div>
                                            <div className="absolute -right-1 top-36 w-1 h-8 bg-gray-700 rounded-r"></div>
                                            <div className="absolute -left-1 top-24 w-1 h-16 bg-gray-700 rounded-l"></div>

                                            {/* Top Speaker */}
                                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-800 rounded-full"></div>

                                            {/* Camera */}
                                            <div className="absolute top-4 right-16 w-3 h-3 bg-gray-600 rounded-full border border-gray-500"></div>
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
                                        <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-bounce"></div>
                                    </div>

                                    {/* Info Section */}
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Results Grid */}
                                        <div className="grid grid-cols-1 gap-4 mb-6 py-6 border-y border-[#7042f861]">
                                            {project.results.map((result, i) => (
                                                <div key={i} className="text-center">
                                                    <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 mb-1">
                                                        {result}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Technologies */}
                                        <div className="mb-6">
                                            <p className="text-gray-400 text-sm mb-3 uppercase tracking-widest">Technologies Used</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-sm py-2 px-4 rounded-full bg-[#7042f81a] text-purple-300 border border-[#7042f861]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Link */}
                                        <a
                                            href={project.link}
                                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                                        >
                                            View Full Case Study
                                            <HiOutlineExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details - Desktop Only */}
                            <div className="hidden lg:block p-8 md:p-12">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                    {project.description}
                                </p>

                                {/* Results Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 py-8 border-y border-[#7042f861]">
                                    {project.results.map((result, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 mb-2">
                                                {result}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <p className="text-gray-400 text-sm mb-3 uppercase tracking-widest">Technologies Used</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-sm py-2 px-4 rounded-full bg-[#7042f81a] text-purple-300 border border-[#7042f861]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Link */}
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg font-semibold"
                                >
                                    View Full Case Study
                                    <HiOutlineExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </InView>

                {/* View All CTA */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-center mt-12"
                        >
                            <p className="text-gray-500 mb-4">Ready to see what this investment looks like?</p>
                            <a
                                href="#pricing"
                                className="inline-flex items-center gap-2 py-4 px-8 button-primary text-white cursor-pointer rounded-full font-semibold border border-[#7042f88b] hover:scale-105 transition-all"
                            >
                                View Transparent Pricing
                                <HiOutlineArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    )}
                </InView>
            </div>
        </section>
    );
};

export default Projects;