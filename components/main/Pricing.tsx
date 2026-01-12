"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import { HiOutlineCheck, HiOutlineLightningBolt, HiOutlineSparkles } from "react-icons/hi";

type Currency = "USD" | "GBP" | "INR";

const currencies: { code: Currency; symbol: string; rate: number; label: string }[] = [
    { code: "USD", symbol: "$", rate: 1, label: "USD" },
    { code: "GBP", symbol: "£", rate: 0.79, label: "GBP" },
    { code: "INR", symbol: "₹", rate: 83.5, label: "INR" },
];

const pricingPlans = [
    {
        name: "Foundation",
        description: "For businesses ready to establish a high-performance digital presence.",
        basePrice: 999,
        period: "project",
        popular: false,
        features: [
            "High-Performance Landing Page",
            "Mobile-First Responsive Design",
            "Core Web Vitals Optimization",
            "Basic SEO Configuration",
            "Contact Form Integration",
            "2 Rounds of Revisions",
            "30-Day Post-Launch Support",
        ],
        deliveryTime: "2-3 weeks",
        cta: "Start Project",
    },
    {
        name: "Growth Engine",
        description: "Complete digital infrastructure for scaling businesses.",
        basePrice: 4999,
        period: "project",
        popular: true,
        features: [
            "Multi-Page Web Application",
            "Custom CMS Integration",
            "Advanced Analytics Dashboard",
            "Lead Capture System",
            "CRM Integration (HubSpot/Salesforce)",
            "Email Automation Setup",
            "Performance Monitoring",
            "5 Rounds of Revisions",
            "90-Day Priority Support",
        ],
        deliveryTime: "4-6 weeks",
        cta: "Schedule Discovery",
    },
    {
        name: "Enterprise",
        description: "Full-scale digital transformation with ongoing optimization.",
        basePrice: 14999,
        period: "project",
        popular: false,
        features: [
            "Everything in Growth Engine",
            "Custom SaaS/Web Application",
            "Advanced Business Intelligence",
            "Automated Lead Ecosystem",
            "Multi-Platform Integrations",
            "Custom API Development",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "12-Month Retainer Support",
            "Quarterly Performance Reviews",
        ],
        deliveryTime: "8-12 weeks",
        cta: "Book Consultation",
    },
];

const formatPrice = (price: number, currency: typeof currencies[0]) => {
    const convertedPrice = Math.round(price * currency.rate);

    if (currency.code === "INR") {
        // Format Indian Rupees with lakhs notation
        return `${currency.symbol}${convertedPrice.toLocaleString("en-IN")}`;
    }

    return `${currency.symbol}${convertedPrice.toLocaleString()}`;
};

const Pricing = () => {
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>("USD");
    const currentCurrency = currencies.find(c => c.code === selectedCurrency)!;

    return (
        <section id="pricing" className="py-16 relative">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                {/* Section Header */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-center mb-8"
                        >
                            <span className="Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9] inline-flex items-center mb-4">
                                <span className="Welcome-text text-[14px]">Investment Tiers</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                                Transparent
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                                    {" "}Premium{" "}
                                </span>
                                Pricing
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Enterprise-grade solutions with clear, upfront investment.
                                No hidden fees. No surprises. Just results.
                            </p>
                        </motion.div>
                    )}
                </InView>

                {/* Currency Selector */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="flex justify-center mb-6"
                        >
                            <div className="inline-flex items-center p-1.5 rounded-full bg-[#0c0c1d] border border-[#7042f861]">
                                {currencies.map((currency) => (
                                    <button
                                        key={currency.code}
                                        onClick={() => setSelectedCurrency(currency.code)}
                                        className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCurrency === currency.code
                                                ? "text-white"
                                                : "text-gray-400 hover:text-gray-200"
                                            }`}
                                    >
                                        {selectedCurrency === currency.code && (
                                            <motion.div
                                                layoutId="currencyBg"
                                                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full"
                                                transition={{ type: "spring", duration: 0.5 }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center gap-2">
                                            <span className="text-xl font-bold">{currency.symbol}</span>
                                            {currency.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </InView>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {pricingPlans.map((plan, index) => (
                        <InView key={plan.name} triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={
                                        index === 0
                                            ? slideInFromLeft(0.3)
                                            : index === 2
                                                ? slideInFromRight(0.3)
                                                : slideInFromBottom
                                    }
                                    className={`relative p-8 rounded-2xl flex flex-col h-full ${plan.popular
                                            ? "bg-gradient-to-b from-[#1a1a3e] to-[#0c0c1d] border-2 border-purple-500/50"
                                            : "bg-gradient-to-b from-[#0c0c1d] to-transparent border border-[#7042f861]"
                                        } transition-all duration-300 hover:border-purple-500/50`}
                                >
                                    {/* Popular Badge */}
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full text-white text-sm font-semibold shadow-lg shadow-indigo-500/25">
                                                <HiOutlineLightningBolt className="w-4 h-4" />
                                                Most Popular
                                            </div>
                                        </div>
                                    )}

                                    {/* Plan Header */}
                                    <div className="text-center mb-8 pt-4">
                                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                        <p className="text-gray-400 text-sm h-12">{plan.description}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="text-center mb-8">
                                        <div className="flex items-baseline justify-center gap-2">
                                            <span className="text-4xl font-bold text-white">{currentCurrency.symbol}</span>
                                            <motion.span
                                                key={`${plan.name}-${selectedCurrency}`}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-5xl md:text-6xl font-bold text-white"
                                            >
                                                {formatPrice(plan.basePrice, currentCurrency).replace(currentCurrency.symbol, "")}
                                            </motion.span>
                                        </div>
                                        <div className="text-gray-500 mt-2">per {plan.period}</div>
                                        <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs">
                                            <HiOutlineSparkles className="w-3 h-3" />
                                            Delivery: {plan.deliveryTime}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center mt-0.5">
                                                    <HiOutlineCheck className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href="#contact"
                                        className={`block w-full py-4 px-6 text-center rounded-full font-semibold text-lg transition-all hover:scale-105 mt-auto ${plan.popular
                                                ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:shadow-lg hover:shadow-indigo-500/25"
                                                : "border border-[#7042f88b] text-white hover:border-purple-500"
                                            }`}
                                    >
                                        {plan.cta}
                                    </a>
                                </motion.div>
                            )}
                        </InView>
                    ))}
                </div>

                {/* Bottom Note */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromBottom}
                            className="text-center mt-16"
                        >
                            <p className="text-gray-500 text-sm mb-4">
                                Need a custom solution? Enterprise contracts and retainer agreements available.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                            >
                                Contact us for custom pricing
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default Pricing;