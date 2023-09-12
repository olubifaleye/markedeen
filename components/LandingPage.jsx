"use client"

//Imports
import Link from "next/link";
import '@styles/globals.css';
import Image from "next/image";
import {FaRegWindowMaximize, FaCircle, FaInstagram, FaFacebook, FaTwitterSquare} from 'react-icons/fa';


const LandingPage = () => {
  return (
    <section className="landing_container">
        <div className="left_container">
            <p className="head_text">
                Momentum starts with

                <span className="head_text_span"> strategic marketing</span>
            </p>

            <p className="desc">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
            </p>

            <nav className="button_container">
                <Link href="/" className="max-md:pt-12">
                    <button 
                        type="button" 
                        onClick={() => {}}
                        className="outline_btn"                       
                    >
                        Free Quote
                    </button>
                </Link>
                
                <Link href="/" className="text-primary-blue text-lg max-md:pt-12">
                    What can we do for you?                
                </Link>

            </nav>
        </div>

        <div className="right_container">

            <div className="landing_container">

                <div className="landing_pills">
                    <FaRegWindowMaximize  size={24}/>
                    <p className="pl-4">Get a Website</p>
                </div>

                <div className="landing_pills py-2">
                    <ul>
                        <li className="flex pb-2">
                            <FaCircle size={24} style={{color: '#0095FA'}} /> 
                            <p className="pl-4">Improve your reputation</p>
                        </li>

                        <li className="flex">
                            <FaCircle size={24} style={{color: '#DBA11C'}} /> 
                            <p className="pl-4">Improving rankings</p>
                        </li>
                    </ul>
                </div>

            </div>

            <Image 
                src="/assets/images/HappyMan.png"
                alt="Markedeen Landing Page Image"
                width={500}
                height={500}
                priority= 'true'
                className="image"
            />

            <div className="landing_container">
            
                <div className="landing_pills gap-4">
                    <FaInstagram size={24} />
                    <FaFacebook size={24} />
                    <FaTwitterSquare size={24} />
                </div>

                <div className="landing_pills py-2">
                    <ul>
                        <li className="flex pb-2">
                            <FaCircle size={24} style={{color: '#0095FA'}} /> 
                            <p className="pl-4">Boost social presence</p>
                        </li>

                        <li className="flex">
                            <FaCircle size={24} style={{color: '#DBA11C'}} /> 
                            <p className="pl-4">Drive more sales</p>
                        </li>
                    </ul>
                </div>

          </div>

        </div>

    </section>
  )
}

export default LandingPage