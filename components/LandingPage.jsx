"use client"

//Imports
import { Link } from 'react-scroll';
import '@styles/globals.css';
import Image from "next/image";
import {FaRegWindowMaximize, FaCircle, FaInstagram, FaFacebook, FaTwitterSquare} from 'react-icons/fa';
import { IconContext } from "react-icons";


const LandingPage = () => {
  return (
    <section className="main" id="home">
        <div className="landing_container section-1">
            <div className="left_container">
                <p className="head_text">
                    Unlock your

                    <span className="head_text_span"> growth potential</span>
                </p>

                <p className="desc">
                    Markedeen goes beyond the realms of traditional marketing — we're your end-to-end business growth partner. 
                    From orchestrating compelling advertising campaigns to seamlessly handling backend operations, we take care of every facet of your growth journey. 
                    Our services include diligent follow-ups with customers, meticulous lead qualification, appointment bookings, and managing your Online Reputation. 
                    With Markedeen, you can focus on what you do best — showing up to your appointments and closing leads. Let us handle the rest, 
                    ensuring your business not only thrives but excels in every aspect.
                </p>

                <nav className="button_container">
                    <Link to="Contact" spy={true} smooth={true} offset={-100} duration={500} className="max-md:pt-6">
                        <button 
                            type="button" 
                            onClick={() => {}}
                            className="outline_btn_2"                       
                        >
                            Contact Us
                        </button>
                    </Link>
                    
                    <Link to="Services" spy={true} smooth={true} offset={-100} duration={500} className="text-primary-blue lg:text-lg max-md:text-lg max-sm:text-base max-md:pt-6">
                        What can we do for you?                
                    </Link>

                </nav>
            </div>

            <div className="right_container">
                <div className="!relative block image-container-container">
                    <div className="image_container absolute">

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
                            src="/assets/images/Markedeen_Logo_2.jpeg"
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