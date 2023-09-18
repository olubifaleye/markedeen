"use client"

import '@styles/globals.css';
import Image from 'next/image';

import {FaRegWindowMaximize, FaCircle, FaInstagram, FaFacebook, FaTwitterSquare} from 'react-icons/fa';
import { IconContext } from "react-icons";


const Services = () => {
  return (
    <section className='main section-2'>
      <div className='top_head_section'>
        <p className="head_text_span">
          What can we do for you?
        </p>

        <p className="sub_head_text">
          Everything you need to build and grow you online presence
        </p>
      </div>

      <div className='services_container'>

          <div className='services_item'>

            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center drop-shadow-lg">
                  <FaRegWindowMaximize />
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Web Development
              </p>

              <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>
            
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center drop-shadow-lg">
                  <FaRegWindowMaximize />
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Reputation Management
              </p>

              <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>

          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center drop-shadow-lg">
                  <FaRegWindowMaximize />
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Content Marketing
              </p>

              <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>

          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center drop-shadow-lg">
                  <FaRegWindowMaximize />
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Social Media
              </p>

              <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>

          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center drop-shadow-lg">
                  <FaRegWindowMaximize />
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Video Marketing
              </p>

              <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>
            
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center drop-shadow-lg">
                  <FaRegWindowMaximize />
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Local Marketing
              </p>

              <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center drop-shadow-lg">
                  <FaRegWindowMaximize />
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                SEO
              </p>

              <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt. 
              </p>

            </div>
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center drop-shadow-lg">
                  <FaRegWindowMaximize />
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Lead Generation
              </p>

              <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>

          </div>

          <div className='services_item'>
            
          </div>

          <div className='services_item'>
          <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center drop-shadow-lg">
                  <FaRegWindowMaximize />
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Email Marketing
              </p>

              <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>

          </div>

          <div className='services_item'>
          <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center drop-shadow-lg">
                  <FaRegWindowMaximize />
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Paid Ads
              </p>

              <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>
          </div>

          <div className='services_item'>
            
          </div>

        </div>

    </section>
  )
}

export default Services