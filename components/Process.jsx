"use client"

//imports
import '@styles/globals.css';
import { useEffect } from 'react';
import Image from 'next/image';

import {FaChartBar, FaEye, FaCheck, FaAward, FaSmile, FaSortAmountUp, FaHandshake, FaChalkboardTeacher, FaFilter, FaHandHoldingUsd} from 'react-icons/fa';

import { IconContext } from "react-icons";

const Process = () => {
  return (
    <section className='main' id='Process'>
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
                                <FaChartBar />
                            </div>
                        </div>
                    </IconContext.Provider>

                    <p className='icon_text'>
                        Strategic Consultation
                    </p>

                    <p className="desc-2">
                        Client Discovery:  
                    </p>

                    <p className="desc-2">
                        Market Analysis: 
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <Image 
                    src="/assets/images/Curved_solid_arrow.svg"
                    alt="Markedeen Landing Page Image"
                    width={50}
                    height={50}
                    priority= 'true'    
                    className='arrow'                        
                />
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
                        Customized Strategy Development
                    </p>

                    <p className="desc-2">
                        Tailored Approach:
                    </p>

                    <p className="desc-2">
                        Platform Selection:
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <Image 
                    src="/assets/images/Curved_solid_arrow.svg"
                    alt="Markedeen Landing Page Image"
                    width={50}
                    height={50}
                    priority= 'true'    
                    className='arrow_2'                        
                />
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
                        Campaign Setup
                    </p>

                    <p className="desc-2">
                        Precise Targeting:
                    </p>

                    <p className="desc-2">
                        Ad Creation:
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <Image 
                    src="/assets/images/Curved_solid_arrow.svg"
                    alt="Markedeen Landing Page Image"
                    width={50}
                    height={50}
                    priority= 'true'    
                    className='arrow'                        
                />
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
                        Website Integration
                    </p>

                    <p className="desc-2">
                        Landing Page Development:
                    </p>

                    <p className="desc-2">
                        CTA Implementation:
                    </p>
                </div>
            </div>

            <div className='services_item'>
                <Image 
                    src="/assets/images/Curved_solid_arrow.svg"
                    alt="Markedeen Landing Page Image"
                    width={50}
                    height={50}
                    priority= 'true'    
                    className='arrow_2'                        
                />
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
                        Maintenance
                    </p>

                    <p className="desc-2">
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Process