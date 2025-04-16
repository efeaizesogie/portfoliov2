import React from 'react'
import {logoIconsList} from "../constants/index.js";


const LogoIcon = ({icon}) => {
    return (
        <div className=" flex-center marquee ">
            <img src={icon.imgPath} alt="company icon" />
        </div>
    )
}

const LogoShowcase = () => {

    return (
        <div className="md:my-20 my-5 relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

            <div className="marquee md:h-52 h-26">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon icon={icon} key={index} />
                    ))}

                    {logoIconsList.map((icon, index) => (
                        <LogoIcon icon={icon} key={index} />
                    ))}
                </div>

            </div>
        </div>
    )
}
export default LogoShowcase
