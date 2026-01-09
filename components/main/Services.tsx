"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import {
    HiOutlineCode,
    HiOutlineDeviceMobile,
    HiOutlineChartBar,
    HiOutlineShoppingCart,
    HiOutlineCog,
    HiOutlineGlobe
} from "react-icons/hi";

const services = [
    {
        icon: HiOutlineCode,
        title: "Custom Web Development",
        description: "Bespoke websites built with cutting-edge technologies. From simple landing pages to complex web applications.",
        features: ["React/Next.js", "Node.js Backend", "API Integration", "Database Design"]
    },
    {
        icon: HiOutlineDeviceMobile,
        title: "Responsive Design",
        description: "Mobile-first designs that look stunning on every device. 60% of web traffic is mobile - we make sure you capture it.",
        features: ["Mobile Optimization", "Cross-Browser", "Fast Loading", "Touch Friendly"]
    },
    {
        icon: HiOutlineChartBar,
        title: "Conversion Optimization",
        description: "Data-driven designs focused on converting visitors into leads. Every element is strategically placed.",
        features: ["A/B Testing", "Heat Maps", "User Analytics", "Sales Funnels"]
    },
    {
        icon: HiOutlineShoppingCart,
        title: "E-Commerce Solutions",
        description: "Powerful online stores that drive sales. Seamless checkout experiences that reduce cart abandonment.",
        features: ["Shopify/WooCommerce", "Payment Integration", "Inventory Management", "Order Tracking"]
    },
    {
        icon: HiOutlineCog,
        title: "Web Applications",
        description: "Full-stack applications with robust functionality. SaaS platforms, dashboards, and custom tools.",
        features: ["User Authentication", "Real-time Features", "Cloud Hosting", "Scalable Architecture"]
    },
    {
        icon: HiOutlineGlobe,
        title: "SEO & Performance",
        description: "Websites optimized to rank higher and load faster. First-page Google rankings that drive organic traffic.",
        features: ["Technical SEO", "Core Web Vitals", "Content Strategy", "Link Building"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 relative">
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
                                <span className="Welcome-text text-[14px]">What We Offer</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                                Services That
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                    {" "}Drive Results
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                We don&apos;t just build websites — we craft digital experiences that
                                convert visitors into loyal customers and generate consistent leads.
                            </p>
                        </motion.div>
                    )}
                </InView>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <InView key={index} triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={index % 2 === 0 ? slideInFromLeft(0.3 * (index + 1)) : slideInFromRight(0.3 * (index + 1))}
                                    className="group relative p-8 rounded-2xl bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861] hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                                >
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <service.icon className="w-7 h-7 text-purple-400" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature, i) => (
                                            <span
                                                key={i}
                                                className="text-xs py-1 px-3 rounded-full bg-[#7042f81a] text-purple-300 border border-[#7042f861]"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </motion.div>
                            )}
                        </InView>
                    ))}
                </div>

                {/* CTA */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-center mt-16"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 py-4 px-8 bg-gradient-to-r from-purple-500 to-cyan-500 text-white cursor-pointer rounded-full font-semibold text-lg hover:scale-105 transition-all hover:shadow-lg hover:shadow-purple-500/25"
                            >
                                Discuss Your Project
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </motion.div>
                    )}
                </InView>
            </div>
        </section>
    );
};

export default Services;
