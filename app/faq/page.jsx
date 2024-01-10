import React from 'react'
import Head from 'next/head'

const FAQ = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>

      <section className='main' id='FAQ'>
      
        <div className='top_head_section'>
            <p className="head_text_span">
              FAQ
            </p>

            <p className="sub_head_text !mb-28">
              Browse our FAQ for quick answers
            </p>
          </div>

          <div className='faq_container'>
            <div>
              <p className='faq_sub_beader'>
                What does Markedeen specialize in?
              </p>

              <p className="desc-3">
                Markedeen is a digital marketing agency specializing in comprehensive solutions for businesses. 
                We focus on Google Ads, Facebook Ads, Instagram Ads, Meta Ads, TikTok Ads, TikTok Shop, 
                and Email Marketing to generate leads for Home Improvement companies in Scotland.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                How can Markedeen help my Home Improvement business?
              </p>

              <p className="desc-3">
                Markedeen serves as your business growth partner. We go beyond traditional marketing, 
                handling backend processes, following up with customers, qualifying leads, booking appointments, 
                managing Google Reviews, and more. Our goal is to ensure you focus on closing leads while we take care of the rest.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                Who is Markedeen's target audience?
              </p>

              <p className="desc-3">
                Markedeen caters to a diverse range of home improvement businesses in Scotland. 
                Whether you're into garden renovation, kitchen remodeling, electrical work, plumbing, security, 
                carpentry, or any related field, Markedeen is here to elevate your digital presence and drive growth.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                What sets Markedeen apart from other digital marketing agencies?
              </p>

              <p className="desc-3">
                Markedeen stands out as a business growth partner rather than just a marketing agency. 
                We offer a holistic approach, handling not only digital marketing but also backend processes 
                to ensure seamless lead generation and conversion for your business.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                How does the Markedeen process work?
              </p>

              <p className="desc-3">
                Our process involves understanding your business, crafting tailored marketing strategies, 
                implementing campaigns across various platforms, and managing backend tasks such as customer follow-ups, 
                lead qualification, appointment scheduling, and more. This ensures a comprehensive approach to business growth.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                Are there any long-term commitments with Markedeen?
              </p>

              <p className="desc-3">
                Markedeen offers flexibility. While long-term partnerships often yield the best results, 
                we understand that business needs may vary. We work with you to create a strategy that aligns with your goals, 
                whether for a short-term campaign or a more extended partnership.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                What certifications does Markedeen have?
              </p>

              <p className="desc-3">
                Eni, the founder of Markedeen, is certified in social media marketing, Google Ads, and consumer behavior. 
                These certifications reflect our commitment to staying updated with industry trends and delivering high-quality services.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                Is Markedeen only for businesses in Scotland?
              </p>

              <p className="desc-3">
                While our primary focus is on Home Improvement companies in Scotland, 
                we are open to discussions with businesses outside this region. 
                Contact us, and let's explore how Markedeen can add value to your business, regardless of your location.
              </p>
            </div>
            
            <div>
              <p className='faq_sub_beader'>
                How can I stay updated on Markedeen's services and industry insights?
              </p>

              <p className="desc-3">
                Stay connected with Markedeen by subscribing to our newsletter and following us on social media. 
                We regularly share valuable insights, industry trends, and updates on our services.
              </p>
            </div>

            <div className='top_head_section'>
              <p className="sub_head_text !mt-28">
                Have more questions? Feel free to contact us directly. We're here to assist you!
              </p>
            </div>
          </div>

      </section>
    </>
  )
}

export default FAQ