"use client";

import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gradient-to-t from-[#0c0c1d] to-transparent pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full blur-sm opacity-60"></div>
                                <div className="relative w-8 h-8 bg-[#030014] rounded-full flex items-center justify-center border border-purple-500/50">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold text-lg">N</span>
                                </div>
                            </div>
                            <span className="font-bold text-xl text-gray-300">
                                Nebula<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">Stack</span>
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Premium web development agency crafting high-converting websites that turn visitors into customers.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#7042f81a] flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                <RxLinkedinLogo className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#7042f81a] flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                <RxTwitterLogo className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#7042f81a] flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                <RxInstagramLogo className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#7042f81a] flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                <RxGithubLogo className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">Web Development</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">UI/UX Design</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">E-Commerce</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">Conversion Optimization</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">SEO & Performance</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">Web Applications</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">Portfolio</a></li>
                            <li><a href="#testimonials" className="text-gray-400 hover:text-purple-400 transition-colors">Testimonials</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <HiOutlineMail className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-400">hello@nebulastack.io</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <HiOutlinePhone className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <HiOutlineLocationMarker className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-400">Remote-First, Serving Clients Worldwide</span>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h4 className="text-white font-semibold mb-3">Get Free Tips</h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 rounded-lg bg-[#0c0c1d] border border-[#7042f861] text-white text-sm focus:border-purple-500 focus:outline-none"
                                />
                                <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:scale-105 transition-transform">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#7042f861] pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            &copy; {currentYear} NebulaStack. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-gray-500">
                            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;