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
  return (
    <div className="header">
        <nav className="navbar">
            <Link href="/" className="flex">
                <Image 
                    src="/assets/images/logo.png"
                    alt="Promptopia Logo"
                    width={150}
                    height={100}
                    className="object-contain"
                />
            </Link>

            <div className="hamburger">
                <FaBars />    
            </div>

            <ul className="flex">

            
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
                    <Link href="/" className="link_item">
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
                    <Link href="/" className="pl-40 link_item">
                        Company Email
                    </Link>
                </li>       
            </ul>        
        
        </nav>
    </div>
  )
}

export default Nav