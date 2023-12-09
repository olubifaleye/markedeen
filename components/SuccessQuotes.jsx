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
              "Markedeen has been an absolute game-changer for Vybe Promotions. 
              Their expertise in running ads and orchestrating social media campaigns has significantly elevated our brand presence. 
              Markedeen's collaboration with numerous events played a pivotal role in establishing 'Flava' as a recognized name in Edinburgh. 
              Their strategic approach and dedication to our success make them a valuable partner. We look forward to continuing this journey together!"
            </div>

            <p className='icon_text'>
                Vybe Promotions
            </p>
            
            <div className='quotes_image'>
              <Image 
                  src="/assets/images/VYBE LOGO.PNG"
                  alt="Markedeen Landing Page Image"
                  width={100}
                  height={100}
                  priority= 'true'                    
              />
            </div>

          </div>

          <div className='quotes_item'>

            <div className='desc'>
                "Being a DeenWave user has transformed the way I manage my business at 7sBeautyBar. 
                The automation features provided by DeenWave streamline my processes, making my life as a lash tech and loctician much easier. 
                From handling backend tasks to automating appointments, DeenWave has become an indispensable tool in my daily operations. 
                I highly recommend it to fellow beauty professionals looking to enhance their efficiency."
            </div>

            <p className='icon_text'>
                7sBeautyBar
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
                "Markedeen played a crucial role in establishing CurryKits' online presence. 
                Their expertise in Facebook Ads was instrumental in driving visibility and engagement. 
                What truly stood out was their ability to establish a new TikTok shop within months of its opening. 
                The content consultation for social media added a creative touch to our brand. Markedeen's strategic approach and dedication to our brand's growth have been exceptional."
            </div>

            <p className='icon_text'>
                CurryKits
            </p>

            <div className='quotes_image'>
              <Image 
                  src="/assets/images/CurryKits.jpeg"
                  alt="Markedeen Landing Page Image"
                  width={100}
                  height={100}
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