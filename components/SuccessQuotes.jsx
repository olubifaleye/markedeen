'use client'

//imports
import '@styles/globals.css';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

const SuccessQuotes = () => {
  return (
    <section className='main'>

        <div className='top_head_section'>
            <p className="head_text_span">
                Why do our customers use Markedeen?
            </p>
        </div>

      <Marquee pauseOnClick>
        <div className='quotes_container'>
          <div className='quotes_item'>

            <div className='desc'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. 
            </div>

            <p className='icon_text'>
                Comapny 1
            </p>
            
            <div className='quotes_image'>
              <Image 
                  src="/assets/images/Curved_solid_arrow.svg"
                  alt="Markedeen Landing Page Image"
                  width={50}
                  height={50}
                  priority= 'true'                     
              />
            </div>

          </div>

          <div className='quotes_item'>

            <div className='desc'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. 
            </div>

            <p className='icon_text'>
                Company 2
            </p>

            <div className='quotes_image'>
              <Image 
                  src="/assets/images/Curved_solid_arrow.svg"
                  alt="Markedeen Landing Page Image"
                  width={50}
                  height={50}
                  priority= 'true'                     
              />
            </div>
            
          </div>

          <div className='quotes_item'>

            <div className='desc'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. 
            </div>

            <p className='icon_text'>
                Company 3
            </p>

            <div className='quotes_image'>
              <Image 
                  src="/assets/images/Curved_solid_arrow.svg"
                  alt="Markedeen Landing Page Image"
                  width={50}
                  height={50}
                  priority= 'true'                     
              />
            </div>

          </div>

          <div className='quotes_item'>
            <div className='desc'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. 
            </div>

            <p className='icon_text'>
                Company 4
            </p>

            <div className='quotes_image'>
              <Image 
                  src="/assets/images/Curved_solid_arrow.svg"
                  alt="Markedeen Landing Page Image"
                  width={50}
                  height={50}
                  priority= 'true'                     
              />
            </div>

          </div>

          <div className='quotes_item'>
            <div className='desc'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. 
            </div>

            <p className='icon_text'>
                Comapny 5
            </p>

            <div className='quotes_image'>
              <Image 
                  src="/assets/images/Curved_solid_arrow.svg"
                  alt="Markedeen Landing Page Image"
                  width={50}
                  height={50}
                  priority= 'true'                     
              />
            </div>

          </div>

          <div className='quotes_item'>
            <div className='desc'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. 
            </div>

            <p className='icon_text'>
                Comapny 6
            </p>

            <div className='quotes_image'>
              <Image 
                  src="/assets/images/Curved_solid_arrow.svg"
                  alt="Markedeen Landing Page Image"
                  width={50}
                  height={50}
                  priority= 'true'                     
              />
            </div>

          </div>

          <div className='quotes_item'>
            <div className='desc'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. 
            </div>

            <p className='icon_text'>
                Comapny 7
            </p>

            <div className='quotes_image'>
              <Image 
                  src="/assets/images/Curved_solid_arrow.svg"
                  alt="Markedeen Landing Page Image"
                  width={50}
                  height={50}
                  priority= 'true'                     
              />
            </div>

          </div>
        </div>
      </Marquee>
        
    </section>
  )
}

export default SuccessQuotes