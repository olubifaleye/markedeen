"use client";

//Allows movement between pages of the app
import Link from "next/link";

//Auto optimizes images
import Image from "next/image";

//Import Images
import NavLogo from '../public/assets/images/logo.jpeg';

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
            
            <Link href="/" className="flex">
                <div className="NavContainer">
                    <Image 
                        src={NavLogo}
                        alt="Markedeen Logo"
                        width={774}
                        height={234}
                        priority= 'true'
                    />
                </div>
            </Link>

            <div onClick={handleClick} className="max-md:sticky max-md:top-7 max-md:right-10 md:hidden max-md:text-white">
                {clicked ? (<FaTimes size={32}/>) : <FaBars size={32}/> }   
            </div>

            <ul ref={menuRef} className={clicked ? 
                "flex max-md:fixed max-md:left-0 max-md:top-0 max-md:flex-col max-md:bg-primary-blue max-md:w-3/4 max-md:items-center max-md:h-full max-md:z-50 max-md:transition-all max-md:duration-1000" : 
                "flex max-md:fixed max-md:-left-full max-md:top-0 max-md:flex-col max-md:bg-primary-blue max-md:w-3/4 max-md:items-center max-md:h-full max-md:z-50 max-md:transition-all max-md:duration-1000"}
            >

                <li>
                    <Link href="/" className="md:hidden mr-10 mt-10">
                        <div className="NavContainer">
                            <Image 
                                src={NavLogo}
                                alt="Markedeen Logo"
                                width={774}
                                height={234}
                                priority= 'true'
                            />
                        </div>
                    </Link>
                </li>

            
                <li className="nav_item nav_active">
                    <Link href="./#Services" className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        Services
                    </Link>
                </li> 

                <li className="nav_item nav_active">
                    <Link href="./#OurPhilosophy" className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        Our Philosphy
                    </Link>
                </li> 

                <li className="nav_item nav_active">
                    <Link href="./#OnlinePresence" className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        Online Presence
                    </Link>
                </li>

                <li className="nav_item nav_active">
                    <Link href="./#OutperformRivals" className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        Outperform Rivals
                    </Link>
                </li> 

                <li className="nav_item nav_active">
                    <Link href="./#Process" className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        Process
                    </Link>
                </li>

                <li className="nav_item">
                    <Link href="./#Contact" className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        <button 
                            type="button" 
                            onClick={() => {}}
                            className="outline_btn"
                        >
                            Contact Us
                        </button>
                    </Link>
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