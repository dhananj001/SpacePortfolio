import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
    title: "NebulaStack | High-Converting Websites That Generate Leads",
    description: "We build stunning, conversion-optimized websites that turn visitors into customers. Premium web development agency specializing in lead generation machines.",
    keywords: "web development agency, high converting websites, lead generation, web design, UI/UX design",
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
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
