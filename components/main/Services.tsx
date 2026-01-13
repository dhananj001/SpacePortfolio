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
        title: "High-Performance Web Architecture",
        description: "Custom-engineered platforms with sub-400ms load times. Built on Next.js, optimized at every layer from CDN to database queries.",
        features: ["Edge Deployment", "SSR/ISR Optimization", "API Architecture", "0.4s Load Times"]
    },
    {
        icon: HiOutlineChartBar,
        title: "Custom Business Intelligence",
        description: "Proprietary dashboards and analytics systems that transform your data into actionable insights. Real-time KPIs that drive decisions.",
        features: ["Custom Dashboards", "Data Pipelines", "Predictive Analytics", "Automated Reporting"]
    },
    {
        icon: HiOutlineCog,
        title: "Automated Lead Ecosystems",
        description: "End-to-end lead capture, qualification, and nurturing systems. CRM integrations that eliminate manual follow-up.",
        features: ["Lead Scoring", "CRM Integration", "Email Automation", "Pipeline Management"]
    },
    {
        icon: HiOutlineDeviceMobile,
        title: "Enterprise Web Applications",
        description: "Full-stack SaaS platforms, internal tools, and client portals. Architected for scale, security, and maintainability.",
        features: ["User Authentication", "Role-Based Access", "Audit Logging", "99.9% Uptime"]
    },
    {
        icon: HiOutlineShoppingCart,
        title: "Revenue Systems & E-Commerce",
        description: "High-converting checkout flows with intelligent upsells. Subscription billing, payment orchestration, and fraud prevention.",
        features: ["Stripe/PayPal", "Subscription Logic", "Cart Recovery", "Revenue Analytics"]
    },
    {
        icon: HiOutlineGlobe,
        title: "Performance & SEO Engineering",
        description: "Technical SEO audits and Core Web Vitals optimization. We engineer pages that rank and convert simultaneously.",
        features: ["Core Web Vitals", "Schema Markup", "Site Architecture", "Speed Optimization"]
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
                                <span className="Welcome-text text-[14px]">The Problem We Solve</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                                Your Competitors Are
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                                    {" "}Stealing Your Leads
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Every second your site takes to load, you lose 7% of conversions. Every lead that bounces
                                goes straight to your competitor. We engineer systems that capture, qualify, and convert — automatically.
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
                            <p className="text-gray-500 mb-4">But don&apos;t take our word for it...</p>
                            <a
                                href="#testimonials"
                                className="inline-flex items-center gap-2 py-4 px-8 bg-gradient-to-r from-indigo-500 to-blue-600 text-white cursor-pointer rounded-full font-semibold text-lg hover:scale-105 transition-all hover:shadow-lg hover:shadow-indigo-500/25"
                            >
                                See What Our Clients Say
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
