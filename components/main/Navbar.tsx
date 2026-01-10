import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="w-screen md:w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 m-0 max-w-[1920px] items-center rounded-full">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0px] md:px-[10px]">
                <a
                    href="#home"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full blur-sm opacity-60"></div> */}
                        <Image src="/nebulalogoshort.png" alt="Nebula Logo" width={32} height={32} className="relative w-8 h-8 object-contain" />
                    </div>

                    <span className="font-bold ml-[10px] block text-gray-300 z-50 md:text-lg text-xl">
                        Nebula<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">Stack</span>
                    </span>
                </a>

                <div className="hidden w-auto lg:w-auto h-full md:flex flex-row items-center justify-between md:mx-auto lg:pr-12">
                    <div className="flex items-center justify-between gap-6 w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#services" className="cursor-pointer hover:text-purple-400 transition-colors">
                            Services
                        </a>
                        <a href="#about" className="cursor-pointer hover:text-purple-400 transition-colors">
                            About
                        </a>
                        <a href="#projects" className="cursor-pointer hover:text-purple-400 transition-colors">
                            Portfolio
                        </a>
                        <a href="#testimonials" className="cursor-pointer hover:text-purple-400 transition-colors">
                            Reviews
                        </a>
                        <a href="#contact" className="cursor-pointer hover:text-purple-400 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>

                <a
                    href="#contact"
                    className="hidden md:flex py-2 px-6 button-primary text-center text-white cursor-pointer rounded-full font-semibold hover:scale-105 transition-transform"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Navbar;