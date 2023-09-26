'use client'

//Imports
import Link from "next/link";
import '@styles/globals.css';

const Contact = () => {
  return (
    <section className='main' id="Contact">
        <div className="our_philosophy_container">
            <div className="left_container">

                <div className="max-md:text-center">
                    <p className="head_text_span">
                        Ready to get started?
                    </p>

                    <p className="desc m-auto">
                        Fill out the form and we'll get in touch with you
                    </p>
                </div>
            </div>

            <div className="right_container bg-box pt-8 pl-6 p-6 rounded-3xl">
               <form action="" className="contact-form" id="send-email">
                    <div className="input-control">
                        <label htmlFor="name" hidden className="label-content">Name</label>
                        <input type="text" className="input-textarea" id="name" placeholder="Enter your name" autoComplete="off" />
                        <br/>
                        <small id="smallName" className="smallText"></small>
                    </div>

                    <div className="input-control">
                        <label htmlFor="email" hidden className="label-content">Email</label>
                        <input type="email" className="input-textarea" id="email" placeholder="Enter your email" autoComplete="off" />
                        <br/>
                        <small id="smallEmail" className="smallText"></small>
                    </div>   

                    <div className="input-control">
                        <label htmlFor="subject" hidden className="label-content">Subject</label>
                        <input type="text" className="input-textarea" id="subject" placeholder="Subject: [Web Development, Reputation Management, Content Marketing, Social Media or Video Marketing]" autoComplete="off" />
                        <br />
                        <small id="smallSubject" className="smallText"></small>
                    </div>

                    <div className="input-control">
                        <label htmlFor="message" hidden className="label-content">Message</label>
                        <textarea name="" className="input-textarea" id="message" cols="15" rows="8" placeholder="Type message here..." autoComplete="off"></textarea>
                        <br />
                        <small id="smallMessage"className="smallText"></small>
                    </div>

                    <nav className="button_container">
                        <Link href="/" className="max-md:pt-6">
                            <button 
                                type="button" 
                                onClick={() => {}}
                                className="outline_btn_2"                       
                            >
                                Submit
                            </button>
                        </Link>
                    </nav>

                </form>
            </div>

        </div>
    </section>
  )
}

export default Contact