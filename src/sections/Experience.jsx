import React from 'react'
import TitleCard from "../components/TitleCard.jsx";
import {expCards} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                duration: 1,
                opacity: 0,
                transformOrigin: "left left",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%"
                }
            })
        })

        gsap.to(".timeline", {
            transformOrigin: "bottom bottom",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "70% center",
                onUpdate: (self) => {
                    gsap.to(".timeline", {
                        scaleY: 1- self.progress
                    })
                }
            }
        })

        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                duration: 1,
                opacity: 0,
                transformOrigin: "bottom bottom",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 60%"
                }
            })
        })
    }, [])


    return (
        <section id="experience" className="text-center section-padding md:mt-40 mt-20 xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleCard title={"Professional Experience"} sub={"💼 My Career Overview"} />

                <div className='mt-32 relative'>
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards.map((card, index) => (
                            <div key={index} className="exp-card-wrapper">
                                <div className="xl:w-2/6">
                                    <GlowCard card={card} index={index}  >
                                        <div>
                                            <img src={card.imgPath} alt={card.title} />
                                        </div>
                                    </GlowCard>
                                </div>

                                <div className="xl:w-4/6 ">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline"/>
                                            <div className="gradient-line h-full w-1"/>
                                        </div>
                                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo" >
                                                <img src={card.logoPath} alt='logo' className=" md:size-10 size-5" />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-3xl text-start">{card.title}</h1>
                                                <p className="my-3 text-white-50 text-start flex">
                                                   <img src="/images/calendar.svg" alt="calender"  className="mr-2" />  {card.date}
                                                </p>

                                                <p className="italics text-[#839cb5] text-start">
                                                    Responsibilities
                                                </p>

                                                <ul className="list-disc ms-5 mt-5 flex flex-col text-white-50 gap-5">
                                                    {card.responsibilities.map((responsibility, index) => (
                                                        <li key={index} className="text-start text-lg">
                                                            {responsibility}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </section>
    )
}
export default Experience
