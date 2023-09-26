"use client"

import '@styles/globals.css';
import Image from 'next/image';

import {FaChartBar, FaEye, FaCheck, FaAward, FaSmile, FaSortAmountUp, FaHandshake, FaChalkboardTeacher, FaFilter, FaHandHoldingUsd} from 'react-icons/fa';

import { IconContext } from "react-icons";

const OutperformRivals = () => {
  return (
    <section className='main section-5' id='OutperformRivals'>
      <div className='top_head_section'>
        <p className="head_text_span">
          How can I beat my competition?
        </p>

        <p className="sub_head_text">
          In today's competitive landscape, an online presence gives you the edge
        </p>
      </div>

      <div className='services_container'>

          <div className='services_item'>

            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaChartBar />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Outrank Them
              </p>

              <p className="desc-2">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>
            
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaEye />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Greater Awareness
              </p>

              <p className="desc-2">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>

          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaCheck />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                More Credibility
              </p>

              <p className="desc-2">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>

          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaAward />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Better Reputation
              </p>

              <p className="desc-2">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>

          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaSmile />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Higher Satisfaction
              </p>

              <p className="desc-2">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>
            
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaSortAmountUp />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Build Loyalty
              </p>

              <p className="desc-2">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaHandshake />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                24/7 Engagement
              </p>

              <p className="desc-2">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt. 
              </p>

            </div>
          </div>

          <div className='services_item'>
            <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaChalkboardTeacher />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Increase Reach
              </p>

              <p className="desc-2">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>

          </div>

          <div className='services_item max-md:hidden'>
            
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
                Improve Conversion
              </p>

              <p className="desc-2">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>

          </div>

          <div className='services_item'>
          <div>
              <IconContext.Provider value={{ className: "IconSizes" }}>
                <div className="mt-2 flex-center">
                  <div className='icon'>
                    <FaHandHoldingUsd />
                  </div>
                </div>
              </IconContext.Provider>

              <p className='icon_text'>
                Reduce Cost
              </p>

              <p className="desc-2">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt.
              </p>

            </div>
          </div>

          <div className='services_item max-md:hidden'>
            
          </div>

        </div>

    </section>

  )
}

export default OutperformRivals