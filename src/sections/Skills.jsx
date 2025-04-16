import React from 'react'
import TitleCard from "../components/TitleCard.jsx";
import {techStackImgs} from "../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

    useGSAP(() => {
        gsap.fromTo(".tech-card", {
           y: 50,
           opacity: 0,
        },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                }
            })
    })

    return (
        <section id="skills"  className="text-center section-padding md:mt-40 mt-20 xl:px-0">
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
