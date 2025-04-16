import React from 'react'

const TitleCard = ({title, sub}) => {
    return (
        <div className="flex flex-col items-center gap-5 ">
            <div className="hero-badge">
                <p>{sub}</p>
            </div>
            <h1 className="font-semibold md:text-5xl text-3xl text-center">{title}</h1>
        </div>
    )
}
export default TitleCard
