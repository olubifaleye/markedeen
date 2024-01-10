"use client"

import '@styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';


// Icon Imports
import {FaRegWindowMaximize, FaSortAmountUp, FaPencilAlt, FaConnectdevelop, FaVideo, FaSearchDollar, FaSearchengin, FaFilter, FaEnvelope, FaAd} from 'react-icons/fa';
import { FaPeopleLine, FaFilterCircleDollar, FaCommentSms} from "react-icons/fa6";
import { SiChatbot} from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";

import { IconContext } from "react-icons";


const Services = () => {
  return (
    <section className='main section-2' id='Services'>
      <div className='top_head_section lg:mt-16'>
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
                    <FaFilterCircleDollar />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Funnel Optimization 
              </p>

              <p className="desc-2">
                Optimize your funnel with us! From captivating landing pages to streamlined user journeys, 
                we turn leads into loyal customers with our expertise.
              </p>
            </div> 
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaPeopleLine />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Lead Generation
              </p>

              <p className="desc-2">
                Our expert strategies capture high-quality leads, connecting your business with the right customers at the right time for growth.
              </p>

            </div>
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <SiChatbot />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                AI Chatbot
              </p>

              <p className="desc-2">
                Enhance customer interactions, nurture/qualify leads and boost sales: 
                Our AI Conversation Bot streamlines tasks and adapts to your business needs.
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
                Tailored, data-driven online ad campaigns for measurable results, boosting brand visibility and driving website traffic. 
              </p>

            </div>
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <TbSettingsAutomation />
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
                  We assist in efficient customer data management, enhancing your customer experience and fostering long-term relationships.
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
                      <FaCommentSms />
                    </div>
                  </div>
                </IconContext.Provider>

                <p className='icon_text'>
                  SMS Marketing 
                </p>

                <p className="desc-2">
                  Elevate outreach with targeted SMS Marketing through Markedeen's seamless integration for direct customer connection.
                </p>

              </div>
            
          </div>
        </div>

        <Link href="/readmore" className='flex items-center justify-center'>
            <p className='lg:text-xl md:text-xl max-md:text-lg font-satoshi font-semibold leading-[1.15] text-black'>
              Read More
            </p>
        </Link>

    </section>
  )
}

export default Services