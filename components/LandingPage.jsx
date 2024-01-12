"use client"

//Imports
import { Link } from 'react-scroll';
import Image from "next/image";
import {FaRegWindowMaximize, FaCircle, FaInstagram, FaFacebook, FaTwitterSquare} from 'react-icons/fa';
import { IconContext } from "react-icons";

//Image Imports
import Logo from '../public/assets/images/Markedeen_Logo_2.jpeg';
import MobileLogo from '../public/assets/images/MobileMarkedeen.png';


const LandingPage = () => {
  return (
    <section className="mainSection section-1" id="home">
        <div className="landing_container section-1">
            <div className="left_container max-md:pt-0">

                <div className=' hidden max-md:flex max-md:justify-center max-md:items-center max-md:mb-10'>
                    <Image 
                        src={MobileLogo}
                        alt=""
                        width={540}
                        height={480}
                        priority= 'true'
                    />
                </div>  
    
                <h1 className="head_text max-md:py-12 max-md:!text-center">
                    Unlock your

                    <span className="head_text_span"> Growth Potential</span>
                </h1>

                <Link to="LandingDesc" spy={true} smooth={true} offset={160} duration={500} className=" hidden max-md:pt-40 max-md:flex max-md:justify-center max-md:pt-6 max-md:items-center">
                        <button 
                            type="button" 
                            onClick={() => {}}
                            className="outline_btn_2"                       
                        >
                            Swipe down for more
                        </button>
                    </Link>

                <div className='max-md:flex max-md:items-center max-md:justify-center'>   
                    <div>
                        <p className="desc max-md:pt-72" id='LandingDesc'>
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
                            
                            <Link to="Services" spy={true} smooth={true} offset={-65} duration={500} className=" max-md:hidden text-primary-blue lg:text-lg max-md:text-lg max-sm:text-base max-md:pt-6">
                                What can we do for you?                
                            </Link> 
                        </nav>

                    </div>
                </div>
            </div>

            <div className="right_container max-md:hidden">
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
                            src={Logo}
                            alt=""
                            width={540}
                            height={480}
                            priority= 'true'
                            className="landing-image max-md:hidden"  
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