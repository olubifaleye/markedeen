'use client'

import Image from "next/image";
import GrowthPartnerBeside from '../public/assets/images/GrowthPartnerBeside.jpeg';

const OurPhilosophy = () => {
  return (
    <section className="main section-3 mt-20 mb-20" id="OurPhilosophy">
        <div className="our_philosophy_container">

            <div className="left_container">
                <div className="max-md:text-center">
                    <div className='top_head_section'>
                        <h1 className="head_text_span !text-left">
                            What is a Growth Partner?
                        </h1>
                    </div>

                    <p className="desc !text-black m-auto">
                        A growth partner is more than a service provider; it's a strategic ally committed to enhancing all facets of your business. 
                        From crafting effective marketing strategies and managing backend operations to securing leads and ensuring customer satisfaction, 
                        a growth partner works collaboratively to elevate your company's success. With a growth partner like Markedeen, 
                        you gain a comprehensive solution, streamlining your path to sustained growth and business excellence.
                    </p>
                </div>
            </div>

            <div className="our_philosophy_right">
                <div className="ourPhilosophyImage">
                    <Image 
                        src={GrowthPartnerBeside}
                        alt="What is a Growth Partner Image"
                        width={1600}
                        height={1066}
                        priority= 'true'
                        className="rounded-lg"                   
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurPhilosophy