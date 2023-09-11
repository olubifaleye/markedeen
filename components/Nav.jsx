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
            
            <Link href="/" className={clicked ? "max-md:hidden" : "flex"}>
                <Image 
                    src="/assets/images/logo.png"
                    alt="Markedeen Logo"
                    width={280}
                    height={100}
                    priority= 'true'
                    className="object-contain"
                />
            </Link>

            <div onClick={handleClick} className="max-md:fixed max-md:top-7 max-md:right-10 md:hidden max-md:text-white">
                {clicked ? (<FaTimes size={32} style={{color: '#1B4571'}}/>) : <FaBars size={32}/> }   
            </div>

            <ul className={clicked ? "flex max-md:fixed max-md:left-0 max-md:top-0 max-md:flex-col max-md:bg-primary-blue max-md:w-3/4 max-md:items-center max-md:h-full max-md:z-999 max-md:transition: max-md:duration-300" : "flex max-md:fixed list-none max-md:-left-full max-md:flex-col max-md:bg-primary-blue max-md:items-center max-md:z-999 max-md:transition: max-md:duration-300"}>

                <Link href="/" className="md:hidden mr-10 mt-10">
                    <Image 
                        src="/assets/images/logo.png"
                        alt="Markedeen Logo"
                        width={300}
                        height={100}
                        priority= 'true'
                        className="object-contain"
                    />
                </Link>

            
                <li className="nav_item">
                    <Link href="/" className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        Services
                    </Link>
                </li> 

                <li className="nav_item">
                    <Link href="/" className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        Our Philosphy
                    </Link>
                </li> 

                <li className="nav_item">
                    <Link href="/" className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        Online Presence
                    </Link>
                </li>

                <li className="nav_item">
                    <Link href="/" className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        Outperform Rivals
                    </Link>
                </li> 

                <li className="nav_item">
                    <Link href="/" className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        Process
                    </Link>
                </li>

                <li className="nav_item">
                    <Link href="/" className="max-md:pt-12">
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
                    <Link href="/" className="link_item lg:pl-4 max-md:pt-44">
                        Company Email
                    </Link>
                </li>       
            </ul>        
        
        </nav>
    </div>
  )
}

export default Nav