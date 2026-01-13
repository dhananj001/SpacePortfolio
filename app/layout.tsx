import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
    title: "NebulaStack | High-Converting Websites That Generate Leads",
    description: "We build stunning, conversion-optimized websites that turn visitors into customers. Premium web development agency specializing in lead generation machines.",
    keywords: "web development agency, high converting websites, lead generation, web design, UI/UX design, digital consultancy, performance optimization",
    authors: [{ name: "NebulaStack" }],
    creator: "NebulaStack",
    publisher: "NebulaStack",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://nebulastack.dev'), // Replace with your actual domain
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "NebulaStack | High-Converting Websites That Generate Leads",
        description: "We build stunning, conversion-optimized websites that turn visitors into customers. Premium web development agency specializing in lead generation machines.",
        url: 'https://nebulastack.dev', // Replace with your actual domain
        siteName: 'NebulaStack',
        images: [
            {
                url: '/og-image.png', // Add this image to your public folder
                width: 1200,
                height: 630,
                alt: 'NebulaStack - High-Converting Websites',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "NebulaStack | High-Converting Websites That Generate Leads",
        description: "We build stunning, conversion-optimized websites that turn visitors into customers.",
        images: ['/og-image.png'], // Add this image to your public folder
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-site-verification-code', // Add your Google verification code
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${spaceGrotesk.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-[1920px] mx-auto`}
            >
                <StarsCanvas />
                <ErrorBoundary>
                    <Navbar />
                    {children}
                    <Footer />
                </ErrorBoundary>
            </body>
        </html>
    );
}
