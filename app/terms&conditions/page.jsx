// Set metadata for Terms and Conditions Page
export const metadata = {
  title: "Terms & Conditions",
  description: "Aberdeen Marketing Agency Terms and Conditions Page"
}

const TermsAndConditions = () => {
  return (
    <>
      <section className='main' id='Terms&Conditions'>

          <div className='top_head_section pt-10'>
            <h1 className="head_text_span">
              Terms & Conditions
            </h1>

          </div>

          <div className='faq_container'>
            <div className='pt-4'>
              <p className='faq_sub_beader'>
                1. Introduction
              </p>

              <p className="desc-3">
                  This document constitutes an agreement between Markedeen, hereinafter referred to as “the Agency,” and the client engaging our services.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                2. Scope of Work
              </p>

              <p className="desc-3">
                  The Agency agrees to provide marketing services as outlined in the agreed-upon proposal or contract.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                3. Client Responsibilities
              </p>

              <p className="desc-3">
                  The client agrees to provide necessary information and timely feedback to facilitate the execution of services by the Agency.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                4. Fees and Payment
              </p>

              <p className="desc-3">
                  Fees for services rendered by the Agency shall be outlined in the proposal/contract. 
                  Invoices are due as per the agreed-upon terms. 
                  Late payments may incur additional charges.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                5. Intellectual Property
              </p>

              <p className="desc-3">
                  All original work created by the Agency shall remain its intellectual property unless stated otherwise in writing. 
                  Usage rights for the client shall be as outlined in the agreement.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                6. Confidentiality
              </p>

              <p className="desc-3">
                  Both parties agree to maintain confidentiality regarding sensitive information shared during the engagement. 
                  This includes but is not limited to proprietary data, strategies, or trade secrets.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                7. Termination of Agreement
              </p>

              <p className="desc-3">
                  Either party may terminate the agreement under conditions specified in the contract. 
                  Termination may incur additional costs or obligations.
              </p>
            </div>

            <div>
              <p className='faq_sub_beader'>
                8. Warranties and Liability
              </p>

              <p className="desc-3">
                  The Agency warrants that services provided shall be of professional quality. 
                  The liability of the Agency shall be limited to the fees paid for the services.
              </p>
            </div>
            
            <div>
              <p className='faq_sub_beader'>
                  9. Governing Law
              </p>

              <p className="desc-3">
                  This agreement shall be governed by the laws of Aberdeen Sheriff Court and Justice of the Peace Court. 
                  Any disputes shall be resolved in Aberdeen Sheriff Court and Justice of the Peace Court’s courts.
              </p>
            </div>

            <div className='pb-20'>
              <p className='faq_sub_beader'>
                  10. Miscellaneous
              </p>

              <p className="desc-3">
                  Any modifications to this agreement must be made in writing and signed by both parties. 
                  If any part of this agreement is found invalid, the rest shall remain in effect.
              </p>
            </div>

          </div>
      </section>
    </>
  )
}

export default TermsAndConditions