import React, { useRef } from 'react'
import TitleCard from "../components/TitleCard.jsx";
import {techStackImgs} from "../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillsRef = useRef(null);

    useGSAP(() => {
        // Create a single ScrollTrigger instance instead of one per element
        const scrollTrigger = {
            trigger: "#skills",
            start: "top center",
            // Only animate elements in viewport for better performance
            toggleActions: "play none none reverse"
        };

        // Use a single batch animation with reduced duration and stagger
        gsap.fromTo(".tech-card", 
        {
           y: 30, // Reduced movement
           opacity: 0,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6, // Reduced duration
            stagger: 0.1, // Reduced stagger
            ease: "power1.out", // Simpler easing
            scrollTrigger
        });
    }, [])

    return (
        <section id="skills" ref={skillsRef} className="text-center section-padding md:mt-40 mt-20 xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleCard title={"How I Can Contribute & My Key Skills"} sub={"🤝 What I Bring to the Table"} />

                <div className="tech-grid">
                    {techStackImgs.map((skill, index) => (
                        <div className="card-border tech-card group overflow-hidden xl:rounded-full rounded-lg">
                            <div className="tech-card-animated-bg "/>
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <img src={skill.imgPath} key={index} className="img-fluid" alt={skill.name} />
                                </div>

                                <div className="padding-x w-full">
                                    <p>{skill.name}</p>
                                </div>
                            </div>

                        </div>


                    ))}
                </div>
            </div>



        </section>
    )
}
export default Skills
