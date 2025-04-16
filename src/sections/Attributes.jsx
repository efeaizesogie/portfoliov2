import React from 'react'
import {abilities} from "../constants/index.js";

const Attributes = () => {
    return (
        <section className='w-full padding-x-lg'>
            <div className='mx-auto grid-3-cols'>
                {abilities.map((abili, i) =>
                <div className='bg-black-100 rounded-xl border border-[#1C1C21] p-6 flex flex-col gap-4 ' key={i}>

                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img alt={abili.title} src={abili.imgPath} />
                        </div>

                    <h2 className="text-white text-2xl font-semibold mt-2">{abili.title}</h2>
                    <p className="text-white-50 text-lg">{abili.desc}</p>


                </div>
                )}
            </div>
        </section>
    )
}
export default Attributes
