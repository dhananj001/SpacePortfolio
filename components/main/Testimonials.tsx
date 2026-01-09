"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        content: "NebulaStack transformed our online presence completely. Our conversion rate increased by 340% within the first month. The team understood our vision and delivered beyond expectations.",
        avatar: "S",
        rating: 5,
        result: "+340% Conversions"
    },
    {
        name: "Michael Chen",
        role: "Founder, GrowthLabs",
        content: "Working with NebulaStack was a game-changer. They didn't just build a website; they built a lead generation machine. We've seen consistent 50+ qualified leads per week since launch.",
        avatar: "M",
        rating: 5,
        result: "50+ Leads/Week"
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Director, ScaleUp",
        content: "The attention to detail and focus on conversion optimization is unmatched. Our bounce rate dropped by 60% and time on site doubled. Highly recommend for any serious business.",
        avatar: "E",
        rating: 5,
        result: "-60% Bounce Rate"
    },
    {
        name: "David Park",
        role: "E-commerce Owner",
        content: "Our e-commerce store was struggling until NebulaStack redesigned it. Sales jumped 200% in the first quarter. The checkout flow they created is seamless.",
        avatar: "D",
        rating: 5,
        result: "+200% Sales"
    },
    {
        name: "Lisa Thompson",
        role: "Head of Digital, Innovate Co",
        content: "Professional, responsive, and incredibly talented. They delivered our complex web application on time and under budget. The ongoing support is exceptional.",
        avatar: "L",
        rating: 5,
        result: "On Time & Budget"
    },
    {
        name: "James Wilson",
        role: "Startup Founder",
        content: "From concept to launch in just 4 weeks. NebulaStack helped us validate our idea with a stunning MVP that investors loved. We secured $2M in funding partly due to our web presence.",
        avatar: "J",
        rating: 5,
        result: "$2M Funding"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 relative">
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
                                <span className="Welcome-text text-[14px]">Client Success Stories</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                                What Our
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                                    {" "}Clients Say
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Don&apos;t just take our word for it. Here&apos;s what business owners
                                and founders are saying about working with NebulaStack.
                            </p>
                        </motion.div>
                    )}
                </InView>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <InView key={index} triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={index % 2 === 0 ? slideInFromLeft(0.2 * (index + 1)) : slideInFromRight(0.2 * (index + 1))}
                                    className="relative p-8 rounded-2xl bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861] hover:border-purple-500/50 transition-all duration-300"
                                >
                                    {/* Result Badge */}
                                    <div className="absolute -top-3 -right-3 py-1 px-4 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full text-white text-sm font-semibold">
                                        {testimonial.result}
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4 text-yellow-400">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                                {testimonial.avatar}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-gray-500 text-sm">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
