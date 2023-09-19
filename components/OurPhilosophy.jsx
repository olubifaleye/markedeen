'use client'

import Image from "next/image";

const OurPhilosophy = () => {
  return (
    <section className="main section-3 mb-20">
        <div className="our_philosophy_container">
            <div className="left_container">

                <div className="max-md:text-center">
                    <p className="head_text_span">
                        What can we do for you?
                    </p>

                    <p className="desc m-auto">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.  
                    </p>
                </div>
            </div>

            <div className="right_container flex-center">
                <Image 
                    src="/assets/images/HappyMan-2.png"
                    alt="Markedeen Landing Page Image"
                    width={540}
                    height={480}
                    priority= 'true'
                    className="landing-image"
                />
            </div>

        </div>
    </section>
  )
}

export default OurPhilosophy