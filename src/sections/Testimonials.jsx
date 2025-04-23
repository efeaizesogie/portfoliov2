import React from 'react'
import TitleCard from "../components/TitleCard.jsx";
import {testimonials} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";

const Testimonials = () => {
    return (
        <section id="testimonials" className="text-center section-padding md:mt-40 mt-20 xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleCard title={"What People Say About Me?"} sub={"⭐ Customer feedback highlights"} />

                <div className="lg:columns-3 md:columns-2 columns-1 md:mt-20 mt-10 ">
                    {testimonials.map((testimonial, index) => (
                        <GlowCard key={index} card={testimonial} index={index}>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white-50 flex-center">
                                    <img src={testimonial.imgPath} alt={testimonial.name} className="w-10 h-10 " />
                                </div>
                                <div>
                                    <p className="font-bold text-start">{testimonial.name}</p>
                                    <p className="text-white-50 text-start ">{testimonial.mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>


            </div>



        </section>
    )
}
export default Testimonials
