"use client"

//Imports
import Link from "next/link";
import '@styles/globals.css';
import Image from "next/image";
import {FaRegWindowMaximize, FaCircle, FaInstagram, FaFacebook, FaTwitterSquare} from 'react-icons/fa';
import { IconContext } from "react-icons";


const LandingPage = () => {
  return (
    <section className="main">
        <div className="landing_container section-1">
            <div className="left_container">
                <p className="head_text">
                    Momentum starts with

                    <span className="head_text_span"> strategic marketing</span>
                </p>

                <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                </p>

                <nav className="button_container">
                    <Link href="/" className="max-md:pt-6">
                        <button 
                            type="button" 
                            onClick={() => {}}
                            className="outline_btn_2"                       
                        >
                            Free Quote
                        </button>
                    </Link>
                    
                    <Link href="/" className="text-primary-blue lg:text-lg max-md:text-lg max-sm:text-base max-md:pt-6">
                        What can we do for you?                
                    </Link>

                </nav>
            </div>

            <div className="right_container">
                <div className="!relative block image-container-container">
                    <div className="image-container absolute">

                        <IconContext.Provider value={{ className: "IconSizes" }}>
                            <div className="landing_pills pill-1 mt-2 drop-shadow-lg">
                                <FaRegWindowMaximize />
                                <p className="lg:pl-4 md:pl-2">Get a Website</p>
                            </div>
                        </IconContext.Provider>

                        <IconContext.Provider value={{ className: "IconSizes" }}>
                            <div className="landing_pills pill-2 drop-shadow-lg">
                                <ul>
                                    <li className="flex pb-2">
                                        <FaCircle style={{color: '#0095FA'}} />
                                        <p className="lg:pl-4 md:pl-2">Boost reputation</p>
                                    </li>

                                    <li className="flex">
                                        <FaCircle style={{color: '#DBA11C'}} /> 
                                        <p className="lg:pl-4 md:pl-2">Improve rankings</p>
                                    </li>
                                </ul>
                            </div>
                        </IconContext.Provider>   

                        <Image 
                            src="/assets/images/HappyMan.png"
                            alt="Markedeen Landing Page Image"
                            width={540}
                            height={480}
                            priority= 'true'
                            className="landing-image"
                            
                        />

                        <IconContext.Provider value={{ className: "IconSizes" }}>
                            <div className="landing_pills gap-4 py-4 pill-3 drop-shadow-lg">
                                <FaInstagram />
                                <FaFacebook />
                                <FaTwitterSquare />
                            </div>
                        </IconContext.Provider>

                        <IconContext.Provider value={{ className: "IconSizes" }}>
                            <div className="landing_pills pill-4 py-2 drop-shadow-lg">
                                <ul>
                                    <li className="flex pb-2">
                                        <FaCircle style={{color: '#0095FA'}} /> 
                                        <p className="lg:pl-4 md:pl-2">Boost social presence</p>
                                    </li>

                                    <li className="flex">
                                        <FaCircle style={{color: '#DBA11C'}} /> 
                                        <p className="lg:pl-4 md:pl-2">Drive more sales</p>
                                    </li>
                                </ul>
                            </div>
                        </IconContext.Provider>   
                    </div>
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default LandingPage