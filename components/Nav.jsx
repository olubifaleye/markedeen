"use client";

//Allows movement between pages of the app
import Link from "next/link";

//Auto optimizes images
import Image from "next/image";

//react hooks
import { useState, useEffect } from 'react';

//React Icons
import { FaBars, FaTimes} from 'react-icons/fa';

const Nav = () => {

    //states for clicking nav bar icons
    const [clicked, setClicked] = useState(false);

    //function for when nav bar icons are clicked
    const handleClick = () => {
        setClicked(!clicked)
    }
  return (
    <div className="header">
        <nav className="navbar">
            
            <Link href="/" className={clicked ? "max-sm:hidden" : "flex"}>
                <Image 
                    src="/assets/images/logo.png"
                    alt="Markedeen Logo"
                    width={280}
                    height={100}
                    priority= 'true'
                    className="object-contain"
                />
            </Link>

            <div onClick={handleClick} className="max-sm:fixed max-sm:top-7 max-sm:right-10 md:hidden max-sm:text-white">
                {clicked ? (<FaTimes size={32} style={{color: '#1B4571'}}/>) : <FaBars size={32}/> }   
            </div>

            <ul className={clicked ? "flex max-sm:fixed max-sm:left-0 max-sm:top-0 max-sm:flex-col max-sm:bg-primary-blue max-sm:w-3/4 max-sm:items-center max-sm:h-full max-sm:z-999 max-sm:transition: max-sm:duration-300" : "flex max-sm:fixed max-sm:-left-full max-sm:top-0 max-sm:flex-col max-sm:bg-primary-blue max-sm:w-3/4 max-sm:items-center max-sm:h-full max-sm:z-999 max-sm:transition: max-sm:duration-300"}>

                <Link href="/" className="md:hidden">
                    <Image 
                        src="/assets/images/logo.png"
                        alt="Markedeen Logo"
                        width={150}
                        height={100}
                        priority= 'true'
                        className="object-contain"
                    />
                </Link>

            
                <li className="nav_item">
                    <Link href="/" className="link_item hover:border-b-4">
                        Services
                    </Link>
                </li> 

                <li className="nav_item">
                    <Link href="/" className="link_item hover:border-b-4">
                        Our Philosphy
                    </Link>
                </li> 

                <li className="nav_item">
                    <Link href="/" className="link_item hover:border-b-4">
                        Online Presence
                    </Link>
                </li>

                <li className="nav_item">
                    <Link href="/" className="link_item hover:border-b-4">
                        Outperform Rivals
                    </Link>
                </li> 

                <li className="nav_item">
                    <Link href="/" className="link_item hover:border-b-4">
                        Process
                    </Link>
                </li>

                <li className="nav_item">
                    <Link href="/" className="link_item max-sm:pt-12">
                        <button 
                            type="button" 
                            onClick={() => {}}
                            className="outline_btn"
                        >
                            Free Quote
                        </button>
                    </Link>
                </li>

                <li className="nav_item">
                    <Link href="/" className="md:pl-40 link_item max-sm:pt-44">
                        Company Email
                    </Link>
                </li>       
            </ul>        
        
        </nav>
    </div>
  )
}

export default Nav