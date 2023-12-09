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

import {FaLinkedin} from 'react-icons/fa';
import { IconContext } from "react-icons";


const Footer = () => {
  return (
    <>
        <nav className="footer">
            <div className="flex items-center">
                <div className="nav_item">
                    All rights reserved [copyright sign] 2023, Markedeen
                </div>
            </div>

            <div className="flex items-center">
                
                <div className="nav_item">
                    <a href="https://www.linkedin.com/company/markedeen/">
                        <IconContext.Provider value={{ className: "IconSizes" }}>
                            <div className="flex-center">
                                <div className='icon'>
                                    <FaLinkedin />
                                </div>
                            </div>
                        </IconContext.Provider>
                    </a>
                </div>
 
            
                <div className="nav_item">
                    <ScrollLink to="FAQ" spy={true} smooth={true} offset={-95} duration={500} className="link_item hover:border-b-4 max-md:hover:-mb-1">
                        <Link href="/faq">FAQ</Link>
                    </ScrollLink>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Footer