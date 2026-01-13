"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const testimonials = [
    {
        name: "Vikram Patel",
        role: "Owner, Tipsybbe",
        content: "When we approached Dhananjay for our restaurant website, we wanted something that looked modern and worked seamlessly. The reservation system is a game-changer. We've cut down booking times from 15 minutes to instant, and our customers love the experience. The entire platform feels premium.",
        avatar: "V",
        rating: 5,
        result: "Instant Bookings"
    },
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
                                <span className="Welcome-text text-[14px]">Why 47 Businesses Chose Us This Quarter</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                                They Had The Same
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                                    {" "}Doubts You Have
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                &ldquo;Is it worth the investment?&rdquo; &ldquo;Will it actually work for my business?&rdquo;
                                Here&apos;s what they discovered after working with us.
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
                                    <div className="absolute -top-3 -right-3 py-1 px-4 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full text-white text-sm font-semibold pointer-events-none">
                                        {testimonial.result}
                                    </div>

                                    {/* Author - Top */}
                                    <div className="flex items-center gap-4 mb-6">
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

                                    {/* Content */}
                                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </p>

                                    {/* Stars - Bottom */}
                                    <div className="flex gap-1 text-yellow-400">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    ))}
                </div>

                {/* Journey CTA */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-center mt-16"
                        >
                            <p className="text-gray-500 mb-4">Want to see the work behind these results?</p>
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 py-4 px-8 button-primary text-white cursor-pointer rounded-full font-semibold border border-[#7042f88b] hover:scale-105 transition-all"
                            >
                                Explore Our Case Studies
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

export default Testimonials;
