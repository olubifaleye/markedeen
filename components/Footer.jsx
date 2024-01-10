"use client";

//Allows movement between pages of the app
import Link from "next/link";

import {FaLinkedin} from 'react-icons/fa';
import { IconContext } from "react-icons";


const Footer = () => {
  return (
    <>
        <nav className="footer">
            {/* DIV container which contains copyright text for Markedeen */}
            <div className="flex items-center lg:pl-20 max-md:flex-col">
                <div className="nav_item">
                    All rights reserved © 2023, Markedeen
                </div>
            </div>


            {/* DIV container which contains a LinkedIn Icon which serves as a link to Markedeens LinkedIn page.
                It also contains text links to the FAQ, Terms & Conditions and Privacy Policy pages.    
            */}
            <div className="flex max-md:flex-col items-center lg:pr-20">
                
                <div className="nav_item">
                    <a href="https://www.linkedin.com/company/markedeen/" title="Link to Markedeen LinkedIn Page">
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
                    <Link href="/faq" className="link_item hover:border-b-4 max-md:hover:-mb-1">FAQ</Link>
                </div>

                <div className="nav_item">
                    <Link href="terms&conditions" className="link_item hover:border-b-4 max-md:hover:-mb-1">Terms & Conditions</Link>
                </div>

                <div className="nav_item">
                    <Link href="privacy" className="link_item hover:border-b-4 max-md:hover:-mb-1">Privacy Policy</Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Footer