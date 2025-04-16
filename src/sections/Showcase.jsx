import React, {useRef} from 'react'

export const Showcase = () => {
const showCaseRef = useRef(null)
const propellRef = useRef(null);
const reviewNestRef = useRef(null);
const simplePayrollRef = useRef(null);

    return (
        <div id="work" className="app-showcase" ref={showCaseRef}>
            <div className="w-full">
                <div className="showcase-layout" >
                    <div className="first-project-wrapper" ref={propellRef}>
                        <div className="image-wrapper">
                            <img src='/images/project1.png' alt="Propell CRM" />
                        </div>
                        <div className='text-content'>
                            <h2><a href="https://propell-ten.vercel.app/" target="_blank">All-in-one task management CRM tool</a></h2>
                            <p className="text-white-50 md:text-xl">
                                A comprehensive content management and marketing (CMM) platform designed to streamline the creation, management, and
                                distribution of digital content, built with Angular, TailwindCSS and Javascript.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={reviewNestRef}>
                            <div className="image-wrapper bg-[#DFEDFA]">
                                <img
                                    src="/images/project2.png"
                                    alt="Review Nest"
                                />
                            </div>
                            <h2><a target="_blank" href="https://review-nest-7w4m-git-master-efeaizesogie.vercel.app/">Feedback collection platform</a></h2>
                        </div>
                        <div className="project" ref={simplePayrollRef}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img
                                    src="/images/project3.png"
                                    alt="Simple Payroll"
                                />
                            </div>
                            <h2> <a target="_blank" href="https://simple-payroll.vercel.app/" >One stop payroll service for employers</a> </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
