import React from 'react'
import Logo from "../components/models/Logo.jsx";
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <section className="footer">
            <div className="footer-container">
                <div className="text-center md:text-start flex flex-col justify-center">
                    <Logo/>
                </div>


                <div className="socials">
                    {socialImgs.map((img, i) => (
                        <a href={img.url} key={i} className="icon" target="_blank">
                            <img src={img.imgPath} alt={img.name}  />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center"><p className="text-xs md:text-end">© {year} Efeosa Aizesogie. All rights reserved.</p></div>

            </div>
        </section>
    )
}
export default Footer
