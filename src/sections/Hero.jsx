import React, { lazy, Suspense } from 'react'
import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"

// Lazy load the 3D component to improve initial load time
const HeroExperience = lazy(() => import("../components/models/hero-models/HeroExperience.jsx"));

const Hero = () => {

    useGSAP(() => {
        // Batch animations to reduce layout thrashing
        const tl = gsap.timeline({
            defaults: {
                ease: "power1.inOut",
            }
        });

        tl.fromTo(
            ".hero-text h1",
            {
                y: 50, opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8, // Slightly reduced duration
                stagger: 0.15, // Slightly reduced stagger
            }
        ).fromTo(
            ".intro-text",
            {
                y: 50, opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8, // Slightly reduced duration
            },
            "-=0.4" // Overlap with previous animation
        )
    }, [])

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="" />
            </div>
            <div className="hero-layout">
                <header className="flex flex-col justify-center w-screen md:w-full md:px-20 px-5 md:z-10 z-99">
                    <div className="flex flex-col gap-7 ">
                        <div className="hero-text">
                            <h1>
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map(({text, imgPath}, index) => (
                                            <span key={index} className="flex items-center pb-2 md:gap-3 gap-1">
                                                <img src={imgPath} alt="person" className="xl:size-12 md:size-10 size-7 rounded-full bg-white-50 md:p-2 p-1" />
                                                <span>{text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>


                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>

                        <p className="text-white-50 z-10 relative md:text-xl pointer-events-none intro-text">
                            Hi, I’m Efeosa, a software developer based in Nigeria with a passion for code.
                        </p>

                        <Button text="See My Work" id="counter" className="md:w-70 md:h-16 w-60 h-12" />
                    </div>
                </header>

                <figure>
                    <div className="hero-3d-layout z-11 touch-auto">
                        <Suspense fallback={<div className="loading-fallback">Loading 3D Experience...</div>}>
                            <HeroExperience />
                        </Suspense>
                    </div>
                </figure>
            </div>

            <AnimatedCounter />
        </section>
    )
}
export default Hero
