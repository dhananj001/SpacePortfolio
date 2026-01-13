import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
    metadataBase: new URL('https://nebulastack.in'),
    title: {
        default: "NebulaStack | Premium Web Development Agency | High-Converting Websites",
        template: "%s | NebulaStack - Lead Generation Experts"
    },
    description: "Transform your business with NebulaStack's conversion-optimized websites. We build lead generation machines that turn visitors into customers. Get a free consultation today!",
    keywords: [
        "web development agency India",
        "high converting websites",
        "lead generation websites",
        "web design company",
        "UI/UX design agency",
        "conversion optimization",
        "digital marketing agency",
        "website development services",
        "ecommerce website design",
        "SEO optimized websites",
        "mobile responsive design",
        "web development Bangalore",
        "startup website design",
        "business website development",
        "landing page optimization"
    ],
    authors: [{ name: "NebulaStack Team" }],
    creator: "NebulaStack",
    publisher: "NebulaStack",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    category: "Web Development",
    classification: "Business Services",
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://nebulastack.in',
        title: 'NebulaStack | Premium Web Development Agency | High-Converting Websites',
        description: 'Transform your business with conversion-optimized websites. We build lead generation machines that turn visitors into customers. Free consultation available!',
        siteName: 'NebulaStack',
        images: [
            {
                url: 'https://nebulastack.in/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'NebulaStack - Premium Web Development Agency',
                type: 'image/jpeg',
            },
            {
                url: 'https://nebulastack.in/og-image-square.jpg',
                width: 600,
                height: 600,
                alt: 'NebulaStack Logo',
                type: 'image/jpeg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NebulaStack | Premium Web Development Agency',
        description: 'Transform your business with conversion-optimized websites. We build lead generation machines that turn visitors into customers.',
        creator: '@nebulastack_in',
        site: '@nebulastack_in',
        images: ['https://nebulastack.in/twitter-card.jpg'],
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        other: {
            'msvalidate.01': 'your-bing-verification-code',
        },
    },
    alternates: {
        canonical: 'https://nebulastack.in',
        languages: {
            'en-US': 'https://nebulastack.in',
        },
    },
    other: {
        'google-site-verification': 'your-google-verification-code',
        'msvalidate.01': 'your-bing-verification-code',
        'yandex-verification': 'your-yandex-verification-code',
        'theme-color': '#030014',
        'msapplication-TileColor': '#030014',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
        'apple-mobile-web-app-title': 'NebulaStack',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <JsonLd />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="//www.google-analytics.com" />
                <link rel="dns-prefetch" href="//www.googletagmanager.com" />
            </head>
            <body
                className={`${inter.className} ${spaceGrotesk.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-[1920px] mx-auto`}
            >
                <GoogleAnalytics GA_ID={process.env.NEXT_PUBLIC_GA_ID} />
                <StarsCanvas />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
