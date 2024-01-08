"use client";

//Allows movement between pages of the app
import Link from "next/link";

import dynamic from 'next/dynamic';

const ScrollLink = dynamic(() => import('react-scroll').then((module) => module.Link), {
  ssr: false,
});

//Auto optimizes images
import Image from "next/image";

//react hooks
import { useState, useEffect, useRef } from 'react';

//React Icons
import { FaBars, FaTimes} from 'react-icons/fa';

const Nav = () => {

    //menu ref
    let menuRef = useRef();

    //states for clicking nav bar icons
    const [clicked, setClicked] = useState(false);

    //function for when nav bar icons are clicked
    const handleClick = () => {
        setClicked(!clicked)
    }

    //function to close navbar when navbar isnt clicked
    useEffect(() => {

        //check if the current ref clicked isnt the nav bar component
        let navHandler = (e) => {

            //if it isnt set clicked to false
            if(!menuRef.current.contains(e.target)){
                setClicked(false)
            }
        }

        //add event listener to listen to mouse click 
        document.addEventListener("mousedown", navHandler)

        //remove event listener
        return() =>{
            document.removeEventListener("mousedown", navHandler)
        }

    })

  return (
    <div className="header">
        <nav className="navbar">
            
            <ScrollLink to="home" spy={true} smooth={true} offset={-100} duration={500} className="flex">
                <Link href="./#home">
                    <Image 
                        src="/assets/images/logo.png"
                        alt="Markedeen Logo"
                        width={280}
                        height={100}
                        priority= 'true'
                        className="object-contain h-auto"
                    />
                </Link>
            </ScrollLink>

            <div onClick={handleClick} className="max-md:sticky max-md:top-7 max-md:right-10 md:hidden max-md:text-white">
                {clicked ? (<FaTimes size={32}/>) : <FaBars size={32}/> }   
            </div>

            <ul ref={menuRef} className={clicked ? 
                "flex max-md:fixed max-md:left-0 max-md:top-0 max-md:flex-col max-md:bg-primary-blue max-md:w-3/4 max-md:items-center max-md:h-full max-md:z-50 max-md:transition-all max-md:duration-1000" : 
                "flex max-md:fixed max-md:-left-full max-md:top-0 max-md:flex-col max-md:bg-primary-blue max-md:w-3/4 max-md:items-center max-md:h-full max-md:z-50 max-md:transition-all max-md:duration-1000"}
            >

                <ScrollLink to="home" spy={true} smooth={true} offset={50} duration={500} className="md:hidden mr-10 mt-10">
                    <Link href="./#home">
                        <Image 
                            src="/assets/images/logo.png"
                            alt="Markedeen Logo"
                            width={300}
                            height={100}
                            priority= 'true'
                            className="object-contain h-auto"
                        />
                    </Link>
                </ScrollLink>

            
                <li className="nav_item nav_active">
                    <ScrollLink to="Services" spy={true} smooth={true} offset={-95} duration={500} onClick={handleClick} className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        <Link href="./#Services">
                            Services
                        </Link>
                    </ScrollLink>
                </li> 

                <li className="nav_item nav_active">
                    <ScrollLink to="OurPhilosophy" spy={true} smooth={true} offset={-80} duration={500} onClick={handleClick} className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        <Link href="./#OurPhilosophy">
                            Our Philosphy
                        </Link>
                    </ScrollLink>
                </li> 

                <li className="nav_item nav_active">
                    <ScrollLink to="OnlinePresence" spy={true} smooth={true} offset={-95} duration={500} onClick={handleClick} className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        <Link href="./#OnlinePresence" >
                            Online Presence
                        </Link>
                    </ScrollLink>
                </li>

                <li className="nav_item nav_active">
                    <ScrollLink to="OutperformRivals" spy={true} smooth={true} offset={-95} duration={500} onClick={handleClick} className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        <Link href="./#OutperformRivals">
                            Outperform Rivals
                        </Link>
                    </ScrollLink>
                </li> 

                <li className="nav_item nav_active">
                    <ScrollLink to="Process" spy={true} smooth={true} offset={-95} duration={500} onClick={handleClick} className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        <Link href="./#Process">
                            Process
                        </Link>
                    </ScrollLink>
                </li>

                <li className="nav_item">
                    <ScrollLink to="Contact" spy={true} smooth={true} offset={0} duration={500} onClick={handleClick} className="max-md:pt-12">
                        <Link href="./#Contact">
                            <button 
                                type="button" 
                                onClick={() => {}}
                                className="outline_btn"
                            >
                                Contact Us
                            </button>
                        </Link>
                    </ScrollLink>
                </li>

                <li className="nav_item">
                    <a href="mailto:contactus@markedeen.com" onClick={handleClick} className="link_item lg:pl-4 max-md:pt-28">
                            contactus@markedeen.com
                    </a>
                </li>       
            </ul>        
        
        </nav>
    </div>
  )
}

export default Nav