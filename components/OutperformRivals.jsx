"use client"

// Icon Imports
import {FaChartBar, FaEye, FaCheck, FaAward, FaSmile, FaSortAmountUp, FaHandshake, FaChalkboardTeacher, FaFilter, FaHandHoldingUsd} from 'react-icons/fa';
import { IconContext } from "react-icons";

const OutperformRivals = () => {
  return (
    <section className='mainSection section-5' id='OutperformRivals'>
      <div className='top_head_section'>
        <h1 className="head_text_span">
          How can I beat my competition?
        </h1>

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
                Climb to the top—75% of users never scroll past the first page of search results,
                and we ensure your business takes center stage.
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
                Expand your digital footprint—93% of online experiences begin with a search engine, 
                making our targeted strategies essential for brand discovery.
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
                Increased Credibility
              </p>

              <p className="desc-2">
                Secure your brand's credibility—88% of consumers trust online reviews as much as personal recommendations, 
                boosting your brand's trustworthiness.
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
                Safeguard your reputation—84% of people trust online reviews as much as friends, 
                making a positive online presence a crucial asset.
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
                Enhance customer satisfaction—Customer retention increases by 5% for every 5% improvement in customer satisfaction, 
                ensuring lasting relationships.
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
                Cultivate loyalty—A 5% increase in customer retention can boost profits by 25-95%, 
                emphasizing the power of long-term customer relationships.
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
                Stay connected—90% of consumers expect an immediate response, 
                and our automated engagement ensures round-the-clock interaction.
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
                Expand your reach—Social media usage has surged to 4.2 billion users, 
                offering a vast landscape for our multi-channel marketing strategies.
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
                Boost conversions—Leverage data-driven strategies as websites with 
                personalized experiences see a 19% increase in conversion rates.
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
                Optimize costs—Businesses with marketing automation save up to 20% on operational costs, 
                contributing to a more efficient and cost-effective strategy.
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