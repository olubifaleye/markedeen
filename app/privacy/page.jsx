// Set metadata for Privacy Page
export const metadata = {
  title: "Privacy Policy",
  description: "Aberdeen Marketing Agency Privacy Policy Page"
}

const PrivacyPolicy = () => {
  return (
    <>
      <section className='main' id='Privacy'>

          <div className='top_head_section pt-10'>
            <h1 className="head_text_span">
              Privacy Policy
            </h1>

          </div>

          <div className='faq_container'>
            <div className='pt-4'>
              <p className='faq_sub_beader'>
                1. Introduction
              </p>

              <p className="desc-3">
                  Markedeen, referred to as “we,” “us,” or “our,” respects your privacy and is committed to protecting the personal information you provide to us.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                2. Information Collection
              </p>

              <p className="desc-3 mb-5">
                  We may collect personal information, including but not limited to:
              </p>

              <ul className='desc-3'>
                  <li>
                      •	Name
                  </li>

                  <li>
                      •	Contact information (email address, phone number, address)
                  </li>

                  <li>
                      •	Billing details
                  </li>

                  <li>
                      •	Other information necessary for providing our services
                  </li>
              </ul>
            </div>

            <div>
              <p className='faq_sub_beader'>
                3. Use of Information
              </p>

              <p className="desc-3 mb-5">
                  We use the collected information for:
              </p>

              <ul className='desc-3'>
                  <li>
                      •	Providing and improving our services
                  </li>

                  <li>
                      •	Communicating with you regarding our services, promotions, or updates
                  </li>

                  <li>
                      •	Processing payments and invoices
                  </li>
              </ul>

            </div>

            <div>
              <p className='faq_sub_beader'>
                4. Data Security
              </p>

              <p className="desc-3">
                  We implement appropriate security measures to protect your personal information from unauthorized access, 
                  alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                5. IThird-party Disclosure
              </p>

              <p className="desc-3">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as required by law or to fulfill services requested by you.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                6. Cookies and Tracking
              </p>

              <p className="desc-3">
                  We may use cookies or similar technologies to enhance your experience on our website. 
                  You can manage your cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                7. Data Retention
              </p>

              <p className="desc-3">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                8. Your Rights
              </p>

              <p className="desc-3 mb-5">
                  You have the right to:
              </p>

              <ul className='desc-3'>
                  <li>
                      •	Access, correct, or delete your personal information
                  </li>

                  <li>
                      •	Object to or restrict the processing of your personal information
                  </li>

                  <li>
                      •	Receive a copy of your data in a structured, machine-readable format
                  </li>
              </ul>
            </div>
            
            <div>
              <p className='faq_sub_beader'>
                  9. Children’s Privacy
              </p>

              <p className="desc-3">
                  Our services are not directed to individuals under the age of 18. 
                  We do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                  9. Changes to this Policy
              </p>

              <p className="desc-3">
                  We reserve the right to modify this privacy policy. 
                  Any changes will be effective immediately upon posting the updated policy on our website.
              </p>
            </div>

            <div className='pb-20'>
              <p className='faq_sub_beader'>
                  11. Contact Us

              </p>

              <p className="desc-3">
                  If you have any questions or concerns about our privacy practices or this policy, please contact us at contactus@markedeen.com.
              </p>
            </div>

          </div>
      </section>
    </>
  )
}

export default PrivacyPolicy