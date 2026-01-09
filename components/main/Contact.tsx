"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 relative">
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
                                <span className="Welcome-text text-[14px]">Let&apos;s Talk</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                                Start Your
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                                    {" "}Project Today
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Ready to transform your digital presence? Fill out the form below
                                and we&apos;ll get back to you within 24 hours with a custom proposal.
                            </p>
                        </motion.div>
                    )}
                </InView>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.5)}
                                className="p-8 rounded-2xl bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861]"
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-300 mb-2 text-sm font-medium">Your Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-[#0c0c1d] border border-[#7042f861] text-white focus:border-purple-500 focus:outline-none transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-[#0c0c1d] border border-[#7042f861] text-white focus:border-purple-500 focus:outline-none transition-colors"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-300 mb-2 text-sm font-medium">Company Name</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-[#0c0c1d] border border-[#7042f861] text-white focus:border-purple-500 focus:outline-none transition-colors"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2 text-sm font-medium">Project Budget</label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-[#0c0c1d] border border-[#7042f861] text-white focus:border-purple-500 focus:outline-none transition-colors"
                                            >
                                                <option value="">Select Budget Range</option>
                                                <option value="5k-10k">$5,000 - $10,000</option>
                                                <option value="10k-25k">$10,000 - $25,000</option>
                                                <option value="25k-50k">$25,000 - $50,000</option>
                                                <option value="50k+">$50,000+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-300 mb-2 text-sm font-medium">Project Details *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl bg-[#0c0c1d] border border-[#7042f861] text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us about your project, goals, and timeline..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white cursor-pointer rounded-xl font-semibold text-lg hover:scale-[1.02] transition-all hover:shadow-lg hover:shadow-indigo-500/25"
                                    >
                                        Send Message & Get Free Quote
                                    </button>

                                    <p className="text-center text-gray-500 text-sm">
                                        By submitting, you agree to our privacy policy. We&apos;ll never share your information.
                                    </p>
                                </form>
                            </motion.div>
                        )}
                    </InView>

                    {/* Contact Info */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.5)}
                                className="space-y-8"
                            >
                                {/* Quick Contact Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861] hover:border-purple-500/50 transition-colors">
                                        <HiOutlineMail className="w-8 h-8 text-purple-400 mb-4" />
                                        <h3 className="text-white font-semibold mb-1">Email Us</h3>
                                        <p className="text-gray-400 text-sm">hello@nebulastack.io</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861] hover:border-purple-500/50 transition-colors">
                                        <HiOutlinePhone className="w-8 h-8 text-cyan-400 mb-4" />
                                        <h3 className="text-white font-semibold mb-1">Call Us</h3>
                                        <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861] hover:border-purple-500/50 transition-colors">
                                        <HiOutlineLocationMarker className="w-8 h-8 text-purple-400 mb-4" />
                                        <h3 className="text-white font-semibold mb-1">Location</h3>
                                        <p className="text-gray-400 text-sm">Remote-First, Global</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861] hover:border-purple-500/50 transition-colors">
                                        <HiOutlineClock className="w-8 h-8 text-cyan-400 mb-4" />
                                        <h3 className="text-white font-semibold mb-1">Response Time</h3>
                                        <p className="text-gray-400 text-sm">Within 24 hours</p>
                                    </div>
                                </div>

                                {/* FAQ Preview */}
                                <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861]">
                                    <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-gray-300 font-medium mb-2">How long does a typical project take?</h4>
                                            <p className="text-gray-500 text-sm">Most projects are completed within 4-8 weeks, depending on complexity and scope.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-300 font-medium mb-2">Do you offer ongoing support?</h4>
                                            <p className="text-gray-500 text-sm">Yes! We offer maintenance packages and dedicated support for all our clients.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-300 font-medium mb-2">What&apos;s included in the free consultation?</h4>
                                            <p className="text-gray-500 text-sm">A 30-minute call to discuss your goals, review your current site, and provide a custom roadmap.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Guarantee Badge */}
                                <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-[#7042f861] text-center">
                                    <div className="text-4xl mb-3">🛡️</div>
                                    <h3 className="text-white font-bold text-lg mb-2">100% Satisfaction Guarantee</h3>
                                    <p className="text-gray-400 text-sm">
                                        We&apos;re confident in our work. If you&apos;re not happy with the results,
                                        we&apos;ll work until you are — or your money back.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </div>
            </div>
        </section>
    );
};

export default Contact;
