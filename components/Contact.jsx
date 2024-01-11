'use client'

//Imports
import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        // Create script element
        const script = document.createElement('script');
        script.src = 'https://link.msgsndr.com/js/form_embed.js';
        script.async = true;
    
        // Append script to the document body
        document.body.appendChild(script);
    
        // Clean up
        return () => {
          document.body.removeChild(script);
        };
      }, []); // Empty dependency array ensures this runs once on mount


  return (
    <section className='main section-7' id="Contact">
        <div className="contact_container">

            {/* Left DIV container which contains text */}
            <div className="left_container">

                <div className="max-md:text-center">
                    <h1 className="head_text_span">
                        Ready to get started?
                    </h1>

                    <p className="desc m-auto">
                        Fill out the form and we'll get in touch with you
                    </p>
                </div>
            </div>

            {/* Right DIV container which contains an IFRAME of a form component from leadconnectorhq */}
            <div className="right_container">
                <iframe
                    src="https://api.leadconnectorhq.com/widget/form/6XXCrxEfLuz87rdAyHpk"
                    style={{width:"100%", height:"100%", border:"none"}}
                    id="inline-6XXCrxEfLuz87rdAyHpk" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Markedeen Contact Us"
                    data-height="557"
                    data-layout-iframe-id="inline-6XXCrxEfLuz87rdAyHpk"
                    data-form-id="6XXCrxEfLuz87rdAyHpk"
                    title="Markedeen Contact Us"
                >
                </iframe>
            </div>
        </div>
    </section>
  )
}

export default Contact