'use client'

//imports
import Image from 'next/image';
import Marquee from "react-fast-marquee";

//Image Imports
import VybePromotions from '../public/assets/images/VybePromotions.jpeg';
import BeautyBar from '../public/assets/images/BeautyBar.jpeg';
import CurryKits from '../public/assets/images/CurryKits.jpeg';

const SuccessQuotes = () => {
  return (
    <section className='main section-8' id='SuccessQuotes'>

        <div className='top_head_section'>
            <h1 className="head_text_span">
                Why do our customers use Markedeen?
            </h1>
        </div>

      <Marquee pauseOnClick>
        <div className='quotes_container'>
          <div className='quotes_item'>

            <div className='desc-2'>
              "Markedeen has completely transformed Vybe Promotions. 
              Their experience in running advertisements and coordinating social media campaigns has considerably increased our brand's visibility. 
              Markedeen's involvement at several events was critical in establishing 'Flava' as a known name in Edinburgh. 
              Their strategic approach and dedication to our success make them a valuable partner. We look forward to continuing this journey together!"
            </div>

            <p className='icon_text'>
                Vybe Promotions
            </p>
            
            <div className='quotes_image'>
              <Image 
                  src={VybePromotions}
                  alt="Vybe Promotions Logo"
                  width={50}
                  height={50}
                  priority= 'true'                    
              />
            </div>

          </div>

          <div className='quotes_item'>

            <div className='desc-2'>
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
                  src={BeautyBar}
                  alt="Beauty Bar Logo"
                  width={50}
                  height={50}
                  priority= 'true'                     
              />
            </div>
            
          </div>

          <div className='quotes_item'>

            <div className='desc-2'>
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
                  src={CurryKits}
                  alt="CurryKits Logo"
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