"use client"

import '@styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

import {FaRegWindowMaximize, FaSortAmountUp, FaPencilAlt, FaConnectdevelop, FaVideo, FaSearchDollar, FaSearchengin, FaFilter, FaEnvelope, FaAd} from 'react-icons/fa';

import { IconContext } from "react-icons";


const Services = () => {
  return (
    <section className='main section-2' id='Services'>
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
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaRegWindowMaximize />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Web Development
              </p>

              <p className="desc-2">
                We craft stunning, user-friendly websites that not only engage your audience but also drive conversions, ensuring your online presence aligns seamlessly with your brand.
              </p>

              <Link href="/readmore">Read More</Link>

            </div> 
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaFilter />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Lead Generation
              </p>

              <p className="desc-2">
                Our expert strategies are designed to capture high-quality leads, helping your business grow by connecting you with the right customers at the right time. 
              </p>

            </div>
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaPencilAlt />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Content Marketing
              </p>

              <p className="desc-2">
                We curate and create engaging social media content that resonates with your target audience, building brand loyalty and driving meaningful interactions. 
              </p>

            </div>
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaConnectdevelop />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Online Advertisements
              </p>

              <p className="desc-2">
                Our data-driven online advertising campaigns are tailored to deliver measurable results, enhancing your brand's visibility and driving traffic to your website. 
              </p>

            </div>
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaVideo />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Follow-up Automation
              </p>

              <p className="desc-2">
                We streamline your customer outreach by automating follow-ups and nurturing leads, ensuring that no opportunity for conversion is left unexplored. 
              </p>

            </div>
          </div>

          <div className='services_item'>
            <div>
                <IconContext.Provider value={{ className: "IconSizes" }}>
                  <div className="mt-2 flex-center">
                    <div className='icon'>
                      <FaFilter />
                    </div>
                  </div>
                </IconContext.Provider>

                <p className='icon_text'>
                  Enhanced CRM
                </p>

                <p className="desc-2">
                We help you manage and utilize customer data efficiently, allowing you to provide a top-notch customer experience and drive long-term relationships with your clients.
                </p>

              </div>
          </div>

          <div className='services_item'>
            <div>
                <IconContext.Provider value={{ className: "IconSizes" }}>
                  <div className="mt-2 flex-center">
                    <div className='icon'>
                      <FaEnvelope />
                    </div>
                  </div>
                </IconContext.Provider>

                <p className='icon_text'>
                  Email Marketing 
                </p>

                <p className="desc-2">
                  Our personalized email campaigns are designed to boost engagement and conversions, creating a direct and meaningful connection with your audience.
                </p>

              </div>
          </div>

          <div className='services_item'>
            <div>
                <IconContext.Provider value={{ className: "IconSizes" }}>
                  <div className="mt-2 flex-center">
                    <div className='icon'>
                      <FaEnvelope />
                    </div>
                  </div>
                </IconContext.Provider>

                <p className='icon_text'>
                  SMS Marketing 
                </p>

                <p className="desc-2">
                  Our personalized email campaigns are designed to boost engagement and conversions, creating a direct and meaningful connection with your audience.
                </p>

              </div>
            
          </div>
        </div>

    </section>
  )
}

export default Services