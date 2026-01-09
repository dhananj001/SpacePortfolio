"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import { HiOutlineExternalLink, HiOutlineArrowRight } from "react-icons/hi";

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        description: "Complete e-commerce solution with 200% increase in sales within the first quarter. Custom checkout flow reduced cart abandonment by 45%.",
        image: "/NextWebsite.png",
        results: ["+200% Sales", "-45% Cart Abandonment"],
        technologies: ["Next.js", "Stripe", "PostgreSQL"],
        link: "#"
    },
    {
        title: "SaaS Dashboard",
        category: "Web Application",
        description: "Real-time analytics dashboard for a fintech startup. Helped secure $2M in funding with an impressive MVP demo.",
        image: "/CardImage.png",
        results: ["$2M Funding", "10K Users"],
        technologies: ["React", "Node.js", "AWS"],
        link: "#"
    },
    {
        title: "Lead Generation Site",
        category: "Marketing Website",
        description: "High-converting landing page system that generates 50+ qualified leads per week for a B2B software company.",
        image: "/SpaceWebsite.png",
        results: ["50+ Leads/Week", "340% Conversion"],
        technologies: ["Next.js", "Tailwind", "Vercel"],
        link: "#"
    }
];

const Projects = () => {
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
                                <span className="Welcome-text text-[14px]">Our Portfolio</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                                Case Studies That
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                                    {" "}Prove Results
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Real projects with measurable outcomes. See how we&apos;ve helped businesses
                                transform their digital presence and achieve their goals.
                            </p>
                        </motion.div>
                    )}
                </InView>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <InView key={index} triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={index % 2 === 0 ? slideInFromLeft(0.3 * (index + 1)) : slideInFromRight(0.3 * (index + 1))}
                                    className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861] hover:border-purple-500/50 transition-all duration-300"
                                >
                                    {/* Project Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1d] to-transparent" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="py-1 px-3 rounded-full bg-purple-500/20 text-purple-300 text-sm border border-purple-500/30">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                                            {project.description}
                                        </p>

                                        {/* Results */}
                                        <div className="flex gap-2 mb-4">
                                            {project.results.map((result, i) => (
                                                <span
                                                    key={i}
                                                    className="py-1 px-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white text-sm font-semibold"
                                                >
                                                    {result}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs py-1 px-2 rounded bg-[#7042f81a] text-purple-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Link */}
                                        <a
                                            href={project.link}
                                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                                        >
                                            View Case Study
                                            <HiOutlineExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    ))}
                </div>

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
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 py-4 px-8 button-primary text-white cursor-pointer rounded-full font-semibold border border-[#7042f88b] hover:scale-105 transition-all"
                            >
                                Start Your Project
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