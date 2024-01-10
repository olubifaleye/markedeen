"use client"

//imports
import '@styles/globals.css';
import { useEffect } from 'react';
import Image from 'next/image';

import { FaRegImages } from 'react-icons/fa6';
import { GiTeamIdea } from "react-icons/gi";

import { IconContext } from "react-icons";

const Process = () => {
  return (
    <section className='main section-6' id='Process'>
        <div className='top_head_section'>
            <p className="head_text_span">
                What's our process?
            </p>

            <p className="sub_head_text">
                Every client is unique, so we tailor our solutions specifically to you            
            </p>
        </div>

        <div className='process_container'>
            <div className='services_item'>
                <div>
                    <IconContext.Provider value={{ className: "IconSizes" }}>
                        <div className="mt-2 flex-center">
                            <div className='icon'>
                                <GiTeamIdea />
                            </div>
                        </div>
                    </IconContext.Provider>

                    <p className='icon_text'>
                        1) Strategic Consultation
                    </p>

                    <p className="desc-2">
                        We unveil your business vision, audience, and unique strengths. 
                        Additionally, we meticulously research your industry, competitors, and trends, 
                        crafting strategic insights tailored for you.
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <div>
                    <IconContext.Provider value={{ className: "IconSizes" }}>
                        <div className="mt-2 flex-center">
                            <div className='icon'>
                                <FaRegImages />
                            </div>
                        </div>
                    </IconContext.Provider>

                    <p className='icon_text'>
                        2) Customized Strategy Development
                    </p>

                    <p className="desc-2">
                        Shape a digital plan aligned with your goals and industry by choosing the most effective platforms—Google Ads,
                         Facebook, Instagram, Meta, TikTok, Youtube, Email & SMS.
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <div>
                    <IconContext.Provider value={{ className: "IconSizes" }}>
                        <div className="mt-2 flex-center">
                            <div className='icon'>
                                <FaChartBar />
                            </div>
                        </div>
                    </IconContext.Provider>

                    <p className='icon_text'>
                        3) Campaign Setup
                    </p>

                    <p className="desc-2">
                        Define and refine audiences by demographics, interests, and behaviors, 
                        combined with crafted visually appealing, platform-specific ad creatives.
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <div>
                    <IconContext.Provider value={{ className: "IconSizes" }}>
                        <div className="mt-2 flex-center">
                            <div className='icon'>
                                <FaChartBar />
                            </div>
                        </div>
                    </IconContext.Provider>

                    <p className='icon_text'>
                        4) Website Integration
                    </p>

                    <p className="desc-2">
                        Develop custom pages aligned with campaign goals and 
                        implement clear Calls-to-Action for strategic user guidance.
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <div>
                    <IconContext.Provider value={{ className: "IconSizes" }}>
                        <div className="mt-2 flex-center">
                            <div className='icon'>
                                <FaChartBar />
                            </div>
                        </div>
                    </IconContext.Provider>

                    <p className='icon_text'>
                        5) Content Creation
                    </p>

                    <p className="desc-2">
                        Strategic Content Creation: Develop a content plan that aligns with your brand voice 
                        and directly engages your target audience through compelling visuals, videos, and written content.
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <div>
                    <IconContext.Provider value={{ className: "IconSizes" }}>
                        <div className="mt-2 flex-center">
                            <div className='icon'>
                                <FaChartBar />
                            </div>
                        </div>
                    </IconContext.Provider>

                    <p className='icon_text'>
                        6) Data-Driven Optimization
                    </p>

                    <p className="desc-2">
                        Employ analytics tools for real-time campaign and website monitoring. 
                        Conduct A/B testing to refine strategies with data-driven insights
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <div>
                    <IconContext.Provider value={{ className: "IconSizes" }}>
                        <div className="mt-2 flex-center">
                            <div className='icon'>
                                <FaChartBar />
                            </div>
                        </div>
                    </IconContext.Provider>

                    <p className='icon_text'>
                        7) Feedback and Reporting
                    </p>

                    <p className="desc-2">
                        Regularly seek feedback to ensure our strategies align with your evolving business goals. 
                        In addition we provide detailed reports on key performance indicators and campaign outcomes.
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <div>
                    <IconContext.Provider value={{ className: "IconSizes" }}>
                        <div className="mt-2 flex-center">
                            <div className='icon'>
                                <FaChartBar />
                            </div>
                        </div>
                    </IconContext.Provider>

                    <p className='icon_text'>
                        8) Lead Generation and Conversion
                    </p>

                    <p className="desc-2">
                        Place CTAs strategically on landing pages to gather essential data for lead generation. 
                        Moreover, we refine the user journey to maximize conversion rates and drive business growth.
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <div>
                    <IconContext.Provider value={{ className: "IconSizes" }}>
                        <div className="mt-2 flex-center">
                            <div className='icon'>
                                <FaChartBar />
                            </div>
                        </div>
                    </IconContext.Provider>

                    <p className='icon_text'>
                        9) Continuous Improvement
                    </p>

                    <p className="desc-2">
                        Implement continuous improvements to campaigns and strategies based on data insights. 
                        Strategically plan for scalability to accommodate business growth and evolving market dynamics.
                    </p>
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default Process