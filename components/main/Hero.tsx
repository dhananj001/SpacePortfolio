import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative h-full w-full overflow-x-hidden" id="home">
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute md:top-[-500px] lg:top-[-295px] top-[-85px] left-1/2 -translate-x-1/2 z-[0] w-full h-1/3 md:w-full md:h-full md:left-0 md:translate-x-0 object-cover pointer-events-none"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div>
    );
};

export default Hero;
