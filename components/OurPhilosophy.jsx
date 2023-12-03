'use client'

import Image from "next/image";

const OurPhilosophy = () => {
  return (
    <section className="main section-3 mb-20" id="OurPhilosophy">
        <div className="our_philosophy_container">
            <div className="left_container">

                <div className="max-md:text-center">
                    <p className="head_text_span">
                        What is a growth partner?
                    </p>

                    <p className="desc m-auto">
                        A growth partner is more than a service provider; it's a strategic ally committed to enhancing all facets of your business. 
                        From crafting effective marketing strategies and managing backend operations to securing leads and ensuring customer satisfaction, 
                        a growth partner works collaboratively to elevate your company's success. With a growth partner like Markedeen, 
                        you gain a comprehensive solution, streamlining your path to sustained growth and business excellence.
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