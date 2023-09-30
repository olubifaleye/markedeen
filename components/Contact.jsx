'use client'

//Imports
import Link from "next/link";
import '@styles/globals.css';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    //Sweet Alert for submitting contact form
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: '#1B4571',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      })
    
    //Email JS Credentials
    const serviceID = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID
    const templateID = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY

    //form values states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    //form input field errors
    const [errors, setErrors] = useState ({})

    const[visible, setVisible] = useState(false);

    // function to handle change in states for form input fields 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name] : value
        })
    }

    const form = useRef();

    const sendEmail = (e) => {

        setVisible(true)

        setTimeout(() =>{
            setVisible(false)   
        }, 10000)

        clearTimeout();

        e.preventDefault();

        const validationErrors = {}

        //function returns true if the input argument is empty
        const isRequired = value => value === '' ? false : true;

        //function returns false if the length argument is not between the min and max argument
        const isBetween = (length, min, max) => length < min || length > max ? false : true;


        //To check the email is valid
        const isEmail = (email) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        };

        //name validation
        const checkName = () => {

            // set valid boolean to false
            let valid = false;
        
            // Set min and max values
            const min = 2;
            const max = 100;
        
            // set variable name to formData.name value
            const name = formData.name.trim();
        
            // Validation for name field to check that it cant be blank 
            // and if its not blank, it must be between min and max integer values
            if (!isRequired(name)) {
                validationErrors.name = 'Name cannot be blank.'
                
            } else if (!isBetween(name.length, min, max)) {
                validationErrors.name = `Name must be between ${min} and ${max} characters.`
            }else{
                valid = true;
            } 
            return valid;
        }

        // email validation
        const checkEmail = () => {

            // set valid boolean to false
            let valid = false;
        
            // set variable email to formData.email value
            const email = formData.email.trim();
        
            // Validation for email field to check that it cant be blank 
            // and if its not blank, it must pass regex validator
            if (!isRequired(email)) {
                validationErrors.email = 'Email cannot be blank.'
            } else if (!isEmail(email)) {
                validationErrors.email = 'Email is not valid.'
            }else{
                valid = true;
            }  
            return valid;
        }

        // subject validation
        const checkSubject = () => {

            // set valid boolean to false
            let valid = false;
        
            // Set min and max values
            const min = 2;
            const max = 100;
        
            // set variable subject to formData.subject value
            const subject = formData.subject.trim();
        
            // Validation for subject field to check that it cant be blank 
            // and if its not blank, it must be between min and max integer values
            if (!isRequired(subject)) {
                validationErrors.subject = 'Subject cannot be blank.'
            } else if (!isBetween(subject.length, min, max)) {
                validationErrors.subject = `Subject must be between ${min} and ${max} characters.`
            }else{
                valid = true;
            }  
            return valid;
        }

        // message validation
        const checkMessage = () => {

            // set valid boolean to false
            let valid = false;
        
            // Set min and max values
            const min = 2;
            const max = 10000;
        
            // set variable subject to formData.message value
            const message = formData.message.trim();
        
            // Validation for message field to check that it cant be blank 
            // and if its not blank, it must be between min and max integer values
            if (!isRequired(message)) {
                validationErrors.message = 'Message cannot be blank.'
            } else if (!isBetween(message.length, min, max)) {
                validationErrors.message = `Message must be between ${min} and ${max} characters.`
            } else{
                valid = true;
            } 

            return valid;
        }

         // assign variables to functions
        let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isSubjectValid = checkSubject(),
        isMessageValid = checkMessage();

         //variable isFormValid is if the other variables for functions returns true
        let isFormValid = isNameValid &&
        isEmailValid &&
        isSubjectValid &&
        isMessageValid;

        setErrors(validationErrors)
   

        if(Object.keys(validationErrors).length === 0 && isFormValid) {

            e.preventDefault();
            
            emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                e.target.reset();

                //Fire a toast top right to show to user that email has been sent
                Toast.fire({
                    icon: 'success',
                    title: 'Email sent successfully!'
                })

            }, (error) => {
                console.log(error.text);
            });
        }
    };


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
                <form ref={form} onSubmit={sendEmail} className="contact-form" id="send-email">
                    <div className="input-control">
                        <label htmlFor="name" hidden className="label-content">Name</label>
                        <input type="text" className="input-textarea" id="name" placeholder="Enter your name" autoComplete="off" name="name" onChange={handleChange}/>
                        <br/>
                        {visible && errors.name && <span className="error_label">{errors.name}</span>}
                    </div>

                    <div className="input-control">
                        <label htmlFor="email" hidden className="label-content">Email</label>
                        <input type="text" className="input-textarea" id="email" placeholder="Enter your email" autoComplete="off" name="email" onChange={handleChange}/>
                        <br/>
                        {visible && errors.email && <span className="error_label">{errors.email}</span>}
                    </div>   

                    <div className="input-control">
                        <label htmlFor="subject" hidden className="label-content">Subject</label>
                        <input type="text" className="input-textarea" id="subject" placeholder="Subject: [Web Development, Reputation Management, Content Marketing, Social Media or Video Marketing]" autoComplete="off" name="subject" onChange={handleChange}/>
                        <br />
                        {visible && errors.subject && <span className="error_label">{errors.subject}</span>}
                    </div>

                    <div className="input-control">
                        <label htmlFor="message" hidden className="label-content">Message</label>
                        <textarea name="message" className="input-textarea" id="message" cols="15" rows="8" placeholder="Type message here..." autoComplete="off" onChange={handleChange}></textarea>
                        <br />
                        {visible && errors.message && <span className="error_label">{errors.message}</span>}
                    </div>

                    <nav className="button_container">
                        <input type="submit" value="Submit" className="outline_btn_2" />
                    </nav>

                </form>
            </div>

        </div>
    </section>
  )
}

export default Contact