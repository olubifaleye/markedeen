"use client";

//Allows movement between pages of the app
import Link from "next/link";

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
 
            
                <div className="nav_item hover:border-b-4">
                    <Link href="/faq">FAQ</Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Footer